import { parseGeoJsonText } from "./GeoJsonUtil";

const workerThreshold = 512 * 1024;
const workerTimeout = 30_000;

export function parseGeoJsonAsync(text: string): Promise<GeoJSON.GeoJSON> {
  if (typeof Worker === "undefined" || text.length < workerThreshold) {
    try {
      return Promise.resolve(parseGeoJsonText(text));
    } catch (error) {
      return Promise.reject(error);
    }
  }

  const id = crypto.randomUUID();
  return new Promise<GeoJSON.GeoJSON>((resolve, reject) => {
    const worker = new Worker(
      new URL("../workers/GeoJsonParser.worker.ts", import.meta.url),
      { type: "module" }
    );
    const timer = setTimeout(() => {
      worker.terminate();
      reject(new Error("GeoJSON 解析超时"));
    }, workerTimeout);

    const finish = () => {
      clearTimeout(timer);
      worker.terminate();
    };

    worker.onmessage = (event: MessageEvent<{
      id: string;
      data?: GeoJSON.GeoJSON;
      error?: string;
    }>) => {
      if (event.data.id !== id) return;
      finish();
      if (event.data.error) {
        reject(new Error(event.data.error));
      } else if (event.data.data) {
        resolve(event.data.data);
      } else {
        reject(new Error("GeoJSON 解析失败"));
      }
    };
    worker.onerror = (event) => {
      finish();
      reject(new Error(event.message || "GeoJSON Worker 执行失败"));
    };
    worker.postMessage({ id, text });
  });
}

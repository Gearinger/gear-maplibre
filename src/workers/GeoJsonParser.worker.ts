import { parseGeoJsonText } from "../common/GeoJsonUtil";

type ParseRequest = {
  id: string;
  text: string;
};

type ParseResponse =
  | { id: string; data: GeoJSON.GeoJSON }
  | { id: string; error: string };

const workerScope = globalThis as unknown as {
  onmessage: ((event: MessageEvent<ParseRequest>) => void) | null;
  postMessage: (message: ParseResponse) => void;
};

workerScope.onmessage = (event) => {
  const { id, text } = event.data;
  try {
    workerScope.postMessage({ id, data: parseGeoJsonText(text) });
  } catch (error) {
    workerScope.postMessage({
      id,
      error: error instanceof Error ? error.message : String(error),
    });
  }
};

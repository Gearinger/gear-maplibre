import {
  loadWorkspaceAsset,
  saveWorkspaceAsset,
  type WorkspaceAssetRecord,
} from "./WorkspaceStorage";
import type { ManagedLayer } from "../types/workspace";

const assetObjectUrls = new Map<string, string>();

function createAssetId() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function blobToDataUrl(blob: Blob) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error ?? new Error("资源读取失败"));
    reader.readAsDataURL(blob);
  });
}

export async function storeWorkspaceAsset(file: File) {
  const id = createAssetId();
  const record: WorkspaceAssetRecord = {
    id,
    name: file.name,
    type: file.type,
    size: file.size,
    createdAt: new Date().toISOString(),
    blob: file,
  };
  await saveWorkspaceAsset(record);
  return {
    id,
    name: file.name,
    type: file.type,
    size: file.size,
  };
}

export async function getWorkspaceAssetObjectUrl(id: string) {
  const cachedUrl = assetObjectUrls.get(id);
  if (cachedUrl) return cachedUrl;
  const record = await loadWorkspaceAsset(id);
  if (!record) {
    throw new Error("本地资源已丢失，请重新导入文件");
  }
  const objectUrl = URL.createObjectURL(record.blob);
  assetObjectUrls.set(id, objectUrl);
  return objectUrl;
}

export function releaseWorkspaceAssetObjectUrl(id?: string) {
  if (!id) return;
  const objectUrl = assetObjectUrls.get(id);
  if (!objectUrl) return;
  URL.revokeObjectURL(objectUrl);
  assetObjectUrls.delete(id);
}

export function releaseAllWorkspaceAssetObjectUrls() {
  for (const objectUrl of assetObjectUrls.values()) {
    URL.revokeObjectURL(objectUrl);
  }
  assetObjectUrls.clear();
}

export async function embedWorkspaceAssetInLayer<T extends ManagedLayer>(
  layer: T
): Promise<T> {
  if (!layer.assetId) return layer;
  const record = await loadWorkspaceAsset(layer.assetId);
  if (!record) {
    throw new Error(`无法导出本地资源：${layer.assetName ?? layer.assetId}`);
  }
  return {
    ...layer,
    url: await blobToDataUrl(record.blob),
    assetId: undefined,
  } as T;
}

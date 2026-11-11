import type { WorkspaceSnapshot } from "../types/workspace";

const databaseName = "gear-map-workspace";
const storeName = "workspace";
const assetStoreName = "assets";
const snapshotKey = "current";

export interface WorkspaceAssetRecord {
  id: string;
  name: string;
  type: string;
  size: number;
  createdAt: string;
  blob: Blob;
}

function openDatabase() {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open(databaseName, 2);
    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains(storeName)) {
        database.createObjectStore(storeName);
      }
      if (!database.objectStoreNames.contains(assetStoreName)) {
        database.createObjectStore(assetStoreName, { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function loadWorkspaceSnapshot() {
  const database = await openDatabase();
  try {
    return await new Promise<WorkspaceSnapshot | null>((resolve, reject) => {
      const transaction = database.transaction(storeName, "readonly");
      const request = transaction.objectStore(storeName).get(snapshotKey);
      request.onsuccess = () => resolve((request.result as WorkspaceSnapshot | undefined) ?? null);
      request.onerror = () => reject(request.error);
    });
  } finally {
    database.close();
  }
}

export async function saveWorkspaceSnapshot(snapshot: WorkspaceSnapshot) {
  const database = await openDatabase();
  const serializable = structuredClone(snapshot);
  try {
    await new Promise<void>((resolve, reject) => {
      const transaction = database.transaction(storeName, "readwrite");
      transaction.objectStore(storeName).put(serializable, snapshotKey);
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error);
    });
  } finally {
    database.close();
  }
}

export async function saveWorkspaceAsset(record: WorkspaceAssetRecord) {
  const database = await openDatabase();
  try {
    await new Promise<void>((resolve, reject) => {
      const transaction = database.transaction(assetStoreName, "readwrite");
      transaction.objectStore(assetStoreName).put(record);
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error);
    });
  } finally {
    database.close();
  }
}

export async function loadWorkspaceAsset(id: string) {
  const database = await openDatabase();
  try {
    return await new Promise<WorkspaceAssetRecord | null>((resolve, reject) => {
      const transaction = database.transaction(assetStoreName, "readonly");
      const request = transaction.objectStore(assetStoreName).get(id);
      request.onsuccess = () =>
        resolve((request.result as WorkspaceAssetRecord | undefined) ?? null);
      request.onerror = () => reject(request.error);
    });
  } finally {
    database.close();
  }
}

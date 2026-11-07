import type { WorkspaceSnapshot } from "../types/workspace";

const databaseName = "gear-map-workspace";
const storeName = "workspace";
const snapshotKey = "current";

function openDatabase() {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open(databaseName, 1);
    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains(storeName)) {
        database.createObjectStore(storeName);
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
  const serializable = JSON.parse(JSON.stringify(snapshot)) as WorkspaceSnapshot;
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

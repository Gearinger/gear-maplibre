import { computed, ref } from "vue";

export function createSnapshotHistory<T>(
  serialize: (value: T) => string,
  limit = 30,
  maxSerializedBytes = 32 * 1024 * 1024
) {
  const entries = ref<T[]>([]) as { value: T[] };
  const entrySizes: number[] = [];
  const index = ref(-1);
  const textEncoder = new TextEncoder();

  const canUndo = computed(() => index.value > 0);
  const canRedo = computed(() =>
    index.value >= 0 && index.value < entries.value.length - 1
  );

  function reset(value: T) {
    entries.value = [value];
    entrySizes.splice(0, entrySizes.length, textEncoder.encode(serialize(value)).byteLength);
    index.value = 0;
  }

  function push(value: T) {
    const serialized = serialize(value);
    const current = entries.value[index.value];
    if (current && serialize(current) === serialized) return false;
    entries.value = entries.value.slice(0, index.value + 1);
    entrySizes.splice(index.value + 1);
    entries.value.push(value);
    entrySizes.push(textEncoder.encode(serialized).byteLength);
    while (entries.value.length > limit) {
      entries.value.shift();
      entrySizes.shift();
    }
    while (
      entries.value.length > 1
      && entrySizes.reduce((total, size) => total + size, 0) > maxSerializedBytes
    ) {
      entries.value.shift();
      entrySizes.shift();
    }
    index.value = entries.value.length - 1;
    return true;
  }

  function undo() {
    if (!canUndo.value) return undefined;
    index.value--;
    return entries.value[index.value];
  }

  function redo() {
    if (!canRedo.value) return undefined;
    index.value++;
    return entries.value[index.value];
  }

  return {
    entries,
    index,
    canUndo,
    canRedo,
    reset,
    push,
    undo,
    redo,
  };
}

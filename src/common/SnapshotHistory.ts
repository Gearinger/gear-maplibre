import { computed, ref } from "vue";

export function createSnapshotHistory<T>(
  serialize: (value: T) => string,
  limit = 30
) {
  const entries = ref<T[]>([]) as { value: T[] };
  const index = ref(-1);

  const canUndo = computed(() => index.value > 0);
  const canRedo = computed(() =>
    index.value >= 0 && index.value < entries.value.length - 1
  );

  function reset(value: T) {
    entries.value = [value];
    index.value = 0;
  }

  function push(value: T) {
    const current = entries.value[index.value];
    if (current && serialize(current) === serialize(value)) return false;
    entries.value = entries.value.slice(0, index.value + 1);
    entries.value.push(value);
    if (entries.value.length > limit) entries.value.shift();
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

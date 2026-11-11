import { describe, expect, test } from "bun:test";
import { createSnapshotHistory } from "./SnapshotHistory";

describe("snapshot history", () => {
  test("undoes and redoes snapshots in order", () => {
    const history = createSnapshotHistory<{ value: number }>(
      (snapshot) => String(snapshot.value)
    );
    history.reset({ value: 1 });
    history.push({ value: 2 });
    history.push({ value: 3 });

    expect(history.undo()?.value).toBe(2);
    expect(history.undo()?.value).toBe(1);
    expect(history.canUndo.value).toBe(false);
    expect(history.redo()?.value).toBe(2);
  });

  test("ignores duplicate snapshots and truncates redo history after a new edit", () => {
    const history = createSnapshotHistory<{ value: number }>(
      (snapshot) => String(snapshot.value),
      3
    );
    history.reset({ value: 1 });
    expect(history.push({ value: 1 })).toBe(false);
    history.push({ value: 2 });
    history.push({ value: 3 });
    history.undo();
    history.push({ value: 4 });

    expect(history.canRedo.value).toBe(false);
    expect(history.entries.value.map((item) => item.value)).toEqual([1, 2, 4]);
  });

  test("keeps only the configured number of snapshots", () => {
    const history = createSnapshotHistory<{ value: number }>(
      (snapshot) => String(snapshot.value),
      2
    );
    history.reset({ value: 1 });
    history.push({ value: 2 });
    history.push({ value: 3 });

    expect(history.entries.value.map((item) => item.value)).toEqual([2, 3]);
    expect(history.undo()?.value).toBe(2);
  });

  test("drops the oldest snapshots when the memory budget is exceeded", () => {
    const history = createSnapshotHistory<{ value: string }>(
      (snapshot) => snapshot.value,
      10,
      10
    );
    history.reset({ value: "1234" });
    history.push({ value: "5678" });
    history.push({ value: "90ab" });

    expect(history.entries.value.map((item) => item.value)).toEqual(["5678", "90ab"]);
    expect(history.canUndo.value).toBe(true);
  });
});

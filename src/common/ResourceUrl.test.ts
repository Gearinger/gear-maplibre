import { describe, expect, test } from "bun:test";
import { normalizeResourceUrl } from "./ResourceUrl";

describe("resource URL normalization", () => {
  test("converts GitHub blob links to raw download links", () => {
    expect(normalizeResourceUrl(
      "https://github.com/KhronosGroup/glTF-Sample-Assets/blob/8f492390ddc7a2ae221a1369ef560589cf8c70fb/Models/Fox/glTF-Binary/Fox.glb"
    )).toBe(
      "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/8f492390ddc7a2ae221a1369ef560589cf8c70fb/Models/Fox/glTF-Binary/Fox.glb"
    );
  });

  test("converts GitHub raw links and preserves query parameters", () => {
    expect(normalizeResourceUrl(
      "https://www.github.com/user/repository/raw/main/models/model.bin?download=1"
    )).toBe(
      "https://raw.githubusercontent.com/user/repository/main/models/model.bin?download=1"
    );
  });

  test("keeps direct, relative, and non-GitHub URLs unchanged", () => {
    const urls = [
      "https://raw.githubusercontent.com/user/repository/main/model.glb",
      "https://example.com/model.glb",
      "./data/model.glb",
      "model.glb",
    ];

    for (const url of urls) {
      expect(normalizeResourceUrl(url)).toBe(url);
    }
  });
});

import * as maplibregl from "maplibre-gl";
import type { PMTiles, Protocol } from "pmtiles";

let pmtilesProtocol: Protocol | undefined;
let cogRegistered = false;

export async function ensurePmtilesProtocol() {
  if (pmtilesProtocol) return pmtilesProtocol;
  const { Protocol } = await import("pmtiles");
  pmtilesProtocol = new Protocol({ metadata: true });
  maplibregl.addProtocol("pmtiles", pmtilesProtocol.tile);
  return pmtilesProtocol;
}

export async function openPmtilesArchive(url: string) {
  const protocol = await ensurePmtilesProtocol();
  const { PMTiles } = await import("pmtiles");
  const rawUrl = url.replace(/^pmtiles:\/\//, "");
  const archive = new PMTiles(rawUrl);
  protocol.add(archive);
  return {
    archive,
    protocolUrl: `pmtiles://${rawUrl}`,
  };
}

export async function ensureCogProtocol() {
  if (cogRegistered) return;
  const { cogProtocol } = await import("@geomatico/maplibre-cog-protocol");
  maplibregl.addProtocol("cog", cogProtocol);
  cogRegistered = true;
}

export async function getCogBounds(url: string) {
  const { getCogMetadata } = await import("@geomatico/maplibre-cog-protocol");
  const metadata = await getCogMetadata(url.replace(/^cog:\/\//, "").replace(/#.*$/, ""));
  return metadata.bbox;
}

export function cogUrl(url: string, dem = false) {
  let next = url.startsWith("cog://") ? url : `cog://${url}`;
  if (dem && !next.endsWith("#dem")) next += "#dem";
  return next;
}

export type { PMTiles };

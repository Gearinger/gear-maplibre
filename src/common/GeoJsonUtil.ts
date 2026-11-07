export function appendGeoJsonFeatures(
  data: GeoJSON.GeoJSON,
  features: GeoJSON.Feature[]
): GeoJSON.FeatureCollection {
  if (data.type === "FeatureCollection") {
    return {
      ...data,
      features: [...data.features, ...features],
    };
  }
  if (data.type === "Feature") {
    return {
      type: "FeatureCollection",
      features: [data, ...features],
    };
  }
  return {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: data,
        properties: {},
      },
      ...features,
    ],
  };
}

export function parseGeoJsonText(text: string): GeoJSON.GeoJSON {
  const data = JSON.parse(text) as unknown;
  if (!data || typeof data !== "object" || !("type" in data)) {
    throw new Error("内容不是有效的 GeoJSON");
  }

  const type = (data as { type?: unknown }).type;
  if (!["FeatureCollection", "Feature", "Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon", "GeometryCollection"].includes(String(type))) {
    throw new Error(`不支持的 GeoJSON 类型：${String(type)}`);
  }
  if (type === "FeatureCollection" && !Array.isArray((data as { features?: unknown }).features)) {
    throw new Error("FeatureCollection 缺少 features 数组");
  }
  if (type === "Feature" && !("geometry" in data)) {
    throw new Error("Feature 缺少 geometry");
  }
  return data as GeoJSON.GeoJSON;
}

export function findGeoJsonFeatureIndex(
  data: GeoJSON.GeoJSON | undefined,
  featureId?: string | number
) {
  if (data?.type !== "FeatureCollection") return undefined;
  const byId = data.features.findIndex((feature) => feature.id === featureId);
  if (byId >= 0) return byId;
  if (
    typeof featureId === "number"
    && featureId >= 0
    && featureId < data.features.length
  ) {
    return featureId;
  }
  return undefined;
}

export function updateGeoJsonFeatureProperties(
  data: GeoJSON.GeoJSON,
  featureIndex: number,
  properties: GeoJSON.GeoJsonProperties
) {
  const feature = getGeoJsonFeature(data, featureIndex);
  if (!feature) throw new Error("找不到目标要素");
  return replaceGeoJsonFeature(data, featureIndex, { ...feature, properties });
}

export function getGeoJsonFeature(
  data: GeoJSON.GeoJSON,
  featureIndex: number
) {
  return data.type === "FeatureCollection"
    ? data.features[featureIndex]
    : data.type === "Feature"
      ? data
      : undefined;
}

export function replaceGeoJsonFeature(
  data: GeoJSON.GeoJSON,
  featureIndex: number,
  feature: GeoJSON.Feature
) {
  if (data.type === "FeatureCollection") {
    if (!data.features[featureIndex]) throw new Error("找不到目标要素");
    return {
      data: {
        ...data,
        features: data.features.map((item, index) =>
          index === featureIndex ? feature : item
        ),
      } satisfies GeoJSON.FeatureCollection,
      feature,
    };
  }
  if (data.type === "Feature") {
    return {
      data: feature satisfies GeoJSON.Feature,
      feature,
    };
  }
  throw new Error("几何对象没有可编辑属性");
}

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
  if (data.type === "FeatureCollection") {
    const feature = data.features[featureIndex];
    if (!feature) throw new Error("找不到目标要素");
    const updatedFeature = { ...feature, properties };
    return {
      data: {
        ...data,
        features: data.features.map((item, index) =>
          index === featureIndex ? updatedFeature : item
        ),
      } satisfies GeoJSON.FeatureCollection,
      feature: updatedFeature,
    };
  }
  if (data.type === "Feature") {
    const feature = { ...data, properties };
    return {
      data: feature satisfies GeoJSON.Feature,
      feature,
    };
  }
  throw new Error("几何对象没有可编辑属性");
}

<template lang="">
  <div id="map"></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import maplibregl, { Feature, Map, StyleSpecification } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import MapboxDraw from "mapbox-gl-draw";
import "mapbox-gl-draw/dist/mapbox-gl-draw.css";
import { geojson } from "flatgeobuf";

/**
 * 添加geojson数据到地图上
 */
function addTestGeoJson(map: Map) {
  map.addSource("testGeoJson", {
    type: "geojson",
    data: "http://192.168.10.95:8999/geoserver/nansha/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=nansha%3Afield&maxFeatures=40000&outputFormat=application%2Fjson",
  });
  map.addLayer({
    id: "testGeoJson",
    type: "fill",
    source: "testGeoJson",
    layout: {},
    paint: {
      "fill-color": "#088",
      "fill-opacity": 0.8,
      "fill-outline-color": "red",
    },
  });

  map.fitBounds(map.getBounds());
  //   map.fitBounds(layer.getBounds());
}

/**
 * 添加pbf数据到地图上
 */
function addPbfLayer(map: Map) {
  map.addSource("pbfLayer", {
    type: "vector",
    tiles: ["http://127.0.0.1:9005/business/field/pbfLayer/field/{z}/{x}/{y}"],
  });
  map.addLayer({
    id: "pbfLayer",
    type: "fill",
    source: "pbfLayer",
    "source-layer": "default",
    "paint": {
      "fill-color": [
        "match",
        ["get", "name"],
        ["0403020000"],
        "#CDEBF2",
        ["0206000000"],
        "#F8CDD0",
        ["0201000000"],
        "#92D050",
        "#F39F72",
      ]
    }
  });

  map.fitBounds(map.getBounds());
}

/**
 * 将 FlatGeoBuf 数据添加到地图上
 * @param fgb FlatGeobuf
 * @param map 地图
 */
async function addFlatGeoBuf(fgb: any, map: Map) {
  const fc = { type: "FeatureCollection", features: [] as any[] };
  let i = 0;

  for await (const f of geojson.deserialize(
    fgb,
    undefined,
    undefined
  ) as AsyncGenerator<any>) {
    fc.features.push({ ...f, id: i });
    i += 1;
  }

  map.addSource("counties", {
    type: "geojson",
    data: fc,
  });
  map.addLayer({
    id: "counties-fill",
    type: "fill",
    source: "counties",
    paint: {
      "fill-color": "#0000FF",
      "fill-opacity": [
        "case",
        ["boolean", ["feature-state", "hover"], false],
        1,
        0.5,
      ],
    },
  });
  map.querySourceFeatures("")
}

// 挂载时初始化地图
onMounted(() => {
  // 创建空白图层样式，用于地图初始化
  const blankStyle: StyleSpecification = {
    version: 8,
    name: "BlankMap",
    sources: {},
    layers: [
      {
        id: "background",
        type: "background",
        paint: {
          // 'background-color': '#08294A' /* 背景颜色 */
          "background-color": "rgba(255, 255, 255, 0)" /* 背景颜色-透明 */,
        },
      },
    ],
  };
  // 初始化地图
  var map = new maplibregl.Map({
    container: "map", // container id
    // style: "https://demotiles.maplibre.org/style.json", // style URL
    style:
      "https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
    // style: blankStyle,
    center: [113.46, 22.88], // starting position [lng, lat]
    zoom: 9, // starting zoom
  });

  // 添加常用地图控件
  map.addControl(new maplibregl.NavigationControl({}));

  // 添加地图绘制控件
  map.addControl(new MapboxDraw(), "top-left");

  // 地图加载时，添加 geojson 数据
  map.on("load", async () => {
    // addTestGeoJson(map);
    addPbfLayer(map);
    // const response = await fetch("./data/fgb.fgb").then((res) =>
    //   addFlatGeoBuf(res.body, map)
    // );
  });

  // 点击地图时，获取点击位置的要素
  map.on("click", (e) => {
    console.log(e);
    let feas = map.queryRenderedFeatures(e.point, {});
    console.log(feas);
  });
});
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>

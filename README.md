此项目是一个本地优先的 GeoJSON 与地图瓦片检查工作台。

主要功能：

- 导入本地 GeoJSON、URL 数据、XYZ 瓦片、矢量瓦片和 Martin Catalog。
- 通过 URL 预览 PMTiles、Cloud Optimized GeoTIFF、地形 DEM 和 3D Tiles。
- 预览本地 glTF/GLB 模型，或将模型放置在指定经纬度和高度。
- 图层重命名、搜索、排序、显隐、透明度和范围定位。
- GeoJSON 颜色、线宽和点半径样式编辑。
- 编辑 GeoJSON 后实时更新地图。
- 在地图上绘制点、线和面到当前 GeoJSON 图层。
- 点击地图要素查看、编辑属性并拖动节点修改几何。
- 支持工作区级别的撤销和重做。
- 超过 512 KB 的 GeoJSON 在 Web Worker 中解析，避免阻塞地图交互。
- 项目自动保存到浏览器 IndexedDB。
- 导入/导出 `.gear-map.json` 项目文件，单独导出当前 GeoJSON。
- 瓦片网格和鼠标坐标辅助调试。

项目使用 Bun 管理和构建。

```shell
# 安装依赖
bun install

# 配置环境变量（复制后填写）
copy .env.example .env.local

# 启动项目
bun run dev

# 构建项目
bun run build

# 运行单元测试
bun test
```

`/home` 和 `/geojson` 会重定向到统一工作台 `/`。

快捷键：

- `Ctrl/Cmd + Z`：撤销
- `Ctrl/Cmd + Shift + Z` 或 `Ctrl/Cmd + Y`：重做
- `Ctrl/Cmd + S`：导出项目
- `Ctrl/Cmd + O`：打开项目
- `Esc`：结束绘制或清空要素选择

格式说明：

- PMTiles 支持栅格与 MVT 矢量瓦片，文件需允许 CORS 范围请求。
- GeoTIFF 使用浏览器端 COG 协议，当前要求数据为 Cloud Optimized GeoTIFF。
- 地形支持普通 Terrain RGB/Terrarium 服务和 COG DEM。
- 3D Tiles 与 glTF/GLB 使用 deck.gl 叠加层，并在首次使用时动态加载。
- 本地 glTF 建议使用内嵌资源的 `.glb`；引用外部纹理的 `.gltf` 建议使用完整 URL。

环境变量说明：

- `VITE_MAP_STYLE_URL`：可选，MapLibre 样式地址。
- `VITE_TIANDITU_TOKEN`：可选，天地图访问令牌。

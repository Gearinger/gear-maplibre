此项目是一个本地优先的 GeoJSON 与地图瓦片检查工作台。

主要功能：

- 导入本地 GeoJSON、URL 数据、XYZ 瓦片、矢量瓦片和 Martin Catalog。
- 图层重命名、搜索、排序、显隐、透明度和范围定位。
- GeoJSON 颜色、线宽和点半径样式编辑。
- 编辑 GeoJSON 后实时更新地图。
- 在地图上绘制点、线和面到当前 GeoJSON 图层。
- 点击地图要素查看、编辑和新增属性。
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

环境变量说明：

- `VITE_MAP_STYLE_URL`：可选，MapLibre 样式地址。
- `VITE_TIANDITU_TOKEN`：可选，天地图访问令牌。

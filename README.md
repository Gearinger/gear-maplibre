此项目使用 Bun 管理和构建。添加了方便调试的小工具。

```shell
# 安装依赖
bun install

# 配置环境变量（复制后填写）
copy .env.example .env.local

# 启动项目
bun run dev

# 构建项目
bun run build
```

环境变量说明：

- `VITE_MAP_STYLE_URL`：可选，MapLibre 样式地址。
- `VITE_TIANDITU_TOKEN`：可选，天地图访问令牌。

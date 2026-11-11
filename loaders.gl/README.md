# Self-hosted loader decoders

These files are copied from the versions pinned by `bun.lockb`:

- `@loaders.gl/draco` 4.4.5: `draco_wasm_wrapper.js`, `draco_decoder.wasm`
- `@loaders.gl/textures` 4.4.5: `basis_encoder.js`, `basis_encoder.wasm`

The 3D Tiles loader uses these local files for Draco-compressed geometry and
KTX2/Basis-compressed textures instead of resolving runtime libraries from
`modules/...` paths or an external CDN.

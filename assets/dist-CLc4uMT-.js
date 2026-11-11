import{i as e,r as t,t as n}from"./rolldown-runtime-COiEfhsA.js";import{_ as r,a as i,b as a,d as o,f as s,g as c,h as l,i as u,l as d,m as f,n as p,o as m,p as h,r as g,s as _,u as v,v as y,x as b,y as x}from"./dist-BYlsj4mL.js";import{C as S,D as C,F as w,T,a as E,ct as D,f as O,j as k,p as A,r as j,rt as M,t as N,ut as P,v as F}from"./assert-zK_AGrv1.js";import{$ as I,J as L,X as ee,d as R,q as te}from"./mat3-C_EBwq0K.js";import{c as ne,d as re,f as z,m as ie,n as ae,r as oe,u as se}from"./dist-C5D-We5R.js";import{d as ce}from"./vendor-maplibre-Bjt3xLf8.js";import{t as B}from"./matrix4-CElYG7tD.js";import{t as le}from"./globe-viewport-vMzH4Biz.js";import{a as V,c as H,d as ue,f as de,i as fe,l as pe,m as me,n as he,o as ge,p as _e,r as ve,s as ye,u as be}from"./dist-DMUBZCIC.js";import{N as xe}from"./memory-conversion-utils-BE_I8QNi.js";import{t as Se}from"./quaternion-nAYGtI0L.js";import{o as Ce}from"./dist-DPNa5eJ4.js";var we=class e{static defaultOptions={core:{type:`auto`,attributions:[],loadOptions:{},loaders:[]}};optionsType;options;data;url;loadOptions;fetch;_needsRefresh=!0;constructor(t,n,r){this.options=r?ie({...r,core:e.defaultOptions},n):{...n},this.data=t,this.url=typeof t==`string`?se(t):``,this.loadOptions=Ee(this.options.core?.loadOptions),this.fetch=Te(this.loadOptions)}setProps(e){this.options=Object.assign(this.options,e),this.setNeedsRefresh()}setNeedsRefresh(){this._needsRefresh=!0}getNeedsRefresh(e=!0){let t=this._needsRefresh;return e&&(this._needsRefresh=!1),t}};function Te(e){let t=e?.core?.fetch;if(t&&typeof t==`function`)return(e,n)=>t(e,n);let n=e?.fetch;return n&&typeof n!=`function`?e=>fetch(e,n):e=>fetch(e)}function Ee(e){let t={...e};e?.core&&(t.core={...e.core});let n=typeof t.baseUri==`string`?t.baseUri:void 0,r=typeof t.baseUrl==`string`?t.baseUrl:void 0;return(n!==void 0||r!==void 0)&&(t.core||={},t.core.baseUrl===void 0&&(t.core.baseUrl=r??n),delete t.baseUri,delete t.baseUrl),t}var De=class{static type=`template`;static testURL=e=>!1},Oe={props:{},name:`gouraudMaterial`,bindingLayout:[{name:`gouraudMaterial`,group:3}],vs:y.replace(`phongMaterial`,`gouraudMaterial`),fs:x.replace(`phongMaterial`,`gouraudMaterial`),source:r.replaceAll(`phongMaterial`,`gouraudMaterial`),defines:{LIGHTING_VERTEX:!0},dependencies:[a,b],uniformTypes:{unlit:`i32`,ambient:`f32`,diffuse:`f32`,shininess:`f32`,specularColor:`vec3<f32>`},defaultUniforms:{unlit:!1,ambient:.35,diffuse:.6,shininess:32,specularColor:[38.25,38.25,38.25]},getUniforms(e){return{...Oe.defaultUniforms,...e}}},ke=`compositeLayer.renderLayers`,Ae=class extends i{get isComposite(){return!0}get isDrawable(){return!1}get isLoaded(){return super.isLoaded&&this.getSubLayers().every(e=>e.isLoaded)}getSubLayers(){return this.internalState&&this.internalState.subLayers||[]}initializeState(e){}setState(e){super.setState(e),this.setNeedsUpdate()}getPickingInfo({info:e}){let{object:t}=e;return t&&t.__source&&t.__source.parent&&t.__source.parent.id===this.id&&(e.object=t.__source.object,e.index=t.__source.index),e}filterSubLayer(e){return!0}shouldRenderSubLayer(e,t){return t&&t.length}getSubLayerClass(e,t){let{_subLayerProps:n}=this.props;return n&&n[e]&&n[e].type||t}getSubLayerRow(e,t,n){return e.__source={parent:this,object:t,index:n},e}getSubLayerAccessor(e){if(typeof e==`function`){let t={index:-1,data:this.props.data,target:[]};return(n,r)=>n&&n.__source?(t.index=n.__source.index,e(n.__source.object,t)):e(n,r)}return e}getSubLayerProps(e={}){let{opacity:t,pickable:n,visible:r,parameters:i,getPolygonOffset:a,highlightedObjectIndex:o,autoHighlight:s,highlightColor:c,coordinateSystem:l,coordinateOrigin:u,wrapLongitude:d,positionFormat:f,modelMatrix:p,extensions:m,fetch:h,operation:g,_subLayerProps:_}=this.props,v={id:``,updateTriggers:{},opacity:t,pickable:n,visible:r,parameters:i,getPolygonOffset:a,highlightedObjectIndex:o,autoHighlight:s,highlightColor:c,coordinateSystem:l,coordinateOrigin:u,wrapLongitude:d,positionFormat:f,modelMatrix:p,extensions:m,fetch:h,operation:g},y=_&&e.id&&_[e.id],b=y&&y.updateTriggers,x=e.id||`sublayer`;if(y){let t=this.props[O],n=e.type?e.type._propTypes:{};for(let e in y){let r=n[e]||t[e];r&&r.type===`accessor`&&(y[e]=this.getSubLayerAccessor(y[e]))}}Object.assign(v,e,y),v.id=`${this.props.id}-${x}`,v.updateTriggers={all:this.props.updateTriggers?.all,...e.updateTriggers,...b};for(let e of m){let t=e.getSubLayerProps.call(this,e);t&&Object.assign(v,t,{updateTriggers:Object.assign(v.updateTriggers,t.updateTriggers)})}return v}_updateAutoHighlight(e){for(let t of this.getSubLayers())t.updateAutoHighlight(e)}_getAttributeManager(){return null}_postUpdate(e,t){let n=this.internalState.subLayers,r=!n||this.needsUpdate();if(r){let e=this.renderLayers();n=E(e,Boolean),this.internalState.subLayers=n}D(ke,this,r,n);for(let e of n)e.parent=this}};Ae.layerName=`CompositeLayer`;var je=class{static get componentName(){return Object.prototype.hasOwnProperty.call(this,`extensionName`)?this.extensionName:``}constructor(e){e&&(this.opts=e)}equals(e){return this===e||this.constructor===e.constructor&&j(this.opts,e.opts,1)}getShaders(e){return null}getSubLayerProps(e){let{defaultProps:t}=e.constructor,n={updateTriggers:{}};for(let e in t)if(e in this.props){let r=t[e],i=this.props[e];n[e]=i,r&&r.type===`accessor`&&(n.updateTriggers[e]=this.props.updateTriggers[e],typeof i==`function`&&(n[e]=this.getSubLayerAccessor(i)))}return n}initializeState(e,t){}updateState(e,t){}onNeedsRedraw(e){}getNeedsPickingBuffer(e){return!1}draw(e,t){}finalizeState(e,t){}};je.defaultProps={},je.extensionName=`LayerExtension`;var Me=class{constructor(e){this.indexStarts=[0],this.vertexStarts=[0],this.vertexCount=0,this.instanceCount=0;let{attributes:t={}}=e;this.typedArrayManager=F,this.attributes={},this._attributeDefs=t,this.opts=e,this.updateGeometry(e)}updateGeometry(e){Object.assign(this.opts,e);let{data:t,buffers:n={},getGeometry:r,geometryBuffer:i,positionFormat:a,dataChanged:o,normalize:s=!0}=this.opts;if(this.data=t,this.getGeometry=r,this.positionSize=i&&i.size||(a===`XY`?2:3),this.buffers=n,this.normalize=s,i&&(N(t.startIndices),this.getGeometry=this.getGeometryFromBuffer(i),s||(n.vertexPositions=i)),this.geometryBuffer=n.vertexPositions,Array.isArray(o))for(let e of o)this._rebuildGeometry(e);else this._rebuildGeometry()}updatePartialGeometry({startRow:e,endRow:t}){this._rebuildGeometry({startRow:e,endRow:t})}getGeometryFromBuffer(e){let t=e.value||e;return ArrayBuffer.isView(t)?_(t,{size:this.positionSize,offset:e.offset,stride:e.stride,startIndices:this.data.startIndices}):null}_allocate(e,t){let{attributes:n,buffers:r,_attributeDefs:i,typedArrayManager:a}=this;for(let o in i)if(o in r)a.release(n[o]),n[o]=null;else{let r=i[o];r.copy=t,n[o]=a.allocate(n[o],e,r)}}_forEachGeometry(e,t,n){let{data:r,getGeometry:i}=this,{iterable:a,objectInfo:o}=m(r,t,n);for(let t of a)o.index++,e(i?i(t,o):null,o.index)}_rebuildGeometry(e){if(!this.data)return;let{indexStarts:t,vertexStarts:n,instanceCount:r}=this,{data:i,geometryBuffer:a}=this,{startRow:o=0,endRow:s=1/0}=e||{},c={};if(e||(t=[0],n=[0]),this.normalize||!a)this._forEachGeometry((e,t)=>{let r=e&&this.normalizeGeometry(e);c[t]=r,n[t+1]=n[t]+(r?this.getGeometrySize(r):0)},o,s),r=n[n.length-1];else if(n=i.startIndices,r=n[i.length]||0,ArrayBuffer.isView(a))r||=a.length/this.positionSize;else if(a instanceof M){let e=this.positionSize*4;r||=a.byteLength/e}else if(a.buffer){let e=a.stride||this.positionSize*4;r||=a.buffer.byteLength/e}else if(a.value){let e=a.value,t=a.stride/e.BYTES_PER_ELEMENT||this.positionSize;r||=e.length/t}this._allocate(r,!!e),this.indexStarts=t,this.vertexStarts=n,this.instanceCount=r;let l={};this._forEachGeometry((e,i)=>{let a=c[i]||e;l.vertexStart=n[i],l.indexStart=t[i];let o=i<n.length-1?n[i+1]:r;l.geometrySize=o-n[i],l.geometryIndex=i,this.updateGeometryAttributes(a,l)},o,s),this.vertexCount=t[t.length-1]}},Ne=`struct ArcUniforms {
  greatCircle: f32,
  useShortestPath: f32,
  numSegments: f32,
  widthScale: f32,
  widthMinPixels: f32,
  widthMaxPixels: f32,
  widthUnits: i32,
};

@group(0) @binding(auto) var<uniform> arc: ArcUniforms;
`,Pe=`layout(std140) uniform arcUniforms {
  bool greatCircle;
  bool useShortestPath;
  float numSegments;
  float widthScale;
  float widthMinPixels;
  float widthMaxPixels;
  highp int widthUnits;
} arc;
`,Fe={name:`arc`,source:Ne,vs:Pe,fs:Pe,uniformTypes:{greatCircle:`f32`,useShortestPath:`f32`,numSegments:`f32`,widthScale:`f32`,widthMinPixels:`f32`,widthMaxPixels:`f32`,widthUnits:`i32`}},U=`const ZERO_OFFSET: vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);

struct Attributes {
  @location(0) instanceSourcePositions: vec3<f32>,
  @location(1) instanceSourcePositions64Low: vec3<f32>,
  @location(2) instanceTargetPositions: vec3<f32>,
  @location(3) instanceTargetPositions64Low: vec3<f32>,
  @location(4) instanceSourceColors: vec4<f32>,
  @location(5) instanceTargetColors: vec4<f32>,
  @location(6) instanceWidths: f32,
  @location(7) instanceHeights: f32,
  @location(8) instanceTilts: f32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) color: vec4<f32>,
  @location(1) uv: vec2<f32>,
  @location(2) pickingColor: vec3<f32>,
  @location(3) isValid: f32,
};

fn paraboloid(
  distance: f32,
  sourceZ: f32,
  targetZ: f32,
  ratio: f32,
  height: f32
) -> f32 {
  let deltaZ = targetZ - sourceZ;
  let dh = distance * height;
  if (dh == 0.0) {
    return sourceZ + deltaZ * ratio;
  }
  let unitZ = deltaZ / dh;
  let p2 = unitZ * unitZ + 1.0;
  let dir = select(0.0, 1.0, deltaZ <= 0.0);
  let z0 = mix(sourceZ, targetZ, dir);
  let r = mix(ratio, 1.0 - ratio, dir);
  return sqrt(max(r * (p2 - r), 0.0)) * dh + z0;
}

fn getExtrusionOffset(lineClipspace: vec2<f32>, side: f32, width: f32) -> vec2<f32> {
  var direction = normalize(lineClipspace * project.viewportSize);
  direction = vec2<f32>(-direction.y, direction.x);
  return direction * side * width / 2.0;
}

fn getSegmentRatio(index: f32) -> f32 {
  return smoothstep(0.0, 1.0, index / max(arc.numSegments - 1.0, 1.0));
}

fn interpolateFlat(
  source: vec3<f32>,
  targetPosition: vec3<f32>,
  ratio: f32,
  height: f32,
  tiltDegrees: f32
) -> vec3<f32> {
  let distance = length(source.xy - targetPosition.xy);
  let z = paraboloid(distance, source.z, targetPosition.z, ratio, height);
  let tiltAngle = radians(tiltDegrees);
  let tiltDirection = normalize(targetPosition.xy - source.xy);
  let tilt = vec2<f32>(-tiltDirection.y, tiltDirection.x) * z * sin(tiltAngle);
  return vec3<f32>(mix(source.xy, targetPosition.xy, ratio) + tilt, z * cos(tiltAngle));
}

// Great circle interpolation
// http://www.movable-type.co.uk/scripts/latlong.html
fn getAngularDistance(source: vec2<f32>, targetPosition: vec2<f32>) -> f32 {
  let sourceRadians = radians(source);
  let targetRadians = radians(targetPosition);
  let sinHalfDelta = sin((sourceRadians - targetRadians) / 2.0);
  let sinHalfDeltaSquared = sinHalfDelta * sinHalfDelta;
  let a = sinHalfDeltaSquared.y +
    cos(sourceRadians.y) * cos(targetRadians.y) * sinHalfDeltaSquared.x;
  return 2.0 * asin(sqrt(a));
}

fn interpolateGreatCircle(
  source: vec3<f32>,
  targetPosition: vec3<f32>,
  source3D: vec3<f32>,
  target3D: vec3<f32>,
  angularDistance: f32,
  ratio: f32,
  height: f32
) -> vec3<f32> {
  var longitudeLatitude: vec2<f32>;

  // If the angular distance is PI, use linear interpolation. Otherwise use spherical interpolation.
  if (abs(angularDistance - PI) < 0.001) {
    longitudeLatitude = (1.0 - ratio) * source.xy + ratio * targetPosition.xy;
  } else {
    let a = sin((1.0 - ratio) * angularDistance);
    let b = sin(ratio * angularDistance);
    let p = source3D.yxz * a + target3D.yxz * b;
    longitudeLatitude = degrees(vec2<f32>(
      atan2(p.y, -p.x),
      atan2(p.z, length(p.xy))
    ));
  }

  let z = paraboloid(
    angularDistance * EARTH_RADIUS,
    source.z,
    targetPosition.z,
    ratio,
    height
  );
  return vec3<f32>(longitudeLatitude, z);
}

@vertex
fn vertexMain(
  attributes: Attributes,
  @builtin(vertex_index) vertexIndex: u32,
  @builtin(instance_index) instanceIndex: u32
) -> Varyings {
  geometry.worldPosition = attributes.instanceSourcePositions;
  geometry.worldPositionAlt = attributes.instanceTargetPositions;

  let segmentIndex = f32(vertexIndex / 2u);
  let segmentSide = select(-1.0, 1.0, vertexIndex % 2u == 1u);
  var segmentRatio = getSegmentRatio(segmentIndex);
  let previousRatio = getSegmentRatio(max(0.0, segmentIndex - 1.0));
  var nextRatio = getSegmentRatio(min(arc.numSegments - 1.0, segmentIndex + 1.0));
  // If this is the first point, use next - current as direction.
  var indexDirection = select(-1.0, 1.0, segmentIndex <= 0.0);
  var isValid = 1.0;

  var currentClip: vec4<f32>;
  var nextClip: vec4<f32>;

  if (
    (arc.greatCircle != 0.0 || project.projectionMode == PROJECTION_MODE_GLOBE) &&
    project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT
  ) {
    let source = project_globe_(vec3<f32>(attributes.instanceSourcePositions.xy, 0.0));
    let targetPosition = project_globe_(vec3<f32>(attributes.instanceTargetPositions.xy, 0.0));
    let angularDistance = getAngularDistance(
      attributes.instanceSourcePositions.xy,
      attributes.instanceTargetPositions.xy
    );

    let previousPosition = interpolateGreatCircle(
      attributes.instanceSourcePositions,
      attributes.instanceTargetPositions,
      source,
      targetPosition,
      angularDistance,
      previousRatio,
      attributes.instanceHeights
    );
    var currentPosition = interpolateGreatCircle(
      attributes.instanceSourcePositions,
      attributes.instanceTargetPositions,
      source,
      targetPosition,
      angularDistance,
      segmentRatio,
      attributes.instanceHeights
    );
    var nextPosition = interpolateGreatCircle(
      attributes.instanceSourcePositions,
      attributes.instanceTargetPositions,
      source,
      targetPosition,
      angularDistance,
      nextRatio,
      attributes.instanceHeights
    );

    if (abs(currentPosition.x - previousPosition.x) > 180.0) {
      indexDirection = -1.0;
      isValid = 0.0;
    } else if (abs(currentPosition.x - nextPosition.x) > 180.0) {
      indexDirection = 1.0;
      isValid = 0.0;
    }
    nextPosition = select(nextPosition, previousPosition, indexDirection < 0.0);
    nextRatio = select(nextRatio, previousRatio, indexDirection < 0.0);

    if (isValid == 0.0) {
      // Split at the antimeridian.
      nextPosition.x += select(360.0, -360.0, nextPosition.x > 0.0);
      let ratio = (
        select(-180.0, 180.0, currentPosition.x > 0.0) - currentPosition.x
      ) / (nextPosition.x - currentPosition.x);
      currentPosition = mix(currentPosition, nextPosition, ratio);
      segmentRatio = mix(segmentRatio, nextRatio, ratio);
    }

    let currentPosition64Low = mix(
      attributes.instanceSourcePositions64Low,
      attributes.instanceTargetPositions64Low,
      segmentRatio
    );
    let nextPosition64Low = mix(
      attributes.instanceSourcePositions64Low,
      attributes.instanceTargetPositions64Low,
      nextRatio
    );
    let currentProjection = project_position_to_clipspace_and_commonspace(
      currentPosition,
      currentPosition64Low,
      ZERO_OFFSET
    );
    currentClip = currentProjection.clipPosition;
    nextClip = project_position_to_clipspace(nextPosition, nextPosition64Low, ZERO_OFFSET);
    geometry.position = currentProjection.commonPosition;
  } else {
    var sourceWorld = attributes.instanceSourcePositions;
    var targetWorld = attributes.instanceTargetPositions;
    if (arc.useShortestPath != 0.0) {
      sourceWorld.x = ((sourceWorld.x + 180.0) % 360.0) - 180.0;
      targetWorld.x = ((targetWorld.x + 180.0) % 360.0) - 180.0;
      let deltaLongitude = targetWorld.x - sourceWorld.x;
      if (deltaLongitude > 180.0) {
        targetWorld.x -= 360.0;
      }
      if (deltaLongitude < -180.0) {
        sourceWorld.x -= 360.0;
      }
    }

    let source = project_position_vec3_f64(
      sourceWorld,
      attributes.instanceSourcePositions64Low
    );
    let targetPosition = project_position_vec3_f64(
      targetWorld,
      attributes.instanceTargetPositions64Low
    );

    // Common x at longitude=-180.
    var antimeridianX = 0.0;
    if (arc.useShortestPath != 0.0) {
      if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
        antimeridianX = -(project.coordinateOrigin.x + 180.0) / 360.0 * TILE_SIZE;
      }
      let thresholdRatio = (antimeridianX - source.x) / (targetPosition.x - source.x);
      if (previousRatio <= thresholdRatio && nextRatio > thresholdRatio) {
        isValid = 0.0;
        indexDirection = sign(segmentRatio - thresholdRatio);
        segmentRatio = thresholdRatio;
      }
    }

    nextRatio = select(nextRatio, previousRatio, indexDirection < 0.0);
    var currentPosition = interpolateFlat(
      source,
      targetPosition,
      segmentRatio,
      attributes.instanceHeights,
      attributes.instanceTilts
    );
    var nextPosition = interpolateFlat(
      source,
      targetPosition,
      nextRatio,
      attributes.instanceHeights,
      attributes.instanceTilts
    );

    if (arc.useShortestPath != 0.0 && nextPosition.x < antimeridianX) {
      currentPosition.x += TILE_SIZE;
      nextPosition.x += TILE_SIZE;
    }

    currentClip = project_common_position_to_clipspace(vec4<f32>(currentPosition, 1.0));
    nextClip = project_common_position_to_clipspace(vec4<f32>(nextPosition, 1.0));
    geometry.position = vec4<f32>(currentPosition, 1.0);
  }

  geometry.uv = vec2<f32>(segmentRatio, segmentSide);
  geometry.pickingColor = picking_getPickingColorFromIndex(instanceIndex);

  let widthPixels = clamp(
    project_unit_size_to_pixel(attributes.instanceWidths * arc.widthScale, arc.widthUnits),
    arc.widthMinPixels,
    arc.widthMaxPixels
  );
#ifdef ANTIALIASING
  var offset = getExtrusionOffset(
#else
  let offset = getExtrusionOffset(
#endif
    (nextClip.xy - currentClip.xy) * indexDirection,
    segmentSide,
    widthPixels
  );
#ifdef ANTIALIASING
  let halfWidthPixels = length(offset);
  if (halfWidthPixels > 0.0) {
    // Keep the declared edge at abs(uv.y) == 1 while rasterizing the outer half of the centered
    // one-device-pixel coverage ramp.
    let coverageScale = 1.0 + 0.5 / project.devicePixelRatio / halfWidthPixels;
    offset *= coverageScale;
    geometry.uv.y *= coverageScale;
  }
#endif

  var output: Varyings;
  output.position = currentClip + vec4<f32>(project_pixel_size_to_clipspace(offset), 0.0, 0.0);
  let color = mix(attributes.instanceSourceColors, attributes.instanceTargetColors, segmentRatio);
  output.color = vec4<f32>(color.rgb, color.a * layer.opacity);
  output.uv = geometry.uv;
  output.pickingColor = geometry.pickingColor;
  output.isValid = isValid;
  return output;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
#ifdef ANTIALIASING
  let edgeCoord = abs(varyings.uv.y);
  let edgePixels = (1.0 - edgeCoord) / max(fwidth(edgeCoord), 1e-6);
#endif

  if (varyings.isValid == 0.0) {
    discard;
  }

#ifdef ANTIALIASING
  // Fragments outside the coverage ramp must not write depth or picking colors.
  if (edgePixels <= -SMOOTH_EDGE_RADIUS) {
    discard;
  }
#endif
  var color = varyings.color;
#ifdef ANTIALIASING
  // Feather one device pixel across the width. Arc segments meet lengthwise, so only soften the
  // two outer edges of the strip.
  color.a *= smoothedge(0.0, edgePixels);
#endif
  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(varyings.pickingColor)) {
      discard;
    }
    return vec4<f32>(varyings.pickingColor, 1.0);
  }
  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(varyings.pickingColor - highlightedObjectColor))) {
      let highlightAlpha = picking.highlightColor.a;
      let blendedAlpha = highlightAlpha + color.a * (1.0 - highlightAlpha);
      if (blendedAlpha > 0.0) {
        let highlightRatio = highlightAlpha / blendedAlpha;
        color = vec4<f32>(
          mix(color.rgb, picking.highlightColor.rgb, highlightRatio),
          blendedAlpha
        );
      }
    }
  }
  return deckgl_premultiplied_alpha(color);
}
`,Ie=`#version 300 es
#define SHADER_NAME arc-layer-vertex-shader
in vec4 instanceSourceColors;
in vec4 instanceTargetColors;
in vec3 instanceSourcePositions;
in vec3 instanceSourcePositions64Low;
in vec3 instanceTargetPositions;
in vec3 instanceTargetPositions64Low;
in float instanceWidths;
in float instanceHeights;
in float instanceTilts;
out vec4 vColor;
out vec2 uv;
out float isValid;
float paraboloid(float distance, float sourceZ, float targetZ, float ratio) {
float deltaZ = targetZ - sourceZ;
float dh = distance * instanceHeights;
if (dh == 0.0) {
return sourceZ + deltaZ * ratio;
}
float unitZ = deltaZ / dh;
float p2 = unitZ * unitZ + 1.0;
float dir = step(deltaZ, 0.0);
float z0 = mix(sourceZ, targetZ, dir);
float r = mix(ratio, 1.0 - ratio, dir);
return sqrt(r * (p2 - r)) * dh + z0;
}
vec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction, float width) {
vec2 dir_screenspace = normalize(line_clipspace * project.viewportSize);
dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);
return dir_screenspace * offset_direction * width / 2.0;
}
float getSegmentRatio(float index) {
return smoothstep(0.0, 1.0, index / (arc.numSegments - 1.0));
}
vec3 interpolateFlat(vec3 source, vec3 target, float segmentRatio) {
float distance = length(source.xy - target.xy);
float z = paraboloid(distance, source.z, target.z, segmentRatio);
float tiltAngle = radians(instanceTilts);
vec2 tiltDirection = normalize(target.xy - source.xy);
vec2 tilt = vec2(-tiltDirection.y, tiltDirection.x) * z * sin(tiltAngle);
return vec3(
mix(source.xy, target.xy, segmentRatio) + tilt,
z * cos(tiltAngle)
);
}
float getAngularDist (vec2 source, vec2 target) {
vec2 sourceRadians = radians(source);
vec2 targetRadians = radians(target);
vec2 sin_half_delta = sin((sourceRadians - targetRadians) / 2.0);
vec2 shd_sq = sin_half_delta * sin_half_delta;
float a = shd_sq.y + cos(sourceRadians.y) * cos(targetRadians.y) * shd_sq.x;
return 2.0 * asin(sqrt(a));
}
vec3 interpolateGreatCircle(vec3 source, vec3 target, vec3 source3D, vec3 target3D, float angularDist, float t) {
vec2 lngLat;
if(abs(angularDist - PI) < 0.001) {
lngLat = (1.0 - t) * source.xy + t * target.xy;
} else {
float a = sin((1.0 - t) * angularDist);
float b = sin(t * angularDist);
vec3 p = source3D.yxz * a + target3D.yxz * b;
lngLat = degrees(vec2(atan(p.y, -p.x), atan(p.z, length(p.xy))));
}
float z = paraboloid(angularDist * EARTH_RADIUS, source.z, target.z, t);
return vec3(lngLat, z);
}
void main(void) {
geometry.worldPosition = instanceSourcePositions;
geometry.worldPositionAlt = instanceTargetPositions;
float segmentIndex = float(gl_VertexID / 2);
float segmentSide = mod(float(gl_VertexID), 2.) == 0. ? -1. : 1.;
float segmentRatio = getSegmentRatio(segmentIndex);
float prevSegmentRatio = getSegmentRatio(max(0.0, segmentIndex - 1.0));
float nextSegmentRatio = getSegmentRatio(min(arc.numSegments - 1.0, segmentIndex + 1.0));
float indexDir = mix(-1.0, 1.0, step(segmentIndex, 0.0));
isValid = 1.0;
uv = vec2(segmentRatio, segmentSide);
geometry.uv = uv;
geometry.pickingColor = picking_getPickingColorFromInstanceID();
vec4 curr;
vec4 next;
vec3 source;
vec3 target;
if ((arc.greatCircle || project.projectionMode == PROJECTION_MODE_GLOBE) && project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
source = project_globe_(vec3(instanceSourcePositions.xy, 0.0));
target = project_globe_(vec3(instanceTargetPositions.xy, 0.0));
float angularDist = getAngularDist(instanceSourcePositions.xy, instanceTargetPositions.xy);
vec3 prevPos = interpolateGreatCircle(instanceSourcePositions, instanceTargetPositions, source, target, angularDist, prevSegmentRatio);
vec3 currPos = interpolateGreatCircle(instanceSourcePositions, instanceTargetPositions, source, target, angularDist, segmentRatio);
vec3 nextPos = interpolateGreatCircle(instanceSourcePositions, instanceTargetPositions, source, target, angularDist, nextSegmentRatio);
if (abs(currPos.x - prevPos.x) > 180.0) {
indexDir = -1.0;
isValid = 0.0;
} else if (abs(currPos.x - nextPos.x) > 180.0) {
indexDir = 1.0;
isValid = 0.0;
}
nextPos = indexDir < 0.0 ? prevPos : nextPos;
nextSegmentRatio = indexDir < 0.0 ? prevSegmentRatio : nextSegmentRatio;
if (isValid == 0.0) {
nextPos.x += nextPos.x > 0.0 ? -360.0 : 360.0;
float t = ((currPos.x > 0.0 ? 180.0 : -180.0) - currPos.x) / (nextPos.x - currPos.x);
currPos = mix(currPos, nextPos, t);
segmentRatio = mix(segmentRatio, nextSegmentRatio, t);
}
vec3 currPos64Low = mix(instanceSourcePositions64Low, instanceTargetPositions64Low, segmentRatio);
vec3 nextPos64Low = mix(instanceSourcePositions64Low, instanceTargetPositions64Low, nextSegmentRatio);
curr = project_position_to_clipspace(currPos, currPos64Low, vec3(0.0), geometry.position);
next = project_position_to_clipspace(nextPos, nextPos64Low, vec3(0.0));
} else {
vec3 source_world = instanceSourcePositions;
vec3 target_world = instanceTargetPositions;
if (arc.useShortestPath) {
source_world.x = mod(source_world.x + 180., 360.0) - 180.;
target_world.x = mod(target_world.x + 180., 360.0) - 180.;
float deltaLng = target_world.x - source_world.x;
if (deltaLng > 180.) target_world.x -= 360.;
if (deltaLng < -180.) source_world.x -= 360.;
}
source = project_position(source_world, instanceSourcePositions64Low);
target = project_position(target_world, instanceTargetPositions64Low);
float antiMeridianX = 0.0;
if (arc.useShortestPath) {
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
antiMeridianX = -(project.coordinateOrigin.x + 180.) / 360. * TILE_SIZE;
}
float thresholdRatio = (antiMeridianX - source.x) / (target.x - source.x);
if (prevSegmentRatio <= thresholdRatio && nextSegmentRatio > thresholdRatio) {
isValid = 0.0;
indexDir = sign(segmentRatio - thresholdRatio);
segmentRatio = thresholdRatio;
}
}
nextSegmentRatio = indexDir < 0.0 ? prevSegmentRatio : nextSegmentRatio;
vec3 currPos = interpolateFlat(source, target, segmentRatio);
vec3 nextPos = interpolateFlat(source, target, nextSegmentRatio);
if (arc.useShortestPath) {
if (nextPos.x < antiMeridianX) {
currPos.x += TILE_SIZE;
nextPos.x += TILE_SIZE;
}
}
curr = project_common_position_to_clipspace(vec4(currPos, 1.0));
next = project_common_position_to_clipspace(vec4(nextPos, 1.0));
geometry.position = vec4(currPos, 1.0);
}
float widthPixels = clamp(
project_size_to_pixel(instanceWidths * arc.widthScale, arc.widthUnits),
arc.widthMinPixels, arc.widthMaxPixels
);
vec3 offset = vec3(
getExtrusionOffset((next.xy - curr.xy) * indexDir, segmentSide, widthPixels),
0.0);
DECKGL_FILTER_SIZE(offset, geometry);
#ifdef ANTIALIASING
float halfWidthPixels = length(offset.xy);
if (halfWidthPixels > 0.0) {
float coverageScale = 1.0 + 0.5 / project.devicePixelRatio / halfWidthPixels;
offset.xy *= coverageScale;
uv.y *= coverageScale;
}
geometry.uv = uv;
#endif
DECKGL_FILTER_GL_POSITION(curr, geometry);
gl_Position = curr + vec4(project_pixel_size_to_clipspace(offset.xy), 0.0, 0.0);
vec4 color = mix(instanceSourceColors, instanceTargetColors, segmentRatio);
vColor = vec4(color.rgb, color.a * layer.opacity);
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,Le=`#version 300 es
#define SHADER_NAME arc-layer-fragment-shader
precision highp float;
in vec4 vColor;
in vec2 uv;
in float isValid;
out vec4 fragColor;
void main(void) {
#ifdef ANTIALIASING
float edgeCoord = abs(uv.y);
float edgePixels = (1.0 - edgeCoord) / max(fwidth(edgeCoord), 1e-6);
#endif
if (isValid == 0.0) {
discard;
}
#ifdef ANTIALIASING
if (edgePixels <= -SMOOTH_EDGE_RADIUS) {
discard;
}
#endif
fragColor = vColor;
geometry.uv = uv;
#ifdef ANTIALIASING
fragColor.a *= smoothedge(0.0, edgePixels);
#endif
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,Re=[0,0,0,255],ze={getSourcePosition:{type:`accessor`,value:e=>e.sourcePosition},getTargetPosition:{type:`accessor`,value:e=>e.targetPosition},getSourceColor:{type:`accessor`,value:Re},getTargetColor:{type:`accessor`,value:Re},getWidth:{type:`accessor`,value:1},getHeight:{type:`accessor`,value:1},getTilt:{type:`accessor`,value:0},greatCircle:!1,numSegments:{type:`number`,value:50,min:1},widthUnits:`pixels`,widthScale:{type:`number`,value:1,min:0},widthMinPixels:{type:`number`,value:0,min:0},widthMaxPixels:{type:`number`,value:2**53-1,min:0},antialiasing:!1},Be=class extends i{getBounds(){return this.getAttributeManager()?.getBounds([`instanceSourcePositions`,`instanceTargetPositions`])}getShaders(){let{antialiasing:e}=this.props;return super.getShaders({vs:Ie,fs:Le,source:U,defines:e?{ANTIALIASING:1}:{},modules:[h,f,s,Fe]})}get wrapLongitude(){return!1}initializeState(){this.getAttributeManager().addInstanced({instanceSourcePositions:{size:3,type:`float64`,fp64:this.use64bitPositions(),transition:!0,accessor:`getSourcePosition`},instanceTargetPositions:{size:3,type:`float64`,fp64:this.use64bitPositions(),transition:!0,accessor:`getTargetPosition`},instanceSourceColors:{size:this.props.colorFormat.length,type:`unorm8`,transition:!0,accessor:`getSourceColor`,defaultValue:Re},instanceTargetColors:{size:this.props.colorFormat.length,type:`unorm8`,transition:!0,accessor:`getTargetColor`,defaultValue:Re},instanceWidths:{size:1,transition:!0,accessor:`getWidth`,defaultValue:1},instanceHeights:{size:1,transition:!0,accessor:`getHeight`,defaultValue:1},instanceTilts:{size:1,transition:!0,accessor:`getTilt`,defaultValue:0}})}updateState(e){super.updateState(e);let{props:t,oldProps:n,changeFlags:r}=e;(r.extensionsChanged||t.antialiasing!==n.antialiasing)&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){let{widthUnits:t,widthScale:n,widthMinPixels:r,widthMaxPixels:i,greatCircle:a,wrapLongitude:o,numSegments:s}=this.props,c={numSegments:s,widthUnits:w[t],widthScale:n,widthMinPixels:r,widthMaxPixels:i,greatCircle:a,useShortestPath:o},l=this.state.model;l.shaderInputs.setProps({arc:c}),l.setVertexCount(s*2),l.draw(this.context.renderPass)}_getModel(){return new d(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),topology:`triangle-strip`,isInstanced:!0})}};Be.layerName=`ArcLayer`,Be.defaultProps=ze;var Ve=new Uint32Array([0,2,1,0,3,2]),He=new Float32Array([0,1,0,0,1,0,1,1]);function Ue(e,t){if(!t)return We(e);let n=Math.max(Math.abs(e[0][0]-e[3][0]),Math.abs(e[1][0]-e[2][0])),r=Math.max(Math.abs(e[1][1]-e[0][1]),Math.abs(e[2][1]-e[3][1])),i=Math.ceil(n/t)+1,a=Math.ceil(r/t)+1,o=(i-1)*(a-1)*6,s=new Uint32Array(o),c=new Float32Array(i*a*2),l=new Float64Array(i*a*3),u=0,d=0;for(let t=0;t<i;t++){let n=t/(i-1);for(let r=0;r<a;r++){let i=r/(a-1),o=Ge(e,n,i);l[u*3+0]=o[0],l[u*3+1]=o[1],l[u*3+2]=o[2]||0,c[u*2+0]=n,c[u*2+1]=1-i,t>0&&r>0&&(s[d++]=u-a,s[d++]=u-a-1,s[d++]=u-1,s[d++]=u-a,s[d++]=u-1,s[d++]=u),u++}}return{vertexCount:o,positions:l,indices:s,texCoords:c}}function We(e){let t=new Float64Array(12);for(let n=0;n<e.length;n++)t[n*3+0]=e[n][0],t[n*3+1]=e[n][1],t[n*3+2]=e[n][2]||0;return{vertexCount:6,positions:t,indices:Ve,texCoords:He}}function Ge(e,t,n){return ee(ee(e[0],e[1],n),ee(e[3],e[2],n),t)}var Ke=`
struct BitmapUniforms {
  bounds: vec4<f32>,
  coordinateConversion: f32,
  desaturate: f32,
  tintColor: vec3<f32>,
  transparentColor: vec4<f32>,
};

@group(0) @binding(auto) var<uniform> bitmap: BitmapUniforms;
@group(0) @binding(auto) var bitmapTexture: texture_2d<f32>;
@group(0) @binding(auto) var bitmapTextureSampler: sampler;
`,qe=`layout(std140) uniform bitmapUniforms {
  vec4 bounds;
  float coordinateConversion;
  float desaturate;
  vec3 tintColor;
  vec4 transparentColor;
} bitmap;
`,Je={name:`bitmap`,source:Ke,vs:qe,fs:qe,uniformTypes:{bounds:`vec4<f32>`,coordinateConversion:`f32`,desaturate:`f32`,tintColor:`vec3<f32>`,transparentColor:`vec4<f32>`}},Ye=`struct Attributes {
  @location(0) positions: vec3<f32>,
  @location(1) positions64Low: vec3<f32>,
  @location(2) texCoords: vec2<f32>,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vTexCoord: vec2<f32>,
  @location(1) vTexPos: vec2<f32>,
  @location(2) pickingColor: vec3<f32>,
  @location(3) pickingDepth: f32,
};

// from degrees to Web Mercator
fn lnglat_to_mercator(lnglat: vec2<f32>) -> vec2<f32> {
  let x = lnglat.x;
  let y = clamp(lnglat.y, -89.9, 89.9);
  return vec2<f32>(
    radians(x) + PI,
    PI + log(tan(PI * 0.25 + radians(y) * 0.5))
  ) * WORLD_SCALE;
}

// from Web Mercator to degrees
fn mercator_to_lnglat(xy: vec2<f32>) -> vec2<f32> {
  let position = xy / WORLD_SCALE;
  return degrees(vec2<f32>(
    position.x - PI,
    atan(exp(position.y - PI)) * 2.0 - PI * 0.5
  ));
}

fn color_desaturate(colorValue: vec3<f32>) -> vec3<f32> {
  let luminance = (colorValue.r + colorValue.g + colorValue.b) * 0.333333333;
  return mix(colorValue, vec3<f32>(luminance), bitmap.desaturate);
}

fn color_tint(colorValue: vec3<f32>) -> vec3<f32> {
  return colorValue * bitmap.tintColor;
}

fn apply_opacity(colorValue: vec3<f32>, alpha: f32) -> vec4<f32> {
  if (bitmap.transparentColor.a == 0.0) {
    return vec4<f32>(colorValue, alpha);
  }
  let blendedAlpha = alpha + bitmap.transparentColor.a * (1.0 - alpha);
  let highLightRatio = alpha / blendedAlpha;
  let blendedRGB = mix(bitmap.transparentColor.rgb, colorValue, highLightRatio);
  return vec4<f32>(blendedRGB, blendedAlpha);
}

fn getUV(position: vec2<f32>) -> vec2<f32> {
  return vec2<f32>(
    (position.x - bitmap.bounds[0]) / (bitmap.bounds[2] - bitmap.bounds[0]),
    (position.y - bitmap.bounds[3]) / (bitmap.bounds[1] - bitmap.bounds[3])
  );
}

// Pack the top 12 bits of two normalized floats into three 8-bit values.
fn packUVsIntoRGB(uv: vec2<f32>) -> vec3<f32> {
  let uv8bit = floor(uv * 256.0);
  let uvFraction = fract(uv * 256.0);
  let uvFraction4bit = floor(uvFraction * 16.0);
  let fractions = uvFraction4bit.x + uvFraction4bit.y * 16.0;
  return vec3<f32>(uv8bit, fractions) / 255.0;
}

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var output: Varyings;
  geometry.worldPosition = attributes.positions;
  geometry.uv = attributes.texCoords;
  geometry.pickingColor = picking_getPickingColorFromIndex(0u);

  let projectedPosition = project_position_to_clipspace_and_commonspace(
    attributes.positions,
    attributes.positions64Low,
    vec3<f32>(0.0)
  );
  geometry.position = projectedPosition.commonPosition;
  output.position = projectedPosition.clipPosition;
  output.vTexCoord = attributes.texCoords;
  output.vTexPos = vec2<f32>(0.0);
  output.pickingColor = geometry.pickingColor;
  output.pickingDepth = output.position.z / output.position.w;

  if (bitmap.coordinateConversion < -0.5) {
    output.vTexPos = geometry.position.xy + project.commonOrigin.xy;
  } else if (bitmap.coordinateConversion > 0.5) {
    output.vTexPos = geometry.worldPosition.xy;
  }

  return output;
}

@fragment
fn fragmentMain(input: Varyings) -> @location(0) vec4<f32> {
  var uv = input.vTexCoord;
  if (bitmap.coordinateConversion < -0.5) {
    uv = getUV(mercator_to_lnglat(input.vTexPos));
  } else if (bitmap.coordinateConversion > 0.5) {
    uv = getUV(lnglat_to_mercator(input.vTexPos));
  }

  let bitmapColor = textureSample(bitmapTexture, bitmapTextureSampler, uv);
  var fragColor = apply_opacity(
    color_tint(color_desaturate(bitmapColor.rgb)),
    bitmapColor.a * layer.opacity
  );

  geometry.uv = uv;

  if (picking.isActive > 0.5) {
    if (picking.isAttribute > 0.5) {
      return vec4<f32>(input.pickingDepth, 0.0, 0.0, 1.0);
    }
    return vec4<f32>(packUVsIntoRGB(uv), 1.0);
  }

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(input.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return deckgl_premultiplied_alpha(fragColor);
}
`,Xe=`#version 300 es
#define SHADER_NAME bitmap-layer-vertex-shader

in vec2 texCoords;
in vec3 positions;
in vec3 positions64Low;

out vec2 vTexCoord;
out vec2 vTexPos;

const vec3 pickingColor = vec3(1.0, 0.0, 0.0);

void main(void) {
  geometry.worldPosition = positions;
  geometry.uv = texCoords;
  geometry.pickingColor = pickingColor;

  gl_Position = project_position_to_clipspace(positions, positions64Low, vec3(0.0), geometry.position);
  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);

  vTexCoord = texCoords;

  if (bitmap.coordinateConversion < -0.5) {
    vTexPos = geometry.position.xy + project.commonOrigin.xy;
  } else if (bitmap.coordinateConversion > 0.5) {
    vTexPos = geometry.worldPosition.xy;
  }

  vec4 color = vec4(0.0);
  DECKGL_FILTER_COLOR(color, geometry);
}
`,Ze=`#version 300 es
#define SHADER_NAME bitmap-layer-fragment-shader

#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D bitmapTexture;

in vec2 vTexCoord;
in vec2 vTexPos;

out vec4 fragColor;

/* projection utils */
const float TILE_SIZE = 512.0;
const float PI = 3.1415926536;
const float WORLD_SCALE = TILE_SIZE / PI / 2.0;

// from degrees to Web Mercator
vec2 lnglat_to_mercator(vec2 lnglat) {
  float x = lnglat.x;
  float y = clamp(lnglat.y, -89.9, 89.9);
  return vec2(
    radians(x) + PI,
    PI + log(tan(PI * 0.25 + radians(y) * 0.5))
  ) * WORLD_SCALE;
}

// from Web Mercator to degrees
vec2 mercator_to_lnglat(vec2 xy) {
  xy /= WORLD_SCALE;
  return degrees(vec2(
    xy.x - PI,
    atan(exp(xy.y - PI)) * 2.0 - PI * 0.5
  ));
}
/* End projection utils */

// apply desaturation
vec3 color_desaturate(vec3 color) {
  float luminance = (color.r + color.g + color.b) * 0.333333333;
  return mix(color, vec3(luminance), bitmap.desaturate);
}

// apply tint
vec3 color_tint(vec3 color) {
  return color * bitmap.tintColor;
}

// blend with background color
vec4 apply_opacity(vec3 color, float alpha) {
  if (bitmap.transparentColor.a == 0.0) {
    return vec4(color, alpha);
  }
  float blendedAlpha = alpha + bitmap.transparentColor.a * (1.0 - alpha);
  float highLightRatio = alpha / blendedAlpha;
  vec3 blendedRGB = mix(bitmap.transparentColor.rgb, color, highLightRatio);
  return vec4(blendedRGB, blendedAlpha);
}

vec2 getUV(vec2 pos) {
  return vec2(
    (pos.x - bitmap.bounds[0]) / (bitmap.bounds[2] - bitmap.bounds[0]),
    (pos.y - bitmap.bounds[3]) / (bitmap.bounds[1] - bitmap.bounds[3])
  );
}


vec3 packUVsIntoRGB(vec2 uv) {
  // Extract the top 8 bits. We want values to be truncated down so we can add a fraction
  vec2 uv8bit = floor(uv * 256.);

  // Calculate the normalized remainders of u and v parts that do not fit into 8 bits
  // Scale and clamp to 0-1 range
  vec2 uvFraction = fract(uv * 256.);
  vec2 uvFraction4bit = floor(uvFraction * 16.);

  // Remainder can be encoded in blue channel, encode as 4 bits for pixel coordinates
  float fractions = uvFraction4bit.x + uvFraction4bit.y * 16.;

  return vec3(uv8bit, fractions) / 255.;
}


void main(void) {
  vec2 uv = vTexCoord;
  if (bitmap.coordinateConversion < -0.5) {
    vec2 lnglat = mercator_to_lnglat(vTexPos);
    uv = getUV(lnglat);
  } else if (bitmap.coordinateConversion > 0.5) {
    vec2 commonPos = lnglat_to_mercator(vTexPos);
    uv = getUV(commonPos);
  }
  vec4 bitmapColor = texture(bitmapTexture, uv);

  fragColor = apply_opacity(color_tint(color_desaturate(bitmapColor.rgb)), bitmapColor.a * layer.opacity);

  geometry.uv = uv;
  DECKGL_FILTER_COLOR(fragColor, geometry);

  if (bool(picking.isActive) && !bool(picking.isAttribute)) {
    // Since instance information is not used, we can use picking color for pixel index
    fragColor.rgb = packUVsIntoRGB(uv);
  }
}
`,Qe={image:{type:`image`,value:null,async:!0},bounds:{type:`array`,value:[1,0,0,1],compare:!0},_imageCoordinateSystem:`default`,desaturate:{type:`number`,min:0,max:1,value:0},transparentColor:{type:`color`,value:[0,0,0,0]},tintColor:{type:`color`,value:[255,255,255]},textureParameters:{type:`object`,ignore:!0,value:null}},$e=class extends i{getShaders(){return super.getShaders({vs:Xe,fs:Ze,source:Ye,modules:[f,h,s,Je]})}initializeState(){this.getAttributeManager().add({indices:{size:1,isIndexed:!0,update:e=>e.value=this.state.mesh.indices,noAlloc:!0},positions:{size:3,type:`float64`,fp64:this.use64bitPositions(),update:e=>e.value=this.state.mesh.positions,noAlloc:!0},texCoords:{size:2,update:e=>e.value=this.state.mesh.texCoords,noAlloc:!0}})}updateState({props:e,oldProps:t,changeFlags:n}){let r=this.getAttributeManager();if(n.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),r.invalidateAll()),e.bounds!==t.bounds){let e=this.state.mesh,t=this._createMesh();this.state.model.setVertexCount(t.vertexCount);for(let n in t)e&&e[n]!==t[n]&&r.invalidate(n);this.setState({mesh:t,...this._getCoordinateUniforms()})}else e._imageCoordinateSystem!==t._imageCoordinateSystem&&this.setState(this._getCoordinateUniforms())}getPickingInfo(e){let{image:t}=this.props,n=e.info;if(!n.color||!t)return n.bitmap=null,n;let{width:r,height:i}=t;n.index=0;let a=et(n.color);return n.bitmap={size:{width:r,height:i},uv:a,pixel:[Math.floor(a[0]*r),Math.floor(a[1]*i)]},n}disablePickingIndex(){this.setState({disablePicking:!0})}restorePickingColors(){this.setState({disablePicking:!1})}_updateAutoHighlight(e){super._updateAutoHighlight({...e,color:this.encodePickingColor(0)})}_createMesh(){let{bounds:e}=this.props,t=e;return tt(e)&&(t=[[e[0],e[1]],[e[0],e[3]],[e[2],e[3]],[e[2],e[1]]]),Ue(t,this.context.viewport.resolution)}_getModel(){let e=this.context.device.type===`webgpu`?this.getAttributeManager().getBufferLayouts({isInstanced:!1}).filter(e=>e.name!==`indices`):this.getAttributeManager().getBufferLayouts();return new d(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:e,topology:`triangle-list`,isInstanced:!1})}draw(e){let{shaderModuleProps:t}=e,{model:n,coordinateConversion:r,bounds:i,disablePicking:a}=this.state,{image:o,desaturate:s,transparentColor:c,tintColor:l}=this.props;if(!(t.picking.isActive&&a)&&o&&n){let e={bitmapTexture:o,bounds:i,coordinateConversion:r,desaturate:s,tintColor:l.slice(0,3).map(e=>e/255),transparentColor:c.map(e=>e/255)};n.shaderInputs.setProps({bitmap:e}),n.draw(this.context.renderPass)}}_getCoordinateUniforms(){let{_imageCoordinateSystem:e}=this.props;if(e!=="default"){let{bounds:t}=this.props;if(!tt(t))throw Error(`_imageCoordinateSystem only supports rectangular bounds`);let n=this.context.viewport.resolution?`lnglat`:`cartesian`;if(e=e===`lnglat`?`lnglat`:`cartesian`,e===`lnglat`&&n===`cartesian`)return{coordinateConversion:-1,bounds:t};if(e===`cartesian`&&n===`lnglat`){let e=S([t[0],t[1]]),n=S([t[2],t[3]]);return{coordinateConversion:1,bounds:[e[0],e[1],n[0],n[1]]}}}return{coordinateConversion:0,bounds:[0,0,0,0]}}};$e.layerName=`BitmapLayer`,$e.defaultProps=Qe;function et(e){let[t,n,r]=e,i=(r&240)/256;return[(t+(r&15)/16)/256,(n+i)/256]}function tt(e){return Number.isFinite(e[0])}var nt=`layout(std140) uniform iconUniforms {
  float sizeScale;
  vec2 iconsTextureDim;
  float sizeBasis;
  float sizeMinPixels;
  float sizeMaxPixels;
  bool billboard;
  highp int sizeUnits;
  float alphaCutoff;
} icon;
`,rt={name:`icon`,vs:nt,fs:nt,uniformTypes:{sizeScale:`f32`,iconsTextureDim:`vec2<f32>`,sizeBasis:`f32`,sizeMinPixels:`f32`,sizeMaxPixels:`f32`,billboard:`f32`,sizeUnits:`i32`,alphaCutoff:`f32`}},it=`#version 300 es
#define SHADER_NAME icon-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceSizes;
in float instanceAngles;
in vec4 instanceColors;
#ifdef USE_ROW_INDEXES
in float rowIndexes;
#endif
in vec4 instanceIconFrames;
in float instanceColorModes;
in vec2 instanceOffsets;
in vec2 instancePixelOffset;
out float vColorMode;
out vec4 vColor;
out vec2 vTextureCoords;
out vec2 uv;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = angle * PI / 180.0;
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
#ifdef USE_ROW_INDEXES
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
#else
geometry.pickingColor = picking_getPickingColorFromInstanceID();
#endif
uv = positions;
vec2 iconSize = instanceIconFrames.zw;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * icon.sizeScale, icon.sizeUnits),
icon.sizeMinPixels, icon.sizeMaxPixels
);
float iconConstraint = icon.sizeBasis == 0.0 ? iconSize.x : iconSize.y;
float instanceScale = iconConstraint == 0.0 ? 0.0 : sizePixels / iconConstraint;
vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;
pixelOffset += instancePixelOffset;
pixelOffset.y *= -1.0;
if (icon.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
DECKGL_FILTER_SIZE(offset_common, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vTextureCoords = mix(
instanceIconFrames.xy,
instanceIconFrames.xy + iconSize,
(positions.xy + 1.0) / 2.0
) / icon.iconsTextureDim;
vColor = instanceColors;
DECKGL_FILTER_COLOR(vColor, geometry);
vColorMode = instanceColorModes;
}
`,at=`#version 300 es
#define SHADER_NAME icon-layer-fragment-shader
precision highp float;
uniform sampler2D iconsTexture;
in float vColorMode;
in vec4 vColor;
in vec2 vTextureCoords;
in vec2 uv;
out vec4 fragColor;
void main(void) {
geometry.uv = uv;
vec4 texColor = texture(iconsTexture, vTextureCoords);
vec3 color = mix(texColor.rgb, vColor.rgb, vColorMode);
float a = texColor.a * layer.opacity * vColor.a;
if (a < icon.alphaCutoff) {
discard;
}
fragColor = vec4(color, a);
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,ot=`struct IconUniforms {
  sizeScale: f32,
  iconsTextureDim: vec2<f32>,
  sizeBasis: f32,
  sizeMinPixels: f32,
  sizeMaxPixels: f32,
  billboard: i32,
  sizeUnits: i32,
  alphaCutoff: f32
};

@group(0) @binding(auto) var<uniform> icon: IconUniforms;
@group(0) @binding(auto) var iconsTexture : texture_2d<f32>;
@group(0) @binding(auto) var iconsTextureSampler : sampler;

fn rotate_by_angle(vertex: vec2<f32>, angle_deg: f32) -> vec2<f32> {
  let angle_radian = angle_deg * PI / 180.0;
  let c = cos(angle_radian);
  let s = sin(angle_radian);
  let rotation = mat2x2<f32>(vec2<f32>(c, s), vec2<f32>(-s, c));
  return rotation * vertex;
}

struct Attributes {
  @builtin(instance_index) instanceIndex : u32,
  @location(0) positions: vec2<f32>,

  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceSizes: f32,
  @location(4) instanceAngles: f32,
  @location(5) instanceColors: vec4<f32>,
  @location(6) instanceIconFrames: vec4<f32>,
  @location(7) instanceColorModes: f32,
  @location(8) instanceOffsets: vec2<f32>,
  @location(9) instancePixelOffset: vec2<f32>,
  PICKING_COLOR_ATTRIBUTE
};

struct Varyings {
  @builtin(position) position: vec4<f32>,

  @location(0) vColorMode: f32,
  @location(1) vColor: vec4<f32>,
  @location(2) vTextureCoords: vec2<f32>,
  @location(3) uv: vec2<f32>,
  @location(4) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(inp: Attributes) -> Varyings {
  // write geometry fields used by filters + FS
  geometry.worldPosition = inp.instancePositions;
  geometry.uv = inp.positions;
  geometry.pickingColor = PICKING_COLOR_VALUE;

  var outp: Varyings;
  outp.uv = inp.positions;

  let iconSize = inp.instanceIconFrames.zw;

  // convert size in meters to pixels, then clamp
  let sizePixels = clamp(
    project_unit_size_to_pixel(inp.instanceSizes * icon.sizeScale, icon.sizeUnits),
    icon.sizeMinPixels, icon.sizeMaxPixels
  );

  // scale icon height to match instanceSize
  let iconConstraint = select(iconSize.y, iconSize.x, icon.sizeBasis == 0.0);
  let instanceScale = select(sizePixels / iconConstraint, 0.0, iconConstraint == 0.0);

  // scale and rotate vertex in "pixel" units; then add per-instance pixel offset
  var pixelOffset = inp.positions / 2.0 * iconSize + inp.instanceOffsets;
  pixelOffset = rotate_by_angle(pixelOffset, inp.instanceAngles) * instanceScale;
  pixelOffset = pixelOffset + inp.instancePixelOffset;
  pixelOffset.y = pixelOffset.y * -1.0;

  if (icon.billboard != 0) {
    var pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, vec3<f32>(0.0)); // TODO, &geometry.position);
    // DECKGL_FILTER_GL_POSITION(pos, geometry);

    var offset = vec3<f32>(pixelOffset, 0.0);
    // DECKGL_FILTER_SIZE(offset, geometry);
    let clipOffset = project_pixel_size_to_clipspace(offset.xy);
    pos = vec4<f32>(pos.x + clipOffset.x, pos.y + clipOffset.y, pos.z, pos.w);
    outp.position = pos;
  } else {
    var offset_common = vec3<f32>(project_pixel_size_vec2(pixelOffset), 0.0);
    // DECKGL_FILTER_SIZE(offset_common, geometry);
    var pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, offset_common); // TODO, &geometry.position);
    // DECKGL_FILTER_GL_POSITION(pos, geometry);
    outp.position = pos;
  }

  let uvMix = (inp.positions.xy + vec2<f32>(1.0, 1.0)) * 0.5;
  outp.vTextureCoords = mix(inp.instanceIconFrames.xy, inp.instanceIconFrames.xy + iconSize, uvMix) / icon.iconsTextureDim;

  outp.vColor = inp.instanceColors;
  // DECKGL_FILTER_COLOR(outp.vColor, geometry);

  outp.vColorMode = inp.instanceColorModes;
  outp.pickingColor = geometry.pickingColor;

  return outp;
}

@fragment
fn fragmentMain(inp: Varyings) -> @location(0) vec4<f32> {
  // expose to deck.gl filter hooks
  geometry.uv = inp.uv;

  let texColor = textureSample(iconsTexture, iconsTextureSampler, inp.vTextureCoords);

  // if colorMode == 0, use pixel color from the texture
  // if colorMode == 1 (or picking), use texture as transparency mask
  let rgb = mix(texColor.rgb, inp.vColor.rgb, inp.vColorMode);
  let a = texColor.a * layer.opacity * inp.vColor.a;

  if (a < icon.alphaCutoff) {
    discard;
  }

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(inp.pickingColor)) {
      discard;
    }
    return vec4<f32>(inp.pickingColor, 1.0);
  }

  var fragColor = deckgl_premultiplied_alpha(vec4<f32>(rgb, a));

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(inp.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return fragColor;
}
`;function st(e){return ot.replace(`PICKING_COLOR_ATTRIBUTE`,e?`@location(10) rowIndexes: u32,`:``).replace(`PICKING_COLOR_VALUE`,e?`picking_getPickingColorFromIndex(inp.rowIndexes)`:`picking_getPickingColorFromIndex(inp.instanceIndex)`)}var ct=1024,lt=4,ut=()=>{},dt={minFilter:`linear`,mipmapFilter:`linear`,magFilter:`linear`,addressModeU:`clamp-to-edge`,addressModeV:`clamp-to-edge`},ft={x:0,y:0,width:0,height:0};function pt(e){return 2**Math.ceil(Math.log2(e))}function mt(e,t,n,r){let i=Math.min(n/t.width,r/t.height),a=Math.floor(t.width*i),o=Math.floor(t.height*i);return i===1?{image:t,width:a,height:o}:(e.canvas.height=o,e.canvas.width=a,e.clearRect(0,0,a,o),e.drawImage(t,0,0,t.width,t.height,0,0,a,o),{image:e.canvas,width:a,height:o})}function ht(e){return e&&(e.id||e.url)}function gt(e){let{device:t}=e;t.type===`webgl`?e.generateMipmapsWebGL():t.type===`webgpu`&&t.generateMipmapsWebGPU(e)}function _t(e,t,n,r){let{width:i,height:a,device:o}=e,s=o.createTexture({format:`rgba8unorm`,width:t,height:n,sampler:r,mipLevels:o.getMipLevelCount(t,n)}),c=o.createCommandEncoder();c.copyTextureToTexture({sourceTexture:e,destinationTexture:s,width:i,height:a});let l=c.finish();return o.submit(l),gt(s),e.destroy(),s}function vt(e,t,n){for(let r=0;r<t.length;r++){let{icon:i,xOffset:a}=t[r],o=ht(i);e[o]={...i,x:a,y:n}}}function yt({icons:e,buffer:t,mapping:n={},xOffset:r=0,yOffset:i=0,rowHeight:a=0,canvasWidth:o}){let s=[];for(let c=0;c<e.length;c++){let l=e[c];if(!n[ht(l)]){let{height:e,width:c}=l;r+c+t>o&&(vt(n,s,i),r=0,i=a+i+t,a=0,s=[]),s.push({icon:l,xOffset:r}),r=r+c+t,a=Math.max(a,e)}}return s.length>0&&vt(n,s,i),{mapping:n,rowHeight:a,xOffset:r,yOffset:i,canvasWidth:o,canvasHeight:pt(a+i+t)}}function bt(e,t,n){if(!e||!t)return null;n||={};let r={},{iterable:i,objectInfo:a}=m(e);for(let e of i){a.index++;let i=t(e,a),o=ht(i);if(!i)throw Error(`Icon is missing.`);if(!i.url)throw Error(`Icon url is missing.`);r[o]||n[o]&&i.url===n[o].url||(r[o]={...i,source:e,sourceIndex:a.index})}return r}var xt=class{constructor(e,{onUpdate:t=ut,onError:n=ut}){this._loadOptions=null,this._texture=null,this._externalTexture=null,this._mapping={},this._samplerParameters=null,this._pendingCount=0,this._autoPacking=!1,this._xOffset=0,this._yOffset=0,this._rowHeight=0,this._buffer=lt,this._canvasWidth=ct,this._canvasHeight=0,this._canvas=null,this.device=e,this.onUpdate=t,this.onError=n}finalize(){this._texture?.delete()}getTexture(){return this._texture||this._externalTexture}getIconMapping(e){let t=this._autoPacking?ht(e):e;return this._mapping[t]||ft}setProps({loadOptions:e,autoPacking:t,iconAtlas:n,iconMapping:r,textureParameters:i}){e&&(this._loadOptions=e),t!==void 0&&(this._autoPacking=t),r&&(this._mapping=r),n&&(this._texture?.delete(),this._texture=null,this._externalTexture=n),i&&(this._samplerParameters=i)}get isLoaded(){return this._pendingCount===0}packIcons(e,t){if(!this._autoPacking||typeof document>`u`)return;let n=Object.values(bt(e,t,this._mapping)||{});if(n.length>0){let{mapping:e,xOffset:t,yOffset:r,rowHeight:i,canvasHeight:a}=yt({icons:n,buffer:this._buffer,canvasWidth:this._canvasWidth,mapping:this._mapping,rowHeight:this._rowHeight,xOffset:this._xOffset,yOffset:this._yOffset});this._rowHeight=i,this._mapping=e,this._xOffset=t,this._yOffset=r,this._canvasHeight=a,this._texture||=this.device.createTexture({format:`rgba8unorm`,data:null,width:this._canvasWidth,height:this._canvasHeight,sampler:this._samplerParameters||dt,mipLevels:this.device.getMipLevelCount(this._canvasWidth,this._canvasHeight)}),this._texture.height!==this._canvasHeight&&(this._texture=_t(this._texture,this._canvasWidth,this._canvasHeight,this._samplerParameters||dt)),this.onUpdate(!0),this._canvas=this._canvas||document.createElement(`canvas`),this._loadIcons(n)}}_loadIcons(e){let t=this._canvas.getContext(`2d`,{willReadFrequently:!0});for(let n of e)this._pendingCount++,oe(n.url,this._loadOptions).then(e=>{let r=ht(n),i=this._mapping[r],{x:a,y:o,width:s,height:c}=i,{image:l,width:u,height:d}=mt(t,e,s,c),f=a+(s-u)/2,p=o+(c-d)/2;this._texture?.copyExternalImage({image:l,x:f,y:p,width:u,height:d}),i.x=f,i.y=p,i.width=u,i.height=d,this._texture&&gt(this._texture),this.onUpdate(u!==s||d!==c)}).catch(e=>{this.onError({url:n.url,source:n.source,sourceIndex:n.sourceIndex,loadOptions:this._loadOptions,error:e})}).finally(()=>{this._pendingCount--})}},St=[0,0,0,255],Ct={iconAtlas:{type:`image`,value:null,async:!0},iconMapping:{type:`object`,value:{},async:!0},sizeScale:{type:`number`,value:1,min:0},billboard:!0,sizeUnits:`pixels`,sizeBasis:`height`,sizeMinPixels:{type:`number`,min:0,value:0},sizeMaxPixels:{type:`number`,min:0,value:2**53-1},alphaCutoff:{type:`number`,value:.05,min:0,max:1},getPosition:{type:`accessor`,value:e=>e.position},getIcon:{type:`accessor`,value:e=>e.icon},getColor:{type:`accessor`,value:St},getSize:{type:`accessor`,value:1},getAngle:{type:`accessor`,value:0},getPixelOffset:{type:`accessor`,value:[0,0]},onIconError:{type:`function`,value:null,optional:!0},textureParameters:{type:`object`,ignore:!0,value:null}},wt=class extends i{getShaders(){let e=!!this.props.data?.attributes?.rowIndexes;return super.getShaders({vs:it,fs:at,source:st(e),defines:e?{USE_ROW_INDEXES:!0}:{},modules:[h,f,s,rt]})}initializeState(){this.state={iconManager:new xt(this.context.device,{onUpdate:this._onUpdate.bind(this),onError:this._onError.bind(this)})},this.getAttributeManager().addInstanced({instancePositions:{size:3,type:`float64`,fp64:this.use64bitPositions(),transition:!0,accessor:`getPosition`},instanceSizes:{size:1,transition:!0,bufferGroup:`icon-instance-data`,accessor:`getSize`,defaultValue:1},instanceIconDefs:{size:7,bufferGroup:`icon-instance-data`,accessor:`getIcon`,transform:this.getInstanceIconDef,shaderAttributes:{instanceOffsets:{size:2,elementOffset:0},instanceIconFrames:{size:4,elementOffset:2},instanceColorModes:{size:1,elementOffset:6}}},instanceColors:{size:this.props.colorFormat.length,type:`unorm8`,transition:!0,bufferGroup:`icon-instance-data`,accessor:`getColor`,defaultValue:St},instanceAngles:{size:1,transition:!0,bufferGroup:`icon-instance-data`,accessor:`getAngle`},instancePixelOffset:{size:2,transition:!0,bufferGroup:`icon-instance-data`,accessor:`getPixelOffset`},...this.props.data?.attributes?.rowIndexes?{rowIndexes:{size:1,type:`uint32`,noAlloc:!0}}:{}})}updateState(e){super.updateState(e);let{props:t,oldProps:n,changeFlags:r}=e,i=this.getAttributeManager(),{iconAtlas:a,iconMapping:o,data:s,getIcon:c,textureParameters:l}=t,{iconManager:u}=this.state;if(typeof a==`string`)return;let d=a||this.internalState.isAsyncPropLoading(`iconAtlas`);u.setProps({loadOptions:t.loadOptions,autoPacking:!d,iconAtlas:a,iconMapping:d?o:null,textureParameters:l}),d?n.iconMapping!==t.iconMapping&&i.invalidate(`getIcon`):(r.dataChanged||r.updateTriggersChanged&&(r.updateTriggersChanged.all||r.updateTriggersChanged.getIcon))&&u.packIcons(s,c),r.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),i.invalidateAll())}get isLoaded(){return super.isLoaded&&this.state.iconManager.isLoaded}finalizeState(e){super.finalizeState(e),this.state.iconManager.finalize()}draw({uniforms:e}){this._drawModel(this.state.model)}_drawModel(e){let{sizeScale:t,sizeBasis:n,sizeMinPixels:r,sizeMaxPixels:i,sizeUnits:a,billboard:o,alphaCutoff:s}=this.props,{iconManager:c}=this.state,l=c.getTexture();if(l){let c={iconsTexture:l,iconsTextureDim:[l.width,l.height],sizeUnits:w[a],sizeScale:t,sizeBasis:+(n===`height`),sizeMinPixels:r,sizeMaxPixels:i,billboard:o,alphaCutoff:s};e.shaderInputs.setProps({icon:c}),e.draw(this.context.renderPass)}}_getModel(e=this.props.id){let t=[-1,-1,1,-1,-1,1,1,1];return new d(this.context.device,{...this.getShaders(),id:e,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new o({topology:`triangle-strip`,attributes:{positions:{size:2,value:new Float32Array(t)}}}),isInstanced:!0})}_onUpdate(e){e?(this.getAttributeManager()?.invalidate(`getIcon`),this.setNeedsUpdate()):this.setNeedsRedraw()}_onError(e){let t=this.getCurrentLayer()?.props.onIconError;t?t(e):P.error(e.error.message)()}getInstanceIconDef(e){let{x:t,y:n,width:r,height:i,mask:a,anchorX:o=r/2,anchorY:s=i/2}=this.state.iconManager.getIconMapping(e);return[r/2-o,i/2-s,t,n,r,i,+!!a]}};wt.defaultProps=Ct,wt.layerName=`IconLayer`;var Tt=`layout(std140) uniform pointCloudUniforms {
  float radiusPixels;
  highp int sizeUnits;
} pointCloud;
`,Et={name:`pointCloud`,source:``,vs:Tt,fs:Tt,uniformTypes:{radiusPixels:`f32`,sizeUnits:`i32`}},Dt=`#version 300 es
#define SHADER_NAME point-cloud-layer-vertex-shader
in vec3 positions;
in vec3 instanceNormals;
in vec4 instanceColors;
in vec3 instancePositions;
in vec3 instancePositions64Low;
out vec4 vColor;
out vec2 unitPosition;
void main(void) {
geometry.worldPosition = instancePositions;
geometry.normal = project_normal(instanceNormals);
unitPosition = positions.xy;
geometry.uv = unitPosition;
geometry.pickingColor = picking_getPickingColorFromInstanceID();
vec3 offset = vec3(positions.xy * project_size_to_pixel(pointCloud.radiusPixels, pointCloud.sizeUnits), 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
#ifdef ANTIALIASING
float triangleRadiusPixels = length(offset.xy);
if (triangleRadiusPixels > 0.0) {
float coverageScale = 1.0 + 1.0 / project.devicePixelRatio / triangleRadiusPixels;
offset.xy *= coverageScale;
unitPosition *= coverageScale;
geometry.uv = unitPosition;
}
#endif
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
vec3 lightColor = lighting_getLightColor(instanceColors.rgb, project.cameraPosition, geometry.position.xyz, geometry.normal);
vColor = vec4(lightColor, instanceColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,Ot=`#version 300 es
#define SHADER_NAME point-cloud-layer-fragment-shader
precision highp float;
in vec4 vColor;
in vec2 unitPosition;
out vec4 fragColor;
void main(void) {
geometry.uv = unitPosition.xy;
float distToCenter = length(unitPosition);
#ifdef ANTIALIASING
float edgePixels = (1.0 - distToCenter) / max(fwidth(distToCenter), 1e-6);
if (edgePixels <= -SMOOTH_EDGE_RADIUS) {
#else
if (distToCenter > 1.0) {
#endif
discard;
}
fragColor = vColor;
#ifdef ANTIALIASING
fragColor.a *= smoothedge(0.0, edgePixels);
#endif
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,kt=`struct PointCloudUniforms {
  radiusPixels: f32,
  sizeUnits: i32,
};

@group(0) @binding(0)
var<uniform> pointCloudUniforms: PointCloudUniforms;

struct Attributes {
  @builtin(instance_index) instanceIndex : u32,
  @builtin(vertex_index) vertexIndex : u32,
  @location(0) positions: vec3<f32>,
  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceNormals: vec3<f32>,
  @location(4) instanceColors: vec4<f32>
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vColor: vec4<f32>,
  @location(1) unitPosition: vec2<f32>,
  @location(2) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  geometry.worldPosition = attributes.instancePositions;

  let centerResult = project_position_to_clipspace_and_commonspace(
    attributes.instancePositions,
    attributes.instancePositions64Low,
    vec3<f32>(0.0)
  );
  geometry.position = centerResult.commonPosition;
  geometry.normal = project_normal(attributes.instanceNormals);

  // Position on the enclosing triangle. Its edges are tangent to the unit circle.
  varyings.unitPosition = attributes.positions.xy;
  geometry.uv = varyings.unitPosition;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.instanceIndex);

  // Find the center of the point and add the current vertex
#ifdef ANTIALIASING
  var offset = vec3<f32>(
#else
  let offset = vec3<f32>(
#endif
    attributes.positions.xy *
      project_unit_size_to_pixel(pointCloudUniforms.radiusPixels, pointCloudUniforms.sizeUnits),
    0.0
  );
  // DECKGL_FILTER_SIZE(offset, geometry);
#ifdef ANTIALIASING
  let triangleRadiusPixels = length(offset.xy);
  if (triangleRadiusPixels > 0.0) {
    // The triangle's inradius is half its vertex radius. Scaling its vertex radius by one device
    // pixel therefore adds half a device pixel around all three tangent points.
    let coverageScale = 1.0 + 1.0 / project.devicePixelRatio / triangleRadiusPixels;
    offset *= coverageScale;
    varyings.unitPosition *= coverageScale;
    geometry.uv = varyings.unitPosition;
  }
#endif

  varyings.position = centerResult.clipPosition;
  // DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
  let clipPixels = project_pixel_size_to_clipspace(offset.xy);
  varyings.position.x += clipPixels.x;
  varyings.position.y += clipPixels.y;

  // Apply lighting
  let lightColor = lighting_getLightColor2(attributes.instanceColors.rgb, project.cameraPosition, geometry.position.xyz, geometry.normal);

  // Apply opacity to instance color, or return instance picking color
  varyings.vColor = vec4(lightColor, attributes.instanceColors.a * layer.opacity);
  // DECKGL_FILTER_COLOR(vColor, geometry);
  varyings.pickingColor = geometry.pickingColor;

  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  // var geometry: Geometry;
  // geometry.uv = unitPosition.xy;

  let distToCenter = length(varyings.unitPosition);
#ifdef ANTIALIASING
  let edgePixels = (1.0 - distToCenter) / max(fwidth(distToCenter), 1e-6);
  if (edgePixels <= -SMOOTH_EDGE_RADIUS) {
#else
  if (distToCenter > 1.0) {
#endif
    discard;
  }

  var fragColor: vec4<f32>;

  fragColor = varyings.vColor;

#ifdef ANTIALIASING
  fragColor.a *= smoothedge(0.0, edgePixels);
#endif

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(varyings.pickingColor)) {
      discard;
    }
    return vec4<f32>(varyings.pickingColor, 1.0);
  }

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(varyings.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  // Apply premultiplied alpha as required by transparent canvas
  fragColor = deckgl_premultiplied_alpha(fragColor);

  return fragColor;
}
`,At=[0,0,0,255],jt=[0,0,1],Mt={sizeUnits:`pixels`,pointSize:{type:`number`,min:0,value:10},antialiasing:!1,getPosition:{type:`accessor`,value:e=>e.position},getNormal:{type:`accessor`,value:jt},getColor:{type:`accessor`,value:At},material:!0,radiusPixels:{deprecatedFor:`pointSize`}};function Nt(e){let{header:t,attributes:n}=e;if(t&&n&&(e.length=t.vertexCount,n.POSITION&&(n.instancePositions=n.POSITION),n.NORMAL&&(n.instanceNormals=n.NORMAL),n.COLOR_0)){let{size:e,value:t}=n.COLOR_0;n.instanceColors={size:e,type:`unorm8`,value:t}}}var Pt=class extends i{getShaders(){let{antialiasing:e}=this.props;return super.getShaders({vs:Dt,fs:Ot,source:kt,defines:e?{ANTIALIASING:1}:{},modules:[h,f,Oe,s,Et]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:`float64`,fp64:this.use64bitPositions(),transition:!0,accessor:`getPosition`},instanceNormals:{size:3,transition:!0,accessor:`getNormal`,defaultValue:jt},instanceColors:{size:this.props.colorFormat.length,type:`unorm8`,transition:!0,accessor:`getColor`,defaultValue:At}})}updateState(e){let{changeFlags:t,props:n,oldProps:r}=e;super.updateState(e),(t.extensionsChanged||n.antialiasing!==r.antialiasing)&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll()),t.dataChanged&&Nt(n.data)}draw({uniforms:e}){let{pointSize:t,sizeUnits:n}=this.props,r=this.state.model,i={sizeUnits:w[n],radiusPixels:t};r.shaderInputs.setProps({pointCloud:i}),r.draw(this.context.renderPass)}_getModel(){let e=[];for(let t=0;t<3;t++){let n=t/3*Math.PI*2;e.push(Math.cos(n)*2,Math.sin(n)*2,0)}return new d(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new o({topology:`triangle-list`,attributes:{positions:new Float32Array(e)}}),isInstanced:!0})}};Pt.layerName=`PointCloudLayer`,Pt.defaultProps=Mt;var Ft=`layout(std140) uniform scatterplotUniforms {
  float radiusScale;
  float radiusMinPixels;
  float radiusMaxPixels;
  float lineWidthScale;
  float lineWidthMinPixels;
  float lineWidthMaxPixels;
  float stroked;
  float filled;
  bool antialiasing;
  bool billboard;
  highp int radiusUnits;
  highp int lineWidthUnits;
} scatterplot;
`,It={name:`scatterplot`,vs:Ft,fs:Ft,source:``,uniformTypes:{radiusScale:`f32`,radiusMinPixels:`f32`,radiusMaxPixels:`f32`,lineWidthScale:`f32`,lineWidthMinPixels:`f32`,lineWidthMaxPixels:`f32`,stroked:`f32`,filled:`f32`,antialiasing:`f32`,billboard:`f32`,radiusUnits:`i32`,lineWidthUnits:`i32`}},Lt=`#version 300 es
#define SHADER_NAME scatterplot-layer-vertex-shader
in vec3 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceRadius;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
#ifdef USE_ROW_INDEXES
in float rowIndexes;
#endif
in vec2 instancePixelOffset;
out vec4 vFillColor;
out vec4 vLineColor;
out vec2 unitPosition;
out float innerUnitRadius;
out float outerRadiusPixels;
void main(void) {
geometry.worldPosition = instancePositions;
outerRadiusPixels = clamp(
project_size_to_pixel(scatterplot.radiusScale * instanceRadius, scatterplot.radiusUnits),
scatterplot.radiusMinPixels, scatterplot.radiusMaxPixels
);
float lineWidthPixels = clamp(
project_size_to_pixel(scatterplot.lineWidthScale * instanceLineWidths, scatterplot.lineWidthUnits),
scatterplot.lineWidthMinPixels, scatterplot.lineWidthMaxPixels
);
outerRadiusPixels += scatterplot.stroked * lineWidthPixels / 2.0;
float edgePadding = scatterplot.antialiasing ? (outerRadiusPixels + SMOOTH_EDGE_RADIUS) / outerRadiusPixels : 1.0;
unitPosition = edgePadding * positions.xy;
geometry.uv = unitPosition;
#ifdef USE_ROW_INDEXES
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
#else
geometry.pickingColor = picking_getPickingColorFromInstanceID();
#endif
innerUnitRadius = 1.0 - scatterplot.stroked * lineWidthPixels / outerRadiusPixels;
if (scatterplot.billboard) {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = edgePadding * positions * outerRadiusPixels;
offset.xy += instancePixelOffset;
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset = edgePadding * positions * project_pixel_size(outerRadiusPixels);
offset.xy += project_pixel_size(instancePixelOffset);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vFillColor, geometry);
vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vLineColor, geometry);
}
`,Rt=`#version 300 es
#define SHADER_NAME scatterplot-layer-fragment-shader
precision highp float;
in vec4 vFillColor;
in vec4 vLineColor;
in vec2 unitPosition;
in float innerUnitRadius;
in float outerRadiusPixels;
out vec4 fragColor;
void main(void) {
geometry.uv = unitPosition;
float distToCenter = length(unitPosition) * outerRadiusPixels;
float inCircle = scatterplot.antialiasing ?
smoothedge(distToCenter, outerRadiusPixels) :
step(distToCenter, outerRadiusPixels);
if (inCircle == 0.0) {
discard;
}
if (scatterplot.stroked > 0.5) {
float isLine = scatterplot.antialiasing ?
smoothedge(innerUnitRadius * outerRadiusPixels, distToCenter) :
step(innerUnitRadius * outerRadiusPixels, distToCenter);
if (scatterplot.filled > 0.5) {
fragColor = mix(vFillColor, vLineColor, isLine);
} else {
if (isLine == 0.0) {
discard;
}
fragColor = vec4(vLineColor.rgb, vLineColor.a * isLine);
}
} else if (scatterplot.filled < 0.5) {
discard;
} else {
fragColor = vFillColor;
}
fragColor.a *= inCircle;
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,zt=`// Main shaders

struct ScatterplotUniforms {
  radiusScale: f32,
  radiusMinPixels: f32,
  radiusMaxPixels: f32,
  lineWidthScale: f32,
  lineWidthMinPixels: f32,
  lineWidthMaxPixels: f32,
  stroked: f32,
  filled: i32,
  antialiasing: i32,
  billboard: i32,
  radiusUnits: i32,
  lineWidthUnits: i32,
};

@group(0) @binding(0) var<uniform> scatterplot: ScatterplotUniforms;

struct Attributes {
  @builtin(instance_index) instanceIndex : u32,
  @builtin(vertex_index) vertexIndex : u32,
  @location(0) positions: vec3<f32>,
  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceRadius: f32,
  @location(4) instanceLineWidths: f32,
  @location(5) instanceFillColors: vec4<f32>,
  @location(6) instanceLineColors: vec4<f32>,
  @location(7) instancePixelOffset: vec2<f32>,
  PICKING_COLOR_ATTRIBUTE
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vFillColor: vec4<f32>,
  @location(1) vLineColor: vec4<f32>,
  @location(2) unitPosition: vec2<f32>,
  @location(3) innerUnitRadius: f32,
  @location(4) outerRadiusPixels: f32,
  @location(5) pickingColor: vec3<f32>,
  @location(6) clipCoordinates: vec2<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  // Draw an inline geometry constant array clip space triangle to verify that rendering works.
  // var positions = array<vec2<f32>, 3>(vec2(0.0, 0.5), vec2(-0.5, -0.5), vec2(0.5, -0.5));
  // if (attributes.instanceIndex == 0) {
  //   varyings.position = vec4<f32>(positions[attributes.vertexIndex], 0.0, 1.0);
  //   return varyings;
  // }

  geometry.worldPosition = attributes.instancePositions;

  // Multiply out radius and clamp to limits
  varyings.outerRadiusPixels = clamp(
    project_unit_size_to_pixel(scatterplot.radiusScale * attributes.instanceRadius, scatterplot.radiusUnits),
    scatterplot.radiusMinPixels, scatterplot.radiusMaxPixels
  );

  // Multiply out line width and clamp to limits
  let lineWidthPixels = clamp(
    project_unit_size_to_pixel(scatterplot.lineWidthScale * attributes.instanceLineWidths, scatterplot.lineWidthUnits),
    scatterplot.lineWidthMinPixels, scatterplot.lineWidthMaxPixels
  );

  // outer radius needs to offset by half stroke width
  varyings.outerRadiusPixels += scatterplot.stroked * lineWidthPixels / 2.0;
  // Expand geometry to accommodate edge smoothing
  // WGSL selects the second value when the condition is true, so keep the antialiased path second.
  let edgePadding = select(
    1.0,
    (varyings.outerRadiusPixels + SMOOTH_EDGE_RADIUS) / varyings.outerRadiusPixels,
    scatterplot.antialiasing != 0
  );

  // position on the containing square in [-1, 1] space
  varyings.unitPosition = edgePadding * attributes.positions.xy;
  geometry.uv = varyings.unitPosition;
  geometry.pickingColor = PICKING_COLOR_VALUE;

  varyings.innerUnitRadius = 1.0 - scatterplot.stroked * lineWidthPixels / varyings.outerRadiusPixels;

  if (scatterplot.billboard != 0) {
    let projectedPosition = project_position_to_clipspace_and_commonspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      vec3<f32>(0.0)
    );
    geometry.position = projectedPosition.commonPosition;
    varyings.position = projectedPosition.clipPosition;
    // DECKGL_FILTER_GL_POSITION(varyings.position, geometry);
    var offset = edgePadding * attributes.positions * varyings.outerRadiusPixels;
    offset = vec3<f32>(offset.xy + attributes.instancePixelOffset, offset.z);
    // DECKGL_FILTER_SIZE(offset, geometry);
    let clipPixels = project_pixel_size_to_clipspace(offset.xy);
    varyings.position = vec4<f32>(varyings.position.x + clipPixels.x, varyings.position.y + clipPixels.y, varyings.position.z, varyings.position.w);
    geometry.position = vec4<f32>(
      geometry.position.xy + project_pixel_size_vec2(offset.xy),
      geometry.position.zw
    );
  } else {
    var offset = edgePadding * attributes.positions * project_pixel_size_float(varyings.outerRadiusPixels);
    offset = vec3<f32>(offset.xy + project_pixel_size_vec2(attributes.instancePixelOffset), offset.z);
    // DECKGL_FILTER_SIZE(offset, geometry);
    let projectedPosition = project_position_to_clipspace_and_commonspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      offset
    );
    geometry.position = projectedPosition.commonPosition;
    varyings.position = projectedPosition.clipPosition;
    // DECKGL_FILTER_GL_POSITION(varyings.position, geometry);
  }

  varyings.clipCoordinates = geometry.position.xy;
  clip_filterPosition(&varyings.position, geometry.worldPosition.xy);

  // Apply opacity to instance color, or return instance picking color
  varyings.vFillColor = vec4<f32>(attributes.instanceFillColors.rgb, attributes.instanceFillColors.a * layer.opacity);
  // DECKGL_FILTER_COLOR(varyings.vFillColor, geometry);
  varyings.vLineColor = vec4<f32>(attributes.instanceLineColors.rgb, attributes.instanceLineColors.a * layer.opacity);
  // DECKGL_FILTER_COLOR(varyings.vLineColor, geometry);
  varyings.pickingColor = geometry.pickingColor;

  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  // var geometry: Geometry;
  // geometry.uv = unitPosition;

  let distToCenter = length(varyings.unitPosition) * varyings.outerRadiusPixels;
  let inCircle = select(
    step(distToCenter, varyings.outerRadiusPixels),
    smoothedge(distToCenter, varyings.outerRadiusPixels),
    scatterplot.antialiasing != 0
  );

  if (inCircle == 0.0) {
    discard;
  }

  var fragColor: vec4<f32>;

  if (scatterplot.stroked != 0) {
    let isLine = select(
      step(varyings.innerUnitRadius * varyings.outerRadiusPixels, distToCenter),
      smoothedge(varyings.innerUnitRadius * varyings.outerRadiusPixels, distToCenter),
      scatterplot.antialiasing != 0
    );

    if (scatterplot.filled != 0) {
      fragColor = mix(varyings.vFillColor, varyings.vLineColor, isLine);
    } else {
      if (isLine == 0.0) {
        discard;
      }
      fragColor = vec4<f32>(varyings.vLineColor.rgb, varyings.vLineColor.a * isLine);
    }
  } else if (scatterplot.filled == 0) {
    discard;
  } else {
    fragColor = varyings.vFillColor;
  }

  fragColor.a *= inCircle;

  clip_filterColor(varyings.clipCoordinates);

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(varyings.pickingColor)) {
      discard;
    }
    return vec4<f32>(varyings.pickingColor, 1.0);
  }

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(varyings.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  // Apply premultiplied alpha as required by transparent canvas
  fragColor = deckgl_premultiplied_alpha(fragColor);

  return fragColor;
  // return vec4<f32>(0, 0, 1, 1);
}
`;function Bt(e){return zt.replace(`PICKING_COLOR_ATTRIBUTE`,e?`@location(8) rowIndexes: u32,`:``).replace(`PICKING_COLOR_VALUE`,e?`picking_getPickingColorFromIndex(attributes.rowIndexes)`:`picking_getPickingColorFromIndex(attributes.instanceIndex)`)}var Vt=0,Ht=1,Ut={name:`clip`,source:`\
struct ClipUniforms {
  enabled: i32,
  mode: i32,
  bounds: vec4<f32>,
};

@group(2) @binding(auto) var<uniform> clipUniforms: ClipUniforms;

fn clip_isInBounds(coordinates: vec2<f32>) -> bool {
  return coordinates.x >= clipUniforms.bounds.x &&
    coordinates.y >= clipUniforms.bounds.y &&
    coordinates.x < clipUniforms.bounds.z &&
    coordinates.y < clipUniforms.bounds.w;
}

fn clip_filterPosition(position: ptr<function, vec4<f32>>, instanceCoordinates: vec2<f32>) {
  if (
    clipUniforms.enabled != 0 &&
    clipUniforms.mode == ${Ht} &&
    !clip_isInBounds(instanceCoordinates)
  ) {
    *position = vec4<f32>(2.0, 2.0, 2.0, 1.0);
  }
}

fn clip_filterColor(geometryCoordinates: vec2<f32>) {
  if (
    clipUniforms.enabled != 0 &&
    clipUniforms.mode == ${Vt} &&
    !clip_isInBounds(geometryCoordinates)
  ) {
    discard;
  }
}
`,props:{},uniforms:{},bindingLayout:[{name:`clip`,group:2}],uniformTypes:{enabled:`i32`,mode:`i32`,bounds:`vec4<f32>`},defaultUniforms:{enabled:0,mode:Vt,bounds:[0,0,1,1]},getUniforms(e={}){let t={};return e.enabled!==void 0&&(t.enabled=+!!e.enabled),e.mode!==void 0&&(t.mode=e.mode===`instance`?Ht:Vt),e.bounds!==void 0&&(t.bounds=e.bounds),t}},Wt=[0,0,0,255],Gt={radiusUnits:`meters`,radiusScale:{type:`number`,min:0,value:1},radiusMinPixels:{type:`number`,min:0,value:0},radiusMaxPixels:{type:`number`,min:0,value:2**53-1},lineWidthUnits:`meters`,lineWidthScale:{type:`number`,min:0,value:1},lineWidthMinPixels:{type:`number`,min:0,value:0},lineWidthMaxPixels:{type:`number`,min:0,value:2**53-1},stroked:!1,filled:!0,billboard:!1,antialiasing:!0,getPosition:{type:`accessor`,value:e=>e.position},getRadius:{type:`accessor`,value:1},getFillColor:{type:`accessor`,value:Wt},getLineColor:{type:`accessor`,value:Wt},getLineWidth:{type:`accessor`,value:1},getPixelOffset:{type:`accessor`,value:[0,0]},strokeWidth:{deprecatedFor:`getLineWidth`},outline:{deprecatedFor:`stroked`},getColor:{deprecatedFor:[`getFillColor`,`getLineColor`]}},Kt=class extends i{getShaders(){let e=!!this.props.data?.attributes?.rowIndexes;return super.getShaders({vs:Lt,fs:Rt,source:Bt(e),defines:e?{USE_ROW_INDEXES:!0}:{},modules:[h,f,s,It,...this.context.device.type===`webgpu`?[Ut]:[]]})}initializeState(){let e=this.props.data?.attributes?.rowIndexes?{rowIndexes:{size:1,type:`uint32`,noAlloc:!0}}:{};this.getAttributeManager().addInstanced({instancePositions:{size:3,type:`float64`,fp64:this.use64bitPositions(),transition:!0,accessor:`getPosition`},instanceRadius:{size:1,transition:!0,accessor:`getRadius`,defaultValue:1,bufferGroup:`scatterplot-instance-data`},instanceFillColors:{size:this.props.colorFormat.length,transition:!0,type:`unorm8`,accessor:`getFillColor`,defaultValue:[0,0,0,255],bufferGroup:`scatterplot-instance-data`},instanceLineColors:{size:this.props.colorFormat.length,transition:!0,type:`unorm8`,accessor:`getLineColor`,defaultValue:[0,0,0,255],bufferGroup:`scatterplot-instance-data`},instanceLineWidths:{size:1,transition:!0,accessor:`getLineWidth`,defaultValue:1,bufferGroup:`scatterplot-instance-data`},instancePixelOffset:{size:2,transition:!0,accessor:`getPixelOffset`,bufferGroup:`scatterplot-instance-data`},...e})}updateState(e){super.updateState(e),e.changeFlags.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){let{radiusUnits:t,radiusScale:n,radiusMinPixels:r,radiusMaxPixels:i,stroked:a,filled:o,billboard:s,antialiasing:c,lineWidthUnits:l,lineWidthScale:u,lineWidthMinPixels:d,lineWidthMaxPixels:f}=this.props,p={stroked:a,filled:o,billboard:s,antialiasing:c,radiusUnits:w[t],radiusScale:n,radiusMinPixels:r,radiusMaxPixels:i,lineWidthUnits:w[l],lineWidthScale:u,lineWidthMinPixels:d,lineWidthMaxPixels:f},m=this.state.model;m.shaderInputs.setProps({scatterplot:p}),m.draw(this.context.renderPass)}_getModel(){let e=[-1,-1,0,1,-1,0,-1,1,0,1,1,0];return new d(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new o({topology:`triangle-strip`,attributes:{positions:{size:3,value:new Float32Array(e)}}}),isInstanced:!0})}};Kt.defaultProps=Gt,Kt.layerName=`ScatterplotLayer`;var qt={CLOCKWISE:1,COUNTER_CLOCKWISE:-1};function Jt(e,t,n={}){return Yt(e,n)!==t&&(Qt(e,n),!0)}function Yt(e,t={}){return Math.sign(Zt(e,t))}var Xt={x:0,y:1,z:2};function Zt(e,t={}){let{start:n=0,end:r=e.length,plane:i=`xy`}=t,a=t.size||2,o=0,s=Xt[i[0]],c=Xt[i[1]];for(let t=n,i=r-a;t<r;t+=a)o+=(e[t+s]-e[i+s])*(e[t+c]+e[i+c]),i=t;return o/2}function Qt(e,t){let{start:n=0,end:r=e.length,size:i=2}=t,a=(r-n)/i,o=Math.floor(a/2);for(let t=0;t<o;++t){let r=n+t*i,o=n+(a-1-t)*i;for(let t=0;t<i;++t){let n=e[r+t];e[r+t]=e[o+t],e[o+t]=n}}}function $t(e,t){let n=t.length,r=e.length;if(r>0){let i=!0;for(let a=0;a<n;a++)if(e[r-n+a]!==t[a]){i=!1;break}if(i)return!1}for(let i=0;i<n;i++)e[r+i]=t[i];return!0}function en(e,t){let n=t.length;for(let r=0;r<n;r++)e[r]=t[r]}function tn(e,t,n,r,i=[]){let a=r+t*n;for(let t=0;t<n;t++)i[t]=e[a+t];return i}function nn(e,t,n,r,i=[]){let a,o;if(n&8)a=(r[3]-e[1])/(t[1]-e[1]),o=3;else if(n&4)a=(r[1]-e[1])/(t[1]-e[1]),o=1;else if(n&2)a=(r[2]-e[0])/(t[0]-e[0]),o=2;else if(n&1)a=(r[0]-e[0])/(t[0]-e[0]),o=0;else return null;for(let n=0;n<e.length;n++)i[n]=(o&1)===n?r[o]:a*(t[n]-e[n])+e[n];return i}function rn(e,t){let n=0;return e[0]<t[0]?n|=1:e[0]>t[2]&&(n|=2),e[1]<t[1]?n|=4:e[1]>t[3]&&(n|=8),n}function an(e,t){let{size:n=2,broken:r=!1,gridResolution:i=10,gridOffset:a=[0,0],startIndex:o=0,endIndex:s=e.length}=t||{},c=(s-o)/n,l=[],u=[l],d=tn(e,0,n,o),f,p,m=un(d,i,a,[]),h=[];$t(l,d);for(let t=1;t<c;t++){for(f=tn(e,t,n,o,f),p=rn(f,m);p;){nn(d,f,p,m,h);let e=rn(h,m);e&&(nn(d,h,e,m,h),p=e),$t(l,h),en(d,h),dn(m,i,p),r&&l.length>n&&(l=[],u.push(l),$t(l,d)),p=rn(f,m)}$t(l,f),en(d,f)}return r?u:u[0]}var on=0,sn=1;function cn(e,t=null,n){if(!e.length)return[];let{size:r=2,gridResolution:i=10,gridOffset:a=[0,0],edgeTypes:o=!1}=n||{},s=[],c=[{pos:e,types:o?Array(e.length/r).fill(sn):null,holes:t||[]}],l=[[],[]],u=[];for(;c.length;){let{pos:e,types:t,holes:n}=c.shift();fn(e,r,n[0]||e.length,l),u=un(l[0],i,a,u);let d=rn(l[1],u);if(d){let i=ln(e,t,r,0,n[0]||e.length,u,d),a={pos:i[0].pos,types:i[0].types,holes:[]},s={pos:i[1].pos,types:i[1].types,holes:[]};c.push(a,s);for(let c=0;c<n.length;c++)i=ln(e,t,r,n[c],n[c+1]||e.length,u,d),i[0]&&(a.holes.push(a.pos.length),a.pos=pn(a.pos,i[0].pos),o&&(a.types=pn(a.types,i[0].types))),i[1]&&(s.holes.push(s.pos.length),s.pos=pn(s.pos,i[1].pos),o&&(s.types=pn(s.types,i[1].types)))}else{let r={positions:e};o&&(r.edgeTypes=t),n.length&&(r.holeIndices=n),s.push(r)}}return s}function ln(e,t,n,r,i,a,o){let s=(i-r)/n,c=[],l=[],u=[],d=[],f=[],p,m,h,g=tn(e,s-1,n,r),_=Math.sign(o&8?g[1]-a[3]:g[0]-a[2]),v=t&&t[s-1],y=0,b=0;for(let i=0;i<s;i++)p=tn(e,i,n,r,p),m=Math.sign(o&8?p[1]-a[3]:p[0]-a[2]),h=t&&t[r/n+i],m&&_&&_!==m&&(nn(g,p,o,a,f),$t(c,f)&&u.push(v),$t(l,f)&&d.push(v)),m<=0?($t(c,p)&&u.push(h),y-=m):u.length&&(u[u.length-1]=on),m>=0?($t(l,p)&&d.push(h),b+=m):d.length&&(d[d.length-1]=on),en(g,p),_=m,v=h;return[y?{pos:c,types:t&&u}:null,b?{pos:l,types:t&&d}:null]}function un(e,t,n,r){let i=Math.floor((e[0]-n[0])/t)*t+n[0],a=Math.floor((e[1]-n[1])/t)*t+n[1];return r[0]=i,r[1]=a,r[2]=i+t,r[3]=a+t,r}function dn(e,t,n){n&8?(e[1]+=t,e[3]+=t):n&4?(e[1]-=t,e[3]-=t):n&2?(e[0]+=t,e[2]+=t):n&1&&(e[0]-=t,e[2]-=t)}function fn(e,t,n,r){let i=1/0,a=-1/0,o=1/0,s=-1/0;for(let r=0;r<n;r+=t){let t=e[r],n=e[r+1];i=t<i?t:i,a=t>a?t:a,o=n<o?n:o,s=n>s?n:s}return r[0][0]=i,r[0][1]=o,r[1][0]=a,r[1][1]=s,r}function pn(e,t){for(let n=0;n<t.length;n++)e.push(t[n]);return e}var mn=85.051129;function hn(e,t){let{size:n=2,startIndex:r=0,endIndex:i=e.length,normalize:a=!0}=t||{},o=e.slice(r,i);yn(o,n,0,i-r);let s=an(o,{size:n,broken:!0,gridResolution:360,gridOffset:[-180,-180]});if(a)for(let e of s)bn(e,n);return s}function gn(e,t=null,n){let{size:r=2,normalize:i=!0,edgeTypes:a=!1}=n||{};t||=[];let o=[],s=[],c=0,l=0;for(let i=0;i<=t.length;i++){let a=t[i]||e.length,u=l,d=_n(e,r,c,a);for(let t=d;t<a;t++)o[l++]=e[t];for(let t=c;t<d;t++)o[l++]=e[t];yn(o,r,u,l),vn(o,r,u,l,n?.maxLatitude),c=a,s[i]=l}s.pop();let u=cn(o,s,{size:r,gridResolution:360,gridOffset:[-180,-180],edgeTypes:a});if(i)for(let e of u)bn(e.positions,r);return u}function _n(e,t,n,r){let i=-1,a=-1;for(let o=n+1;o<r;o+=t){let t=Math.abs(e[o]);t>i&&(i=t,a=o-1)}return a}function vn(e,t,n,r,i=mn){let a=e[n],o=e[r-t];if(Math.abs(a-o)>180){let r=tn(e,0,t,n);r[0]+=Math.round((o-a)/360)*360,$t(e,r),r[1]=Math.sign(r[1])*i,$t(e,r),r[0]=a,$t(e,r)}}function yn(e,t,n,r){let i=e[0],a;for(let o=n;o<r;o+=t){a=e[o];let t=a-i;(t>180||t<-180)&&(a-=Math.round(t/360)*360),e[o]=i=a}}function bn(e,t){let n,r=e.length/t;for(let i=0;i<r&&(n=e[i*t],(n+180)%360==0);i++);let i=-Math.round(n/360)*360;if(i!==0)for(let n=0;n<r;n++)e[n*t]+=i}var xn=class extends o{constructor(e){let{indices:t,attributes:n}=Sn(e);super({...e,topology:`line-list`,indices:t,attributes:n})}};function Sn(e){let{radius:t,height:n=1,nradial:r=10}=e,{vertices:i}=e;i&&(P.assert(i.length>=r),i=i.flatMap(e=>[e[0],e[1]]),Jt(i,qt.COUNTER_CLOCKWISE));let a=n>0,o=r+1,s=a?o*3+1:r,c=Math.PI*2/r,l=new Uint16Array(a?r*3*2:0),u=new Float32Array(s*3),d=new Float32Array(s*3),f=0;if(a){for(let e=0;e<o;e++){let a=e*c,o=e%r,s=Math.sin(a),l=Math.cos(a);for(let e=0;e<2;e++)u[f+0]=i?i[o*2]:l*t,u[f+1]=i?i[o*2+1]:s*t,u[f+2]=(1/2-e)*n,d[f+0]=i?i[o*2]:l,d[f+1]=i?i[o*2+1]:s,f+=3}u[f+0]=u[f-3],u[f+1]=u[f-2],u[f+2]=u[f-1],f+=3}for(let e=+!a;e<o;e++){let a=Math.floor(e/2)*Math.sign(.5-e%2),o=a*c,s=(a+r)%r,l=Math.sin(o),p=Math.cos(o);u[f+0]=i?i[s*2]:p*t,u[f+1]=i?i[s*2+1]:l*t,u[f+2]=n/2,d[f+2]=1,f+=3}if(a){let e=0;for(let t=0;t<r;t++)l[e++]=t*2+0,l[e++]=t*2+2,l[e++]=t*2+0,l[e++]=t*2+1,l[e++]=t*2+1,l[e++]=t*2+3}return{indices:l,attributes:{POSITION:{size:3,value:u},NORMAL:{size:3,value:d}}}}var Cn=`struct ColumnUniforms {
  radius: f32,
  angle: f32,
  offset: vec2<f32>,
  extruded: f32,
  stroked: f32,
  isStroke: f32,
  coverage: f32,
  elevationScale: f32,
  edgeDistance: f32,
  widthScale: f32,
  widthMinPixels: f32,
  widthMaxPixels: f32,
  radiusUnits: i32,
  widthUnits: i32,
};

@group(0) @binding(auto) var<uniform> column: ColumnUniforms;
`,wn=`layout(std140) uniform columnUniforms {
  float radius;
  float angle;
  vec2 offset;
  bool extruded;
  bool stroked;
  bool isStroke;
  float coverage;
  float elevationScale;
  float edgeDistance;
  float widthScale;
  float widthMinPixels;
  float widthMaxPixels;
  highp int radiusUnits;
  highp int widthUnits;
} column;
`,Tn={name:`column`,source:Cn,vs:wn,fs:wn,uniformTypes:{radius:`f32`,angle:`f32`,offset:`vec2<f32>`,extruded:`f32`,stroked:`f32`,isStroke:`f32`,coverage:`f32`,elevationScale:`f32`,edgeDistance:`f32`,widthScale:`f32`,widthMinPixels:`f32`,widthMaxPixels:`f32`,radiusUnits:`i32`,widthUnits:`i32`}},En=`struct Attributes {
  @builtin(instance_index) instanceIndex: u32,
  @location(0) positions: vec3<f32>,
  @location(1) normals: vec3<f32>,
  @location(2) instancePositions: vec3<f32>,
  @location(3) instancePositions64Low: vec3<f32>,
  @location(4) instanceElevations: f32,
  @location(5) instanceFillColors: vec4<f32>,
  @location(6) instanceLineColors: vec4<f32>,
  @location(7) instanceStrokeWidths: f32
};

fn getRotationMatrix(angle: f32) -> mat2x2<f32> {
  let s = sin(angle);
  let c = cos(angle);
  return mat2x2<f32>(
    vec2<f32>(c, s),
    vec2<f32>(-s, c)
  );
}

fn getOffset(
  positions: vec3<f32>,
  strokeOffsetRatio: f32,
  dotRadius: f32,
  rotationMatrix: mat2x2<f32>
) -> vec3<f32> {
  var offset = (rotationMatrix * positions.xy * strokeOffsetRatio + column.offset) * dotRadius;
  if (column.radiusUnits == UNIT_METERS) {
    offset = project_size_vec2(offset);
  } else if (column.radiusUnits == UNIT_PIXELS) {
    offset = project_pixel_size_vec2(offset);
  }
  return vec3<f32>(offset, 0.0);
}
`,Dn=`\
${En}

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) color: vec4<f32>
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  geometry.worldPosition = attributes.instancePositions;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.instanceIndex);

  let isStroke = column.isStroke > 0.5;
  let baseColor = select(attributes.instanceFillColors, attributes.instanceLineColors, isStroke);
  let rotationMatrix = getRotationMatrix(column.angle);

  var elevation = 0.0;
  var strokeOffsetRatio = 1.0;

  if (column.extruded > 0.5) {
    elevation =
      attributes.instanceElevations * (attributes.positions.z + 1.0) / 2.0 * column.elevationScale;
  } else if (column.stroked > 0.5) {
    let widthPixels = clamp(
      project_unit_size_to_pixel(attributes.instanceStrokeWidths * column.widthScale, column.widthUnits),
      column.widthMinPixels,
      column.widthMaxPixels
    ) / 2.0;
    let halfOffset =
      project_pixel_size_float(widthPixels) /
      project_size_float(column.edgeDistance * column.coverage * column.radius);
    if (isStroke) {
      strokeOffsetRatio -= sign(attributes.positions.z) * halfOffset;
    } else {
      strokeOffsetRatio -= halfOffset;
    }
  }

  let shouldRender = select(0.0, 1.0, baseColor.a > 0.0 && attributes.instanceElevations >= 0.0);
  let dotRadius = column.radius * column.coverage * shouldRender;
  let centroidPosition =
    vec3<f32>(
      attributes.instancePositions.xy,
      attributes.instancePositions.z + elevation
    );
  let offset = getOffset(attributes.positions, strokeOffsetRatio, dotRadius, rotationMatrix);
  let projected = project_position_to_clipspace_and_commonspace(
    centroidPosition,
    attributes.instancePositions64Low,
    offset
  );

  geometry.position = projected.commonPosition;
  geometry.normal = project_normal(vec3<f32>(rotationMatrix * attributes.normals.xy, attributes.normals.z));

  let lightColor = lighting_getLightColor2(
    baseColor.rgb,
    project.cameraPosition,
    geometry.position.xyz,
    geometry.normal
  );

  varyings.position = projected.clipPosition;
  varyings.color = vec4<f32>(
    select(baseColor.rgb, lightColor, column.extruded > 0.5 && !isStroke),
    baseColor.a * layer.opacity
  );

  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = vec2<f32>(0.0);
  return deckgl_premultiplied_alpha(varyings.color);
}
`,On=`\
${En}

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) color: vec4<f32>,
  @location(1) cameraPosition: vec3<f32>,
  @location(2) positionCommonspace: vec4<f32>
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  geometry.worldPosition = attributes.instancePositions;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.instanceIndex);

  let isStroke = column.isStroke > 0.5;
  let baseColor = select(attributes.instanceFillColors, attributes.instanceLineColors, isStroke);
  let rotationMatrix = getRotationMatrix(column.angle);

  var elevation = 0.0;
  var strokeOffsetRatio = 1.0;

  if (column.extruded > 0.5) {
    elevation =
      attributes.instanceElevations * (attributes.positions.z + 1.0) / 2.0 * column.elevationScale;
  } else if (column.stroked > 0.5) {
    let widthPixels = clamp(
      project_unit_size_to_pixel(attributes.instanceStrokeWidths * column.widthScale, column.widthUnits),
      column.widthMinPixels,
      column.widthMaxPixels
    ) / 2.0;
    let halfOffset =
      project_pixel_size_float(widthPixels) /
      project_size_float(column.edgeDistance * column.coverage * column.radius);
    if (isStroke) {
      strokeOffsetRatio -= sign(attributes.positions.z) * halfOffset;
    } else {
      strokeOffsetRatio -= halfOffset;
    }
  }

  let shouldRender = select(0.0, 1.0, baseColor.a > 0.0 && attributes.instanceElevations >= 0.0);
  let dotRadius = column.radius * column.coverage * shouldRender;
  let centroidPosition =
    vec3<f32>(
      attributes.instancePositions.xy,
      attributes.instancePositions.z + elevation
    );
  let offset = getOffset(attributes.positions, strokeOffsetRatio, dotRadius, rotationMatrix);
  let projected = project_position_to_clipspace_and_commonspace(
    centroidPosition,
    attributes.instancePositions64Low,
    offset
  );

  geometry.position = projected.commonPosition;
  geometry.normal = project_normal(vec3<f32>(rotationMatrix * attributes.normals.xy, attributes.normals.z));

  varyings.position = projected.clipPosition;
  varyings.color = vec4<f32>(baseColor.rgb, baseColor.a * layer.opacity);
  varyings.cameraPosition = project.cameraPosition;
  varyings.positionCommonspace = projected.commonPosition;

  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = vec2<f32>(0.0);

  var fragColor = varyings.color;
  if (column.extruded > 0.5 && column.isStroke < 0.5) {
    // WebGPU's screen-space Y axis reverses the derivative orientation used by GLSL flat shading.
    let normal = normalize(cross(dpdy(varyings.positionCommonspace.xyz), dpdx(varyings.positionCommonspace.xyz)));
    fragColor = vec4<f32>(
      lighting_getLightColor2(
        varyings.color.rgb,
        varyings.cameraPosition,
        varyings.positionCommonspace.xyz,
        normal
      ),
      varyings.color.a
    );
  }

  return deckgl_premultiplied_alpha(fragColor);
}
`;function kn(e){return e?On:Dn}var An=`#version 300 es
#define SHADER_NAME column-layer-vertex-shader
in vec3 positions;
in vec3 normals;
in vec3 instancePositions;
in float instanceElevations;
in vec3 instancePositions64Low;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
in float instanceStrokeWidths;
out vec4 vColor;
#ifdef FLAT_SHADING
out vec3 cameraPosition;
out vec4 position_commonspace;
#endif
void main(void) {
geometry.worldPosition = instancePositions;
vec4 color = column.isStroke ? instanceLineColors : instanceFillColors;
mat2 rotationMatrix = mat2(cos(column.angle), sin(column.angle), -sin(column.angle), cos(column.angle));
float elevation = 0.0;
float strokeOffsetRatio = 1.0;
if (column.extruded) {
elevation = instanceElevations * (positions.z + 1.0) / 2.0 * column.elevationScale;
} else if (column.stroked) {
float widthPixels = clamp(
project_size_to_pixel(instanceStrokeWidths * column.widthScale, column.widthUnits),
column.widthMinPixels, column.widthMaxPixels) / 2.0;
float halfOffset = project_pixel_size(widthPixels) / project_size(column.edgeDistance * column.coverage * column.radius);
if (column.isStroke) {
strokeOffsetRatio -= sign(positions.z) * halfOffset;
} else {
strokeOffsetRatio -= halfOffset;
}
}
float shouldRender = float(color.a > 0.0 && instanceElevations >= 0.0);
float dotRadius = column.radius * column.coverage * shouldRender;
geometry.pickingColor = picking_getPickingColorFromInstanceID();
vec3 centroidPosition = vec3(instancePositions.xy, instancePositions.z + elevation);
vec3 centroidPosition64Low = instancePositions64Low;
vec2 offset = (rotationMatrix * positions.xy * strokeOffsetRatio + column.offset) * dotRadius;
if (column.radiusUnits == UNIT_METERS) {
offset = project_size(offset);
} else if (column.radiusUnits == UNIT_PIXELS) {
offset = project_pixel_size(offset);
}
vec3 pos = vec3(offset, 0.);
DECKGL_FILTER_SIZE(pos, geometry);
gl_Position = project_position_to_clipspace(centroidPosition, centroidPosition64Low, pos, geometry.position);
geometry.normal = project_normal(vec3(rotationMatrix * normals.xy, normals.z));
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
if (column.extruded && !column.isStroke) {
#ifdef FLAT_SHADING
cameraPosition = project.cameraPosition;
position_commonspace = geometry.position;
vColor = vec4(color.rgb, color.a * layer.opacity);
#else
vec3 lightColor = lighting_getLightColor(color.rgb, project.cameraPosition, geometry.position.xyz, geometry.normal);
vColor = vec4(lightColor, color.a * layer.opacity);
#endif
} else {
vColor = vec4(color.rgb, color.a * layer.opacity);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,jn=`#version 300 es
#define SHADER_NAME column-layer-fragment-shader
precision highp float;
out vec4 fragColor;
in vec4 vColor;
#ifdef FLAT_SHADING
in vec3 cameraPosition;
in vec4 position_commonspace;
#endif
void main(void) {
fragColor = vColor;
geometry.uv = vec2(0.);
#ifdef FLAT_SHADING
if (column.extruded && !column.isStroke && !bool(picking.isActive)) {
vec3 normal = normalize(cross(dFdx(position_commonspace.xyz), dFdy(position_commonspace.xyz)));
fragColor.rgb = lighting_getLightColor(vColor.rgb, cameraPosition, position_commonspace.xyz, normal);
}
#endif
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,Mn=[0,0,0,255],Nn={name:`geometry`,stepMode:`vertex`,byteStride:24,attributes:[{attribute:`positions`,format:`float32x3`,byteOffset:0},{attribute:`normals`,format:`float32x3`,byteOffset:12}]},Pn={diskResolution:{type:`number`,min:4,value:20},vertices:null,radius:{type:`number`,min:0,value:1e3},angle:{type:`number`,value:0},offset:{type:`array`,value:[0,0]},coverage:{type:`number`,min:0,max:1,value:1},elevationScale:{type:`number`,min:0,value:1},radiusUnits:`meters`,lineWidthUnits:`meters`,lineWidthScale:1,lineWidthMinPixels:0,lineWidthMaxPixels:2**53-1,extruded:!0,wireframe:!1,filled:!0,stroked:!1,flatShading:!1,getPosition:{type:`accessor`,value:e=>e.position},getFillColor:{type:`accessor`,value:Mn},getLineColor:{type:`accessor`,value:Mn},getLineWidth:{type:`accessor`,value:1},getElevation:{type:`accessor`,value:1e3},material:!0,getColor:{deprecatedFor:[`getFillColor`,`getLineColor`]}},Fn=class extends i{getShaders(){let e={},{flatShading:t}=this.props;return t&&(e.FLAT_SHADING=1),super.getShaders({vs:An,fs:jn,source:kn(t),defines:e,modules:[h,f,t?c:Oe,s,Tn]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:`float64`,fp64:this.use64bitPositions(),transition:!0,accessor:`getPosition`},instanceElevations:{size:1,transition:!0,accessor:`getElevation`},instanceFillColors:{size:this.props.colorFormat.length,type:`unorm8`,transition:!0,accessor:`getFillColor`,defaultValue:Mn},instanceLineColors:{size:this.props.colorFormat.length,type:`unorm8`,transition:!0,accessor:`getLineColor`,defaultValue:Mn},instanceStrokeWidths:{size:1,accessor:`getLineWidth`,transition:!0}})}updateState(e){super.updateState(e);let{props:t,oldProps:n,changeFlags:r}=e,i=r.extensionsChanged||t.flatShading!==n.flatShading;i&&(this.state.models?.forEach(e=>e.destroy()),this.setState(this._getModels()),this.getAttributeManager().invalidateAll());let a=this.getNumInstances();this.state.fillModel.setInstanceCount(a),this.state.strokeModel.setInstanceCount(a),this.state.wireframeModel.setInstanceCount(a),(i||t.diskResolution!==n.diskResolution||t.vertices!==n.vertices||t.extruded!==n.extruded||t.stroked!==n.stroked)&&this._updateGeometry(t)}getGeometry(e,t,n){let r=new xn({radius:1,height:n?2:0,vertices:t,nradial:e}),i=0;if(t)for(let n=0;n<e;n++){let r=t[n],a=Math.sqrt(r[0]*r[0]+r[1]*r[1]);i+=a/e}else i=1;return this.setState({edgeDistance:Math.cos(Math.PI/e)*i}),r}_getModels(){let e=this.getShaders(),t=[...this.getAttributeManager().getBufferLayouts(),Nn],n=new d(this.context.device,{...e,id:`${this.props.id}-fill`,bufferLayout:t,isInstanced:!0}),r=new d(this.context.device,{...e,id:`${this.props.id}-stroke`,bufferLayout:t,isInstanced:!0}),i=new d(this.context.device,{...e,id:`${this.props.id}-wireframe`,bufferLayout:t,isInstanced:!0});return{fillModel:n,strokeModel:r,wireframeModel:i,models:[i,n,r]}}_updateGeometry({diskResolution:e,vertices:t,extruded:n,stroked:r}){let i=this.getGeometry(e,t,n||r),a=i.attributes.POSITION,s=i.attributes.NORMAL;if(this._setFillGeometry(new o({topology:`triangle-strip`,attributes:{POSITION:a,NORMAL:s}})),!n&&r){let t=a.value.length/3;this._setStrokeGeometry(new o({topology:`triangle-strip`,vertexCount:t-e-1,attributes:{POSITION:a,NORMAL:s}}))}n&&this._setWireframeGeometry(i)}_setFillGeometry(e){let t=v(e,{attributes:[`POSITION`,`NORMAL`]});this.state.fillModel.setGeometry(t)}_setStrokeGeometry(e){let t=v(e,{attributes:[`POSITION`,`NORMAL`]});this.state.strokeModel.setGeometry(t)}_setWireframeGeometry(e){let t=v(e,{attributes:[`POSITION`,`NORMAL`]}),n=this.state.wireframeModel;n.setGeometry(t),n.setTopology(`line-list`)}draw({uniforms:e}){let{lineWidthUnits:t,lineWidthScale:n,lineWidthMinPixels:r,lineWidthMaxPixels:i,radiusUnits:a,elevationScale:o,extruded:s,filled:c,stroked:l,wireframe:u,offset:d,coverage:f,radius:p,angle:m}=this.props,h=this.state.fillModel,g=this.state.strokeModel,_=this.state.wireframeModel,{edgeDistance:v}=this.state,y={radius:p,angle:m/180*Math.PI,offset:d,extruded:s,stroked:l,coverage:f,elevationScale:o,edgeDistance:v,radiusUnits:w[a],widthUnits:w[t],widthScale:n,widthMinPixels:r,widthMaxPixels:i};s&&u&&(_.shaderInputs.setProps({column:{...y,isStroke:!0}}),_.draw(this.context.renderPass)),c&&(h.shaderInputs.setProps({column:{...y,isStroke:!1}}),h.draw(this.context.renderPass)),!s&&l&&(g.shaderInputs.setProps({column:{...y,isStroke:!0}}),g.draw(this.context.renderPass))}};Fn.layerName=`ColumnLayer`,Fn.defaultProps=Pn;function In(e,t,n,r){let i;if(Array.isArray(e[0])){let n=e.length*t;i=Array(n);for(let n=0;n<e.length;n++)for(let r=0;r<t;r++)i[n*t+r]=e[n][r]||0}else i=e;return n?an(i,{size:t,gridResolution:n}):r?hn(i,{size:t}):i}var Ln=1,Rn=2,zn=4,Bn=class extends Me{constructor(e){super({...e,attributes:{positions:{size:3,padding:18,initialize:!0,type:e.fp64?Float64Array:Float32Array},segmentTypes:{size:1,type:e.isWebGPU?Float32Array:Uint8ClampedArray}}})}get(e){return this.attributes[e]}getPathSegmentIndices(e){let t=this.attributes.segmentTypes,n=this.vertexStarts[e],r=Math.min(this.vertexStarts[e+1]??this.instanceCount,this.instanceCount),i=[];for(let e=n;e<r-1;e++)(t[e]&zn)===0&&i.push(e);return i.length&&(t[n]&zn)!==0&&i.unshift(i.pop()),i}getGeometryFromBuffer(e){return this.normalize||this.opts.isWebGPU?super.getGeometryFromBuffer(e):null}normalizeGeometry(e){return this.normalize?In(e,this.positionSize,this.opts.resolution,this.opts.wrapLongitude):e}getGeometrySize(e){if(Vn(e)){let t=0;for(let n of e)t+=this.getGeometrySize(n);return t}let t=this.getPathLength(e);return t<2?0:this.isClosed(e)?t<3?0:t+2:t}updateGeometryAttributes(e,t){if(t.geometrySize!==0){if(e&&Vn(e))for(let n of e){let e=this.getGeometrySize(n);t.geometrySize=e,this.updateGeometryAttributes(n,t),t.vertexStart+=e}else this._updateSegmentTypes(e,t),this._updatePositions(e,t)}}_updateSegmentTypes(e,t){let n=this.attributes.segmentTypes,r=e?this.isClosed(e):!1,{vertexStart:i,geometrySize:a}=t;n.fill(0,i,i+a),r?(n[i]=zn,n[i+a-2]=zn):(n[i]+=Ln,n[i+a-2]+=Rn),n[i+a-1]=zn}_updatePositions(e,t){let{positions:n}=this.attributes;if(!n||!e)return;let{vertexStart:r,geometrySize:i}=t,a=[,,,];for(let t=r,o=0;o<i;t++,o++)this.getPointOnPath(e,o,a),n[t*3]=a[0],n[t*3+1]=a[1],n[t*3+2]=a[2]}getPathLength(e){return e.length/this.positionSize}getPointOnPath(e,t,n=[]){let{positionSize:r}=this;t*r>=e.length&&(t+=1-e.length/r);let i=t*r;return n[0]=e[i],n[1]=e[i+1],n[2]=r===3&&e[i+2]||0,n}isClosed(e){if(!this.normalize)return!!this.opts.loop;let{positionSize:t}=this,n=e.length-t;return e[0]===e[n]&&e[1]===e[n+1]&&(t===2||e[2]===e[n+2])}};function Vn(e){return Array.isArray(e[0])}var Hn=`struct PathUniforms {
  widthScale: f32,
  widthMinPixels: f32,
  widthMaxPixels: f32,
  jointType: f32,
  capType: f32,
  miterLimit: f32,
  billboard: f32,
  widthUnits: i32,
};

@group(0) @binding(auto)
var<uniform> path: PathUniforms;
`,Un=`layout(std140) uniform pathUniforms {
  float widthScale;
  float widthMinPixels;
  float widthMaxPixels;
  float jointType;
  float capType;
  float miterLimit;
  bool billboard;
  highp int widthUnits;
} path;
`,Wn={name:`path`,source:Hn,vs:Un,fs:Un,uniformTypes:{widthScale:`f32`,widthMinPixels:`f32`,widthMaxPixels:`f32`,jointType:`f32`,capType:`f32`,miterLimit:`f32`,billboard:`f32`,widthUnits:`i32`}},Gn=`const EPSILON: f32 = 0.001;
const ZERO_OFFSET: vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);

struct JoinResult {
  offset: vec3<f32>,
  cornerOffset: vec2<f32>,
  miterLength: f32,
  pathPosition: vec2<f32>,
  pathLength: f32,
  jointType: f32,
};

struct Attributes {
  @location(0) positions: vec2<f32>,
  @location(1) instanceTypes: f32,
  @location(2) instanceLeftPositions: vec3<f32>,
  @location(3) instanceStartPositions: vec3<f32>,
  @location(4) instanceEndPositions: vec3<f32>,
  @location(5) instanceRightPositions: vec3<f32>,
  @location(6) instanceLeftPositions64Low: vec3<f32>,
  @location(7) instanceStartPositions64Low: vec3<f32>,
  @location(8) instanceEndPositions64Low: vec3<f32>,
  @location(9) instanceRightPositions64Low: vec3<f32>,
  @location(10) instanceStrokeWidths: f32,
  @location(11) instanceColors: vec4<f32>,
  @location(12) rowIndexes: u32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vColor: vec4<f32>,
  @location(1) vCornerOffset: vec2<f32>,
  @location(2) vMiterLength: f32,
  @location(3) vPathPosition: vec2<f32>,
  @location(4) vPathLength: f32,
  @location(5) vJointType: f32,
  // Location 6 is reserved for TripsLayer's injected vTime varying.
  @location(7) clipCoordinates: vec2<f32>,
#ifdef DASH_ENABLED
  @location(8) vPathBounds: vec2<f32>,
#endif
};

fn flipIfTrue(flag: bool) -> f32 {
  return select(1.0, -1.0, flag);
}

fn clipLine(position: vec4<f32>, refPosition: vec4<f32>) -> vec4<f32> {
  if (position.w < EPSILON) {
    let r = (EPSILON - refPosition.w) / (position.w - refPosition.w);
    return refPosition + (position - refPosition) * r;
  }
  return position;
}

#ifdef DASH_ENABLED
// Return the visible interval of the original segment before clipLine moves either endpoint.
fn getClippedPathRange(startW: f32, endW: f32) -> vec2<f32> {
  let startClipped = startW < EPSILON;
  let endClipped = endW < EPSILON;
  if (startClipped && endClipped) {
    return vec2<f32>(0.0, 0.0);
  }
  if (startClipped || endClipped) {
    let intersection = clamp((EPSILON - startW) / (endW - startW), 0.0, 1.0);
    if (startClipped) {
      return vec2<f32>(intersection, 1.0);
    }
    return vec2<f32>(0.0, intersection);
  }
  return vec2<f32>(0.0, 1.0);
}
#endif

fn getLineJoinOffset(
  prevPoint: vec3<f32>,
  currPoint: vec3<f32>,
  nextPoint: vec3<f32>,
  width: vec2<f32>,
#ifdef DASH_ENABLED
  sourcePathLength: f32,
  sourcePathRange: vec2<f32>,
#endif
#ifdef ANTIALIASING
  coverageScale: f32,
#endif
  positions: vec2<f32>,
  instanceTypes: f32
) -> JoinResult {
  let isEnd = positions.x > 0.0;
  let sideOfPath = positions.y;
  let isJoint = select(0.0, 1.0, sideOfPath == 0.0);

  var deltaA3 = currPoint - prevPoint;
  var deltaB3 = nextPoint - currPoint;

  let rotationResult = project_needs_rotation(currPoint);
  if (path.billboard == 0.0 && rotationResult.needsRotation) {
    deltaA3 = rotationResult.transform * deltaA3;
    deltaB3 = rotationResult.transform * deltaB3;
  }

  let deltaA = deltaA3.xy / width;
  let deltaB = deltaB3.xy / width;

  let lenA = length(deltaA);
  let lenB = length(deltaB);

  let dirA = select(vec2<f32>(0.0, 0.0), normalize(deltaA), lenA > 0.0);
  let dirB = select(vec2<f32>(0.0, 0.0), normalize(deltaB), lenB > 0.0);

  let perpA = vec2<f32>(-dirA.y, dirA.x);
  let perpB = vec2<f32>(-dirB.y, dirB.x);

  var tangent = dirA + dirB;
  tangent = select(perpA, normalize(tangent), length(tangent) > 0.0);
  let miterVec = vec2<f32>(-tangent.y, tangent.x);
  let dir = select(dirB, dirA, isEnd);
  let perp = select(perpB, perpA, isEnd);
#ifdef DASH_ENABLED
  let segmentLength2D = select(lenB, lenA, isEnd);

  // Extrusion happens in the XY plane, so segmentLength2D is a 2D length and pathPosition.y
  // below measures 2D distance along the segment. For a path that also moves in Z the true
  // arc length is longer by this ratio. Scaling pathLength and pathPosition.y by it makes
  // the coordinate measure real 3D distance while leaving the joint tests unchanged, since
  // they compare the two against each other and both are scaled alike. Billboard mode
  // extrudes in clip space, where the perspective divide has already reduced the segment to
  // its screen projection, so its complete common-space length is supplied by the caller.
  // Mirrors path-layer-vertex.glsl.ts.
  let currDelta3 = select(deltaB3, deltaA3, isEnd);
  let currLength2D = length(currDelta3.xy);
  // Do not clamp a valid denominator to EPSILON: high-zoom Web Mercator deltas are often
  // smaller than that in common space, and changing their scale corrupts even flat paths.
  let safeLength2D = select(1.0, currLength2D, currLength2D > 0.0);
  var arcLengthRatio = 1.0;
  var pathPositionOffset = 0.0;
  var pathLength = segmentLength2D;
  if (path.billboard != 0.0) {
    // clipLine may shorten the visible screen-space segment. Preserve the corresponding interval
    // of the complete common-space arclength instead of compressing the full dash period into the
    // visible span. Keep pathLength complete so justification is stable as the camera clips it.
    let visiblePathLength = sourcePathLength * (sourcePathRange.y - sourcePathRange.x);
    arcLengthRatio = 0.0;
    if (segmentLength2D > 0.0) {
      arcLengthRatio = visiblePathLength / segmentLength2D;
    }
    pathPositionOffset = sourcePathLength * sourcePathRange.x;
    pathLength = sourcePathLength;
  } else if (currLength2D > 0.0) {
    arcLengthRatio = length(currDelta3) / safeLength2D;
    pathLength = segmentLength2D * arcLengthRatio;
  }
#else
  let pathLength = select(lenB, lenA, isEnd);
#endif

  let sinHalfA = abs(dot(miterVec, perp));
  let cosHalfA = abs(dot(dirA, miterVec));
  let turnDirection = flipIfTrue(dirA.x * dirB.y >= dirA.y * dirB.x);
  let cornerPosition = sideOfPath * turnDirection;

  var miterSize = 1.0 / max(sinHalfA, EPSILON);
  miterSize = mix(
    min(miterSize, max(lenA, lenB) / max(cosHalfA, EPSILON)),
    miterSize,
    step(0.0, cornerPosition)
  );

  var offsetVec =
    mix(miterVec * miterSize, perp, step(0.5, cornerPosition)) *
    (sideOfPath + isJoint * turnDirection);

  let isStartCap = lenA == 0.0 || (!isEnd && (instanceTypes == 1.0 || instanceTypes == 3.0));
  let isEndCap = lenB == 0.0 || (isEnd && (instanceTypes == 2.0 || instanceTypes == 3.0));
  let isCap = isStartCap || isEndCap;

  var jointType = path.jointType;
  if (isCap) {
    offsetVec = mix(
      perp * sideOfPath,
      dir * path.capType * 4.0 * flipIfTrue(isStartCap),
      isJoint
    );
    jointType = path.capType;
  }

#ifdef ANTIALIASING
  let coverageOffsetVec = offsetVec * coverageScale;
  var miterLength = dot(coverageOffsetVec, miterVec * turnDirection);
#else
  var miterLength = dot(offsetVec, miterVec * turnDirection);
#endif
  miterLength = select(miterLength, isJoint, isCap);

#ifdef ANTIALIASING
  let offsetFromStartOfPath = coverageOffsetVec + deltaA * select(0.0, 1.0, isEnd);
#else
  let offsetFromStartOfPath = offsetVec + deltaA * select(0.0, 1.0, isEnd);
#endif
  let pathPosition = vec2<f32>(
    dot(offsetFromStartOfPath, perp),
#ifdef DASH_ENABLED
    pathPositionOffset + dot(offsetFromStartOfPath, dir) * arcLengthRatio
#else
    dot(offsetFromStartOfPath, dir)
#endif
  );
  let isValid = step(f32(instanceTypes), 3.5);
#ifdef ANTIALIASING
  var offset = vec3<f32>(coverageOffsetVec * width * isValid, 0.0);
#else
  var offset = vec3<f32>(offsetVec * width * isValid, 0.0);
#endif

  if (path.billboard == 0.0 && rotationResult.needsRotation) {
    offset = rotationResult.transform * offset;
  }

#ifdef ANTIALIASING
  return JoinResult(
    offset, coverageOffsetVec, miterLength, pathPosition, pathLength, jointType
  );
#else
  return JoinResult(offset, offsetVec, miterLength, pathPosition, pathLength, jointType);
#endif
}

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.rowIndexes);

  let isEnd = attributes.positions.x;

  let prevPosition = mix(attributes.instanceLeftPositions, attributes.instanceStartPositions, isEnd);
  let prevPosition64Low = mix(
    attributes.instanceLeftPositions64Low,
    attributes.instanceStartPositions64Low,
    isEnd
  );
  let currPosition = mix(attributes.instanceStartPositions, attributes.instanceEndPositions, isEnd);
  let currPosition64Low = mix(
    attributes.instanceStartPositions64Low,
    attributes.instanceEndPositions64Low,
    isEnd
  );
  let nextPosition = mix(attributes.instanceEndPositions, attributes.instanceRightPositions, isEnd);
  let nextPosition64Low = mix(
    attributes.instanceEndPositions64Low,
    attributes.instanceRightPositions64Low,
    isEnd
  );

  geometry.worldPosition = currPosition;

  let widthPixels =
    clamp(
      project_unit_size_to_pixel(attributes.instanceStrokeWidths * path.widthScale, path.widthUnits),
      path.widthMinPixels,
      path.widthMaxPixels
    ) / 2.0;

  if (path.billboard != 0.0) {
#ifdef DASH_ENABLED
    let prevProjection = project_position_to_clipspace_and_commonspace(
      prevPosition, prevPosition64Low, ZERO_OFFSET
    );
    let nextProjection = project_position_to_clipspace_and_commonspace(
      nextPosition, nextPosition64Low, ZERO_OFFSET
    );
    let prevPositionCommon = prevProjection.commonPosition.xyz;
    let nextPositionCommon = nextProjection.commonPosition.xyz;
    var prevPositionScreen = prevProjection.clipPosition;
    var nextPositionScreen = nextProjection.clipPosition;
#else
    var prevPositionScreen = project_position_to_clipspace(
      prevPosition, prevPosition64Low, ZERO_OFFSET
    );
    var nextPositionScreen = project_position_to_clipspace(
      nextPosition, nextPosition64Low, ZERO_OFFSET
    );
#endif
    let currProjection = project_position_to_clipspace_and_commonspace(
      currPosition, currPosition64Low, ZERO_OFFSET
    );
    geometry.position = currProjection.commonPosition;
    var currPositionScreen = currProjection.clipPosition;
#ifdef DASH_ENABLED
    let currPositionCommon = currProjection.commonPosition.xyz;
    let sourcePathStartScreen = mix(currPositionScreen, prevPositionScreen, isEnd);
    let sourcePathEndScreen = mix(nextPositionScreen, currPositionScreen, isEnd);
    let billboardPathRange = getClippedPathRange(
      sourcePathStartScreen.w, sourcePathEndScreen.w
    );
#endif

    prevPositionScreen = clipLine(prevPositionScreen, currPositionScreen);
    nextPositionScreen = clipLine(nextPositionScreen, currPositionScreen);
    currPositionScreen = clipLine(currPositionScreen, mix(nextPositionScreen, prevPositionScreen, isEnd));

#ifdef ANTIALIASING
    let coverageScale = select(
      1.0,
      (widthPixels + 0.5 / project.devicePixelRatio) / max(widthPixels, 1e-6),
      widthPixels > 0.0
    );
#endif
#ifdef DASH_ENABLED
    let currentDeltaCommon = select(
      nextPositionCommon - currPositionCommon,
      currPositionCommon - prevPositionCommon,
      isEnd > 0.0
    );
    let billboardPathLength = select(
      0.0,
      length(currentDeltaCommon) * project.scale / (widthPixels * project.focalDistance),
      widthPixels > 0.0
    );
#endif
    let join = getLineJoinOffset(
      prevPositionScreen.xyz / prevPositionScreen.w,
      currPositionScreen.xyz / currPositionScreen.w,
      nextPositionScreen.xyz / nextPositionScreen.w,
      project_pixel_size_to_clipspace(vec2<f32>(widthPixels, widthPixels)),
#ifdef DASH_ENABLED
      billboardPathLength,
      billboardPathRange,
#endif
#ifdef ANTIALIASING
      coverageScale,
#endif
      attributes.positions,
      attributes.instanceTypes
    );
#ifdef DASH_ENABLED
    // Phase and justification use the complete source segment, while cap and joint coverage
    // must still recognize the endpoints moved by clipLine.
    varyings.vPathBounds = billboardPathLength * billboardPathRange;
#endif

    geometry.uv = join.pathPosition;
    varyings.position = vec4<f32>(
      currPositionScreen.xyz + join.offset * currPositionScreen.w,
      currPositionScreen.w
    );
    varyings.vCornerOffset = join.cornerOffset;
    varyings.vMiterLength = join.miterLength;
    varyings.vPathPosition = join.pathPosition;
    varyings.vPathLength = join.pathLength;
    varyings.vJointType = join.jointType;
  } else {
    let prevPositionCommon = project_position_vec3_f64(prevPosition, prevPosition64Low);
    let currPositionCommon = project_position_vec3_f64(currPosition, currPosition64Low);
    let nextPositionCommon = project_position_vec3_f64(nextPosition, nextPosition64Low);

    let width = vec2<f32>(
      project_pixel_size_float(widthPixels),
      project_pixel_size_float(widthPixels)
    );
#ifdef ANTIALIASING
    let coverageScale = select(
      1.0,
      (widthPixels + 0.5 / project.devicePixelRatio) / max(widthPixels, 1e-6),
      widthPixels > 0.0
    );
#endif
    let join = getLineJoinOffset(
      prevPositionCommon,
      currPositionCommon,
      nextPositionCommon,
      width,
#ifdef DASH_ENABLED
      1.0,
      vec2<f32>(0.0, 1.0),
#endif
#ifdef ANTIALIASING
      coverageScale,
#endif
      attributes.positions,
      attributes.instanceTypes
    );
#ifdef DASH_ENABLED
    varyings.vPathBounds = vec2<f32>(0.0, join.pathLength);
#endif

    geometry.position = vec4<f32>(currPositionCommon + join.offset, 1.0);
    geometry.uv = join.pathPosition;
    varyings.position = project_common_position_to_clipspace(geometry.position);
    varyings.vCornerOffset = join.cornerOffset;
    varyings.vMiterLength = join.miterLength;
    varyings.vPathPosition = join.pathPosition;
    varyings.vPathLength = join.pathLength;
    varyings.vJointType = join.jointType;
  }

  varyings.clipCoordinates = geometry.position.xy;
  clip_filterPosition(&varyings.position, geometry.worldPosition.xy);

  varyings.vColor = vec4<f32>(
    attributes.instanceColors.rgb,
    attributes.instanceColors.a * layer.opacity
  );
  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = varyings.vPathPosition;

#ifdef ANTIALIASING
  // Coordinates of the outer silhouette, in units of half-width: rounded joints and caps are
  // bounded by the corner offset, everywhere else by the edge of the stroke. Dividing by the
  // screen-space derivative converts the distance to the boundary into device pixels, which stays
  // correct under perspective foreshortening and under extensions that rescale the stroke.
#ifdef DASH_ENABLED
  let isCorner =
    varyings.vPathPosition.y < varyings.vPathBounds.x ||
    varyings.vPathPosition.y > varyings.vPathBounds.y;
#else
  let isCorner = varyings.vPathPosition.y < 0.0 || varyings.vPathPosition.y > varyings.vPathLength;
#endif
  let isRound = varyings.vJointType > 0.5;

  // Distance to the silhouette in device pixels, from the derivative of the coordinate that
  // bounds it. Computed before the discards below: derivatives need uniform control flow and are
  // undefined after a discard in the quad. See dev-docs/RFCs/v9.4/analytic-antialiasing-rfc.md
  let bodyCoord = abs(varyings.vPathPosition.x);
  let cornerCoord = length(varyings.vCornerOffset);
  // Both evaluated so each derivative stays on one field across the corner/body boundary
  let bodyPixels = (1.0 - bodyCoord) / max(fwidth(bodyCoord), 1e-6);
  let cornerPixels = (1.0 - cornerCoord) / max(fwidth(cornerCoord), 1e-6);
#ifdef PATH_STYLE_OFFSET
  // Rounded corners still intersect the stroke-width envelope. Extensions may remap
  // vPathPosition.x independently of vCornerOffset, as PathStyleExtension does for offsets.
  let edgePixels = select(bodyPixels, min(cornerPixels, bodyPixels), isRound && isCorner);
#else
  let edgePixels = select(bodyPixels, cornerPixels, isRound && isCorner);
#endif

  // Fragments outside the coverage ramp must not write depth or picking colors.
  if (edgePixels <= -SMOOTH_EDGE_RADIUS) {
    discard;
  }

  if (isCorner) {
    if (!isRound && varyings.vMiterLength > path.miterLimit + 1.0) {
      discard;
    }
  }

  var color = varyings.vColor;

  // Feather one device pixel across the width only, before premultiplication. edgePixels is a
  // signed device-pixel distance and SMOOTH_EDGE_RADIUS is 0.5, so this ramps across one pixel.
  color.a *= smoothedge(0.0, edgePixels);
#else
#ifdef DASH_ENABLED
  if (
    varyings.vPathPosition.y < varyings.vPathBounds.x ||
    varyings.vPathPosition.y > varyings.vPathBounds.y
  ) {
#else
  if (
    varyings.vPathPosition.y < 0.0 ||
    varyings.vPathPosition.y > varyings.vPathLength
  ) {
#endif
    if (varyings.vJointType > 0.5 && length(varyings.vCornerOffset) > 1.0) {
      discard;
    }
    if (
      varyings.vJointType < 0.5 &&
      varyings.vMiterLength > path.miterLimit + 1.0
    ) {
      discard;
    }
  }
#endif

  // Fragment-layer injections that discard pixels must run after analytic coverage derivatives.
  // See TripsLayer, which rejects fragments outside of the active time window at this anchor.
  // DECKGL_FILTER_COLOR
  clip_filterColor(varyings.clipCoordinates);
#ifdef ANTIALIASING
  return deckgl_premultiplied_alpha(color);
#else
  return deckgl_premultiplied_alpha(varyings.vColor);
#endif
}
`,Kn=`#version 300 es
#define SHADER_NAME path-layer-vertex-shader
in vec2 positions;
in float instanceTypes;
in vec3 instanceStartPositions;
in vec3 instanceEndPositions;
in vec3 instanceLeftPositions;
in vec3 instanceRightPositions;
in vec3 instanceLeftPositions64Low;
in vec3 instanceStartPositions64Low;
in vec3 instanceEndPositions64Low;
in vec3 instanceRightPositions64Low;
in float instanceStrokeWidths;
in vec4 instanceColors;
in float rowIndexes;
uniform float opacity;
out vec4 vColor;
out vec2 vCornerOffset;
out float vMiterLength;
out vec2 vPathPosition;
out float vPathLength;
out float vJointType;
#ifdef DASH_ENABLED
out vec2 vPathBounds;
#endif
const float EPSILON = 0.001;
const vec3 ZERO_OFFSET = vec3(0.0);
float flipIfTrue(bool flag) {
return -(float(flag) * 2. - 1.);
}
vec3 getLineJoinOffset(
vec3 prevPoint, vec3 currPoint, vec3 nextPoint,
vec2 width
#ifdef DASH_ENABLED
, float sourcePathLength, vec2 sourcePathRange
#endif
#ifdef ANTIALIASING
, float coverageScale
#endif
) {
bool isEnd = positions.x > 0.0;
float sideOfPath = positions.y;
float isJoint = float(sideOfPath == 0.0);
vec3 deltaA3 = (currPoint - prevPoint);
vec3 deltaB3 = (nextPoint - currPoint);
mat3 rotationMatrix;
bool needsRotation = !path.billboard && project_needs_rotation(currPoint, rotationMatrix);
if (needsRotation) {
deltaA3 = deltaA3 * rotationMatrix;
deltaB3 = deltaB3 * rotationMatrix;
}
vec2 deltaA = deltaA3.xy / width;
vec2 deltaB = deltaB3.xy / width;
float lenA = length(deltaA);
float lenB = length(deltaB);
vec2 dirA = lenA > 0. ? normalize(deltaA) : vec2(0.0, 0.0);
vec2 dirB = lenB > 0. ? normalize(deltaB) : vec2(0.0, 0.0);
vec2 perpA = vec2(-dirA.y, dirA.x);
vec2 perpB = vec2(-dirB.y, dirB.x);
vec2 tangent = dirA + dirB;
tangent = length(tangent) > 0. ? normalize(tangent) : perpA;
vec2 miterVec = vec2(-tangent.y, tangent.x);
vec2 dir = isEnd ? dirA : dirB;
vec2 perp = isEnd ? perpA : perpB;
float L = isEnd ? lenA : lenB;
#ifdef DASH_ENABLED
vec3 currDelta3 = isEnd ? deltaA3 : deltaB3;
float currLength2D = length(currDelta3.xy);
float arcLengthRatio = 1.0;
float pathPositionOffset = 0.0;
float pathLength = L;
if (path.billboard) {
float visiblePathLength = sourcePathLength * (sourcePathRange.y - sourcePathRange.x);
arcLengthRatio = L > 0.0 ? visiblePathLength / L : 0.0;
pathPositionOffset = sourcePathLength * sourcePathRange.x;
pathLength = sourcePathLength;
} else if (currLength2D > 0.0) {
arcLengthRatio = length(currDelta3) / currLength2D;
pathLength = L * arcLengthRatio;
}
#endif
float sinHalfA = abs(dot(miterVec, perp));
float cosHalfA = abs(dot(dirA, miterVec));
float turnDirection = flipIfTrue(dirA.x * dirB.y >= dirA.y * dirB.x);
float cornerPosition = sideOfPath * turnDirection;
float miterSize = 1.0 / max(sinHalfA, EPSILON);
miterSize = mix(
min(miterSize, max(lenA, lenB) / max(cosHalfA, EPSILON)),
miterSize,
step(0.0, cornerPosition)
);
vec2 offsetVec = mix(miterVec * miterSize, perp, step(0.5, cornerPosition))
* (sideOfPath + isJoint * turnDirection);
bool isStartCap = lenA == 0.0 || (!isEnd && (instanceTypes == 1.0 || instanceTypes == 3.0));
bool isEndCap = lenB == 0.0 || (isEnd && (instanceTypes == 2.0 || instanceTypes == 3.0));
bool isCap = isStartCap || isEndCap;
if (isCap) {
offsetVec = mix(perp * sideOfPath, dir * path.capType * 4.0 * flipIfTrue(isStartCap), isJoint);
vJointType = path.capType;
} else {
vJointType = path.jointType;
}
#ifdef ANTIALIASING
vec2 coverageOffsetVec = offsetVec * coverageScale;
#ifdef DASH_ENABLED
vPathLength = pathLength;
#else
vPathLength = L;
#endif
vCornerOffset = coverageOffsetVec;
vMiterLength = dot(vCornerOffset, miterVec * turnDirection);
vMiterLength = isCap ? isJoint : vMiterLength;
vec2 offsetFromStartOfPath = coverageOffsetVec + deltaA * float(isEnd);
vPathPosition = vec2(
dot(offsetFromStartOfPath, perp),
#ifdef DASH_ENABLED
pathPositionOffset + dot(offsetFromStartOfPath, dir) * arcLengthRatio
#else
dot(offsetFromStartOfPath, dir)
#endif
);
geometry.uv = vPathPosition;
float isValid = step(instanceTypes, 3.5);
vec3 offset = vec3(coverageOffsetVec * width * isValid, 0.0);
#else
#ifdef DASH_ENABLED
vPathLength = pathLength;
#else
vPathLength = L;
#endif
vCornerOffset = offsetVec;
vMiterLength = dot(vCornerOffset, miterVec * turnDirection);
vMiterLength = isCap ? isJoint : vMiterLength;
vec2 offsetFromStartOfPath = vCornerOffset + deltaA * float(isEnd);
vPathPosition = vec2(
dot(offsetFromStartOfPath, perp),
#ifdef DASH_ENABLED
pathPositionOffset + dot(offsetFromStartOfPath, dir) * arcLengthRatio
#else
dot(offsetFromStartOfPath, dir)
#endif
);
geometry.uv = vPathPosition;
float isValid = step(instanceTypes, 3.5);
vec3 offset = vec3(offsetVec * width * isValid, 0.0);
#endif
if (needsRotation) {
offset = rotationMatrix * offset;
}
return offset;
}
void clipLine(inout vec4 position, vec4 refPosition) {
if (position.w < EPSILON) {
float r = (EPSILON - refPosition.w) / (position.w - refPosition.w);
position = refPosition + (position - refPosition) * r;
}
}
#ifdef DASH_ENABLED
vec2 getClippedPathRange(float startW, float endW) {
bool startClipped = startW < EPSILON;
bool endClipped = endW < EPSILON;
if (startClipped && endClipped) {
return vec2(0.0);
}
if (startClipped || endClipped) {
float intersection = clamp((EPSILON - startW) / (endW - startW), 0.0, 1.0);
return startClipped ? vec2(intersection, 1.0) : vec2(0.0, intersection);
}
return vec2(0.0, 1.0);
}
#endif
void main() {
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
vColor = vec4(instanceColors.rgb, instanceColors.a * layer.opacity);
float isEnd = positions.x;
vec3 prevPosition = mix(instanceLeftPositions, instanceStartPositions, isEnd);
vec3 prevPosition64Low = mix(instanceLeftPositions64Low, instanceStartPositions64Low, isEnd);
vec3 currPosition = mix(instanceStartPositions, instanceEndPositions, isEnd);
vec3 currPosition64Low = mix(instanceStartPositions64Low, instanceEndPositions64Low, isEnd);
vec3 nextPosition = mix(instanceEndPositions, instanceRightPositions, isEnd);
vec3 nextPosition64Low = mix(instanceEndPositions64Low, instanceRightPositions64Low, isEnd);
geometry.worldPosition = currPosition;
vec2 widthPixels = vec2(clamp(
project_size_to_pixel(instanceStrokeWidths * path.widthScale, path.widthUnits),
path.widthMinPixels, path.widthMaxPixels) / 2.0);
vec3 width;
if (path.billboard) {
#ifdef DASH_ENABLED
vec4 prevPositionCommon;
vec4 nextPositionCommon;
vec4 prevPositionScreen = project_position_to_clipspace(
prevPosition, prevPosition64Low, ZERO_OFFSET, prevPositionCommon
);
#else
vec4 prevPositionScreen = project_position_to_clipspace(
prevPosition, prevPosition64Low, ZERO_OFFSET
);
#endif
vec4 currPositionScreen = project_position_to_clipspace(currPosition, currPosition64Low, ZERO_OFFSET, geometry.position);
#ifdef DASH_ENABLED
vec4 nextPositionScreen = project_position_to_clipspace(
nextPosition, nextPosition64Low, ZERO_OFFSET, nextPositionCommon
);
#else
vec4 nextPositionScreen = project_position_to_clipspace(
nextPosition, nextPosition64Low, ZERO_OFFSET
);
#endif
#ifdef DASH_ENABLED
vec4 sourcePathStartScreen = mix(currPositionScreen, prevPositionScreen, isEnd);
vec4 sourcePathEndScreen = mix(nextPositionScreen, currPositionScreen, isEnd);
vec2 billboardPathRange = getClippedPathRange(
sourcePathStartScreen.w, sourcePathEndScreen.w
);
#endif
clipLine(prevPositionScreen, currPositionScreen);
clipLine(nextPositionScreen, currPositionScreen);
clipLine(currPositionScreen, mix(nextPositionScreen, prevPositionScreen, isEnd));
width = vec3(widthPixels, 0.0);
DECKGL_FILTER_SIZE(width, geometry);
#ifdef ANTIALIASING
vec2 coveragePadding = vec2(0.5 / project.devicePixelRatio);
float coverageScale = length(width.xy) > 0.0
? length(width.xy + coveragePadding) / length(width.xy)
: 1.0;
#endif
#ifdef DASH_ENABLED
vec3 currentDeltaCommon = isEnd > 0.0
? geometry.position.xyz - prevPositionCommon.xyz
: nextPositionCommon.xyz - geometry.position.xyz;
float billboardPathLength = width.x > 0.0
? length(currentDeltaCommon) * project.scale / (width.x * project.focalDistance)
: 0.0;
#endif
vec3 offset = getLineJoinOffset(
prevPositionScreen.xyz / prevPositionScreen.w,
currPositionScreen.xyz / currPositionScreen.w,
nextPositionScreen.xyz / nextPositionScreen.w,
project_pixel_size_to_clipspace(width.xy)
#ifdef DASH_ENABLED
,
billboardPathLength, billboardPathRange
#endif
#ifdef ANTIALIASING
,
coverageScale
#endif
);
#ifdef DASH_ENABLED
vPathBounds = billboardPathLength * billboardPathRange;
#endif
DECKGL_FILTER_GL_POSITION(currPositionScreen, geometry);
gl_Position = vec4(currPositionScreen.xyz + offset * currPositionScreen.w, currPositionScreen.w);
} else {
prevPosition = project_position(prevPosition, prevPosition64Low);
currPosition = project_position(currPosition, currPosition64Low);
nextPosition = project_position(nextPosition, nextPosition64Low);
width = vec3(project_pixel_size(widthPixels), 0.0);
DECKGL_FILTER_SIZE(width, geometry);
#ifdef ANTIALIASING
vec2 coveragePadding = project_pixel_size(vec2(0.5 / project.devicePixelRatio));
float coverageScale = length(width.xy) > 0.0
? length(width.xy + coveragePadding) / length(width.xy)
: 1.0;
#endif
vec3 offset = getLineJoinOffset(
prevPosition, currPosition, nextPosition, width.xy
#ifdef DASH_ENABLED
, 1.0, vec2(0.0, 1.0)
#endif
#ifdef ANTIALIASING
, coverageScale
#endif
);
#ifdef DASH_ENABLED
vPathBounds = vec2(0.0, vPathLength);
#endif
geometry.position = vec4(currPosition + offset, 1.0);
gl_Position = project_common_position_to_clipspace(geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,qn=`#version 300 es
#define SHADER_NAME path-layer-fragment-shader
precision highp float;
in vec4 vColor;
in vec2 vCornerOffset;
in float vMiterLength;
in vec2 vPathPosition;
in float vPathLength;
in float vJointType;
#ifdef DASH_ENABLED
in vec2 vPathBounds;
#endif
out vec4 fragColor;
void main(void) {
geometry.uv = vPathPosition;
#ifdef ANTIALIASING
#ifdef DASH_ENABLED
bool isCorner = vPathPosition.y < vPathBounds.x || vPathPosition.y > vPathBounds.y;
#else
bool isCorner = vPathPosition.y < 0.0 || vPathPosition.y > vPathLength;
#endif
bool isRound = vJointType > 0.5;
float bodyCoord = abs(vPathPosition.x);
float cornerCoord = length(vCornerOffset);
float bodyPixels = (1.0 - bodyCoord) / max(fwidth(bodyCoord), 1e-6);
float cornerPixels = (1.0 - cornerCoord) / max(fwidth(cornerCoord), 1e-6);
#ifdef PATH_STYLE_OFFSET
float edgePixels = isRound && isCorner ? min(cornerPixels, bodyPixels) : bodyPixels;
#else
float edgePixels = isRound && isCorner ? cornerPixels : bodyPixels;
#endif
if (edgePixels <= -SMOOTH_EDGE_RADIUS) {
discard;
}
if (isCorner) {
if (!isRound && vMiterLength > path.miterLimit + 1.0) {
discard;
}
}
fragColor = vColor;
fragColor.a *= smoothedge(0.0, edgePixels);
#else
#ifdef DASH_ENABLED
if (vPathPosition.y < vPathBounds.x || vPathPosition.y > vPathBounds.y) {
#else
if (vPathPosition.y < 0.0 || vPathPosition.y > vPathLength) {
#endif
if (vJointType > 0.5 && length(vCornerOffset) > 1.0) {
discard;
}
if (vJointType < 0.5 && vMiterLength > path.miterLimit + 1.0) {
discard;
}
}
fragColor = vColor;
#endif
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,Jn=[0,0,0,255],Yn={widthUnits:`meters`,widthScale:{type:`number`,min:0,value:1},widthMinPixels:{type:`number`,min:0,value:0},widthMaxPixels:{type:`number`,min:0,value:2**53-1},jointRounded:!1,capRounded:!1,miterLimit:{type:`number`,min:0,value:4},antialiasing:!1,billboard:!1,_pathType:null,getPath:{type:`accessor`,value:e=>e.path},getColor:{type:`accessor`,value:Jn},getWidth:{type:`accessor`,value:1},rounded:{deprecatedFor:[`jointRounded`,`capRounded`]}},Xn={enter:(e,t)=>t.length?t.subarray(t.length-e.length):e};function Zn(e){if(e.isGeospatial)return null;let{unitsPerMeter:t}=e.distanceScales;return[t[0],t[1],t[2]]}function Qn(e,t){return e===t||!!(e&&t&&e.length===t.length&&e.every((e,n)=>e===t[n]))}var $n=class extends i{getShaders(){let{antialiasing:e}=this.props;return super.getShaders({vs:Kn,fs:qn,source:Gn,defines:e?{ANTIALIASING:1}:{},modules:[h,f,s,Wn,...this.context.device.type===`webgpu`?[Ut]:[]]})}get wrapLongitude(){return!1}getBounds(){return this.context.device.type===`webgpu`?null:this.getAttributeManager()?.getBounds([`vertexPositions`])}getPathProjectionScale(e){let t=this.props.coordinateSystem;if(!this.getAttributeManager()?.getAttributes().instanceDashOffsets)return null;if(e instanceof A&&e.zoom>=12&&(t==="default"||t===`lnglat`||t===`cartesian`)){let n=C.getUniforms({viewport:e,coordinateSystem:t,coordinateOrigin:this.props.coordinateOrigin,autoWrapLongitude:this.wrapLongitude});return[e.projectionMode,n.coordinateOrigin[1],n.commonOrigin[1],...n.commonUnitsPerWorldUnit,...n.commonUnitsPerWorldUnit2,n.commonUnitsPerMeter[2]]}let n=Zn(e);return n?[e.projectionMode,...n]:[e.projectionMode]}shouldUpdateState(e){let{viewport:t}=this.context;return super.shouldUpdateState(e)||this.state?.tessellationResolution!==t.resolution||!Qn(this.state?.pathProjectionScale,this.getPathProjectionScale(t))}initializeState(){let e=this.context.device.type===`webgpu`;this.getAttributeManager().addInstanced({...e?{pathPositions:{size:24,type:`float32`,transition:!1,accessor:`getPath`,update:this.calculateWebGPUPositions,shaderAttributes:{instanceLeftPositions:{size:3,elementOffset:0},instanceStartPositions:{size:3,elementOffset:3},instanceEndPositions:{size:3,elementOffset:6},instanceRightPositions:{size:3,elementOffset:9},instanceLeftPositions64Low:{size:3,elementOffset:12},instanceStartPositions64Low:{size:3,elementOffset:15},instanceEndPositions64Low:{size:3,elementOffset:18},instanceRightPositions64Low:{size:3,elementOffset:21}},noAlloc:!0}}:{vertexPositions:{size:3,vertexOffset:1,type:`float64`,fp64:this.use64bitPositions(),transition:Xn,accessor:`getPath`,update:this.calculatePositions,noAlloc:!0,shaderAttributes:{instanceLeftPositions:{vertexOffset:0},instanceStartPositions:{vertexOffset:1},instanceEndPositions:{vertexOffset:2},instanceRightPositions:{vertexOffset:3}}}},instanceTypes:{size:1,type:e?`float32`:`uint8`,update:this.calculateSegmentTypes,noAlloc:!0},instanceStrokeWidths:{size:1,accessor:`getWidth`,transition:!e&&Xn,defaultValue:1,bufferGroup:`path-instance-data`},instanceColors:{size:this.props.colorFormat.length,type:`unorm8`,accessor:`getColor`,transition:!e&&Xn,defaultValue:Jn,bufferGroup:`path-instance-data`},rowIndexes:{size:1,type:`uint32`,accessor:(e,{index:t})=>e&&e.__source?e.__source.index:t,bufferGroup:`path-instance-data`}}),this.setState({pathTesselator:new Bn({fp64:this.use64bitPositions(),isWebGPU:e}),tessellationResolution:this.context.viewport.resolution,pathProjectionScale:this.getPathProjectionScale(this.context.viewport)})}updateState(e){super.updateState(e);let{props:t,oldProps:n,changeFlags:r}=e,i=this.getAttributeManager(),{viewport:a}=this.context,o=this.state.tessellationResolution!==a.resolution,s=this.getPathProjectionScale(a),c=!Qn(this.state.pathProjectionScale,s),l=r.updateTriggersChanged&&(r.updateTriggersChanged.all||r.updateTriggersChanged.getPath)||t._pathType!==n._pathType||t.positionFormat!==n.positionFormat||t.wrapLongitude!==n.wrapLongitude||o;if(r.dataChanged||l){let{pathTesselator:e}=this.state,n=t.data.attributes||{};e.updateGeometry({data:t.data,geometryBuffer:n.getPath,buffers:n,normalize:!t._pathType,loop:t._pathType===`loop`,getGeometry:t.getPath,positionFormat:t.positionFormat,wrapLongitude:t.wrapLongitude,resolution:a.resolution,dataChanged:l?void 0:r.dataChanged}),this.setState({numInstances:e.instanceCount,startIndices:e.vertexStarts,tessellationResolution:a.resolution,pathProjectionScale:s}),!r.dataChanged||l?i.invalidateAll():c&&i.invalidate(`instanceDashOffsets`)}else c&&(this.setState({pathProjectionScale:s}),i.invalidate(`instanceDashOffsets`));(r.extensionsChanged||t.antialiasing!==n.antialiasing)&&(this.state.model?.destroy(),this.state.model=this._getModel(),i.invalidateAll())}getPickingInfo(e){let t=super.getPickingInfo(e),{index:n}=t,r=this.props.data;return r[0]&&r[0].__source&&(t.object=r.find(e=>e.__source.index===n)),t}disablePickingIndex(e){let t=this.props.data;if(t[0]&&t[0].__source)for(let n=0;n<t.length;n++)t[n].__source.index===e&&this._disablePickingIndex(n);else super.disablePickingIndex(e)}draw({uniforms:e}){let{jointRounded:t,capRounded:n,billboard:r,miterLimit:i,widthUnits:a,widthScale:o,widthMinPixels:s,widthMaxPixels:c}=this.props,l=this.state.model,u={jointType:Number(t),capType:Number(n),billboard:r,widthUnits:w[a],widthScale:o,miterLimit:i,widthMinPixels:s,widthMaxPixels:c};l.shaderInputs.setProps({path:u}),l.draw(this.context.renderPass)}_getModel(){let e=[0,1,2,1,4,2,1,3,4,3,5,4],t=[0,0,0,-1,0,1,1,-1,1,1,1,0];return new d(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new o({topology:`triangle-list`,attributes:{indices:new Uint16Array(e),positions:{value:new Float32Array(t),size:2}}}),isInstanced:!0})}calculatePositions(e){let{pathTesselator:t}=this.state;e.startIndices=t.vertexStarts,e.value=t.get(`positions`)}calculateSegmentTypes(e){let{pathTesselator:t}=this.state;e.startIndices=t.vertexStarts,e.value=t.get(`segmentTypes`)}calculateWebGPUPositions(e){let{pathTesselator:t}=this.state,n=t.get(`positions`);if(!n){e.value=null;return}let r=t.instanceCount,i=new Float32Array(r*24),a=[-1,0,1,2];for(let e=0;e<r;e++){let t=e*24;for(let o=0;o<4;o++){let s=e+a[o],c=t+o*3;for(let e=0;e<3;e++){let t=s>=0&&s<r?n[s*3+e]:0,a=Math.fround(t);i[c+e]=a,i[c+e+12]=t-a}}}e.startIndices=t.vertexStarts,e.value=i}};$n.defaultProps=Yn,$n.layerName=`PathLayer`;var W=e(n(((e,t)=>{t.exports=n,t.exports.default=n;function n(e,t,n){n||=2;var i=t&&t.length,o=i?t[0]*n:e.length,s=r(e,0,o,n,!0),c=[];if(!s||s.next===s.prev)return c;var l,d,f,p,m,h,g;if(i&&(s=u(e,t,s,n)),e.length>80*n){l=f=e[0],d=p=e[1];for(var _=n;_<o;_+=n)m=e[_],h=e[_+1],m<l&&(l=m),h<d&&(d=h),m>f&&(f=m),h>p&&(p=h);g=Math.max(f-l,p-d),g=g===0?0:32767/g}return a(s,c,n,l,d,g,0),c}function r(e,t,n,r,i){var a,o;if(i===N(e,t,n,r)>0)for(a=t;a<n;a+=r)o=A(a,e[a],e[a+1],o);else for(a=n-r;a>=t;a-=r)o=A(a,e[a],e[a+1],o);return o&&S(o,o.next)&&(j(o),o=o.next),o}function i(e,t){if(!e)return e;t||=e;var n=e,r;do if(r=!1,!n.steiner&&(S(n,n.next)||x(n.prev,n,n.next)===0)){if(j(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function a(e,t,n,r,u,d,f){if(e){!f&&d&&h(e,r,u,d);for(var p=e,m,g;e.prev!==e.next;)if(m=e.prev,g=e.next,d?s(e,r,u,d):o(e))t.push(m.i/n|0),t.push(e.i/n|0),t.push(g.i/n|0),j(e),e=g.next,p=g.next;else if(e=g,e===p){f?f===1?(e=c(i(e),t,n),a(e,t,n,r,u,d,2)):f===2&&l(e,t,n,r,u,d):a(i(e),t,n,r,u,d,1);break}}}function o(e){var t=e.prev,n=e,r=e.next;if(x(t,n,r)>=0)return!1;for(var i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=i<a?i<o?i:o:a<o?a:o,d=s<c?s<l?s:l:c<l?c:l,f=i>a?i>o?i:o:a>o?a:o,p=s>c?s>l?s:l:c>l?c:l,m=r.next;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&y(i,s,a,c,o,l,m.x,m.y)&&x(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function s(e,t,n,r){var i=e.prev,a=e,o=e.next;if(x(i,a,o)>=0)return!1;for(var s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=s<c?s<l?s:l:c<l?c:l,m=u<d?u<f?u:f:d<f?d:f,h=s>c?s>l?s:l:c>l?c:l,g=u>d?u>f?u:f:d>f?d:f,v=_(p,m,t,n,r),b=_(h,g,t,n,r),S=e.prevZ,C=e.nextZ;S&&S.z>=v&&C&&C.z<=b;){if(S.x>=p&&S.x<=h&&S.y>=m&&S.y<=g&&S!==i&&S!==o&&y(s,u,c,d,l,f,S.x,S.y)&&x(S.prev,S,S.next)>=0||(S=S.prevZ,C.x>=p&&C.x<=h&&C.y>=m&&C.y<=g&&C!==i&&C!==o&&y(s,u,c,d,l,f,C.x,C.y)&&x(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;S&&S.z>=v;){if(S.x>=p&&S.x<=h&&S.y>=m&&S.y<=g&&S!==i&&S!==o&&y(s,u,c,d,l,f,S.x,S.y)&&x(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;C&&C.z<=b;){if(C.x>=p&&C.x<=h&&C.y>=m&&C.y<=g&&C!==i&&C!==o&&y(s,u,c,d,l,f,C.x,C.y)&&x(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function c(e,t,n){var r=e;do{var a=r.prev,o=r.next.next;!S(a,o)&&C(a,r,r.next,o)&&D(a,o)&&D(o,a)&&(t.push(a.i/n|0),t.push(r.i/n|0),t.push(o.i/n|0),j(r),j(r.next),r=e=o),r=r.next}while(r!==e);return i(r)}function l(e,t,n,r,o,s){var c=e;do{for(var l=c.next.next;l!==c.prev;){if(c.i!==l.i&&b(c,l)){var u=k(c,l);c=i(c,c.next),u=i(u,u.next),a(c,t,n,r,o,s,0),a(u,t,n,r,o,s,0);return}l=l.next}c=c.next}while(c!==e)}function u(e,t,n,i){for(var a=[],o=0,s=t.length,c,l,u;o<s;o++)c=t[o]*i,l=o<s-1?t[o+1]*i:e.length,u=r(e,c,l,i,!1),u===u.next&&(u.steiner=!0),a.push(v(u));for(a.sort(d),o=0;o<a.length;o++)n=f(a[o],n);return n}function d(e,t){return e.x-t.x}function f(e,t){var n=p(e,t);if(!n)return t;var r=k(n,e);return i(r,r.next),i(n,n.next)}function p(e,t){var n=t,r=e.x,i=e.y,a=-1/0,o;do{if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){var s=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(s<=r&&s>a&&(a=s,o=n.x<n.next.x?n:n.next,s===r))return o}n=n.next}while(n!==t);if(!o)return null;var c=o,l=o.x,u=o.y,d=1/0,f;n=o;do r>=n.x&&n.x>=l&&r!==n.x&&y(i<u?r:a,i,l,u,i<u?a:r,i,n.x,n.y)&&(f=Math.abs(i-n.y)/(r-n.x),D(n,e)&&(f<d||f===d&&(n.x>o.x||n.x===o.x&&m(o,n)))&&(o=n,d=f)),n=n.next;while(n!==c);return o}function m(e,t){return x(e.prev,e,t.prev)<0&&x(t.next,e,e.next)<0}function h(e,t,n,r){var i=e;do i.z===0&&(i.z=_(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,g(i)}function g(e){var t,n,r,i,a,o,s,c,l=1;do{for(n=e,e=null,a=null,o=0;n;){for(o++,r=n,s=0,t=0;t<l&&(s++,r=r.nextZ,r);t++);for(c=l;s>0||c>0&&r;)s!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,s--):(i=r,r=r.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,l*=2}while(o>1);return e}function _(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function v(e){var t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function y(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function b(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!E(e,t)&&(D(e,t)&&D(t,e)&&O(e,t)&&(x(e.prev,e,t.prev)||x(e,t.prev,t))||S(e,t)&&x(e.prev,e,e.next)>0&&x(t.prev,t,t.next)>0)}function x(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function S(e,t){return e.x===t.x&&e.y===t.y}function C(e,t,n,r){var i=T(x(e,t,n)),a=T(x(e,t,r)),o=T(x(n,r,e)),s=T(x(n,r,t));return!!(i!==a&&o!==s||i===0&&w(e,n,t)||a===0&&w(e,r,t)||o===0&&w(n,e,r)||s===0&&w(n,t,r))}function w(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function T(e){return e>0?1:e<0?-1:0}function E(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&C(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function D(e,t){return x(e.prev,e,e.next)<0?x(e,t,e.next)>=0&&x(e,e.prev,t)>=0:x(e,t,e.prev)<0||x(e,e.next,t)<0}function O(e,t){var n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function k(e,t){var n=new M(e.i,e.x,e.y),r=new M(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function A(e,t,n,r){var i=new M(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function j(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function M(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}n.deviation=function(e,t,n,r){var i=t&&t.length,a=i?t[0]*n:e.length,o=Math.abs(N(e,0,a,n));if(i)for(var s=0,c=t.length;s<c;s++){var l=t[s]*n,u=s<c-1?t[s+1]*n:e.length;o-=Math.abs(N(e,l,u,n))}var d=0;for(s=0;s<r.length;s+=3){var f=r[s]*n,p=r[s+1]*n,m=r[s+2]*n;d+=Math.abs((e[f]-e[m])*(e[p+1]-e[f+1])-(e[f]-e[p])*(e[m+1]-e[f+1]))}return o===0&&d===0?0:Math.abs((d-o)/o)};function N(e,t,n,r){for(var i=0,a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}n.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,i=0;i<e.length;i++){for(var a=0;a<e[i].length;a++)for(var o=0;o<t;o++)n.vertices.push(e[i][a][o]);i>0&&(r+=e[i-1].length,n.holes.push(r))}return n}}))(),1),er=qt.CLOCKWISE,tr=qt.COUNTER_CLOCKWISE,nr={isClosed:!0};function rr(e){if(e=e&&e.positions||e,!Array.isArray(e)&&!ArrayBuffer.isView(e))throw Error(`invalid polygon`)}function G(e){return`positions`in e?e.positions:e}function ir(e){return`holeIndices`in e?e.holeIndices:null}function ar(e){return Array.isArray(e[0])}function or(e){return e.length>=1&&e[0].length>=2&&Number.isFinite(e[0][0])}function sr(e){let t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function cr(e,t,n,r){for(let i=0;i<t;i++)if(e[n+i]!==e[r-t+i])return!1;return!0}function lr(e,t,n,r,i){let a=t,o=n.length;for(let t=0;t<o;t++)for(let i=0;i<r;i++)e[a++]=n[t][i]||0;if(!sr(n))for(let t=0;t<r;t++)e[a++]=n[0][t]||0;return nr.start=t,nr.end=a,nr.size=r,Jt(e,i,nr),a}function ur(e,t,n,r,i=0,a,o){a||=n.length;let s=a-i;if(s<=0)return t;let c=t;for(let t=0;t<s;t++)e[c++]=n[i+t];if(!cr(n,r,i,a))for(let t=0;t<r;t++)e[c++]=n[i+t];return nr.start=t,nr.end=c,nr.size=r,Jt(e,o,nr),c}function dr(e,t){rr(e);let n=[],r=[];if(`positions`in e){let{positions:i,holeIndices:a}=e;if(a){let e=0;for(let o=0;o<=a.length;o++)e=ur(n,e,i,t,a[o-1],a[o],o===0?er:tr),r.push(e);return r.pop(),{positions:n,holeIndices:r}}e=i}if(!ar(e))return ur(n,0,e,t,0,n.length,er),n;if(!or(e)){let i=0;for(let[a,o]of e.entries())i=lr(n,i,o,t,a===0?er:tr),r.push(i);return r.pop(),{positions:n,holeIndices:r}}return lr(n,0,e,t,er),n}function fr(e,t,n){let r=e.length/3,i=0;for(let a=0;a<r;a++){let o=(a+1)%r;i+=e[a*3+t]*e[o*3+n],i-=e[o*3+t]*e[a*3+n]}return Math.abs(i/2)}function K(e,t,n,r){let i=e.length/3;for(let a=0;a<i;a++){let i=a*3,o=e[i+0],s=e[i+1],c=e[i+2];e[i+t]=o,e[i+n]=s,e[i+r]=c}}function q(e,t,n,r){let i=ir(e);i&&=i.map(e=>e/t);let a=G(e),o=r&&t===3;if(n){let e=a.length;a=a.slice();let r=[];for(let i=0;i<e;i+=t){r[0]=a[i],r[1]=a[i+1],o&&(r[2]=a[i+2]);let e=n(r);a[i]=e[0],a[i+1]=e[1],o&&(a[i+2]=e[2])}}if(o){let e=fr(a,0,1),t=fr(a,0,2),r=fr(a,1,2);if(!e&&!t&&!r)return[];e>t&&e>r||(t>r?(n||(a=a.slice()),K(a,0,2,1)):(n||(a=a.slice()),K(a,2,0,1)))}return(0,W.default)(a,i,t)}var pr=class extends Me{constructor(e){let{fp64:t,IndexType:n=Uint32Array}=e;super({...e,attributes:{positions:{size:3,type:t?Float64Array:Float32Array},vertexValid:{type:Uint16Array,size:1},indices:{type:n,size:1}}})}get(e){let{attributes:t}=this;return e===`indices`?t.indices&&t.indices.subarray(0,this.vertexCount):t[e]}updateGeometry(e){super.updateGeometry(e);let t=this.buffers.indices;if(t)this.vertexCount=(t.value||t).length;else if(this.data&&!this.getGeometry)throw Error(`missing indices buffer`)}normalizeGeometry(e){if(this.normalize){let t=dr(e,this.positionSize);return this.opts.resolution?cn(G(t),ir(t),{size:this.positionSize,gridResolution:this.opts.resolution,edgeTypes:!0}):this.opts.wrapLongitude?gn(G(t),ir(t),{size:this.positionSize,maxLatitude:86,edgeTypes:!0}):t}return e}getGeometrySize(e){if(mr(e)){let t=0;for(let n of e)t+=this.getGeometrySize(n);return t}return G(e).length/this.positionSize}getGeometryFromBuffer(e){return this.normalize||!this.buffers.indices?super.getGeometryFromBuffer(e):null}updateGeometryAttributes(e,t){if(e&&mr(e))for(let n of e){let e=this.getGeometrySize(n);t.geometrySize=e,this.updateGeometryAttributes(n,t),t.vertexStart+=e,t.indexStart=this.indexStarts[t.geometryIndex+1]}else{let n=e;this._updateIndices(n,t),this._updatePositions(n,t),this._updateVertexValid(n,t)}}_updateIndices(e,{geometryIndex:t,vertexStart:n,indexStart:r}){let{attributes:i,indexStarts:a,typedArrayManager:o}=this,s=i.indices;if(!s||!e)return;let c=r,l=q(e,this.positionSize,this.opts.preproject,this.opts.full3d);s=o.allocate(s,r+l.length,{copy:!0});for(let e=0;e<l.length;e++)s[c++]=l[e]+n;a[t+1]=r+l.length,i.indices=s}_updatePositions(e,{vertexStart:t,geometrySize:n}){let{attributes:{positions:r},positionSize:i}=this;if(!r||!e)return;let a=G(e);for(let e=t,o=0;o<n;e++,o++){let t=a[o*i],n=a[o*i+1],s=i>2?a[o*i+2]:0;r[e*3]=t,r[e*3+1]=n,r[e*3+2]=s}}_updateVertexValid(e,{vertexStart:t,geometrySize:n}){let{positionSize:r}=this,i=this.attributes.vertexValid,a=e&&ir(e);if(e&&e.edgeTypes?i.set(e.edgeTypes,t):i.fill(1,t,t+n),a)for(let e=0;e<a.length;e++)i[t+a[e]/r-1]=0;i[t+n-1]=0}};function mr(e){return Array.isArray(e)&&e.length>0&&!Number.isFinite(e[0])}var hr=`struct SolidPolygonUniforms {
  extruded: f32,
  isWireframe: f32,
  elevationScale: f32,
};

@group(0) @binding(auto) var<uniform> solidPolygon: SolidPolygonUniforms;
`,gr=`layout(std140) uniform solidPolygonUniforms {
  bool extruded;
  bool isWireframe;
  float elevationScale;
} solidPolygon;
`,_r={name:`solidPolygon`,source:hr,vs:gr,fs:gr,uniformTypes:{extruded:`f32`,isWireframe:`f32`,elevationScale:`f32`}},vr=`in vec4 fillColors;
in vec4 lineColors;
in float rowIndexes;
out vec4 vColor;
struct PolygonProps {
vec3 positions;
vec3 positions64Low;
vec3 normal;
float elevations;
};
vec3 project_offset_normal(vec3 vector) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSETS) {
return normalize(vector * project.commonUnitsPerWorldUnit);
}
return project_normal(vector);
}
void calculatePosition(PolygonProps props) {
vec3 pos = props.positions;
vec3 pos64Low = props.positions64Low;
vec3 normal = props.normal;
vec4 colors = solidPolygon.isWireframe ? lineColors : fillColors;
geometry.worldPosition = props.positions;
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
if (solidPolygon.extruded) {
pos.z += props.elevations * solidPolygon.elevationScale;
}
gl_Position = project_position_to_clipspace(pos, pos64Low, vec3(0.), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
if (solidPolygon.extruded) {
#ifdef IS_SIDE_VERTEX
normal = project_offset_normal(normal);
#else
normal = project_normal(normal);
#endif
geometry.normal = normal;
vec3 lightColor = lighting_getLightColor(colors.rgb, project.cameraPosition, geometry.position.xyz, geometry.normal);
vColor = vec4(lightColor, colors.a * layer.opacity);
} else {
vColor = vec4(colors.rgb, colors.a * layer.opacity);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,yr=`\
#version 300 es
#define SHADER_NAME solid-polygon-layer-vertex-shader
in vec3 vertexPositions;
in vec3 vertexPositions64Low;
in float elevations;
${vr}
void main(void) {
PolygonProps props;
props.positions = vertexPositions;
props.positions64Low = vertexPositions64Low;
props.elevations = elevations;
props.normal = vec3(0.0, 0.0, 1.0);
calculatePosition(props);
}
`,br=`\
#version 300 es
#define SHADER_NAME solid-polygon-layer-vertex-shader-side
#define IS_SIDE_VERTEX
in vec2 positions;
in vec3 vertexPositions;
in vec3 nextVertexPositions;
in vec3 vertexPositions64Low;
in vec3 nextVertexPositions64Low;
in float elevations;
in float instanceVertexValid;
${vr}
void main(void) {
if(instanceVertexValid < 0.5){
gl_Position = vec4(0.);
return;
}
PolygonProps props;
vec3 pos;
vec3 pos64Low;
vec3 nextPos;
vec3 nextPos64Low;
#if RING_WINDING_ORDER_CW == 1
pos = vertexPositions;
pos64Low = vertexPositions64Low;
nextPos = nextVertexPositions;
nextPos64Low = nextVertexPositions64Low;
#else
pos = nextVertexPositions;
pos64Low = nextVertexPositions64Low;
nextPos = vertexPositions;
nextPos64Low = vertexPositions64Low;
#endif
props.positions = mix(pos, nextPos, positions.x);
props.positions64Low = mix(pos64Low, nextPos64Low, positions.x);
props.normal = vec3(
pos.y - nextPos.y + (pos64Low.y - nextPos64Low.y),
nextPos.x - pos.x + (nextPos64Low.x - pos64Low.x),
0.0);
props.elevations = elevations * positions.y;
calculatePosition(props);
}
`,xr=`#version 300 es
#define SHADER_NAME solid-polygon-layer-fragment-shader
precision highp float;
in vec4 vColor;
out vec4 fragColor;
void main(void) {
fragColor = vColor;
geometry.uv = vec2(0.);
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`;function Sr(){return`fn project_offset_normal(vector: vec3<f32>) -> vec3<f32> {
  if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
      project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSETS) {
    return normalize(vector * project.commonUnitsPerWorldUnit);
  }
  return project_normal(vector);
}

fn apply_polygon_color(
  colors: vec4<f32>,
  normal: vec3<f32>,
  position: vec4<f32>
) -> vec4<f32> {
  if (solidPolygon.extruded > 0.5) {
    let lightColor = lighting_getLightColor2(
      colors.rgb,
      project.cameraPosition,
      position.xyz,
      normal
    );
    return vec4<f32>(lightColor, colors.a * layer.opacity);
  }
  return vec4<f32>(colors.rgb, colors.a * layer.opacity);
}
`}function Cr(){return`@fragment
fn fragmentMain(inp: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = vec2<f32>(0.0, 0.0);

  clip_filterColor(inp.clipCoordinates);

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(inp.pickingColor)) {
      discard;
    }
    return vec4<f32>(inp.pickingColor, 1.0);
  }

  var fragColor = inp.vColor;

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(inp.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return deckgl_premultiplied_alpha(fragColor);
}
`}function wr(){return`\
${Sr()}

struct Attributes {
  @location(0) vertexPositions: vec3<f32>,
  @location(1) vertexPositions64Low: vec3<f32>,
  @location(2) elevations: f32,
  @location(3) fillColors: vec4<f32>,
  @location(4) lineColors: vec4<f32>,
  @location(5) rowIndexes: u32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vColor: vec4<f32>,
  @location(1) pickingColor: vec3<f32>,
  @location(2) clipCoordinates: vec2<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var outp: Varyings;

  var pos = attributes.vertexPositions;
  if (solidPolygon.extruded > 0.5) {
    pos.z += attributes.elevations * solidPolygon.elevationScale;
  }

  geometry.worldPosition = attributes.vertexPositions;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.rowIndexes);

  let projectedPosition = project_position_to_clipspace_and_commonspace(
    pos,
    attributes.vertexPositions64Low,
    vec3<f32>(0.0)
  );
  geometry.position = projectedPosition.commonPosition;
  outp.position = projectedPosition.clipPosition;

  let normal = project_normal(vec3<f32>(0.0, 0.0, 1.0));
  geometry.normal = normal;

  let colors = select(
    attributes.fillColors,
    attributes.lineColors,
    solidPolygon.isWireframe > 0.5
  );
  outp.vColor = apply_polygon_color(colors, normal, geometry.position);
  outp.pickingColor = geometry.pickingColor;

  outp.clipCoordinates = geometry.position.xy;
  clip_filterPosition(&outp.position, geometry.worldPosition.xy);

  return outp;
}

${Cr()}
`}function Tr(e){return`\
const RING_WINDING_ORDER_CW: bool = ${e?`true`:`false`};

${Sr()}

struct Attributes {
  @location(0) positions: vec2<f32>,
  @location(1) vertexPositions: vec3<f32>,
  @location(2) vertexPositions64Low: vec3<f32>,
  @location(3) nextVertexPositions: vec3<f32>,
  @location(4) nextVertexPositions64Low: vec3<f32>,
  @location(5) vertexValid: f32,
  @location(6) elevations: f32,
  @location(7) fillColors: vec4<f32>,
  @location(8) lineColors: vec4<f32>,
  @location(9) rowIndexes: u32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vColor: vec4<f32>,
  @location(1) pickingColor: vec3<f32>,
  @location(2) clipCoordinates: vec2<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var outp: Varyings;
  outp.position = vec4<f32>(0.0);
  outp.vColor = vec4<f32>(0.0);
  outp.pickingColor = picking_getPickingColorFromIndex(attributes.rowIndexes);
  outp.clipCoordinates = vec2<f32>(0.0);

  if (attributes.vertexValid < 0.5) {
    return outp;
  }

  let pos = select(attributes.nextVertexPositions, attributes.vertexPositions, RING_WINDING_ORDER_CW);
  let pos64Low = select(
    attributes.nextVertexPositions64Low,
    attributes.vertexPositions64Low,
    RING_WINDING_ORDER_CW
  );
  let nextPos = select(attributes.vertexPositions, attributes.nextVertexPositions, RING_WINDING_ORDER_CW);
  let nextPos64Low = select(
    attributes.vertexPositions64Low,
    attributes.nextVertexPositions64Low,
    RING_WINDING_ORDER_CW
  );

  let position = mix(pos, nextPos, attributes.positions.x);
  let position64Low = mix(pos64Low, nextPos64Low, attributes.positions.x);

  var worldPosition = position;
  if (solidPolygon.extruded > 0.5) {
    worldPosition.z += attributes.elevations * attributes.positions.y * solidPolygon.elevationScale;
  }

  geometry.worldPosition = position;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.rowIndexes);

  let projectedPosition = project_position_to_clipspace_and_commonspace(
    worldPosition,
    position64Low,
    vec3<f32>(0.0)
  );
  geometry.position = projectedPosition.commonPosition;
  outp.position = projectedPosition.clipPosition;

  let normal = project_offset_normal(vec3<f32>(
    pos.y - nextPos.y + (pos64Low.y - nextPos64Low.y),
    nextPos.x - pos.x + (nextPos64Low.x - pos64Low.x),
    0.0
  ));
  geometry.normal = normal;

  let colors = select(
    attributes.fillColors,
    attributes.lineColors,
    solidPolygon.isWireframe > 0.5
  );
  outp.vColor = apply_polygon_color(colors, normal, geometry.position);
  outp.pickingColor = geometry.pickingColor;

  outp.clipCoordinates = geometry.position.xy;
  clip_filterPosition(&outp.position, geometry.worldPosition.xy);

  return outp;
}

${Cr()}
`}function Er(e,t){return e===`top`?wr():Tr(t)}var Dr=[0,0,0,255],Or={filled:!0,extruded:!1,wireframe:!1,_normalize:!0,_windingOrder:`CW`,_full3d:!1,elevationScale:{type:`number`,min:0,value:1},getPolygon:{type:`accessor`,value:e=>e.polygon},getElevation:{type:`accessor`,value:1e3},getFillColor:{type:`accessor`,value:Dr},getLineColor:{type:`accessor`,value:Dr},material:!0},kr={enter:(e,t)=>t.length?t.subarray(t.length-e.length):e},Ar=class extends i{getShaders(e){let t=!this.props._normalize&&this.props._windingOrder===`CCW`?0:1;return super.getShaders({vs:e===`top`?yr:br,fs:xr,source:Er(e,!!t),defines:{RING_WINDING_ORDER_CW:t},modules:[h,f,Oe,s,_r,...this.context.device.type===`webgpu`?[Ut]:[]]})}get wrapLongitude(){return!1}getBounds(){return this.getAttributeManager()?.getBounds([`vertexPositions`])}initializeState(){let{viewport:e}=this.context,{coordinateSystem:t}=this.props,{_full3d:n}=this.props;e.isGeospatial&&t==="default"&&(t=`lnglat`);let r;t===`lnglat`&&(r=n?e.projectPosition.bind(e):e.projectFlat.bind(e)),this.setState({numInstances:0,polygonTesselator:new pr({preproject:r,fp64:this.use64bitPositions(),IndexType:Uint32Array})});let i=this.getAttributeManager(),a=this.context.device.type===`webgpu`;i.add({indices:{size:1,isIndexed:!0,update:this.calculateIndices,noAlloc:!0},vertexPositions:{size:3,type:`float64`,stepMode:`dynamic`,fp64:this.use64bitPositions(),transition:kr,accessor:`getPolygon`,update:this.calculatePositions,noAlloc:!0,shaderAttributes:{nextVertexPositions:{vertexOffset:1}}},[a?`vertexValid`:`instanceVertexValid`]:{size:1,type:a?`float32`:`uint16`,stepMode:`instance`,update:this.calculateVertexValid,noAlloc:!0},elevations:{size:1,stepMode:`dynamic`,transition:kr,accessor:`getElevation`,bufferGroup:`solid-polygon-instance-data`},fillColors:{size:this.props.colorFormat.length,type:`unorm8`,stepMode:`dynamic`,transition:kr,accessor:`getFillColor`,defaultValue:Dr,bufferGroup:`solid-polygon-instance-data`},lineColors:{size:this.props.colorFormat.length,type:`unorm8`,stepMode:`dynamic`,transition:kr,accessor:`getLineColor`,defaultValue:Dr,bufferGroup:`solid-polygon-instance-data`},rowIndexes:{size:1,type:`uint32`,stepMode:`dynamic`,accessor:(e,{index:t})=>e&&e.__source?e.__source.index:t,bufferGroup:`solid-polygon-instance-data`}})}getPickingInfo(e){let t=super.getPickingInfo(e),{index:n}=t,r=this.props.data;return r[0]&&r[0].__source&&(t.object=r.find(e=>e.__source.index===n)),t}disablePickingIndex(e){let t=this.props.data;if(t[0]&&t[0].__source)for(let n=0;n<t.length;n++)t[n].__source.index===e&&this._disablePickingIndex(n);else super.disablePickingIndex(e)}draw({uniforms:e}){let{extruded:t,filled:n,wireframe:r,elevationScale:i}=this.props,{topModel:a,sideModel:o,wireframeModel:s,polygonTesselator:c}=this.state,l={extruded:!!t,elevationScale:i,isWireframe:!1};s&&r&&(s.setInstanceCount(c.instanceCount-1),s.shaderInputs.setProps({solidPolygon:{...l,isWireframe:!0}}),s.draw(this.context.renderPass)),o&&n&&(o.setInstanceCount(c.instanceCount-1),o.shaderInputs.setProps({solidPolygon:l}),o.draw(this.context.renderPass)),a&&n&&(a.setVertexCount(c.vertexCount),a.shaderInputs.setProps({solidPolygon:l}),a.draw(this.context.renderPass))}updateState(e){super.updateState(e),this.updateGeometry(e);let{props:t,oldProps:n,changeFlags:r}=e,i=this.getAttributeManager();(r.extensionsChanged||t.filled!==n.filled||t.extruded!==n.extruded)&&(this.state.models?.forEach(e=>e.destroy()),this.setState(this._getModels()),i.invalidateAll())}updateGeometry({props:e,oldProps:t,changeFlags:n}){if(n.dataChanged||n.updateTriggersChanged&&(n.updateTriggersChanged.all||n.updateTriggersChanged.getPolygon)){let{polygonTesselator:t}=this.state,r=e.data.attributes||{};t.updateGeometry({data:e.data,normalize:e._normalize,geometryBuffer:r.getPolygon,buffers:r,getGeometry:e.getPolygon,positionFormat:e.positionFormat,wrapLongitude:e.wrapLongitude,resolution:this.context.viewport.resolution,fp64:this.use64bitPositions(),dataChanged:n.dataChanged,full3d:e._full3d}),this.setState({numInstances:t.instanceCount,startIndices:t.vertexStarts}),n.dataChanged||this.getAttributeManager().invalidateAll()}}_getModels(){let{id:e,filled:t,extruded:n}=this.props,r,i,a;if(t){let t=this.getShaders(`top`);t.defines={...t.defines,NON_INSTANCED_MODEL:1};let n=this.getAttributeManager().getBufferLayouts({isInstanced:!1});this.context.device.type===`webgpu`&&(n=n.filter(e=>e.name!==`indices`&&e.name!==`vertexValid`&&e.name!==`instanceVertexValid`&&e.name!==`nextVertexPositions`)),r=new d(this.context.device,{...t,id:`${e}-top`,topology:`triangle-list`,bufferLayout:n,isIndexed:!0,userData:{excludeAttributes:{vertexValid:!0,instanceVertexValid:!0,nextVertexPositions:!0}}})}if(n){let t=this.getAttributeManager().getBufferLayouts({isInstanced:!0});this.context.device.type===`webgpu`&&(t=t.filter(e=>e.name!==`indices`)),i=new d(this.context.device,{...this.getShaders(`side`),id:`${e}-side`,bufferLayout:t,geometry:new o({topology:`triangle-strip`,attributes:{positions:{size:2,value:new Float32Array([1,0,0,0,1,1,0,1])}}}),isInstanced:!0,userData:{excludeAttributes:{indices:!0}}}),a=new d(this.context.device,{...this.getShaders(`side`),id:`${e}-wireframe`,bufferLayout:t,geometry:new o({topology:`line-strip`,attributes:{positions:{size:2,value:new Float32Array([1,0,0,0,0,1,1,1])}}}),isInstanced:!0,userData:{excludeAttributes:{indices:!0}}})}return{models:[i,a,r].filter(Boolean),topModel:r,sideModel:i,wireframeModel:a}}calculateIndices(e){let{polygonTesselator:t}=this.state;e.startIndices=t.indexStarts,e.value=t.get(`indices`)}calculatePositions(e){let{polygonTesselator:t}=this.state;e.startIndices=t.vertexStarts,e.value=t.get(`positions`)}calculateVertexValid(e){let t=this.props.data.attributes?.instanceVertexValid?.value,n=this.context.device.type===`webgpu`&&t?t:this.state.polygonTesselator.get(`vertexValid`);e.value=this.context.device.type===`webgpu`&&n?Float32Array.from(n):n}};Ar.defaultProps=Or,Ar.layerName=`SolidPolygonLayer`;function jr({data:e,getIndex:t,dataRange:n,replace:r}){let{startRow:i=0,endRow:a=1/0}=n,o=e.length,s=o,c=o;for(let n=0;n<o;n++){let r=t(e[n]);if(s>n&&r>=i&&(s=n),r>=a){c=n;break}}let l=s,u=c-s===r.length?void 0:e.slice(c);for(let t=0;t<r.length;t++)e[l++]=r[t];if(u){for(let t=0;t<u.length;t++)e[l++]=u[t];e.length=l}return{startRow:s,endRow:s+r.length}}var Mr=[0,0,0,255],Nr={stroked:!0,filled:!0,extruded:!1,elevationScale:1,wireframe:!1,_normalize:!0,_windingOrder:`CW`,lineWidthUnits:`meters`,lineWidthScale:1,lineWidthMinPixels:0,lineWidthMaxPixels:2**53-1,lineJointRounded:!1,lineMiterLimit:4,lineAntialiasing:!1,getPolygon:{type:`accessor`,value:e=>e.polygon},getFillColor:{type:`accessor`,value:[0,0,0,255]},getLineColor:{type:`accessor`,value:Mr},getLineWidth:{type:`accessor`,value:1},getElevation:{type:`accessor`,value:1e3},material:!0},Pr=class extends Ae{initializeState(){this.state={paths:[],pathsDiff:null},this.props.getLineDashArray&&P.removed(`getLineDashArray`,`PathStyleExtension`)()}updateState({changeFlags:e}){let t=e.dataChanged||e.updateTriggersChanged&&(e.updateTriggersChanged.all||e.updateTriggersChanged.getPolygon);if(t&&Array.isArray(e.dataChanged)){let t=this.state.paths.slice(),n=e.dataChanged.map(e=>jr({data:t,getIndex:e=>e.__source.index,dataRange:e,replace:this._getPaths(e)}));this.setState({paths:t,pathsDiff:n})}else t&&this.setState({paths:this._getPaths(),pathsDiff:null})}_getPaths(e={}){let{data:t,getPolygon:n,positionFormat:r,_normalize:i}=this.props,a=[],o=r===`XY`?2:3,{startRow:s,endRow:c}=e,{iterable:l,objectInfo:u}=m(t,s,c);for(let e of l){u.index++;let t=n(e,u);i&&(t=dr(t,o));let{holeIndices:r}=t,s=t.positions||t;if(r)for(let t=0;t<=r.length;t++){let n=s.slice(r[t-1]||0,r[t]||s.length);a.push(this.getSubLayerRow({path:n},e,u.index))}else a.push(this.getSubLayerRow({path:s},e,u.index))}return a}renderLayers(){let{data:e,_dataDiff:t,stroked:n,filled:r,extruded:i,wireframe:a,_normalize:o,_windingOrder:s,elevationScale:c,transitions:l,positionFormat:u}=this.props,{lineWidthUnits:d,lineWidthScale:f,lineWidthMinPixels:p,lineWidthMaxPixels:m,lineJointRounded:h,lineMiterLimit:g,lineAntialiasing:_,lineDashJustified:v}=this.props,{getFillColor:y,getLineColor:b,getLineWidth:x,getLineDashArray:S,getElevation:C,getPolygon:w,updateTriggers:T,material:E}=this.props,{paths:D,pathsDiff:O}=this.state,k=this.getSubLayerClass(`fill`,Ar),A=this.getSubLayerClass(`stroke`,$n),j=this.shouldRenderSubLayer(`fill`,D)&&new k({_dataDiff:t,extruded:i,elevationScale:c,filled:r,wireframe:a,_normalize:o,_windingOrder:s,getElevation:C,getFillColor:y,getLineColor:i&&a?b:Mr,material:E,transitions:l},this.getSubLayerProps({id:`fill`,updateTriggers:T&&{getPolygon:T.getPolygon,getElevation:T.getElevation,getFillColor:T.getFillColor,lineColors:i&&a,getLineColor:T.getLineColor}}),{data:e,positionFormat:u,getPolygon:w}),M=!i&&n&&this.shouldRenderSubLayer(`stroke`,D)&&new A({_dataDiff:O&&(()=>O),widthUnits:d,widthScale:f,widthMinPixels:p,widthMaxPixels:m,jointRounded:h,miterLimit:g,antialiasing:_,dashJustified:v,_pathType:`loop`,transitions:l&&{getWidth:l.getLineWidth,getColor:l.getLineColor,getPath:l.getPolygon},getColor:this.getSubLayerAccessor(b),getWidth:this.getSubLayerAccessor(x),getDashArray:this.getSubLayerAccessor(S)},this.getSubLayerProps({id:`stroke`,updateTriggers:T&&{getWidth:T.getLineWidth,getColor:T.getLineColor,getDashArray:T.getLineDashArray}}),{data:D,positionFormat:u,getPath:e=>e.path});return[!i&&j,M,i&&j]}};Pr.layerName=`PolygonLayer`,Pr.defaultProps=Nr;function Fr(e,t){if(!e)return null;let n=`startIndices`in e?e.startIndices[t]:t,r=e.featureIds.value[n];return n===-1?null:Ir(e,r,n)}function Ir(e,t,n){let r={properties:{...e.properties[t]}};for(let t in e.numericProps)r.properties[t]=e.numericProps[t].value[n];return r}function Lr(e){let t={points:null,lines:null,polygons:null};for(let n in t){let r=e[n].globalFeatureIds.value;t[n]=new Uint32Array(r)}return t}var Rr=`layout(std140) uniform sdfUniforms {
  float gamma;
  bool enabled;
  float buffer;
  float outlineBuffer;
  vec4 outlineColor;
} sdf;
`,zr={name:`sdf`,vs:Rr,fs:Rr,uniformTypes:{gamma:`f32`,enabled:`f32`,buffer:`f32`,outlineBuffer:`f32`,outlineColor:`vec4<f32>`}},Br={none:0,start:1,center:2,end:3},Vr={name:`text`,vs:`\
layout(std140) uniform textUniforms {
  highp vec2 cutoffPixels;
  highp ivec2 align;
  highp float fontSize;
  bool flipY;
} text;

#define ALIGN_MODE_START ${Br.start}
#define ALIGN_MODE_CENTER ${Br.center}
#define ALIGN_MODE_END ${Br.end}
`,getUniforms:({contentCutoffPixels:e=[0,0],contentAlignHorizontal:t=`none`,contentAlignVertical:n=`none`,fontSize:r,viewport:i})=>({cutoffPixels:e,align:[Br[t],Br[n]],fontSize:r,flipY:i?.flipY??!1}),uniformTypes:{cutoffPixels:`vec2<f32>`,align:`vec2<i32>`,fontSize:`f32`,flipY:`f32`}},Hr=`#version 300 es
#define SHADER_NAME multi-icon-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceSizes;
in float instanceAngles;
in vec4 instanceColors;
in float rowIndexes;
in vec4 instanceIconFrames;
in float instanceColorModes;
in vec2 instanceOffsets;
in vec2 instancePixelOffset;
in vec4 instanceClipRect;
out float vColorMode;
out vec4 vColor;
out vec2 vTextureCoords;
out vec2 uv;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = angle * PI / 180.0;
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
float getPixelOffsetFromAlignment(float anchor, float extent, float clipStart, float clipEnd, int mode) {
if (clipEnd < clipStart) return 0.0;
if (mode == ALIGN_MODE_START) {
return max(- (anchor + clipStart), 0.0);
}
if (mode == ALIGN_MODE_CENTER) {
float _min = max(0., anchor + clipStart);
float _max = min(extent, anchor + clipEnd);
return _min < _max ? (_min + _max) / 2.0 - anchor : 0.0;
}
if (mode == ALIGN_MODE_END) {
return min(extent - (anchor + clipEnd), 0.);
}
return 0.0;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
uv = positions;
vec2 iconSize = instanceIconFrames.zw;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * icon.sizeScale, icon.sizeUnits),
icon.sizeMinPixels, icon.sizeMaxPixels
);
float instanceScale = sizePixels / text.fontSize;
vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;
pixelOffset += instancePixelOffset;
pixelOffset.y *= -1.0;
vec2 anchorPosScreen;
if (icon.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
anchorPosScreen = gl_Position.xy / gl_Position.w;
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
if (text.flipY) {
offset_common.y *= -1.;
}
DECKGL_FILTER_SIZE(offset_common, geometry);
vec4 anchorPos = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0));
anchorPosScreen = anchorPos.xy / anchorPos.w;
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
anchorPosScreen = vec2(anchorPosScreen.x + 1.0, 1.0 - anchorPosScreen.y) / 2.0 * project.viewportSize / project.devicePixelRatio;
vec2 xy = project_size_to_pixel(instanceClipRect.xy);
vec2 wh = project_size_to_pixel(instanceClipRect.zw);
if (text.flipY) {
xy.y = -xy.y - wh.y;
}
if (text.align.x > 0 || text.align.y > 0) {
vec2 viewportPixels = project.viewportSize / project.devicePixelRatio;
vec2 scrollPixels = vec2(
getPixelOffsetFromAlignment(anchorPosScreen.x, viewportPixels.x, xy.x, xy.x + wh.x, text.align.x),
-getPixelOffsetFromAlignment(anchorPosScreen.y, viewportPixels.y, -xy.y - wh.y, -xy.y, text.align.y)
);
pixelOffset += scrollPixels;
gl_Position.xy += project_pixel_size_to_clipspace(scrollPixels);
}
if (instanceClipRect.z >= 0.) {
if (pixelOffset.x < xy.x || pixelOffset.x > xy.x + wh.x) {
gl_Position = vec4(0.0);
}
else if (text.cutoffPixels.x > 0.) {
float vpWidth = project.viewportSize.x / project.devicePixelRatio;
float l = max(anchorPosScreen.x + xy.x, 0.0);
float r = min(anchorPosScreen.x + xy.x + wh.x, vpWidth);
if (r - l < text.cutoffPixels.x) {
gl_Position = vec4(0.0);
}
}
}
if (instanceClipRect.w >= 0.) {
if (pixelOffset.y < xy.y || pixelOffset.y > xy.y + wh.y) {
gl_Position = vec4(0.0);
}
else if (text.cutoffPixels.y > 0.) {
float vpHeight = project.viewportSize.y / project.devicePixelRatio;
float t = max(anchorPosScreen.y - xy.y - wh.y, 0.0);
float b = min(anchorPosScreen.y - xy.y, vpHeight);
if (b - t < text.cutoffPixels.y) {
gl_Position = vec4(0.0);
}
}
}
vTextureCoords = mix(
instanceIconFrames.xy,
instanceIconFrames.xy + iconSize,
(positions.xy + 1.0) / 2.0
) / icon.iconsTextureDim;
vColor = instanceColors;
DECKGL_FILTER_COLOR(vColor, geometry);
vColorMode = instanceColorModes;
}
`,Ur=`#version 300 es
#define SHADER_NAME multi-icon-layer-fragment-shader
precision highp float;
uniform sampler2D iconsTexture;
in vec4 vColor;
in vec2 vTextureCoords;
in vec2 uv;
out vec4 fragColor;
void main(void) {
geometry.uv = uv;
if (!bool(picking.isActive)) {
float alpha = texture(iconsTexture, vTextureCoords).a;
vec4 color = vColor;
if (sdf.enabled) {
float distance = alpha;
alpha = smoothstep(sdf.buffer - sdf.gamma, sdf.buffer + sdf.gamma, distance);
if (sdf.outlineBuffer > 0.0) {
float inFill = alpha;
float inBorder = smoothstep(sdf.outlineBuffer - sdf.gamma, sdf.outlineBuffer + sdf.gamma, distance);
color = mix(sdf.outlineColor, vColor, inFill);
alpha = inBorder;
}
}
float a = alpha * color.a;
if (a < icon.alphaCutoff) {
discard;
}
fragColor = vec4(color.rgb, a * layer.opacity);
}
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`;function Wr({collision:e=!1}={}){return`\
struct IconUniforms {
  sizeScale: f32,
  iconsTextureDim: vec2<f32>,
  sizeBasis: f32,
  sizeMinPixels: f32,
  sizeMaxPixels: f32,
  billboard: i32,
  sizeUnits: i32,
  alphaCutoff: f32
};

struct TextUniforms {
  cutoffPixels: vec2<f32>,
  align: vec2<i32>,
  fontSize: f32,
  flipY: f32
};

struct SdfUniforms {
  gamma: f32,
  enabled: f32,
  buffer: f32,
  outlineBuffer: f32,
  outlineColor: vec4<f32>
};

${e?`struct CollisionUniforms {
  sort: i32,
  enabled: i32
};
`:``}

const ALIGN_MODE_START: i32 = 1;
const ALIGN_MODE_CENTER: i32 = 2;
const ALIGN_MODE_END: i32 = 3;

@group(0) @binding(auto) var<uniform> icon: IconUniforms;
@group(0) @binding(auto) var<uniform> text: TextUniforms;
@group(0) @binding(auto) var<uniform> sdf: SdfUniforms;
${e?`@group(0) @binding(auto) var<uniform> collision: CollisionUniforms;`:``}
@group(0) @binding(auto) var iconsTexture : texture_2d<f32>;
@group(0) @binding(auto) var iconsTextureSampler : sampler;
${e?`@group(0) @binding(auto) var collision_texture : texture_2d<f32>;
`:``}

fn rotate_by_angle(vertex: vec2<f32>, angle_deg: f32) -> vec2<f32> {
  let angle_radian = angle_deg * PI / 180.0;
  let c = cos(angle_radian);
  let s = sin(angle_radian);
  let rotation = mat2x2<f32>(vec2<f32>(c, -s), vec2<f32>(s, c));
  return rotation * vertex;
}

fn get_pixel_offset_from_alignment(
  anchor: f32,
  extent: f32,
  clipStart: f32,
  clipEnd: f32,
  mode: i32
) -> f32 {
  if (clipEnd < clipStart) {
    return 0.0;
  }
  if (mode == ALIGN_MODE_START) {
    return max(-(anchor + clipStart), 0.0);
  }
  if (mode == ALIGN_MODE_CENTER) {
    let minValue = max(0.0, anchor + clipStart);
    let maxValue = min(extent, anchor + clipEnd);
    if (minValue < maxValue) {
      return (minValue + maxValue) / 2.0 - anchor;
    }
    return 0.0;
  }
  if (mode == ALIGN_MODE_END) {
    return min(extent - (anchor + clipEnd), 0.0);
  }
  return 0.0;
}

${e?`fn collision_match(texCoords: vec2<f32>, pickingColor: vec3<f32>) -> f32 {
  let textureSize = vec2<i32>(textureDimensions(collision_texture));
  let pixelCoords = clamp(
    vec2<i32>(texCoords * vec2<f32>(textureSize)),
    vec2<i32>(0),
    textureSize - vec2<i32>(1)
  );
  let collisionPickingColor = textureLoad(collision_texture, pixelCoords, 0);
  let delta = dot(abs(collisionPickingColor.rgb - pickingColor), vec3<f32>(1.0));
  return step(delta, 0.001);
}

fn collision_is_visible(texCoords: vec2<f32>, pickingColor: vec3<f32>) -> f32 {
  if (collision.enabled == 0) {
    return 1.0;
  }

  var accumulator = 0.0;
  let stepSize = vec2<f32>(1.0) / project.viewportSize;

  for (var i: i32 = -2; i <= 2; i = i + 1) {
    for (var j: i32 = -2; j <= 2; j = j + 1) {
      let delta = vec2<f32>(f32(j), f32(i)) * stepSize;
      accumulator = accumulator + collision_match(texCoords + delta, pickingColor);
    }
  }

  return pow(accumulator / 25.0, 2.2);
}
`:``}

struct Attributes {
  @location(0) positions: vec2<f32>,

  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceSizes: f32,
  @location(4) instanceAngles: f32,
  @location(5) instanceColors: vec4<f32>,
  @location(6) instanceIconFrames: vec4<f32>,
  @location(7) instanceColorModes: f32,
  @location(8) instanceOffsets: vec2<f32>,
  @location(9) instancePixelOffset: vec2<f32>,
  @location(10) rowIndexes: u32,
  @location(11) instanceClipRect: vec4<f32>,
  ${e?`@location(12) collisionPriorities: f32,`:``}
};

struct Varyings {
  @builtin(position) position: vec4<f32>,

  @location(0) vColorMode: f32,
  @location(1) vColor: vec4<f32>,
  @location(2) vTextureCoords: vec2<f32>,
  @location(3) uv: vec2<f32>,
  @location(4) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(inp: Attributes) -> Varyings {
  geometry.worldPosition = inp.instancePositions;
  geometry.uv = inp.positions;
  geometry.pickingColor = picking_getPickingColorFromIndex(inp.rowIndexes);

  var outp: Varyings;
  outp.uv = inp.positions;

  let iconSize = inp.instanceIconFrames.zw;

  let sizePixels = clamp(
    project_unit_size_to_pixel(inp.instanceSizes * icon.sizeScale, icon.sizeUnits),
    icon.sizeMinPixels, icon.sizeMaxPixels
  );
  let instanceScale = sizePixels / text.fontSize;

  var pixelOffset = inp.positions / 2.0 * iconSize + inp.instanceOffsets;
  pixelOffset = rotate_by_angle(pixelOffset, inp.instanceAngles) * instanceScale;
  pixelOffset = pixelOffset + inp.instancePixelOffset;
  pixelOffset.y = pixelOffset.y * -1.0;

  var pos: vec4<f32>;
  var anchorPosScreen: vec2<f32>;
  if (icon.billboard != 0) {
    pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, vec3<f32>(0.0));
    anchorPosScreen = pos.xy / pos.w;

    let clipOffset = project_pixel_size_to_clipspace(pixelOffset);
    pos = vec4<f32>(pos.x + clipOffset.x, pos.y + clipOffset.y, pos.z, pos.w);
  } else {
    var offsetCommon = vec3<f32>(project_pixel_size_vec2(pixelOffset), 0.0);
    if (text.flipY > 0.5) {
      offsetCommon.y = offsetCommon.y * -1.0;
    }
    let anchorPos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, vec3<f32>(0.0));
    anchorPosScreen = anchorPos.xy / anchorPos.w;
    pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, offsetCommon);
  }

  anchorPosScreen = vec2<f32>(anchorPosScreen.x + 1.0, 1.0 - anchorPosScreen.y) / 2.0 *
    project.viewportSize / project.devicePixelRatio;
  var xy = project_size_vec2(inp.instanceClipRect.xy) * project.scale;
  var wh = project_size_vec2(inp.instanceClipRect.zw) * project.scale;

  if (text.flipY > 0.5) {
    xy.y = -xy.y - wh.y;
  }
  if (text.align.x > 0 || text.align.y > 0) {
    let viewportPixels = project.viewportSize / project.devicePixelRatio;
    let scrollPixels = vec2<f32>(
      get_pixel_offset_from_alignment(anchorPosScreen.x, viewportPixels.x, xy.x, xy.x + wh.x, text.align.x),
      -get_pixel_offset_from_alignment(anchorPosScreen.y, viewportPixels.y, -xy.y - wh.y, -xy.y, text.align.y)
    );
    pixelOffset = pixelOffset + scrollPixels;
    let scrollClipOffset = project_pixel_size_to_clipspace(scrollPixels);
    pos.x = pos.x + scrollClipOffset.x;
    pos.y = pos.y + scrollClipOffset.y;
  }

  if (inp.instanceClipRect.z >= 0.0) {
    if (pixelOffset.x < xy.x || pixelOffset.x > xy.x + wh.x) {
      pos = vec4<f32>(0.0);
    } else if (text.cutoffPixels.x > 0.0) {
      let viewportWidth = project.viewportSize.x / project.devicePixelRatio;
      let left = max(anchorPosScreen.x + xy.x, 0.0);
      let right = min(anchorPosScreen.x + xy.x + wh.x, viewportWidth);
      if (right - left < text.cutoffPixels.x) {
        pos = vec4<f32>(0.0);
      }
    }
  }
  if (inp.instanceClipRect.w >= 0.0) {
    if (pixelOffset.y < xy.y || pixelOffset.y > xy.y + wh.y) {
      pos = vec4<f32>(0.0);
    } else if (text.cutoffPixels.y > 0.0) {
      let viewportHeight = project.viewportSize.y / project.devicePixelRatio;
      let top = max(anchorPosScreen.y - xy.y - wh.y, 0.0);
      let bottom = min(anchorPosScreen.y - xy.y, viewportHeight);
      if (bottom - top < text.cutoffPixels.y) {
        pos = vec4<f32>(0.0);
      }
    }
  }

  ${e?`  if (collision.sort != 0) {
    pos.z = -0.001 * inp.collisionPriorities * pos.w;
  }
  `:``}

  let uvMix = (inp.positions.xy + vec2<f32>(1.0, 1.0)) * 0.5;
  outp.vTextureCoords = mix(inp.instanceIconFrames.xy, inp.instanceIconFrames.xy + iconSize, uvMix) / icon.iconsTextureDim;

  outp.position = pos;
  outp.vColor = inp.instanceColors;
  outp.vColorMode = inp.instanceColorModes;
  outp.pickingColor = picking_getPickingColorFromIndex(inp.rowIndexes);

  return outp;
}

@fragment
fn fragmentMain(inp: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = inp.uv;

  let texColor = textureSample(iconsTexture, iconsTextureSampler, inp.vTextureCoords);
  var alpha = texColor.a;
  var color = inp.vColor;

  if (sdf.enabled > 0.5) {
    let distance = alpha;
    alpha = smoothstep(sdf.buffer - sdf.gamma, sdf.buffer + sdf.gamma, distance);

    if (sdf.outlineBuffer > 0.0) {
      let inFill = alpha;
      let inBorder = smoothstep(sdf.outlineBuffer - sdf.gamma, sdf.outlineBuffer + sdf.gamma, distance);
      color = mix(sdf.outlineColor, inp.vColor, inFill);
      alpha = inBorder;
    }
  } else if (inp.vColorMode == 0.0) {
    color = texColor;
  }

  var a = alpha * color.a * layer.opacity;
  if (a < icon.alphaCutoff) {
    discard;
  }

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(inp.pickingColor)) {
      discard;
    }
    return vec4<f32>(inp.pickingColor, 1.0);
  }

  ${e?`  let collisionFade = collision_is_visible(inp.position.xy / project.viewportSize, inp.pickingColor);
  a = a * collisionFade;
  if (a <= 0.0001) {
    discard;
  }
  `:``}

  var fragColor = deckgl_premultiplied_alpha(vec4<f32>(color.rgb, a));

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(inp.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return fragColor;
}
`}var Gr=Wr(),Kr=192/256,qr={getIconOffsets:{type:`accessor`,value:e=>e.offsets},getContentBox:{type:`accessor`,value:[0,0,-1,-1]},fontSize:1,alphaCutoff:.001,smoothing:.1,outlineWidth:0,outlineColor:{type:`color`,value:[0,0,0,255]},contentCutoffPixels:{type:`array`,value:[0,0]},contentAlignHorizontal:`none`,contentAlignVertical:`none`},Jr=class extends wt{getShaders(){let e=super.getShaders();return{...e,modules:[...e.modules,Vr,zr],vs:Hr,fs:Ur,source:Gr}}initializeState(){super.initializeState();let e=this.getAttributeManager(),t=e.attributes.instanceIconDefs;t.settings.update=this.calculateInstanceIconDefs,e.addInstanced({rowIndexes:{type:`uint32`,size:1,bufferGroup:`icon-instance-data`,accessor:(e,{index:t})=>t},instanceClipRect:{size:4,bufferGroup:`icon-instance-data`,accessor:`getContentBox`,defaultValue:[0,0,-1,-1]}})}updateState(e){super.updateState(e);let{props:t,oldProps:n,changeFlags:r}=e,{outlineColor:i}=t;if(r.extensionsChanged){this.state.fillModel?.destroy();let e=this.context.device.type===`webgpu`?this._getModel(`${this.props.id}-fill`):void 0;this.setState({fillModel:e,models:e?[this.state.model,e]:[this.state.model]})}if(r.updateTriggersChanged&&(r.updateTriggersChanged.getIcon||r.updateTriggersChanged.getIconOffsets)&&this.getAttributeManager().invalidate(`instanceIconDefs`),i!==n.outlineColor){let e=[i[0]/255,i[1]/255,i[2]/255,(i[3]??255)/255];this.setState({outlineColor:e})}!t.sdf&&t.outlineWidth&&P.warn(`${this.id}: fontSettings.sdf is required to render outline`)()}draw(e){let{sdf:t,smoothing:n,fontSize:r,outlineWidth:i,contentCutoffPixels:a,contentAlignHorizontal:o,contentAlignVertical:s}=this.props,{outlineColor:c}=this.state,l=i?Math.max(n,Kr*(1-i)):-1,u=this.state.model,d={buffer:Kr,outlineBuffer:l,gamma:n,enabled:!!t,outlineColor:c},f={contentCutoffPixels:a,contentAlignHorizontal:o,contentAlignVertical:s,fontSize:r,viewport:this.context.viewport};if(u.shaderInputs.setProps({sdf:d,text:f}),super.draw(e),t&&i){let{iconManager:e}=this.state;if(e.getTexture()){let e=this.state.fillModel||u;e.shaderInputs.setProps({sdf:{...d,outlineBuffer:Kr},text:f}),this._drawModel(e)}}}calculateInstanceIconDefs(e,{startRow:t,endRow:n}){let{data:r,getIcon:i,getIconOffsets:a}=this.props,o=e.getVertexOffset(t),s=e.value,{iterable:c,objectInfo:l}=m(r,t,n);for(let t of c){l.index++;let n=i(t,l),r=a(t,l);if(n){let t=0;for(let i of Array.from(n)){let n=super.getInstanceIconDef(i);n[0]=r[t*2],n[1]+=r[t*2+1],n[6]=1,s.set(n,o),o+=e.size,t++}}}}};Jr.defaultProps=qr,Jr.layerName=`MultiIconLayer`;var Yr=32,Xr=[];function Zr(e){return 2**Math.ceil(Math.log2(e))}function Qr({characterSet:e,measureText:t,buffer:n,maxCanvasWidth:r,mapping:i={},xOffset:a=0,yOffsetMin:o=0,yOffsetMax:s=0}){let c=a,l=o,u=s;for(let a of e)if(!i[a]){let{advance:e,width:o,ascent:s,descent:d}=t(a),f=s+d;c+o+n*2>r&&(c=0,l=u),i[a]={x:c+n,y:l+n,width:o,height:f,advance:e,anchorX:o/2,anchorY:s},c+=o+n*2,u=Math.max(u,l+f+n*2)}return{mapping:i,xOffset:c,yOffsetMin:l,yOffsetMax:u,canvasHeight:Zr(u)}}function $r(e,t,n,r){let i=0;for(let a=t;a<n;a++){let t=e[a];i+=r[t]?.advance||0}return i}function ei(e,t,n,r,i,a){let o=t,s=0;for(let c=t;c<n;c++){let t=$r(e,c,c+1,i);s+t>r&&(o<c&&a.push(c),o=c,s=0),s+=t}return s}function ti(e,t,n,r,i,a){let o=t,s=t,c=t,l=0;for(let u=t;u<n;u++)if((e[u]===` `||e[u+1]===` `||u+1===n)&&(c=u+1),c>s){let t=$r(e,s,c,i);l+t>r&&(o<s&&(a.push(s),o=s,l=0),t>r&&(t=ei(e,s,c,r,i,a),o=a[a.length-1])),s=c,l+=t}return l}function ni(e,t,n,r,i=0,a){a===void 0&&(a=e.length);let o=[];return t===`break-all`?ei(e,i,a,n,r,o):ti(e,i,a,n,r,o),o}function ri(e,t,n,r,i,a){let o=0,s=0;for(let i=t;i<n;i++){let t=r[e[i]];t&&(s=Math.max(s,t.height))}for(let a=t;a<n;a++){let t=e[a],n=r[t];n?(i[a]=o+n.anchorX,o+=n.advance):(P.warn(`Missing character: ${t} (${t.codePointAt(0)})`)(),i[a]=o,o+=Yr)}a[0]=o,a[1]=s}function ii(e,t,n,r,i,a){let o=Array.from(e),s=o.length,c=Array(s),l=Array(s),u=Array(s),d=(r===`break-word`||r===`break-all`)&&isFinite(i)&&i>0,f=[0,0],p=[0,0],m=0,h=t+n/2,g=0,_=0;for(let e=0;e<=s;e++){let t=o[e];if((t===`
`||e===s)&&(_=e),_>g){let e=d?ni(o,r,i,a,g,_):Xr;for(let t=0;t<=e.length;t++){let r=t===0?g:e[t-1],i=t<e.length?e[t]:_;ri(o,r,i,a,c,p);for(let e=r;e<i;e++)l[e]=h,u[e]=p[0];m++,h+=n,f[0]=Math.max(f[0],p[0])}g=_}t===`
`&&(c[g]=0,l[g]=0,u[g]=0,g++)}return f[1]=m*n,{x:c,y:l,rowWidth:u,size:f}}function ai({value:e,length:t,stride:n,offset:r,startIndices:i,characterSet:a}){let o=e.BYTES_PER_ELEMENT,s=n?n/o:1,c=r?r/o:0,l=i[t]||Math.ceil((e.length-c)/s),u=a&&new Set,d=Array(t),f=e;if(s>1||c>0){let t=e.constructor;f=new t(l);for(let t=0;t<l;t++)f[t]=e[t*s+c]}for(let e=0;e<t;e++){let t=i[e],n=i[e+1]||l,r=f.subarray(t,n);d[e]=String.fromCodePoint.apply(null,r),u&&r.forEach(u.add,u)}if(u)for(let e of u)a.add(String.fromCodePoint(e));return{texts:d,characterCount:l}}var oi=class{constructor(e=5){this._cache={},this._order=[],this.limit=e}get(e){let t=this._cache[e];return t&&(this._deleteOrder(e),this._appendOrder(e)),t}set(e,t){this._cache[e]?(this.delete(e),this._cache[e]=t,this._appendOrder(e)):(Object.keys(this._cache).length===this.limit&&this.delete(this._order[0]),this._cache[e]=t,this._appendOrder(e))}delete(e){this._cache[e]&&(delete this._cache[e],this._deleteOrder(e))}_deleteOrder(e){let t=this._order.indexOf(e);t>=0&&this._order.splice(t,1)}_appendOrder(e){this._order.push(e)}};function si(){let e=[];for(let t=32;t<128;t++)e.push(String.fromCharCode(t));return e}var ci={fontFamily:`Monaco, monospace`,fontWeight:`normal`,characterSet:si(),fontSize:64,buffer:4,sdf:!1,cutoff:.25,radius:12,smoothing:.1},li=1024,ui=.9,di=.3,fi=3,pi=new oi(fi);function mi(e,t){let n;n=typeof t==`string`?new Set(Array.from(t)):new Set(t);let r=pi.get(e);if(!r)return n;for(let e in r.mapping)n.has(e)&&n.delete(e);return n}function hi(e,t){for(let n=0;n<e.length;n++)t.data[4*n+3]=e[n]}function gi(e,t,n,r){e.font=`${r} ${n}px ${t}`,e.fillStyle=`#000`,e.textBaseline=`alphabetic`,e.textAlign=`left`}function _i(e,t,n){if(n===void 0){let n=e.measureText(`A`);return n.fontBoundingBoxAscent?{advance:0,width:0,ascent:Math.ceil(n.fontBoundingBoxAscent),descent:Math.ceil(n.fontBoundingBoxDescent)}:{advance:0,width:0,ascent:t*ui,descent:t*di}}let r=e.measureText(n);return r.actualBoundingBoxAscent?{advance:r.width,width:Math.ceil(r.actualBoundingBoxRight-r.actualBoundingBoxLeft),ascent:Math.ceil(r.actualBoundingBoxAscent),descent:Math.ceil(r.actualBoundingBoxDescent)}:{advance:r.width,width:r.width,ascent:t*ui,descent:t*di}}function vi(e){P.assert(Number.isFinite(e)&&e>=fi,`Invalid cache limit`),pi=new oi(e)}var yi=class{constructor(){this.props={...ci}}get atlas(){return this._atlas}get mapping(){return this._atlas&&this._atlas.mapping}setProps(e={}){Object.assign(this.props,e),e._getFontRenderer&&(this._getFontRenderer=e._getFontRenderer),this._key=this._getKey();let t=mi(this._key,this.props.characterSet),n=pi.get(this._key);if(n&&t.size===0){this._atlas!==n&&(this._atlas=n);return}let r=this._generateFontAtlas(t,n);this._atlas=r,pi.set(this._key,r)}_generateFontAtlas(e,t){let{fontFamily:n,fontWeight:r,fontSize:i,buffer:a,sdf:o,radius:s,cutoff:c}=this.props,l=t&&t.data;l||(l=document.createElement(`canvas`),l.width=li);let u=l.getContext(`2d`,{willReadFrequently:!0});gi(u,n,i,r);let d=e=>_i(u,i,e),f;this._getFontRenderer?f=this._getFontRenderer(this.props):o&&(f={measure:d,draw:bi(this.props)});let{mapping:p,canvasHeight:m,xOffset:h,yOffsetMin:g,yOffsetMax:_}=Qr({measureText:e=>f?f.measure(e):d(e),buffer:a,characterSet:e,maxCanvasWidth:li,...t&&{mapping:t.mapping,xOffset:t.xOffset,yOffsetMin:t.yOffsetMin,yOffsetMax:t.yOffsetMax}});if(l.height!==m){let e=l.height>0?u.getImageData(0,0,l.width,l.height):null;l.height=m,e&&u.putImageData(e,0,0)}if(gi(u,n,i,r),f)for(let t of e){let e=p[t],n=e.width,{data:r,left:i=0,top:a=0}=f.draw(t),o=e.x-i,s=e.y-a,c=Math.max(0,Math.round(o)),d=Math.max(0,Math.round(s)),m=Math.min(r.width,l.width-c),h=Math.min(r.height,l.height-d);u.putImageData(r,c,d,0,0,m,h),e.x=c,e.y=d,e.width=m,e.height=h,e.anchorX+=m/2-i-n/2,e.anchorY+=a}else for(let t of e){let e=p[t];u.fillText(t,e.x,e.y+e.anchorY)}let v=f?f.measure():d();return{baselineOffset:(v.ascent-v.descent)/2,xOffset:h,yOffsetMin:g,yOffsetMax:_,mapping:p,data:l,width:l.width,height:l.height}}_getKey(){let{fontFamily:e,fontWeight:t,fontSize:n,buffer:r,sdf:i,radius:a,cutoff:o}=this.props;return i?`${e} ${t} ${n} ${r} ${a} ${o}`:`${e} ${t} ${n} ${r}`}};function bi({fontSize:e,buffer:t,radius:n,cutoff:r,fontFamily:i,fontWeight:a}){let o=new ce({fontSize:e,buffer:t,radius:n,cutoff:r,fontFamily:i,fontWeight:`${a}`});return e=>{let{data:n,width:r,height:i}=o.draw(e),a=new ImageData(r,i);return hi(n,a),{data:a,left:t,top:t}}}var xi=`struct TextBackgroundUniforms {
  billboard: f32,
  sizeScale: f32,
  sizeMinPixels: f32,
  sizeMaxPixels: f32,
  borderRadius: vec4<f32>,
  padding: vec4<f32>,
  sizeUnits: i32,
  stroked: f32,
};

@group(0) @binding(auto) var<uniform> textBackground: TextBackgroundUniforms;
`,Si=`layout(std140) uniform textBackgroundUniforms {
  bool billboard;
  float sizeScale;
  float sizeMinPixels;
  float sizeMaxPixels;
  vec4 borderRadius;
  vec4 padding;
  highp int sizeUnits;
  bool stroked;
} textBackground;
`,Ci={name:`textBackground`,source:xi,vs:Si,fs:Si,uniformTypes:{billboard:`f32`,sizeScale:`f32`,sizeMinPixels:`f32`,sizeMaxPixels:`f32`,borderRadius:`vec4<f32>`,padding:`vec4<f32>`,sizeUnits:`i32`,stroked:`f32`}},wi=`#version 300 es
#define SHADER_NAME text-background-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in vec4 instanceRects;
in vec4 instanceClipRect;
in float instanceSizes;
in float instanceAngles;
in vec2 instancePixelOffsets;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
out vec4 vFillColor;
out vec4 vLineColor;
out float vLineWidth;
out vec2 uv;
out vec2 dimensions;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = radians(angle);
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = picking_getPickingColorFromInstanceID();
uv = positions;
vLineWidth = instanceLineWidths;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * textBackground.sizeScale, textBackground.sizeUnits),
textBackground.sizeMinPixels, textBackground.sizeMaxPixels
);
float instanceScale = sizePixels / text.fontSize;
dimensions = instanceRects.zw * instanceScale + textBackground.padding.xy + textBackground.padding.zw;
vec2 pixelOffset = (positions * instanceRects.zw + instanceRects.xy) * instanceScale + mix(-textBackground.padding.xy, textBackground.padding.zw, positions);
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles);
pixelOffset += instancePixelOffsets;
pixelOffset.y *= -1.0;
vec2 xy = project_size_to_pixel(instanceClipRect.xy);
vec2 wh = project_size_to_pixel(instanceClipRect.zw);
if (text.flipY) {
xy.y = -xy.y - wh.y;
}
if (instanceClipRect.z >= 0.0) {
dimensions.x = wh.x;
pixelOffset.x = xy.x + uv.x * wh.x + mix(-textBackground.padding.x, textBackground.padding.z, uv.x);
}
if (instanceClipRect.w >= 0.0) {
dimensions.y = wh.y;
pixelOffset.y = xy.y + uv.y * wh.y + mix(-textBackground.padding.y, textBackground.padding.w, uv.y);
}
if (textBackground.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
if (text.flipY) {
offset_common.y *= -1.;
}
DECKGL_FILTER_SIZE(offset_common, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vFillColor, geometry);
vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vLineColor, geometry);
}
`,Ti=`#version 300 es
#define SHADER_NAME text-background-layer-fragment-shader
precision highp float;
in vec4 vFillColor;
in vec4 vLineColor;
in float vLineWidth;
in vec2 uv;
in vec2 dimensions;
out vec4 fragColor;
float round_rect(vec2 p, vec2 size, vec4 radii) {
vec2 pixelPositionCB = (p - 0.5) * size;
vec2 sizeCB = size * 0.5;
float maxBorderRadius = min(size.x, size.y) * 0.5;
vec4 borderRadius = vec4(min(radii, maxBorderRadius));
borderRadius.xy =
(pixelPositionCB.x > 0.0) ? borderRadius.xy : borderRadius.zw;
borderRadius.x = (pixelPositionCB.y > 0.0) ? borderRadius.x : borderRadius.y;
vec2 q = abs(pixelPositionCB) - sizeCB + borderRadius.x;
return -(min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - borderRadius.x);
}
float rect(vec2 p, vec2 size) {
vec2 pixelPosition = p * size;
return min(min(pixelPosition.x, size.x - pixelPosition.x),
min(pixelPosition.y, size.y - pixelPosition.y));
}
vec4 get_stroked_fragColor(float dist) {
float isBorder = smoothedge(dist, vLineWidth);
return mix(vFillColor, vLineColor, isBorder);
}
void main(void) {
geometry.uv = uv;
if (textBackground.borderRadius != vec4(0.0)) {
float distToEdge = round_rect(uv, dimensions, textBackground.borderRadius);
float shapeAlpha = smoothedge(-distToEdge, 0.0);
if (shapeAlpha == 0.0) {
discard;
}
if (textBackground.stroked) {
fragColor = get_stroked_fragColor(distToEdge);
} else {
fragColor = vFillColor;
}
fragColor.a *= shapeAlpha;
} else {
if (textBackground.stroked) {
float distToEdge = rect(uv, dimensions);
fragColor = get_stroked_fragColor(distToEdge);
} else {
fragColor = vFillColor;
}
}
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,Ei=`struct TextUniforms {
  cutoffPixels: vec2<f32>,
  align: vec2<i32>,
  fontSize: f32,
  flipY: f32,
};

@group(0) @binding(auto) var<uniform> text: TextUniforms;

fn rotate_by_angle(vertex: vec2<f32>, angle: f32) -> vec2<f32> {
  let angleRadian = radians(angle);
  let cosine = cos(angleRadian);
  let sine = sin(angleRadian);
  let rotationMatrix = mat2x2<f32>(
    vec2<f32>(cosine, -sine),
    vec2<f32>(sine, cosine)
  );
  return rotationMatrix * vertex;
}

struct Attributes {
  @builtin(instance_index) instanceIndex: u32,
  @location(0) positions: vec2<f32>,
  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceSizes: f32,
  @location(4) instanceAngles: f32,
  @location(5) instanceRects: vec4<f32>,
  @location(6) instanceClipRect: vec4<f32>,
  @location(7) instancePixelOffsets: vec2<f32>,
  @location(8) instanceFillColors: vec4<f32>,
  @location(9) instanceLineColors: vec4<f32>,
  @location(10) instanceLineWidths: f32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vFillColor: vec4<f32>,
  @location(1) vLineColor: vec4<f32>,
  @location(2) vLineWidth: f32,
  @location(3) uv: vec2<f32>,
  @location(4) dimensions: vec2<f32>,
  @location(5) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  geometry.worldPosition = attributes.instancePositions;
  geometry.uv = attributes.positions;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.instanceIndex);

  var varyings: Varyings;
  varyings.uv = attributes.positions;
  varyings.vLineWidth = attributes.instanceLineWidths;

  let sizePixels = clamp(
    project_unit_size_to_pixel(
      attributes.instanceSizes * textBackground.sizeScale,
      textBackground.sizeUnits
    ),
    textBackground.sizeMinPixels,
    textBackground.sizeMaxPixels
  );
  let instanceScale = sizePixels / text.fontSize;

  varyings.dimensions = attributes.instanceRects.zw * instanceScale +
    textBackground.padding.xy + textBackground.padding.zw;

  var pixelOffset =
    (attributes.positions * attributes.instanceRects.zw + attributes.instanceRects.xy) *
      instanceScale +
    mix(-textBackground.padding.xy, textBackground.padding.zw, attributes.positions);
  pixelOffset = rotate_by_angle(pixelOffset, attributes.instanceAngles);
  pixelOffset = pixelOffset + attributes.instancePixelOffsets;
  pixelOffset.y = pixelOffset.y * -1.0;

  var xy = project_size_vec2(attributes.instanceClipRect.xy) * project.scale;
  let wh = project_size_vec2(attributes.instanceClipRect.zw) * project.scale;
  if (text.flipY > 0.5) {
    xy.y = -xy.y - wh.y;
  }
  if (attributes.instanceClipRect.z >= 0.0) {
    varyings.dimensions.x = wh.x;
    pixelOffset.x = xy.x + varyings.uv.x * wh.x + mix(
      -textBackground.padding.x,
      textBackground.padding.z,
      varyings.uv.x
    );
  }
  if (attributes.instanceClipRect.w >= 0.0) {
    varyings.dimensions.y = wh.y;
    pixelOffset.y = xy.y + varyings.uv.y * wh.y + mix(
      -textBackground.padding.y,
      textBackground.padding.w,
      varyings.uv.y
    );
  }

  if (textBackground.billboard > 0.5) {
    var position = project_position_to_clipspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      vec3<f32>(0.0)
    );
    let clipOffset = project_pixel_size_to_clipspace(pixelOffset);
    position = vec4<f32>(
      position.x + clipOffset.x,
      position.y + clipOffset.y,
      position.z,
      position.w
    );
    varyings.position = position;
  } else {
    var offsetCommon = vec3<f32>(project_pixel_size_vec2(pixelOffset), 0.0);
    if (text.flipY > 0.5) {
      offsetCommon.y = offsetCommon.y * -1.0;
    }
    varyings.position = project_position_to_clipspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      offsetCommon
    );
  }

  varyings.vFillColor = vec4<f32>(
    attributes.instanceFillColors.rgb,
    attributes.instanceFillColors.a * layer.opacity
  );
  varyings.vLineColor = vec4<f32>(
    attributes.instanceLineColors.rgb,
    attributes.instanceLineColors.a * layer.opacity
  );
  varyings.pickingColor = geometry.pickingColor;
  return varyings;
}

fn round_rect(point: vec2<f32>, size: vec2<f32>, radii: vec4<f32>) -> f32 {
  let pixelPosition = (point - 0.5) * size;
  let halfSize = size * 0.5;
  let maxBorderRadius = min(size.x, size.y) * 0.5;
  var borderRadius = min(radii, vec4<f32>(maxBorderRadius));

  borderRadius = select(borderRadius.zwxy, borderRadius, pixelPosition.x > 0.0);
  let radius = select(borderRadius.y, borderRadius.x, pixelPosition.y > 0.0);
  let q = abs(pixelPosition) - halfSize + radius;
  return -(min(max(q.x, q.y), 0.0) + length(max(q, vec2<f32>(0.0))) - radius);
}

fn rect(point: vec2<f32>, size: vec2<f32>) -> f32 {
  let pixelPosition = point * size;
  return min(
    min(pixelPosition.x, size.x - pixelPosition.x),
    min(pixelPosition.y, size.y - pixelPosition.y)
  );
}

fn get_stroked_frag_color(
  distanceToEdge: f32,
  lineWidth: f32,
  fillColor: vec4<f32>,
  lineColor: vec4<f32>
) -> vec4<f32> {
  let isBorder = smoothedge(distanceToEdge, lineWidth);
  return mix(fillColor, lineColor, isBorder);
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = varyings.uv;
  var fragColor: vec4<f32>;

  if (any(textBackground.borderRadius != vec4<f32>(0.0))) {
    let distanceToEdge = round_rect(
      varyings.uv,
      varyings.dimensions,
      textBackground.borderRadius
    );
    let shapeAlpha = smoothedge(-distanceToEdge, 0.0);
    if (shapeAlpha == 0.0) {
      discard;
    }
    if (textBackground.stroked > 0.5) {
      fragColor = get_stroked_frag_color(
        distanceToEdge,
        varyings.vLineWidth,
        varyings.vFillColor,
        varyings.vLineColor
      );
    } else {
      fragColor = varyings.vFillColor;
    }
    fragColor.a = fragColor.a * shapeAlpha;
  } else if (textBackground.stroked > 0.5) {
    let distanceToEdge = rect(varyings.uv, varyings.dimensions);
    fragColor = get_stroked_frag_color(
      distanceToEdge,
      varyings.vLineWidth,
      varyings.vFillColor,
      varyings.vLineColor
    );
  } else {
    fragColor = varyings.vFillColor;
  }

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(varyings.pickingColor)) {
      discard;
    }
    return vec4<f32>(varyings.pickingColor, 1.0);
  }

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(varyings.pickingColor - highlightedObjectColor))) {
      let highlightAlpha = picking.highlightColor.a;
      let blendedAlpha = highlightAlpha + fragColor.a * (1.0 - highlightAlpha);
      if (blendedAlpha > 0.0) {
        let highlightRatio = highlightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highlightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return deckgl_premultiplied_alpha(fragColor);
}
`,Di={billboard:!0,sizeScale:1,sizeUnits:`pixels`,sizeMinPixels:0,sizeMaxPixels:2**53-1,fontSize:1,borderRadius:{type:`object`,value:0},padding:{type:`array`,value:[0,0,0,0]},getPosition:{type:`accessor`,value:e=>e.position},getSize:{type:`accessor`,value:1},getAngle:{type:`accessor`,value:0},getPixelOffset:{type:`accessor`,value:[0,0]},getBoundingRect:{type:`accessor`,value:[0,0,0,0]},getClipRect:{type:`accessor`,value:[0,0,-1,-1]},getFillColor:{type:`accessor`,value:[0,0,0,255]},getLineColor:{type:`accessor`,value:[0,0,0,255]},getLineWidth:{type:`accessor`,value:1}},Oi=class extends i{getShaders(){return super.getShaders({vs:wi,fs:Ti,source:Ei,modules:[h,f,s,Ci,Vr]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:`float64`,fp64:this.use64bitPositions(),transition:!0,accessor:`getPosition`},instanceSizes:{size:1,transition:!0,bufferGroup:`text-background-instance-data`,accessor:`getSize`,defaultValue:1},instanceAngles:{size:1,transition:!0,bufferGroup:`text-background-instance-data`,accessor:`getAngle`},instanceRects:{size:4,bufferGroup:`text-background-instance-data`,accessor:`getBoundingRect`},instanceClipRect:{size:4,bufferGroup:`text-background-instance-data`,accessor:`getClipRect`,defaultValue:[0,0,-1,-1]},instancePixelOffsets:{size:2,transition:!0,bufferGroup:`text-background-instance-data`,accessor:`getPixelOffset`},instanceFillColors:{size:4,transition:!0,type:`unorm8`,accessor:`getFillColor`,defaultValue:[0,0,0,255]},instanceLineColors:{size:4,transition:!0,type:`unorm8`,accessor:`getLineColor`,defaultValue:[0,0,0,255]},instanceLineWidths:{size:1,transition:!0,bufferGroup:`text-background-instance-data`,accessor:`getLineWidth`,defaultValue:1}})}updateState(e){super.updateState(e);let{changeFlags:t}=e;t.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){let{billboard:t,sizeScale:n,sizeUnits:r,sizeMinPixels:i,sizeMaxPixels:a,getLineWidth:o,fontSize:s}=this.props,{padding:c,borderRadius:l}=this.props;c.length<4&&(c=[c[0],c[1],c[0],c[1]]),Array.isArray(l)||(l=[l,l,l,l]);let u=this.state.model,d={billboard:t,stroked:!!o,borderRadius:l,padding:c,sizeUnits:w[r],sizeScale:n,sizeMinPixels:i,sizeMaxPixels:a},f={fontSize:s,viewport:this.context.viewport};u.shaderInputs.setProps({textBackground:d,text:f}),u.draw(this.context.renderPass)}_getModel(){let e=[0,0,1,0,0,1,1,1];return new d(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new o({topology:`triangle-strip`,vertexCount:4,attributes:{positions:{size:2,value:new Float32Array(e)}}}),isInstanced:!0})}};Oi.defaultProps=Di,Oi.layerName=`TextBackgroundLayer`;var ki={start:1,middle:0,end:-1},Ai={top:1,center:0,bottom:-1},ji=[0,0,0,255],Mi={billboard:!0,sizeScale:1,sizeUnits:`pixels`,sizeMinPixels:0,sizeMaxPixels:2**53-1,background:!1,getBackgroundColor:{type:`accessor`,value:[255,255,255,255]},getBorderColor:{type:`accessor`,value:ji},getBorderWidth:{type:`accessor`,value:0},backgroundBorderRadius:{type:`object`,value:0},backgroundPadding:{type:`array`,value:[0,0,0,0]},characterSet:{type:`object`,value:ci.characterSet},fontFamily:ci.fontFamily,fontWeight:ci.fontWeight,lineHeight:1,outlineWidth:{type:`number`,value:0,min:0},outlineColor:{type:`color`,value:ji},fontSettings:{type:`object`,value:{},compare:1},wordBreak:`break-word`,maxWidth:{type:`number`,value:-1},contentCutoffPixels:{type:`array`,value:[0,0]},contentAlignHorizontal:`none`,contentAlignVertical:`none`,getText:{type:`accessor`,value:e=>e.text},getPosition:{type:`accessor`,value:e=>e.position},getColor:{type:`accessor`,value:ji},getSize:{type:`accessor`,value:32},getAngle:{type:`accessor`,value:0},getTextAnchor:{type:`accessor`,value:`middle`},getAlignmentBaseline:{type:`accessor`,value:`center`},getPixelOffset:{type:`accessor`,value:[0,0]},getContentBox:{type:`accessor`,value:[0,0,-1,-1]},backgroundColor:{deprecatedFor:[`background`,`getBackgroundColor`]}},Ni=class extends Ae{constructor(){super(...arguments),this.getBoundingRect=(e,t)=>{let{size:[n,r]}=this.transformParagraph(e,t),{getTextAnchor:i,getAlignmentBaseline:a}=this.props,o=ki[typeof i==`function`?i(e,t):i],s=Ai[typeof a==`function`?a(e,t):a];return[(o-1)*n/2,(s-1)*r/2,n,r]},this.getIconOffsets=(e,t)=>{let{getTextAnchor:n,getAlignmentBaseline:r}=this.props,{x:i,y:a,rowWidth:o,size:[,s]}=this.transformParagraph(e,t),c=ki[typeof n==`function`?n(e,t):n],l=Ai[typeof r==`function`?r(e,t):r],u=i.length,d=Array(u*2),f=0;for(let e=0;e<u;e++)d[f++]=(c-1)*o[e]/2+i[e],d[f++]=(l-1)*s/2+a[e];return d}}initializeState(){this.state={styleVersion:0,fontAtlasManager:new yi},this.props.maxWidth>0&&P.once(1,`v8.9 breaking change: TextLayer maxWidth is now relative to text size`)()}updateState(e){let{props:t,oldProps:n,changeFlags:r}=e;(r.dataChanged||r.updateTriggersChanged&&(r.updateTriggersChanged.all||r.updateTriggersChanged.getText))&&this._updateText(),(this._updateFontAtlas()||t.lineHeight!==n.lineHeight||t.wordBreak!==n.wordBreak||t.maxWidth!==n.maxWidth)&&this.setState({styleVersion:this.state.styleVersion+1})}getPickingInfo({info:e}){return e.object=e.index>=0?this.props.data[e.index]:null,e}_updateFontAtlas(){let{fontSettings:e,fontFamily:t,fontWeight:n,_getFontRenderer:r}=this.props,{fontAtlasManager:i,characterSet:a}=this.state,o={...e,characterSet:a,fontFamily:t,fontWeight:n,_getFontRenderer:r};if(!i.mapping)return i.setProps(o),!0;for(let e in o)if(o[e]!==i.props[e])return i.setProps(o),!0;return!1}_updateText(){let{data:e,characterSet:t}=this.props,n=e.attributes?.getText,{getText:r}=this.props,i=e.startIndices,a,o=t===`auto`&&new Set;if(n&&i){let{texts:t,characterCount:s}=ai({...ArrayBuffer.isView(n)?{value:n}:n,length:e.length,startIndices:i,characterSet:o});a=s,r=(e,{index:n})=>t[n]}else{let{iterable:t,objectInfo:n}=m(e);i=[0],a=0;for(let e of t){n.index++;let t=Array.from(r(e,n)||``);o&&t.forEach(o.add,o),a+=t.length,i.push(a)}}this.setState({getText:r,startIndices:i,numInstances:a,characterSet:o||t})}transformParagraph(e,t){let{fontAtlasManager:n}=this.state,r=n.mapping,{baselineOffset:i}=n.atlas,{fontSize:a}=n.props,o=this.state.getText,{wordBreak:s,lineHeight:c,maxWidth:l}=this.props;return ii(o(e,t)||``,i,c*a,s,l*a,r)}renderLayers(){let{startIndices:e,numInstances:t,getText:n,fontAtlasManager:{atlas:r,mapping:i},styleVersion:a}=this.state,{data:o,_dataDiff:s,getPosition:c,getColor:l,getSize:u,getAngle:d,getPixelOffset:f,getBackgroundColor:p,getBorderColor:m,getBorderWidth:h,getContentBox:g,backgroundBorderRadius:_,backgroundPadding:v,background:y,billboard:b,fontSettings:x,outlineWidth:S,outlineColor:C,sizeScale:w,sizeUnits:T,sizeMinPixels:E,sizeMaxPixels:D,contentCutoffPixels:O,contentAlignHorizontal:k,contentAlignVertical:A,transitions:j,updateTriggers:M}=this.props,N=this.getSubLayerClass(`characters`,Jr),P=this.getSubLayerClass(`background`,Oi),{fontSize:F}=this.state.fontAtlasManager.props;return[y&&new P({getFillColor:p,getLineColor:m,getLineWidth:h,borderRadius:_,padding:v,getPosition:c,getSize:u,getAngle:d,getPixelOffset:f,getClipRect:g,billboard:b,sizeScale:w,sizeUnits:T,sizeMinPixels:E,sizeMaxPixels:D,fontSize:F,transitions:j&&{getPosition:j.getPosition,getAngle:j.getAngle,getSize:j.getSize,getFillColor:j.getBackgroundColor,getLineColor:j.getBorderColor,getLineWidth:j.getBorderWidth,getPixelOffset:j.getPixelOffset}},this.getSubLayerProps({id:`background`,updateTriggers:{getPosition:M.getPosition,getAngle:M.getAngle,getSize:M.getSize,getFillColor:M.getBackgroundColor,getLineColor:M.getBorderColor,getLineWidth:M.getBorderWidth,getPixelOffset:M.getPixelOffset,getBoundingRect:{getText:M.getText,getTextAnchor:M.getTextAnchor,getAlignmentBaseline:M.getAlignmentBaseline,styleVersion:a}}}),{data:o.attributes&&o.attributes.background?{length:o.length,attributes:o.attributes.background}:o,_dataDiff:s,autoHighlight:!1,getBoundingRect:this.getBoundingRect}),new N({sdf:x.sdf,smoothing:Number.isFinite(x.smoothing)?x.smoothing:ci.smoothing,outlineWidth:S/(x.radius||ci.radius),outlineColor:C,iconAtlas:r,iconMapping:i,getPosition:c,getColor:l,getSize:u,getAngle:d,getPixelOffset:f,getContentBox:g,billboard:b,sizeScale:w,sizeUnits:T,sizeMinPixels:E,sizeMaxPixels:D,fontSize:F,contentCutoffPixels:O,contentAlignHorizontal:k,contentAlignVertical:A,transitions:j&&{getPosition:j.getPosition,getAngle:j.getAngle,getColor:j.getColor,getSize:j.getSize,getPixelOffset:j.getPixelOffset,getContentBox:j.getContentBox}},this.getSubLayerProps({id:`characters`,updateTriggers:{all:M.getText,getPosition:M.getPosition,getAngle:M.getAngle,getColor:M.getColor,getSize:M.getSize,getPixelOffset:M.getPixelOffset,getContentBox:M.getContentBox,getIconOffsets:{getTextAnchor:M.getTextAnchor,getAlignmentBaseline:M.getAlignmentBaseline,styleVersion:a}}}),{data:o,_dataDiff:s,startIndices:e,numInstances:t,getIconOffsets:this.getIconOffsets,getIcon:n})]}static set fontAtlasCacheLimit(e){vi(e)}};Ni.defaultProps=Mi,Ni.layerName=`TextLayer`;var Pi={circle:{type:Kt,props:{filled:`filled`,stroked:`stroked`,lineWidthMaxPixels:`lineWidthMaxPixels`,lineWidthMinPixels:`lineWidthMinPixels`,lineWidthScale:`lineWidthScale`,lineWidthUnits:`lineWidthUnits`,pointRadiusMaxPixels:`radiusMaxPixels`,pointRadiusMinPixels:`radiusMinPixels`,pointRadiusScale:`radiusScale`,pointRadiusUnits:`radiusUnits`,pointAntialiasing:`antialiasing`,pointBillboard:`billboard`,getFillColor:`getFillColor`,getLineColor:`getLineColor`,getLineWidth:`getLineWidth`,getPointRadius:`getRadius`}},icon:{type:wt,props:{iconAtlas:`iconAtlas`,iconMapping:`iconMapping`,iconSizeMaxPixels:`sizeMaxPixels`,iconSizeMinPixels:`sizeMinPixels`,iconSizeScale:`sizeScale`,iconSizeUnits:`sizeUnits`,iconAlphaCutoff:`alphaCutoff`,iconBillboard:`billboard`,getIcon:`getIcon`,getIconAngle:`getAngle`,getIconColor:`getColor`,getIconPixelOffset:`getPixelOffset`,getIconSize:`getSize`}},text:{type:Ni,props:{textSizeMaxPixels:`sizeMaxPixels`,textSizeMinPixels:`sizeMinPixels`,textSizeScale:`sizeScale`,textSizeUnits:`sizeUnits`,textBackground:`background`,textBackgroundPadding:`backgroundPadding`,textFontFamily:`fontFamily`,textFontWeight:`fontWeight`,textLineHeight:`lineHeight`,textMaxWidth:`maxWidth`,textOutlineColor:`outlineColor`,textOutlineWidth:`outlineWidth`,textWordBreak:`wordBreak`,textCharacterSet:`characterSet`,textBillboard:`billboard`,textFontSettings:`fontSettings`,getText:`getText`,getTextAngle:`getAngle`,getTextColor:`getColor`,getTextPixelOffset:`getPixelOffset`,getTextSize:`getSize`,getTextAnchor:`getTextAnchor`,getTextAlignmentBaseline:`getAlignmentBaseline`,getTextBackgroundColor:`getBackgroundColor`,getTextBorderColor:`getBorderColor`,getTextBorderWidth:`getBorderWidth`}}},Fi={type:$n,props:{lineWidthUnits:`widthUnits`,lineWidthScale:`widthScale`,lineWidthMinPixels:`widthMinPixels`,lineWidthMaxPixels:`widthMaxPixels`,lineJointRounded:`jointRounded`,lineCapRounded:`capRounded`,lineMiterLimit:`miterLimit`,lineBillboard:`billboard`,lineAntialiasing:`antialiasing`,getLineColor:`getColor`,getLineWidth:`getWidth`}},Ii={type:Ar,props:{extruded:`extruded`,filled:`filled`,wireframe:`wireframe`,elevationScale:`elevationScale`,material:`material`,_full3d:`_full3d`,getElevation:`getElevation`,getFillColor:`getFillColor`,getLineColor:`getLineColor`}};function Li({type:e,props:t}){let n={};for(let r in t)n[r]=e.defaultProps[t[r]];return n}function Ri(e,t,n=`getPosition`){let{transitions:r,updateTriggers:i}=e.props,a={updateTriggers:{},transitions:r&&{[n]:r.geometry}};for(let n in t){let o=t[n],s=e.props[n];n.startsWith(`get`)&&(s=e.getSubLayerAccessor(s),a.updateTriggers[o]=i[n],r&&(a.transitions[o]=r[n])),a[o]=s}return a}function zi(e){if(Array.isArray(e))return e;switch(P.assert(e.type,`GeoJSON does not have type`),e.type){case`Feature`:return[e];case`FeatureCollection`:return P.assert(Array.isArray(e.features),`GeoJSON does not have features array`),e.features;default:return[{geometry:e}]}}function Bi(e,t,n={}){let r={pointFeatures:[],lineFeatures:[],polygonFeatures:[],polygonOutlineFeatures:[]},{startRow:i=0,endRow:a=e.length}=n;for(let n=i;n<a;n++){let i=e[n],{geometry:a}=i;if(a){if(a.type===`GeometryCollection`){P.assert(Array.isArray(a.geometries),`GeoJSON does not have geometries array`);let{geometries:e}=a;for(let a=0;a<e.length;a++){let o=e[a];Vi(o,r,t,i,n)}}else Vi(a,r,t,i,n)}}return r}function Vi(e,t,n,r,i){let{type:a,coordinates:o}=e,{pointFeatures:s,lineFeatures:c,polygonFeatures:l,polygonOutlineFeatures:u}=t;if(!Ui(a,o))P.warn(`${a} coordinates are malformed`)();else switch(a){case`Point`:s.push(n({geometry:e},r,i));break;case`MultiPoint`:o.forEach(e=>{s.push(n({geometry:{type:`Point`,coordinates:e}},r,i))});break;case`LineString`:c.push(n({geometry:e},r,i));break;case`MultiLineString`:o.forEach(e=>{c.push(n({geometry:{type:`LineString`,coordinates:e}},r,i))});break;case`Polygon`:l.push(n({geometry:e},r,i)),o.forEach(e=>{u.push(n({geometry:{type:`LineString`,coordinates:e}},r,i))});break;case`MultiPolygon`:o.forEach(e=>{l.push(n({geometry:{type:`Polygon`,coordinates:e}},r,i)),e.forEach(e=>{u.push(n({geometry:{type:`LineString`,coordinates:e}},r,i))})})}}var Hi={Point:1,MultiPoint:2,LineString:2,MultiLineString:3,Polygon:3,MultiPolygon:4};function Ui(e,t){let n=Hi[e];for(P.assert(n,`Unknown GeoJSON type ${e}`);t&&--n>0;)t=t[0];return t&&Number.isFinite(t[0])}function Wi(){return{points:{},lines:{},polygons:{},polygonsOutline:{}}}function Gi(e){return e.geometry.coordinates}function Ki(e,t){let n=Wi(),{pointFeatures:r,lineFeatures:i,polygonFeatures:a,polygonOutlineFeatures:o}=e;return n.points.data=r,n.points._dataDiff=t.pointFeatures&&(()=>t.pointFeatures),n.points.getPosition=Gi,n.lines.data=i,n.lines._dataDiff=t.lineFeatures&&(()=>t.lineFeatures),n.lines.getPath=Gi,n.polygons.data=a,n.polygons._dataDiff=t.polygonFeatures&&(()=>t.polygonFeatures),n.polygons.getPolygon=Gi,n.polygonsOutline.data=o,n.polygonsOutline._dataDiff=t.polygonOutlineFeatures&&(()=>t.polygonOutlineFeatures),n.polygonsOutline.getPath=Gi,n}function qi(e){let t=Wi(),{points:n,lines:r,polygons:i}=e,a=Lr(e);t.points.data={length:n.positions.value.length/n.positions.size,attributes:{...n.attributes,getPosition:n.positions,rowIndexes:{size:1,type:`uint32`,value:a.points}},properties:n.properties,numericProps:n.numericProps,featureIds:n.featureIds},t.lines.data={length:r.pathIndices.value.length-1,startIndices:r.pathIndices.value,attributes:{...r.attributes,getPath:r.positions,rowIndexes:{size:1,type:`uint32`,value:a.lines}},properties:r.properties,numericProps:r.numericProps,featureIds:r.featureIds},t.lines._pathType=`open`;let o=i.positions.value.length/i.positions.size,s=Array(o).fill(1);for(let e of i.primitivePolygonIndices.value)s[e-1]=0;return t.polygons.data={length:i.polygonIndices.value.length-1,startIndices:i.polygonIndices.value,attributes:{...i.attributes,getPolygon:i.positions,instanceVertexValid:{size:1,value:new Uint16Array(s)},rowIndexes:{size:1,type:`uint32`,value:a.polygons}},properties:i.properties,numericProps:i.numericProps,featureIds:i.featureIds},t.polygons._normalize=!1,i.triangles&&(t.polygons.data.attributes.indices=i.triangles.value),t.polygonsOutline.data={length:i.primitivePolygonIndices.value.length-1,startIndices:i.primitivePolygonIndices.value,attributes:{...i.attributes,getPath:i.positions,rowIndexes:{size:1,type:`uint32`,value:a.polygons}},properties:i.properties,numericProps:i.numericProps,featureIds:i.featureIds},t.polygonsOutline._pathType=`open`,t}var Ji=[`points`,`linestrings`,`polygons`],Yi={...Li(Pi.circle),...Li(Pi.icon),...Li(Pi.text),...Li(Fi),...Li(Ii),stroked:!0,filled:!0,extruded:!1,wireframe:!1,_full3d:!1,iconAtlas:{type:`object`,value:null},iconMapping:{type:`object`,value:{}},getIcon:{type:`accessor`,value:e=>e.properties.icon},getText:{type:`accessor`,value:e=>e.properties.text},pointType:`circle`,getRadius:{deprecatedFor:`getPointRadius`}},Xi=class extends Ae{initializeState(){this.state={layerProps:{},features:{},featuresDiff:{}}}updateState({props:e,changeFlags:t}){if(!t.dataChanged)return;let{data:n}=this.props,r=n&&`points`in n&&`polygons`in n&&`lines`in n;this.setState({binary:r}),r?this._updateStateBinary({props:e,changeFlags:t}):this._updateStateJSON({props:e,changeFlags:t})}_updateStateBinary({props:e,changeFlags:t}){let n=qi(e.data);this.setState({layerProps:n})}_updateStateJSON({props:e,changeFlags:t}){let n=zi(e.data),r=this.getSubLayerRow.bind(this),i={},a={};if(Array.isArray(t.dataChanged)){let e=this.state.features;for(let t in e)i[t]=e[t].slice(),a[t]=[];for(let o of t.dataChanged){let t=Bi(n,r,o);for(let n in e)a[n].push(jr({data:i[n],getIndex:e=>e.__source.index,dataRange:o,replace:t[n]}))}}else i=Bi(n,r);let o=Ki(i,a);this.setState({features:i,featuresDiff:a,layerProps:o})}getPickingInfo(e){let t=super.getPickingInfo(e),{index:n,sourceLayer:r}=t;return t.featureType=Ji.find(e=>r.id.startsWith(`${this.id}-${e}-`)),n>=0&&r.id.startsWith(`${this.id}-points-text`)&&this.state.binary&&(t.index=this.props.data.points.globalFeatureIds.value[n]),t}_updateAutoHighlight(e){let t=`${this.id}-points-`,n=e.featureType===`points`;for(let r of this.getSubLayers())r.id.startsWith(t)===n&&r.updateAutoHighlight(e)}_renderPolygonLayer(){let{extruded:e,wireframe:t}=this.props,{layerProps:n}=this.state,r=`polygons-fill`,i=this.shouldRenderSubLayer(r,n.polygons?.data)&&this.getSubLayerClass(r,Ii.type);if(i){let a=Ri(this,Ii.props,`getPolygon`),o=e&&t;return o||delete a.getLineColor,a.updateTriggers.lineColors=o,new i(a,this.getSubLayerProps({id:r,updateTriggers:a.updateTriggers}),n.polygons)}return null}_renderLineLayers(){let{extruded:e,stroked:t}=this.props,{layerProps:n}=this.state,r=`polygons-stroke`,i=`linestrings`,a=!e&&t&&this.shouldRenderSubLayer(r,n.polygonsOutline?.data)&&this.getSubLayerClass(r,Fi.type),o=this.shouldRenderSubLayer(i,n.lines?.data)&&this.getSubLayerClass(i,Fi.type);if(a||o){let e=Ri(this,Fi.props,`getPath`);return[a&&new a(e,this.getSubLayerProps({id:r,updateTriggers:e.updateTriggers}),n.polygonsOutline),o&&new o(e,this.getSubLayerProps({id:i,updateTriggers:e.updateTriggers}),n.lines)]}return null}_renderPointLayers(){let{pointType:e}=this.props,{layerProps:t,binary:n}=this.state,{highlightedObjectIndex:r}=this.props;!n&&Number.isFinite(r)&&(r=t.points.data.findIndex(e=>e.__source.index===r));let i=new Set(e.split(`+`)),a=[];for(let e of i){let i=`points-${e}`,o=Pi[e],s=o&&this.shouldRenderSubLayer(i,t.points?.data)&&this.getSubLayerClass(i,o.type);if(s){let c=Ri(this,o.props),l=t.points;if(e===`text`&&n){let{rowIndexes:e,...t}=l.data.attributes;l={...l,data:{...l.data,attributes:t}}}a.push(new s(c,this.getSubLayerProps({id:i,updateTriggers:c.updateTriggers,highlightedObjectIndex:r}),l))}}return a}renderLayers(){let{extruded:e}=this.props,t=this._renderPolygonLayer(),n=this._renderLineLayers(),r=this._renderPointLayers();return[!e&&t,n,r,e&&t]}getSubLayerAccessor(e){let{binary:t}=this.state;return!t||typeof e!=`function`?super.getSubLayerAccessor(e):(t,n)=>{let{data:r,index:i}=n;return e(Fr(r,i),n)}}};Xi.layerName=`GeoJsonLayer`,Xi.defaultProps=Yi;var Zi={...Pr.defaultProps},Qi=class extends Ae{indexToBounds(){return null}renderLayers(){let{elevationScale:e,extruded:t,wireframe:n,filled:r,stroked:i,lineWidthUnits:a,lineWidthScale:o,lineWidthMinPixels:s,lineWidthMaxPixels:c,lineAntialiasing:l,lineJointRounded:u,lineMiterLimit:d,lineDashJustified:f,getElevation:p,getFillColor:m,getLineColor:h,getLineWidth:g}=this.props,{updateTriggers:_,material:v,transitions:y}=this.props,b=this.getSubLayerClass(`cell`,Pr),{updateTriggers:x,...S}=this.indexToBounds()||{};return new b({filled:r,wireframe:n,extruded:t,elevationScale:e,stroked:i,lineWidthUnits:a,lineWidthScale:o,lineWidthMinPixels:s,lineWidthMaxPixels:c,lineAntialiasing:l,lineJointRounded:u,lineMiterLimit:d,lineDashJustified:f,material:v,transitions:y,getElevation:p,getFillColor:m,getLineColor:h,getLineWidth:g},this.getSubLayerProps({id:`cell`,updateTriggers:_&&{...x,getElevation:_.getElevation,getFillColor:_.getFillColor,getLineColor:_.getLineColor,getLineWidth:_.getLineWidth}}),S)}};Qi.layerName=`GeoCellLayer`,Qi.defaultProps=Zi;function $i(){let e=new Float64Array(4);return e[0]=1,e[3]=1,e}function ea(e,t){let n=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=n,e[2]=-n,e[3]=r,e}function ta(){return new Float64Array(2)}function na(e){let t=new Float64Array(2);return t[0]=e[0],t[1]=e[1],t}function ra(e,t,n){return e[0]=t,e[1]=n,e}function ia(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e}function aa(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e}function oa(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e}function sa(e,t){return e[0]=-t[0],e[1]=-t[1],e}function ca(e){return Math.hypot(e[0],e[1])}function la(e,t,n,r){let i=t[0],a=t[1];return e[0]=i+r*(n[0]-i),e[1]=a+r*(n[1]-a),e}function ua(e,t,n,r){let i=t[0]-n[0],a=t[1]-n[1],o=Math.sin(r),s=Math.cos(r);return e[0]=i*s-a*o+n[0],e[1]=i*o+a*s+n[1],e}function da(e,t,n){let r=t[0],i=t[1];return e[0]=n[0]*r+n[2]*i,e[1]=n[1]*r+n[3]*i,e}function fa(e,t,n){let r=t[0],i=t[1];return e[0]=n[0]*r+n[2]*i+n[4],e[1]=n[1]*r+n[3]*i+n[5],e}function pa(){return new Float64Array(3)}function ma(e,t,n){let r=new Float64Array(3);return r[0]=e,r[1]=t,r[2]=n,r}function ha(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e}function ga(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e}function _a(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e}function va(e){return Math.hypot(e[0],e[1],e[2])}function ya(e,t){return Math.hypot(t[0]-e[0],t[1]-e[1],t[2]-e[2])}function ba(e,t){let n=t[0],r=t[1],i=t[2],a=n*n+r*r+i*i;return a>0&&(a=1/Math.sqrt(a)),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a,e}function xa(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Sa(e,t,n){let r=t[0],i=t[1],a=t[2],o=n[0],s=n[1],c=n[2];return e[0]=i*c-a*s,e[1]=a*o-r*c,e[2]=r*s-i*o,e}function Ca(e,t,n){let r=n[0],i=n[1],a=n[2],o=n[3],s=t[0],c=t[1],l=t[2],u=i*l-a*c,d=a*s-r*l,f=r*c-i*s,p=i*f-a*d,m=a*u-r*f,h=r*d-i*u,g=o*2;return u*=g,d*=g,f*=g,p*=2,m*=2,h*=2,e[0]=s+u+p,e[1]=c+d+m,e[2]=l+f+h,e}var wa=(1+Math.sqrt(5))/2,Ta=2*Math.PI/5,Ea=Math.PI/5,Da=Math.PI/10,Oa=2*Math.atan(wa),ka=Math.PI-Oa;-.5*Math.PI+Math.acos(-1/Math.sqrt(3-wa));var Aa=(Math.sqrt(5)-1)/2,ja=3-Math.sqrt(5),Ma=Math.sqrt(3-wa);Math.sqrt(3)*Ma/wa;var Na=6371007.2;4*Math.PI*Na*Na;function Pa(e,t,n,r){let i=t[0]-e[0],a=t[1]-e[1],o=r[0]-n[0],s=r[1]-n[1],c=i*s-a*o;if(Math.abs(c)<1e-12)return!1;let l=n[0]-e[0],u=n[1]-e[1],d=(l*s-u*o)/c,f=(l*a-u*i)/c;return d>=0&&d<=1&&f>=0&&f<=1}var Fa=class e{constructor(e){this.vertices=e,this.isWindingCorrect()||this.vertices.reverse()}getArea(){let e=0,t=this.vertices.length;for(let n=0;n<t;n++){let r=(n+1)%t;e+=(this.vertices[r][0]-this.vertices[n][0])*(this.vertices[r][1]+this.vertices[n][1])}return e}isWindingCorrect(){return this.getArea()>=0}getVertices(){return this.vertices}scale(e){for(let t of this.vertices)aa(t,t,e);return this}rotate180(){for(let e of this.vertices)sa(e,e);return this}reflectY(){for(let e of this.vertices)e[1]=-e[1];return this.vertices.reverse(),this}translate(e){for(let t of this.vertices)ia(t,t,e);return this}transform(e){for(let t of this.vertices)da(t,t,e);return this}transform2d(e){for(let t of this.vertices)fa(t,t,e);return this}clone(){return new e(this.vertices.map(e=>na(e)))}getCenter(){let e=this.vertices.length;return this.vertices.reduce((t,n)=>[t[0]+n[0]/e,t[1]+n[1]/e],[0,0])}containsPoint(e){if(!this.isWindingCorrect())throw Error(`Pentagon is not counter-clockwise`);let t=this.vertices.length,n=1;for(let r=0;r<t;r++){let i=this.vertices[r],a=this.vertices[(r+1)%t],o=i[0]-a[0],s=i[1]-a[1],c=e[0]-i[0],l=e[1]-i[1],u=o*l-s*c;if(u<0){let e=Math.sqrt(c*c+l*l);n=Math.min(n,u/e)}}return n}intersectsSegment(e,t){if(this.containsPoint(e)>0||this.containsPoint(t)>0)return!0;let n=this.vertices.length;for(let r=0;r<n;r++){let i=this.vertices[r],a=this.vertices[(r+1)%n];if(Pa(e,t,i,a))return!0}return!1}splitEdges(t){if(t<=1)return this;let n=[],r=this.vertices.length;for(let e=0;e<r;e++){let i=this.vertices[e],a=this.vertices[(e+1)%r];n.push(na(i));for(let e=1;e<t;e++){let r=e/t,o=ta();la(o,i,a,r),n.push(o)}}return new e(n)}},Ia=[0,0],La=[0,1],Ra=[.7885966681787006,1.6149108024237764],za=[1.6171013659387945,1.054928690397459],Ba=[Math.cos(Da),Math.sin(Da)],Va=2*ca(Ra)*Math.cos(Ea),Ha=Ea-Math.atan2(Ra[1],Ra[0]),Ua=2*Aa/Va;[Ia,La,Ra,za,Ba].forEach(e=>{aa(e,e,Ua),ua(e,e,[0,0],Ha)});var Wa=new Fa([Ia,La,Ra,za,Ba]),Ga=Math.atan2(Ra[1],Ra[0])-Ea,Ka=[0,0],qa=Aa/Math.cos(Ea),Ja=Ga+Ea,Ya=[qa*Math.cos(Ja),qa*Math.sin(Ja)],Xa=Ga-Ea,Za=[qa*Math.cos(Xa),qa*Math.sin(Xa)],Qa=new Fa([Ka,Ya,Za]),$a=[Ya[0],Ya[1],Za[0],Za[1]],eo=1/(Ya[0]*Za[1]-Za[0]*Ya[1]);Za[1]*eo,-Ya[1]*eo,-Za[0]*eo,Ya[0]*eo;var to=new Float64Array([-.0022392098386786394,21308606513250217e-22,-2.559257686421274e-9,33701965267802837e-28,-4667545312611249e-30,667492870384816e-32]),no=new Float64Array([.0022392089963541657,28831978048607556e-22,5.08622073997266e-9,102018123778161e-25,21912872306767718e-30,49284235482523806e-33]),ro=new class{applyCoefficients(e,t){let n=Math.sin(e),r=Math.cos(e),i=2*(r-n)*(r+n),a,o;return a=i*t[5]+t[4],o=i*a+t[3],a=i*o-a+t[2],o=i*a-o+t[1],a=i*o-a+t[0],e+2*n*r*a}forward(e){return this.applyCoefficients(e,to)}inverse(e){return this.applyCoefficients(e,no)}};function io(e){return Math.PI/180*e}function ao(e){return 180/Math.PI*e}function oo(e){return[ca(e),Math.atan2(e[1],e[0])]}function so([e,t]){return[e*Math.cos(t),e*Math.sin(t)]}function co(e,[t,n,r]){let i=[t[0]-r[0],t[1]-r[1]],a=[r[0]-n[0],r[1]-n[1]],o=[e[0]-r[0],e[1]-r[1]],s=a[0]*i[1]-a[1]*i[0],c=(a[0]*o[1]-a[1]*o[0])/s,l=(i[0]*o[1]-i[1]*o[0])/s;return[c,l,1-(c+l)]}function lo(e,[t,n,r]){return[e[0]*t[0]+e[1]*n[0]+e[2]*r[0],e[0]*t[1]+e[1]*n[1]+e[2]*r[1]]}function uo(e){let t=Math.atan2(e[1],e[0]),n=Math.sqrt(e[0]*e[0]+e[1]*e[1]);return[t,Math.atan2(n,e[2])]}function fo([e,t]){let n=Math.sin(t);return[n*Math.cos(e),n*Math.sin(e),Math.cos(t)]}var po=93;function mo([e,t]){let n=io(e+po),r=io(t),i=ro.forward(r);return[n,Math.PI/2-i]}function ho(e){return((e+180)%360+360)%360-180}function go([e,t]){let n=ho(ao(e)-po),r=Math.PI/2-t;return[n,ao(ro.inverse(r))]}function _o(e){let t=pa();for(let n=0;n<e.length;n++)ha(t,t,fo(mo(e[n])));ba(t,t);let[n,r]=go(uo(t));(r>89.99||r<-89.99)&&(n=e[0][0]),n=ho(n);let i=Array(e.length);for(let t=0;t<e.length;t++){let r=e[t][0],a=e[t][1];for(;r-n>180;)r-=360;for(;r-n<-180;)r+=360;i[t]=[r,a]}return i}function vo(){let e=new Float64Array(4);return e[3]=1,e}function yo(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}ma(1,0,0),ma(0,1,0);var bo=Math.sqrt(5),xo=Math.sqrt(.2),So=Math.sqrt((1-xo)/2),Co=Math.sqrt((1+xo)/2),wo=.5,To=Math.sqrt((2.5-bo)/10),Eo=Math.sqrt((2.5+bo)/10),Do=Math.sqrt((1+xo)/8),Oo=Math.sqrt((1-xo)/8),ko=Math.sqrt((3-bo)/8),Ao=Math.sqrt((3+bo)/8),jo=[[0,0],[So,0],[To,wo],[-Do,ko],[-Do,-ko],[To,-wo],[-Co,0],[-Oo,-Ao],[Eo,-wo],[Eo,wo],[-Oo,Ao],[0,0]].map(([e,t])=>[-t,e]).map((e,t)=>t===0?[0,0,0,1]:t===11?[0,-1,0,0]:[...e,0,t<6?Co:So]),Mo=[`vu`,`uw`,`vw`,`vw`,`vw`],No=[`wu`,`uw`,`vw`,`vu`,`uw`],Po=[`wu`,`uv`,`wv`,`wu`,`uw`],Fo=[`vu`,`uv`,`wv`,`wu`,`uw`],Io=[Mo,Fo,Po,No,Po,Fo,Po,No,No,No,Fo,Fo],Lo=[4,2,3,2,0,4,3,2,2,0,3,0],Ro=[0,1,2,4,3,5,7,8,6,11,10,9],zo=[];function Bo(){Ho([0,0],0,jo[0]);for(let e=0;e<5;e++){let t=e*Ta,n=t+Ea;Ho([t,ka],Ea,jo[e+1]),Ho([n,Math.PI-ka],Ea,jo[(e+3)%5+6])}Ho([0,Math.PI],0,jo[11])}var Vo=0;function Ho(e,t,n){if(Vo>11)throw Error(`Too many origins: ${Vo}`);let r=vo();yo(r,n);let i={id:Vo,axis:e,axisCartesian:fo(e),quat:n,inverseQuat:r,angle:t,orientation:Io[Vo],firstQuintant:Lo[Vo]};zo.push(i),Vo++}Bo(),zo.sort((e,t)=>Ro.indexOf(e.id)-Ro.indexOf(t.id)),zo.forEach((e,t)=>e.id=t);function Uo(e,t){let n=t.orientation,r=n===Mo||n===No?-1:1,i=(e-t.firstQuintant+5)%5,a=n[i];return{quintant:(t.firstQuintant+r*i+5)%5,orientation:a}}var Wo=class{forward([e,t]){return[Math.tan(t),e]}inverse([e,t]){return[t,Math.atan(e)]}};function Go(e,t,n,r,i,a){let o=new Float64Array(6);return o[0]=e,o[1]=t,o[2]=n,o[3]=r,o[4]=i,o[5]=a,o}function Ko(e,t,n){return e[0]*(t[1]*n[2]-t[2]*n[1])+e[1]*(t[2]*n[0]-t[0]*n[2])+e[2]*(t[0]*n[1]-t[1]*n[0])}function qo(e,t,n){let r=1+(e[0]*t[0]+e[1]*t[1]+e[2]*t[2])+(t[0]*n[0]+t[1]*n[1]+t[2]*n[2])+(n[0]*e[0]+n[1]*e[1]+n[2]*e[2]);return 2*Math.atan2(Ko(e,t,n),r)}var Jo=pa(),Yo=pa(),Xo=ta(),Zo=ta(),Qo=class e{constructor(t){this.constants=e.computeConstants(t)}static computeConstants(e){let[t,n,r]=e,i=pa();Sa(i,n,r);let a=xa(t,n),o=xa(t,r),s=xa(n,r),c=xa(t,i),l=o+s,u=a+1,d=a*s-o,f=l*l-u*u,p=2*u*d,m=Go(c*c-f,-p,-2*c*l,2*c*u,c*c+f,p);return{volumeABC:c,areaABC:qo(t,n,r),AdotB:a,AdotC:o,alphaTransform:m}}forward(e,t,n){let[r,i,a]=t,{areaABC:o,volumeABC:s}=this.constants;Sa(Jo,i,a);let c=xa(e,Jo);ga(Yo,e,s),_a(Yo,Yo,r,-c);let l=va(Yo);ga(Yo,Yo,l>0?1/l:1);let u=Math.max(0,qo(r,i,Yo))/o,d=l/s*Math.sqrt((1+xa(r,Yo))/(1+xa(r,e)));return lo([1-d,d*(1-u),d*u],n)}inverse(e,t,n){let[r,i,a]=n,o=co(e,t),s=1-1e-14;if(o[0]>s)return r;if(o[1]>s)return i;if(o[2]>s)return a;let{AdotB:c,AdotC:l,alphaTransform:u,areaABC:d}=this.constants,f=xa(r,i),p=Math.abs(f-c)>Math.abs(f-l),m=p?a:i,h=p?i:a,g=p?o[1]:o[2],_=1-o[0],v=g/_*d;Xo[0]=Math.cos(v),Xo[1]=Math.sin(v),fa(Zo,Xo,u),ga(Yo,m,Zo[0]),_a(Yo,Yo,h,Zo[1]),ba(Yo,Yo);let y=xa(r,Yo),b=1+_*_*(y-1),x=_*Math.sqrt((1+b)/(1+y)),S=b-y*x,C=pa();return ga(C,r,S),_a(C,C,Yo,x),C}},$o=!1,es=[0,1,2,3,4].map(e=>{let t=$i();return ea(t,Ta*e),t}),ts=ta(),ns=ta();[0,1,2,3].map(e=>{let t=Wa.clone();return e&1&&t.rotate180(),e&2&&t.reflectY(),t.getCenter()});function rs(e,t,n,r,i=$o){let a=(i?Qa:Wa).clone();return r&1&&a.rotate180(),r&2&&a.reflectY(),ra(ns,n.x+n.y,-n.x+(r&1)),da(ts,ns,$a),a.translate(ts),a.scale(1/2**e),a.transform(es[t]),a}function is(e){let t=Qa.clone();return t.transform(es[e]),t}function as(){let e=[];for(let t of es)e.push(da(ta(),Ya,t));return e.reverse(),new Fa(e)}var os=new class{constructor(){if(this.vertices=[],this.addFaceCenters(),this.addVertices(),this.addMidpoints(),this.vertices.length!==62)throw Error(`Failed to construct CRS: vertices length is not 62`);Object.freeze(this.vertices)}getCanonicalTriangle(){return[this.vertices[0],this.vertices[32],this.vertices[12]]}getVertex(e){for(let t of this.vertices)if(ya(e,t)<1e-5)return t;throw Error(`Failed to find vertex in CRS`)}addFaceCenters(){zo.forEach(e=>this.add(fo(e.axis)))}addVertices(){let e=Math.atan(ja);for(let t of zo)for(let n=0;n<5;n++){let r=fo([(2*n+1)*Math.PI/5+t.angle,e]);Ca(r,r,t.quat),this.add(r)}}addMidpoints(){let e=Math.atan(Aa);for(let t of zo)for(let n=0;n<5;n++){let r=fo([2*n*Math.PI/5+t.angle,e]);Ca(r,r,t.quat),this.add(r)}}add(e){let t=ba(pa(),e);return!this.vertices.find(e=>ya(t,e)<1e-5)&&(this.vertices.push(t),!0)}},ss=class{constructor(){this.faceTriangles=[],this.sphericalTriangles=[],this.equalArea=new Qo(os.getCanonicalTriangle()),this.gnomonic=new Wo}forward(e,t){return this.forwardCartesian(fo(e),t)}forwardCartesian(e,t){let n=zo[t],r=pa();Ca(r,e,n.inverseQuat);let i=uo(r),a=this.gnomonic.forward(i);a[1]-=n.angle;let o=this.getFaceTriangleIndex(a),s=this.shouldReflect(a),c=this.getFaceTriangle(o,s,!1),l=this.getSphericalTriangle(o,t,s);return this.equalArea.forward(e,l,c)}inverse(e,t){let n=oo(e),r=this.getFaceTriangleIndex(n),i=this.shouldReflect(n),a=this.getFaceTriangle(r,i,!1),o=this.getSphericalTriangle(r,t,i);return uo(this.equalArea.inverse(e,a,o))}shouldReflect(e){let[t,n]=e;return so([t,this.normalizeGamma(n)])[0]>Aa}getFaceTriangleIndex([e,t]){return(Math.floor(t/Ea)+10)%10}getFaceTriangle(e,t=!1,n=!1){let r=e;return t&&(r+=n?20:10),this.faceTriangles[r]||(this.faceTriangles[r]=t?this._getReflectedFaceTriangle(e,n):this._getFaceTriangle(e),Object.freeze(this.faceTriangles[r])),this.faceTriangles[r]}_getFaceTriangle(e){let[t,n,r]=is(Math.floor((e+1)/2)%5).getVertices(),i=ta();return la(i,n,r,.5),e%2==0?[t,i,n]:[t,r,i]}_getReflectedFaceTriangle(e,t=!1){let[n,r,i]=this._getFaceTriangle(e).map(e=>na(e)),a=e%2==0;return sa(n,n),oa(n,n,a?r:i,t?1+1/Math.cos(ka):2),[n,i,r]}getSphericalTriangle(e,t,n=!1){let r=10*t+e;return n&&(r+=120),this.sphericalTriangles[r]||(this.sphericalTriangles[r]=this._getSphericalTriangle(e,t,n),Object.freeze(this.sphericalTriangles[r])),this.sphericalTriangles[r]}_getSphericalTriangle(e,t,n=!1){let r=zo[t];return this.getFaceTriangle(e,n,!0).map(e=>{let[t,n]=oo(e),i=[t,n+r.angle],a=fo(this.gnomonic.inverse(i));return Ca(a,a,r.quat),os.getVertex(a)})}normalizeGamma(e){let t=e/Ta;return(t-Math.round(t))*Ta}},cs={A:`PQAB`,B:`B+++PQ---A`,C:`P---RMb+++`,M:`qQ+++C---b`,P:`PpB---B+++`,Q:`PQ---Cb+++`,R:`b+++a---qQ`},ls={A:`E`,B:`+e-`,C:`-e+`,M:`T`,P:`S`,Q:`D`,R:`+++D---`},us=Object.keys(cs);[...us,...us.map(e=>e.toLowerCase())];var ds=e=>e>=`a`&&e<=`z`?e.toUpperCase():e.toLowerCase(),fs=e=>[...e].reverse().map(e=>e===`+`?`-`:e===`-`?`+`:ds(e)).join(``);function ps(e,t){let n=``;for(let r of e){let e=r.toUpperCase();t[r]===void 0?r!==e&&t[e]!==void 0?n+=fs(t[e]):n+=r:n+=t[r]}return n}var ms=(e,t)=>({a:e.a+t.a,b:e.b+t.b}),hs=e=>({a:-e.b,b:e.a+e.b}),gs=(e,t)=>{let n=e,r=(t%6+6)%6;for(let e=0;e<r;e++)n=hs(n);return n},_s={E:{a:4,b:0},e:{a:4,b:0},S:{a:4,b:-2},s:{a:4,b:-2},U:{a:0,b:2},u:{a:0,b:2},D:{a:0,b:-2},d:{a:0,b:-2},T:{a:-4,b:0},t:{a:-4,b:0}},vs=new Set(Object.keys(_s)),ys={E:[{a:0,b:0},{a:4,b:0},{a:4,b:-4}],e:[{a:0,b:0},{a:4,b:0},{a:0,b:4}],S:[{a:0,b:0},{a:4,b:0},{a:4,b:-4}],s:[{a:4,b:-2},{a:0,b:2},{a:0,b:-2}],U:[{a:0,b:2},{a:0,b:-2},{a:4,b:-2}],u:[{a:0,b:0},{a:0,b:4},{a:-4,b:4}],D:[{a:0,b:2},{a:0,b:-2},{a:4,b:-2}],d:[{a:0,b:0},{a:0,b:-4},{a:-4,b:0}],T:[{a:0,b:-4},{a:-4,b:0},{a:-4,b:-4}],t:[{a:-4,b:4},{a:0,b:0},{a:0,b:4}]};function bs(e,t,n){return ys[e].map(e=>ms(t,gs(e,n)))}function xs(e,t,n){let[r,i,a]=bs(e,t,n);return{a:r.a+i.a+a.a,b:r.b+i.b+a.b}}function Ss(e,t,n,r){let i={...t},a=(n%6+6)%6;for(let t of e)t===`+`?a=(a+1)%6:t===`-`?a=(a+5)%6:vs.has(t)&&(r?.(t,i,a),i=ms(i,gs(_s[t],a)));return{pos:i,heading:a}}function Cs(e){let t=Ss(e,{a:0,b:0},0);return{disp:t.pos,dHeading:t.heading}}var ws=1e-6;function Ts(e,t,n){let r=n?-1:1,i=[];for(let a=0;a<4;a++){let o=t*4+a,s=e.childToken[o],c=e.childFlip[o],l=e.childOffA[o],u=e.childOffB[o],d=e.fpEdges[s*2+(n^c)],f=[];for(let e=0;e<d.length;e+=4)f.push([3*l*r+d[e],3*u*r+d[e+1]]);i.push([a,f])}return i}function Es(e){if(e.length===1)return{leaf:e[0][0]};for(let[,t]of e){let n=t.length;for(let r=0;r<n;r++){let[i,a]=t[r],[o,s]=t[(r+1)%n],c=s-a,l=-(o-i),u=-(c*i+l*a),d=[],f=[],p=!0;for(let[t,n]of e){let e=1/0,r=-1/0;for(let[t,i]of n){let n=c*t+l*i+u;n<e&&(e=n),n>r&&(r=n)}if(e>=-ws)d.push([t,n]);else if(r<=ws)f.push([t,n]);else{p=!1;break}}if(p&&d.length&&f.length)return{nx:c,ny:l,c:u,pos:Es(d),neg:Es(f)}}}throw Error(`lsystem: no clean BSP split for child set`)}function Ds(e,t){if(`leaf`in e)return;let n=[e.nx,e.ny,e.c];t.some(e=>e[0]===n[0]&&e[1]===n[1]&&e[2]===n[2])||t.push(n),Ds(e.pos,t),Ds(e.neg,t)}function Os(e,t,n){return`leaf`in e?e.leaf:Os(t>>n.findIndex(t=>t[0]===e.nx&&t[1]===e.ny&&t[2]===e.c)&1?e.pos:e.neg,t,n)}var ks={S:0,D:1,E:2,T:3};function As(e,t){let n=Object.keys(e),r=[...n,...n.map(e=>e.toLowerCase())],i=r.length,a={};r.forEach((e,t)=>a[e]=t);function o(n,r){let i=n;for(let t=0;t<r;t++)i=ps(i,e);return ps(i,t)}let s=e=>Cs(o(e,1)).disp;function c(t){let n={a:0,b:0},r=0,i=[];for(let a of t){if(a===`+`){r=(r+1)%6;continue}if(a===`-`){r=(r+5)%6;continue}if(e[a.toUpperCase()]===void 0)continue;if(r!==0&&r!==3)throw Error(`lsystem: non-180\xB0 turn (${60*r}\xB0) before a child in rule "${t}"`);let o=r===3;i.push({token:a,offUnit:{...n},flip:o});let c=s(a);n=o?{a:n.a-c.a,b:n.b-c.b}:{a:n.a+c.a,b:n.b+c.b}}if(i.length!==4)throw Error(`lsystem: rule "${t}" must have 4 children`);return i}let l={};for(let t of n)l[t]=c(e[t]);for(let t of n)l[t.toLowerCase()]=c(fs(e[t]));let u=new Int32Array(i*4),d=new Uint8Array(i*4),f=new Float64Array(i*4),p=new Float64Array(i*4);for(let e of r){let t=l[e];for(let n=0;n<4;n++){let r=a[e]*4+n;u[r]=a[t[n].token],d[r]=+!!t[n].flip,f[r]=t[n].offUnit.a,p[r]=t[n].offUnit.b}}function m(e){let t=[...new Map(e.map(e=>[`${e.a},${e.b}`,e])).values()].sort((e,t)=>e.a-t.a||e.b-t.b);if(t.length<3)return t;let n=(e,t,n)=>(t.a-e.a)*(n.b-e.b)-(t.b-e.b)*(n.a-e.a),r=[];for(let e of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],e)<=0;)r.pop();r.push(e)}let i=[];for(let e=t.length-1;e>=0;e--){let r=t[e];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],r)<=0;)i.pop();i.push(r)}return r.slice(0,-1).concat(i.slice(0,-1))}let h=Array(i*2);for(let e of r){let t=[];Ss(o(e,1),{a:0,b:0},0,(e,n,r)=>t.push(...bs(e,n,r)));let n=m(t);for(let t=0;t<2;t++){let r=t?-1:1,i=new Float64Array(n.length*4);for(let e=0;e<n.length;e++){let t=n[e],a=n[(e+1)%n.length];i[e*4]=3*r*t.a,i[e*4+1]=3*r*t.b,i[e*4+2]=r*(a.a-t.a),i[e*4+3]=r*(a.b-t.b)}h[a[e]*2+t]=i}}let g=new Float64Array(i*2*8),_=new Float64Array(i*2*48),v=new Uint8Array(i*2*4);for(let e of r){let t=o(e,1);for(let n=0;n<2;n++){let r=a[e]*2+n,i=0;Ss(t,{a:0,b:0},n?3:0,(e,t,n)=>{let a=xs(e,t,n);g[r*8+i*2]=a.a,g[r*8+i*2+1]=a.b;let o=e.toUpperCase();if(ks[o]===void 0)throw Error(`lsystem: no pentagon flavor for draw symbol ${e}`);v[r*4+i]=ks[o]^(e===o?0:1)^n&1;let s=bs(e,t,n);(s[1].a-s[0].a)*(s[2].b-s[0].b)-(s[1].b-s[0].b)*(s[2].a-s[0].a)<0&&(s=[s[0],s[2],s[1]]);for(let e=0;e<3;e++){let t=s[e],n=s[(e+1)%3],a=r*48+i*12+e*4;_[a]=3*t.a,_[a+1]=3*t.b,_[a+2]=n.a-t.a,_[a+3]=n.b-t.b}i++})}}let y={motifIdx:a,childToken:u,childFlip:d,childOffA:f,childOffB:p,fpEdges:h,leafSum:g,leafTri:_,leafFlavor:v,classSep:new Float64Array(i*2*9),classLut:new Uint8Array(i*2*8)};for(let e=0;e<i;e++)for(let t=0;t<2;t++){let n=e*2+t,r=Es(Ts(y,e,t)),i=[];Ds(r,i);for(let e=0;e<i.length;e++)y.classSep[n*9+e*3]=i[e][0],y.classSep[n*9+e*3+1]=i[e][1],y.classSep[n*9+e*3+2]=i[e][2];for(let e=0;e<8;e++)y.classLut[n*8+e]=Os(r,e,i)}return y}var js=new Float64Array(32);for(let e=0;e<32;e++)js[e]=2**e;var Ms=new Float64Array(20);for(let e=0;e<20;e++)Ms[e]=4**e;var Ns=As(cs,ls),Ps=13,Fs=26n,Is=67108863n;function Ls(e,t){if((2*e+t)%12!=0||t%4!=0)throw Error(`abToTriple: off-lattice corner sum (${e},${t})`);let n=(2*e+t-12)/12,r=(t+4)/4;for(let e of[0,1]){if((r+e)%3!=0)continue;let t=(r+e)/3,i=e-t;if((i+n)%2==0)return{x:t,y:(i+n)/2,z:(i-n)/2}}throw Error(`abToTriple: no integer triple for (${e},${t})`)}function Rs(e,t,n,r){let{childToken:i,childFlip:a,childOffA:o,childOffB:s,leafSum:c,leafFlavor:l}=e,u=Number(t&Is),d=Number(t>>Fs),f=r,p=0,m=0,h=0;for(let e=n;e>=2;e--){let t=e-1,n=t<Ps?u>>>(t<<1)&3:Math.floor(d/Ms[t-Ps])%4,r=f*4+n,c=p?-js[e-2]:js[e-2];m+=o[r]*c,h+=s[r]*c,p^=a[r],f=i[r]}let g=n>=1?u&3:0,_=f*2+p;return{a:3*m+c[_*8+g*2],b:3*h+c[_*8+g*2+1],flavor:l[_*4+g]}}Ns.motifIdx.A,Ns.motifIdx.A,Ns.motifIdx.C,Ns.motifIdx.C,Ns.motifIdx.B,Ns.motifIdx.B;var zs=As({W:`W+++Z---WZ`,Z:`Z+++W---ZW`},{W:`E`,Z:`+e-`}),Bs=zs.motifIdx.W;function Vs(e){return Array.from({length:e.length},(t,n)=>e.indexOf(n))}var Hs=[0,1,3,4,5,6,7,2],Us=[0,1,2,7,3,4,5,6];Vs(Hs),Vs(Us);function Ws(e,t,n,r,i){if(t<=0)return;let a=e[t]||0,o=e[t-1],s=n[0]+n[1],c=!0,l=!0;if(r===(s===0)?(c=a<2,l=a===0):(c=a===1||a===2,l=a===1),!c)return;let u=l?o:o+4,d=i[u];e[t-1]=d%4,e[t]=(a+4+Math.floor(d/4)-Math.floor(u/4))%4}function Gs(e,t){t===1?e[1]=-e[1]:t===3&&(e[0]=-e[0])}function Ks(e,t,n){let r=n?Us:Hs,i=[1,1];for(let n=e.length-1;n>=0;n--)Ws(e,n,i,t,r),Gs(i,e[n]);return i}function qs(e,t){let n=[],r=e;for(;r>0n||n.length<t;)n.push(Number(r&3n)),r>>=2n;return n}function Js(e){let t=0n;for(let n=e.length-1;n>=0;n--)t=t<<2n|BigInt(e[n]);return t}var Ys={uv:{reverse:!1,invertJ:!1,flipIJ:!1},vu:{reverse:!0,invertJ:!1,flipIJ:!1},uw:{reverse:!1,invertJ:!1,flipIJ:!0},wu:{reverse:!0,invertJ:!1,flipIJ:!0},vw:{reverse:!0,invertJ:!0,flipIJ:!1},wv:{reverse:!1,invertJ:!0,flipIJ:!1}};function Xs(e,t){return+(e[1]===-1)|(e[0]+e[1]===0?t===0||t===3:t===2||t===3)<<1}function Zs(e,t,n){let r=1n<<BigInt(2*t),i=qs(n.reverse?r-1n-e:e,t),a=Ks(i,n.invertJ,n.flipIJ),o=Rs(zs,Js(i),t,Bs),s=Ls(o.a,o.b);if(n.flipIJ&&(s={x:s.z,y:s.y,z:s.x}),n.invertJ){let e=js[t]-1;s={x:s.y-e,y:s.x+e,z:s.z}}return{triple:s,flips:a,q:i.length>0?i[0]:0}}function Qs(e,t,n=`uv`){let r=Ys[n],{triple:i,flips:a,q:o}=Zs(e,t,r);return r.invertJ&&(a[0]=-a[0]),{triple:i,flavor:Xs(a,o)}}var $s=2,ec=58n;function tc(e){if(e===0n)return-1;if(e&1n||(e&7n)==4n||(e&31n)==16n)return 30;let t=29,n=e>>1n;if(n===0n)return-1;let r=Number(n&4294967295n),i;for(r===0?(n>>=32n,t-=16,i=Number(n)):i=r,i&65535||(i>>=16,t-=8),t>=6&&!(i&255)&&(i>>=8,t-=4),t>=4&&!(i&15)&&(i>>=4,t-=2);t>-1&&!(i&1);)--t,i>>=t<$s?1:2;return t}function nc(e){let t=tc(e);if(t===-1)return{origin:zo[0],segment:0,S:0n,resolution:t};let n=ec,r=0;if(t===30){let t=e&1n?1n:e&4n?3n:5n;n=ec+t,r=t===1n?0:t===3n?32:40}let i=Number(e>>n)+r,a,o;if(t===0?(a=zo[i],o=0):(a=zo[Math.floor(i/5)],o=(i+a.firstQuintant)%5),!a)throw Error(`Could not parse origin: ${i}`);if(t<$s)return{origin:a,segment:o,S:0n,resolution:t};let s=t-$s+1,c=BigInt(2*s),l=(e&(1n<<n)-1n)>>n-c;return{origin:a,segment:o,S:l,resolution:t}}var rc=24,ic=1.4;ma(0,0,1),(()=>{let e=[];for(let t=0;t<rc;t++){let n=(t+1)*ic;e.push(ma(Math.cos(n),Math.sin(n),0))}return e})(),$i();var ac=new ss;function oc({S:e,segment:t,origin:n,resolution:r}){let{quintant:i,orientation:a}=Uo(t,n);if(r===$s-1)return is(i);if(r===$s-2)return as();let o=r-$s+1,{triple:s,flavor:c}=Qs(e,o,a);return rs(o,i,s,c)}function sc(e,{closedRing:t=!0,segments:n=`auto`}={closedRing:!0,segments:`auto`}){if(e===0n)return[];let{S:r,segment:i,origin:a,resolution:o}=nc(e);n===`auto`&&(n=Math.max(1,2**(6-o)));let s=oc({S:r,segment:i,origin:a,resolution:o}).splitEdges(n).getVertices(),c=Array(s.length);for(let e=0;e<s.length;e++)c[e]=go(ac.inverse(s[e],a.id));let l=_o(c);return t&&l.push(l[0]),l.reverse(),l}function cc(e){return BigInt(`0x${e}`)}var lc=2,uc=lc*Na/Math.sqrt(15),dc=Array(31);dc[0]=lc*Na/Math.sqrt(3);for(let e=1;e<=30;e++)dc[e]=uc/(1<<e-1);(()=>{let e=[];for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++)for(let r=-1;r<=1;r++)(t!==0||n!==0||r!==0)&&e.push([t,n,r]);return e})(),ma(0,0,1),ma(1,0,0);var J=function(e){e||={};var t=e===void 0?{}:e,n={},r;for(r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);var i=[],a=``;function o(e){return t.locateFile?t.locateFile(e,a):a+e}var s;typeof document<`u`&&document.currentScript&&(a=document.currentScript.src),a=a.indexOf(`blob:`)===0?``:a.substr(0,a.lastIndexOf(`/`)+1),s=function(e,t,n){var r=new XMLHttpRequest;r.open(`GET`,e,!0),r.responseType=`arraybuffer`,r.onload=function(){if(r.status==200||r.status==0&&r.response)t(r.response);else{var i=Fe(e);i?t(i.buffer):n()}},r.onerror=n,r.send(null)};var c=t.print||console.log.bind(console),l=t.printErr||console.warn.bind(console);for(r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);n=null,t.arguments&&(i=t.arguments);var u=0,d=function(e){u=e},f=function(){return u},p=8;function m(e,t,n,r){switch(n||=`i8`,n.charAt(n.length-1)===`*`&&(n=`i32`),n){case`i1`:k[e|0]=t;break;case`i8`:k[e|0]=t;break;case`i16`:j[e>>1]=t;break;case`i32`:M[e>>2]=t;break;case`i64`:be=[t>>>0,(ye=t,+le(ye)>=1?ye>0?(ue(+H(ye/4294967296),4294967295)|0)>>>0:~~+V((ye-+(~~ye>>>0))/4294967296)>>>0:0)],M[e>>2]=be[0],M[e+4>>2]=be[1];break;case`float`:N[e>>2]=t;break;case`double`:P[e>>3]=t;break;default:Ke(`invalid type for setValue: `+n)}}function h(e,t,n){switch(t||=`i8`,t.charAt(t.length-1)===`*`&&(t=`i32`),t){case`i1`:return k[e|0];case`i8`:return k[e|0];case`i16`:return j[e>>1];case`i32`:return M[e>>2];case`i64`:return M[e>>2];case`float`:return N[e>>2];case`double`:return P[e>>3];default:Ke(`invalid type for getValue: `+t)}return null}var g=!1;function _(e,t){e||Ke(`Assertion failed: `+t)}function v(e){var n=t[`_`+e];return _(n,`Cannot call unknown function `+e+`, make sure it is exported`),n}function y(e,t,n,r,i){var a={string:function(e){var t=0;if(e!=null&&e!==0){var n=(e.length<<2)+1;t=Le(n),T(e,t,n)}return t},array:function(e){var t=Le(e.length);return E(e,t),t}};function o(e){return t===`string`?C(e):t===`boolean`?!!e:e}var s=v(e),c=[],l=0;if(r)for(var u=0;u<r.length;u++){var d=a[n[u]];d?(l===0&&(l=ze()),c[u]=d(r[u])):c[u]=r[u]}var f=s.apply(null,c);return f=o(f),l!==0&&Re(l),f}function b(e,t,n,r){n||=[];var i=n.every(function(e){return e===`number`});return t!==`string`&&i&&!r?v(e):function(){return y(e,t,n,arguments,r)}}var x=typeof TextDecoder<`u`?new TextDecoder(`utf8`):void 0;function S(e,t,n){for(var r=t+n,i=t;e[i]&&!(i>=r);)++i;if(i-t>16&&e.subarray&&x)return x.decode(e.subarray(t,i));for(var a=``;t<i;){var o=e[t++];if(!(o&128))a+=String.fromCharCode(o);else{var s=e[t++]&63;if((o&224)==192)a+=String.fromCharCode((o&31)<<6|s);else{var c=e[t++]&63;if(o=(o&240)==224?(o&15)<<12|s<<6|c:(o&7)<<18|s<<12|c<<6|e[t++]&63,o<65536)a+=String.fromCharCode(o);else{var l=o-65536;a+=String.fromCharCode(55296|l>>10,56320|l&1023)}}}}return a}function C(e,t){return e?S(A,e,t):``}function w(e,t,n,r){if(!(r>0))return 0;for(var i=n,a=n+r-1,o=0;o<e.length;++o){var s=e.charCodeAt(o);if(s>=55296&&s<=57343){var c=e.charCodeAt(++o);s=65536+((s&1023)<<10)|c&1023}if(s<=127){if(n>=a)break;t[n++]=s}else if(s<=2047){if(n+1>=a)break;t[n++]=192|s>>6,t[n++]=128|s&63}else if(s<=65535){if(n+2>=a)break;t[n++]=224|s>>12,t[n++]=128|s>>6&63,t[n++]=128|s&63}else{if(n+3>=a)break;t[n++]=240|s>>18,t[n++]=128|s>>12&63,t[n++]=128|s>>6&63,t[n++]=128|s&63}}return t[n]=0,n-i}function T(e,t,n){return w(e,A,t,n)}typeof TextDecoder<`u`&&new TextDecoder(`utf-16le`);function E(e,t){k.set(e,t)}function D(e,t){return e%t>0&&(e+=t-e%t),e}var O,k,A,j,M,N,P;function F(e){O=e,t.HEAP8=k=new Int8Array(e),t.HEAP16=j=new Int16Array(e),t.HEAP32=M=new Int32Array(e),t.HEAPU8=A=new Uint8Array(e),t.HEAPU16=new Uint16Array(e),t.HEAPU32=new Uint32Array(e),t.HEAPF32=N=new Float32Array(e),t.HEAPF64=P=new Float64Array(e)}var I=5271296,L=28384,ee=t.TOTAL_MEMORY||33554432;O=t.buffer?t.buffer:new ArrayBuffer(ee),ee=O.byteLength,F(O),M[L>>2]=I;function R(e){for(;e.length>0;){var n=e.shift();if(typeof n==`function`)n();else{var r=n.func;typeof r==`number`?n.arg===void 0?t.dynCall_v(r):t.dynCall_vi(r,n.arg):r(n.arg===void 0?null:n.arg)}}}var te=[],ne=[],re=[],z=[];function ie(){if(t.preRun)for(typeof t.preRun==`function`&&(t.preRun=[t.preRun]);t.preRun.length;)ce(t.preRun.shift());R(te)}function ae(){R(ne)}function oe(){R(re)}function se(){if(t.postRun)for(typeof t.postRun==`function`&&(t.postRun=[t.postRun]);t.postRun.length;)B(t.postRun.shift());R(z)}function ce(e){te.unshift(e)}function B(e){z.unshift(e)}var le=Math.abs,V=Math.ceil,H=Math.floor,ue=Math.min,de=0,fe=null,pe=null;function me(e){de++,t.monitorRunDependencies&&t.monitorRunDependencies(de)}function he(e){if(de--,t.monitorRunDependencies&&t.monitorRunDependencies(de),de==0&&(fe!==null&&(clearInterval(fe),fe=null),pe)){var n=pe;pe=null,n()}}t.preloadedImages={},t.preloadedAudios={};var ge=null,_e=`data:application/octet-stream;base64,`;function ve(e){return String.prototype.startsWith?e.startsWith(_e):e.indexOf(_e)===0}var ye,be;ge=`data:application/octet-stream;base64,AAAAAAAAAAAAAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAAAQAAAAQAAAADAAAABgAAAAUAAAACAAAAAAAAAAIAAAADAAAAAQAAAAQAAAAGAAAAAAAAAAUAAAADAAAABgAAAAQAAAAFAAAAAAAAAAEAAAACAAAABAAAAAUAAAAGAAAAAAAAAAIAAAADAAAAAQAAAAUAAAACAAAAAAAAAAEAAAADAAAABgAAAAQAAAAGAAAAAAAAAAUAAAACAAAAAQAAAAQAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAEAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAIAAAADAAAAAAAAAAAAAAACAAAAAAAAAAEAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAYAAAAAAAAABQAAAAAAAAAAAAAABAAAAAUAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAYAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAgAAAAMAAAAEAAAABQAAAAYAAAABAAAAAgAAAAMAAAAEAAAABQAAAAYAAAAAAAAAAgAAAAMAAAAEAAAABQAAAAYAAAAAAAAAAQAAAAMAAAAEAAAABQAAAAYAAAAAAAAAAQAAAAIAAAAEAAAABQAAAAYAAAAAAAAAAQAAAAIAAAADAAAABQAAAAYAAAAAAAAAAQAAAAIAAAADAAAABAAAAAYAAAAAAAAAAQAAAAIAAAADAAAABAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAgAAAAIAAAAAAAAAAAAAAAYAAAAAAAAAAwAAAAIAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAFAAAABAAAAAAAAAABAAAAAAAAAAAAAAAFAAAABQAAAAAAAAAAAAAAAAAAAAYAAAAAAAAABAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAgAAAAQAAAADAAAACAAAAAEAAAAHAAAABgAAAAkAAAAAAAAAAwAAAAIAAAACAAAABgAAAAoAAAALAAAAAAAAAAEAAAAFAAAAAwAAAA0AAAABAAAABwAAAAQAAAAMAAAAAAAAAAQAAAB/AAAADwAAAAgAAAADAAAAAAAAAAwAAAAFAAAAAgAAABIAAAAKAAAACAAAAAAAAAAQAAAABgAAAA4AAAALAAAAEQAAAAEAAAAJAAAAAgAAAAcAAAAVAAAACQAAABMAAAADAAAADQAAAAEAAAAIAAAABQAAABYAAAAQAAAABAAAAAAAAAAPAAAACQAAABMAAAAOAAAAFAAAAAEAAAAHAAAABgAAAAoAAAALAAAAGAAAABcAAAAFAAAAAgAAABIAAAALAAAAEQAAABcAAAAZAAAAAgAAAAYAAAAKAAAADAAAABwAAAANAAAAGgAAAAQAAAAPAAAAAwAAAA0AAAAaAAAAFQAAAB0AAAADAAAADAAAAAcAAAAOAAAAfwAAABEAAAAbAAAACQAAABQAAAAGAAAADwAAABYAAAAcAAAAHwAAAAQAAAAIAAAADAAAABAAAAASAAAAIQAAAB4AAAAIAAAABQAAABYAAAARAAAACwAAAA4AAAAGAAAAIwAAABkAAAAbAAAAEgAAABgAAAAeAAAAIAAAAAUAAAAKAAAAEAAAABMAAAAiAAAAFAAAACQAAAAHAAAAFQAAAAkAAAAUAAAADgAAABMAAAAJAAAAKAAAABsAAAAkAAAAFQAAACYAAAATAAAAIgAAAA0AAAAdAAAABwAAABYAAAAQAAAAKQAAACEAAAAPAAAACAAAAB8AAAAXAAAAGAAAAAsAAAAKAAAAJwAAACUAAAAZAAAAGAAAAH8AAAAgAAAAJQAAAAoAAAAXAAAAEgAAABkAAAAXAAAAEQAAAAsAAAAtAAAAJwAAACMAAAAaAAAAKgAAAB0AAAArAAAADAAAABwAAAANAAAAGwAAACgAAAAjAAAALgAAAA4AAAAUAAAAEQAAABwAAAAfAAAAKgAAACwAAAAMAAAADwAAABoAAAAdAAAAKwAAACYAAAAvAAAADQAAABoAAAAVAAAAHgAAACAAAAAwAAAAMgAAABAAAAASAAAAIQAAAB8AAAApAAAALAAAADUAAAAPAAAAFgAAABwAAAAgAAAAHgAAABgAAAASAAAANAAAADIAAAAlAAAAIQAAAB4AAAAxAAAAMAAAABYAAAAQAAAAKQAAACIAAAATAAAAJgAAABUAAAA2AAAAJAAAADMAAAAjAAAALgAAAC0AAAA4AAAAEQAAABsAAAAZAAAAJAAAABQAAAAiAAAAEwAAADcAAAAoAAAANgAAACUAAAAnAAAANAAAADkAAAAYAAAAFwAAACAAAAAmAAAAfwAAACIAAAAzAAAAHQAAAC8AAAAVAAAAJwAAACUAAAAZAAAAFwAAADsAAAA5AAAALQAAACgAAAAbAAAAJAAAABQAAAA8AAAALgAAADcAAAApAAAAMQAAADUAAAA9AAAAFgAAACEAAAAfAAAAKgAAADoAAAArAAAAPgAAABwAAAAsAAAAGgAAACsAAAA+AAAALwAAAEAAAAAaAAAAKgAAAB0AAAAsAAAANQAAADoAAABBAAAAHAAAAB8AAAAqAAAALQAAACcAAAAjAAAAGQAAAD8AAAA7AAAAOAAAAC4AAAA8AAAAOAAAAEQAAAAbAAAAKAAAACMAAAAvAAAAJgAAACsAAAAdAAAARQAAADMAAABAAAAAMAAAADEAAAAeAAAAIQAAAEMAAABCAAAAMgAAADEAAAB/AAAAPQAAAEIAAAAhAAAAMAAAACkAAAAyAAAAMAAAACAAAAAeAAAARgAAAEMAAAA0AAAAMwAAAEUAAAA2AAAARwAAACYAAAAvAAAAIgAAADQAAAA5AAAARgAAAEoAAAAgAAAAJQAAADIAAAA1AAAAPQAAAEEAAABLAAAAHwAAACkAAAAsAAAANgAAAEcAAAA3AAAASQAAACIAAAAzAAAAJAAAADcAAAAoAAAANgAAACQAAABIAAAAPAAAAEkAAAA4AAAARAAAAD8AAABNAAAAIwAAAC4AAAAtAAAAOQAAADsAAABKAAAATgAAACUAAAAnAAAANAAAADoAAAB/AAAAPgAAAEwAAAAsAAAAQQAAACoAAAA7AAAAPwAAAE4AAABPAAAAJwAAAC0AAAA5AAAAPAAAAEgAAABEAAAAUAAAACgAAAA3AAAALgAAAD0AAAA1AAAAMQAAACkAAABRAAAASwAAAEIAAAA+AAAAKwAAADoAAAAqAAAAUgAAAEAAAABMAAAAPwAAAH8AAAA4AAAALQAAAE8AAAA7AAAATQAAAEAAAAAvAAAAPgAAACsAAABUAAAARQAAAFIAAABBAAAAOgAAADUAAAAsAAAAVgAAAEwAAABLAAAAQgAAAEMAAABRAAAAVQAAADEAAAAwAAAAPQAAAEMAAABCAAAAMgAAADAAAABXAAAAVQAAAEYAAABEAAAAOAAAADwAAAAuAAAAWgAAAE0AAABQAAAARQAAADMAAABAAAAALwAAAFkAAABHAAAAVAAAAEYAAABDAAAANAAAADIAAABTAAAAVwAAAEoAAABHAAAAWQAAAEkAAABbAAAAMwAAAEUAAAA2AAAASAAAAH8AAABJAAAANwAAAFAAAAA8AAAAWAAAAEkAAABbAAAASAAAAFgAAAA2AAAARwAAADcAAABKAAAATgAAAFMAAABcAAAANAAAADkAAABGAAAASwAAAEEAAAA9AAAANQAAAF4AAABWAAAAUQAAAEwAAABWAAAAUgAAAGAAAAA6AAAAQQAAAD4AAABNAAAAPwAAAEQAAAA4AAAAXQAAAE8AAABaAAAATgAAAEoAAAA7AAAAOQAAAF8AAABcAAAATwAAAE8AAABOAAAAPwAAADsAAABdAAAAXwAAAE0AAABQAAAARAAAAEgAAAA8AAAAYwAAAFoAAABYAAAAUQAAAFUAAABeAAAAZQAAAD0AAABCAAAASwAAAFIAAABgAAAAVAAAAGIAAAA+AAAATAAAAEAAAABTAAAAfwAAAEoAAABGAAAAZAAAAFcAAABcAAAAVAAAAEUAAABSAAAAQAAAAGEAAABZAAAAYgAAAFUAAABXAAAAZQAAAGYAAABCAAAAQwAAAFEAAABWAAAATAAAAEsAAABBAAAAaAAAAGAAAABeAAAAVwAAAFMAAABmAAAAZAAAAEMAAABGAAAAVQAAAFgAAABIAAAAWwAAAEkAAABjAAAAUAAAAGkAAABZAAAAYQAAAFsAAABnAAAARQAAAFQAAABHAAAAWgAAAE0AAABQAAAARAAAAGoAAABdAAAAYwAAAFsAAABJAAAAWQAAAEcAAABpAAAAWAAAAGcAAABcAAAAUwAAAE4AAABKAAAAbAAAAGQAAABfAAAAXQAAAE8AAABaAAAATQAAAG0AAABfAAAAagAAAF4AAABWAAAAUQAAAEsAAABrAAAAaAAAAGUAAABfAAAAXAAAAE8AAABOAAAAbQAAAGwAAABdAAAAYAAAAGgAAABiAAAAbgAAAEwAAABWAAAAUgAAAGEAAAB/AAAAYgAAAFQAAABnAAAAWQAAAG8AAABiAAAAbgAAAGEAAABvAAAAUgAAAGAAAABUAAAAYwAAAFAAAABpAAAAWAAAAGoAAABaAAAAcQAAAGQAAABmAAAAUwAAAFcAAABsAAAAcgAAAFwAAABlAAAAZgAAAGsAAABwAAAAUQAAAFUAAABeAAAAZgAAAGUAAABXAAAAVQAAAHIAAABwAAAAZAAAAGcAAABbAAAAYQAAAFkAAAB0AAAAaQAAAG8AAABoAAAAawAAAG4AAABzAAAAVgAAAF4AAABgAAAAaQAAAFgAAABnAAAAWwAAAHEAAABjAAAAdAAAAGoAAABdAAAAYwAAAFoAAAB1AAAAbQAAAHEAAABrAAAAfwAAAGUAAABeAAAAcwAAAGgAAABwAAAAbAAAAGQAAABfAAAAXAAAAHYAAAByAAAAbQAAAG0AAABsAAAAXQAAAF8AAAB1AAAAdgAAAGoAAABuAAAAYgAAAGgAAABgAAAAdwAAAG8AAABzAAAAbwAAAGEAAABuAAAAYgAAAHQAAABnAAAAdwAAAHAAAABrAAAAZgAAAGUAAAB4AAAAcwAAAHIAAABxAAAAYwAAAHQAAABpAAAAdQAAAGoAAAB5AAAAcgAAAHAAAABkAAAAZgAAAHYAAAB4AAAAbAAAAHMAAABuAAAAawAAAGgAAAB4AAAAdwAAAHAAAAB0AAAAZwAAAHcAAABvAAAAcQAAAGkAAAB5AAAAdQAAAH8AAABtAAAAdgAAAHEAAAB5AAAAagAAAHYAAAB4AAAAbAAAAHIAAAB1AAAAeQAAAG0AAAB3AAAAbwAAAHMAAABuAAAAeQAAAHQAAAB4AAAAeAAAAHMAAAByAAAAcAAAAHkAAAB3AAAAdgAAAHkAAAB0AAAAeAAAAHcAAAB1AAAAcQAAAHYAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAABAAAABQAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAACAAAABQAAAAEAAAAAAAAA/////wEAAAAAAAAAAwAAAAQAAAACAAAAAAAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAMAAAAFAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAFAAAAAQAAAAAAAAAAAAAAAQAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAADAAAAAAAAAAAAAAABAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAADAAAABQAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAP////8DAAAAAAAAAAUAAAACAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAEAAAABQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAAFAAAABQAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAFAAAABQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAAAAAAD/////AwAAAAAAAAAFAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAAAAAABAAAAAwAAAAAAAAAAAAAAAQAAAAAAAAADAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAQAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAAwAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAADAAAAAAAAAP////8DAAAAAAAAAAUAAAACAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAFAAAABQAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAwAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAAAAAAADAAAAAwAAAAMAAAAAAAAAAwAAAAAAAAAAAAAA/////wMAAAAAAAAABQAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAAAAAAA/////wMAAAAAAAAABQAAAAIAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAMAAAADAAAAAAAAAAAAAAADAAAAAwAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAAMAAAADAAAAAwAAAAMAAAAAAAAAAwAAAAAAAAD/////AwAAAAAAAAAFAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAAAAAAMAAAADAAAAAwAAAAAAAAADAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAAAAAD/////AwAAAAAAAAAFAAAAAgAAAAAAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAADAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAFAAAAAAAAAAAAAAADAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAADAAAAAQAAAAAAAAABAAAAAAAAAAAAAAABAAAAAwAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAADAAAAAAAAAP////8DAAAAAAAAAAUAAAACAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAAAAAAAAAAADAAAAAwAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAUAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAwAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAFAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAFAAAABQAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAAAAAAAAAAAA/////wMAAAAAAAAABQAAAAIAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAAFAAAAAAAAAAAAAAAFAAAABQAAAAAAAAAAAAAAAAAAAAEAAAADAAAAAQAAAAAAAAABAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAwAAAAAAAAADAAAAAwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAADAAAAAQAAAAAAAAABAAAAAAAAAAMAAAADAAAAAwAAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAwAAAAUAAAABAAAAAAAAAP////8DAAAAAAAAAAUAAAACAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAFAAAABQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAABAAAAAUAAAABAAAAAAAAAAMAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAIAAAAFAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAADAAAAAQAAAAAAAAABAAAAAAAAAAUAAAAAAAAAAAAAAAUAAAAFAAAAAAAAAAAAAAD/////AQAAAAAAAAADAAAABAAAAAIAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAUAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAFAAAAAAAAAAAAAAAFAAAABQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAUAAAABAAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAEAAAD//////////wEAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAADAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAsAAAACAAAAAAAAAAAAAAABAAAAAgAAAAYAAAAEAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAKAAAAAgAAAAAAAAAAAAAAAQAAAAEAAAAFAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAsAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAACAAAAAAAAAAAAAAABAAAAAwAAAAcAAAAGAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAABwAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAADgAAAAIAAAAAAAAAAAAAAAEAAAAAAAAACQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAMAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQAAAAIAAAAAAAAAAAAAAAEAAAAEAAAACAAAAAoAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAALAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAACQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAgAAAAAAAAAAAAAAAQAAAAsAAAAPAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAOAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAIAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAABQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAgAAAAAAAAAAAAAAAQAAAAwAAAAQAAAADAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAADwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAADQAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAACAAAAAAAAAAAAAAABAAAACgAAABMAAAAIAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAQAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAACQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAIAAAAAAAAAAAAAAAEAAAANAAAAEQAAAA0AAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAARAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAEwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAATAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAA0AAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkAAAACAAAAAAAAAAAAAAABAAAADgAAABIAAAAPAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAADwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAASAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAEwAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAABIAAAABAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAATAAAAAgAAAAAAAAAAAAAAAQAAAP//////////EwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAEgAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAASAAAAAAAAABgAAAAAAAAAIQAAAAAAAAAeAAAAAAAAACAAAAADAAAAMQAAAAEAAAAwAAAAAwAAADIAAAADAAAACAAAAAAAAAAFAAAABQAAAAoAAAAFAAAAFgAAAAAAAAAQAAAAAAAAABIAAAAAAAAAKQAAAAEAAAAhAAAAAAAAAB4AAAAAAAAABAAAAAAAAAAAAAAABQAAAAIAAAAFAAAADwAAAAEAAAAIAAAAAAAAAAUAAAAFAAAAHwAAAAEAAAAWAAAAAAAAABAAAAAAAAAAAgAAAAAAAAAGAAAAAAAAAA4AAAAAAAAACgAAAAAAAAALAAAAAAAAABEAAAADAAAAGAAAAAEAAAAXAAAAAwAAABkAAAADAAAAAAAAAAAAAAABAAAABQAAAAkAAAAFAAAABQAAAAAAAAACAAAAAAAAAAYAAAAAAAAAEgAAAAEAAAAKAAAAAAAAAAsAAAAAAAAABAAAAAEAAAADAAAABQAAAAcAAAAFAAAACAAAAAEAAAAAAAAAAAAAAAEAAAAFAAAAEAAAAAEAAAAFAAAAAAAAAAIAAAAAAAAABwAAAAAAAAAVAAAAAAAAACYAAAAAAAAACQAAAAAAAAATAAAAAAAAACIAAAADAAAADgAAAAEAAAAUAAAAAwAAACQAAAADAAAAAwAAAAAAAAANAAAABQAAAB0AAAAFAAAAAQAAAAAAAAAHAAAAAAAAABUAAAAAAAAABgAAAAEAAAAJAAAAAAAAABMAAAAAAAAABAAAAAIAAAAMAAAABQAAABoAAAAFAAAAAAAAAAEAAAADAAAAAAAAAA0AAAAFAAAAAgAAAAEAAAABAAAAAAAAAAcAAAAAAAAAGgAAAAAAAAAqAAAAAAAAADoAAAAAAAAAHQAAAAAAAAArAAAAAAAAAD4AAAADAAAAJgAAAAEAAAAvAAAAAwAAAEAAAAADAAAADAAAAAAAAAAcAAAABQAAACwAAAAFAAAADQAAAAAAAAAaAAAAAAAAACoAAAAAAAAAFQAAAAEAAAAdAAAAAAAAACsAAAAAAAAABAAAAAMAAAAPAAAABQAAAB8AAAAFAAAAAwAAAAEAAAAMAAAAAAAAABwAAAAFAAAABwAAAAEAAAANAAAAAAAAABoAAAAAAAAAHwAAAAAAAAApAAAAAAAAADEAAAAAAAAALAAAAAAAAAA1AAAAAAAAAD0AAAADAAAAOgAAAAEAAABBAAAAAwAAAEsAAAADAAAADwAAAAAAAAAWAAAABQAAACEAAAAFAAAAHAAAAAAAAAAfAAAAAAAAACkAAAAAAAAAKgAAAAEAAAAsAAAAAAAAADUAAAAAAAAABAAAAAQAAAAIAAAABQAAABAAAAAFAAAADAAAAAEAAAAPAAAAAAAAABYAAAAFAAAAGgAAAAEAAAAcAAAAAAAAAB8AAAAAAAAAMgAAAAAAAAAwAAAAAAAAADEAAAADAAAAIAAAAAAAAAAeAAAAAwAAACEAAAADAAAAGAAAAAMAAAASAAAAAwAAABAAAAADAAAARgAAAAAAAABDAAAAAAAAAEIAAAADAAAANAAAAAMAAAAyAAAAAAAAADAAAAAAAAAAJQAAAAMAAAAgAAAAAAAAAB4AAAADAAAAUwAAAAAAAABXAAAAAwAAAFUAAAADAAAASgAAAAMAAABGAAAAAAAAAEMAAAAAAAAAOQAAAAEAAAA0AAAAAwAAADIAAAAAAAAAGQAAAAAAAAAXAAAAAAAAABgAAAADAAAAEQAAAAAAAAALAAAAAwAAAAoAAAADAAAADgAAAAMAAAAGAAAAAwAAAAIAAAADAAAALQAAAAAAAAAnAAAAAAAAACUAAAADAAAAIwAAAAMAAAAZAAAAAAAAABcAAAAAAAAAGwAAAAMAAAARAAAAAAAAAAsAAAADAAAAPwAAAAAAAAA7AAAAAwAAADkAAAADAAAAOAAAAAMAAAAtAAAAAAAAACcAAAAAAAAALgAAAAMAAAAjAAAAAwAAABkAAAAAAAAAJAAAAAAAAAAUAAAAAAAAAA4AAAADAAAAIgAAAAAAAAATAAAAAwAAAAkAAAADAAAAJgAAAAMAAAAVAAAAAwAAAAcAAAADAAAANwAAAAAAAAAoAAAAAAAAABsAAAADAAAANgAAAAMAAAAkAAAAAAAAABQAAAAAAAAAMwAAAAMAAAAiAAAAAAAAABMAAAADAAAASAAAAAAAAAA8AAAAAwAAAC4AAAADAAAASQAAAAMAAAA3AAAAAAAAACgAAAAAAAAARwAAAAMAAAA2AAAAAwAAACQAAAAAAAAAQAAAAAAAAAAvAAAAAAAAACYAAAADAAAAPgAAAAAAAAArAAAAAwAAAB0AAAADAAAAOgAAAAMAAAAqAAAAAwAAABoAAAADAAAAVAAAAAAAAABFAAAAAAAAADMAAAADAAAAUgAAAAMAAABAAAAAAAAAAC8AAAAAAAAATAAAAAMAAAA+AAAAAAAAACsAAAADAAAAYQAAAAAAAABZAAAAAwAAAEcAAAADAAAAYgAAAAMAAABUAAAAAAAAAEUAAAAAAAAAYAAAAAMAAABSAAAAAwAAAEAAAAAAAAAASwAAAAAAAABBAAAAAAAAADoAAAADAAAAPQAAAAAAAAA1AAAAAwAAACwAAAADAAAAMQAAAAMAAAApAAAAAwAAAB8AAAADAAAAXgAAAAAAAABWAAAAAAAAAEwAAAADAAAAUQAAAAMAAABLAAAAAAAAAEEAAAAAAAAAQgAAAAMAAAA9AAAAAAAAADUAAAADAAAAawAAAAAAAABoAAAAAwAAAGAAAAADAAAAZQAAAAMAAABeAAAAAAAAAFYAAAAAAAAAVQAAAAMAAABRAAAAAwAAAEsAAAAAAAAAOQAAAAAAAAA7AAAAAAAAAD8AAAADAAAASgAAAAAAAABOAAAAAwAAAE8AAAADAAAAUwAAAAMAAABcAAAAAwAAAF8AAAADAAAAJQAAAAAAAAAnAAAAAwAAAC0AAAADAAAANAAAAAAAAAA5AAAAAAAAADsAAAAAAAAARgAAAAMAAABKAAAAAAAAAE4AAAADAAAAGAAAAAAAAAAXAAAAAwAAABkAAAADAAAAIAAAAAMAAAAlAAAAAAAAACcAAAADAAAAMgAAAAMAAAA0AAAAAAAAADkAAAAAAAAALgAAAAAAAAA8AAAAAAAAAEgAAAADAAAAOAAAAAAAAABEAAAAAwAAAFAAAAADAAAAPwAAAAMAAABNAAAAAwAAAFoAAAADAAAAGwAAAAAAAAAoAAAAAwAAADcAAAADAAAAIwAAAAAAAAAuAAAAAAAAADwAAAAAAAAALQAAAAMAAAA4AAAAAAAAAEQAAAADAAAADgAAAAAAAAAUAAAAAwAAACQAAAADAAAAEQAAAAMAAAAbAAAAAAAAACgAAAADAAAAGQAAAAMAAAAjAAAAAAAAAC4AAAAAAAAARwAAAAAAAABZAAAAAAAAAGEAAAADAAAASQAAAAAAAABbAAAAAwAAAGcAAAADAAAASAAAAAMAAABYAAAAAwAAAGkAAAADAAAAMwAAAAAAAABFAAAAAwAAAFQAAAADAAAANgAAAAAAAABHAAAAAAAAAFkAAAAAAAAANwAAAAMAAABJAAAAAAAAAFsAAAADAAAAJgAAAAAAAAAvAAAAAwAAAEAAAAADAAAAIgAAAAMAAAAzAAAAAAAAAEUAAAADAAAAJAAAAAMAAAA2AAAAAAAAAEcAAAAAAAAAYAAAAAAAAABoAAAAAAAAAGsAAAADAAAAYgAAAAAAAABuAAAAAwAAAHMAAAADAAAAYQAAAAMAAABvAAAAAwAAAHcAAAADAAAATAAAAAAAAABWAAAAAwAAAF4AAAADAAAAUgAAAAAAAABgAAAAAAAAAGgAAAAAAAAAVAAAAAMAAABiAAAAAAAAAG4AAAADAAAAOgAAAAAAAABBAAAAAwAAAEsAAAADAAAAPgAAAAMAAABMAAAAAAAAAFYAAAADAAAAQAAAAAMAAABSAAAAAAAAAGAAAAAAAAAAVQAAAAAAAABXAAAAAAAAAFMAAAADAAAAZQAAAAAAAABmAAAAAwAAAGQAAAADAAAAawAAAAMAAABwAAAAAwAAAHIAAAADAAAAQgAAAAAAAABDAAAAAwAAAEYAAAADAAAAUQAAAAAAAABVAAAAAAAAAFcAAAAAAAAAXgAAAAMAAABlAAAAAAAAAGYAAAADAAAAMQAAAAAAAAAwAAAAAwAAADIAAAADAAAAPQAAAAMAAABCAAAAAAAAAEMAAAADAAAASwAAAAMAAABRAAAAAAAAAFUAAAAAAAAAXwAAAAAAAABcAAAAAAAAAFMAAAAAAAAATwAAAAAAAABOAAAAAAAAAEoAAAADAAAAPwAAAAEAAAA7AAAAAwAAADkAAAADAAAAbQAAAAAAAABsAAAAAAAAAGQAAAAFAAAAXQAAAAEAAABfAAAAAAAAAFwAAAAAAAAATQAAAAEAAABPAAAAAAAAAE4AAAAAAAAAdQAAAAQAAAB2AAAABQAAAHIAAAAFAAAAagAAAAEAAABtAAAAAAAAAGwAAAAAAAAAWgAAAAEAAABdAAAAAQAAAF8AAAAAAAAAWgAAAAAAAABNAAAAAAAAAD8AAAAAAAAAUAAAAAAAAABEAAAAAAAAADgAAAADAAAASAAAAAEAAAA8AAAAAwAAAC4AAAADAAAAagAAAAAAAABdAAAAAAAAAE8AAAAFAAAAYwAAAAEAAABaAAAAAAAAAE0AAAAAAAAAWAAAAAEAAABQAAAAAAAAAEQAAAAAAAAAdQAAAAMAAABtAAAABQAAAF8AAAAFAAAAcQAAAAEAAABqAAAAAAAAAF0AAAAAAAAAaQAAAAEAAABjAAAAAQAAAFoAAAAAAAAAaQAAAAAAAABYAAAAAAAAAEgAAAAAAAAAZwAAAAAAAABbAAAAAAAAAEkAAAADAAAAYQAAAAEAAABZAAAAAwAAAEcAAAADAAAAcQAAAAAAAABjAAAAAAAAAFAAAAAFAAAAdAAAAAEAAABpAAAAAAAAAFgAAAAAAAAAbwAAAAEAAABnAAAAAAAAAFsAAAAAAAAAdQAAAAIAAABqAAAABQAAAFoAAAAFAAAAeQAAAAEAAABxAAAAAAAAAGMAAAAAAAAAdwAAAAEAAAB0AAAAAQAAAGkAAAAAAAAAdwAAAAAAAABvAAAAAAAAAGEAAAAAAAAAcwAAAAAAAABuAAAAAAAAAGIAAAADAAAAawAAAAEAAABoAAAAAwAAAGAAAAADAAAAeQAAAAAAAAB0AAAAAAAAAGcAAAAFAAAAeAAAAAEAAAB3AAAAAAAAAG8AAAAAAAAAcAAAAAEAAABzAAAAAAAAAG4AAAAAAAAAdQAAAAEAAABxAAAABQAAAGkAAAAFAAAAdgAAAAEAAAB5AAAAAAAAAHQAAAAAAAAAcgAAAAEAAAB4AAAAAQAAAHcAAAAAAAAAcgAAAAAAAABwAAAAAAAAAGsAAAAAAAAAZAAAAAAAAABmAAAAAAAAAGUAAAADAAAAUwAAAAEAAABXAAAAAwAAAFUAAAADAAAAdgAAAAAAAAB4AAAAAAAAAHMAAAAFAAAAbAAAAAEAAAByAAAAAAAAAHAAAAAAAAAAXAAAAAEAAABkAAAAAAAAAGYAAAAAAAAAdQAAAAAAAAB5AAAABQAAAHcAAAAFAAAAbQAAAAEAAAB2AAAAAAAAAHgAAAAAAAAAXwAAAAEAAABsAAAAAQAAAHIAAAAAAAAAGC1EVPsh+T8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgtRFT7Ifk/GC1EVPsh+T8AAAAAAAAAAAAAAAAAAAAAGC1EVPsh+T8AAAAAAAAAABgtRFT7IQlAGC1EVPsh+T8AAAAAAAAAAAAAAAAAAAAAGC1EVPshCUAAAAAAAAAAABgtRFT7Ifm/GC1EVPsh+T8AAAAAAAAAAAAAAAAAAAAAGC1EVPsh+b8AAAAAAAAAAAAAAAAAAAAAGC1EVPsh+b8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgtRFT7Ifm/GC1EVPsh+b8AAAAAAAAAAAAAAAAAAAAAGC1EVPsh+b8AAAAAAAAAABgtRFT7IQnAGC1EVPsh+b8AAAAAAAAAAAAAAAAAAAAAGC1EVPshCcAAAAAAAAAAABgtRFT7Ifk/GC1EVPsh+b8AAAAAAAAAAAAAAAAAAAAAGC1EVPsh+T8AAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAGAAAAAgAAAAUAAAABAAAABAAAAAAAAAAAAAAABQAAAAMAAAABAAAABgAAAAQAAAACAAAAAAAAAMpi5RexJsw/BlIKPVwR5T95Wyu0/QjnP5PjoT7YYcu/mBhKZ6zrwj8wRYS7NebuP3qW6geh+Ls/SLrixebL3r+pcyymN9XrPwmkNHp7xec/GWNMZVAA17+82s+x2BLiPwn2ytbJ9ek/LgEH1sMS1j8yp/2LhTfeP+SnWwtQBbu/d38gkp5X7z8ytsuHaADGPzUYObdf1+m/7IauECWhwz+cjSACjzniP76Z+wUhN9K/1+GEKzup67+/GYr/04baPw6idWOvsuc/ZedTWsRa5b/EJQOuRzi0v/OncYhHPes/h49PixY53j+i8wWfC03Nvw2idWOvsue/ZedTWsRa5T/EJQOuRzi0P/KncYhHPeu/iY9PixY53r+i8wWfC03NP9anWwtQBbs/d38gkp5X778ytsuHaADGvzUYObdf1+k/74auECWhw7+cjSACjzniv8CZ+wUhN9I/1uGEKzup6z+/GYr/04bavwmkNHp7xee/F2NMZVAA1z+82s+x2BLivwr2ytbJ9em/KwEH1sMS1r8yp/2LhTfev81i5RexJsy/BlIKPVwR5b95Wyu0/Qjnv5DjoT7YYcs/nBhKZ6zrwr8wRYS7Nebuv3OW6geh+Lu/SLrixebL3j+pcyymN9Xrv8rHIFfWehZAMBwUdlo0DECTUc17EOb2PxpVB1SWChdAzjbhb9pTDUDQhmdvECX5P9FlMKCC9+g/IIAzjELgE0DajDngMv8GQFhWDmDPjNs/y1guLh96EkAxPi8k7DIEQJCc4URlhRhA3eLKKLwkEECqpNAyTBD/P6xpjXcDiwVAFtl//cQm4z+Ibt3XKiYTQM7mCLUb3QdAoM1t8yVv7D8aLZv2Nk8UQEAJPV5nQwxAtSsfTCoE9z9TPjXLXIIWQBVanC5W9AtAYM3d7Adm9j++5mQz1FoWQBUThyaVBghAwH5muQsV7T89Q1qv82MUQJoWGOfNuBdAzrkClkmwDkDQjKq77t37Py+g0dtitsE/ZwAMTwVPEUBojepluNwBQGYbtuW+t9w/HNWIJs6MEkDTNuQUSlgEQKxktPP5TcQ/ixbLB8JjEUCwuWjXMQYCQAS/R09FkRdAowpiZjhhDkB7LmlczD/7P01iQmhhsAVAnrtTwDy84z/Z6jfQ2TgTQChOCXMnWwpAhrW3daoz8z/HYJvVPI4VQLT3ik5FcA5Angi7LOZd+z+NNVzDy5gXQBXdvVTFUA1AYNMgOeYe+T8+qHXGCwkXQKQTOKwa5AJA8gFVoEMW0T+FwzJyttIRQAEAAAD/////BwAAAP////8xAAAA/////1cBAAD/////YQkAAP////+nQQAA/////5HLAQD/////95AMAP/////B9lcAAAAAAAAAAAAAAAAAAgAAAP////8OAAAA/////2IAAAD/////rgIAAP/////CEgAA/////06DAAD/////IpcDAP/////uIRkA/////4LtrwAAAAAAAAAAAAAAAAAAAAAAAgAAAP//////////AQAAAAMAAAD//////////////////////////////////////////////////////////////////////////wEAAAAAAAAAAgAAAP///////////////wMAAAD//////////////////////////////////////////////////////////////////////////wEAAAAAAAAAAgAAAP///////////////wMAAAD//////////////////////////////////////////////////////////////////////////wEAAAAAAAAAAgAAAP///////////////wMAAAD//////////////////////////////////////////////////////////wIAAAD//////////wEAAAAAAAAA/////////////////////wMAAAD/////////////////////////////////////////////////////AwAAAP////////////////////8AAAAA/////////////////////wEAAAD///////////////8CAAAA////////////////////////////////AwAAAP////////////////////8AAAAA////////////////AgAAAAEAAAD/////////////////////////////////////////////////////AwAAAP////////////////////8AAAAA////////////////AgAAAAEAAAD/////////////////////////////////////////////////////AwAAAP////////////////////8AAAAA////////////////AgAAAAEAAAD/////////////////////////////////////////////////////AwAAAP////////////////////8AAAAA////////////////AgAAAAEAAAD/////////////////////////////////////////////////////AQAAAAIAAAD///////////////8AAAAA/////////////////////wMAAAD/////////////////////////////////////////////////////AQAAAAIAAAD///////////////8AAAAA/////////////////////wMAAAD/////////////////////////////////////////////////////AQAAAAIAAAD///////////////8AAAAA/////////////////////wMAAAD/////////////////////////////////////////////////////AQAAAAIAAAD///////////////8AAAAA/////////////////////wMAAAD///////////////////////////////8CAAAA////////////////AQAAAP////////////////////8AAAAA/////////////////////wMAAAD/////////////////////////////////////////////////////AwAAAP////////////////////8AAAAAAQAAAP//////////AgAAAP//////////////////////////////////////////////////////////AwAAAP///////////////wIAAAAAAAAAAQAAAP//////////////////////////////////////////////////////////////////////////AwAAAP///////////////wIAAAAAAAAAAQAAAP//////////////////////////////////////////////////////////////////////////AwAAAP///////////////wIAAAAAAAAAAQAAAP//////////////////////////////////////////////////////////////////////////AwAAAAEAAAD//////////wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAgAAAAAAAAACAAAAAQAAAAEAAAACAAAAAgAAAAAAAAAFAAAABQAAAAAAAAACAAAAAgAAAAMAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAIAAAABAAAAAgAAAAIAAAACAAAAAAAAAAUAAAAGAAAAAAAAAAIAAAACAAAAAwAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAIAAAAAAAAAAgAAAAEAAAADAAAAAgAAAAIAAAAAAAAABQAAAAcAAAAAAAAAAgAAAAIAAAADAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAgAAAAAAAAACAAAAAQAAAAQAAAACAAAAAgAAAAAAAAAFAAAACAAAAAAAAAACAAAAAgAAAAMAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAACAAAAAAAAAAIAAAABAAAAAAAAAAIAAAACAAAAAAAAAAUAAAAJAAAAAAAAAAIAAAACAAAAAwAAAAUAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAIAAAACAAAAAAAAAAMAAAAOAAAAAgAAAAAAAAACAAAAAwAAAAAAAAAAAAAAAgAAAAIAAAADAAAABgAAAAAAAAAAAAAAAAAAAAAAAAALAAAAAgAAAAIAAAAAAAAAAwAAAAoAAAACAAAAAAAAAAIAAAADAAAAAQAAAAAAAAACAAAAAgAAAAMAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAACAAAAAgAAAAAAAAADAAAACwAAAAIAAAAAAAAAAgAAAAMAAAACAAAAAAAAAAIAAAACAAAAAwAAAAgAAAAAAAAAAAAAAAAAAAAAAAAADQAAAAIAAAACAAAAAAAAAAMAAAAMAAAAAgAAAAAAAAACAAAAAwAAAAMAAAAAAAAAAgAAAAIAAAADAAAACQAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAgAAAAIAAAAAAAAAAwAAAA0AAAACAAAAAAAAAAIAAAADAAAABAAAAAAAAAACAAAAAgAAAAMAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAACAAAAAgAAAAAAAAADAAAABgAAAAIAAAAAAAAAAgAAAAMAAAAPAAAAAAAAAAIAAAACAAAAAwAAAAsAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAIAAAACAAAAAAAAAAMAAAAHAAAAAgAAAAAAAAACAAAAAwAAABAAAAAAAAAAAgAAAAIAAAADAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAgAAAAIAAAAAAAAAAwAAAAgAAAACAAAAAAAAAAIAAAADAAAAEQAAAAAAAAACAAAAAgAAAAMAAAANAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAACAAAAAgAAAAAAAAADAAAACQAAAAIAAAAAAAAAAgAAAAMAAAASAAAAAAAAAAIAAAACAAAAAwAAAA4AAAAAAAAAAAAAAAAAAAAAAAAACQAAAAIAAAACAAAAAAAAAAMAAAAFAAAAAgAAAAAAAAACAAAAAwAAABMAAAAAAAAAAgAAAAIAAAADAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAgAAAAAAAAACAAAAAQAAABMAAAACAAAAAgAAAAAAAAAFAAAACgAAAAAAAAACAAAAAgAAAAMAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABEAAAACAAAAAAAAAAIAAAABAAAADwAAAAIAAAACAAAAAAAAAAUAAAALAAAAAAAAAAIAAAACAAAAAwAAABEAAAAAAAAAAAAAAAAAAAAAAAAAEgAAAAIAAAAAAAAAAgAAAAEAAAAQAAAAAgAAAAIAAAAAAAAABQAAAAwAAAAAAAAAAgAAAAIAAAADAAAAEgAAAAAAAAAAAAAAAAAAAAAAAAATAAAAAgAAAAAAAAACAAAAAQAAABEAAAACAAAAAgAAAAAAAAAFAAAADQAAAAAAAAACAAAAAgAAAAMAAAATAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAACAAAAAAAAAAIAAAABAAAAEgAAAAIAAAACAAAAAAAAAAUAAAAOAAAAAAAAAAIAAAACAAAAAwAAAAIAAAABAAAAAAAAAAEAAAACAAAAAAAAAAAAAAACAAAAAQAAAAAAAAABAAAAAgAAAAEAAAAAAAAAAgAAAAAAAAAFAAAABAAAAAAAAAABAAAABQAAAAAAAAAAAAAABQAAAAQAAAAAAAAAAQAAAAUAAAAEAAAAAAAAAAUAAAAAAAAAAgAAAAEAAAAAAAAAAQAAAAIAAAAAAAAAAAAAAAIAAAABAAAAAAAAAAEAAAACAAAAAQAAAAAAAAACAAAAAgAAAAAAAAABAAAAAAAAAAAAAAAFAAAABAAAAAAAAAABAAAABQAAAAAAAAAAAAAABQAAAAQAAAAAAAAAAQAAAAUAAAAEAAAAAAAAAAUAAAAFAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAQAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAABAAAAAAAAAAABAAAAAAEAAAAAAAAAAAEAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAQAAAAAAAAAAAAEAAAAAAAAAAAAAOgehWlKfUEEz1zLi+JsiQa2og3wcMfVAWCbHorc0yEDi+Yn/Y6mbQJ11/mfsnG9At6bnG4UQQkBvMCQWKqUUQJVmwwswmOc/3hVgVBL3uj//qqOEOdGOPw/WDN4gnGE/H3ANkCUgND+AA8btKgAHPwTXBqJVSdo+XfRQAqsKrj4fc+zLYbSPQklEmCZHv2FCUP+uDso1NEKYtPhwphUHQptxnyFXYdpB7CddZAMmrkGAt1AxSTqBQUibBVdTsFNBSuX3MV+AJkFocv82SLf5QAqmgj7AY81A23VDSEnLoEDGEJVSeDFzQDYrqvBk70VA8U157pcRGUBWfEF+ZKbsP6phvycGBZRAJbod0OgwfkCp+L8jatBmQCjl3pGrPlFAfMWm114SOkButwtqS7UjQHQwbcjXyw1A8jnLuuyA9j9KwjL0VwHhPyotk0lcs8k/Q5PvEs9rsz+SfsOQEVqdPzUAKDojLoY/WJz/kcjCcD8YFu070FRZPyoLC2BdJEM/YOXQAuiMM0HIBz1bw3sdQdV46aaHRwZByatzjDPX8EDb3Jie8HXZQCJxj6ULP8NAUaG6uRAZrUCWdmou5/mVQLb9huRPm4BAhvoCHygZaUCuX/I3SPdSQC9/bC/1qTxAfKxsYQ6pJUCuslH+N14QQMS/cv7SvPg/Ol8maYKx4j8AAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////wAAAAD/////AAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAA/////wAAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAP////8AAAAABQAAAAAAAAAAAAAAAAAAAAAAAAD/////BQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////////////////////8AAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////AAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAABQAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////wAAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAEAAAABAAAAAQAAAAAAAAABAAAAAAAAAAUAAAABAAAAAQAAAAAAAAAAAAAAAQAAAAEAAAAAAAAAAQAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAEAAQAAAQEAAAAAAAEAAAABAAAAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAKriWFiWZfg/Y2nmTbY/8z8MHSPSqmnjv6hnn18HR3c/quJYWJZl+D/jq5TzDdzyPwwdI9KqaeO/u0kC1eFSBECq4lhYlmX4P69pJmt7c/E/NnkJi6jSBsDESFlzKkr6P33ArMz7sfY/o2q2uqM08D+oZ59fB0d3PzEqCi3qrvK/kmm4ANp49D+4wS2wzhzvP9WJvyAnx+E/upcY75RVx7+95t+9y0T1P9L18g1caO0/k6CkRyVzAEBf99+e/GjxP6QMsuuLQ/U/PlP4Qr8q7j8Mb/GO2GMCwLl2K/DQIghAePiwytEp9D9UHrsuI/nqPzjMedJ+yuy/k6xgf58n/L+XoQtn22DzP2lzCnsYk+s/JhUSDI4P8z+8lFcBhgTcPxOqKRxEX/M/89MEdoPQ6j8OKQaXDob7vzWwNvblgAPAzGkxMcl88j9Nm4okPkbpP0vI89vxSgRAdac2Z6W2/T+6UFOMC3zyP/+2XEF3hug/QqhELwGKCMAwdlQerEoEQFcr/B+VnvE/hB1hfFzT5j8wdsE/Da64P0hIvnF/sOC/KH/hrXUg8T9bI5OQHaLlP+mYzla7td6/CtKG6iOm8b8FW3TV8oXwP8ORhtNuJ+c/q8JrTMz/AcC8PaUl+PUFwAXv9rkMT/A/m+sAswr15D+7hk/O3yvkP6c/yVsOHKI/qqAX9idJ8D/8hNz1KNPiP7xSXh3Ggvg/epbkiKr57T/23/LB1GLvP4GTTeNZi+M/W4TqlTheBcDupZgIdYUIQGwlcW3YZO8/tQvDXQ3H4j8Bt+sf9DkAQMdFie+nNvg/Z5Uh1wDX7j9h5X2d4KjhPxMJ1ZVT4Pa/evqB8xB//7+W183U9QLsPwzNxsC7AOA/af/LqCnK/r/lPceQ0FQDwHoY0nYIW+w/bHNSHrTg4D/DFcMAdabuv2sz5Ojhnve/FvLf01HN6z/tEDL2Hz/gP0bBv0KUhPA/pd7sEnMc4D8EGon4Lo7sP5NVbYtSON8/DAMC50odBkB+Z2J8MGYCQIhlM1gubOo/FssiPwWy4D8OIlGqRnkCQAd1vopp6f4/QS1keLLK6T9rfoBuT7LZP3KQbH5ugwjAjqVPXTmbBUBL/JxcqR3qP3oSeovuktg/Y6pRhJmqy7+0kwuU0Yjmv2wvsfFmQ+g/R98lJFqQ2T/IGb5gjLkCwK3mNff3kQbAqDznPFM86T+iiP0FfsvYP7fzKG6Mls0/h7+at2btzL8tsUTgk+LmP/YEIrTDINU/WmwKoVjA5L9aC02r6FHxvzzFCT/Qg+Y/nx0V97en0j8+1toJOm77P1kZ7h8KjfQ/GBbbqxgk5j9RGXM79G/SP+beHsWmweQ/9REi4eX0xD/V9s+kmMHkP+pb9yNs09A/c5ERjVDTAECqEr3OBCH7P14ILfMECOU/piRx4P8P0j+JYU//bfL0Pw62fw28B+w/l5YW2Ga45D9+CyKRbenOP5cH6fHy1/S/o/egk03++r91nTYRL/bjP3fHN6OJVdA/7xXQh1XLBcAB3g6tBdUIQKW2KnGYjeQ/SqIpagclyz8F9P3YgNL6v9H6NBsZ8QDAW2k5L5Qs4z/0axa1l6zLP1GE65Mu4wNAwfX+BYmWAEBBgJP90M3hP6/03qhPLdA/zqo5bJz2778/ESlPCTn1v7JkhGyvzuE/DM7sj5twwz/6xbXLavYGQH29RFRGkgNA7bOXVSJ54T9fEhTHO/TDP+8t+HMOiwDAxa0SbGTtA8Atii7y0mLgP4cecHFB3sM/uPUpyv+K7j8nktD1/WvhP2cWmi772d8/Fj7uU9kEvD8oKOESLzKmvwSdCqrHdNu/XCluGsvI3T929OW5md+uP9dP6rXcZNq/gXM+ggzL6b+eKjsPgJncP6i1e9aVu7E/2CnPNJyD1D/DnyGgSe+xvy8k7g9bp9s/nYmLvHn1sz9cFOwApH8IwGa6Mjy9cgZAJr95SiSW2z8rCkhOFvqdP3SIKmO/UwPAEy0zkN7bBsCds8Hg/13YP1zv413hVGi/FVtqixSn6L9XAPQGul3yv7SGu2BoCNk/n94bv7Maj79p13T6X9z3P45MPCW3WvI/rU/8/LRj1T9cgR6SXd+ZPymL2DstbPI/8s/pAkIz6z/fmoB+8efYPz2XyfWgYaa/6wys72AW/j8LZImhgrf3P729Zla/n9U/ySB8B3PBqL8O2nhevvbxv17+5A+n6fe/YrGIqEGB1T+wCEGbkhaxv989QHVE5wFAzd12PTu3/T9AHUPZY2DUP3SQDST0zq2/JCxAlIoj5T+Mhe1IJkrQP/cRpl8QhtU/amc4seFts79khiUSVaz3vxYfWtjPwf2/CHscxQqD0j/ctUBQ9my3v0POnFiyXv2/pjjn2Ju/AcDk45DwBhPRP/GjwlCrv7m/aT2ciwolBsAQOzHr/wUJQCzpq5UYvtI/gDCf3SlCwb+4i7S+mukEQBDA1f8mowFA2utnRN3KyT9T+9EYAVG6v9/IVZ0enrE/7NbRtdGfzr/8y8GpRz7LP3U0vTSk18e/JzHEcwiBB0AGm8Q7AJkEQNLciyt4Esk/gLou5zoQxr+RrOfM91oBwEzd36KybgTAgLou5zoQxj/S3IsreBLJv1gCch0OHO8/FD+RxSLN4j91NL00pNfHP/zLwalHPsu/nL7/By4Pyr8tSP5h7CPiv1P70RgBUbo/2utnRN3Kyb/KfllfCpUIwLkP5zj+NwdAgDCf3SlCwT8s6auVGL7Sv2aFPlaC4eC/XrS5UVH77b/xo8JQq7+5P+TjkPAGE9G/Q30/RYbn1z8FF/ISafuLv9y1QFD2bLc/CHscxQqD0r/fi+tPROX0P6vRc+19ie0/amc4seFtsz/3EaZfEIbVv77TYpahl/o/DDsu0CaC9D90kA0k9M6tP0AdQ9ljYNS/CCI0rxjZA8BgfCaLthgHwLAIQZuSFrE/YrGIqEGB1b8kvQ982+rsv4J8EWu7jPS/ySB8B3PBqD+9vWZWv5/VvwrAByWcJgBAxFujmE9a+j89l8n1oGGmP9+agH7x59i/N03cuJUt9L8X9v4GdIz6v1yBHpJd35m/rU/8/LRj1b8mz69sydf/vyu5idMqVQLAn94bv7Majz8AhrtgaAjZv+aCE66WZ/q/lA1Mgz/p/79c7+Nd4VRoP52zweD/Xdi/TJZpMTb4AkDLWZShPOb/PysKSE4W+p2/Jr95SiSW27/PkmbE7zjnP6UAiCDmMNI/nYmLvHn1s78vJO4PW6fbv5MWA2vqSrQ/V5WLwPB51b+otXvWlbuxv54qOw+Amdy/1keqzYeRBsApIEMHgZIIQHb05bmZ366/XCluGsvI3b8W44a9X9UFQEeQtDM4rwJAFj7uU9kEvL9nFpou+9nfv3Co+JcyyQhAcdkCX2KzBUCHHnBxQd7Dvy2KLvLSYuC/o6+5YTt/AcCHCNDW+8YEwF8SFMc79MO/7bOXVSJ54b9E/pfA2S3xPzD9xaBb0uQ/DM7sj5tww7+yZIRsr87hv7c4c0SEXNG/Tr79/9M+5r+v9N6oTy3Qv5uAk/3QzeG/XcI1OVQkAUAQSV9Z7Qr9P/RrFrWXrMu/W2k5L5Qs479Zo2IBM/vkv6FuipzkFvG/SqIpagcly7+ltipxmI3kv0pmis91cfc/gWQecsRh8D93xzejiVXQv3WdNhEv9uO/D7mgYy612j+PyVPNaT2jv34LIpFt6c6/l5YW2Ga45L+LUp+2A2z9P39i5xSpRfc/piRx4P8P0r9eCC3zBAjlv5n4OKmIUf2/jj/kUAwgAsDqW/cjbNPQv9X2z6SYweS/aTdljlWd8L94R8vZ8SL3v1EZczv0b9K/GBbbqxgk5r9XdfyikfEDwPILMvas0gfAnx0V97en0r88xQk/0IPmvxGErZ681fa/9kCaiOy2/b/2BCK0wyDVvy2xROCT4ua/+5EBLOXxA0B7p53+BnkAQKKI/QV+y9i/qDznPFM86b/snWGNkkgHwC+ByugkUwdAR98lJFqQ2b9sL7HxZkPovyJNGM67oek/HzNy6BqA1D96EnqL7pLYv0v8nFypHeq/axL/u1FnB0AkSEHvxn8DQGt+gG5Pstm/QS1keLLK6b/Sk/O6mtGzPxU8pLcPNty/FssiPwWy4L+IZTNYLmzqvw4szKfSouq/G+XJHY1a87+TVW2LUjjfvwQaifgujuy/3VARaoMl2L9NFodfK+/qv+0QMvYfP+C/FvLf01HN67+ETOQysd8AwH71iI/eGgXAbHNSHrTg4L96GNJ2CFvsv6BnExReeAFA5CakvxSl+j8MzcbAuwDgv5bXzdT1Auy/uVq8/8x58z+uvPMNqzTnP2HlfZ3gqOG/Z5Uh1wDX7r8PUbMSo2P7P9VfBrXlxPI/tQvDXQ3H4r9sJXFt2GTvvyDssGgO0PG/WxT/uE4N+r+Bk03jWYvjv/bf8sHUYu+/rUXN8hUe3j9m5HB1yZCzv/yE3PUo0+K/qqAX9idJ8L9mByqLMMH5v4kHC7KQowHAm+sAswr15L8F7/a5DE/wv2JLsGADFwTAKQjVGovZCMDDkYbTbifnvwVbdNXyhfC/malhH7yI7D+oevd0GWDZP1sjk5AdouW/KH/hrXUg8b8KWmrpQ0sFQAzEAF/pTgBAhB1hfFzT5r9XK/wflZ7xv18hRuqKXAjA/5rUd9v1BED/tlxBd4bov7pQU4wLfPK/4pnwn0T/sj/c277XPF3jv02biiQ+Rum/zGkxMcl88r8Yk0HhJVzjv62yUUFRjfS/89MEdoPQ6r8TqikcRF/zvxQxghHovfY/cfM1eFWE5j9pcwp7GJPrv5ehC2fbYPO/KUV2nGg0/795OhmUaqEFwFQeuy4j+eq/ePiwytEp9L8DuqWfW+8BQLytJylXHPY/PlP4Qr8q7r+kDLLri0P1vxT4ShWL+Oo/DMsWg0zlv7/S9fINXGjtv73m373LRPW/+xg/Gaxd8b94MdQEfW0AwLjBLbDOHO+/kmm4ANp49L+cShSMMbAEwKyjUgWirAdAo2q2uqM08L99wKzM+7H2v3RdlNBXFgnA8S9+ewyV/z+vaSZre3Pxv6riWFiWZfi/2J7VSZZ60j+LES81zPn3v+OrlPMN3PK/quJYWJZl+L/OZbufkEcEQLCNB/1lPOO/Y2nmTbY/87+q4lhYlmX4v7CNB/1lPOO/zmW7n5BHBEBwKD1Aa57LP/XsSsw7RbU/PMDPJGsfoD/TqningGKIPzFtCLYmb3I/qYfrJr7eWz9pQmleXRFFP0rWlJkA2i8/pCvcttgTGD9Dt8IWbjMCPyCG4GRlhOs+1JI2GhDN1D7ns8cGvXK/Pi8m8UTJxac+hNTfA2z4kT7GI8kjLyt7Pv//////HwAI//////8zEAj/////fzIgCP////9vMjAI/////2MyQAj///8/YjJQCP///zdiMmAI////M2IycAj//78zYjKACP//qzNiMpAI/3+rM2IyoAj/D6szYjKwCP8DqzNiMsAIvwOrM2Iy0AifA6szYjLgCJkDqzNiMvAI//////8/Dwj//////ysfCP////9/KS8I/////z8pPwj/////OSlPCP///z84KV8I////Dzgpbwj///8OOCl/CP//Hw44KY8I//8PDjgpnwj/fw0OOCmvCP8PDQ44Kb8I/w0NDjgpzwj/DA0OOCnfCMcMDQ44Ke8IxAwNDjgp/wgHAAAABwAAAAEAAAACAAAABAAAAAMAAAAAAAAAAAAAAAcAAAADAAAAAQAAAAIAAAAFAAAABAAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAgAAAAEAAAADAAAADgAAAAYAAAALAAAAAgAAAAcAAAABAAAAGAAAAAUAAAAKAAAAAQAAAAYAAAAAAAAAJgAAAAcAAAAMAAAAAwAAAAgAAAACAAAAMQAAAAkAAAAOAAAAAAAAAAUAAAAEAAAAOgAAAAgAAAANAAAABAAAAAkAAAADAAAAPwAAAAsAAAAGAAAADwAAAAoAAAAQAAAASAAAAAwAAAAHAAAAEAAAAAsAAAARAAAAUwAAAAoAAAAFAAAAEwAAAA4AAAAPAAAAYQAAAA0AAAAIAAAAEQAAAAwAAAASAAAAawAAAA4AAAAJAAAAEgAAAA0AAAATAAAAdQAAAA8AAAATAAAAEQAAABIAAAAQAAAABgAAAAIAAAADAAAABQAAAAQAAAAAAAAAAAAAAAAAAAAGAAAAAgAAAAMAAAABAAAABQAAAAQAAAAAAAAAAAAAAAcAAAAFAAAAAwAAAAQAAAABAAAAAAAAAAIAAAAAAAAAAgAAAAMAAAABAAAABQAAAAQAAAAGAAAAAAAAAAAAAAAYLURU+yH5PxgtRFT7Ifm/GC1EVPshCUAYLURU+yEJwGFsZ29zLmMAaDNOZWlnaGJvclJvdGF0aW9ucwBjZWxsc1RvTXVsdGlQb2x5LmMAY2VsbFRvRWRnZUFyY3MAAAEDAgQABAMFAQJjYW5jZWxBcmNQYWlycwBjcmVhdGVTb3J0YWJsZUxvb3AAZGlyZWN0ZWRFZGdlLmMAZGlyZWN0ZWRFZGdlVG9Cb3VuZGFyeQBhZGphY2VudEZhY2VEaXJbdG1wRmlqay5mYWNlXVtmaWprLmZhY2VdID09IEtJAGZhY2VpamsuYwBfZmFjZUlqa1BlbnRUb0NlbGxCb3VuZGFyeQBhZGphY2VudEZhY2VEaXJbY2VudGVySUpLLmZhY2VdW2ZhY2UyXSA9PSBLSQBfZmFjZUlqa1RvQ2VsbEJvdW5kYXJ5AGgzSW5kZXguYwBjb21wYWN0Q2VsbHMAdmVjM1RvQ2VsbABjZWxsVG9DaGlsZFBvcwB2YWxpZGF0ZUNoaWxkUG9zAHJldkRpciAhPSBJTlZBTElEX0RJR0lUAGxvY2FsaWouYwBjZWxsVG9Mb2NhbElqawBiYXNlQ2VsbCAhPSBvcmlnaW5CYXNlQ2VsbAAhKG9yaWdpbk9uUGVudCAmJiBpbmRleE9uUGVudCkAYmFzZUNlbGwgPT0gb3JpZ2luQmFzZUNlbGwALi4vaW5jbHVkZS9jb29yZGlqay5oAF91cEFwN0NoZWNrZWQAX3VwQXA3ckNoZWNrZWQAYmFzZUNlbGwgIT0gSU5WQUxJRF9CQVNFX0NFTEwAbG9jYWxJamtUb0NlbGwAIV9pc0Jhc2VDZWxsUGVudGFnb24oYmFzZUNlbGwpAGJhc2VDZWxsUm90YXRpb25zID49IDAAZ3JpZFBhdGhDZWxsc0ludGVycG9sYXRlAHBvbHlmaWxsLmMAaXRlclN0ZXBQb2x5Z29uQ29tcGFjdAAwAHZlcnRleC5jAHZlcnRleFJvdGF0aW9ucwBjZWxsVG9WZXJ0ZXg=`;var xe=28400;function Se(e){return e}function Ce(e){return e.replace(/\b__Z[\w\d_]+/g,function(e){var t=Se(e);return e===t?e:t+` [`+e+`]`})}function we(){var e=Error();if(!e.stack){try{throw Error(0)}catch(t){e=t}if(!e.stack)return`(no stack trace available)`}return e.stack.toString()}function Te(){var e=we();return t.extraStackTrace&&(e+=`
`+t.extraStackTrace()),Ce(e)}function Ee(e,t,n,r){Ke(`Assertion failed: `+C(e)+`, at: `+[t?C(t):`unknown filename`,n,r?C(r):`unknown function`])}function De(){return k.length}function Oe(e,t,n){A.set(A.subarray(t,t+n),e)}function ke(e){return t.___errno_location&&(M[t.___errno_location()>>2]=e),e}function Ae(e){Ke(`OOM`)}function je(e){try{var t=new ArrayBuffer(e);return t.byteLength==e?(new Int8Array(t).set(k),Ie(t),F(t),1):void 0}catch{}}function Me(e){var t=De(),n=16777216,r=2147483648-n;if(e>r)return!1;for(var i=Math.max(t,16777216);i<e;)i=i<=536870912?D(2*i,n):Math.min(D((3*i+2147483648)/4,n),r);return!!je(i)}var Ne=typeof atob==`function`?atob:function(e){var t=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`,n=``,r,i,a,o,s,c,l,u=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,``);do o=t.indexOf(e.charAt(u++)),s=t.indexOf(e.charAt(u++)),c=t.indexOf(e.charAt(u++)),l=t.indexOf(e.charAt(u++)),r=o<<2|s>>4,i=(s&15)<<4|c>>2,a=(c&3)<<6|l,n+=String.fromCharCode(r),c!==64&&(n+=String.fromCharCode(i)),l!==64&&(n+=String.fromCharCode(a));while(u<e.length);return n};function Pe(e){try{for(var t=Ne(e),n=new Uint8Array(t.length),r=0;r<t.length;++r)n[r]=t.charCodeAt(r);return n}catch{throw Error(`Converting base64 string to bytes failed.`)}}function Fe(e){if(ve(e))return Pe(e.slice(_e.length))}var U=(function(e,t,n){"almost asm";var r=new e.Int8Array(n),i=new e.Int32Array(n);new e.Uint8Array(n),new e.Float32Array(n);var a=new e.Float64Array(n),o=t.o|0,s=t.p|0,c=e.Math.floor,l=e.Math.abs,u=e.Math.sqrt,d=e.Math.cos,f=e.Math.sin,p=e.Math.tan,m=e.Math.acos,h=e.Math.asin,g=e.Math.atan,_=e.Math.atan2,v=e.Math.ceil,y=e.Math.imul,b=e.Math.min,x=e.Math.max,S=e.Math.clz32,C=t.a,w=t.b,T=t.c,E=t.d,D=t.e,O=t.f,k=t.g,A=t.h,j=t.i,M=28416;function N(e){return r=new Int8Array(e),new Uint8Array(e),i=new Int32Array(e),new Float32Array(e),a=new Float64Array(e),n=e,!0}function P(e){e|=0;var t=0;return t=M,M=M+e|0,M=M+15&-16,t|0}function F(){return M|0}function I(e){e|=0,M=e}function L(e,t){e|=0,t|=0,M=e}function ee(e,t){e|=0,t|=0;var n=0,r=0,a=0;return(e|0)<0?(t=2,t|0):(e|0)>13780509?(t=Xt(15,t)|0,t|0):(n=((e|0)<0)<<31>>31,a=lr(e|0,n|0,3,0)|0,r=T()|0,n=G(e|0,n|0,1,0)|0,n=lr(a|0,r|0,n|0,T()|0)|0,n=G(n|0,T()|0,1,0)|0,e=T()|0,i[t>>2]=n,i[t+4>>2]=e,t=0,t|0)}function R(e,t,n,r){return e|=0,t|=0,n|=0,r|=0,te(e,t,n,r,0)|0}function te(e,t,n,r,a){e|=0,t|=0,n|=0,r|=0,a|=0;var o=0,s=0,c=0,l=0,u=0;if(l=M,M=M+16|0,s=l,!(ne(e,t,n,r,a)|0))return r=0,M=l,r|0;do if((n|0)>=0){if((n|0)>13780509){if(o=Xt(15,s)|0,o|0)break;c=s,s=i[c>>2]|0,c=i[c+4>>2]|0}else o=((n|0)<0)<<31>>31,u=lr(n|0,o|0,3,0)|0,c=T()|0,o=G(n|0,o|0,1,0)|0,o=lr(u|0,c|0,o|0,T()|0)|0,o=G(o|0,T()|0,1,0)|0,c=T()|0,i[s>>2]=o,i[s+4>>2]=c,s=o;if(yr(r|0,0,s<<3)|0,a|0){yr(a|0,0,s<<2)|0,o=re(e,t,n,r,a,s,c,0)|0;break}o=er(s,4)|0,o?(u=re(e,t,n,r,o,s,c,0)|0,W(o),o=u):o=13}else o=2;while(0);return u=o,M=l,u|0}function ne(e,t,n,r,a){e|=0,t|=0,n|=0,r|=0,a|=0;var o=0,s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0;if(g=M,M=M+16|0,m=g,h=g+8|0,p=m,i[p>>2]=e,i[p+4>>2]=t,(n|0)<0)return h=2,M=g,h|0;if(o=r,i[o>>2]=e,i[o+4>>2]=t,o=!!(a|0),o&&(i[a>>2]=0),ft(e,t)|0)return h=9,M=g,h|0;i[h>>2]=0;a:do if((n|0)>=1){if(o)for(d=1,u=0,f=0,p=1,o=e;;){if(!(u|f)){if(o=z(o,t,4,h,m)|0,o|0)break a;if(t=m,o=i[t>>2]|0,t=i[t+4>>2]|0,ft(o,t)|0){o=9;break a}}if(o=z(o,t,i[26864+(f<<2)>>2]|0,h,m)|0,o|0)break a;if(t=m,o=i[t>>2]|0,t=i[t+4>>2]|0,e=r+(d<<3)|0,i[e>>2]=o,i[e+4>>2]=t,i[a+(d<<2)>>2]=p,e=u+1|0,s=(e|0)==(p|0),c=f+1|0,l=(c|0)==6,ft(o,t)|0){o=9;break a}if(p=p+(l&s&1)|0,(p|0)>(n|0)){o=0;break}d=d+1|0,u=s?0:e,f=s?l?0:c:f}else for(d=1,u=0,f=0,p=1,o=e;;){if(!(u|f)){if(o=z(o,t,4,h,m)|0,o|0)break a;if(t=m,o=i[t>>2]|0,t=i[t+4>>2]|0,ft(o,t)|0){o=9;break a}}if(o=z(o,t,i[26864+(f<<2)>>2]|0,h,m)|0,o|0)break a;if(t=m,o=i[t>>2]|0,t=i[t+4>>2]|0,e=r+(d<<3)|0,i[e>>2]=o,i[e+4>>2]=t,e=u+1|0,s=(e|0)==(p|0),c=f+1|0,l=(c|0)==6,ft(o,t)|0){o=9;break a}if(p=p+(l&s&1)|0,(p|0)>(n|0)){o=0;break}d=d+1|0,u=s?0:e,f=s?l?0:c:f}}else o=0;while(0);return h=o,M=g,h|0}function re(e,t,n,r,a,o,s,c){e|=0,t|=0,n|=0,r|=0,a|=0,o|=0,s|=0,c|=0;var l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;if(g=M,M=M+16|0,m=g+8|0,h=g,l=dr(e|0,t|0,o|0,s|0)|0,d=T()|0,f=r+(l<<3)|0,_=f,v=i[_>>2]|0,_=i[_+4>>2]|0,u=(v|0)==(e|0)&(_|0)==(t|0),!(!(v|0)&!(_|0)|u))do l=G(l|0,d|0,1,0)|0,l=ur(l|0,T()|0,o|0,s|0)|0,d=T()|0,f=r+(l<<3)|0,v=f,_=i[v>>2]|0,v=i[v+4>>2]|0,u=(_|0)==(e|0)&(v|0)==(t|0);while(!(!(_|0)&!(v|0)|u));if(l=a+(l<<2)|0,u&&(i[l>>2]|0)<=(c|0)||(v=f,i[v>>2]=e,i[v+4>>2]=t,i[l>>2]=c,(c|0)>=(n|0)))return v=0,M=g,v|0;switch(u=c+1|0,i[m>>2]=0,l=z(e,t,2,m,h)|0,l|0){case 9:p=9;break;case 0:l=h,l=re(i[l>>2]|0,i[l+4>>2]|0,n,r,a,o,s,u)|0,l||(p=9)}a:do if((p|0)==9){switch(i[m>>2]=0,l=z(e,t,3,m,h)|0,l|0){case 9:break;case 0:if(l=h,l=re(i[l>>2]|0,i[l+4>>2]|0,n,r,a,o,s,u)|0,l|0)break a;break;default:break a}switch(i[m>>2]=0,l=z(e,t,1,m,h)|0,l|0){case 9:break;case 0:if(l=h,l=re(i[l>>2]|0,i[l+4>>2]|0,n,r,a,o,s,u)|0,l|0)break a;break;default:break a}switch(i[m>>2]=0,l=z(e,t,5,m,h)|0,l|0){case 9:break;case 0:if(l=h,l=re(i[l>>2]|0,i[l+4>>2]|0,n,r,a,o,s,u)|0,l|0)break a;break;default:break a}switch(i[m>>2]=0,l=z(e,t,4,m,h)|0,l|0){case 9:break;case 0:if(l=h,l=re(i[l>>2]|0,i[l+4>>2]|0,n,r,a,o,s,u)|0,l|0)break a;break;default:break a}switch(i[m>>2]=0,l=z(e,t,6,m,h)|0,l|0){case 9:break;case 0:if(l=h,l=re(i[l>>2]|0,i[l+4>>2]|0,n,r,a,o,s,u)|0,l|0)break a;break;default:break a}return v=0,M=g,v|0}while(0);return v=l,M=g,v|0}function z(e,t,n,r,a){e|=0,t|=0,n|=0,r|=0,a|=0;var o=0,s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0;if(n>>>0>6)return a=1,a|0;s=(i[r>>2]|0)%6|0,i[r>>2]=s;a:do if((s|0)>0)for(o=0;;){switch(n|0){case 1:n=5;break;case 5:n=4;break;case 4:n=6;break;case 6:n=2;break;case 2:n=3;break;case 3:n=1}if(o=o+1|0,(o|0)==(s|0))break a}while(0);if(f=K(e|0,t|0,45)|0,T()|0,d=f&127,d>>>0>121)return a=5,a|0;l=bt(e,t)|0,o=K(e|0,t|0,52)|0,T()|0,o&=15;b:do if(!o)u=15;else{for(;;){if(s=(15-o|0)*3|0,c=K(e|0,t|0,s|0)|0,T()|0,c&=7,(c|0)==7){t=5;break}if(h=!(Et(o)|0),o=o+-1|0,p=q(7,0,s|0)|0,t&=~(T()|0),m=q(i[(h?432:16)+(c*28|0)+(n<<2)>>2]|0,0,s|0)|0,s=T()|0,n=i[(h?640:224)+(c*28|0)+(n<<2)>>2]|0,e=m|e&~p,t=s|t,!n){n=0;break b}if(!o){u=15;break b}}return t|0}while(0);(u|0)==15&&(h=i[848+(d*28|0)+(n<<2)>>2]|0,m=q(h|0,0,45)|0,e=m|e,t=T()|0|t&-1040385,n=i[4272+(d*28|0)+(n<<2)>>2]|0,(h&127)==127&&(h=q(i[848+(d*28|0)+20>>2]|0,0,45)|0,t=T()|0|t&-1040385,n=i[4272+(d*28|0)+20>>2]|0,e=St(h|e,t)|0,t=T()|0,i[r>>2]=(i[r>>2]|0)+1)),c=K(e|0,t|0,45)|0,T()|0,c&=127;c:do if(pe(c)|0){d:do if((bt(e,t)|0)==1){if((d|0)!=(c|0)){if(ye(c,i[7696+(d*28|0)>>2]|0)|0){e=wt(e,t)|0,s=1,t=T()|0;break}E(27634,26928,533,26936)}switch(l|0){case 3:e=St(e,t)|0,t=T()|0,i[r>>2]=(i[r>>2]|0)+1,s=0;break d;case 5:e=wt(e,t)|0,t=T()|0,i[r>>2]=(i[r>>2]|0)+5,s=0;break d;case 0:return h=9,h|0;default:return h=1,h|0}}else s=0;while(0);if((n|0)>0){o=0;do e=xt(e,t)|0,t=T()|0,o=o+1|0;while((o|0)!=(n|0))}if((d|0)!=(c|0)){if(!(me(c)|0)){if(!!(s|0)|(bt(e,t)|0)!=5)break;i[r>>2]=(i[r>>2]|0)+1;break}switch(f&127){case 8:case 118:break c}(bt(e,t)|0)!=3&&(i[r>>2]=(i[r>>2]|0)+1)}}else if((n|0)>0){o=0;do e=St(e,t)|0,t=T()|0,o=o+1|0;while((o|0)!=(n|0))}while(0);return i[r>>2]=((i[r>>2]|0)+n|0)%6|0,h=a,i[h>>2]=e,i[h+4>>2]=t,h=0,h|0}function ie(e,t,n,r){return e|=0,t|=0,n|=0,r|=0,ae(e,t,n,r)|0?(yr(r|0,0,n*48|0)|0,r=oe(e,t,n,r)|0,r|0):(r=0,r|0)}function ae(e,t,n,r){e|=0,t|=0,n|=0,r|=0;var a=0,o=0,s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0;if(h=M,M=M+16|0,p=h,m=h+8|0,f=p,i[f>>2]=e,i[f+4>>2]=t,(n|0)<0)return m=2,M=h,m|0;if(!n)return m=r,i[m>>2]=e,i[m+4>>2]=t,m=0,M=h,m|0;i[m>>2]=0;a:do if(ft(e,t)|0)e=9;else{a=0,f=e;do{if(e=z(f,t,4,m,p)|0,e|0)break a;if(t=p,f=i[t>>2]|0,t=i[t+4>>2]|0,a=a+1|0,ft(f,t)|0){e=9;break a}}while((a|0)<(n|0));d=r,i[d>>2]=f,i[d+4>>2]=t,d=n+-1|0,u=0,e=1;do{if(a=26864+(u<<2)|0,(u|0)==5)for(s=i[a>>2]|0,o=0,a=e;;){if(e=p,e=z(i[e>>2]|0,i[e+4>>2]|0,s,m,p)|0,e|0)break a;if((o|0)!=(d|0)){if(l=p,c=i[l>>2]|0,l=i[l+4>>2]|0,e=r+(a<<3)|0,i[e>>2]=c,i[e+4>>2]=l,!(ft(c,l)|0))e=a+1|0;else{e=9;break a}}else e=a;if(o=o+1|0,(o|0)>=(n|0))break;a=e}else for(s=p,l=i[a>>2]|0,c=0,a=e,o=i[s>>2]|0,s=i[s+4>>2]|0;;){if(e=z(o,s,l,m,p)|0,e|0)break a;if(s=p,o=i[s>>2]|0,s=i[s+4>>2]|0,e=r+(a<<3)|0,i[e>>2]=o,i[e+4>>2]=s,e=a+1|0,ft(o,s)|0){e=9;break a}if(c=c+1|0,(c|0)>=(n|0))break;a=e}u=u+1|0}while(u>>>0<6);e=p,e=(f|0)==(i[e>>2]|0)&&(t|0)==(i[e+4>>2]|0)?0:9}while(0);return m=e,M=h,m|0}function oe(e,t,n,r){e|=0,t|=0,n|=0,r|=0;var a=0,o=0,s=0,c=0,l=0,u=0,d=0,f=0,p=0;if(f=M,M=M+16|0,s=f,!n)return i[r>>2]=e,i[r+4>>2]=t,r=0,M=f,r|0;do if((n|0)>=0){if((n|0)>13780509){if(a=Xt(15,s)|0,a|0)break;o=s,a=i[o>>2]|0,o=i[o+4>>2]|0}else a=((n|0)<0)<<31>>31,d=lr(n|0,a|0,3,0)|0,o=T()|0,a=G(n|0,a|0,1,0)|0,a=lr(d|0,o|0,a|0,T()|0)|0,a=G(a|0,T()|0,1,0)|0,o=T()|0,d=s,i[d>>2]=a,i[d+4>>2]=o;if(u=er(a,8)|0,!u)a=13;else{if(d=er(a,4)|0,!d){W(u),a=13;break}if(a=re(e,t,n,u,d,a,o,0)|0,a|0){W(u),W(d);break}if(t=i[s>>2]|0,s=i[s+4>>2]|0,(s|0)>0|!(s|0)&t>>>0>0){a=0,c=0,l=0;do e=u+(c<<3)|0,o=i[e>>2]|0,e=i[e+4>>2]|0,!(!(o|0)&!(e|0))&&(i[d+(c<<2)>>2]|0)==(n|0)&&(p=r+(a<<3)|0,i[p>>2]=o,i[p+4>>2]=e,a=a+1|0),c=G(c|0,l|0,1,0)|0,l=T()|0;while((l|0)<(s|0)|(l|0)==(s|0)&c>>>0<t>>>0)}W(u),W(d),a=0}}else a=2;while(0);return p=a,M=f,p|0}function se(e,t,n,r){e|=0,t|=0,n|=0,r|=0;var a=0,o=0,s=0,c=0,l=0,u=0;for(c=M,M=M+16|0,o=c,s=c+8|0,a=!(ft(e,t)|0),a=a?1:2;;){if(i[s>>2]=0,u=!(z(e,t,a,s,o)|0),l=o,u&((i[l>>2]|0)==(n|0)?(i[l+4>>2]|0)==(r|0):0)){e=4;break}if(a=a+1|0,a>>>0>=7){a=7,e=4;break}}return(e|0)==4?(M=c,a|0):0}function ce(e,t,n,r){e|=0,t|=0,n|=0,r|=0;var a=0,o=0,s=0,c=0,l=0,u=0;if(c=M,M=M+48|0,a=c+16|0,o=c+8|0,s=c,n=bn(n)|0,n|0)return s=n,M=c,s|0;if(u=e,l=i[u+4>>2]|0,n=o,i[n>>2]=i[u>>2],i[n+4>>2]=l,yn(o,a),n=Me(a,t,s)|0,!n){if(t=i[o>>2]|0,o=i[e+8>>2]|0,(o|0)>0){a=i[e+12>>2]|0,n=0;do t=(i[a+(n<<3)>>2]|0)+t|0,n=n+1|0;while((n|0)<(o|0))}n=s,a=i[n>>2]|0,n=i[n+4>>2]|0,o=((t|0)<0)<<31>>31,(n|0)<(o|0)|(n|0)==(o|0)&a>>>0<t>>>0?(n=s,i[n>>2]=t,i[n+4>>2]=o,n=o):t=a,l=G(t|0,n|0,12,0)|0,u=T()|0,n=s,i[n>>2]=l,i[n+4>>2]=u,n=r,i[n>>2]=l,i[n+4>>2]=u,n=0}return u=n,M=c,u|0}function B(e,t,n,r,o,s,c){e|=0,t|=0,n|=0,r|=0,o|=0,s|=0,c|=0;var l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0,S=0,C=0,w=0,E=0,D=0,O=0,k=0,A=0,j=0,N=0,P=0,F=0,I=0,L=0,ee=0,R=0;if(F=M,M=M+64|0,A=F+48|0,j=F+32|0,N=F+24|0,C=F+8|0,w=F,u=i[e>>2]|0,(u|0)<=0)return P=0,M=F,P|0;for(E=e+4|0,D=A+8|0,O=j+8|0,k=C+8|0,l=0,x=0;;){d=i[E>>2]|0,b=d+(x<<4)|0,i[A>>2]=i[b>>2],i[A+4>>2]=i[b+4>>2],i[A+8>>2]=i[b+8>>2],i[A+12>>2]=i[b+12>>2],(x|0)==(u+-1|0)?(i[j>>2]=i[d>>2],i[j+4>>2]=i[d+4>>2],i[j+8>>2]=i[d+8>>2],i[j+12>>2]=i[d+12>>2]):(b=d+(x+1<<4)|0,i[j>>2]=i[b>>2],i[j+4>>2]=i[b+4>>2],i[j+8>>2]=i[b+8>>2],i[j+12>>2]=i[b+12>>2]),u=Ne(A,j,r,N)|0;a:do if(u)d=0,l=u;else if(u=N,d=i[u>>2]|0,u=i[u+4>>2]|0,(u|0)>0|!(u|0)&d>>>0>0){y=0,b=0;b:for(;;){if(L=1/(+(d>>>0)+4294967296*(u|0)),R=+a[A>>3],u=ir(d|0,u|0,y|0,b|0)|0,ee=+(u>>>0)+4294967296*(T()|0),I=+(y>>>0)+4294967296*(b|0),a[C>>3]=R*ee*L+L*(+a[j>>3]*I),a[k>>3]=L*(+a[D>>3]*ee)+L*(+a[O>>3]*I),u=Dt(C,r,w)|0,u|0){l=u;break}v=w,_=i[v>>2]|0,v=i[v+4>>2]|0,m=dr(_|0,v|0,t|0,n|0)|0,f=T()|0,u=c+(m<<3)|0,p=u,d=i[p>>2]|0,p=i[p+4>>2]|0;c:do if(!(d|0)&!(p|0))S=u,P=16;else for(h=0,g=0;;){if((h|0)>(n|0)|(h|0)==(n|0)&g>>>0>t>>>0){l=1;break b}if((d|0)==(_|0)&(p|0)==(v|0))break c;if(u=G(m|0,f|0,1,0)|0,m=ur(u|0,T()|0,t|0,n|0)|0,f=T()|0,g=G(g|0,h|0,1,0)|0,h=T()|0,u=c+(m<<3)|0,p=u,d=i[p>>2]|0,p=i[p+4>>2]|0,!(d|0)&!(p|0)){S=u,P=16;break}}while(0);if((P|0)==16&&(P=0,!(!(_|0)&!(v|0)))&&(g=S,i[g>>2]=_,i[g+4>>2]=v,g=s+(i[o>>2]<<3)|0,i[g>>2]=_,i[g+4>>2]=v,g=o,g=G(i[g>>2]|0,i[g+4>>2]|0,1,0)|0,_=T()|0,v=o,i[v>>2]=g,i[v+4>>2]=_),y=G(y|0,b|0,1,0)|0,b=T()|0,u=N,d=i[u>>2]|0,u=i[u+4>>2]|0,!((u|0)>(b|0)|(u|0)==(b|0)&d>>>0>y>>>0)){d=1;break a}}d=0}else d=1;while(0);if(x=x+1|0,!d){P=21;break}if(u=i[e>>2]|0,(x|0)>=(u|0)){l=0,P=21;break}}return(P|0)==21?(M=F,l|0):0}function le(e,t,n,r){e|=0,t|=0,n|=0,r|=0;var a=0,o=0,s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0,S=0,C=0,w=0,E=0,D=0,O=0,k=0,A=0,j=0,N=0,P=0,F=0,I=0,L=0;if(L=M,M=M+112|0,N=L+80|0,l=L+72|0,P=L,F=L+56|0,a=bn(n)|0,a|0)return I=a,M=L,I|0;if(u=e+8|0,I=$n((i[u>>2]<<5)+32|0)|0,!I)return I=13,M=L,I|0;if(xn(e,I),a=bn(n)|0,!a){if(A=e,j=i[A+4>>2]|0,a=l,i[a>>2]=i[A>>2],i[a+4>>2]=j,yn(l,N),a=Me(N,t,P)|0,a)A=0,j=0;else{if(a=i[l>>2]|0,o=i[u>>2]|0,(o|0)>0){s=i[e+12>>2]|0,n=0;do a=(i[s+(n<<3)>>2]|0)+a|0,n=n+1|0;while((n|0)!=(o|0));n=a}else n=a;a=P,o=i[a>>2]|0,a=i[a+4>>2]|0,s=((n|0)<0)<<31>>31,(a|0)<(s|0)|(a|0)==(s|0)&o>>>0<n>>>0?(a=P,i[a>>2]=n,i[a+4>>2]=s,a=s):n=o,A=G(n|0,a|0,12,0)|0,j=T()|0,a=P,i[a>>2]=A,i[a+4>>2]=j,a=0}if(!a){if(n=er(A,8)|0,!n)return W(I),I=13,M=L,I|0;if(c=er(A,8)|0,!c)return W(I),W(n),I=13,M=L,I|0;O=N,i[O>>2]=0,i[O+4>>2]=0,O=e,k=i[O+4>>2]|0,a=l,i[a>>2]=i[O>>2],i[a+4>>2]=k,a=B(l,A,j,t,N,n,c)|0;a:do if(a)W(n),W(c),W(I);else{b:do if((i[u>>2]|0)>0){for(s=e+12|0,o=0;a=B((i[s>>2]|0)+(o<<3)|0,A,j,t,N,n,c)|0,o=o+1|0,!(a|0);)if((o|0)>=(i[u>>2]|0))break b;W(n),W(c),W(I);break a}while(0);(j|0)>0|!(j|0)&A>>>0>0&&yr(c|0,0,A<<3)|0,k=N,O=i[k+4>>2]|0;c:do if((O|0)>0|!(O|0)&(i[k>>2]|0)>>>0>0){w=n,E=c,D=n,O=c,k=n,a=n,x=n,S=c,C=c,n=c;d:for(;;){for(_=0,v=0,y=0,b=0,o=0,s=0;;){c=P,l=c+56|0;do i[c>>2]=0,c=c+4|0;while((c|0)<(l|0));if(t=w+(_<<3)|0,u=i[t>>2]|0,t=i[t+4>>2]|0,ne(u,t,1,P,0)|0){c=P,l=c+56|0;do i[c>>2]=0,c=c+4|0;while((c|0)<(l|0));c=er(7,4)|0,c|0&&(re(u,t,1,P,c,7,0,0)|0,W(c))}for(g=0;;){h=P+(g<<3)|0,m=i[h>>2]|0,h=i[h+4>>2]|0;e:do if(!(m|0)&!(h|0))c=o,l=s;else{if(d=dr(m|0,h|0,A|0,j|0)|0,u=T()|0,c=r+(d<<3)|0,t=c,l=i[t>>2]|0,t=i[t+4>>2]|0,!(!(l|0)&!(t|0))){f=0,p=0;do{if((f|0)>(j|0)|(f|0)==(j|0)&p>>>0>A>>>0)break d;if((l|0)==(m|0)&(t|0)==(h|0)){c=o,l=s;break e}c=G(d|0,u|0,1,0)|0,d=ur(c|0,T()|0,A|0,j|0)|0,u=T()|0,p=G(p|0,f|0,1,0)|0,f=T()|0,c=r+(d<<3)|0,t=c,l=i[t>>2]|0,t=i[t+4>>2]|0}while(!(!(l|0)&!(t|0)))}if(!(m|0)&!(h|0)){c=o,l=s;break}At(m,h,F)|0,Sn(e,I,F)|0&&(p=G(o|0,s|0,1,0)|0,s=T()|0,f=c,i[f>>2]=m,i[f+4>>2]=h,o=E+(o<<3)|0,i[o>>2]=m,i[o+4>>2]=h,o=p),c=o,l=s}while(0);if(g=g+1|0,g>>>0>=7)break;o=c,s=l}if(_=G(_|0,v|0,1,0)|0,v=T()|0,y=G(y|0,b|0,1,0)|0,b=T()|0,s=N,o=i[s>>2]|0,s=i[s+4>>2]|0,(b|0)<(s|0)|(b|0)==(s|0)&y>>>0<o>>>0)o=c,s=l;else break}if((s|0)>0|!(s|0)&o>>>0>0){o=0,s=0;do b=w+(o<<3)|0,i[b>>2]=0,i[b+4>>2]=0,o=G(o|0,s|0,1,0)|0,s=T()|0,b=N,y=i[b+4>>2]|0;while((s|0)<(y|0)|((s|0)==(y|0)?o>>>0<(i[b>>2]|0)>>>0:0))}if(b=N,i[b>>2]=c,i[b+4>>2]=l,(l|0)>0|!(l|0)&c>>>0>0)g=n,_=C,v=k,y=S,b=E,n=x,C=a,S=D,x=g,a=_,k=O,O=v,D=y,E=w,w=b;else break c}W(D),W(O),W(I),a=1;break a}else a=c;while(0);W(I),W(n),W(a),a=0}while(0);return I=a,M=L,I|0}}return W(I),I=a,M=L,I|0}function V(e,t,n){e|=0,t|=0,n|=0;var r=0,a=0,o=0,s=0,c=0,l=0,u=0;if(c=M,M=M+16|0,s=c,e=Fe(e,t,((t|0)<0)<<31>>31,s)|0,e|0)return s=e,M=c,s|0;if(o=tn(s,n)|0,n=s+4|0,(i[s>>2]|0)>0){t=0;do{if(a=i[n>>2]|0,r=a+(t<<4)+4|0,W(i[r>>2]|0),i[r>>2]=0,i[a+(t<<4)>>2]=0,r=a+(t<<4)+8|0,a=a+(t<<4)+12|0,(i[r>>2]|0)>0){e=0;do l=i[a>>2]|0,u=l+(e<<3)+4|0,W(i[u>>2]|0),i[u>>2]=0,i[l+(e<<3)>>2]=0,e=e+1|0;while((e|0)<(i[r>>2]|0))}W(i[a>>2]|0),i[a>>2]=0,i[r>>2]=0,t=t+1|0}while((t|0)<(i[s>>2]|0))}return W(i[n>>2]|0),i[n>>2]=0,i[s>>2]=0,u=o,M=c,u|0}function H(e,t){e|=0,t|=0;var n=0,r=0,o=0,s=0,c=0,l=0,u=0,p=0,m=0,h=0;if(c=i[e>>2]|0,(c|0)<=0)return o=0,r=0,c=o<0,r=12.566370614359172-r,r=o+r,o=c?r:o,a[t>>3]=o,0;if(s=i[e+4>>2]|0,e=(c|0)!=1&1,l=a[s>>3]*.5+.7853981633974483,o=a[s+(e<<4)>>3]*.5+.7853981633974483,n=+f(+l)*f(+o),r=+a[s+(e<<4)+8>>3]-a[s+8>>3],n=_(+(+f(+r)*n),+(+d(+l)*d(+o)+ +d(+r)*n))*-2,r=n+0,n=r-n,(c|0)==1)return l=r,o=n,c=l<0,o=12.566370614359172-o,o=l+o,l=c?o:l,a[t>>3]=l,0;for(e=1,o=r;m=e,e=e+1|0,h=(e|0)%(c|0)|0,p=a[s+(m<<4)>>3]*.5+.7853981633974483,u=a[s+(h<<4)>>3]*.5+.7853981633974483,r=+f(+p)*f(+u),l=+a[s+(h<<4)+8>>3]-a[s+(m<<4)+8>>3],n=_(+(+f(+l)*r),+(+d(+p)*d(+u)+ +d(+l)*r))*-2-n,r=o+n,n=r-o-n,!((e|0)>=(c|0));)o=r;return h=r<0,p=12.566370614359172-n,p=r+p,p=h?p:r,a[t>>3]=p,0}function ue(e,t,n){e|=0,t|=0,n|=0;var r=0,a=0,o=0,s=0;return s=M,M=M+192|0,r=s+176|0,a=s,o=s+168|0,e=jt(e,t,a)|0,e|0?(o=e,M=s,o|0):(i[o>>2]=i[a>>2],i[o+4>>2]=a+8,i[r>>2]=i[o>>2],i[r+4>>2]=i[o+4>>2],H(r,n)|0,o=0,M=s,o|0)}function de(e,t,n){e|=0,t|=0,n|=0;var r=0,o=0,s=0,c=0;return c=M,M=M+192|0,r=c+176|0,o=c,s=c+168|0,e=jt(e,t,o)|0,e?(s=e,M=c,s|0):(i[s>>2]=i[o>>2],i[s+4>>2]=o+8,i[r>>2]=i[s>>2],i[r+4>>2]=i[s+4>>2],H(r,n)|0,a[n>>3]=a[n>>3]*40589732.49931477,s=0,M=c,s|0)}function fe(e,t,n){e|=0,t|=0,n|=0;var r=0,o=0,s=0,c=0;return c=M,M=M+192|0,r=c+176|0,o=c,s=c+168|0,e=jt(e,t,o)|0,e?(s=e,M=c,s|0):(i[s>>2]=i[o>>2],i[s+4>>2]=o+8,i[r>>2]=i[s>>2],i[r+4>>2]=i[s+4>>2],H(r,n)|0,a[n>>3]=a[n>>3]*40589732.49931477*1e6,s=0,M=c,s|0)}function pe(e){return e|=0,e>>>0>121?(e=0,e|0):(e=i[7696+(e*28|0)+16>>2]|0,e|0)}function me(e){return e|=0,(e|0)==4|(e|0)==117}function he(e){return e|=0,i[11120+((i[e>>2]|0)*216|0)+((i[e+4>>2]|0)*72|0)+((i[e+8>>2]|0)*24|0)+(i[e+12>>2]<<3)>>2]|0}function ge(e){return e|=0,i[11120+((i[e>>2]|0)*216|0)+((i[e+4>>2]|0)*72|0)+((i[e+8>>2]|0)*24|0)+(i[e+12>>2]<<3)+4>>2]|0}function _e(e,t){e|=0,t|=0,e=7696+(e*28|0)|0,i[t>>2]=i[e>>2],i[t+4>>2]=i[e+4>>2],i[t+8>>2]=i[e+8>>2],i[t+12>>2]=i[e+12>>2]}function ve(e,t){e|=0,t|=0;var n=0,r=0;if(t>>>0>20)return t=-1,t|0;do if((i[11120+(t*216|0)>>2]|0)!=(e|0)){if((i[11120+(t*216|0)+8>>2]|0)!=(e|0)){if((i[11120+(t*216|0)+16>>2]|0)!=(e|0)){if((i[11120+(t*216|0)+24>>2]|0)!=(e|0)){if((i[11120+(t*216|0)+32>>2]|0)!=(e|0)){if((i[11120+(t*216|0)+40>>2]|0)!=(e|0)){if((i[11120+(t*216|0)+48>>2]|0)!=(e|0)){if((i[11120+(t*216|0)+56>>2]|0)!=(e|0)){if((i[11120+(t*216|0)+64>>2]|0)!=(e|0)){if((i[11120+(t*216|0)+72>>2]|0)!=(e|0)){if((i[11120+(t*216|0)+80>>2]|0)!=(e|0)){if((i[11120+(t*216|0)+88>>2]|0)!=(e|0)){if((i[11120+(t*216|0)+96>>2]|0)!=(e|0)){if((i[11120+(t*216|0)+104>>2]|0)!=(e|0)){if((i[11120+(t*216|0)+112>>2]|0)!=(e|0)){if((i[11120+(t*216|0)+120>>2]|0)!=(e|0)){if((i[11120+(t*216|0)+128>>2]|0)!=(e|0)){if((i[11120+(t*216|0)+136>>2]|0)==(e|0))e=2,n=1,r=2;else{if((i[11120+(t*216|0)+144>>2]|0)==(e|0)){e=0,n=2,r=0;break}if((i[11120+(t*216|0)+152>>2]|0)==(e|0)){e=0,n=2,r=1;break}if((i[11120+(t*216|0)+160>>2]|0)==(e|0)){e=0,n=2,r=2;break}if((i[11120+(t*216|0)+168>>2]|0)==(e|0)){e=1,n=2,r=0;break}if((i[11120+(t*216|0)+176>>2]|0)==(e|0)){e=1,n=2,r=1;break}if((i[11120+(t*216|0)+184>>2]|0)==(e|0)){e=1,n=2,r=2;break}if((i[11120+(t*216|0)+192>>2]|0)==(e|0)){e=2,n=2,r=0;break}if((i[11120+(t*216|0)+200>>2]|0)==(e|0)){e=2,n=2,r=1;break}if((i[11120+(t*216|0)+208>>2]|0)==(e|0)){e=2,n=2,r=2;break}return e=-1,e|0}}else e=2,n=1,r=1}else e=2,n=1,r=0}else e=1,n=1,r=2}else e=1,n=1,r=1}else e=1,n=1,r=0}else e=0,n=1,r=2}else e=0,n=1,r=1}else e=0,n=1,r=0}else e=2,n=0,r=2}else e=2,n=0,r=1}else e=2,n=0,r=0}else e=1,n=0,r=2}else e=1,n=0,r=1}else e=1,n=0,r=0}else e=0,n=0,r=2}else e=0,n=0,r=1}else e=0,n=0,r=0;while(0);return t=i[11120+(t*216|0)+(n*72|0)+(e*24|0)+(r<<3)+4>>2]|0,t|0}function ye(e,t){return e|=0,t|=0,(i[7696+(e*28|0)+20>>2]|0)==(t|0)?(t=1,t|0):(t=(i[7696+(e*28|0)+24>>2]|0)==(t|0),t|0)}function be(e,t){return e|=0,t|=0,i[848+(e*28|0)+(t<<2)>>2]|0}function xe(e,t){return e|=0,t|=0,(i[848+(e*28|0)>>2]|0)==(t|0)?(t=0,t|0):(i[848+(e*28|0)+4>>2]|0)==(t|0)?(t=1,t|0):(i[848+(e*28|0)+8>>2]|0)==(t|0)?(t=2,t|0):(i[848+(e*28|0)+12>>2]|0)==(t|0)?(t=3,t|0):(i[848+(e*28|0)+16>>2]|0)==(t|0)?(t=4,t|0):(i[848+(e*28|0)+20>>2]|0)==(t|0)?(t=5,t|0):((i[848+(e*28|0)+24>>2]|0)==(t|0)?6:7)|0}function Se(){return 122}function Ce(e){e|=0;var t=0,n=0,r=0;t=0;do q(t|0,0,45)|0,r=T()|134225919,n=e+(t<<3)|0,i[n>>2]=-1,i[n+4>>2]=r,t=t+1|0;while((t|0)!=122);return 0}function we(e){e|=0;var t=0,n=0,r=0;return r=+a[e+16>>3],n=+a[e+24>>3],t=r-n,+(r<n?t+6.283185307179586:t)}function Te(e){return e|=0,+a[e+16>>3]<+a[e+24>>3]|0}function Ee(e){return e|=0,+(+a[e>>3]-a[e+8>>3])}function De(e,t){e|=0,t|=0;var n=0,r=0,i=0;return n=+a[t>>3],!(n>=+a[e+8>>3])||!(n<=+a[e>>3])?(t=0,t|0):(r=+a[e+16>>3],n=+a[e+24>>3],i=+a[t+8>>3],t=i>=n,e=i<=r&1,r<n?t&&(e=1):t||(e=0),t=!!(e|0),t|0)}function Oe(e,t){e|=0,t|=0;var n=0,r=0,i=0,o=0,s=0,c=0,l=0,u=0,d=0;return+a[e>>3]<+a[t+8>>3]||+a[e+8>>3]>+a[t>>3]?(r=0,r|0):(o=+a[e+16>>3],n=e+24|0,d=+a[n>>3],s=o<d,r=t+16|0,u=+a[r>>3],i=t+24|0,l=+a[i>>3],c=u<l,t=d-u<l-o,e=s?c|t?1:2:0,t=c?s?1:t?2:1:0,o=+Ht(o,e),o<+Ht(+a[i>>3],t)||(d=+Ht(+a[n>>3],e),d>+Ht(+a[r>>3],t))?(c=0,c|0):(c=1,c|0))}function ke(e,t,n,r){e|=0,t|=0,n|=0,r|=0;var o=0,s=0,c=0,l=0,u=0;s=+a[e+16>>3],u=+a[e+24>>3],e=s<u,l=+a[t+16>>3],c=+a[t+24>>3],o=l<c,t=u-l<c-s,i[n>>2]=e?o|t?1:2:0,i[r>>2]=o?e?1:t?2:1:0}function Ae(e,t){e|=0,t|=0;var n=0,r=0,i=0,o=0,s=0,c=0,l=0,u=0,d=0;return+a[e>>3]<+a[t>>3]||+a[e+8>>3]>+a[t+8>>3]?(r=0,r|0):(r=e+16|0,l=+a[r>>3],o=+a[e+24>>3],s=l<o,n=t+16|0,d=+a[n>>3],i=t+24|0,u=+a[i>>3],c=d<u,t=o-d<u-l,e=s?c|t?1:2:0,t=c?s?1:t?2:1:0,o=+Ht(o,e),o<=+Ht(+a[i>>3],t)?(d=+Ht(+a[r>>3],e),c=d>=+Ht(+a[n>>3],t),c|0):(c=0,c|0))}function je(e,t){e|=0,t|=0;var n=0,r=0,o=0,s=0,c=0,l=0;o=M,M=M+176|0,r=o,i[r>>2]=4,l=+a[t>>3],a[r+8>>3]=l,s=+a[t+16>>3],a[r+16>>3]=s,a[r+24>>3]=l,l=+a[t+24>>3],a[r+32>>3]=l,c=+a[t+8>>3],a[r+40>>3]=c,a[r+48>>3]=l,a[r+56>>3]=c,a[r+64>>3]=s,t=r+72|0,n=t+96|0;do i[t>>2]=0,t=t+4|0;while((t|0)<(n|0));_r(e|0,r|0,168)|0,M=o}function Me(e,t,n){e|=0,t|=0,n|=0;var r=0,s=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,y=0,x=0,S=0,C=0;x=M,M=M+288|0,h=x+264|0,g=x+96|0,m=x,f=m,p=f+96|0;do i[f>>2]=0,f=f+4|0;while((f|0)<(p|0));return t=Ft(t,m)|0,t|0?(y=t,M=x,y|0):(p=m,m=i[p>>2]|0,p=i[p+4>>2]|0,At(m,p,h)|0,jt(m,p,g)|0,d=+Wt(h,g+8|0),a[h>>3]=+a[e>>3],p=h+8|0,a[p>>3]=+a[e+16>>3],a[g>>3]=+a[e+8>>3],m=g+8|0,a[m>>3]=+a[e+24>>3],s=+Wt(h,g),C=+a[p>>3]-a[m>>3],u=+l(+C),S=+a[h>>3]-a[g>>3],r=+l(+S),!(C==0|S==0)&&(C=+mr(+u,+r),C=+v(+(s*s/+hr(+(C/+hr(+u,+r)),3)/(d*2.59807621135*d*.8))),a[o>>3]=C,_=~~C>>>0,y=+l(C)>=1?C>0?~~+b(+c(C/4294967296),4294967295)>>>0:~~+v((C-+(~~C>>>0))/4294967296)>>>0:0,(i[o+4>>2]&2146435072)!=2146435072)?(g=!(_|0)&!(y|0),t=n,i[t>>2]=g?1:_,i[t+4>>2]=g?0:y,t=0):t=1,y=t,M=x,y|0)}function Ne(e,t,n,r){e|=0,t|=0,n|=0,r|=0;var s=0,u=0,d=0,f=0,p=0,m=0,h=0;m=M,M=M+288|0,d=m+264|0,f=m+96|0,p=m,s=p,u=s+96|0;do i[s>>2]=0,s=s+4|0;while((s|0)<(u|0));return n=Ft(n,p)|0,n|0?(r=n,M=m,r|0):(n=p,s=i[n>>2]|0,n=i[n+4>>2]|0,At(s,n,d)|0,jt(s,n,f)|0,h=+Wt(d,f+8|0),h=+v(+(+Wt(e,t)/(h*2))),a[o>>3]=h,n=~~h>>>0,s=+l(h)>=1?h>0?~~+b(+c(h/4294967296),4294967295)>>>0:~~+v((h-+(~~h>>>0))/4294967296)>>>0:0,(i[o+4>>2]&2146435072)==2146435072?(r=1,M=m,r|0):(p=!(n|0)&!(s|0),i[r>>2]=p?1:n,i[r+4>>2]=p?0:s,r=0,M=m,r|0))}function Pe(e,t){e|=0,t=+t;var n=0,r=0,i=0,o=0,s=0,c=0,l=0,u=0,d=0;o=e+16|0,s=+a[o>>3],n=e+24|0,i=+a[n>>3],r=s-i,r=s<i?r+6.283185307179586:r,u=+a[e>>3],c=e+8|0,l=+a[c>>3],d=u-l,r=(r*t-r)*.5,t=(d*t-d)*.5,u+=t,a[e>>3]=u>1.5707963267948966?1.5707963267948966:u,t=l-t,a[c>>3]=t<-1.5707963267948966?-1.5707963267948966:t,t=s+r,t=t>3.141592653589793?t+-6.283185307179586:t,a[o>>3]=t<-3.141592653589793?t+6.283185307179586:t,t=i-r,t=t>3.141592653589793?t+-6.283185307179586:t,a[n>>3]=t<-3.141592653589793?t+6.283185307179586:t}function Fe(e,t,n,o){e|=0,t|=0,n|=0,o|=0;var s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0,S=0,C=0,w=0,D=0,O=0,k=0,A=0,j=0,N=0,P=0,F=0;if(F=M,M=M+224|0,A=F,w=F+48|0,d=(n|0)>0|!(n|0)&t>>>0>0,d&(n>>>0>0|!(n|0)&t>>>0>17895697))return P=14,M=F,P|0;if((n|0)<0)return P=2,M=F,P|0;if(!(t|0)&!(n|0))return i[o>>2]=0,i[o+4>>2]=0,P=0,M=F,P|0;for(s=e,s=rt(i[s>>2]|0,i[s+4>>2]|0)|0,l=0,u=0;;){if(c=e+(l<<3)|0,P=c,!(st(i[P>>2]|0,i[P+4>>2]|0)|0)){s=5,j=159;break}if(P=c,P=(rt(i[P>>2]|0,i[P+4>>2]|0)|0)==(s|0),l=G(l|0,u|0,1,0)|0,u=T()|0,!P){s=12,j=159;break}if(!((u|0)<(n|0)|(u|0)==(n|0)&l>>>0<t>>>0)){j=8;break}}if((j|0)==8){do if((n|0)>0|!(n|0)&t>>>0>1){if(s=t<<3,l=$n(s)|0,!l)return P=13,M=F,P|0;for(_r(l|0,e|0,s|0)|0,Wn(l,t,8,1),s=1,c=0;N=l+(s<<3)|0,P=l+(s+-1<<3)|0,P=(i[N>>2]|0)==(i[P>>2]|0)?(i[N+4>>2]|0)==(i[P+4>>2]|0):0,s=G(s|0,c|0,1,0)|0,c=T()|0,!P;)if(!((c|0)<(n|0)|(c|0)==(n|0)&s>>>0<t>>>0)){j=14;break}if((j|0)==14){W(l);break}return W(l),P=10,M=F,P|0}while(0);if(s=lr(t|0,n|0,6,0)|0,c=T()|0,d){l=0,u=0;do P=e+(u<<3)|0,P=!!(ft(i[P>>2]|0,i[P+4>>2]|0)|0)<<31>>31,s=G(s|0,c|0,P|0,((P|0)<0)<<31>>31)|0,c=T()|0,u=G(u|0,l|0,1,0)|0,l=T()|0;while((l|0)<(n|0)|(l|0)==(n|0)&u>>>0<t>>>0);C=s,S=c}else C=s,S=c;if(b=lr(C|0,S|0,10,0)|0,x=T()|0,N=$n(C<<5)|0,!N)return P=13,M=F,P|0;if(P=er(b,4)|0,!P)return W(N),P=13,M=F,P|0;a:do if(d){for(k=e,Ge(i[k>>2]|0,i[k+4>>2]|0,A)|0,g=N,_=0,v=0,s=0,y=0;;){d=A,d=!(i[d>>2]|0)&!(i[d+4>>2]|0),c=d?26990:26995,l=d?5:6,u=0,d=A+((d&1)<<3)|0,f=G(l|0,u|0,-1,-1)|0,p=T()|0,m=0,h=0;do O=d+(m<<3)|0,D=i[O+4>>2]|0,k=g+(m<<5)|0,i[k>>2]=i[O>>2],i[k+4>>2]=D,r[g+(m<<5)+9|0]=0,r[g+(m<<5)+8|0]=0,i[g+(m<<5)+20>>2]=g,k=g+(m<<5)+24|0,i[k>>2]=1,i[k+4>>2]=0,k=r[c+m|0]|0,D=G(f|0,p|0,m|0,h|0)|0,D=dr(D|0,T()|0,l|0,u|0)|0,T()|0,D=r[c+D|0]|0,m=G(m|0,h|0,1,0)|0,h=T()|0,O=r[c+((m|0)==(l|0)&(h|0)==(u|0)?0:m)|0]|0,k&=255,i[g+(k<<5)+16>>2]=g+((D&255)<<5),i[g+(k<<5)+12>>2]=g+((O&255)<<5);while(h>>>0<u>>>0|(h|0)==(u|0)&m>>>0<l>>>0);if(_=G(_|0,v|0,1,0)|0,v=T()|0,s=G(l|0,u|0,s|0,y|0)|0,y=T()|0,!((v|0)<(n|0)|(v|0)==(n|0)&_>>>0<t>>>0))break a;k=e+(_<<3)|0,Ge(i[k>>2]|0,i[k+4>>2]|0,A)|0||(g=N+(s<<5)|0)}E(27634,26956,108,26975)}while(0);if((S|0)>0|!(S|0)&C>>>0>0){u=0,d=0;do{if(c=N+(u<<5)|0,l=i[c>>2]|0,c=i[c+4>>2]|0,s=K(l|0,c|0,30)|0,c=lr(s^l|0,(T()|0)^c,484763065,-1084733587)|0,l=T()|0,s=K(c|0,l|0,27)|0,l=lr(s^c|0,(T()|0)^l,321982955,-1798288965)|0,c=T()|0,s=K(l|0,c|0,31)|0,c=dr(s^l|0,(T()|0)^c,b|0,x|0)|0,l=T()|0,s=P+(c<<2)|0,i[s>>2]|0)do s=G(c|0,l|0,1,0)|0,c=ur(s|0,T()|0,b|0,x|0)|0,l=T()|0,s=P+(c<<2)|0;while(i[s>>2]|0);i[s>>2]=N+(u<<5),u=G(u|0,d|0,1,0)|0,d=T()|0}while((d|0)<(S|0)|(d|0)==(S|0)&u>>>0<C>>>0);m=0,h=0;do{if(u=N+(m<<5)|0,d=N+(m<<5)+9|0,!(r[d|0]|0)){if(k=u,qe(i[k>>2]|0,i[k+4>>2]|0,A)|0){j=39;break}p=A,f=i[p>>2]|0,p=i[p+4>>2]|0,c=K(f|0,p|0,30)|0,c=lr(c^f|0,(T()|0)^p,484763065,-1084733587)|0,l=T()|0,s=K(c|0,l|0,27)|0,l=lr(s^c|0,(T()|0)^l,321982955,-1798288965)|0,c=T()|0,s=K(l|0,c|0,31)|0,c=dr(s^l|0,(T()|0)^c,b|0,x|0)|0,l=T()|0,s=i[P+(c<<2)>>2]|0;b:do if(s|0){for(;k=s,(i[k>>2]|0)!=(f|0)||(i[k+4>>2]|0)!=(p|0);)if(s=G(c|0,l|0,1,0)|0,c=ur(s|0,T()|0,b|0,x|0)|0,l=T()|0,s=i[P+(c<<2)>>2]|0,!s)break b;r[d|0]=1,r[s+9|0]=1,c=s+16|0,k=N+(m<<5)+12|0,i[(i[k>>2]|0)+16>>2]=i[c>>2],n=s+12|0,O=i[N+(m<<5)+16>>2]|0,i[O+12>>2]=i[n>>2],i[(i[n>>2]|0)+16>>2]=O,i[(i[c>>2]|0)+12>>2]=i[k>>2],c=Ie(u)|0,k=Ie(s)|0,s=c+24|0,n=i[s+4>>2]|0,O=k+24|0,D=i[O+4>>2]|0,O=(n|0)<(D|0)|((n|0)==(D|0)?(i[s>>2]|0)>>>0<(i[O>>2]|0)>>>0:0),s=O?c:k,c=O?k:c,(c|0)!=(s|0)&&(D=s+24|0,k=c+24|0,O=k,D=G(i[O>>2]|0,i[O+4>>2]|0,i[D>>2]|0,i[D+4>>2]|0)|0,O=T()|0,i[k>>2]=D,i[k+4>>2]=O,i[s+20>>2]=c)}while(0)}m=G(m|0,h|0,1,0)|0,h=T()|0}while((h|0)<(S|0)|(h|0)==(S|0)&m>>>0<C>>>0);(j|0)==39&&E(27634,26956,258,27001),s=0,c=0;do r[N+(s<<5)+8|0]=0,s=G(s|0,c|0,1,0)|0,c=T()|0;while((c|0)<(S|0)|(c|0)==(S|0)&s>>>0<C>>>0);for(f=0,l=0,d=0,p=0;;){if(s=N+(f<<5)|0,!(r[N+(f<<5)+8|0]|0)&&!(r[N+(f<<5)+9|0]|0)){u=s,c=i[u>>2]|0,u=i[u+4>>2]|0;do r[s+8|0]=1,s=i[s+12>>2]|0,k=s;while((i[k>>2]|0)!=(c|0)||(i[k+4>>2]|0)!=(u|0));l=G(l|0,d|0,1,0)|0,u=T()|0}else u=d;if(f=G(f|0,p|0,1,0)|0,p=T()|0,(p|0)<(S|0)|(p|0)==(S|0)&f>>>0<C>>>0)d=u;else break}s=0,c=0;do r[N+(s<<5)+8|0]=0,s=G(s|0,c|0,1,0)|0,c=T()|0;while((c|0)<(S|0)|(c|0)==(S|0)&s>>>0<C>>>0);O=l,D=u,s=1}else O=0,D=0,s=0;k=$n(O*24|0)|0;c:do if(k|0){d:do if(s){e=0,b=0,n=0,t=0;e:for(;;){if(s=N+(e<<5)|0,!(r[N+(e<<5)+8|0]|0)&&!(r[N+(e<<5)+9|0]|0)){y=s,v=i[y>>2]|0,y=i[y+4>>2]|0,c=0,l=0;do c=G(c|0,l|0,2,0)|0,l=T()|0,s=i[s+12>>2]|0,x=s;while((i[x>>2]|0)!=(v|0)||(i[x+4>>2]|0)!=(y|0));if(_=$n(c<<4)|0,!_)break;c=v,l=y,g=0,h=0,u=0,d=0;do{if(Ke(c,l,w)|0){j=69;break e}if(x=i[w>>2]|0,p=x+-1|0,m=((p|0)<0)<<31>>31,(x|0)>1){l=u,f=0,c=d,u=0;do x=_+(l<<4)|0,d=w+8+(f<<4)|0,i[x>>2]=i[d>>2],i[x+4>>2]=i[d+4>>2],i[x+8>>2]=i[d+8>>2],i[x+12>>2]=i[d+12>>2],l=G(l|0,c|0,1,0)|0,c=T()|0,f=G(f|0,u|0,1,0)|0,u=T()|0;while((u|0)<(m|0)|(u|0)==(m|0)&f>>>0<p>>>0);u=l,d=c}g=G(g|0,h|0,p|0,m|0)|0,h=T()|0,r[s+8|0]=1,s=i[s+12>>2]|0,l=s,c=i[l>>2]|0,l=i[l+4>>2]|0}while(!((c|0)==(v|0)&(l|0)==(y|0)));if(c=tr(_,g<<4)|0,!c){j=75;break}y=Ie(s)|0,x=i[y+4>>2]|0,s=k+(n*24|0)|0,i[s>>2]=i[y>>2],i[s+4>>2]=x,s=k+(n*24|0)+16|0,i[s>>2]=g,i[k+(n*24|0)+20>>2]=c,i[A>>2]=i[s>>2],i[A+4>>2]=i[s+4>>2],H(A,k+(n*24|0)+8|0)|0,c=G(n|0,b|0,1,0)|0,s=T()|0}else c=n,s=b;if(e=G(e|0,t|0,1,0)|0,t=T()|0,(t|0)<(S|0)|(t|0)==(S|0)&e>>>0<C>>>0)b=s,n=c;else break d}if((j|0)==69?E(27634,26956,351,27016):(j|0)==75&&W(_),(b|0)>0|!(b|0)&n>>>0>0)for(u=0,d=0,s=n,l=b;c=i[k+(u*24|0)+20>>2]|0,c?(W(c),c=b,s=n):c=l,u=G(u|0,d|0,1,0)|0,d=T()|0,(d|0)<(c|0)|(d|0)==(c|0)&u>>>0<s>>>0;)l=c;W(k);break c}while(0);Wn(k,O,24,2);f:do if(!(O|0)&!(D|0)){if(x=$n(192)|0,x|0){if(i[x+16>>2]=0,i[x+20>>2]=0,h=x+8|0,i[h>>2]=3,s=$n(48)|0,g=x+12|0,i[g>>2]=s,s|0){i[s>>2]=i[3860],i[s+4>>2]=i[3861],i[s+8>>2]=i[3862],i[s+12>>2]=i[3863],m=s+16|0,i[m>>2]=i[3864],i[m+4>>2]=i[3865],i[m+8>>2]=i[3866],i[m+12>>2]=i[3867],m=s+32|0,i[m>>2]=i[3868],i[m+4>>2]=i[3869],i[m+8>>2]=i[3870],i[m+12>>2]=i[3871],i[A>>2]=i[h>>2],i[A+4>>2]=i[h+4>>2],H(A,x)|0,i[x+40>>2]=0,i[x+44>>2]=0,m=x+32|0,i[m>>2]=3,s=$n(48)|0,_=x+36|0,i[_>>2]=s;do if(!s)u=0,d=1;else{if(i[s>>2]=i[3872],i[s+4>>2]=i[3873],i[s+8>>2]=i[3874],i[s+12>>2]=i[3875],p=s+16|0,i[p>>2]=i[3876],i[p+4>>2]=i[3877],i[p+8>>2]=i[3878],i[p+12>>2]=i[3879],p=s+32|0,i[p>>2]=i[3880],i[p+4>>2]=i[3881],i[p+8>>2]=i[3882],i[p+12>>2]=i[3883],i[A>>2]=i[m>>2],i[A+4>>2]=i[m+4>>2],H(A,x+24|0)|0,i[x+64>>2]=0,i[x+68>>2]=0,p=x+56|0,i[p>>2]=3,s=$n(48)|0,v=x+60|0,i[v>>2]=s,!s){u=0,d=2;break}if(i[s>>2]=i[3884],i[s+4>>2]=i[3885],i[s+8>>2]=i[3886],i[s+12>>2]=i[3887],f=s+16|0,i[f>>2]=i[3888],i[f+4>>2]=i[3889],i[f+8>>2]=i[3890],i[f+12>>2]=i[3891],f=s+32|0,i[f>>2]=i[3892],i[f+4>>2]=i[3893],i[f+8>>2]=i[3894],i[f+12>>2]=i[3895],i[A>>2]=i[p>>2],i[A+4>>2]=i[p+4>>2],H(A,x+48|0)|0,i[x+88>>2]=0,i[x+92>>2]=0,f=x+80|0,i[f>>2]=3,s=$n(48)|0,y=x+84|0,i[y>>2]=s,!s){u=0,d=3;break}if(i[s>>2]=i[3896],i[s+4>>2]=i[3897],i[s+8>>2]=i[3898],i[s+12>>2]=i[3899],d=s+16|0,i[d>>2]=i[3900],i[d+4>>2]=i[3901],i[d+8>>2]=i[3902],i[d+12>>2]=i[3903],d=s+32|0,i[d>>2]=i[3904],i[d+4>>2]=i[3905],i[d+8>>2]=i[3906],i[d+12>>2]=i[3907],i[A>>2]=i[f>>2],i[A+4>>2]=i[f+4>>2],H(A,x+72|0)|0,i[x+112>>2]=0,i[x+116>>2]=0,d=x+104|0,i[d>>2]=3,s=$n(48)|0,e=x+108|0,i[e>>2]=s,!s){u=0,d=4;break}if(i[s>>2]=i[3908],i[s+4>>2]=i[3909],i[s+8>>2]=i[3910],i[s+12>>2]=i[3911],u=s+16|0,i[u>>2]=i[3912],i[u+4>>2]=i[3913],i[u+8>>2]=i[3914],i[u+12>>2]=i[3915],u=s+32|0,i[u>>2]=i[3916],i[u+4>>2]=i[3917],i[u+8>>2]=i[3918],i[u+12>>2]=i[3919],i[A>>2]=i[d>>2],i[A+4>>2]=i[d+4>>2],H(A,x+96|0)|0,i[x+136>>2]=0,i[x+140>>2]=0,u=x+128|0,i[u>>2]=3,s=$n(48)|0,t=x+132|0,i[t>>2]=s,!s){u=0,d=5;break}if(i[s>>2]=i[3920],i[s+4>>2]=i[3921],i[s+8>>2]=i[3922],i[s+12>>2]=i[3923],l=s+16|0,i[l>>2]=i[3924],i[l+4>>2]=i[3925],i[l+8>>2]=i[3926],i[l+12>>2]=i[3927],l=s+32|0,i[l>>2]=i[3928],i[l+4>>2]=i[3929],i[l+8>>2]=i[3930],i[l+12>>2]=i[3931],i[A>>2]=i[u>>2],i[A+4>>2]=i[u+4>>2],H(A,x+120|0)|0,i[x+160>>2]=0,i[x+164>>2]=0,l=x+152|0,i[l>>2]=3,s=$n(48)|0,n=x+156|0,i[n>>2]=s,!s){u=0,d=6;break}if(i[s>>2]=i[3932],i[s+4>>2]=i[3933],i[s+8>>2]=i[3934],i[s+12>>2]=i[3935],c=s+16|0,i[c>>2]=i[3936],i[c+4>>2]=i[3937],i[c+8>>2]=i[3938],i[c+12>>2]=i[3939],c=s+32|0,i[c>>2]=i[3940],i[c+4>>2]=i[3941],i[c+8>>2]=i[3942],i[c+12>>2]=i[3943],i[A>>2]=i[l>>2],i[A+4>>2]=i[l+4>>2],H(A,x+144|0)|0,i[x+184>>2]=0,i[x+188>>2]=0,c=x+176|0,i[c>>2]=3,s=$n(48)|0,b=x+180|0,i[b>>2]=s,!s){u=0,d=7;break}if(i[s>>2]=i[3944],i[s+4>>2]=i[3945],i[s+8>>2]=i[3946],i[s+12>>2]=i[3947],w=s+16|0,i[w>>2]=i[3948],i[w+4>>2]=i[3949],i[w+8>>2]=i[3950],i[w+12>>2]=i[3951],s=s+32|0,i[s>>2]=i[3952],i[s+4>>2]=i[3953],i[s+8>>2]=i[3954],i[s+12>>2]=i[3955],i[A>>2]=i[c>>2],i[A+4>>2]=i[c+4>>2],H(A,x+168|0)|0,Wn(x,8,24,3),s=$n(128)|0,i[o+4>>2]=s,s|0){i[o>>2]=8,i[s>>2]=i[h>>2],i[s+4>>2]=i[h+4>>2],i[s+8>>2]=i[h+8>>2],i[s+12>>2]=i[h+12>>2],j=s+16|0,i[j>>2]=i[m>>2],i[j+4>>2]=i[m+4>>2],i[j+8>>2]=i[m+8>>2],i[j+12>>2]=i[m+12>>2],j=s+32|0,i[j>>2]=i[p>>2],i[j+4>>2]=i[p+4>>2],i[j+8>>2]=i[p+8>>2],i[j+12>>2]=i[p+12>>2],j=s+48|0,i[j>>2]=i[f>>2],i[j+4>>2]=i[f+4>>2],i[j+8>>2]=i[f+8>>2],i[j+12>>2]=i[f+12>>2],j=s+64|0,i[j>>2]=i[d>>2],i[j+4>>2]=i[d+4>>2],i[j+8>>2]=i[d+8>>2],i[j+12>>2]=i[d+12>>2],j=s+80|0,i[j>>2]=i[u>>2],i[j+4>>2]=i[u+4>>2],i[j+8>>2]=i[u+8>>2],i[j+12>>2]=i[u+12>>2],j=s+96|0,i[j>>2]=i[l>>2],i[j+4>>2]=i[l+4>>2],i[j+8>>2]=i[l+8>>2],i[j+12>>2]=i[l+12>>2],j=s+112|0,i[j>>2]=i[c>>2],i[j+4>>2]=i[c+4>>2],i[j+8>>2]=i[c+8>>2],i[j+12>>2]=i[c+12>>2],W(x),j=158;break f}s=i[g>>2]|0,s|0&&W(s),s=i[_>>2]|0,s|0&&W(s),s=i[v>>2]|0,s|0&&W(s),s=i[y>>2]|0,s|0&&W(s),s=i[e>>2]|0,s|0&&W(s),s=i[t>>2]|0,s|0&&W(s),s=i[n>>2]|0,s|0&&W(s),s=i[b>>2]|0,s|0&&W(s),W(x);break f}while(0);s=0,l=0;do c=i[x+(s*24|0)+12>>2]|0,c|0&&W(c),s=G(s|0,l|0,1,0)|0,l=T()|0;while(l>>>0<u>>>0|(l|0)==(u|0)&s>>>0<d>>>0)}W(x),j=152}}else{if((D|0)>0|!(D|0)&O>>>0>0){l=0,u=0,d=0,c=0,s=0,f=0;do w=k+(l*24|0)|0,A=u,u=i[w>>2]|0,j=d,d=i[w+4>>2]|0,c=G(c|0,s|0,((u|0)!=(A|0)|(d|0)!=(j|0))&1,0)|0,s=T()|0,l=G(l|0,f|0,1,0)|0,f=T()|0;while((f|0)<(D|0)|(f|0)==(D|0)&l>>>0<O>>>0);y=c,v=s}else y=0,v=0;if(e=$n(y*24|0)|0,e){g:do if((D|0)>=0){for(h=0,g=0,c=0,l=0,_=0,u=0;;){if(!((h|0)==(O|0)&(g|0)==(D|0))&&(A=k+(c*24|0)|0,j=k+(h*24|0)|0,(i[A>>2]|0)==(i[j>>2]|0)&&(i[A+4>>2]|0)==(i[j+4>>2]|0)))s=_;else{if(p=k+(c*24|0)|0,j=ir(h|0,g|0,c|0,l|0)|0,A=T()|0,m=G(j|0,A|0,-1,-1)|0,l=T()|0,(A|0)>0|!(A|0)&j>>>0>1){if(s=$n(m<<3)|0,!s)break;d=0,f=0;do j=d,d=G(d|0,f|0,1,0)|0,f=T()|0,w=p+(d*24|0)+16|0,A=i[w+4>>2]|0,j=s+(j<<3)|0,i[j>>2]=i[w>>2],i[j+4>>2]=A;while((f|0)<(l|0)|(f|0)==(l|0)&d>>>0<m>>>0)}else s=0;A=k+(c*24|0)+16|0,j=i[A+4>>2]|0,l=e+(u*24|0)+8|0,i[l>>2]=i[A>>2],i[l+4>>2]=j,i[e+(u*24|0)+16>>2]=m,i[e+(u*24|0)+20>>2]=s,a[e+(u*24|0)>>3]=+a[k+(c*24|0)+8>>3],u=G(u|0,_|0,1,0)|0,c=h,l=g,s=T()|0}if(j=h,h=G(h|0,g|0,1,0)|0,A=g,g=T()|0,(A|0)<(D|0)|(A|0)==(D|0)&j>>>0<O>>>0)_=s;else break g}if((_|0)>0|!(_|0)&u>>>0>0){s=0,l=0;do c=i[e+(s*24|0)+20>>2]|0,c|0&&W(c),s=G(s|0,l|0,1,0)|0,l=T()|0;while((l|0)<(_|0)|(l|0)==(_|0)&s>>>0<u>>>0)}W(e),j=152;break f}while(0);if(Wn(e,y,24,3),s=$n(y<<4)|0,l=o+4|0,i[l>>2]=s,s){i[o>>2]=y;do if((v|0)>0|!(v|0)&y>>>0>0){if(o=e+8|0,i[s>>2]=i[o>>2],i[s+4>>2]=i[o+4>>2],i[s+8>>2]=i[o+8>>2],i[s+12>>2]=i[o+12>>2],(y|0)==1&!(v|0)||(o=s+16|0,j=e+32|0,i[o>>2]=i[j>>2],i[o+4>>2]=i[j+4>>2],i[o+8>>2]=i[j+8>>2],i[o+12>>2]=i[j+12>>2],!((v|0)>0|!(v|0)&y>>>0>2)))break;s=2,c=0;do o=(i[l>>2]|0)+(s<<4)|0,j=e+(s*24|0)+8|0,i[o>>2]=i[j>>2],i[o+4>>2]=i[j+4>>2],i[o+8>>2]=i[j+8>>2],i[o+12>>2]=i[j+12>>2],s=G(s|0,c|0,1,0)|0,c=T()|0;while((c|0)<(v|0)|(c|0)==(v|0)&s>>>0<y>>>0)}while(0);W(e),j=158;break}if((v|0)>0|!(v|0)&y>>>0>0){s=0,l=0;do c=i[e+(s*24|0)+20>>2]|0,c|0&&W(c),s=G(s|0,l|0,1,0)|0,l=T()|0;while((l|0)<(v|0)|(l|0)==(v|0)&s>>>0<y>>>0)}W(e),j=152;break}j=152}while(0);if((j|0)==158)return W(N),W(P),W(k),P=0,M=F,P|0;if((j|0)==152&&(D|0)>0|!(D|0)&O>>>0>0)for(u=0,d=0,s=O,l=D;c=i[k+(u*24|0)+20>>2]|0,c?(W(c),c=D,s=O):c=l,u=G(u|0,d|0,1,0)|0,d=T()|0,(d|0)<(c|0)|(d|0)==(c|0)&u>>>0<s>>>0;)l=c;return W(k),W(N),W(P),P=13,M=F,P|0}while(0);return W(N),W(P),P=13,M=F,P|0}return(j|0)==159?(M=F,s|0):0}function U(e,t){e|=0,t|=0;var n=0,r=0;return r=e,e=i[r>>2]|0,r=i[r+4>>2]|0,n=t,t=i[n>>2]|0,n=i[n+4>>2]|0,(r>>>0<n>>>0|(r|0)==(n|0)&e>>>0<t>>>0?-1:(r>>>0>n>>>0|(r|0)==(n|0)&e>>>0>t>>>0)&1)|0}function Ie(e){e|=0;var t=0,n=0;return t=e+20|0,n=i[t>>2]|0,(n|0)==(e|0)?e|0:(n=Ie(n)|0,i[t>>2]=n,n|0)}function Le(e,t){e|=0,t|=0;var n=0,r=0,o=0,s=0,c=0,l=0;return l=e,c=i[l>>2]|0,l=i[l+4>>2]|0,s=t,o=i[s>>2]|0,s=i[s+4>>2]|0,l>>>0<s>>>0|(l|0)==(s|0)&c>>>0<o>>>0?(t=-1,t|0):l>>>0>s>>>0|(l|0)==(s|0)&c>>>0>o>>>0?(t=1,t|0):(r=+a[e+8>>3],n=+a[t+8>>3],r<n?(t=-1,t|0):(t=r>n&1,t|0))}function Re(e,t){e|=0,t|=0;var n=0,r=0;return r=+a[e>>3],n=+a[t>>3],(r>n?-1:r<n&1)|0}function ze(e,t,n,r,a){e|=0,t|=0,n|=0,r|=0,a|=0;var o=0,s=0,c=0,l=0,u=0,d=0,f=0;if(f=M,M=M+64|0,d=f,c=f+56|0,!(!0&(t&2013265920)==134217728&(!0&(r&2013265920)==134217728)))return a=5,M=f,a|0;if((e|0)==(n|0)&(t|0)==(r|0))return i[a>>2]=0,a=0,M=f,a|0;if(s=K(e|0,t|0,52)|0,T()|0,s&=15,u=K(n|0,r|0,52)|0,T()|0,(s|0)!=(u&15))return a=12,M=f,a|0;if(o=s+-1|0,s>>>0>1){ut(e,t,o,d)|0,ut(n,r,o,c)|0,u=d,l=i[u>>2]|0,u=i[u+4>>2]|0;a:do if((l|0)==(i[c>>2]|0)&&(u|0)==(i[c+4>>2]|0)){s=(s^15)*3|0,o=K(e|0,t|0,s|0)|0,T()|0,o&=7,s=K(n|0,r|0,s|0)|0,T()|0,s&=7;do if(!(o|0)|!(s|0))i[a>>2]=1,o=0;else if((o|0)==7)o=5;else{if((o|0)==1|(s|0)==1&&ft(l,u)|0){o=5;break}if((i[15824+(o<<2)>>2]|0)!=(s|0)&&(i[15856+(o<<2)>>2]|0)!=(s|0))break a;i[a>>2]=1,o=0}while(0);return a=o,M=f,a|0}while(0)}o=d,s=o+56|0;do i[o>>2]=0,o=o+4|0;while((o|0)<(s|0));return R(e,t,1,d)|0,t=d,((i[t>>2]|0)!=(n|0)||(i[t+4>>2]|0)!=(r|0))&&(t=d+8|0,(i[t>>2]|0)!=(n|0)||(i[t+4>>2]|0)!=(r|0))&&(t=d+16|0,(i[t>>2]|0)!=(n|0)||(i[t+4>>2]|0)!=(r|0))&&(t=d+24|0,(i[t>>2]|0)!=(n|0)||(i[t+4>>2]|0)!=(r|0))&&(t=d+32|0,(i[t>>2]|0)!=(n|0)||(i[t+4>>2]|0)!=(r|0))&&(t=d+40|0,(i[t>>2]|0)!=(n|0)||(i[t+4>>2]|0)!=(r|0))?(o=d+48|0,o=((i[o>>2]|0)==(n|0)?(i[o+4>>2]|0)==(r|0):0)&1):o=1,i[a>>2]=o,a=0,M=f,a|0}function Be(e,t,n,r,a){return e|=0,t|=0,n|=0,r|=0,a|=0,n=se(e,t,n,r)|0,(n|0)==7?(a=11,a|0):(r=q(n|0,0,56)|0,t=t&-2130706433|T()|268435456,i[a>>2]=e|r,i[a+4>>2]=t,a=0,a|0)}function Ve(e,t,n){return e|=0,t|=0,n|=0,!0&(t&2013265920)==268435456?(i[n>>2]=e,i[n+4>>2]=t&-2130706433|134217728,n=0,n|0):(n=6,n|0)}function He(e,t,n){e|=0,t|=0,n|=0;var r=0,a=0,o=0;return a=M,M=M+16|0,r=a,i[r>>2]=0,!0&(t&2013265920)==268435456?(o=K(e|0,t|0,56)|0,T()|0,r=z(e,t&-2130706433|134217728,o&7,r,n)|0,M=a,r|0):(r=6,M=a,r|0)}function Ue(e,t){e|=0,t|=0;var n=0;switch(n=K(e|0,t|0,56)|0,T()|0,n&7){case 0:case 7:return n=0,n|0}return n=t&-2130706433|134217728,!(!0&(t&2013265920)==268435456)||!0&(t&117440512)==16777216&!!(ft(e,n)|0)?(n=0,n|0):(n=st(e,n)|0,n|0)}function We(e,t,n){e|=0,t|=0,n|=0;var r=0,a=0,o=0,s=0;return a=M,M=M+16|0,r=a,!0&(t&2013265920)==268435456?(o=t&-2130706433|134217728,s=n,i[s>>2]=e,i[s+4>>2]=o,i[r>>2]=0,t=K(e|0,t|0,56)|0,T()|0,r=z(e,o,t&7,r,n+8|0)|0,M=a,r|0):(r=6,M=a,r|0)}function Ge(e,t,n){e|=0,t|=0,n|=0;var r=0,a=0;return a=!(ft(e,t)|0),t&=-2130706433,r=n,i[r>>2]=a?e:0,i[r+4>>2]=a?t|285212672:0,r=n+8|0,i[r>>2]=e,i[r+4>>2]=t|301989888,r=n+16|0,i[r>>2]=e,i[r+4>>2]=t|318767104,r=n+24|0,i[r>>2]=e,i[r+4>>2]=t|335544320,r=n+32|0,i[r>>2]=e,i[r+4>>2]=t|352321536,n=n+40|0,i[n>>2]=e,i[n+4>>2]=t|369098752,0}function Ke(e,t,n){e|=0,t|=0,n|=0;var r=0,a=0,o=0,s=0;return s=M,M=M+16|0,a=s,o=t&-2130706433|134217728,!0&(t&2013265920)==268435456?(r=K(e|0,t|0,56)|0,T()|0,r=Ln(e,o,r&7)|0,(r|0)==-1?(i[n>>2]=0,o=6,M=s,o|0):(kt(e,o,a)|0&&E(27634,27035,282,27050),t=K(e|0,t|0,52)|0,T()|0,t&=15,ft(e,o)|0?Ze(a,t,r,2,n):tt(a,t,r,2,n),o=0,M=s,o|0)):(o=6,M=s,o|0)}function qe(e,t,n){e|=0,t|=0,n|=0;var r=0,a=0,o=0,s=0;return s=M,M=M+16|0,r=s+8|0,a=s,o=t&-2130706433|134217728,!0&(t&2013265920)==268435456?(i[r>>2]=0,t=K(e|0,t|0,56)|0,T()|0,t=z(e,o,t&7,r,a)|0,t|0?(n=t,M=s,n|0):(r=i[a>>2]|0,a=i[a+4>>2]|0,t=se(r,a,e,o)|0,(t|0)==7?(n=11,M=s,n|0):(e=q(t|0,0,56)|0,o=a&-2130706433|T()|268435456,i[n>>2]=r|e,i[n+4>>2]=o,n=0,M=s,n|0))):(n=6,M=s,n|0)}function Je(e,t,n){e|=0,t|=0,n|=0;var r=0,o=0,s=0,c=0,h=0,g=0,v=0,y=0,b=0,x=0,S=0,C=0,w=0,E=0,D=0,O=0,k=0,A=0,j=0;i[n>>2]=0,v=+a[e>>3],y=+a[e+8>>3],g=+a[e+16>>3],o=0,s=5,r=5,e=0;do w=+a[15888+(o*24|0)>>3]-v,C=+a[15888+(o*24|0)+8>>3]-y,c=+a[15888+(o*24|0)+16>>3]-g,c=w*w+C*C+c*c,c<r&&(i[n>>2]=o,s=c,e=o,r=c),o=o+1|0;while((o|0)!=20);if(s=+m(+(1-s*.5)),s<1e-16)g=0,c=0;else{if(A=+a[16368+(e*24|0)>>3],O=+a[15888+(e*24|0)>>3],k=+a[15888+(e*24|0)+8>>3],D=+a[15888+(e*24|0)+16>>3],j=-(D+(O*0+k*0)),c=O*j+0,w=k*j+0,j=D*j+1,E=+u(+(j*j+(c*c+w*w))),E=E>0?1/E:0,c*=E,w*=E,E=j*E,j=-(v*O+y*k+g*D),C=v+O*j,r=y+k*j,v=g+D*j,y=+u(+(v*v+(C*C+r*r))),y=y>0?1/y:0,C*=y,r*=y,y=v*y,r=+Vt(A-+Vt(+_(+(y*(k*c-O*w)+(C*(D*w-k*E)+r*(O*E-D*c))),+(E*y+(c*C+w*r))))),c=Et(t)|0?+Vt(r+-.3334731722518321):r,r=p(+s)*2.618033988749896,(t|0)>0){e=0;do r*=2.6457513110645907,e=e+1|0;while((e|0)!=(t|0))}g=+d(+c)*r,c=+f(+c)*r}t=n+4|0,S=n+12|0,i[S>>2]=0,s=l(+c)*1.1547005383792515,r=+l(+g)+s*.5,e=~~r,o=~~s,r-=+(e|0),s-=+(o|0);do if(r<.5){if(r<.3333333333333333){if(i[t>>2]=e,s<(r+1)*.5){i[n+8>>2]=o;break}o=o+1|0,i[n+8>>2]=o;break}if(j=1-r,o=(!(s<j)&1)+o|0,i[n+8>>2]=o,j<=s&s<r*2){e=e+1|0,i[t>>2]=e;break}i[t>>2]=e;break}else{if(!(r<.6666666666666666)){if(e=e+1|0,i[t>>2]=e,s<r*.5){i[n+8>>2]=o;break}o=o+1|0,i[n+8>>2]=o;break}if(s<1-r){if(i[n+8>>2]=o,r*2+-1<s){i[t>>2]=e;break}}else o=o+1|0,i[n+8>>2]=o;e=e+1|0,i[t>>2]=e}while(0);do if(g<0){if(o&1){x=(o+1|0)/2|0,x=ir(e|0,((e|0)<0)<<31>>31,x|0,((x|0)<0)<<31>>31)|0,e=~~(+(e|0)-((+(x>>>0)+4294967296*(T()|0))*2+1)),i[t>>2]=e,x=t;break}x=(o|0)/2|0,x=ir(e|0,((e|0)<0)<<31>>31,x|0,((x|0)<0)<<31>>31)|0,e=~~(+(e|0)-(+(x>>>0)+4294967296*(T()|0))*2),i[t>>2]=e,x=t;break}else x=t;while(0);b=n+8|0,t=0-o|0,c<0?(n=e-((o<<1|1)/2|0)|0,i[x>>2]=n,i[b>>2]=t,o=t):n=e,e=o-n|0,t=0-n|0,(n|0)<0?(i[b>>2]=e,i[S>>2]=t,i[x>>2]=0,h=0):(e=o,h=n,t=0),n=h-e|0,o=t-e|0,(e|0)<0?(i[x>>2]=n,i[S>>2]=o,i[b>>2]=0,h=n,e=0):o=t,n=h-o|0,t=e-o|0,(o|0)<0?(i[x>>2]=n,i[b>>2]=t,i[S>>2]=0,o=0):(t=e,n=h),e=(t|0)<(n|0)?t:n,e=(o|0)<(e|0)?o:e,(e|0)<=0||(i[x>>2]=n-e,i[b>>2]=t-e,i[S>>2]=o-e)}function Ye(e,t,n){e|=0,t|=0,n|=0;var r=0,o=0,s=0,c=0;r=M,M=M+16|0,o=r,c=i[e+12>>2]|0,s=+((i[e+8>>2]|0)-c|0),a[o>>3]=+((i[e+4>>2]|0)-c|0)-s*.5,a[o+8>>3]=s*.8660254037844386,Xe(o,i[e>>2]|0,t,0,n),M=r}function Xe(e,t,n,r,o){e|=0,t|=0,n|=0,r|=0,o|=0;var s=0,c=0,l=0,p=0,m=0,h=0,v=0,y=0,b=0,x=0,S=0,C=0;if(s=+Pn(e),s<1e-16)t=15888+(t*24|0)|0,i[o>>2]=i[t>>2],i[o+4>>2]=i[t+4>>2],i[o+8>>2]=i[t+8>>2],i[o+12>>2]=i[t+12>>2],i[o+16>>2]=i[t+16>>2],i[o+20>>2]=i[t+20>>2];else{if(c=+_(+ +a[e+8>>3],+ +a[e>>3]),(n|0)>0){e=0;do s*=.37796447300922725,e=e+1|0;while((e|0)!=(n|0))}l=s*.3333333333333333,r?(n=!(Et(n)|0),s=+g(+((n?l:l*.37796447300922725)*.381966011250105))):(s=+g(+(s*.381966011250105)),Et(n)|0&&(c=+Vt(c+.3334731722518321))),v=+Vt(+a[16368+(t*24|0)>>3]-c),l=+a[15888+(t*24|0)>>3],h=+a[15888+(t*24|0)+8>>3],S=+a[15888+(t*24|0)+16>>3],b=-(S+(l*0+h*0)),m=l*b+0,c=h*b+0,b=S*b+1,y=+u(+(b*b+(m*m+c*c))),y=y>0?1/y:0,m*=y,c*=y,y=b*y,b=+d(+v),v=+f(+v),C=+d(+s),x=+f(+s),p=C*l+x*(b*m+v*(S*c-h*y)),s=C*h+x*(b*c+v*(l*y-S*m)),c=C*S+x*(b*y+v*(h*m-l*c)),l=+u(+(c*c+(p*p+s*s))),l=l>0?1/l:0,a[o>>3]=p*l,a[o+8>>3]=s*l,a[o+16>>3]=c*l}}function Ze(e,t,n,r,o){e|=0,t|=0,n|=0,r|=0,o|=0;var s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0,g=0,v=0,b=0,x=0,S=0,C=0,w=0,T=0,D=0,O=0,k=0,A=0,j=0,N=0,P=0,F=0,I=0,L=0,ee=0,R=0,te=0,ne=0,re=0,z=0,ie=0,ae=0,oe=0,se=0,ce=0,B=0,le=0,V=0,H=0,ue=0;if(se=M,M=M+256|0,s=se+240|0,L=se+224|0,ie=se,ae=se+208|0,oe=se+192|0,ee=se+168|0,R=se+152|0,te=se+136|0,ne=se+120|0,re=se+104|0,z=se+80|0,i[s>>2]=t,i[L>>2]=i[e>>2],i[L+4>>2]=i[e+4>>2],i[L+8>>2]=i[e+8>>2],i[L+12>>2]=i[e+12>>2],Qe(L,s,ie),i[o>>2]=0,L=r+n+((r|0)==5&1)|0,(L|0)<=(n|0))M=se;else{T=i[s>>2]|0,w=ae+4|0,S=ae+8|0,C=ae+12|0,D=oe+8|0,O=n+5|0,k=16848+(T<<2)|0,A=ee+8|0,j=16928+(T<<2)|0,N=R+8|0,P=te+8|0,F=ne+8|0,I=oe+8|0,g=ee+8|0,b=ee+16|0,v=z+8|0,x=z+16|0,m=n,r=0,c=0,l=0,u=0;a:for(;;){p=ie+(((m|0)%5|0)<<4)|0,i[ae>>2]=i[p>>2],i[ae+4>>2]=i[p+4>>2],i[ae+8>>2]=i[p+8>>2],i[ae+12>>2]=i[p+12>>2];do;while(($e(ae,T,0,1)|0)==2);if((m|0)>(n|0)&!!(Et(t)|0)){if(p=i[ae>>2]|0,e=i[w>>2]|0,d=i[S>>2]|0,s=i[C>>2]|0,ce=+(l-u|0),a[oe>>3]=+(c-u|0)-ce*.5,a[D>>3]=ce*.8660254037844386,u=i[17008+(p*80|0)+(r<<2)>>2]|0,f=i[18608+(p*80|0)+(u*20|0)>>2]|0,l=i[18608+(p*80|0)+(u*20|0)+16>>2]|0,(l|0)>0){c=0,r=d;do V=s+e|0,H=(V|0)<0,d=r+e-(H?V:0)|0,le=(d|0)<0,B=s+r-(H?V:0)-(le?d:0)|0,s=(B|0)<0,e=(H?0:V)-(le?d:0)-(s?B:0)|0,r=(le?0:d)-(s?B:0)|0,B=s?0:B,s=(r|0)<(e|0)?r:e,s=(B|0)<(s|0)?B:s,d=(s|0)>0,e=e-(d?s:0)|0,r=r-(d?s:0)|0,s=B-(d?s:0)|0,c=c+1|0;while((c|0)<(l|0))}else r=d;switch(H=(i[k>>2]|0)*3|0,B=(y(H,i[18608+(p*80|0)+(u*20|0)+4>>2]|0)|0)+e|0,d=(y(H,i[18608+(p*80|0)+(u*20|0)+8>>2]|0)|0)+r|0,H=(y(H,i[18608+(p*80|0)+(u*20|0)+12>>2]|0)|0)+s|0,u=(B|0)<0,d=d-(u?B:0)|0,le=(d|0)<0,H=H+(u?0-B|0:0)+(le?0-d|0:0)|0,V=(H|0)<0,B=(u?0:B)-(le?d:0)-(V?H:0)|0,d=(le?0:d)-(V?H:0)|0,H=V?0:H,V=(d|0)<(B|0)?d:B,V=(H|0)<(V|0)?H:V,le=(V|0)>0,H=H-(le?V:0)|0,ce=+(d-(le?V:0)-H|0),a[ee>>3]=+(B-(le?V:0)-H|0)-ce*.5,a[A>>3]=ce*.8660254037844386,ce=+(i[j>>2]|0),a[R>>3]=ce*3,a[N>>3]=0,ue=ce*-1.5,a[te>>3]=ue,a[P>>3]=ce*2.598076211353316,a[ne>>3]=ue,a[F>>3]=ce*-2.598076211353316,i[17008+(f*80|0)+(p<<2)>>2]|0){case 1:e=te,r=R;break;case 3:e=ne,r=te;break;case 2:e=R,r=ne;break;default:e=12;break a}Fn(oe,ee,r,e,re),Xe(re,f,T,1,z),H=i[o>>2]|0,ce=+h(+ +a[x>>3]),ue=+_(+ +a[v>>3],+ +a[z>>3]),a[o+8+(H<<4)>>3]=ce,a[o+8+(H<<4)+8>>3]=ue,i[o>>2]=(i[o>>2]|0)+1}if((m|0)<(O|0)&&(H=i[C>>2]|0,ce=+((i[S>>2]|0)-H|0),a[oe>>3]=+((i[w>>2]|0)-H|0)-ce*.5,a[I>>3]=ce*.8660254037844386,Xe(oe,i[ae>>2]|0,T,1,ee),H=i[o>>2]|0,ce=+h(+ +a[b>>3]),ue=+_(+ +a[g>>3],+ +a[ee>>3]),a[o+8+(H<<4)>>3]=ce,a[o+8+(H<<4)+8>>3]=ue,i[o>>2]=(i[o>>2]|0)+1),m=m+1|0,(m|0)>=(L|0)){e=3;break}r=i[ae>>2]|0,c=i[w>>2]|0,l=i[S>>2]|0,u=i[C>>2]|0}(e|0)==3?M=se:(e|0)==12&&E(27073,27120,599,27130)}}function Qe(e,t,n){e|=0,t|=0,n|=0;var r=0,a=0,o=0,s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0;h=M,M=M+128|0,r=h+64|0,a=h,o=r,s=20208,c=o+60|0;do i[o>>2]=i[s>>2],o=o+4|0,s=s+4|0;while((o|0)<(c|0));o=a,s=20272,c=o+60|0;do i[o>>2]=i[s>>2],o=o+4|0,s=s+4|0;while((o|0)<(c|0));d=!(Et(i[t>>2]|0)|0),d=d?r:a,m=e+4|0,o=i[m>>2]|0,f=e+8|0,r=i[f>>2]|0,p=e+12|0,a=i[p>>2]|0,s=r+(o<<1)|0,i[m>>2]=s,r=a+(r<<1)|0,i[f>>2]=r,o=(a<<1)+o|0,i[p>>2]=o,a=r-s|0,c=o-s|0,(s|0)<0&&(i[f>>2]=a,i[p>>2]=c,i[m>>2]=0,r=a,s=0,o=c),c=s-r|0,a=o-r|0,(r|0)<0?(i[m>>2]=c,i[p>>2]=a,i[f>>2]=0,r=0):(a=o,c=s),s=c-a|0,o=r-a|0,(a|0)<0?(i[m>>2]=s,i[f>>2]=o,i[p>>2]=0,a=0):(o=r,s=c),r=(o|0)<(s|0)?o:s,r=(a|0)<(r|0)?a:r,(r|0)>0&&(a=a-r|0,o=o-r|0,s=s-r|0,i[m>>2]=s,i[f>>2]=o,i[p>>2]=a),l=(o<<1)+s|0,c=a+(s<<1)|0,i[m>>2]=c,i[f>>2]=l,o=(a<<1)+o|0,i[p>>2]=o,r=l-c|0,a=o-c|0,(c|0)<0?(i[f>>2]=r,i[p>>2]=a,i[m>>2]=0,c=0,o=a):r=l,s=c-r|0,a=o-r|0,(r|0)<0?(i[m>>2]=s,i[p>>2]=a,i[f>>2]=0,c=s,r=0):a=o,s=c-a|0,o=r-a|0,(a|0)<0?(i[m>>2]=s,i[f>>2]=o,i[p>>2]=0,a=0):(o=r,s=c),r=(o|0)<(s|0)?o:s,r=(a|0)<(r|0)?a:r,(r|0)>0&&(i[m>>2]=s-r,i[f>>2]=o-r,i[p>>2]=a-r),Et(i[t>>2]|0)|0&&(o=i[m>>2]|0,s=i[f>>2]|0,a=i[p>>2]|0,r=(s*3|0)+o|0,o=a+(o*3|0)|0,i[m>>2]=o,i[f>>2]=r,s=(a*3|0)+s|0,i[p>>2]=s,a=r-o|0,c=s-o|0,(o|0)<0?(i[f>>2]=a,i[p>>2]=c,i[m>>2]=0,r=a,l=0):(l=o,c=s),o=l-r|0,a=c-r|0,(r|0)<0?(i[m>>2]=o,i[p>>2]=a,i[f>>2]=0,l=o,s=0):(s=r,a=c),o=l-a|0,r=s-a|0,(a|0)<0?(i[m>>2]=o,i[f>>2]=r,i[p>>2]=0,s=r,a=0):o=l,r=(s|0)<(o|0)?s:o,r=(a|0)<(r|0)?a:r,(r|0)>0&&(i[m>>2]=o-r,i[f>>2]=s-r,i[p>>2]=a-r),i[t>>2]=(i[t>>2]|0)+1),i[n>>2]=i[e>>2],a=i[f>>2]|0,r=i[p>>2]|0,t=i[d+4>>2]|0,u=i[d+8>>2]|0,s=(i[d>>2]|0)+(i[m>>2]|0)|0,l=n+4|0,i[l>>2]=s,a=t+a|0,t=n+8|0,i[t>>2]=a,r=u+r|0,u=n+12|0,i[u>>2]=r,o=a-s|0,(s|0)<0&&(r=r-s|0,i[t>>2]=o,i[u>>2]=r,i[l>>2]=0,a=o,s=0),(a|0)<0&&(s=s-a|0,i[l>>2]=s,r=r-a|0,i[u>>2]=r,i[t>>2]=0,a=0),c=s-r|0,o=a-r|0,(r|0)<0?(i[l>>2]=c,i[t>>2]=o,i[u>>2]=0,s=c,r=0):o=a,a=(o|0)<(s|0)?o:s,a=(r|0)<(a|0)?r:a,(a|0)>0&&(i[l>>2]=s-a,i[t>>2]=o-a,i[u>>2]=r-a),i[n+16>>2]=i[e>>2],a=i[f>>2]|0,r=i[p>>2]|0,t=i[d+16>>2]|0,u=i[d+20>>2]|0,s=(i[d+12>>2]|0)+(i[m>>2]|0)|0,l=n+20|0,i[l>>2]=s,a=t+a|0,t=n+24|0,i[t>>2]=a,r=u+r|0,u=n+28|0,i[u>>2]=r,o=a-s|0,(s|0)<0&&(r=r-s|0,i[t>>2]=o,i[u>>2]=r,i[l>>2]=0,a=o,s=0),(a|0)<0&&(s=s-a|0,i[l>>2]=s,r=r-a|0,i[u>>2]=r,i[t>>2]=0,a=0),c=s-r|0,o=a-r|0,(r|0)<0?(i[l>>2]=c,i[t>>2]=o,i[u>>2]=0,s=c,r=0):o=a,a=(o|0)<(s|0)?o:s,a=(r|0)<(a|0)?r:a,(a|0)>0&&(i[l>>2]=s-a,i[t>>2]=o-a,i[u>>2]=r-a),i[n+32>>2]=i[e>>2],a=i[f>>2]|0,r=i[p>>2]|0,t=i[d+28>>2]|0,u=i[d+32>>2]|0,s=(i[d+24>>2]|0)+(i[m>>2]|0)|0,l=n+36|0,i[l>>2]=s,a=t+a|0,t=n+40|0,i[t>>2]=a,r=u+r|0,u=n+44|0,i[u>>2]=r,o=a-s|0,(s|0)<0&&(r=r-s|0,i[t>>2]=o,i[u>>2]=r,i[l>>2]=0,a=o,s=0),(a|0)<0&&(s=s-a|0,i[l>>2]=s,r=r-a|0,i[u>>2]=r,i[t>>2]=0,a=0),c=s-r|0,o=a-r|0,(r|0)<0?(i[l>>2]=c,i[t>>2]=o,i[u>>2]=0,s=c,r=0):o=a,a=(o|0)<(s|0)?o:s,a=(r|0)<(a|0)?r:a,(a|0)>0&&(i[l>>2]=s-a,i[t>>2]=o-a,i[u>>2]=r-a),i[n+48>>2]=i[e>>2],a=i[f>>2]|0,r=i[p>>2]|0,t=i[d+40>>2]|0,u=i[d+44>>2]|0,s=(i[d+36>>2]|0)+(i[m>>2]|0)|0,l=n+52|0,i[l>>2]=s,a=t+a|0,t=n+56|0,i[t>>2]=a,r=u+r|0,u=n+60|0,i[u>>2]=r,o=a-s|0,(s|0)<0&&(r=r-s|0,i[t>>2]=o,i[u>>2]=r,i[l>>2]=0,a=o,s=0),(a|0)<0&&(s=s-a|0,i[l>>2]=s,r=r-a|0,i[u>>2]=r,i[t>>2]=0,a=0),c=s-r|0,o=a-r|0,(r|0)<0?(i[l>>2]=c,i[t>>2]=o,i[u>>2]=0,s=c,r=0):o=a,a=(o|0)<(s|0)?o:s,a=(r|0)<(a|0)?r:a,(a|0)>0&&(i[l>>2]=s-a,i[t>>2]=o-a,i[u>>2]=r-a),i[n+64>>2]=i[e>>2],o=i[f>>2]|0,r=i[p>>2]|0,u=i[d+52>>2]|0,l=i[d+56>>2]|0,s=(i[d+48>>2]|0)+(i[m>>2]|0)|0,t=n+68|0,i[t>>2]=s,o=u+o|0,u=n+72|0,i[u>>2]=o,r=l+r|0,l=n+76|0,i[l>>2]=r,a=o-s|0,(s|0)<0?(r=r-s|0,i[u>>2]=a,i[l>>2]=r,i[t>>2]=0,o=0):(a=o,o=s),(a|0)<0&&(o=o-a|0,i[t>>2]=o,r=r-a|0,i[l>>2]=r,i[u>>2]=0,a=0),c=o-r|0,s=a-r|0,(r|0)<0?(i[t>>2]=c,i[u>>2]=s,i[l>>2]=0,o=c,r=0):s=a,a=(s|0)<(o|0)?s:o,a=(r|0)<(a|0)?r:a,(a|0)<=0||(i[t>>2]=o-a,i[u>>2]=s-a,i[l>>2]=r-a),M=h}function $e(e,t,n,r){e|=0,t|=0,n|=0,r|=0;var a=0,o=0,s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;if(p=i[16928+(t<<2)>>2]|0,f=!!(r|0),p=f?p*3|0:p,d=e+4|0,c=i[d>>2]|0,u=e+8|0,o=i[u>>2]|0,f){if(s=e+12|0,r=i[s>>2]|0,a=o+c+r|0,(a|0)==(p|0))return p=1,p|0;l=s}else l=e+12|0,a=i[l>>2]|0,r=a,a=o+c+a|0;if((a|0)<=(p|0))return p=0,p|0;do if((r|0)>0){if(a=i[e>>2]|0,(o|0)>0){a=18608+(a*80|0)+60|0,s=c;break}a=18608+(a*80|0)+40|0,n?(s=c-p|0,n=o+s|0,m=(n|0)<0,o=r+o-(m?n:0)|0,c=(o|0)<0,r=r+s-(m?n:0)-(c?o:0)|0,s=(r|0)<0,n=(m?0:n)-(c?o:0)-(s?r:0)|0,o=(c?0:o)-(s?r:0)|0,r=s?0:r,s=(o|0)<(n|0)?o:n,s=(r|0)<(s|0)?r:s,c=(s|0)>0,o=o-(c?s:0)|0,r=r-(c?s:0)|0,s=n-(c?s:0)+p|0,i[d>>2]=s,i[u>>2]=o,i[l>>2]=r):s=c}else a=18608+((i[e>>2]|0)*80|0)+20|0,s=c;while(0);if(i[e>>2]=i[a>>2],c=i[a+16>>2]|0,(c|0)>0){n=0;do m=r+s|0,h=(m|0)<0,v=h?m:0,g=o+s-v|0,_=(g|0)<0,e=_?g:0,s=r+o-v-e|0,o=(s|0)<0,r=o?0:s,s=o?s:0,o=(_?0:g)-s|0,s=(h?0:m)-e-s|0,e=(o|0)<(s|0)?o:s,e=(r|0)<(e|0)?r:e,(e|0)>0&&(s=s-e|0,o=o-e|0,r=r-e|0),n=n+1|0;while((n|0)<(c|0));i[d>>2]=s,i[u>>2]=o,i[l>>2]=r}return g=i[16848+(t<<2)>>2]|0,g=f?g*3|0:g,_=y(g,i[a+8>>2]|0)|0,v=y(g,i[a+12>>2]|0)|0,s=(y(g,i[a+4>>2]|0)|0)+s|0,i[d>>2]=s,o=_+o|0,i[u>>2]=o,r=v+r|0,i[l>>2]=r,a=o-s|0,(s|0)<0?(r=r-s|0,i[u>>2]=a,i[l>>2]=r,i[d>>2]=0,o=0):(a=o,o=s),(a|0)<0?(e=o-a|0,i[d>>2]=e,r=r-a|0,i[l>>2]=r,i[u>>2]=0,s=0):(e=o,s=a),o=e-r|0,a=s-r|0,(r|0)<0?(i[d>>2]=o,i[u>>2]=a,i[l>>2]=0,r=0):(a=s,o=e),s=(a|0)<(o|0)?a:o,s=(r|0)<(s|0)?r:s,(s|0)>0&&(o=o-s|0,a=a-s|0,r=r-s|0,i[d>>2]=o,i[u>>2]=a,i[l>>2]=r),f?(v=(a+o+r|0)==(p|0)?1:2,v|0):(v=2,v|0)}function et(e,t){e|=0,t|=0;var n=0;do n=$e(e,t,0,1)|0;while((n|0)==2);return n|0}function tt(e,t,n,r,o){e|=0,t|=0,n|=0,r|=0,o|=0;var s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0,g=0,v=0,y=0,b=0,x=0,S=0,C=0,w=0,T=0,D=0,O=0,k=0,A=0,j=0,N=0,P=0,F=0,I=0,L=0,ee=0,R=0,te=0,ne=0,re=0,z=0,ie=0,ae=0;if(re=M,M=M+272|0,s=re+256|0,c=re+240|0,R=re,te=re+224|0,ne=re+208|0,j=re+184|0,N=re+168|0,P=re+152|0,F=re+136|0,I=re+120|0,L=re+96|0,i[s>>2]=t,i[c>>2]=i[e>>2],i[c+4>>2]=i[e+4>>2],i[c+8>>2]=i[e+8>>2],i[c+12>>2]=i[e+12>>2],nt(c,s,R),i[o>>2]=0,A=r+n+((r|0)==6&1)|0,(A|0)<=(n|0))M=re;else{x=i[s>>2]|0,S=n+6|0,C=ne+8|0,w=j+8|0,T=16928+(x<<2)|0,D=N+8|0,O=P+8|0,k=F+8|0,y=i[c>>2]|0,m=te+4|0,g=te+8|0,v=te+12|0,b=ne+8|0,u=j+8|0,f=j+16|0,d=L+8|0,p=L+16|0,c=0,l=n,r=-1;a:for(;;){if(s=(l|0)%6|0,e=R+(s<<4)|0,i[te>>2]=i[e>>2],i[te+4>>2]=i[e+4>>2],i[te+8>>2]=i[e+8>>2],i[te+12>>2]=i[e+12>>2],e=c,c=$e(te,x,0,1)|0,(l|0)>(n|0)&!!(Et(t)|0)&&(ee=i[te>>2]|0,(e|0)!=1&(ee|0)!=(r|0))){switch(ae=(s+5|0)%6|0,e=i[R+(ae<<4)+12>>2]|0,z=+((i[R+(ae<<4)+8>>2]|0)-e|0),a[ne>>3]=+((i[R+(ae<<4)+4>>2]|0)-e|0)-z*.5,a[C>>3]=z*.8660254037844386,e=i[R+(s<<4)+12>>2]|0,z=+((i[R+(s<<4)+8>>2]|0)-e|0),a[j>>3]=+((i[R+(s<<4)+4>>2]|0)-e|0)-z*.5,a[w>>3]=z*.8660254037844386,z=+(i[T>>2]|0),a[N>>3]=z*3,a[D>>3]=0,ie=z*-1.5,a[P>>3]=ie,a[O>>3]=z*2.598076211353316,a[F>>3]=ie,a[k>>3]=z*-2.598076211353316,i[17008+(y*80|0)+(((r|0)==(y|0)?ee:r)<<2)>>2]|0){case 1:e=P,r=N;break;case 3:e=F,r=P;break;case 2:e=N,r=F;break;default:e=8;break a}Fn(ne,j,r,e,I),!(In(ne,I)|0)&&!(In(j,I)|0)&&(Xe(I,y,x,1,L),ae=i[o>>2]|0,z=+h(+ +a[p>>3]),ie=+_(+ +a[d>>3],+ +a[L>>3]),a[o+8+(ae<<4)>>3]=z,a[o+8+(ae<<4)+8>>3]=ie,i[o>>2]=(i[o>>2]|0)+1)}if((l|0)<(S|0)&&(ae=i[v>>2]|0,z=+((i[g>>2]|0)-ae|0),a[ne>>3]=+((i[m>>2]|0)-ae|0)-z*.5,a[b>>3]=z*.8660254037844386,Xe(ne,i[te>>2]|0,x,1,j),ae=i[o>>2]|0,z=+h(+ +a[f>>3]),ie=+_(+ +a[u>>3],+ +a[j>>3]),a[o+8+(ae<<4)>>3]=z,a[o+8+(ae<<4)+8>>3]=ie,i[o>>2]=(i[o>>2]|0)+1),l=l+1|0,(l|0)>=(A|0)){e=3;break}r=i[te>>2]|0}(e|0)==3?M=re:(e|0)==8&&E(27157,27120,766,27202)}}function nt(e,t,n){e|=0,t|=0,n|=0;var r=0,a=0,o=0,s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0;g=M,M=M+160|0,r=g+80|0,a=g,o=r,s=20336,c=o+72|0;do i[o>>2]=i[s>>2],o=o+4|0,s=s+4|0;while((o|0)<(c|0));o=a,s=20416,c=o+72|0;do i[o>>2]=i[s>>2],o=o+4|0,s=s+4|0;while((o|0)<(c|0));f=!(Et(i[t>>2]|0)|0),f=f?r:a,h=e+4|0,o=i[h>>2]|0,p=e+8|0,r=i[p>>2]|0,m=e+12|0,a=i[m>>2]|0,s=r+(o<<1)|0,i[h>>2]=s,r=a+(r<<1)|0,i[p>>2]=r,o=(a<<1)+o|0,i[m>>2]=o,a=r-s|0,c=o-s|0,(s|0)<0&&(i[p>>2]=a,i[m>>2]=c,i[h>>2]=0,r=a,s=0,o=c),c=s-r|0,a=o-r|0,(r|0)<0?(i[h>>2]=c,i[m>>2]=a,i[p>>2]=0,r=0):(a=o,c=s),s=c-a|0,o=r-a|0,(a|0)<0?(i[h>>2]=s,i[p>>2]=o,i[m>>2]=0,a=0):(o=r,s=c),r=(o|0)<(s|0)?o:s,r=(a|0)<(r|0)?a:r,(r|0)>0&&(a=a-r|0,o=o-r|0,s=s-r|0,i[h>>2]=s,i[p>>2]=o,i[m>>2]=a),l=(o<<1)+s|0,c=a+(s<<1)|0,i[h>>2]=c,i[p>>2]=l,o=(a<<1)+o|0,i[m>>2]=o,r=l-c|0,a=o-c|0,(c|0)<0?(i[p>>2]=r,i[m>>2]=a,i[h>>2]=0,c=0,o=a):r=l,s=c-r|0,a=o-r|0,(r|0)<0?(i[h>>2]=s,i[m>>2]=a,i[p>>2]=0,c=s,r=0):a=o,s=c-a|0,o=r-a|0,(a|0)<0?(i[h>>2]=s,i[p>>2]=o,i[m>>2]=0,a=0):(o=r,s=c),r=(o|0)<(s|0)?o:s,r=(a|0)<(r|0)?a:r,(r|0)>0&&(i[h>>2]=s-r,i[p>>2]=o-r,i[m>>2]=a-r),Et(i[t>>2]|0)|0&&(o=i[h>>2]|0,s=i[p>>2]|0,a=i[m>>2]|0,r=(s*3|0)+o|0,o=a+(o*3|0)|0,i[h>>2]=o,i[p>>2]=r,s=(a*3|0)+s|0,i[m>>2]=s,a=r-o|0,c=s-o|0,(o|0)<0?(i[p>>2]=a,i[m>>2]=c,i[h>>2]=0,r=a,l=0):(l=o,c=s),o=l-r|0,a=c-r|0,(r|0)<0?(i[h>>2]=o,i[m>>2]=a,i[p>>2]=0,l=o,s=0):(s=r,a=c),o=l-a|0,r=s-a|0,(a|0)<0?(i[h>>2]=o,i[p>>2]=r,i[m>>2]=0,s=r,a=0):o=l,r=(s|0)<(o|0)?s:o,r=(a|0)<(r|0)?a:r,(r|0)>0&&(i[h>>2]=o-r,i[p>>2]=s-r,i[m>>2]=a-r),i[t>>2]=(i[t>>2]|0)+1),l=0;do i[n+(l<<4)>>2]=i[e>>2],a=i[p>>2]|0,r=i[m>>2]|0,u=i[f+(l*12|0)+4>>2]|0,d=i[f+(l*12|0)+8>>2]|0,s=(i[f+(l*12|0)>>2]|0)+(i[h>>2]|0)|0,t=n+(l<<4)+4|0,i[t>>2]=s,a=u+a|0,u=n+(l<<4)+8|0,i[u>>2]=a,r=d+r|0,d=n+(l<<4)+12|0,i[d>>2]=r,o=a-s|0,(s|0)<0&&(r=r-s|0,i[u>>2]=o,i[d>>2]=r,i[t>>2]=0,a=o,s=0),(a|0)<0&&(s=s-a|0,i[t>>2]=s,r=r-a|0,i[d>>2]=r,i[u>>2]=0,a=0),c=s-r|0,o=a-r|0,(r|0)<0?(i[t>>2]=c,i[u>>2]=o,i[d>>2]=0,s=c,r=0):o=a,a=(o|0)<(s|0)?o:s,a=(r|0)<(a|0)?r:a,(a|0)>0&&(i[t>>2]=s-a,i[u>>2]=o-a,i[d>>2]=r-a),l=l+1|0;while((l|0)!=6);M=g}function rt(e,t){return e|=0,t|=0,t=K(e|0,t|0,52)|0,T()|0,t&15}function it(e,t){return e|=0,t|=0,t=K(e|0,t|0,45)|0,T()|0,t&127}function at(e,t,n,r){return e|=0,t|=0,n|=0,r|=0,(n+-1|0)>>>0>14?(r=4,r|0):(n=K(e|0,t|0,(15-n|0)*3|0)|0,T()|0,i[r>>2]=n&7,r=0,r|0)}function ot(e,t,n,a){e|=0,t|=0,n|=0,a|=0;var o=0,s=0,c=0,l=0,u=0,d=0;if(e>>>0>15)return a=4,a|0;if(t>>>0>121)return a=17,a|0;c=q(e|0,0,52)|0,o=T()|0,l=q(t|0,0,45)|0,o=o|T()|134225919;a:do if((e|0)>=1){for(l=1,c=!!(r[20496+t|0]|0),s=-1;;){if(t=i[n+(l+-1<<2)>>2]|0,t>>>0>6){o=18,t=10;break}if(!(!(t|0)|c^1)){if((t|0)==1){o=19,t=10;break}c=0}if(d=(15-l|0)*3|0,u=q(7,0,d|0)|0,o&=~(T()|0),t=q(t|0,((t|0)<0)<<31>>31,d|0)|0,s=t|s&~u,o=T()|0|o,(l|0)<(e|0))l=l+1|0;else break a}if((t|0)==10)return o|0}else s=-1;while(0);return d=a,i[d>>2]=s,i[d+4>>2]=o,d=0,d|0}function st(e,t){e|=0,t|=0;var n=0,i=0,a=0,o=0,s=0;return!(!0&(t&-16777216)==134217728)||(i=K(e|0,t|0,52)|0,T()|0,i&=15,n=K(e|0,t|0,45)|0,T()|0,n&=127,n>>>0>121)?(e=0,e|0):(s=(i^15)*3|0,a=K(e|0,t|0,s|0)|0,s=q(a|0,T()|0,s|0)|0,a=T()|0,o=ir(-1227133514,-1171,s|0,a|0)|0,!(!(s&613566756&o)&!(a&4681&(T()|0)))||(s=(i*3|0)+19|0,o=q(~e|0,~t|0,s|0)|0,s=K(o|0,T()|0,s|0)|0,!((i|0)==15|!(s|0)&!(T()|0)))?(s=0,s|0):!(r[20496+n|0]|0)||(t&=8191,!(e|0)&!(t|0))?(s=1,s|0):(s=pr(e|0,t|0,0)|0,T()|0,!!((63-s|0)%3|0)|0))}function ct(e,t){e|=0,t|=0;var n=0,i=0,a=0,o=0,s=0;return!0&(t&-16777216)==134217728&&(i=K(e|0,t|0,52)|0,T()|0,i&=15,n=K(e|0,t|0,45)|0,T()|0,n&=127,n>>>0<=121)&&(s=(i^15)*3|0,a=K(e|0,t|0,s|0)|0,s=q(a|0,T()|0,s|0)|0,a=T()|0,o=ir(-1227133514,-1171,s|0,a|0)|0,!(s&613566756&o)&!(a&4681&(T()|0)))&&(s=(i*3|0)+19|0,o=q(~e|0,~t|0,s|0)|0,s=K(o|0,T()|0,s|0)|0,(i|0)==15|!(s|0)&!(T()|0))&&(!(r[20496+n|0]|0)||(n=t&8191,!(e|0)&!(n|0))||(s=pr(e|0,n|0,0)|0,T()|0,(63-s|0)%3|0))||Ue(e,t)|0?(s=1,s|0):(s=!!(Hn(e,t)|0)&1,s|0)}function lt(e,t,n,r){e|=0,t|=0,n|=0,r|=0;var a=0,o=0,s=0,c=0;if(a=q(t|0,0,52)|0,o=T()|0,n=q(n|0,0,45)|0,n=o|T()|134225919,(t|0)<1)o=-1,r=n,t=e,i[t>>2]=o,e=e+4|0,i[e>>2]=r;else{for(o=1,a=-1;s=(15-o|0)*3|0,c=q(7,0,s|0)|0,n&=~(T()|0),s=q(r|0,0,s|0)|0,a=a&~c|s,n=n|T()|0,(o|0)!=(t|0);)o=o+1|0;c=e,s=c,i[s>>2]=a,c=c+4|0,i[c>>2]=n}}function ut(e,t,n,r){e|=0,t|=0,n|=0,r|=0;var a=0,o=0;if(o=K(e|0,t|0,52)|0,T()|0,o&=15,n>>>0>15)return r=4,r|0;if((o|0)<(n|0))return r=12,r|0;if((o|0)==(n|0))return i[r>>2]=e,i[r+4>>2]=t,r=0,r|0;if(a=q(n|0,0,52)|0,a|=e,e=T()|0|t&-15728641,(o|0)>(n|0))do t=q(7,0,(14-n|0)*3|0)|0,n=n+1|0,a=t|a,e=T()|0|e;while((n|0)<(o|0));return i[r>>2]=a,i[r+4>>2]=e,r=0,r|0}function dt(e,t,n,r){e|=0,t|=0,n|=0,r|=0;var a=0,o=0,s=0;if(o=K(e|0,t|0,52)|0,T()|0,o&=15,!((n|0)<16&(o|0)<=(n|0)))return r=4,r|0;a=n-o|0,n=K(e|0,t|0,45)|0,T()|0;a:do if(!(pe(n&127)|0))n=dn(7,0,a,((a|0)<0)<<31>>31)|0,a=T()|0;else{b:do if(o|0){for(n=1;s=q(7,0,(15-n|0)*3|0)|0,!(s&e|0)&!((T()|0)&t);)if(n>>>0<o>>>0)n=n+1|0;else break b;n=dn(7,0,a,((a|0)<0)<<31>>31)|0,a=T()|0;break a}while(0);n=dn(7,0,a,((a|0)<0)<<31>>31)|0,n=lr(n|0,T()|0,5,0)|0,n=G(n|0,T()|0,-5,-1)|0,n=sr(n|0,T()|0,6,0)|0,n=G(n|0,T()|0,1,0)|0,a=T()|0}while(0);return s=r,i[s>>2]=n,i[s+4>>2]=a,s=0,s|0}function ft(e,t){e|=0,t|=0;var n=0,r=0,i=0;if(i=K(e|0,t|0,45)|0,T()|0,!(pe(i&127)|0))return i=0,i|0;i=K(e|0,t|0,52)|0,T()|0,i&=15;a:do if(!i)n=0;else for(r=1;;){if(n=K(e|0,t|0,(15-r|0)*3|0)|0,T()|0,n&=7,n|0)break a;if(r>>>0<i>>>0)r=r+1|0;else{n=0;break}}while(0);return i=!(n|0)&1,i|0}function pt(e,t,n,r){e|=0,t|=0,n|=0,r|=0;var a=0,o=0,s=0,c=0;if(s=M,M=M+16|0,o=s,Rt(o,e,t,n),t=o,e=i[t>>2]|0,t=i[t+4>>2]|0,!(e|0)&!(t|0))return M=s,0;a=0,n=0;do c=r+(a<<3)|0,i[c>>2]=e,i[c+4>>2]=t,a=G(a|0,n|0,1,0)|0,n=T()|0,Bt(o),c=o,e=i[c>>2]|0,t=i[c+4>>2]|0;while(!(!(e|0)&!(t|0)));return M=s,0}function mt(e,t,n,r){return e|=0,t|=0,n|=0,r|=0,(r|0)<(n|0)?(n=t,r=e,w(n|0),r|0):(n=q(-1,-1,((r-n|0)*3|0)+3|0)|0,r=q(~n|0,~(T()|0)|0,(15-r|0)*3|0)|0,n=~(T()|0)&t,r=~r&e,w(n|0),r|0)}function ht(e,t,n,r){e|=0,t|=0,n|=0,r|=0;var a=0;return a=K(e|0,t|0,52)|0,T()|0,a&=15,(n|0)<16&(a|0)<=(n|0)?((a|0)<(n|0)&&(a=q(-1,-1,((n+-1-a|0)*3|0)+3|0)|0,a=q(~a|0,~(T()|0)|0,(15-n|0)*3|0)|0,t=~(T()|0)&t,e=~a&e),a=q(n|0,0,52)|0,n=t&-15728641|T(),i[r>>2]=e|a,i[r+4>>2]=n,r=0,r|0):(r=4,r|0)}function gt(e,t,n,r){e|=0,t|=0,n|=0,r|=0;var a=0,o=0,s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0,S=0,C=0,w=0,D=0,O=0,k=0,A=0,j=0,M=0;if(!(n|0)&!(r|0))return M=0,M|0;if(a=e,o=i[a>>2]|0,a=i[a+4>>2]|0,!0&!(a&15728640)){if(!((r|0)>0|!(r|0)&n>>>0>0)||(M=t,i[M>>2]=o,i[M+4>>2]=a,(n|0)==1&!(r|0)))return M=0,M|0;a=1,o=0;do A=e+(a<<3)|0,j=i[A+4>>2]|0,M=t+(a<<3)|0,i[M>>2]=i[A>>2],i[M+4>>2]=j,a=G(a|0,o|0,1,0)|0,o=T()|0;while((o|0)<(r|0)|(o|0)==(r|0)&a>>>0<n>>>0);return a=0,a|0}if(k=n<<3,j=$n(k)|0,!j)return M=13,M|0;if(_r(j|0,e|0,k|0)|0,A=er(n,8)|0,!A)return W(j),M=13,M|0;a:for(;;){a=j,u=i[a>>2]|0,a=i[a+4>>2]|0,D=K(u|0,a|0,52)|0,T()|0,D&=15,O=D+-1|0,w=!!(D|0),C=(r|0)>0|!(r|0)&n>>>0>0;b:do if(w&C){if(y=q(O|0,0,52)|0,b=T()|0,O>>>0>15){if(!(!(u|0)&!(a|0))){M=16;break a}for(o=0,e=0;;){if(o=G(o|0,e|0,1,0)|0,e=T()|0,!((e|0)<(r|0)|(e|0)==(r|0)&o>>>0<n>>>0))break b;if(s=j+(o<<3)|0,S=i[s>>2]|0,s=i[s+4>>2]|0,!(!(S|0)&!(s|0))){a=s,M=16;break a}}}for(c=u,e=a,o=0,s=0;;){if(!(!(c|0)&!(e|0))){if(!(!0&!(e&117440512))){M=21;break a}if(d=K(c|0,e|0,52)|0,T()|0,d&=15,(d|0)<(O|0)){a=12,M=27;break a}if((d|0)!=(O|0)&&(c|=y,e=e&-15728641|b,d>>>0>=D>>>0)){l=O;do S=q(7,0,(14-l|0)*3|0)|0,l=l+1|0,c=S|c,e=T()|0|e;while(l>>>0<d>>>0)}if(p=dr(c|0,e|0,n|0,r|0)|0,m=T()|0,l=A+(p<<3)|0,d=l,f=i[d>>2]|0,d=i[d+4>>2]|0,!(!(f|0)&!(d|0))){_=0,v=0;do{if((_|0)>(r|0)|(_|0)==(r|0)&v>>>0>n>>>0){M=31;break a}if((f|0)==(c|0)&(d&-117440513)==(e|0)){h=K(f|0,d|0,56)|0,T()|0,h&=7,g=h+1|0,S=K(f|0,d|0,45)|0,T()|0;c:do if(!(pe(S&127)|0))d=7;else{if(f=K(f|0,d|0,52)|0,T()|0,f&=15,!f){d=6;break}for(d=1;;){if(S=q(7,0,(15-d|0)*3|0)|0,!(!(S&c|0)&!((T()|0)&e))){d=7;break c}if(d>>>0<f>>>0)d=d+1|0;else{d=6;break}}}while(0);if((h+2|0)>>>0>d>>>0){M=41;break a}S=q(g|0,0,56)|0,e=T()|0|e&-117440513,x=l,i[x>>2]=0,i[x+4>>2]=0,c=S|c}else p=G(p|0,m|0,1,0)|0,p=ur(p|0,T()|0,n|0,r|0)|0,m=T()|0;v=G(v|0,_|0,1,0)|0,_=T()|0,l=A+(p<<3)|0,d=l,f=i[d>>2]|0,d=i[d+4>>2]|0}while(!(!(f|0)&!(d|0)))}S=l,i[S>>2]=c,i[S+4>>2]=e}if(o=G(o|0,s|0,1,0)|0,s=T()|0,!((s|0)<(r|0)|(s|0)==(r|0)&o>>>0<n>>>0))break b;e=j+(o<<3)|0,c=i[e>>2]|0,e=i[e+4>>2]|0}}while(0);if(S=G(n|0,r|0,5,0)|0,x=T()|0,x>>>0<0|!(x|0)&S>>>0<11){M=85;break}if(S=sr(n|0,r|0,6,0)|0,T()|0,S=er(S,8)|0,!S){M=48;break}do if(C){for(g=0,e=0,h=0,_=0;;){if(d=A+(g<<3)|0,s=d,o=i[s>>2]|0,s=i[s+4>>2]|0,!(o|0)&!(s|0))x=h;else{f=K(o|0,s|0,56)|0,T()|0,f&=7,c=f+1|0,p=s&-117440513,x=K(o|0,s|0,45)|0,T()|0;d:do if(pe(x&127)|0){if(m=K(o|0,s|0,52)|0,T()|0,m&=15,m|0)for(l=1;;){if(x=q(7,0,(15-l|0)*3|0)|0,!(!(o&x|0)&!(p&(T()|0))))break d;if(l>>>0<m>>>0)l=l+1|0;else break}s=q(c|0,0,56)|0,o=s|o,s=T()|0|p,c=d,i[c>>2]=o,i[c+4>>2]=s,c=f+2|0}while(0);(c|0)==7?(x=S+(e<<3)|0,i[x>>2]=o,i[x+4>>2]=s&-117440513,e=G(e|0,h|0,1,0)|0,x=T()|0):x=h}if(g=G(g|0,_|0,1,0)|0,_=T()|0,(_|0)<(r|0)|(_|0)==(r|0)&g>>>0<n>>>0)h=x;else break}if(C){if(v=O>>>0>15,y=q(O|0,0,52)|0,b=T()|0,!w){for(o=0,l=0,c=0,s=0;!(u|0)&!(a|0)||(O=t+(o<<3)|0,i[O>>2]=u,i[O+4>>2]=a,o=G(o|0,l|0,1,0)|0,l=T()|0),c=G(c|0,s|0,1,0)|0,s=T()|0,(s|0)<(r|0)|(s|0)==(r|0)&c>>>0<n>>>0;)a=j+(c<<3)|0,u=i[a>>2]|0,a=i[a+4>>2]|0;a=x;break}for(o=0,l=0,s=0,c=0;;){do if(!(!(u|0)&!(a|0))){if(m=K(u|0,a|0,52)|0,T()|0,m&=15,v|(m|0)<(O|0)){M=80;break a}if((m|0)!=(O|0)){if(d=u|y,f=a&-15728641|b,m>>>0>=D>>>0){p=O;do w=q(7,0,(14-p|0)*3|0)|0,p=p+1|0,d=w|d,f=T()|0|f;while(p>>>0<m>>>0)}}else d=u,f=a;h=dr(d|0,f|0,n|0,r|0)|0,p=0,m=0,_=T()|0;do{if((p|0)>(r|0)|(p|0)==(r|0)&m>>>0>n>>>0){M=81;break a}if(w=A+(h<<3)|0,g=i[w+4>>2]|0,(g&-117440513)==(f|0)&&(i[w>>2]|0)==(d|0)){M=65;break}w=G(h|0,_|0,1,0)|0,h=ur(w|0,T()|0,n|0,r|0)|0,_=T()|0,m=G(m|0,p|0,1,0)|0,p=T()|0,w=A+(h<<3)|0}while((i[w>>2]|0)!=(d|0)||(i[w+4>>2]|0)!=(f|0));if((M|0)==65&&(M=0,!0&(g&117440512)==100663296))break;w=t+(o<<3)|0,i[w>>2]=u,i[w+4>>2]=a,o=G(o|0,l|0,1,0)|0,l=T()|0}while(0);if(s=G(s|0,c|0,1,0)|0,c=T()|0,!((c|0)<(r|0)|(c|0)==(r|0)&s>>>0<n>>>0))break;a=j+(s<<3)|0,u=i[a>>2]|0,a=i[a+4>>2]|0}a=x}else o=0,a=x}else o=0,e=0,a=0;while(0);if(yr(A|0,0,k|0)|0,_r(j|0,S|0,e<<3)|0,W(S),!(e|0)&!(a|0)){M=89;break}t=t+(o<<3)|0,r=a,n=e}if((M|0)==16)!0&!(a&117440512)?(a=4,M=27):M=21;else if((M|0)==31)E(27634,27225,620,27235);else if((M|0)==41)return W(j),W(A),M=10,M|0;else if((M|0)==48)return W(j),W(A),M=13,M|0;else(M|0)==80?E(27634,27225,711,27235):(M|0)==81?E(27634,27225,723,27235):(M|0)==85&&(_r(t|0,j|0,n<<3)|0,M=89);return(M|0)==21?(W(j),W(A),M=5,M|0):(M|0)==27?(W(j),W(A),M=a,M|0):(M|0)==89?(W(j),W(A),M=0,M|0):0}function _t(e,t,n,r,a,o,s){e|=0,t|=0,n|=0,r|=0,a|=0,o|=0,s|=0;var c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0;if(g=M,M=M+16|0,h=g,!((n|0)>0|!(n|0)&t>>>0>0))return h=0,M=g,h|0;if((s|0)>=16)return h=12,M=g,h|0;p=0,m=0,f=0,c=0;a:for(;;){if(u=e+(p<<3)|0,l=i[u>>2]|0,u=i[u+4>>2]|0,d=K(l|0,u|0,52)|0,T()|0,(d&15)>(s|0)){c=12,l=11;break}if(Rt(h,l,u,s),d=h,u=i[d>>2]|0,d=i[d+4>>2]|0,!(u|0)&!(d|0))l=f;else{l=f;do{if(!((c|0)<(o|0)|(c|0)==(o|0)&l>>>0<a>>>0)){l=10;break a}f=r+(l<<3)|0,i[f>>2]=u,i[f+4>>2]=d,l=G(l|0,c|0,1,0)|0,c=T()|0,Bt(h),f=h,u=i[f>>2]|0,d=i[f+4>>2]|0}while(!(!(u|0)&!(d|0)))}if(p=G(p|0,m|0,1,0)|0,m=T()|0,(m|0)<(n|0)|(m|0)==(n|0)&p>>>0<t>>>0)f=l;else{c=0,l=11;break}}return(l|0)==10?(h=14,M=g,h|0):(l|0)==11?(M=g,c|0):0}function vt(e,t,n,r,a){e|=0,t|=0,n|=0,r|=0,a|=0;var o=0,s=0,c=0,l=0,u=0,d=0,f=0,p=0;p=M,M=M+16|0,f=p;a:do if((n|0)>0|!(n|0)&t>>>0>0){for(u=0,s=0,o=0,d=0;;){if(l=e+(u<<3)|0,c=i[l>>2]|0,l=i[l+4>>2]|0,!(!(c|0)&!(l|0))&&(l=!(dt(c,l,r,f)|0),c=f,s=G(i[c>>2]|0,i[c+4>>2]|0,s|0,o|0)|0,o=T()|0,!l)){o=12;break}if(u=G(u|0,d|0,1,0)|0,d=T()|0,!((d|0)<(n|0)|(d|0)==(n|0)&u>>>0<t>>>0))break a}return M=p,o|0}else s=0,o=0;while(0);return i[a>>2]=s,i[a+4>>2]=o,a=0,M=p,a|0}function yt(e,t){return e|=0,t|=0,t=K(e|0,t|0,52)|0,T()|0,t&1}function bt(e,t){e|=0,t|=0;var n=0,r=0,i=0;if(i=K(e|0,t|0,52)|0,T()|0,i&=15,!i)return i=0,i|0;for(r=1;;){if(n=K(e|0,t|0,(15-r|0)*3|0)|0,T()|0,n&=7,n|0){r=5;break}if(r>>>0<i>>>0)r=r+1|0;else{n=0,r=5;break}}return(r|0)==5?n|0:0}function xt(e,t){e|=0,t|=0;var n=0,r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;if(u=K(e|0,t|0,52)|0,T()|0,u&=15,!u)return l=t,u=e,w(l|0),u|0;for(l=1,n=0;;){switch(r=(15-l|0)*3|0,s=q(7,0,r|0)|0,c=T()|0,a=e&~s,o=t&~c,e=K(e|0,t|0,r|0)|0,T()|0,e&7){case 1:e=5;break;case 5:e=4;break;case 4:e=6;break;case 6:e=2;break;case 2:e=3;break;case 3:e=1;break;default:e&=7}r=q(e|0,0,r|0)|0,i=T()|0,e=r|a,t=i|o;a:do if(!n){if(!(r&s|0)&!(i&c|0))n=0;else if(o=K(e|0,t|0,52)|0,T()|0,o&=15,!o)n=1;else{n=1;b:for(;;){switch(c=K(e|0,t|0,(15-n|0)*3|0)|0,T()|0,c&7){case 1:break b;case 0:break;default:n=1;break a}if(n>>>0<o>>>0)n=n+1|0;else{n=1;break a}}for(a=1;;){switch(i=(15-a|0)*3|0,n=K(e|0,t|0,i|0)|0,T()|0,r=q(7,0,i|0)|0,r=e&~r,t&=~(T()|0),n&7){case 1:e=5;break;case 5:e=4;break;case 4:e=6;break;case 6:e=2;break;case 2:e=3;break;case 3:e=1;break;default:e=n&7}if(e=q(e|0,0,i|0)|0,e|=r,t=T()|0|t,a>>>0<o>>>0)a=a+1|0;else{n=1;break a}}}}while(0);if(l>>>0<u>>>0)l=l+1|0;else break}return w(t|0),e|0}function St(e,t){e|=0,t|=0;var n=0,r=0,i=0,a=0,o=0;if(o=K(e|0,t|0,52)|0,T()|0,o&=15,!o)return a=t,o=e,w(a|0),o|0;for(a=1;;){switch(i=(15-a|0)*3|0,n=K(e|0,t|0,i|0)|0,T()|0,r=q(7,0,i|0)|0,r=e&~r,t&=~(T()|0),n&7){case 1:e=5;break;case 5:e=4;break;case 4:e=6;break;case 6:e=2;break;case 2:e=3;break;case 3:e=1;break;default:e=n&7}if(e=q(e|0,0,i|0)|0,e|=r,t=T()|0|t,a>>>0<o>>>0)a=a+1|0;else break}return w(t|0),e|0}function Ct(e,t){e|=0,t|=0;var n=0,r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;if(u=K(e|0,t|0,52)|0,T()|0,u&=15,!u)return l=t,u=e,w(l|0),u|0;for(l=1,n=0;;){switch(r=(15-l|0)*3|0,s=q(7,0,r|0)|0,c=T()|0,a=e&~s,o=t&~c,e=K(e|0,t|0,r|0)|0,T()|0,e&7){case 1:e=3;break;case 3:e=2;break;case 2:e=6;break;case 6:e=4;break;case 4:e=5;break;case 5:e=1;break;default:e&=7}r=q(e|0,0,r|0)|0,i=T()|0,e=r|a,t=i|o;a:do if(!n){if(!(r&s|0)&!(i&c|0))n=0;else if(o=K(e|0,t|0,52)|0,T()|0,o&=15,!o)n=1;else{n=1;b:for(;;){switch(c=K(e|0,t|0,(15-n|0)*3|0)|0,T()|0,c&7){case 1:break b;case 0:break;default:n=1;break a}if(n>>>0<o>>>0)n=n+1|0;else{n=1;break a}}for(a=1;;){switch(n=(15-a|0)*3|0,r=q(7,0,n|0)|0,r=e&~r,i=t&~(T()|0),e=K(e|0,t|0,n|0)|0,T()|0,e&7){case 1:e=3;break;case 3:e=2;break;case 2:e=6;break;case 6:e=4;break;case 4:e=5;break;case 5:e=1;break;default:e&=7}if(e=q(e|0,0,n|0)|0,e|=r,t=T()|0|i,a>>>0<o>>>0)a=a+1|0;else{n=1;break a}}}}while(0);if(l>>>0<u>>>0)l=l+1|0;else break}return w(t|0),e|0}function wt(e,t){e|=0,t|=0;var n=0,r=0,i=0,a=0,o=0;if(o=K(e|0,t|0,52)|0,T()|0,o&=15,!o)return a=t,o=e,w(a|0),o|0;for(a=1;;){switch(r=(15-a|0)*3|0,n=q(7,0,r|0)|0,n=e&~n,i=t&~(T()|0),e=K(e|0,t|0,r|0)|0,T()|0,e&7){case 1:e=3;break;case 3:e=2;break;case 2:e=6;break;case 6:e=4;break;case 4:e=5;break;case 5:e=1;break;default:e&=7}if(e=q(e|0,0,r|0)|0,e|=n,t=T()|0|i,a>>>0<o>>>0)a=a+1|0;else break}return w(t|0),e|0}function Tt(e,t){e|=0,t|=0;var n=0,r=0,a=0,o=0,s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0,S=0,C=0,E=0;if(x=M,M=M+16|0,b=x,q(t|0,0,52)|0,n=T()|134225919,!t)return(i[e+4>>2]|0)>2||(i[e+8>>2]|0)>2||(i[e+12>>2]|0)>2?(y=0,b=0,w(y|0),M=x,b|0):(q(he(e)|0,0,45)|0,y=T()|0|n,b=-1,w(y|0),M=x,b|0);i[b>>2]=i[e>>2],i[b+4>>2]=i[e+4>>2],i[b+8>>2]=i[e+8>>2],i[b+12>>2]=i[e+12>>2],y=b+4|0;a:do if((t|0)>0)for(g=b+8|0,_=b+12|0,h=t,f=i[g>>2]|0,p=i[_>>2]|0,t=-1,d=i[b+4>>2]|0;;){m=h,h=h+-1|0,e=d-p|0,r=f-p|0,m&1?(o=Qn(((e*3|0)-r|0)*.14285714285714285)|0,i[y>>2]=o,e=Qn(((r<<1)+e|0)*.14285714285714285)|0,i[g>>2]=e,i[_>>2]=0,r=e-o|0,a=0-o|0,(o|0)<0?(i[g>>2]=r,i[_>>2]=a,i[y>>2]=0,e=r,s=0):(s=o,a=0),o=s-e|0,r=a-e|0,(e|0)<0?(i[y>>2]=o,i[_>>2]=r,i[g>>2]=0,s=o,o=0):(r=a,o=e),e=s-r|0,a=o-r|0,(r|0)<0?(i[y>>2]=e,i[g>>2]=a,i[_>>2]=0,o=0):(a=o,e=s,o=r),r=(a|0)<(e|0)?a:e,r=(o|0)<(r|0)?o:r,(r|0)>0&&(o=o-r|0,a=a-r|0,e=e-r|0,i[y>>2]=e,i[g>>2]=a,i[_>>2]=o),C=a+(e*3|0)|0,S=(C|0)<0,u=o+(a*3|0)-(S?C:0)|0,l=(u|0)<0,r=(o*3|0)+e-(S?C:0)-(l?u:0)|0,c=(r|0)<0,E=c?0:r,s=(l?0:u)-(c?r:0)|0,r=(S?0:C)-(l?u:0)-(c?r:0)|0,c=(s|0)<(r|0)?s:r,c=(E|0)<(c|0)?E:c,u=(c|0)>0,l=u?c:0,s=s-(u?c:0)|0,c=E-(u?c:0)|0,u=o):(c=Qn(((e<<1)+r|0)*.14285714285714285)|0,i[y>>2]=c,a=Qn(((r*3|0)-e|0)*.14285714285714285)|0,i[g>>2]=a,i[_>>2]=0,r=a-c|0,e=0-c|0,(c|0)<0?(i[g>>2]=r,i[_>>2]=e,i[y>>2]=0,a=r,c=0):e=0,s=c-a|0,r=e-a|0,(a|0)<0?(i[y>>2]=s,i[_>>2]=r,i[g>>2]=0,o=r,a=0):(o=e,s=c),e=s-o|0,r=a-o|0,(o|0)<0?(i[y>>2]=e,i[g>>2]=r,i[_>>2]=0,a=r,o=0):e=s,r=(a|0)<(e|0)?a:e,r=(o|0)<(r|0)?o:r,(r|0)>0&&(o=o-r|0,a=a-r|0,e=e-r|0,i[y>>2]=e,i[g>>2]=a,i[_>>2]=o),C=o+(e*3|0)|0,E=(C|0)<0,u=(a*3|0)+e-(E?C:0)|0,l=(u|0)<0,r=(o*3|0)+a-(E?C:0)-(l?u:0)|0,c=(r|0)<0,S=c?0:r,s=(l?0:u)-(c?r:0)|0,r=(E?0:C)-(l?u:0)-(c?r:0)|0,c=(s|0)<(r|0)?s:r,c=(S|0)<(c|0)?S:c,u=(c|0)>0,l=u?c:0,s=s-(u?c:0)|0,c=S-(u?c:0)|0,u=o),r=d+(l-r)|0,o=(r|0)<0,l=f-s-(o?r:0)|0,s=(l|0)<0,p=p-c+(o?0-r|0:0)+(s?0-l|0:0)|0,d=(p|0)<0,c=d?0:p,E=(s?0:l)-(d?p:0)|0,p=(o?0:r)-(s?l:0)-(d?p:0)|0,d=(E|0)<(p|0)?E:p,d=(c|0)<(d|0)?c:d,l=(d|0)>0,p=p-(l?d:0)|0,s=(15-m|0)*3|0,r=q(7,0,s|0)|0,r=t&~r,o=n&~(T()|0),f=(p|0)<0,C=f?p:0,E=E-(l?d:0)-C|0,S=(E|0)<0,C=(S?0-E|0:0)+(c-(l?d:0)-C)|0,n=(C|0)<0,t=n?0:C,C=n?C:0,n=(S?0:E)-C|0,C=(f?0:p)-(S?E:0)-C|0,E=(n|0)<(C|0)?n:C,E=(t|0)<(E|0)?t:E,E=(E|0)>0?E:0,t=t-E|0,n=n-E|0;b:do switch(C-E|0){case 0:switch(n|0){case 0:t=t|0?(t|0)==1?1:7:0;break b;case 1:t=t|0?(t|0)==1?3:7:2;break b;default:v=36;break b}case 1:switch(n|0){case 0:t=t|0?(t|0)==1?5:7:4;break b;case 1:if(t){v=36;break b}t=6;break b;default:v=36;break b}default:v=36}while(0);if((v|0)==36&&(v=0,t=7),t=q(t|0,0,s|0)|0,t|=r,n=T()|0|o,(m|0)<=1)break a;f=a,p=u,d=e}else t=-1,e=i[y>>2]|0;while(0);c:do if((e|0)<=2&&(i[b+8>>2]|0)<=2&&(i[b+12>>2]|0)<=2){if(r=he(b)|0,e=q(r|0,0,45)|0,t=e|t,e=T()|0|n&-1040385,l=ge(b)|0,!(pe(r)|0)){if((l|0)<=0)break;for(c=0;;){s=K(t|0,e|0,52)|0,T()|0,s&=15;d:do if(s)for(o=1;;){switch(a=(15-o|0)*3|0,n=K(t|0,e|0,a|0)|0,T()|0,r=q(7,0,a|0)|0,t&=~r,r=e&~(T()|0),n&7){case 1:e=5;break;case 5:e=4;break;case 4:e=6;break;case 6:e=2;break;case 2:e=3;break;case 3:e=1;break;default:e=n&7}if(e=q(e|0,0,a|0)|0,t=e|t,e=T()|0|r,o>>>0<s>>>0)o=o+1|0;else break d}while(0);if(c=c+1|0,(c|0)==(l|0))break c}}s=K(t|0,e|0,52)|0,T()|0,s&=15;e:do if(s){n=1;f:for(;;){switch(E=K(t|0,e|0,(15-n|0)*3|0)|0,T()|0,E&7){case 1:break f;case 0:break;default:break e}if(n>>>0<s>>>0)n=n+1|0;else break e}if(ye(r,i[b>>2]|0)|0)for(o=1;;){switch(n=(15-o|0)*3|0,r=q(7,0,n|0)|0,r=t&~r,a=e&~(T()|0),e=K(t|0,e|0,n|0)|0,T()|0,e&7){case 1:e=3;break;case 3:e=2;break;case 2:e=6;break;case 6:e=4;break;case 4:e=5;break;case 5:e=1;break;default:e&=7}if(t=q(e|0,0,n|0)|0,t|=r,e=T()|0|a,o>>>0<s>>>0)o=o+1|0;else break e}else for(o=1;;){switch(a=(15-o|0)*3|0,n=K(t|0,e|0,a|0)|0,T()|0,r=q(7,0,a|0)|0,t&=~r,r=e&~(T()|0),n&7){case 1:e=5;break;case 5:e=4;break;case 4:e=6;break;case 6:e=2;break;case 2:e=3;break;case 3:e=1;break;default:e=n&7}if(e=q(e|0,0,a|0)|0,t=e|t,e=T()|0|r,o>>>0<s>>>0)o=o+1|0;else break e}}while(0);if((l|0)>0){n=0;do t=xt(t,e)|0,e=T()|0,n=n+1|0;while((n|0)!=(l|0))}}else t=0,e=0;while(0);return C=e,E=t,w(C|0),M=x,E|0}function Et(e){return e|=0,(e|0)%2|0}function Dt(e,t,n){e|=0,t|=0,n|=0;var r=0,s=0,c=0,l=0,u=0,p=0,m=0,h=0,g=0;if(h=M,M=M+64|0,u=h+24|0,p=h+48|0,m=h,t>>>0>15)return m=4,M=h,m|0;if(c=+a[e>>3],a[o>>3]=c,(i[o+4>>2]&2146435072)==2146435072||(r=+a[e+8>>3],a[o>>3]=r,(i[o+4>>2]&2146435072)==2146435072))return m=3,M=h,m|0;s=+d(+c),g=s*+d(+r),s*=+f(+r),r=+f(+c),a[m>>3]=g,a[m+8>>3]=s,a[m+16>>3]=r,a[o>>3]=g;do if((i[o+4>>2]&2146435072)!=2146435072&&(a[o>>3]=r,e=i[o+4>>2]|0,a[o>>3]=s,!((i[o+4>>2]&2146435072)==2146435072|!0&(e&2146435072)==2146435072))){if(i[u>>2]=i[m>>2],i[u+4>>2]=i[m+4>>2],i[u+8>>2]=i[m+8>>2],i[u+12>>2]=i[m+12>>2],i[u+16>>2]=i[m+16>>2],i[u+20>>2]=i[m+20>>2],Je(u,t,p),p=Tt(p,t)|0,m=T()|0,i[n>>2]=p,i[n+4>>2]=m,!(p|0)&!(m|0))E(27634,27225,1073,27248);else{l=0;break}}else l=2;while(0);return m=l,M=h,m|0}function Ot(e,t,n){e|=0,t|=0,n|=0;var r=0,a=0,o=0,s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0;if(m=n+4|0,h=K(e|0,t|0,52)|0,T()|0,h&=15,p=K(e|0,t|0,45)|0,T()|0,r=!(h|0),!(pe(p&127)|0)){if(r)return h=0,h|0;r=!(i[m>>2]|0)&&!(i[n+8>>2]|0)?!!(i[n+12>>2]|0)&1:1}else if(r)return h=1,h|0;else r=1;for(p=n+8|0,f=n+12|0,d=1,n=i[m>>2]|0,s=i[p>>2]|0,o=i[f>>2]|0;a=n*3|0,c=s*3|0,u=o*3|0,d&1?(l=s+a|0,i[m>>2]=l,o=o+c|0,i[p>>2]=o,a=u+n|0,i[f>>2]=a,n=o-l|0,s=a-l|0,(l|0)<0?(i[p>>2]=n,i[f>>2]=s,i[m>>2]=0,c=0,a=s):(n=o,c=l),s=c-n|0,o=a-n|0,(n|0)<0?(i[m>>2]=s,i[f>>2]=o,i[p>>2]=0,c=s,a=0):(o=a,a=n),n=c-o|0,s=a-o|0,(o|0)<0?(i[m>>2]=n,i[p>>2]=s,i[f>>2]=0,o=0):(s=a,n=c),a=(s|0)<(n|0)?s:n,a=(o|0)<(a|0)?o:a,(a|0)>0&&(o=o-a|0,s=s-a|0,n=n-a|0,i[m>>2]=n,i[p>>2]=s,i[f>>2]=o)):(l=c+n|0,c=o+a|0,i[m>>2]=c,i[p>>2]=l,a=u+s|0,i[f>>2]=a,n=l-c|0,o=a-c|0,(c|0)<0?(i[p>>2]=n,i[f>>2]=o,i[m>>2]=0,c=0,a=o):n=l,s=c-n|0,o=a-n|0,(n|0)<0?(i[m>>2]=s,i[f>>2]=o,i[p>>2]=0,c=s,a=0):(o=a,a=n),n=c-o|0,s=a-o|0,(o|0)<0?(i[m>>2]=n,i[p>>2]=s,i[f>>2]=0,o=0):(s=a,n=c),a=(s|0)<(n|0)?s:n,a=(o|0)<(a|0)?o:a,(a|0)>0&&(o=o-a|0,s=s-a|0,n=n-a|0,i[m>>2]=n,i[p>>2]=s,i[f>>2]=o)),a=K(e|0,t|0,(15-d|0)*3|0)|0,T()|0,a&=7,(a+-1|0)>>>0<6&&(l=i[22032+(a*12|0)+4>>2]|0,u=i[22032+(a*12|0)+8>>2]|0,c=(i[22032+(a*12|0)>>2]|0)+n|0,i[m>>2]=c,s=l+s|0,i[p>>2]=s,n=u+o|0,i[f>>2]=n,o=s-c|0,a=n-c|0,(c|0)<0&&(i[p>>2]=o,i[f>>2]=a,i[m>>2]=0,c=0,n=a,s=o),a=c-s|0,o=n-s|0,(s|0)<0?(i[m>>2]=a,i[f>>2]=o,i[p>>2]=0,c=a,s=0):o=n,n=c-o|0,a=s-o|0,(o|0)<0?(i[m>>2]=n,i[p>>2]=a,i[f>>2]=0,s=a,o=0):n=c,a=(s|0)<(n|0)?s:n,a=(o|0)<(a|0)?o:a,(a|0)>0&&(o=o-a|0,s=s-a|0,n=n-a|0,i[m>>2]=n,i[p>>2]=s,i[f>>2]=o)),d>>>0<h>>>0;)d=d+1|0;return r|0}function kt(e,t,n){e|=0,t|=0,n|=0;var r=0,a=0,o=0,s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0;if(h=M,M=M+16|0,f=h,p=K(e|0,t|0,45)|0,T()|0,p&=127,p>>>0>121)return i[n>>2]=0,i[n+4>>2]=0,i[n+8>>2]=0,i[n+12>>2]=0,m=5,M=h,m|0;a:do if(pe(p)|0&&(c=K(e|0,t|0,52)|0,T()|0,c&=15,c|0)){r=1;b:for(;;){switch(m=K(e|0,t|0,(15-r|0)*3|0)|0,T()|0,m&7){case 5:break b;case 0:break;default:u=t;break a}if(r>>>0<c>>>0)r=r+1|0;else{u=t;break a}}for(s=1,r=t;;){switch(t=(15-s|0)*3|0,a=q(7,0,t|0)|0,a=e&~a,o=r&~(T()|0),r=K(e|0,r|0,t|0)|0,T()|0,r&7){case 1:r=3;break;case 3:r=2;break;case 2:r=6;break;case 6:r=4;break;case 4:r=5;break;case 5:r=1;break;default:r&=7}if(e=q(r|0,0,t|0)|0,e|=a,r=T()|0|o,s>>>0<c>>>0)s=s+1|0;else{u=r;break a}}}else u=t;while(0);if(m=7696+(p*28|0)|0,i[n>>2]=i[m>>2],i[n+4>>2]=i[m+4>>2],i[n+8>>2]=i[m+8>>2],i[n+12>>2]=i[m+12>>2],!(Ot(e,u,n)|0))return m=0,M=h,m|0;if(m=n+4|0,i[f>>2]=i[m>>2],i[f+4>>2]=i[m+4>>2],i[f+8>>2]=i[m+8>>2],l=K(e|0,u|0,52)|0,T()|0,d=l&15,l&1?(o=i[m>>2]|0,c=n+8|0,a=i[c>>2]|0,l=n+12|0,t=i[l>>2]|0,r=(a*3|0)+o|0,o=t+(o*3|0)|0,i[m>>2]=o,i[c>>2]=r,a=(t*3|0)+a|0,i[l>>2]=a,t=r-o|0,s=a-o|0,(o|0)<0&&(i[c>>2]=t,i[l>>2]=s,i[m>>2]=0,r=t,o=0,a=s),s=o-r|0,t=a-r|0,(r|0)<0?(i[m>>2]=s,i[l>>2]=t,i[c>>2]=0,r=0):(t=a,s=o),o=s-t|0,a=r-t|0,(t|0)<0?(i[m>>2]=o,i[c>>2]=a,i[l>>2]=0,t=0):(a=r,o=s),r=(a|0)<(o|0)?a:o,r=(t|0)<(r|0)?t:r,(r|0)>0&&(i[m>>2]=o-r,i[c>>2]=a-r,i[l>>2]=t-r),a=d+1|0):a=d,!(pe(p)|0))r=0;else{c:do if(!d)r=0;else for(t=1;;){if(r=K(e|0,u|0,(15-t|0)*3|0)|0,T()|0,r&=7,r|0)break c;if(t>>>0<d>>>0)t=t+1|0;else{r=0;break}}while(0);r=(r|0)==4&1}if(!($e(n,a,r,0)|0))(a|0)!=(d|0)&&(i[m>>2]=i[f>>2],i[m+4>>2]=i[f+4>>2],i[m+8>>2]=i[f+8>>2]);else{if(pe(p)|0)do;while($e(n,a,0,0)|0);(a|0)!=(d|0)&&(c=n+12|0,e=i[c>>2]|0,r=(i[m>>2]|0)-e|0,s=n+8|0,e=(i[s>>2]|0)-e|0,t=Qn(((r<<1)+e|0)*.14285714285714285)|0,i[m>>2]=t,r=Qn(((e*3|0)-r|0)*.14285714285714285)|0,i[s>>2]=r,i[c>>2]=0,e=r-t|0,a=0-t|0,(t|0)<0?(i[s>>2]=e,i[c>>2]=a,i[m>>2]=0,r=e,t=0):a=0,o=t-r|0,e=a-r|0,(r|0)<0?(i[m>>2]=o,i[c>>2]=e,i[s>>2]=0,t=o,r=0):e=a,o=t-e|0,a=r-e|0,(e|0)<0?(i[m>>2]=o,i[s>>2]=a,i[c>>2]=0,t=o,e=0):a=r,r=(a|0)<(t|0)?a:t,r=(e|0)<(r|0)?e:r,(r|0)>0&&(i[m>>2]=t-r,i[s>>2]=a-r,i[c>>2]=e-r))}return m=0,M=h,m|0}function At(e,t,n){e|=0,t|=0,n|=0;var r=0,i=0,o=0,s=0,c=0,l=0;return s=M,M=M+48|0,r=s+24|0,i=s,o=kt(e,t,r)|0,o?(M=s,o|0):(o=K(e|0,t|0,52)|0,T()|0,Ye(r,o&15,i),l=+h(+ +a[i+16>>3]),c=+_(+ +a[i+8>>3],+ +a[i>>3]),a[n>>3]=l,a[n+8>>3]=c,o=0,M=s,o|0)}function jt(e,t,n){e|=0,t|=0,n|=0;var r=0,i=0,a=0,o=0,s=0;if(o=M,M=M+16|0,a=o,r=kt(e,t,a)|0,r|0)return a=r,M=o,a|0;r=K(e|0,t|0,45)|0,T()|0,r=!(pe(r&127)|0),i=K(e|0,t|0,52)|0,T()|0,i&=15;a:do if(!r){if(i|0)for(r=1;;){if(s=q(7,0,(15-r|0)*3|0)|0,!(!(s&e|0)&!((T()|0)&t)))break a;if(r>>>0<i>>>0)r=r+1|0;else break}return Ze(a,i,0,5,n),s=0,M=o,s|0}while(0);return tt(a,i,0,6,n),s=0,M=o,s|0}function Mt(e,t,n){e|=0,t|=0,n|=0;var r=0,a=0,o=0;if(a=K(e|0,t|0,45)|0,T()|0,!(pe(a&127)|0))return a=2,i[n>>2]=a,0;if(a=K(e|0,t|0,52)|0,T()|0,a&=15,!a)return a=5,i[n>>2]=a,0;for(r=1;;){if(o=q(7,0,(15-r|0)*3|0)|0,!(!(o&e|0)&!((T()|0)&t))){r=2,e=6;break}if(r>>>0<a>>>0)r=r+1|0;else{r=5,e=6;break}}return(e|0)==6&&(i[n>>2]=r),0}function Nt(e,t,n){e|=0,t|=0,n|=0;var r=0,a=0,o=0,s=0,c=0,l=0,u=0,d=0,f=0;f=M,M=M+128|0,u=f+112|0,o=f+96|0,d=f,a=K(e|0,t|0,52)|0,T()|0,c=a&15,i[u>>2]=c,s=K(e|0,t|0,45)|0,T()|0,s&=127;a:do if(pe(s)|0){if(c|0)for(r=1;;){if(l=q(7,0,(15-r|0)*3|0)|0,!(!(l&e|0)&!((T()|0)&t))){a=0;break a}if(r>>>0<c>>>0)r=r+1|0;else break}if(a&1)a=1;else return l=q(c+1|0,0,52)|0,d=T()|0|t&-15728641,u=q(7,0,(14-c|0)*3|0)|0,d=Nt((l|e)&~u,d&~(T()|0),n)|0,M=f,d|0}else a=0;while(0);if(r=kt(e,t,o)|0,!r){a?(Qe(o,u,d),l=5):(nt(o,u,d),l=6);b:do if(pe(s)|0){if(!c)e=5;else for(r=1;;){if(s=q(7,0,(15-r|0)*3|0)|0,!(!(s&e|0)&!((T()|0)&t))){e=2;break b}if(r>>>0<c>>>0)r=r+1|0;else{e=5;break}}}else e=2;while(0);yr(n|0,-1,e<<2)|0;c:do if(a)for(o=0;;){if(s=d+(o<<4)|0,et(s,i[u>>2]|0)|0,s=i[s>>2]|0,c=i[n>>2]|0,(c|0)==-1|(c|0)==(s|0))r=n;else{a=0;do{if(a=a+1|0,a>>>0>=e>>>0){r=1;break c}r=n+(a<<2)|0,c=i[r>>2]|0}while(!((c|0)==-1|(c|0)==(s|0)))}if(i[r>>2]=s,o=o+1|0,o>>>0>=l>>>0){r=0;break}}else for(o=0;;){if(s=d+(o<<4)|0,$e(s,i[u>>2]|0,0,1)|0,s=i[s>>2]|0,c=i[n>>2]|0,(c|0)==-1|(c|0)==(s|0))r=n;else{a=0;do{if(a=a+1|0,a>>>0>=e>>>0){r=1;break c}r=n+(a<<2)|0,c=i[r>>2]|0}while(!((c|0)==-1|(c|0)==(s|0)))}if(i[r>>2]=s,o=o+1|0,o>>>0>=l>>>0){r=0;break}}while(0)}return d=r,M=f,d|0}function Pt(){return 12}function Ft(e,t){e|=0,t|=0;var n=0,r=0,a=0,o=0,s=0,c=0,l=0;if(e>>>0>15)return c=4,c|0;if(q(e|0,0,52)|0,c=T()|134225919,!e){n=0,r=0;do pe(r)|0&&(q(r|0,0,45)|0,s=c|T()|0,e=t+(n<<3)|0,i[e>>2]=-1,i[e+4>>2]=s,n=n+1|0),r=r+1|0;while((r|0)!=122);return n=0,n|0}n=0,s=0;do{if(pe(s)|0){for(q(s|0,0,45)|0,r=1,a=-1,o=c|T()|0;l=q(7,0,(15-r|0)*3|0)|0,a&=~l,o&=~(T()|0),(r|0)!=(e|0);)r=r+1|0;l=t+(n<<3)|0,i[l>>2]=a,i[l+4>>2]=o,n=n+1|0}s=s+1|0}while((s|0)!=122);return n=0,n|0}function It(e,t,n,r){e|=0,t|=0,n|=0,r|=0;var a=0,o=0,s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0;if(y=M,M=M+16|0,_=y,v=K(e|0,t|0,52)|0,T()|0,v&=15,n>>>0>15)return v=4,M=y,v|0;if((v|0)<(n|0))return v=12,M=y,v|0;if((v|0)!=(n|0)){if(o=q(n|0,0,52)|0,o|=e,c=T()|0|t&-15728641,(v|0)>(n|0)){l=n;do g=q(7,0,(14-l|0)*3|0)|0,l=l+1|0,o=g|o,c=T()|0|c;while((l|0)<(v|0));g=o}else g=o}else g=e,c=t;h=K(g|0,c|0,45)|0,T()|0;a:do if(pe(h&127)|0){if(l=K(g|0,c|0,52)|0,T()|0,l&=15,l|0)for(o=1;;){if(h=q(7,0,(15-o|0)*3|0)|0,!(!(h&g|0)&!((T()|0)&c))){u=33;break a}if(o>>>0<l>>>0)o=o+1|0;else break}if(h=r,i[h>>2]=0,i[h+4>>2]=0,(v|0)>(n|0)){for(h=t&-15728641,m=v;;){if(p=m,m=m+-1|0,m>>>0>15|(v|0)<(m|0)){u=19;break}if((v|0)!=(m|0)){if(o=q(m|0,0,52)|0,o|=e,l=T()|0|h,(v|0)<(p|0))f=o;else{u=m;do f=q(7,0,(14-u|0)*3|0)|0,u=u+1|0,o=f|o,l=T()|0|l;while((u|0)<(v|0));f=o}}else f=e,l=t;if(d=K(f|0,l|0,45)|0,T()|0,!(pe(d&127)|0))o=0;else{d=K(f|0,l|0,52)|0,T()|0,d&=15;b:do if(!d)o=0;else for(u=1;;){if(o=K(f|0,l|0,(15-u|0)*3|0)|0,T()|0,o&=7,o|0)break b;if(u>>>0<d>>>0)u=u+1|0;else{o=0;break}}while(0);o=!(o|0)&1}if(l=K(e|0,t|0,(15-p|0)*3|0)|0,T()|0,l&=7,(l|0)==7||(o=!!(o|0),(l|0)==1&o)){a=5,u=42;break}if(f=l+((!!(l|0)&o)<<31>>31)|0,f|0&&(u=v-p|0,u=dn(7,0,u,((u|0)<0)<<31>>31)|0,d=T()|0,o?(o=lr(u|0,d|0,5,0)|0,o=G(o|0,T()|0,-5,-1)|0,o=sr(o|0,T()|0,6,0)|0,o=G(o|0,T()|0,1,0)|0,l=T()|0):(o=u,l=d),p=f+-1|0,p=lr(u|0,d|0,p|0,((p|0)<0)<<31>>31)|0,p=G(o|0,l|0,p|0,T()|0)|0,f=T()|0,d=r,d=G(p|0,f|0,i[d>>2]|0,i[d+4>>2]|0)|0,f=T()|0,p=r,i[p>>2]=d,i[p+4>>2]=f),(m|0)<=(n|0)){u=37;break}}if((u|0)==19)E(27634,27225,1407,27259);else if((u|0)==37){s=r,a=i[s+4>>2]|0,s=i[s>>2]|0;break}else if((u|0)==42)return M=y,a|0}else a=0,s=0}else u=33;while(0);c:do if((u|0)==33){if(h=r,i[h>>2]=0,i[h+4>>2]=0,(v|0)>(n|0)){for(o=v;;){if(a=K(e|0,t|0,(15-o|0)*3|0)|0,T()|0,a&=7,(a|0)==7){a=5;break}if(s=v-o|0,s=dn(7,0,s,((s|0)<0)<<31>>31)|0,a=lr(s|0,T()|0,a|0,0)|0,s=T()|0,h=r,s=G(i[h>>2]|0,i[h+4>>2]|0,a|0,s|0)|0,a=T()|0,h=r,i[h>>2]=s,i[h+4>>2]=a,o=o+-1|0,(o|0)<=(n|0))break c}return M=y,a|0}a=0,s=0}while(0);return dt(g,c,v,_)|0&&E(27634,27225,1367,27274),v=_,_=i[v+4>>2]|0,((a|0)>-1|(a|0)==-1&s>>>0>4294967295)&((_|0)>(a|0)|((_|0)==(a|0)?(i[v>>2]|0)>>>0>s>>>0:0))?(v=0,M=y,v|0):(E(27634,27225,1447,27259),0)}function Lt(e,t,n,r,a,o){e|=0,t|=0,n|=0,r|=0,a|=0,o|=0;var s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0;if(f=M,M=M+16|0,s=f,a>>>0>15)return o=4,M=f,o|0;if(c=K(n|0,r|0,52)|0,T()|0,c&=15,(c|0)>(a|0))return o=12,M=f,o|0;if(dt(n,r,a,s)|0&&E(27634,27225,1367,27274),d=s,u=i[d+4>>2]|0,!(((t|0)>-1|(t|0)==-1&e>>>0>4294967295)&((u|0)>(t|0)|((u|0)==(t|0)?(i[d>>2]|0)>>>0>e>>>0:0))))return o=2,M=f,o|0;d=a-c|0,a=q(a|0,0,52)|0,l=T()|0|r&-15728641,u=o,i[u>>2]=a|n,i[u+4>>2]=l,u=K(n|0,r|0,45)|0,T()|0;a:do if(pe(u&127)|0){if(c|0)for(s=1;;){if(u=q(7,0,(15-s|0)*3|0)|0,!(!(u&n|0)&!((T()|0)&r)))break a;if(s>>>0<c>>>0)s=s+1|0;else break}if((d|0)<1)return o=0,M=f,o|0;for(u=c^15,r=-1,l=1,s=1;;){c=d-l|0,c=dn(7,0,c,((c|0)<0)<<31>>31)|0,n=T()|0;do if(s){if(s=lr(c|0,n|0,5,0)|0,s=G(s|0,T()|0,-5,-1)|0,s=sr(s|0,T()|0,6,0)|0,a=T()|0,(t|0)>(a|0)|(t|0)==(a|0)&e>>>0>s>>>0){t=G(e|0,t|0,-1,-1)|0,t=ir(t|0,T()|0,s|0,a|0)|0,s=T()|0,p=o,h=i[p>>2]|0,p=i[p+4>>2]|0,g=(u+r|0)*3|0,m=q(7,0,g|0)|0,p&=~(T()|0),r=sr(t|0,s|0,c|0,n|0)|0,e=T()|0,a=G(r|0,e|0,2,0)|0,g=q(a|0,T()|0,g|0)|0,p=T()|0|p,a=o,i[a>>2]=g|h&~m,i[a+4>>2]=p,e=lr(r|0,e|0,c|0,n|0)|0,e=ir(t|0,s|0,e|0,T()|0)|0,s=0,t=T()|0;break}g=o,m=i[g>>2]|0,g=i[g+4>>2]|0,h=q(7,0,(u+r|0)*3|0)|0,g&=~(T()|0),s=o,i[s>>2]=m&~h,i[s+4>>2]=g,s=1;break}else m=o,a=i[m>>2]|0,m=i[m+4>>2]|0,r=(u+r|0)*3|0,p=q(7,0,r|0)|0,m&=~(T()|0),g=sr(e|0,t|0,c|0,n|0)|0,s=T()|0,r=q(g|0,s|0,r|0)|0,m=T()|0|m,h=o,i[h>>2]=r|a&~p,i[h+4>>2]=m,s=lr(g|0,s|0,c|0,n|0)|0,e=ir(e|0,t|0,s|0,T()|0)|0,s=0,t=T()|0;while(0);if((d|0)>(l|0))r=~l,l=l+1|0;else{t=0;break}}return M=f,t|0}while(0);if((d|0)<1)return g=0,M=f,g|0;for(a=c^15,s=1;;){if(h=d-s|0,h=dn(7,0,h,((h|0)<0)<<31>>31)|0,g=T()|0,l=o,n=i[l>>2]|0,l=i[l+4>>2]|0,c=(a-s|0)*3|0,r=q(7,0,c|0)|0,l&=~(T()|0),p=sr(e|0,t|0,h|0,g|0)|0,m=T()|0,c=q(p|0,m|0,c|0)|0,l=T()|0|l,u=o,i[u>>2]=c|n&~r,i[u+4>>2]=l,g=lr(p|0,m|0,h|0,g|0)|0,e=ir(e|0,t|0,g|0,T()|0)|0,t=T()|0,(d|0)<=(s|0)){t=0;break}s=s+1|0}return M=f,t|0}function Rt(e,t,n,r){e|=0,t|=0,n|=0,r|=0;var a=0,o=0,s=0;a=K(t|0,n|0,52)|0,T()|0,a&=15,!(t|0)&!(n|0)|((r|0)>15|(a|0)>(r|0))?(o=-1,t=-1,n=0,a=0):(t=mt(t,n,a+1|0,r)|0,s=(T()|0)&-15728641,n=q(r|0,0,52)|0,n=t|n,s=s|T()|0,t=!(ft(n,s)|0),o=a,t=t?-1:r,a=s),s=e,i[s>>2]=n,i[s+4>>2]=a,i[e+8>>2]=o,i[e+12>>2]=t}function zt(e,t,n,r){e|=0,t|=0,n|=0,r|=0;var a=0,o=0;a=K(e|0,t|0,52)|0,T()|0,a&=15,o=r+8|0,i[o>>2]=a,!(e|0)&!(t|0)|((n|0)>15|(a|0)>(n|0))?(n=r,i[n>>2]=0,i[n+4>>2]=0,i[o>>2]=-1,i[r+12>>2]=-1):(e=mt(e,t,a+1|0,n)|0,o=(T()|0)&-15728641,a=q(n|0,0,52)|0,a=e|a,o=o|T()|0,e=r,i[e>>2]=a,i[e+4>>2]=o,e=r+12|0,ft(a,o)|0?i[e>>2]=n:i[e>>2]=-1)}function Bt(e){e|=0;var t=0,n=0,r=0,a=0,o=0,s=0,c=0,l=0,u=0;if(n=e,t=i[n>>2]|0,n=i[n+4>>2]|0,!(!(t|0)&!(n|0))&&(r=K(t|0,n|0,52)|0,T()|0,r&=15,c=q(1,0,(r^15)*3|0)|0,t=G(c|0,T()|0,t|0,n|0)|0,n=T()|0,c=e,i[c>>2]=t,i[c+4>>2]=n,c=e+8|0,s=i[c>>2]|0,!((r|0)<(s|0)))){for(l=e+12|0,o=r;;){if((o|0)==(s|0)){r=5;break}if(u=(o|0)==(i[l>>2]|0),a=(15-o|0)*3|0,r=K(t|0,n|0,a|0)|0,T()|0,r&=7,u&(r|0)==1&!0){r=7;break}if(!((r|0)==7&!0)){r=10;break}if(u=q(1,0,a|0)|0,t=G(t|0,n|0,u|0,T()|0)|0,n=T()|0,u=e,i[u>>2]=t,i[u+4>>2]=n,(o|0)>(s|0))o=o+-1|0;else{r=10;break}}(r|0)==5?(u=e,i[u>>2]=0,i[u+4>>2]=0,i[c>>2]=-1,i[l>>2]=-1):(r|0)==7?(s=q(1,0,a|0)|0,s=G(t|0,n|0,s|0,T()|0)|0,c=T()|0,u=e,i[u>>2]=s,i[u+4>>2]=c,i[l>>2]=o+-1):r|0}}function Vt(e){e=+e;var t=0;return t=e<0?e+6.283185307179586:e,+(e>=6.283185307179586?t+-6.283185307179586:t)}function Ht(e,t){switch(e=+e,t|=0,t|0){case 1:e=e<0?e+6.283185307179586:e;break;case 2:e=e>0?e+-6.283185307179586:e}return+e}function Ut(e,t){e|=0,t|=0;var n=0,r=0,i=0,o=0;return i=+a[t>>3],r=+a[e>>3],o=+f(+((i-r)*.5)),n=+f(+((+a[t+8>>3]-a[e+8>>3])*.5)),n=o*o+n*(+d(+i)*d(+r)*n),+(_(+ +u(+n),+ +u(+(1-n)))*2)}function Wt(e,t){e|=0,t|=0;var n=0,r=0,i=0,o=0;return i=+a[t>>3],r=+a[e>>3],o=+f(+((i-r)*.5)),n=+f(+((+a[t+8>>3]-a[e+8>>3])*.5)),n=o*o+n*(+d(+i)*d(+r)*n),+(_(+ +u(+n),+ +u(+(1-n)))*2*6371.007180918475)}function Gt(e,t){e|=0,t|=0;var n=0,r=0,i=0,o=0;return i=+a[t>>3],r=+a[e>>3],o=+f(+((i-r)*.5)),n=+f(+((+a[t+8>>3]-a[e+8>>3])*.5)),n=o*o+n*(+d(+i)*d(+r)*n),+(_(+ +u(+n),+ +u(+(1-n)))*2*6371.007180918475*1e3)}function Kt(e,t){return e|=0,t|=0,e>>>0>15?(t=4,t|0):(a[t>>3]=+a[20624+(e<<3)>>3],t=0,t|0)}function qt(e,t){return e|=0,t|=0,e>>>0>15?(t=4,t|0):(a[t>>3]=+a[20752+(e<<3)>>3],t=0,t|0)}function Jt(e,t){return e|=0,t|=0,e>>>0>15?(t=4,t|0):(a[t>>3]=+a[20880+(e<<3)>>3],t=0,t|0)}function Yt(e,t){return e|=0,t|=0,e>>>0>15?(t=4,t|0):(a[t>>3]=+a[21008+(e<<3)>>3],t=0,t|0)}function Xt(e,t){e|=0,t|=0;var n=0;return e>>>0>15?(t=4,t|0):(n=dn(7,0,e,((e|0)<0)<<31>>31)|0,n=lr(n|0,T()|0,120,0)|0,e=T()|0,i[t>>2]=n|2,i[t+4>>2]=e,t=0,t|0)}function Zt(e,t,n){e|=0,t|=0,n|=0;var r=0,o=0,s=0,c=0,l=0,p=0,m=0,h=0;if(l=M,M=M+176|0,c=l,e=Ke(e,t,c)|0,e|0)return c=e,M=l,c|0;if(a[n>>3]=0,e=i[c>>2]|0,(e|0)<=1)return c=0,M=l,c|0;t=e+-1|0,e=0,r=+a[c+8>>3],o=+a[c+16>>3],s=0;do e=e+1|0,m=r,r=+a[c+8+(e<<4)>>3],h=+f(+((r-m)*.5)),p=o,o=+a[c+8+(e<<4)+8>>3],p=+f(+((o-p)*.5)),p=h*h+p*(+d(+r)*d(+m)*p),s+=_(+ +u(+p),+ +u(+(1-p)))*2;while((e|0)<(t|0));return a[n>>3]=s,c=0,M=l,c|0}function Qt(e,t,n){e|=0,t|=0,n|=0;var r=0,o=0,s=0,c=0,l=0,p=0,m=0,h=0;if(l=M,M=M+176|0,c=l,e=Ke(e,t,c)|0,e|0)return c=e,s=+a[n>>3],s*=6371.007180918475,a[n>>3]=s,M=l,c|0;if(a[n>>3]=0,e=i[c>>2]|0,(e|0)<=1)return c=0,s=0,s*=6371.007180918475,a[n>>3]=s,M=l,c|0;t=e+-1|0,e=0,r=+a[c+8>>3],o=+a[c+16>>3],s=0;do e=e+1|0,m=r,r=+a[c+8+(e<<4)>>3],h=+f(+((r-m)*.5)),p=o,o=+a[c+8+(e<<4)+8>>3],p=+f(+((o-p)*.5)),p=h*h+p*(+d(+m)*d(+r)*p),s+=_(+ +u(+p),+ +u(+(1-p)))*2;while((e|0)!=(t|0));return a[n>>3]=s,c=0,h=s,h*=6371.007180918475,a[n>>3]=h,M=l,c|0}function $t(e,t,n){e|=0,t|=0,n|=0;var r=0,o=0,s=0,c=0,l=0,p=0,m=0,h=0;if(l=M,M=M+176|0,c=l,e=Ke(e,t,c)|0,e|0)return c=e,s=+a[n>>3],s*=6371.007180918475,s*=1e3,a[n>>3]=s,M=l,c|0;if(a[n>>3]=0,e=i[c>>2]|0,(e|0)<=1)return c=0,s=0,s*=6371.007180918475,s*=1e3,a[n>>3]=s,M=l,c|0;t=e+-1|0,e=0,r=+a[c+8>>3],o=+a[c+16>>3],s=0;do e=e+1|0,m=r,r=+a[c+8+(e<<4)>>3],h=+f(+((r-m)*.5)),p=o,o=+a[c+8+(e<<4)+8>>3],p=+f(+((o-p)*.5)),p=h*h+p*(+d(+m)*d(+r)*p),s+=_(+ +u(+p),+ +u(+(1-p)))*2;while((e|0)!=(t|0));return a[n>>3]=s,c=0,h=s,h*=6371.007180918475,h*=1e3,a[n>>3]=h,M=l,c|0}function en(e){e|=0;var t=0,n=0,r=0,a=0,o=0,s=0,c=0;if(e)for(o=e+4|0,s=e+8|0,r=1,a=e;;){if(t=i[a>>2]|0,t|0)do{if(n=i[t>>2]|0,n|0)do c=n,n=i[n+16>>2]|0,W(c);while(n|0);c=t,t=i[t+8>>2]|0,W(c)}while(t|0);if(t=a,a=i[a+8>>2]|0,r?(i[e>>2]=0,i[o>>2]=0,i[s>>2]=0):W(t),a)r=0;else break}}function tn(e,t){e|=0,t|=0;var n=0,r=0,a=0,o=0,s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;if(i[t>>2]=0,_=t+4|0,i[_>>2]=0,v=t+8|0,i[v>>2]=0,g=i[e>>2]|0,(g|0)<=0)return t=0,t|0;h=e+4|0,e=t,m=0;a:for(;;){if(m){if(n=er(1,12)|0,!n){n=5;break}i[e+8>>2]=n,e=n}if(l=i[h>>2]|0,u=er(1,12)|0,!u){e=13,n=37;break}if(p=e+4|0,r=i[p>>2]|0,i[(r|0?r+8|0:e)>>2]=u,i[p>>2]=u,r=i[l+(m<<4)>>2]|0,(r|0)<3){e=1,n=37;break}a=l+(m<<4)+4|0,o=u+4|0,n=0,s=0;do{if(c=s,s=$n(24)|0,!s){e=13,n=37;break a}vr(s|0,(i[a>>2]|0)+(n<<4)|0,16)|0,i[s+16>>2]=0,c?i[c+16>>2]=s:i[u>>2]=s,i[o>>2]=s,n=n+1|0}while((n|0)<(r|0));if(f=i[l+(m<<4)+8>>2]|0,(f|0)>0){d=l+(m<<4)+12|0,l=0;do{if(r=i[d>>2]|0,n=u,u=er(1,12)|0,!u){e=13,n=37;break a}if(i[n+8>>2]=u,i[p>>2]=u,c=i[r+(l<<3)>>2]|0,(c|0)<3){e=1,n=37;break a}r=r+(l<<3)+4|0,a=u+4|0,n=0,o=0;do{if(s=o,o=$n(24)|0,!o){e=13,n=37;break a}vr(o|0,(i[r>>2]|0)+(n<<4)|0,16)|0,i[o+16>>2]=0,s?i[s+16>>2]=o:i[u>>2]=o,i[a>>2]=o,n=n+1|0}while((n|0)<(c|0));l=l+1|0}while((l|0)<(f|0))}if(m=m+1|0,(m|0)>=(g|0)){e=0,n=50;break}}if((n|0)==5){if(!t)return t=13,t|0;for(r=1,a=t;;){if(e=i[a>>2]|0,e|0)do{if(n=i[e>>2]|0,n|0)do g=n,n=i[n+16>>2]|0,W(g);while(n|0);g=e,e=i[e+8>>2]|0,W(g)}while(e|0);if(e=a,a=i[a+8>>2]|0,r?(i[t>>2]=0,i[_>>2]=0,i[v>>2]=0):W(e),a)r=0;else{e=13;break}}return e|0}if((n|0)==37){if(!t)return t=e,t|0;for(a=1,o=t;;){if(n=i[o>>2]|0,n|0)do{if(r=i[n>>2]|0,r|0)do g=r,r=i[r+16>>2]|0,W(g);while(r|0);g=n,n=i[n+8>>2]|0,W(g)}while(n|0);if(n=o,o=i[o+8>>2]|0,a?(i[t>>2]=0,i[_>>2]=0,i[v>>2]=0):W(n),o)a=0;else break}return e|0}return(n|0)==50?e|0:0}function nn(e,t,n,a,o){e|=0,t|=0,n|=0,a|=0,o|=0;var s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0;if(y=M,M=M+16|0,v=y,f=K(e|0,t|0,52)|0,T()|0,f&=15,h=K(n|0,a|0,52)|0,T()|0,(f|0)!=(h&15))return v=12,M=y,v|0;if(u=K(e|0,t|0,45)|0,T()|0,u&=127,d=K(n|0,a|0,45)|0,T()|0,d&=127,u>>>0>121|d>>>0>121)return v=5,M=y,v|0;if(h=(u|0)!=(d|0),h){if(c=xe(u,d)|0,(c|0)==7)return v=1,M=y,v|0;l=xe(d,u)|0,(l|0)==7?E(27291,27315,164,27325):(_=c,s=l)}else _=0,s=0;p=pe(u)|0,m=pe(d)|0,i[v>>2]=0,i[v+4>>2]=0,i[v+8>>2]=0,i[v+12>>2]=0;do if(_){d=i[4272+(u*28|0)+(_<<2)>>2]|0,c=(d|0)>0;a:do if(!m){if(c)for(u=0,l=n,c=a;;){switch(l=wt(l,c)|0,c=T()|0,s|0){case 1:s=3;break;case 3:s=2;break;case 2:s=6;break;case 6:s=4;break;case 4:s=5;break;case 5:s=1}if(u=u+1|0,(u|0)==(d|0)){d=s,u=l,l=c;break a}}else d=s,u=n,l=a}else if(c)for(u=0,l=n,c=a;;){switch(l=Ct(l,c)|0,c=T()|0,s|0){case 5:case 1:s=3;break;case 3:s=2;break;case 2:s=6;break;case 6:s=4;break;case 4:s=5}if(u=u+1|0,(u|0)==(d|0)){d=s,u=l,l=c;break a}}else d=s,u=n,l=a;while(0);if(Ot(u,l,v)|0,h||E(27340,27315,194,27325),c=!!(p|0),s=!!(m|0),c&s&&E(27367,27315,195,27325),c){if(s=bt(e,t)|0,(s|0)==7){s=5;break}if(r[21968+(s*7|0)+_|0]|0){s=1;break}m=i[21136+(s*28|0)+(_<<2)>>2]|0,h=m}else if(s){if(s=bt(u,l)|0,(s|0)==7){s=5;break}if(r[21968+(s*7|0)+d|0]|0){s=1;break}h=0,m=i[21136+(d*28|0)+(s<<2)>>2]|0}else h=0,m=0;if((h|m|0)>=0){if((m|0)>0){n=v+4|0,a=v+8|0,p=v+12|0,d=0,l=i[n>>2]|0,c=i[a>>2]|0,s=i[p>>2]|0;do g=c+l|0,t=(g|0)<0,b=t?g:0,c=s+c-b|0,e=(c|0)<0,u=e?c:0,l=s+l-b-u|0,b=(l|0)<0,s=b?0:l,l=b?l:0,c=(e?0:c)-l|0,l=(t?0:g)-u-l|0,u=(c|0)<(l|0)?c:l,u=(s|0)<(u|0)?s:u,(u|0)>0&&(l=l-u|0,c=c-u|0,s=s-u|0),d=d+1|0;while((d|0)!=(m|0));i[n>>2]=l,i[a>>2]=c,i[p>>2]=s}if((_+-1|0)>>>0<6?(s=i[22032+(_*12|0)>>2]|0,l=i[22032+(_*12|0)+4>>2]|0,b=i[22032+(_*12|0)+8>>2]|0,c=(l|0)<(s|0)?l:s,c=(b|0)<(c|0)?b:c,c=(c|0)>0?c:0,s=s-c|0,l=l-c|0,c=b-c|0):(s=0,l=0,c=0),f)for(;;)if(u=s*3|0,d=l*3|0,n=c*3|0,Et(f)|0?(t=u+l|0,e=(t|0)<0,b=d+c-(e?t:0)|0,g=(b|0)<0,l=s+n-(e?t:0)-(g?b:0)|0,c=(l|0)<0,_=c?0:l,u=(g?0:b)-(c?l:0)|0,l=(e?0:t)-(g?b:0)-(c?l:0)|0,c=(u|0)<(l|0)?u:l,c=(_|0)<(c|0)?_:c,b=(c|0)>0,s=b?c:0,u=u-(b?c:0)|0,c=_-(b?c:0)|0):(g=u+c|0,t=(g|0)<0,b=d+s-(t?g:0)|0,s=(b|0)<0,l=n+l-(t?g:0)-(s?b:0)|0,c=(l|0)<0,_=c?0:l,u=(s?0:b)-(c?l:0)|0,l=(t?0:g)-(s?b:0)-(c?l:0)|0,c=(u|0)<(l|0)?u:l,c=(_|0)<(c|0)?_:c,b=(c|0)>0,s=b?c:0,u=u-(b?c:0)|0,c=_-(b?c:0)|0),s=l-s|0,(f|0)>1)f=f+-1|0,l=u;else{l=u;break}if((h|0)>0){u=0;do t=s+l|0,e=(t|0)<0,b=l+c-(e?t:0)|0,g=(b|0)<0,_=s+c-(e?t:0)-(g?b:0)|0,s=(_|0)<0,c=s?0:_,l=(g?0:b)-(s?_:0)|0,_=(e?0:t)-(g?b:0)-(s?_:0)|0,s=(l|0)<(_|0)?l:_,s=(c|0)<(s|0)?c:s,b=(s|0)>0,c=c-(b?s:0)|0,l=l-(b?s:0)|0,s=_-(b?s:0)|0,u=u+1|0;while((u|0)!=(h|0))}n=v+4|0,f=v+8|0,_=i[f>>2]|0,a=v+12|0,b=i[a>>2]|0,u=(i[n>>2]|0)+s|0,i[n>>2]=u,l=_+l|0,i[f>>2]=l,s=b+c|0,i[a>>2]=s,c=l-u|0,(u|0)<0?(s=s-u|0,i[f>>2]=c,i[a>>2]=s,i[n>>2]=0,l=0):(c=l,l=u),(c|0)<0&&(l=l-c|0,i[n>>2]=l,s=s-c|0,i[a>>2]=s,i[f>>2]=0,c=0),d=l-s|0,u=c-s|0,(s|0)<0?(i[n>>2]=d,i[f>>2]=u,i[a>>2]=0,l=d,s=0):u=c,c=(u|0)<(l|0)?u:l,c=(s|0)<(c|0)?s:c,(c|0)>0&&(i[n>>2]=l-c,i[f>>2]=u-c,i[a>>2]=s-c),g=77}else s=5}else if(Ot(n,a,v)|0,!!(p|0)&!!(m|0)){if((d|0)!=(u|0)&&E(27398,27315,264,27325),c=bt(e,t)|0,s=bt(n,a)|0,(c|0)==7|(s|0)==7)s=5;else if(r[21968+(c*7|0)+s|0]|0)s=1;else if(n=i[21136+(c*28|0)+(s<<2)>>2]|0,(n|0)>0){f=v+4|0,a=v+8|0,p=v+12|0,d=0,l=i[f>>2]|0,c=i[a>>2]|0,s=i[p>>2]|0;do _=c+l|0,g=(_|0)<0,e=g?_:0,c=s+c-e|0,t=(c|0)<0,u=t?c:0,l=s+l-e-u|0,e=(l|0)<0,s=e?0:l,l=e?l:0,c=(t?0:c)-l|0,l=(g?0:_)-u-l|0,u=(c|0)<(l|0)?c:l,u=(s|0)<(u|0)?s:u,(u|0)>0&&(l=l-u|0,c=c-u|0,s=s-u|0),d=d+1|0;while((d|0)!=(n|0));i[f>>2]=l,i[a>>2]=c,i[p>>2]=s,g=77}else g=77}else g=77;while(0);return(g|0)==77&&(s=v+4|0,i[o>>2]=i[s>>2],i[o+4>>2]=i[s+4>>2],i[o+8>>2]=i[s+8>>2],s=0),b=s,M=y,b|0}function rn(e,t,n,r){e|=0,t|=0,n|=0,r|=0;var a=0,o=0,s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0,S=0,C=0,w=0,D=0;if(o=K(e|0,t|0,52)|0,T()|0,o&=15,x=K(e|0,t|0,45)|0,T()|0,x&=127,x>>>0>121)return r=5,r|0;if(_=pe(x)|0,q(o|0,0,52)|0,c=T()|134225919,s=r,i[s>>2]=-1,i[s+4>>2]=c,s=i[n>>2]|0,c=i[n+4>>2]|0,n=i[n+8>>2]|0,!o){t=(s|0)<0,v=t?s:0,b=c-v|0,_=(b|0)<0,v=(_?0-b|0:0)+(n-v)|0,n=(v|0)<0,a=n?0:v,v=n?v:0,n=(_?0:b)-v|0,v=(t?0:s)-(_?b:0)-v|0,b=(n|0)<(v|0)?n:v,b=(a|0)<(b|0)?a:b,b=(b|0)>0?b:0,a=a-b|0,n=n-b|0;a:do switch(v-b|0){case 0:switch(n|0){case 0:if(a){a=(a|0)==1?1:7,y=11;break a}a=0;break a;case 1:if(a){a=(a|0)==1?3:7,y=11;break a}a=2;break a;default:return r=1,r|0}case 1:switch(n|0){case 0:if(a){a=(a|0)==1?5:7,y=11;break a}a=4;break a;case 1:if(a)a=1;else{a=6;break a}return a|0;default:return r=1,r|0}default:return r=1,r|0}while(0);return(y|0)==11&&(a|0)==7||(a=be(x,a)|0,(a|0)==127)?(r=1,r|0):(b=q(a|0,0,45)|0,x=T()|0,y=r,x=i[y+4>>2]&-1040385|x,i[r>>2]=i[y>>2]|b,i[r+4>>2]=x,r=0,r|0)}for(;;){if(g=o,o=o+-1|0,h=s-n|0,m=c-n|0,l=h>>>0>715827881|m>>>0>715827881,Et(g)|0){if(l){if(d=(h|0)>0,f=2147483647-h|0,p=-2147483648-h|0,(d?(f|0)<(h|0):(p|0)>(h|0))||(D=h<<1,d?(2147483647-D|0)<(h|0):(-2147483648-D|0)>(h|0))||((m|0)>0?(2147483647-m|0)<(m|0):(-2147483648-m|0)>(m|0))||(l=h*3|0,u=m<<1,(d?(f|0)<(u|0):(p|0)>(u|0))||((h|0)>-1?(l|-2147483648)>=(m|0):(l^-2147483648)<(m|0)))){a=1,y=107;break}}else l=h*3|0,u=m<<1;if(f=Qn((l-m|0)*.14285714285714285)|0,d=Qn((u+h|0)*.14285714285714285)|0,u=(d|0)<(f|0),l=u?f:d,u=u?d:f,(u|0)<0&&((u|0)==-2147483648||((l|0)>0?(2147483647-l|0)<(u|0):(-2147483648-l|0)>(u|0))||((l|0)>-1?(l|-2147483648)>=(u|0):(l^-2147483648)<(u|0)))){y=24;break}p=(f|0)<0,m=d-(p?f:0)|0,C=(m|0)<0,S=(p?0-f|0:0)-(C?m:0)|0,h=(S|0)<0,p=(p?0:f)-(C?m:0)-(h?S:0)|0,m=(C?0:m)-(h?S:0)|0,S=h?0:S,h=(m|0)<(p|0)?m:p,h=(S|0)<(h|0)?S:h,C=(h|0)>0,p=p-(C?h:0)|0,m=m-(C?h:0)|0,h=S-(C?h:0)|0,C=(p*3|0)+m|0,S=(C|0)<0,D=(m*3|0)+h-(S?C:0)|0,l=(D|0)<0,f=(h*3|0)+p-(S?C:0)-(l?D:0)|0,d=(f|0)<0,w=d?0:f,u=(l?0:D)-(d?f:0)|0,f=(S?0:C)-(l?D:0)-(d?f:0)|0,d=(u|0)<(f|0)?u:f,d=(w|0)<(d|0)?w:d,D=(d|0)>0,l=D?d:0,u=u-(D?d:0)|0,d=w-(D?d:0)|0}else{if(l){if(u=(h|0)>0,(u?(2147483647-h|0)<(h|0):(-2147483648-h|0)>(h|0))||(l=h<<1,d=(m|0)>0,d?(2147483647-m|0)<(m|0):(-2147483648-m|0)>(m|0))||(p=m<<1,d?(2147483647-p|0)<(m|0):(-2147483648-p|0)>(m|0))||(u?(2147483647-l|0)<(m|0):(-2147483648-l|0)>(m|0))||(u=m*3|0,(m|0)>-1?(u|-2147483648)>=(h|0):(u^-2147483648)<(h|0))){a=1,y=107;break}}else l=h<<1,u=m*3|0;if(f=Qn((l+m|0)*.14285714285714285)|0,d=Qn((u-h|0)*.14285714285714285)|0,u=(d|0)<(f|0),l=u?f:d,u=u?d:f,(u|0)<0&&((u|0)==-2147483648||((l|0)>0?(2147483647-l|0)<(u|0):(-2147483648-l|0)>(u|0))||((l|0)>-1?(l|-2147483648)>=(u|0):(l^-2147483648)<(u|0)))){y=36;break}p=(f|0)<0,m=d-(p?f:0)|0,w=(m|0)<0,D=(p?0-f|0:0)-(w?m:0)|0,h=(D|0)<0,p=(p?0:f)-(w?m:0)-(h?D:0)|0,m=(w?0:m)-(h?D:0)|0,D=h?0:D,h=(m|0)<(p|0)?m:p,h=(D|0)<(h|0)?D:h,w=(h|0)>0,p=p-(w?h:0)|0,m=m-(w?h:0)|0,h=D-(w?h:0)|0,w=(p*3|0)+h|0,D=(w|0)<0,S=(m*3|0)+p-(D?w:0)|0,l=(S|0)<0,f=(h*3|0)+m-(D?w:0)-(l?S:0)|0,d=(f|0)<0,C=d?0:f,u=(l?0:S)-(d?f:0)|0,f=(D?0:w)-(l?S:0)-(d?f:0)|0,d=(u|0)<(f|0)?u:f,d=(C|0)<(d|0)?C:d,S=(d|0)>0,l=S?d:0,u=u-(S?d:0)|0,d=C-(S?d:0)|0}l=s+(l-f)|0,w=(l|0)<0,u=c-u-(w?l:0)|0,f=(u|0)<0,S=n-d+(w?0-l|0:0)+(f?0-u|0:0)|0,s=(S|0)<0,d=s?0:S,D=(f?0:u)-(s?S:0)|0,S=(w?0:l)-(f?u:0)-(s?S:0)|0,s=(D|0)<(S|0)?D:S,s=(d|0)<(s|0)?d:s,n=(s|0)>0,S=S-(n?s:0)|0,u=r,f=i[u>>2]|0,u=i[u+4>>2]|0,c=(15-g|0)*3|0,l=q(7,0,c|0)|0,l=f&~l,u&=~(T()|0),f=(S|0)<0,w=f?S:0,D=D-(n?s:0)-w|0,C=(D|0)<0,w=(C?0-D|0:0)+(d-(n?s:0)-w)|0,s=(w|0)<0,n=s?0:w,w=s?w:0,s=(C?0:D)-w|0,w=(f?0:S)-(C?D:0)-w|0,D=(s|0)<(w|0)?s:w,D=(n|0)<(D|0)?n:D,D=(D|0)>0?D:0,n=n-D|0,s=s-D|0;b:do switch(w-D|0){case 0:switch(s|0){case 0:n=n|0?(n|0)==1?1:7:0;break b;case 1:n=n|0?(n|0)==1?3:7:2;break b;default:y=45;break b}case 1:switch(s|0){case 0:n=n|0?(n|0)==1?5:7:4;break b;case 1:if(n){y=45;break b}n=6;break b;default:y=45;break b}default:y=45}while(0);if((y|0)==45&&(y=0,n=7),C=q(n|0,0,c|0)|0,w=T()|0|u,D=r,i[D>>2]=C|l,i[D+4>>2]=w,(g|0)<=1){y=47;break}s=p,c=m,n=h}if((y|0)==24)E(27634,27425,416,27447);else if((y|0)==36)E(27634,27425,464,27461);else if((y|0)==47){if((p|0)>1|(m|0)>1|(h|0)>1)return D=1,D|0;S=(p|0)<0,w=S?p:0,D=m-w|0,C=(D|0)<0,w=(C?0-D|0:0)+(h-w)|0,o=(w|0)<0,n=o?0:w,w=o?w:0,o=(C?0:D)-w|0,w=(S?0:p)-(C?D:0)-w|0,D=(o|0)<(w|0)?o:w,D=(n|0)<(D|0)?n:D,D=(D|0)>0?D:0,n=n-D|0,o=o-D|0;c:do switch(w-D|0){case 0:switch(o|0){case 0:o=n|0?(n|0)==1?1:7:0;break c;case 1:o=n|0?(n|0)==1?3:7:2;break c;default:y=55;break c}case 1:switch(o|0){case 0:o=n|0?(n|0)==1?5:7:4;break c;case 1:if(n){y=55;break c}o=6;break c;default:y=55;break c}default:y=55}while(0);(y|0)==55&&(o=7),c=be(x,o)|0,u=(c|0)==127?0:pe(c)|0;d:do if(o){if(_){if(n=bt(e,t)|0,(n|0)==7)return D=5,D|0;s=i[21344+(n*28|0)+(o<<2)>>2]|0;e:do if((s|0)>0)for(n=o,o=0;;){switch(n|0){case 1:n=5;break;case 5:n=4;break;case 4:n=6;break;case 6:n=2;break;case 2:n=3;break;case 3:n=1}if(o=o+1|0,(o|0)==(s|0))break e}else n=o;while(0);if((n|0)==1)return D=9,D|0;o=be(x,n)|0,(o|0)==127&&E(27476,27315,415,27506),pe(o)|0?E(27521,27315,416,27506):(a=o,b=s,v=n)}else a=c,b=0,v=o;if(l=i[4272+(x*28|0)+(v<<2)>>2]|0,(l|0)<=-1&&E(27552,27315,423,27506),!u){if((b|0)<0)return D=5,D|0;if(b|0){s=r,n=0,o=i[s>>2]|0,s=i[s+4>>2]|0;do o=St(o,s)|0,s=T()|0,D=r,i[D>>2]=o,i[D+4>>2]=s,n=n+1|0;while((n|0)<(b|0))}if((l|0)<=0){y=104;break}for(s=r,n=0,o=i[s>>2]|0,s=i[s+4>>2]|0;;)if(o=St(o,s)|0,s=T()|0,D=r,i[D>>2]=o,i[D+4>>2]=s,n=n+1|0,(n|0)==(l|0)){y=104;break d}}if(c=xe(a,x)|0,(c|0)==7&&E(27291,27315,432,27506),n=r,o=i[n>>2]|0,n=i[n+4>>2]|0,(l|0)>0){s=0;do o=St(o,n)|0,n=T()|0,D=r,i[D>>2]=o,i[D+4>>2]=n,s=s+1|0;while((s|0)!=(l|0))}if(n=bt(o,n)|0,(n|0)==7&&E(27634,27315,444,27506),o=me(a)|0,o=i[(o?21760:21552)+(c*28|0)+(n<<2)>>2]|0,(o|0)<0&&E(27634,27315,458,27506),!o)y=104;else{c=r,n=0,s=i[c>>2]|0,c=i[c+4>>2]|0;do s=xt(s,c)|0,c=T()|0,D=r,i[D>>2]=s,i[D+4>>2]=c,n=n+1|0;while((n|0)<(o|0));y=104}}else if(!!(_|0)&!!(u|0)){if(a=bt(e,t)|0,n=r,n=bt(i[n>>2]|0,i[n+4>>2]|0)|0,(a|0)==7|(n|0)==7||(n=i[21344+(a*28|0)+(n<<2)>>2]|0,(n|0)<0))return D=5,D|0;if(!n)a=c,y=105;else{s=r,a=0,o=i[s>>2]|0,s=i[s+4>>2]|0;do o=St(o,s)|0,s=T()|0,D=r,i[D>>2]=o,i[D+4>>2]=s,a=a+1|0;while((a|0)<(n|0));a=c,y=104}}else a=c,y=104;while(0);return(y|0)==104&&u&&(y=105),(y|0)==105&&(D=r,(bt(i[D>>2]|0,i[D+4>>2]|0)|0)==1)?(D=9,D|0):(w=r,S=i[w>>2]|0,w=i[w+4>>2]&-1040385,C=q(a|0,0,45)|0,w=w|T()|0,D=r,i[D>>2]=S|C,i[D+4>>2]=w,D=0,D|0)}else if((y|0)==107)return a|0;return 0}function an(e,t,n,r,a,o){e|=0,t|=0,n|=0,r|=0,a|=0,o|=0;var s=0,c=0;return c=M,M=M+16|0,s=c,a|0?(s=15,M=c,s|0):(e=nn(e,t,n,r,s)|0,e||=(a=i[s+4>>2]|0,e=i[s+8>>2]|0,i[o>>2]=(i[s>>2]|0)-e,i[o+4>>2]=a-e,0),s=e,M=c,s|0)}function on(e,t,n,r,a){e|=0,t|=0,n|=0,r|=0,a|=0;var o=0,s=0,c=0,l=0,u=0,d=0,f=0;return f=M,M=M+16|0,d=f,r|0?(d=15,M=f,d|0):(c=i[n>>2]|0,s=i[n+4>>2]|0,i[d>>2]=c,l=d+4|0,i[l>>2]=s,u=d+8|0,i[u>>2]=0,n=(s|0)<(c|0),r=n?c:s,n=n?s:c,(n|0)<0?!((n|0)==-2147483648||((r|0)>0?(2147483647-r|0)<(n|0):(-2147483648-r|0)>(n|0)))&&!((r|0)>-1?(r|-2147483648)>=(n|0):(r^-2147483648)<(n|0))?o=5:r=1:o=5,(o|0)==5&&(r=s-c|0,o=0-c|0,(c|0)<0?(i[l>>2]=r,i[u>>2]=o,i[d>>2]=0,c=0):(r=s,o=0),s=c-r|0,n=o-r|0,(r|0)<0?(i[d>>2]=s,i[u>>2]=n,i[l>>2]=0,c=s,r=0):n=o,s=c-n|0,o=r-n|0,(n|0)<0?(i[d>>2]=s,i[l>>2]=o,i[u>>2]=0,n=0):(o=r,s=c),r=(o|0)<(s|0)?o:s,r=(n|0)<(r|0)?n:r,(r|0)>0&&(i[d>>2]=s-r,i[l>>2]=o-r,i[u>>2]=n-r),r=rn(e,t,d,a)|0),d=r,M=f,d|0)}function sn(e,t,n,r,a){e|=0,t|=0,n|=0,r|=0,a|=0;var o=0,s=0,c=0,l=0,u=0;return l=M,M=M+32|0,s=l+12|0,c=l,o=nn(e,t,e,t,s)|0,o|0?(c=o,M=l,c|0):(e=nn(e,t,n,r,c)|0,e|0?(c=e,M=l,c|0):(e=(i[s>>2]|0)-(i[c>>2]|0)|0,u=(e|0)<0,r=u?0-e|0:0,n=r+((i[s+4>>2]|0)-(i[c+4>>2]|0))|0,t=(n|0)<0,r=(i[s+8>>2]|0)-(i[c+8>>2]|0)+r+(t?0-n|0:0)|0,o=(r|0)<0,s=o?0:r,r=o?r:0,o=(t?0:n)-r|0,r=(u?0:e)-(t?n:0)-r|0,c=(o|0)<(r|0)?o:r,c=(s|0)<(c|0)?s:c,c=(c|0)>0?c:0,s=s-c|0,o=o-c|0,c=r-c|0,c=(c|0)>-1?c:0-c|0,o=(o|0)>-1?o:0-o|0,s=(s|0)>-1?s:0-s|0,s=(o|0)>(s|0)?o:s,s=(c|0)>(s|0)?c:s,c=a,i[c>>2]=s,i[c+4>>2]=((s|0)<0)<<31>>31,c=0,M=l,c|0))}function cn(e,t,n,r,a){e|=0,t|=0,n|=0,r|=0,a|=0;var o=0,s=0;return s=M,M=M+16|0,o=s,e=sn(e,t,n,r,o)|0,e|0?(o=e,M=s,o|0):(n=o,n=G(i[n>>2]|0,i[n+4>>2]|0,1,0)|0,r=T()|0,o=a,i[o>>2]=n,i[o+4>>2]=r,o=0,M=s,o|0)}function ln(e,t,n,r,a){e|=0,t|=0,n|=0,r|=0,a|=0;var o=0,s=0,c=0,l=0;return l=M,M=M+16|0,o=l,s=sn(e,t,n,r,o)|0,s|0?(a=s,M=l,a|0):(s=o,o=i[s>>2]|0,s=i[s+4>>2]|0,!(o|0)&!(s|0)?(i[a>>2]=e,i[a+4>>2]=t,a=0,M=l,a|0):(c=un(e,t,n,r,o,s,a,0,0,1,0)|0,c?(a=!(un(n,r,e,t,o,s,a,o,s,-1,-1)|0),a=a?0:c,M=l,a|0):(a=0,M=l,a|0)))}function un(e,t,n,r,a,o,s,c,u,d,f){e|=0,t|=0,n|=0,r|=0,a|=0,o|=0,s|=0,c|=0,u|=0,d|=0,f|=0;var p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0,S=0,C=0,w=0,D=0,O=0,k=0,A=0,j=0,N=0;if(j=M,M=M+48|0,p=j+24|0,m=j+12|0,A=j,i[p>>2]=0,i[p+4>>2]=0,i[p+8>>2]=0,i[m>>2]=0,i[m+4>>2]=0,i[m+8>>2]=0,nn(e,t,e,t,p)|0&&E(27634,27315,696,27575),nn(e,t,n,r,m)|0&&E(27634,27315,701,27575),_=p+8|0,r=i[_>>2]|0,n=r-(i[p>>2]|0)|0,i[p>>2]=n,k=p+4|0,r=(i[k>>2]|0)-r|0,i[k>>2]=r,k=r+n|0,p=0-k|0,i[_>>2]=p,_=m+8|0,b=i[_>>2]|0,y=b-(i[m>>2]|0)|0,i[m>>2]=y,O=m+4|0,b=(i[O>>2]|0)-b|0,i[O>>2]=b,O=b+y|0,i[_>>2]=0-O,D=1/(+(a>>>0)+4294967296*(o|0)),C=D*+(y-n|0),w=D*+(b-r|0),D*=+(k-O|0),i[A>>2]=n,O=A+4|0,i[O>>2]=r,k=A+8|0,i[k>>2]=p,(o|0)<0)return d=0,M=j,d|0;for(S=+(n|0),x=+(r|0),v=+(p|0),y=0,b=0;;){if(g=+(y>>>0)+4294967296*(b|0),N=C*g+S,h=w*g+x,g=D*g+v,r=~~+gr(+N),p=~~+gr(+h),n=~~+gr(+g),N=+l(+(+(r|0)-N)),h=+l(+(+(p|0)-h)),g=+l(+(+(n|0)-g)),N>h&N>g?(m=n+p|0,r=0-m|0):(m=0-r|0,h>g&&(p=m-n|0)),i[O>>2]=p,i[A>>2]=m,i[k>>2]=0,n=r+p|0,(r|0)>0?(i[O>>2]=n,i[k>>2]=r,i[A>>2]=0,m=0):(n=p,r=0),(n|0)<0?(p=m-n|0,i[A>>2]=p,r=r-n|0,i[k>>2]=r,i[O>>2]=0,m=p-r|0,n=0-r|0,(r|0)<0?(i[A>>2]=m,i[O>>2]=n,i[k>>2]=0,_=n,r=0):(_=0,m=p)):_=n,n=(_|0)<(m|0)?_:m,n=(r|0)<(n|0)?r:n,(n|0)>0&&(i[A>>2]=m-n,i[O>>2]=_-n,i[k>>2]=r-n),n=lr(y|0,b|0,d|0,f|0)|0,n=G(n|0,T()|0,c|0,u|0)|0,T()|0,n=rn(e,t,A,s+(n<<3)|0)|0,n|0){r=20;break}if(_=y,y=G(y|0,b|0,1,0)|0,m=b,b=T()|0,!((m|0)<(o|0)|(m|0)==(o|0)&_>>>0<a>>>0)){n=0,r=20;break}}return(r|0)==20?(M=j,n|0):0}function dn(e,t,n,r){e|=0,t|=0,n|=0,r|=0;var i=0,a=0,o=0;if(!(n|0)&!(r|0))return i=0,a=1,w(i|0),a|0;a=e,i=t,e=1,t=0;do o=!(n&1)&!0,e=lr((o?1:a)|0,(o?0:i)|0,e|0,t|0)|0,t=T()|0,n=fr(n|0,r|0,1)|0,r=T()|0,a=lr(a|0,i|0,a|0,i|0)|0,i=T()|0;while(!(!(n|0)&!(r|0)));return w(t|0),e|0}function fn(e,t,n,r){e|=0,t|=0,n|=0,r|=0;var o=0,s=0,c=0,l=0,u=0,f=0,p=0;l=M,M=M+16|0,s=l,c=K(e|0,t|0,52)|0,T()|0,c&=15;do if(c){if(o=At(e,t,s)|0,!o){f=+a[s>>3],u=1/d(+f),p=+a[26032+(c<<3)>>3],a[n>>3]=f+p,a[n+8>>3]=f-p,f=+a[s+8>>3],u=p*u,a[n+16>>3]=u+f,a[n+24>>3]=f-u;break}return c=o,M=l,c|0}else{if(o=K(e|0,t|0,45)|0,T()|0,o&=127,o>>>0>121)return c=5,M=l,c|0;s=22128+(o<<5)|0,i[n>>2]=i[s>>2],i[n+4>>2]=i[s+4>>2],i[n+8>>2]=i[s+8>>2],i[n+12>>2]=i[s+12>>2],i[n+16>>2]=i[s+16>>2],i[n+20>>2]=i[s+20>>2],i[n+24>>2]=i[s+24>>2],i[n+28>>2]=i[s+28>>2];break}while(0);return Pe(n,r?1.4:1.1),r=26160+(c<<3)|0,(i[r>>2]|0)==(e|0)&&(i[r+4>>2]|0)==(t|0)&&(a[n>>3]=1.5707963267948966),c=26288+(c<<3)|0,(i[c>>2]|0)==(e|0)&&(i[c+4>>2]|0)==(t|0)&&(a[n+8>>3]=-1.5707963267948966),+a[n>>3]!=1.5707963267948966&&+a[n+8>>3]!=-1.5707963267948966?(c=0,M=l,c|0):(a[n+16>>3]=3.141592653589793,a[n+24>>3]=-3.141592653589793,c=0,M=l,c|0)}function pn(e,t,n,a){e|=0,t|=0,n|=0,a|=0;var o=0,s=0,c=0,l=0,u=0,d=0,f=0;d=M,M=M+48|0,c=d+32|0,s=d+40|0,l=d,lt(c,0,0,0),u=i[c>>2]|0,c=i[c+4>>2]|0;do if(n>>>0<=15){if(o=bn(a)|0,o|0){a=l,i[a>>2]=0,i[a+4>>2]=0,i[l+8>>2]=o,i[l+12>>2]=-1,a=l+16|0,u=l+29|0,i[a>>2]=0,i[a+4>>2]=0,i[a+8>>2]=0,r[a+12|0]=0,r[u|0]=r[s|0]|0,r[u+1|0]=r[s+1|0]|0,r[u+2|0]=r[s+2|0]|0;break}if(o=er((i[t+8>>2]|0)+1|0,32)|0,o){xn(t,o),f=l,i[f>>2]=u,i[f+4>>2]=c,i[l+8>>2]=0,i[l+12>>2]=n,i[l+16>>2]=a,i[l+20>>2]=t,i[l+24>>2]=o,r[l+28|0]=0,u=l+29|0,r[u|0]=r[s|0]|0,r[u+1|0]=r[s+1|0]|0,r[u+2|0]=r[s+2|0]|0;break}a=l,i[a>>2]=0,i[a+4>>2]=0,i[l+8>>2]=13,i[l+12>>2]=-1,a=l+16|0,u=l+29|0,i[a>>2]=0,i[a+4>>2]=0,i[a+8>>2]=0,r[a+12|0]=0,r[u|0]=r[s|0]|0,r[u+1|0]=r[s+1|0]|0,r[u+2|0]=r[s+2|0]|0;break}else u=l,i[u>>2]=0,i[u+4>>2]=0,i[l+8>>2]=4,i[l+12>>2]=-1,u=l+16|0,f=l+29|0,i[u>>2]=0,i[u+4>>2]=0,i[u+8>>2]=0,r[u+12|0]=0,r[f|0]=r[s|0]|0,r[f+1|0]=r[s+1|0]|0,r[f+2|0]=r[s+2|0]|0;while(0);mn(l),i[e>>2]=i[l>>2],i[e+4>>2]=i[l+4>>2],i[e+8>>2]=i[l+8>>2],i[e+12>>2]=i[l+12>>2],i[e+16>>2]=i[l+16>>2],i[e+20>>2]=i[l+20>>2],i[e+24>>2]=i[l+24>>2],i[e+28>>2]=i[l+28>>2],M=d}function mn(e){e|=0;var t=0,n=0,a=0,o=0,s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0,S=0;if(S=M,M=M+336|0,h=S+168|0,g=S,a=e,n=i[a>>2]|0,a=i[a+4>>2]|0,!(n|0)&!(a|0))M=S;else if(t=e+28|0,r[t|0]|0?(n=hn(n,a)|0,a=T()|0):r[t|0]=1,x=e+20|0,!(i[i[x>>2]>>2]|0))t=e+24|0,n=i[t>>2]|0,n|0&&W(n),b=e,i[b>>2]=0,i[b+4>>2]=0,i[e+8>>2]=0,i[x>>2]=0,i[e+12>>2]=-1,i[e+16>>2]=0,i[t>>2]=0,M=S;else{b=e+16|0,t=i[b>>2]|0,o=t&15;a:do if(!(n|0)&!(a|0))y=e+24|0;else{_=e+12|0,p=(o|0)==3,f=t&255,u=(o|1)==3,m=e+24|0,d=(o+-1|0)>>>0<3,c=(o|2)==3,l=g+8|0;b:for(;;){if(s=K(n|0,a|0,52)|0,T()|0,s&=15,(s|0)==(i[_>>2]|0)){switch(f&15){case 0:case 2:case 3:if(o=At(n,a,h)|0,o|0){v=15;break b}if(Sn(i[x>>2]|0,i[m>>2]|0,h)|0){v=19;break b}}if(u&&(o=i[(i[x>>2]|0)+4>>2]|0,i[h>>2]=i[o>>2],i[h+4>>2]=i[o+4>>2],i[h+8>>2]=i[o+8>>2],i[h+12>>2]=i[o+12>>2],De(26896,h)|0)){if(Dt(i[(i[x>>2]|0)+4>>2]|0,s,g)|0){v=25;break}if(o=g,(i[o>>2]|0)==(n|0)&&(i[o+4>>2]|0)==(a|0)){v=29;break}}if(d){if(o=jt(n,a,h)|0,o|0){v=32;break}if(fn(n,a,g,0)|0){v=36;break}if(c&&Cn(i[x>>2]|0,i[m>>2]|0,h,g)|0||u&&Tn(i[x>>2]|0,i[m>>2]|0,h,g)|0){v=42;break}}if(p){if(t=fn(n,a,h,1)|0,o=i[m>>2]|0,t|0){v=45;break}if(Oe(o,h)|0&&(je(g,h),Ae(h,i[m>>2]|0)|0||Sn(i[x>>2]|0,i[m>>2]|0,l)|0||Tn(i[x>>2]|0,i[m>>2]|0,g,h)|0)){v=53;break}}}do if((s|0)<(i[_>>2]|0)){if(t=fn(n,a,h,1)|0,o=i[m>>2]|0,t|0){v=58;break b}if(!(Oe(o,h)|0)){v=73;break}if(Ae(i[m>>2]|0,h)|0&&(je(g,h),Cn(i[x>>2]|0,i[m>>2]|0,g,h)|0)){v=65;break b}if(n=ht(n,a,s+1|0,g)|0,n|0){v=67;break b}a=g,n=i[a>>2]|0,a=i[a+4>>2]|0}else v=73;while(0);if((v|0)==73&&(v=0,n=hn(n,a)|0,a=T()|0),!(n|0)&!(a|0)){y=m;break a}}switch(v|0){case 15:t=i[m>>2]|0,t|0&&W(t),v=e,i[v>>2]=0,i[v+4>>2]=0,i[x>>2]=0,i[_>>2]=-1,i[b>>2]=0,i[m>>2]=0,i[e+8>>2]=o,v=20;break;case 19:i[e>>2]=n,i[e+4>>2]=a,v=20;break;case 25:E(27634,27600,470,27611);break;case 29:i[e>>2]=n,i[e+4>>2]=a,M=S;return;case 32:t=i[m>>2]|0,t|0&&W(t),y=e,i[y>>2]=0,i[y+4>>2]=0,i[x>>2]=0,i[_>>2]=-1,i[b>>2]=0,i[m>>2]=0,i[e+8>>2]=o,M=S;return;case 36:E(27634,27600,493,27611);break;case 42:i[e>>2]=n,i[e+4>>2]=a,M=S;return;case 45:o|0&&W(o),v=e,i[v>>2]=0,i[v+4>>2]=0,i[x>>2]=0,i[_>>2]=-1,i[b>>2]=0,i[m>>2]=0,i[e+8>>2]=t,v=55;break;case 53:i[e>>2]=n,i[e+4>>2]=a,v=55;break;case 58:o|0&&W(o),v=e,i[v>>2]=0,i[v+4>>2]=0,i[x>>2]=0,i[_>>2]=-1,i[b>>2]=0,i[m>>2]=0,i[e+8>>2]=t,v=71;break;case 65:i[e>>2]=n,i[e+4>>2]=a,v=71;break;case 67:t=i[m>>2]|0,t|0&&W(t),y=e,i[y>>2]=0,i[y+4>>2]=0,i[x>>2]=0,i[_>>2]=-1,i[b>>2]=0,i[m>>2]=0,i[e+8>>2]=n,M=S;return}if((v|0)==20||(v|0)==55||(v|0)==71){M=S;return}}while(0);t=i[y>>2]|0,t|0&&W(t),v=e,i[v>>2]=0,i[v+4>>2]=0,i[e+8>>2]=0,i[x>>2]=0,i[e+12>>2]=-1,i[b>>2]=0,i[y>>2]=0,M=S}}function hn(e,t){e|=0,t|=0;var n=0,r=0,a=0,o=0,s=0,c=0,l=0,u=0,d=0,f=0;f=M,M=M+16|0,d=f,r=K(e|0,t|0,52)|0,T()|0,r&=15,n=K(e|0,t|0,45)|0,T()|0;do if(r){for(;n=q(r+4095|0,0,52)|0,a=T()|0|t&-15728641,o=(15-r|0)*3|0,s=q(7,0,o|0)|0,c=T()|0,n=n|e|s,a|=c,l=K(e|0,t|0,o|0)|0,T()|0,l&=7,r=r+-1|0,!(l>>>0<6);)if(r)t=a,e=n;else{u=4;break}if((u|0)==4){n=K(n|0,a|0,45)|0,T()|0;break}return d=!(l|0)&!!(ft(n,a)|0),d=q((d?2:1)+l|0,0,o|0)|0,u=T()|0|t&~c,d|=e&~s,w(u|0),M=f,d|0}while(0);return n&=127,n>>>0>120?(u=0,d=0,w(u|0),M=f,d|0):(lt(d,0,n+1|0,0),u=i[d+4>>2]|0,d=i[d>>2]|0,w(u|0),M=f,d|0)}function gn(e,t,n,r,a,o){e|=0,t|=0,n|=0,r|=0,a|=0,o|=0;var s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0;_=M,M=M+160|0,f=_+80|0,c=_+64|0,p=_+112|0,g=_,pn(f,e,t,n),u=f,Rt(c,i[u>>2]|0,i[u+4>>2]|0,t),u=c,l=i[u>>2]|0,u=i[u+4>>2]|0,s=i[f+8>>2]|0,m=p+4|0,i[m>>2]=i[f>>2],i[m+4>>2]=i[f+4>>2],i[m+8>>2]=i[f+8>>2],i[m+12>>2]=i[f+12>>2],i[m+16>>2]=i[f+16>>2],i[m+20>>2]=i[f+20>>2],i[m+24>>2]=i[f+24>>2],i[m+28>>2]=i[f+28>>2],m=g,i[m>>2]=l,i[m+4>>2]=u,m=g+8|0,i[m>>2]=s,e=g+12|0,t=p,n=e+36|0;do i[e>>2]=i[t>>2],e=e+4|0,t=t+4|0;while((e|0)<(n|0));if(p=g+48|0,i[p>>2]=i[c>>2],i[p+4>>2]=i[c+4>>2],i[p+8>>2]=i[c+8>>2],i[p+12>>2]=i[c+12>>2],!(l|0)&!(u|0))return g=s,M=_,g|0;n=g+16|0,d=g+24|0,f=g+28|0,s=0,c=0,t=l,e=u;do{if(!((s|0)<(a|0)|(s|0)==(a|0)&c>>>0<r>>>0)){h=4;break}if(u=c,c=G(c|0,s|0,1,0)|0,s=T()|0,u=o+(u<<3)|0,i[u>>2]=t,i[u+4>>2]=e,Bt(p),e=p,t=i[e>>2]|0,e=i[e+4>>2]|0,!(t|0)&!(e|0)){if(mn(n),t=n,e=i[t>>2]|0,t=i[t+4>>2]|0,!(e|0)&!(t|0)){h=10;break}zt(e,t,i[f>>2]|0,p),e=p,t=i[e>>2]|0,e=i[e+4>>2]|0}u=g,i[u>>2]=t,i[u+4>>2]=e}while(!(!(t|0)&!(e|0)));return(h|0)==4?(e=g+40|0,t=i[e>>2]|0,t|0&&W(t),h=g+16|0,i[h>>2]=0,i[h+4>>2]=0,i[d>>2]=0,i[g+36>>2]=0,i[f>>2]=-1,i[g+32>>2]=0,i[e>>2]=0,zt(0,0,0,p),i[g>>2]=0,i[g+4>>2]=0,i[m>>2]=0,g=14,M=_,g|0):((h|0)==10&&(i[g>>2]=0,i[g+4>>2]=0,i[m>>2]=i[d>>2]),g=i[m>>2]|0,M=_,g|0)}function _n(e,t,n,o){e|=0,t|=0,n|=0,o|=0;var s=0,c=0,u=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;if(g=M,M=M+48|0,p=g+32|0,f=g+40|0,m=g,!(i[e>>2]|0))return h=o,i[h>>2]=0,i[h+4>>2]=0,h=0,M=g,h|0;lt(p,0,0,0),u=p,s=i[u>>2]|0,u=i[u+4>>2]|0;do if(t>>>0>15)h=m,i[h>>2]=0,i[h+4>>2]=0,i[m+8>>2]=4,i[m+12>>2]=-1,h=m+16|0,n=m+29|0,i[h>>2]=0,i[h+4>>2]=0,i[h+8>>2]=0,r[h+12|0]=0,r[n|0]=r[f|0]|0,r[n+1|0]=r[f+1|0]|0,r[n+2|0]=r[f+2|0]|0,n=4,h=9;else{if(n=bn(n)|0,n|0){p=m,i[p>>2]=0,i[p+4>>2]=0,i[m+8>>2]=n,i[m+12>>2]=-1,p=m+16|0,h=m+29|0,i[p>>2]=0,i[p+4>>2]=0,i[p+8>>2]=0,r[p+12|0]=0,r[h|0]=r[f|0]|0,r[h+1|0]=r[f+1|0]|0,r[h+2|0]=r[f+2|0]|0,h=9;break}if(n=er((i[e+8>>2]|0)+1|0,32)|0,!n){h=m,i[h>>2]=0,i[h+4>>2]=0,i[m+8>>2]=13,i[m+12>>2]=-1,h=m+16|0,n=m+29|0,i[h>>2]=0,i[h+4>>2]=0,i[h+8>>2]=0,r[h+12|0]=0,r[n|0]=r[f|0]|0,r[n+1|0]=r[f+1|0]|0,r[n+2|0]=r[f+2|0]|0,n=13,h=9;break}xn(e,n),v=m,i[v>>2]=s,i[v+4>>2]=u,u=m+8|0,i[u>>2]=0,i[m+12>>2]=t,i[m+20>>2]=e,i[m+24>>2]=n,r[m+28|0]=0,s=m+29|0,r[s|0]=r[f|0]|0,r[s+1|0]=r[f+1|0]|0,r[s+2|0]=r[f+2|0]|0,i[m+16>>2]=3,_=+Ee(n),_*=+we(n),c=+l(+ +a[n>>3]),c=_/+d(+ +hr(+c,+ +l(+ +a[n+8>>3])))*6371.007180918475*6371.007180918475,s=m+12|0,n=i[s>>2]|0;a:do if((n|0)>0)do{if(Kt(n+-1|0,p)|0,!(c/+a[p>>3]>10))break a;v=i[s>>2]|0,n=v+-1|0,i[s>>2]=n}while((v|0)>1);while(0);if(mn(m),s=o,i[s>>2]=0,i[s+4>>2]=0,s=m,n=i[s>>2]|0,s=i[s+4>>2]|0,!(!(n|0)&!(s|0)))do dt(n,s,t,p)|0,f=p,e=o,f=G(i[e>>2]|0,i[e+4>>2]|0,i[f>>2]|0,i[f+4>>2]|0)|0,e=T()|0,v=o,i[v>>2]=f,i[v+4>>2]=e,mn(m),v=m,n=i[v>>2]|0,s=i[v+4>>2]|0;while(!(!(n|0)&!(s|0)));n=i[u>>2]|0}while(0);return v=n,M=g,v|0}function vn(e,t,n){e|=0,t|=0,n|=0;var r=0,o=0,s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0;if(!(De(t,n)|0)||(t=Te(t)|0,r=+a[n>>3],o=+a[n+8>>3],o=t&o<0?o+6.283185307179586:o,m=i[e>>2]|0,(m|0)<=0))return m=0,m|0;if(p=i[e+4>>2]|0,t){t=0,f=o,n=-1,e=0;a:for(;;){for(d=e;c=+a[p+(d<<4)>>3],o=+a[p+(d<<4)+8>>3],e=(n+2|0)%(m|0)|0,s=+a[p+(e<<4)>>3],l=+a[p+(e<<4)+8>>3],c>s?(u=c,c=l):(u=s,s=c,c=o,o=l),r=r==s|r==u?r+2220446049250313e-31:r,r<s|r>u;){if(n=d+1|0,(n|0)>=(m|0)){n=22;break a}e=d,d=n,n=e}if(l=c<0?c+6.283185307179586:c,c=o<0?o+6.283185307179586:o,f=l==f|c==f?f+-2220446049250313e-31:f,u=l+(c-l)*((r-s)/(u-s)),(u<0?u+6.283185307179586:u)>f&&(t^=1),e=d+1|0,(e|0)>=(m|0)){n=22;break}n=d}if((n|0)==22)return t|0}else{t=0,f=o,n=-1,e=0;b:for(;;){for(d=e;c=+a[p+(d<<4)>>3],o=+a[p+(d<<4)+8>>3],e=(n+2|0)%(m|0)|0,s=+a[p+(e<<4)>>3],l=+a[p+(e<<4)+8>>3],c>s?(u=c,c=l):(u=s,s=c,c=o,o=l),r=r==s|r==u?r+2220446049250313e-31:r,r<s|r>u;){if(n=d+1|0,(n|0)>=(m|0)){n=22;break b}e=d,d=n,n=e}if(f=c==f|o==f?f+-2220446049250313e-31:f,c+(o-c)*((r-s)/(u-s))>f&&(t^=1),e=d+1|0,(e|0)>=(m|0)){n=22;break}n=d}if((n|0)==22)return t|0}return 0}function yn(e,t){e|=0,t|=0;var n=0,r=0,o=0,s=0,c=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;if(_=i[e>>2]|0,!_)i[t>>2]=0,i[t+4>>2]=0,i[t+8>>2]=0,i[t+12>>2]=0,i[t+16>>2]=0,i[t+20>>2]=0,i[t+24>>2]=0,i[t+28>>2]=0;else if(v=t+8|0,a[v>>3]=17976931348623157e292,y=t+24|0,a[y>>3]=17976931348623157e292,a[t>>3]=-17976931348623157e292,b=t+16|0,a[b>>3]=-17976931348623157e292,!((_|0)<=0)){for(h=i[e+4>>2]|0,f=17976931348623157e292,p=-17976931348623157e292,m=0,e=-1,s=17976931348623157e292,c=17976931348623157e292,d=-17976931348623157e292,r=-17976931348623157e292,g=0;n=+a[h+(g<<4)>>3],u=+a[h+(g<<4)+8>>3],e=e+2|0,o=+a[h+(((e|0)==(_|0)?0:e)<<4)+8>>3],n<s&&(a[v>>3]=n,s=n),u<c&&(a[y>>3]=u,c=u),n>d?a[t>>3]=n:n=d,u>r&&(a[b>>3]=u,r=u),f=u>0&u<f?u:f,p=u<0&u>p?u:p,m|=+l(+(u-o))>3.141592653589793,e=g+1|0,(e|0)!=(_|0);)x=g,d=n,g=e,e=x;m&&(a[b>>3]=p,a[y>>3]=f)}}function bn(e){return e|=0,(e>>>0<4?0:15)|0}function xn(e,t){e|=0,t|=0;var n=0,r=0,o=0,s=0,c=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0,S=0,C=0,w=0,T=0,E=0;if(_=i[e>>2]|0,_){if(v=t+8|0,a[v>>3]=17976931348623157e292,y=t+24|0,a[y>>3]=17976931348623157e292,a[t>>3]=-17976931348623157e292,b=t+16|0,a[b>>3]=-17976931348623157e292,(_|0)>0){for(o=i[e+4>>2]|0,h=17976931348623157e292,g=-17976931348623157e292,r=0,n=-1,d=17976931348623157e292,f=17976931348623157e292,m=-17976931348623157e292,c=-17976931348623157e292,x=0;s=+a[o+(x<<4)>>3],p=+a[o+(x<<4)+8>>3],T=n+2|0,u=+a[o+(((T|0)==(_|0)?0:T)<<4)+8>>3],s<d&&(a[v>>3]=s,d=s),p<f&&(a[y>>3]=p,f=p),s>m?a[t>>3]=s:s=m,p>c&&(a[b>>3]=p,c=p),h=p>0&p<h?p:h,g=p<0&p>g?p:g,r|=+l(+(p-u))>3.141592653589793,n=x+1|0,(n|0)!=(_|0);)T=x,m=s,x=n,n=T;r&&(a[b>>3]=g,a[y>>3]=h)}}else i[t>>2]=0,i[t+4>>2]=0,i[t+8>>2]=0,i[t+12>>2]=0,i[t+16>>2]=0,i[t+20>>2]=0,i[t+24>>2]=0,i[t+28>>2]=0;if(T=e+8|0,n=i[T>>2]|0,!((n|0)<=0)){w=e+12|0,C=0;do if(o=i[w>>2]|0,r=C,C=C+1|0,y=t+(C<<5)|0,b=i[o+(r<<3)>>2]|0,b){if(x=t+(C<<5)+8|0,a[x>>3]=17976931348623157e292,e=t+(C<<5)+24|0,a[e>>3]=17976931348623157e292,a[y>>3]=-17976931348623157e292,S=t+(C<<5)+16|0,a[S>>3]=-17976931348623157e292,(b|0)>0){for(_=i[o+(r<<3)+4>>2]|0,h=17976931348623157e292,g=-17976931348623157e292,o=0,r=-1,v=0,d=17976931348623157e292,f=17976931348623157e292,p=-17976931348623157e292,c=-17976931348623157e292;s=+a[_+(v<<4)>>3],m=+a[_+(v<<4)+8>>3],r=r+2|0,u=+a[_+(((r|0)==(b|0)?0:r)<<4)+8>>3],s<d&&(a[x>>3]=s,d=s),m<f&&(a[e>>3]=m,f=m),s>p?a[y>>3]=s:s=p,m>c&&(a[S>>3]=m,c=m),h=m>0&m<h?m:h,g=m<0&m>g?m:g,o|=+l(+(m-u))>3.141592653589793,r=v+1|0,(r|0)!=(b|0);)E=v,v=r,p=s,r=E;o&&(a[S>>3]=g,a[e>>3]=h)}}else i[y>>2]=0,i[y+4>>2]=0,i[y+8>>2]=0,i[y+12>>2]=0,i[y+16>>2]=0,i[y+20>>2]=0,i[y+24>>2]=0,i[y+28>>2]=0,n=i[T>>2]|0;while((C|0)<(n|0))}}function Sn(e,t,n){e|=0,t|=0,n|=0;var r=0,a=0,o=0;if(!(vn(e,t,n)|0))return a=0,a|0;if(a=e+8|0,(i[a>>2]|0)<=0)return a=1,a|0;for(r=e+12|0,e=0;;){if(o=e,e=e+1|0,vn((i[r>>2]|0)+(o<<3)|0,t+(e<<5)|0,n)|0){e=0,r=6;break}if((e|0)>=(i[a>>2]|0)){e=1,r=6;break}}return(r|0)==6?e|0:0}function Cn(e,t,n,r){e|=0,t|=0,n|=0,r|=0;var a=0,o=0,s=0,c=0,l=0,u=0,d=0;if(u=M,M=M+16|0,c=u,s=n+8|0,!(vn(e,t,s)|0))return l=0,M=u,l|0;l=e+8|0;a:do if((i[l>>2]|0)>0){for(o=e+12|0,a=0;;){if(d=a,a=a+1|0,vn((i[o>>2]|0)+(d<<3)|0,t+(a<<5)|0,s)|0){a=0;break}if((a|0)>=(i[l>>2]|0))break a}return M=u,a|0}while(0);if(wn(e,t,n,r)|0)return d=0,M=u,d|0;i[c>>2]=i[n>>2],i[c+4>>2]=s,a=i[l>>2]|0;b:do if((a|0)>0)for(e=e+12|0,s=0,o=a;;){if(a=i[e>>2]|0,(i[a+(s<<3)>>2]|0)>0){if(vn(c,r,i[a+(s<<3)+4>>2]|0)|0||(a=s+1|0,wn((i[e>>2]|0)+(s<<3)|0,t+(a<<5)|0,n,r)|0)){a=0;break b}o=i[l>>2]|0}else a=s+1|0;if((a|0)<(o|0))s=a;else{a=1;break}}else a=1;while(0);return d=a,M=u,d|0}function wn(e,t,n,r){e|=0,t|=0,n|=0,r|=0;var o=0,s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0,S=0,C=0,w=0,T=0,E=0;if(w=M,M=M+176|0,b=w+172|0,o=w+168|0,x=w,!(Oe(t,r)|0))return e=0,M=w,e|0;if(ke(t,r,b,o),_r(x|0,n|0,168)|0,(i[n>>2]|0)>0){t=0;do T=x+8+(t<<4)+8|0,y=+Ht(+a[T>>3],i[o>>2]|0),a[T>>3]=y,t=t+1|0;while((t|0)<(i[n>>2]|0))}_=+a[r>>3],v=+a[r+8>>3],y=+Ht(+a[r+16>>3],i[o>>2]|0),h=+Ht(+a[r+24>>3],i[o>>2]|0);a:do if((i[e>>2]|0)>0){if(r=e+4|0,o=i[x>>2]|0,(o|0)<=0){for(t=0;;)if(t=t+1|0,(t|0)>=(i[e>>2]|0)){t=0;break a}}for(n=0;;){if(t=i[r>>2]|0,m=+a[t+(n<<4)>>3],g=+Ht(+a[t+(n<<4)+8>>3],i[b>>2]|0),t=i[r>>2]|0,n=n+1|0,T=(n|0)%(i[e>>2]|0)|0,s=+a[t+(T<<4)>>3],c=+Ht(+a[t+(T<<4)+8>>3],i[b>>2]|0),!(m>=_)|!(s>=_)&&!(m<=v)|!(s<=v)&&!(g<=h)|!(c<=h)&&!(g>=y)|!(c>=y)){p=s-m,d=c-g,t=0;do if(E=t,t=t+1|0,T=(t|0)==(o|0)?0:t,s=+a[x+8+(E<<4)+8>>3],c=+a[x+8+(T<<4)+8>>3]-s,l=+a[x+8+(E<<4)>>3],u=+a[x+8+(T<<4)>>3]-l,f=p*c-d*u,f!=0&&(S=g-s,C=m-l,u=(S*u-c*C)/f,!(u<0|u>1))&&(f=(p*S-d*C)/f,f>=0&f<=1)){t=1;break a}while((t|0)<(o|0))}if((n|0)>=(i[e>>2]|0)){t=0;break}}}else t=0;while(0);return E=t,M=w,E|0}function Tn(e,t,n,r){e|=0,t|=0,n|=0,r|=0;var a=0,o=0,s=0;if(wn(e,t,n,r)|0)return o=1,o|0;if(o=e+8|0,(i[o>>2]|0)<=0)return o=0,o|0;for(a=e+12|0,e=0;;){if(s=e,e=e+1|0,wn((i[a>>2]|0)+(s<<3)|0,t+(e<<5)|0,n,r)|0){e=1,a=6;break}if((e|0)>=(i[o>>2]|0)){e=0,a=6;break}}return(a|0)==6?e|0:0}function En(){return 8}function Dn(){return 16}function On(){return 168}function kn(){return 8}function An(){return 16}function jn(){return 12}function Mn(){return 8}function Nn(e){return e|=0,+(+((i[e>>2]|0)>>>0)+4294967296*(i[e+4>>2]|0))}function Pn(e){e|=0;var t=0,n=0;return n=+a[e>>3],t=+a[e+8>>3],+ +u(+(n*n+t*t))}function Fn(e,t,n,r,i){e|=0,t|=0,n|=0,r|=0,i|=0;var o=0,s=0,c=0,l=0,u=0,d=0,f=0,p=0;u=+a[e>>3],l=+a[t>>3]-u,c=+a[e+8>>3],s=+a[t+8>>3]-c,f=+a[n>>3],o=+a[r>>3]-f,p=+a[n+8>>3],d=+a[r+8>>3]-p,o=(o*(c-p)-(u-f)*d)/(l*d-s*o),a[i>>3]=u+l*o,a[i+8>>3]=c+s*o}function In(e,t){return e|=0,t|=0,+l(+(+a[e>>3]-a[t>>3]))<1.1920928955078125e-7?(t=+l(+(+a[e+8>>3]-a[t+8>>3]))<1.1920928955078125e-7,t|0):(t=0,t|0)}function Ln(e,t,n){e|=0,t|=0,n|=0;var r=0,a=0,o=0;if(o=M,M=M+16|0,a=o,r=ft(e,t)|0,(n+-1|0)>>>0>5||(r=!!(r|0),(n|0)==1&r))return a=-1,M=o,a|0;do if(Rn(e,t,a)|0)r=-1;else{if(r){r=((i[26416+(n<<2)>>2]|0)+5-(i[a>>2]|0)|0)%5|0;break}r=((i[26448+(n<<2)>>2]|0)+6-(i[a>>2]|0)|0)%6|0;break}while(0);return a=r,M=o,a|0}function Rn(e,t,n){e|=0,t|=0,n|=0;var r=0,a=0,o=0,s=0,c=0,l=0,u=0,d=0;if(d=M,M=M+32|0,c=d+16|0,l=d,r=kt(e,t,c)|0,r|0)return n=r,M=d,n|0;o=it(e,t)|0,u=bt(e,t)|0,_e(o,l),r=ve(o,i[c>>2]|0)|0;do if(pe(o)|0){do switch(o|0){case 4:a=0;break;case 14:a=1;break;case 24:a=2;break;case 38:a=3;break;case 49:a=4;break;case 58:a=5;break;case 63:a=6;break;case 72:a=7;break;case 83:a=8;break;case 97:a=9;break;case 107:a=10;break;case 117:a=11;break;default:E(27634,27636,75,27645)}while(0);if(s=i[26480+(a*24|0)+8>>2]|0,t=i[26480+(a*24|0)+16>>2]|0,e=i[c>>2]|0,(e|0)!=(i[l>>2]|0)&&(l=me(o)|0,e=i[c>>2]|0,l|(e|0)==(t|0)&&(r=(r+1|0)%6|0)),(u|0)==3&(e|0)==(t|0)){r=(r+5|0)%6|0;break}(u|0)==5&(e|0)==(s|0)&&(r=(r+1|0)%6|0)}while(0);return i[n>>2]=r,n=0,M=d,n|0}function zn(e,t,n,r){e|=0,t|=0,n|=0,r|=0;var a=0,o=0,s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0;if(b=M,M=M+32|0,y=b+24|0,_=b+20|0,h=b+8|0,m=b+16|0,p=b,l=!(ft(e,t)|0),l=l?6:5,d=K(e|0,t|0,52)|0,T()|0,d&=15,l>>>0<=n>>>0)return r=2,M=b,r|0;f=!(d|0),!f&&(g=q(7,0,(d^15)*3|0)|0,!(g&e|0)&!((T()|0)&t))?a=n:o=4;a:do if((o|0)==4){if(a=!!(ft(e,t)|0),((a?4:5)|0)<(n|0)||Rn(e,t,y)|0||(o=(i[y>>2]|0)+n|0,a=a?26768+(((o|0)%5|0)<<2)|0:26800+(((o|0)%6|0)<<2)|0,g=i[a>>2]|0,(g|0)==7))return r=1,M=b,r|0;i[_>>2]=0,a=z(e,t,g,_,h)|0;do if(!a){if(c=h,u=i[c>>2]|0,c=i[c+4>>2]|0,s=c>>>0<t>>>0|(c|0)==(t|0)&u>>>0<e>>>0,o=s?u:e,s=s?c:t,!f&&(f=q(7,0,(d^15)*3|0)|0,!(u&f|0)&!(c&(T()|0))))a=n;else{if(c=(n+-1+l|0)%(l|0)|0,a=ft(e,t)|0,(c|0)<0&&E(27634,27636,248,27661),l=!!(a|0),((l?4:5)|0)<(c|0)&&E(27634,27636,248,27661),Rn(e,t,y)|0&&E(27634,27636,248,27661),a=(i[y>>2]|0)+c|0,a=l?26768+(((a|0)%5|0)<<2)|0:26800+(((a|0)%6|0)<<2)|0,c=i[a>>2]|0,(c|0)==7&&E(27634,27636,248,27661),i[m>>2]=0,a=z(e,t,c,m,p)|0,a|0)break;u=p,l=i[u>>2]|0,u=i[u+4>>2]|0;do if(u>>>0<s>>>0|(u|0)==(s|0)&l>>>0<o>>>0){if(o=ft(l,u)|0?se(l,u,e,t)|0:i[26864+((((i[m>>2]|0)+(i[26832+(c<<2)>>2]|0)|0)%6|0)<<2)>>2]|0,a=ft(l,u)|0,(o+-1|0)>>>0>5||(a=!!(a|0),(o|0)==1&a)){a=-1,o=l,s=u;break}do if(Rn(l,u,y)|0)a=-1;else{if(a){a=((i[26416+(o<<2)>>2]|0)+5-(i[y>>2]|0)|0)%5|0;break}a=((i[26448+(o<<2)>>2]|0)+6-(i[y>>2]|0)|0)%6|0;break}while(0);o=l,s=u}else a=n;while(0);c=h,u=i[c>>2]|0,c=i[c+4>>2]|0}if((o|0)==(u|0)&(s|0)==(c|0)){if(l=!!(ft(u,c)|0),e=l?se(u,c,e,t)|0:i[26864+((((i[_>>2]|0)+(i[26832+(g<<2)>>2]|0)|0)%6|0)<<2)>>2]|0,a=ft(u,c)|0,(e+-1|0)>>>0<=5&&(v=!!(a|0),!((e|0)==1&v)))do if(Rn(u,c,y)|0)a=-1;else{if(v){a=((i[26416+(e<<2)>>2]|0)+5-(i[y>>2]|0)|0)%5|0;break}a=((i[26448+(e<<2)>>2]|0)+6-(i[y>>2]|0)|0)%6|0;break}while(0);else a=-1;a=a+1|0,a=(a|0)==6|l&(a|0)==5?0:a}t=s,e=o;break a}while(0);return r=a,M=b,r|0}while(0);return v=q(a|0,0,56)|0,y=T()|0|t&-2130706433|536870912,i[r>>2]=v|e,i[r+4>>2]=y,r=0,M=b,r|0}function Bn(e,t,n){e|=0,t|=0,n|=0;var r=0,a=0,o=0;return o=!(ft(e,t)|0),r=zn(e,t,0,n)|0,a=!(r|0),o?!a||(r=zn(e,t,1,n+8|0)|0,r|0)||(r=zn(e,t,2,n+16|0)|0,r|0)||(r=zn(e,t,3,n+24|0)|0,r|0)||(r=zn(e,t,4,n+32|0)|0,r)?(o=r,o|0):zn(e,t,5,n+40|0)|0:!a||(r=zn(e,t,1,n+8|0)|0,r|0)||(r=zn(e,t,2,n+16|0)|0,r|0)||(r=zn(e,t,3,n+24|0)|0,r|0)||(r=zn(e,t,4,n+32|0)|0,r|0)?(o=r,o|0):(o=n+40|0,i[o>>2]=0,i[o+4>>2]=0,o=0,o|0)}function Vn(e,t,n){e|=0,t|=0,n|=0;var r=0,a=0,o=0,s=0,c=0,l=0;return l=M,M=M+192|0,a=l,o=l+168|0,s=K(e|0,t|0,56)|0,T()|0,s&=7,c=t&-2130706433|134217728,r=kt(e,c,o)|0,r|0?(c=r,M=l,c|0):(t=K(e|0,t|0,52)|0,T()|0,t&=15,ft(e,c)|0?Ze(o,t,s,1,a):tt(o,t,s,1,a),c=a+8|0,i[n>>2]=i[c>>2],i[n+4>>2]=i[c+4>>2],i[n+8>>2]=i[c+8>>2],i[n+12>>2]=i[c+12>>2],c=0,M=l,c|0)}function Hn(e,t){e|=0,t|=0;var n=0,r=0,a=0,o=0;return a=M,M=M+16|0,n=a,!(!0&(t&2013265920)==536870912)||(r=t&-2130706433|134217728,!(st(e,r)|0))?(r=0,M=a,r|0):(o=K(e|0,t|0,56)|0,T()|0,o=!(zn(e,r,o&7,n)|0),r=n,r=o&((i[r>>2]|0)==(e|0)?(i[r+4>>2]|0)==(t|0):0)&1,M=a,r|0)}function Un(){return 27680}function Wn(e,t,n,r){e|=0,t|=0,n|=0,r|=0;var a=0,o=0,s=0,c=0,l=0,u=0,d=0,f=0,p=0;f=M,M=M+208|0,l=f,u=f+192|0,s=y(n,t)|0,c=u,i[c>>2]=1,i[c+4>>2]=0;a:do if(s|0){for(c=0-n|0,i[l+4>>2]=n,i[l>>2]=n,a=2,t=n,o=n;t=t+n+o|0,i[l+(a<<2)>>2]=t,t>>>0<s>>>0;)p=o,a=a+1|0,o=t,t=p;if(o=e+s+c|0,o>>>0>e>>>0){s=o,a=1,t=1;do{do if((t&3)!=3){if(t=a+-1|0,(i[l+(t<<2)>>2]|0)>>>0<(s-e|0)>>>0?Gn(e,n,r,a,l):qn(e,n,r,u,a,0,l),(a|0)==1){Jn(u,1),a=0;break}Jn(u,t),a=1;break}else Gn(e,n,r,a,l),Kn(u,2),a=a+2|0;while(0);t=i[u>>2]|1,i[u>>2]=t,e=e+n|0}while(e>>>0<o>>>0)}else a=1,t=1;for(qn(e,n,r,u,a,0,l),o=u+4|0;;){if((a|0)==1&(t|0)==1){if(i[o>>2]|0)d=19;else break a}else(a|0)<2?d=19:(Jn(u,2),p=a+-2|0,i[u>>2]=i[u>>2]^7,Kn(u,1),qn(e+(0-(i[l+(p<<2)>>2]|0))+c|0,n,r,u,a+-1|0,1,l),Jn(u,1),t=i[u>>2]|1,i[u>>2]=t,e=e+c|0,qn(e,n,r,u,p,1,l),a=p);(d|0)==19&&(d=0,t=Yn(u)|0,Kn(u,t),e=e+c|0,a=t+a|0,t=i[u>>2]|0)}}while(0);M=f}function Gn(e,t,n,r,a){e|=0,t|=0,n|=0,r|=0,a|=0;var o=0,s=0,c=0,l=0,u=0,d=0,f=0;f=M,M=M+240|0,d=f,i[d>>2]=e;a:do if((r|0)>1)for(u=0-t|0,c=e,o=r,r=1,s=e;;){if(c=c+u|0,l=o+-2|0,e=c+(0-(i[a+(l<<2)>>2]|0))|0,(wr[n&3](s,e)|0)>-1&&(wr[n&3](s,c)|0)>-1||(s=d+(r<<2)|0,(wr[n&3](e,c)|0)>-1?(i[s>>2]=e,o=o+-1|0):(i[s>>2]=c,e=c,o=l),r=r+1|0,(o|0)<=1))break a;c=e,s=i[d>>2]|0}else r=1;while(0);Zn(t,d,r),M=f}function Kn(e,t){e|=0,t|=0;var n=0,r=0,a=0;a=e+4|0,t>>>0>31?(r=i[a>>2]|0,i[e>>2]=r,i[a>>2]=0,t=t+-32|0,n=0):(n=i[a>>2]|0,r=i[e>>2]|0),i[e>>2]=n<<32-t|r>>>t,i[a>>2]=n>>>t}function qn(e,t,n,r,a,o,s){e|=0,t|=0,n|=0,r|=0,a|=0,o|=0,s|=0;var c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0;m=M,M=M+240|0,f=m+232|0,p=m,h=i[r>>2]|0,i[f>>2]=h,l=i[r+4>>2]|0,u=f+4|0,i[u>>2]=l,i[p>>2]=e;a:do if((h|0)!=1|!!(l|0)&&(d=0-t|0,c=e+(0-(i[s+(a<<2)>>2]|0))|0,(wr[n&3](c,e)|0)>=1))for(r=1,o=!(o|0),l=c;;){if(o&(a|0)>1&&(o=e+d|0,c=i[s+(a+-2<<2)>>2]|0,(wr[n&3](o,l)|0)>-1||(wr[n&3](o+(0-c)|0,l)|0)>-1)){c=10;break a}if(o=r+1|0,i[p+(r<<2)>>2]=l,h=Yn(f)|0,Kn(f,h),a=h+a|0,!((i[f>>2]|0)!=1|!!(i[u>>2]|0))){r=o,e=l,c=10;break a}if(e=l+(0-(i[s+(a<<2)>>2]|0))|0,(wr[n&3](e,i[p>>2]|0)|0)<1){e=l,r=o,o=0,c=9;break}h=l,r=o,o=1,l=e,e=h}else r=1,c=9;while(0);(c|0)==9&&!(o|0)&&(c=10),(c|0)==10&&(Zn(t,p,r),Gn(e,t,n,a,s)),M=m}function Jn(e,t){e|=0,t|=0;var n=0,r=0,a=0;a=e+4|0,t>>>0>31?(r=i[e>>2]|0,i[a>>2]=r,i[e>>2]=0,t=t+-32|0,n=0):(n=i[e>>2]|0,r=i[a>>2]|0),i[a>>2]=n>>>(32-t|0)|r<<t,i[e>>2]=n<<t}function Yn(e){e|=0;var t=0;return t=Xn((i[e>>2]|0)+-1|0)|0,t?t|0:(t=Xn(i[e+4>>2]|0)|0,(t|0?t+32|0:0)|0)}function Xn(e){e|=0;var t=0;if(e){if(e&1)e=0;else for(t=e,e=0;e=e+1|0,!(t&2);)t>>>=1}else e=32;return e|0}function Zn(e,t,n){e|=0,t|=0,n|=0;var r=0,a=0,o=0,s=0,c=0;s=M,M=M+256|0,r=s;a:do if((n|0)>=2&&(o=t+(n<<2)|0,i[o>>2]=r,e|0))for(;;){a=e>>>0<256?e:256,_r(r|0,i[t>>2]|0,a|0)|0,r=0;do c=t+(r<<2)|0,r=r+1|0,_r(i[c>>2]|0,i[t+(r<<2)>>2]|0,a|0)|0,i[c>>2]=(i[c>>2]|0)+a;while((r|0)!=(n|0));if(e=e-a|0,!e)break a;r=i[o>>2]|0}while(0);M=s}function Qn(e){return e=+e,~~+br(+e)|0}function $n(e){e|=0;var t=0,n=0,r=0,a=0,o=0,s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0,S=0;S=M,M=M+16|0,p=S;do if(e>>>0<245){if(u=e>>>0<11?16:e+11&-8,e=u>>>3,f=i[6921]|0,n=f>>>e,n&3)return t=(n&1^1)+e|0,e=27724+(t<<1<<2)|0,n=e+8|0,r=i[n>>2]|0,a=r+8|0,o=i[a>>2]|0,(o|0)==(e|0)?i[6921]=f&~(1<<t):(i[o+12>>2]=e,i[n>>2]=o),x=t<<3,i[r+4>>2]=x|3,x=r+x+4|0,i[x>>2]=i[x>>2]|1,x=a,M=S,x|0;if(d=i[6923]|0,u>>>0>d>>>0){if(n|0)return t=2<<e,t=n<<e&(t|0-t),t=(t&0-t)+-1|0,c=t>>>12&16,t>>>=c,n=t>>>5&8,t>>>=n,o=t>>>2&4,t>>>=o,e=t>>>1&2,t>>>=e,r=t>>>1&1,r=(n|c|o|e|r)+(t>>>r)|0,t=27724+(r<<1<<2)|0,e=t+8|0,o=i[e>>2]|0,c=o+8|0,n=i[c>>2]|0,(n|0)==(t|0)?(e=f&~(1<<r),i[6921]=e):(i[n+12>>2]=t,i[e>>2]=n,e=f),x=r<<3,s=x-u|0,i[o+4>>2]=u|3,a=o+u|0,i[a+4>>2]=s|1,i[o+x>>2]=s,d|0&&(r=i[6926]|0,t=d>>>3,n=27724+(t<<1<<2)|0,t=1<<t,e&t?(e=n+8|0,t=i[e>>2]|0):(i[6921]=e|t,t=n,e=n+8|0),i[e>>2]=r,i[t+12>>2]=r,i[r+8>>2]=t,i[r+12>>2]=n),i[6923]=s,i[6926]=a,x=c,M=S,x|0;if(o=i[6922]|0,o){for(n=(o&0-o)+-1|0,a=n>>>12&16,n>>>=a,r=n>>>5&8,n>>>=r,s=n>>>2&4,n>>>=s,c=n>>>1&2,n>>>=c,l=n>>>1&1,l=i[27988+((r|a|s|c|l)+(n>>>l)<<2)>>2]|0,n=l,c=l,l=(i[l+4>>2]&-8)-u|0;e=i[n+16>>2]|0,!(!e&&(e=i[n+20>>2]|0,!e));)s=(i[e+4>>2]&-8)-u|0,a=s>>>0<l>>>0,n=e,c=a?e:c,l=a?s:l;if(s=c+u|0,s>>>0>c>>>0){a=i[c+24>>2]|0,t=i[c+12>>2]|0;do if((t|0)==(c|0)){if(e=c+20|0,t=i[e>>2]|0,!t&&(e=c+16|0,t=i[e>>2]|0,!t)){n=0;break}for(;;)if(r=t+20|0,n=i[r>>2]|0,n)t=n,e=r;else if(r=t+16|0,n=i[r>>2]|0,n)t=n,e=r;else break;i[e>>2]=0,n=t}else n=i[c+8>>2]|0,i[n+12>>2]=t,i[t+8>>2]=n,n=t;while(0);do if(a|0){if(t=i[c+28>>2]|0,e=27988+(t<<2)|0,(c|0)==(i[e>>2]|0)){if(i[e>>2]=n,!n){i[6922]=o&~(1<<t);break}}else if(x=a+16|0,i[((i[x>>2]|0)==(c|0)?x:a+20|0)>>2]=n,!n)break;i[n+24>>2]=a,t=i[c+16>>2]|0,t|0&&(i[n+16>>2]=t,i[t+24>>2]=n),t=i[c+20>>2]|0,t|0&&(i[n+20>>2]=t,i[t+24>>2]=n)}while(0);return l>>>0<16?(x=l+u|0,i[c+4>>2]=x|3,x=c+x+4|0,i[x>>2]=i[x>>2]|1):(i[c+4>>2]=u|3,i[s+4>>2]=l|1,i[s+l>>2]=l,d|0&&(r=i[6926]|0,t=d>>>3,n=27724+(t<<1<<2)|0,t=1<<t,t&f?(e=n+8|0,t=i[e>>2]|0):(i[6921]=t|f,t=n,e=n+8|0),i[e>>2]=r,i[t+12>>2]=r,i[r+8>>2]=t,i[r+12>>2]=n),i[6923]=l,i[6926]=s),x=c+8|0,M=S,x|0}f=u}else f=u}else f=u}else if(e>>>0<=4294967231){if(e=e+11|0,u=e&-8,r=i[6922]|0,r){a=0-u|0,e>>>=8,e?u>>>0>16777215?l=31:(f=(e+1048320|0)>>>16&8,g=e<<f,c=(g+520192|0)>>>16&4,g<<=c,l=(g+245760|0)>>>16&2,l=14-(c|f|l)+(g<<l>>>15)|0,l=u>>>(l+7|0)&1|l<<1):l=0,n=i[27988+(l<<2)>>2]|0;a:do if(!n)n=0,e=0,g=61;else for(e=0,c=u<<((l|0)==31?0:25-(l>>>1)|0),o=0;;){if(s=(i[n+4>>2]&-8)-u|0,s>>>0<a>>>0){if(s)e=n,a=s;else{e=n,a=0,g=65;break a}}if(g=i[n+20>>2]|0,n=i[n+16+(c>>>31<<2)>>2]|0,o=!(g|0)|(g|0)==(n|0)?o:g,n)c<<=1;else{n=o,g=61;break}}while(0);if((g|0)==61){if(!(n|0)&!(e|0)){if(e=2<<l,e=(e|0-e)&r,!e){f=u;break}f=(e&0-e)+-1|0,s=f>>>12&16,f>>>=s,o=f>>>5&8,f>>>=o,c=f>>>2&4,f>>>=c,l=f>>>1&2,f>>>=l,n=f>>>1&1,e=0,n=i[27988+((o|s|c|l|n)+(f>>>n)<<2)>>2]|0}n?g=65:(c=e,s=a)}if((g|0)==65)for(o=n;;)if(f=(i[o+4>>2]&-8)-u|0,n=f>>>0<a>>>0,a=n?f:a,e=n?o:e,n=i[o+16>>2]|0,n||=i[o+20>>2]|0,n)o=n;else{c=e,s=a;break}if(c|0&&s>>>0<((i[6923]|0)-u|0)>>>0&&(d=c+u|0,d>>>0>c>>>0)){o=i[c+24>>2]|0,t=i[c+12>>2]|0;do if((t|0)==(c|0)){if(e=c+20|0,t=i[e>>2]|0,!t&&(e=c+16|0,t=i[e>>2]|0,!t)){t=0;break}for(;;)if(a=t+20|0,n=i[a>>2]|0,n)t=n,e=a;else if(a=t+16|0,n=i[a>>2]|0,n)t=n,e=a;else break;i[e>>2]=0}else x=i[c+8>>2]|0,i[x+12>>2]=t,i[t+8>>2]=x;while(0);do if(o){if(e=i[c+28>>2]|0,n=27988+(e<<2)|0,(c|0)==(i[n>>2]|0)){if(i[n>>2]=t,!t){r&=~(1<<e),i[6922]=r;break}}else if(x=o+16|0,i[((i[x>>2]|0)==(c|0)?x:o+20|0)>>2]=t,!t)break;i[t+24>>2]=o,e=i[c+16>>2]|0,e|0&&(i[t+16>>2]=e,i[e+24>>2]=t),e=i[c+20>>2]|0,e&&(i[t+20>>2]=e,i[e+24>>2]=t)}while(0);b:do if(s>>>0<16)x=s+u|0,i[c+4>>2]=x|3,x=c+x+4|0,i[x>>2]=i[x>>2]|1;else{if(i[c+4>>2]=u|3,i[d+4>>2]=s|1,i[d+s>>2]=s,t=s>>>3,s>>>0<256){n=27724+(t<<1<<2)|0,e=i[6921]|0,t=1<<t,e&t?(e=n+8|0,t=i[e>>2]|0):(i[6921]=e|t,t=n,e=n+8|0),i[e>>2]=d,i[t+12>>2]=d,i[d+8>>2]=t,i[d+12>>2]=n;break}if(t=s>>>8,t?s>>>0>16777215?n=31:(b=(t+1048320|0)>>>16&8,x=t<<b,y=(x+520192|0)>>>16&4,x<<=y,n=(x+245760|0)>>>16&2,n=14-(y|b|n)+(x<<n>>>15)|0,n=s>>>(n+7|0)&1|n<<1):n=0,t=27988+(n<<2)|0,i[d+28>>2]=n,e=d+16|0,i[e+4>>2]=0,i[e>>2]=0,e=1<<n,!(r&e)){i[6922]=r|e,i[t>>2]=d,i[d+24>>2]=t,i[d+12>>2]=d,i[d+8>>2]=d;break}t=i[t>>2]|0;c:do if((i[t+4>>2]&-8)!=(s|0)){for(r=s<<((n|0)==31?0:25-(n>>>1)|0);n=t+16+(r>>>31<<2)|0,e=i[n>>2]|0,e;){if((i[e+4>>2]&-8)==(s|0)){t=e;break c}r<<=1,t=e}i[n>>2]=d,i[d+24>>2]=t,i[d+12>>2]=d,i[d+8>>2]=d;break b}while(0);b=t+8|0,x=i[b>>2]|0,i[x+12>>2]=d,i[b>>2]=d,i[d+8>>2]=x,i[d+12>>2]=t,i[d+24>>2]=0}while(0);return x=c+8|0,M=S,x|0}f=u}else f=u}else f=-1;while(0);if(n=i[6923]|0,n>>>0>=f>>>0)return t=n-f|0,e=i[6926]|0,t>>>0>15?(x=e+f|0,i[6926]=x,i[6923]=t,i[x+4>>2]=t|1,i[e+n>>2]=t,i[e+4>>2]=f|3):(i[6923]=0,i[6926]=0,i[e+4>>2]=n|3,x=e+n+4|0,i[x>>2]=i[x>>2]|1),x=e+8|0,M=S,x|0;if(s=i[6924]|0,s>>>0>f>>>0)return y=s-f|0,i[6924]=y,x=i[6927]|0,b=x+f|0,i[6927]=b,i[b+4>>2]=y|1,i[x+4>>2]=f|3,x=x+8|0,M=S,x|0;if(i[7039]|0?e=i[7041]|0:(i[7041]=4096,i[7040]=4096,i[7042]=-1,i[7043]=-1,i[7044]=0,i[7032]=0,i[7039]=p&-16^1431655768,e=4096),c=f+48|0,l=f+47|0,o=e+l|0,a=0-e|0,u=o&a,u>>>0<=f>>>0||(e=i[7031]|0,e|0&&(d=i[7029]|0,p=d+u|0,p>>>0<=d>>>0|p>>>0>e>>>0)))return x=0,M=S,x|0;d:do if(i[7032]&4)t=0,g=143;else{n=i[6927]|0;e:do if(n){for(r=28132;p=i[r>>2]|0,!(p>>>0<=n>>>0&&(p+(i[r+4>>2]|0)|0)>>>0>n>>>0);)if(e=i[r+8>>2]|0,e)r=e;else{g=128;break e}if(t=o-s&a,t>>>0<2147483647){if(e=xr(t|0)|0,(e|0)==((i[r>>2]|0)+(i[r+4>>2]|0)|0)){if((e|0)!=-1){s=t,o=e,g=145;break d}}else r=e,g=136}else t=0}else g=128;while(0);do if((g|0)==128){if(n=xr(0)|0,(n|0)!=-1&&(t=n,m=i[7040]|0,h=m+-1|0,t=(h&t|0?(h+t&0-m)-t|0:0)+u|0,m=i[7029]|0,h=t+m|0,t>>>0>f>>>0&t>>>0<2147483647)){if(p=i[7031]|0,p|0&&h>>>0<=m>>>0|h>>>0>p>>>0){t=0;break}if(e=xr(t|0)|0,(e|0)==(n|0)){s=t,o=n,g=145;break d}r=e,g=136}else t=0}while(0);do if((g|0)==136){if(n=0-t|0,!(c>>>0>t>>>0&(t>>>0<2147483647&(r|0)!=-1))){if((r|0)==-1){t=0;break}s=t,o=r,g=145;break d}if(e=i[7041]|0,e=l-t+e&0-e,e>>>0>=2147483647){s=t,o=r,g=145;break d}if((xr(e|0)|0)==-1){xr(n|0)|0,t=0;break}s=e+t|0,o=r,g=145;break d}while(0);i[7032]|=4,g=143}while(0);if((g|0)==143&&u>>>0<2147483647&&(y=xr(u|0)|0,h=xr(0)|0,_=h-y|0,v=_>>>0>(f+40|0)>>>0,!((y|0)==-1|v^1|y>>>0<h>>>0&((y|0)!=-1&(h|0)!=-1)^1))&&(s=v?_:t,o=y,g=145),(g|0)==145){t=(i[7029]|0)+s|0,i[7029]=t,t>>>0>(i[7030]|0)>>>0&&(i[7030]=t),l=i[6927]|0;f:do if(l){for(t=28132;;){if(e=i[t>>2]|0,n=i[t+4>>2]|0,(o|0)==(e+n|0)){g=154;break}if(r=i[t+8>>2]|0,r)t=r;else break}if((g|0)==154&&(b=t+4|0,!(i[t+12>>2]&8))&&o>>>0>l>>>0&e>>>0<=l>>>0){i[b>>2]=n+s,x=(i[6924]|0)+s|0,y=l+8|0,y=y&7?0-y&7:0,b=l+y|0,y=x-y|0,i[6927]=b,i[6924]=y,i[b+4>>2]=y|1,i[l+x+4>>2]=40,i[6928]=i[7043];break}for(o>>>0<(i[6925]|0)>>>0&&(i[6925]=o),n=o+s|0,t=28132;;){if((i[t>>2]|0)==(n|0)){g=162;break}if(e=i[t+8>>2]|0,e)t=e;else break}if((g|0)==162&&!(i[t+12>>2]&8)){i[t>>2]=o,d=t+4|0,i[d>>2]=(i[d>>2]|0)+s,d=o+8|0,d=o+(d&7?0-d&7:0)|0,t=n+8|0,t=n+(t&7?0-t&7:0)|0,u=d+f|0,c=t-d-f|0,i[d+4>>2]=f|3;g:do if((l|0)==(t|0))x=(i[6924]|0)+c|0,i[6924]=x,i[6927]=u,i[u+4>>2]=x|1;else{if((i[6926]|0)==(t|0)){x=(i[6923]|0)+c|0,i[6923]=x,i[6926]=u,i[u+4>>2]=x|1,i[u+x>>2]=x;break}if(e=i[t+4>>2]|0,(e&3)==1){s=e&-8,r=e>>>3;h:do if(e>>>0<256){if(e=i[t+8>>2]|0,n=i[t+12>>2]|0,(n|0)==(e|0)){i[6921]&=~(1<<r);break}i[e+12>>2]=n,i[n+8>>2]=e;break}else{o=i[t+24>>2]|0,e=i[t+12>>2]|0;do if((e|0)==(t|0)){if(n=t+16|0,r=n+4|0,e=i[r>>2]|0,e)n=r;else if(e=i[n>>2]|0,!e){e=0;break}for(;;)if(a=e+20|0,r=i[a>>2]|0,r)e=r,n=a;else if(a=e+16|0,r=i[a>>2]|0,r)e=r,n=a;else break;i[n>>2]=0}else x=i[t+8>>2]|0,i[x+12>>2]=e,i[e+8>>2]=x;while(0);if(!o)break;n=i[t+28>>2]|0,r=27988+(n<<2)|0;do if((i[r>>2]|0)!=(t|0)){if(x=o+16|0,i[((i[x>>2]|0)==(t|0)?x:o+20|0)>>2]=e,!e)break h}else{if(i[r>>2]=e,e|0)break;i[6922]&=~(1<<n);break h}while(0);if(i[e+24>>2]=o,n=t+16|0,r=i[n>>2]|0,r|0&&(i[e+16>>2]=r,i[r+24>>2]=e),n=i[n+4>>2]|0,!n)break;i[e+20>>2]=n,i[n+24>>2]=e}while(0);t=t+s|0,a=s+c|0}else a=c;if(t=t+4|0,i[t>>2]=i[t>>2]&-2,i[u+4>>2]=a|1,i[u+a>>2]=a,t=a>>>3,a>>>0<256){n=27724+(t<<1<<2)|0,e=i[6921]|0,t=1<<t,e&t?(e=n+8|0,t=i[e>>2]|0):(i[6921]=e|t,t=n,e=n+8|0),i[e>>2]=u,i[t+12>>2]=u,i[u+8>>2]=t,i[u+12>>2]=n;break}t=a>>>8;do if(!t)r=0;else{if(a>>>0>16777215){r=31;break}b=(t+1048320|0)>>>16&8,x=t<<b,y=(x+520192|0)>>>16&4,x<<=y,r=(x+245760|0)>>>16&2,r=14-(y|b|r)+(x<<r>>>15)|0,r=a>>>(r+7|0)&1|r<<1}while(0);if(t=27988+(r<<2)|0,i[u+28>>2]=r,e=u+16|0,i[e+4>>2]=0,i[e>>2]=0,e=i[6922]|0,n=1<<r,!(e&n)){i[6922]=e|n,i[t>>2]=u,i[u+24>>2]=t,i[u+12>>2]=u,i[u+8>>2]=u;break}t=i[t>>2]|0;i:do if((i[t+4>>2]&-8)!=(a|0)){for(r=a<<((r|0)==31?0:25-(r>>>1)|0);n=t+16+(r>>>31<<2)|0,e=i[n>>2]|0,e;){if((i[e+4>>2]&-8)==(a|0)){t=e;break i}r<<=1,t=e}i[n>>2]=u,i[u+24>>2]=t,i[u+12>>2]=u,i[u+8>>2]=u;break g}while(0);b=t+8|0,x=i[b>>2]|0,i[x+12>>2]=u,i[b>>2]=u,i[u+8>>2]=x,i[u+12>>2]=t,i[u+24>>2]=0}while(0);return x=d+8|0,M=S,x|0}for(t=28132;e=i[t>>2]|0,!(e>>>0<=l>>>0&&(x=e+(i[t+4>>2]|0)|0,x>>>0>l>>>0));)t=i[t+8>>2]|0;a=x+-47|0,e=a+8|0,e=a+(e&7?0-e&7:0)|0,a=l+16|0,e=e>>>0<a>>>0?l:e,t=e+8|0,n=s+-40|0,y=o+8|0,y=y&7?0-y&7:0,b=o+y|0,y=n-y|0,i[6927]=b,i[6924]=y,i[b+4>>2]=y|1,i[o+n+4>>2]=40,i[6928]=i[7043],n=e+4|0,i[n>>2]=27,i[t>>2]=i[7033],i[t+4>>2]=i[7034],i[t+8>>2]=i[7035],i[t+12>>2]=i[7036],i[7033]=o,i[7034]=s,i[7036]=0,i[7035]=t,t=e+24|0;do b=t,t=t+4|0,i[t>>2]=7;while((b+8|0)>>>0<x>>>0);if((e|0)!=(l|0)){if(o=e-l|0,i[n>>2]=i[n>>2]&-2,i[l+4>>2]=o|1,i[e>>2]=o,t=o>>>3,o>>>0<256){n=27724+(t<<1<<2)|0,e=i[6921]|0,t=1<<t,e&t?(e=n+8|0,t=i[e>>2]|0):(i[6921]=e|t,t=n,e=n+8|0),i[e>>2]=l,i[t+12>>2]=l,i[l+8>>2]=t,i[l+12>>2]=n;break}if(t=o>>>8,t?o>>>0>16777215?r=31:(b=(t+1048320|0)>>>16&8,x=t<<b,y=(x+520192|0)>>>16&4,x<<=y,r=(x+245760|0)>>>16&2,r=14-(y|b|r)+(x<<r>>>15)|0,r=o>>>(r+7|0)&1|r<<1):r=0,n=27988+(r<<2)|0,i[l+28>>2]=r,i[l+20>>2]=0,i[a>>2]=0,t=i[6922]|0,e=1<<r,!(t&e)){i[6922]=t|e,i[n>>2]=l,i[l+24>>2]=n,i[l+12>>2]=l,i[l+8>>2]=l;break}t=i[n>>2]|0;j:do if((i[t+4>>2]&-8)!=(o|0)){for(r=o<<((r|0)==31?0:25-(r>>>1)|0);n=t+16+(r>>>31<<2)|0,e=i[n>>2]|0,e;){if((i[e+4>>2]&-8)==(o|0)){t=e;break j}r<<=1,t=e}i[n>>2]=l,i[l+24>>2]=t,i[l+12>>2]=l,i[l+8>>2]=l;break f}while(0);b=t+8|0,x=i[b>>2]|0,i[x+12>>2]=l,i[b>>2]=l,i[l+8>>2]=x,i[l+12>>2]=t,i[l+24>>2]=0}}else x=i[6925]|0,!(x|0)|o>>>0<x>>>0&&(i[6925]=o),i[7033]=o,i[7034]=s,i[7036]=0,i[6930]=i[7039],i[6929]=-1,i[6934]=27724,i[6933]=27724,i[6936]=27732,i[6935]=27732,i[6938]=27740,i[6937]=27740,i[6940]=27748,i[6939]=27748,i[6942]=27756,i[6941]=27756,i[6944]=27764,i[6943]=27764,i[6946]=27772,i[6945]=27772,i[6948]=27780,i[6947]=27780,i[6950]=27788,i[6949]=27788,i[6952]=27796,i[6951]=27796,i[6954]=27804,i[6953]=27804,i[6956]=27812,i[6955]=27812,i[6958]=27820,i[6957]=27820,i[6960]=27828,i[6959]=27828,i[6962]=27836,i[6961]=27836,i[6964]=27844,i[6963]=27844,i[6966]=27852,i[6965]=27852,i[6968]=27860,i[6967]=27860,i[6970]=27868,i[6969]=27868,i[6972]=27876,i[6971]=27876,i[6974]=27884,i[6973]=27884,i[6976]=27892,i[6975]=27892,i[6978]=27900,i[6977]=27900,i[6980]=27908,i[6979]=27908,i[6982]=27916,i[6981]=27916,i[6984]=27924,i[6983]=27924,i[6986]=27932,i[6985]=27932,i[6988]=27940,i[6987]=27940,i[6990]=27948,i[6989]=27948,i[6992]=27956,i[6991]=27956,i[6994]=27964,i[6993]=27964,i[6996]=27972,i[6995]=27972,x=s+-40|0,y=o+8|0,y=y&7?0-y&7:0,b=o+y|0,y=x-y|0,i[6927]=b,i[6924]=y,i[b+4>>2]=y|1,i[o+x+4>>2]=40,i[6928]=i[7043];while(0);if(t=i[6924]|0,t>>>0>f>>>0)return y=t-f|0,i[6924]=y,x=i[6927]|0,b=x+f|0,i[6927]=b,i[b+4>>2]=y|1,i[x+4>>2]=f|3,x=x+8|0,M=S,x|0}return x=Un()|0,i[x>>2]=12,x=0,M=S,x|0}function W(e){e|=0;var t=0,n=0,r=0,a=0,o=0,s=0,c=0,l=0;if(e){n=e+-8|0,a=i[6925]|0,e=i[e+-4>>2]|0,t=e&-8,l=n+t|0;do if(e&1)c=n,s=n;else{if(r=i[n>>2]|0,!(e&3)||(s=n+(0-r)|0,o=r+t|0,s>>>0<a>>>0))return;if((i[6926]|0)==(s|0)){if(e=l+4|0,t=i[e>>2]|0,(t&3)!=3){c=s,t=o;break}i[6923]=o,i[e>>2]=t&-2,i[s+4>>2]=o|1,i[s+o>>2]=o;return}if(n=r>>>3,r>>>0<256){if(e=i[s+8>>2]|0,t=i[s+12>>2]|0,(t|0)==(e|0)){i[6921]&=~(1<<n),c=s,t=o;break}i[e+12>>2]=t,i[t+8>>2]=e,c=s,t=o;break}a=i[s+24>>2]|0,e=i[s+12>>2]|0;do if((e|0)==(s|0)){if(t=s+16|0,n=t+4|0,e=i[n>>2]|0,e)t=n;else if(e=i[t>>2]|0,!e){e=0;break}for(;;)if(r=e+20|0,n=i[r>>2]|0,n)e=n,t=r;else if(r=e+16|0,n=i[r>>2]|0,n)e=n,t=r;else break;i[t>>2]=0}else c=i[s+8>>2]|0,i[c+12>>2]=e,i[e+8>>2]=c;while(0);if(a){if(t=i[s+28>>2]|0,n=27988+(t<<2)|0,(i[n>>2]|0)==(s|0)){if(i[n>>2]=e,!e){i[6922]&=~(1<<t),c=s,t=o;break}}else if(c=a+16|0,i[((i[c>>2]|0)==(s|0)?c:a+20|0)>>2]=e,!e){c=s,t=o;break}i[e+24>>2]=a,t=s+16|0,n=i[t>>2]|0,n|0&&(i[e+16>>2]=n,i[n+24>>2]=e),t=i[t+4>>2]|0,t?(i[e+20>>2]=t,i[t+24>>2]=e,c=s,t=o):(c=s,t=o)}else c=s,t=o}while(0);if(!(s>>>0>=l>>>0)&&(e=l+4|0,r=i[e>>2]|0,r&1)){if(r&2)i[e>>2]=r&-2,i[c+4>>2]=t|1,i[s+t>>2]=t,a=t;else{if((i[6927]|0)==(l|0)){if(l=(i[6924]|0)+t|0,i[6924]=l,i[6927]=c,i[c+4>>2]=l|1,(c|0)!=(i[6926]|0))return;i[6926]=0,i[6923]=0;return}if((i[6926]|0)==(l|0)){l=(i[6923]|0)+t|0,i[6923]=l,i[6926]=s,i[c+4>>2]=l|1,i[s+l>>2]=l;return}a=(r&-8)+t|0,n=r>>>3;do if(r>>>0<256){if(t=i[l+8>>2]|0,e=i[l+12>>2]|0,(e|0)==(t|0)){i[6921]&=~(1<<n);break}i[t+12>>2]=e,i[e+8>>2]=t;break}else{o=i[l+24>>2]|0,e=i[l+12>>2]|0;do if((e|0)==(l|0)){if(t=l+16|0,n=t+4|0,e=i[n>>2]|0,e)t=n;else if(e=i[t>>2]|0,!e){n=0;break}for(;;)if(r=e+20|0,n=i[r>>2]|0,n)e=n,t=r;else if(r=e+16|0,n=i[r>>2]|0,n)e=n,t=r;else break;i[t>>2]=0,n=e}else n=i[l+8>>2]|0,i[n+12>>2]=e,i[e+8>>2]=n,n=e;while(0);if(o|0){if(e=i[l+28>>2]|0,t=27988+(e<<2)|0,(i[t>>2]|0)==(l|0)){if(i[t>>2]=n,!n){i[6922]&=~(1<<e);break}}else if(r=o+16|0,i[((i[r>>2]|0)==(l|0)?r:o+20|0)>>2]=n,!n)break;i[n+24>>2]=o,e=l+16|0,t=i[e>>2]|0,t|0&&(i[n+16>>2]=t,i[t+24>>2]=n),e=i[e+4>>2]|0,e|0&&(i[n+20>>2]=e,i[e+24>>2]=n)}}while(0);if(i[c+4>>2]=a|1,i[s+a>>2]=a,(c|0)==(i[6926]|0)){i[6923]=a;return}}if(e=a>>>3,a>>>0<256)n=27724+(e<<1<<2)|0,t=i[6921]|0,e=1<<e,t&e?(t=n+8|0,e=i[t>>2]|0):(i[6921]=t|e,e=n,t=n+8|0),i[t>>2]=c,i[e+12>>2]=c,i[c+8>>2]=e,i[c+12>>2]=n;else{e=a>>>8,e?a>>>0>16777215?r=31:(s=(e+1048320|0)>>>16&8,l=e<<s,o=(l+520192|0)>>>16&4,l<<=o,r=(l+245760|0)>>>16&2,r=14-(o|s|r)+(l<<r>>>15)|0,r=a>>>(r+7|0)&1|r<<1):r=0,e=27988+(r<<2)|0,i[c+28>>2]=r,i[c+20>>2]=0,i[c+16>>2]=0,t=i[6922]|0,n=1<<r;a:do if(!(t&n))i[6922]=t|n,i[e>>2]=c,i[c+24>>2]=e,i[c+12>>2]=c,i[c+8>>2]=c;else{e=i[e>>2]|0;b:do if((i[e+4>>2]&-8)!=(a|0)){for(r=a<<((r|0)==31?0:25-(r>>>1)|0);n=e+16+(r>>>31<<2)|0,t=i[n>>2]|0,t;){if((i[t+4>>2]&-8)==(a|0)){e=t;break b}r<<=1,e=t}i[n>>2]=c,i[c+24>>2]=e,i[c+12>>2]=c,i[c+8>>2]=c;break a}while(0);s=e+8|0,l=i[s>>2]|0,i[l+12>>2]=c,i[s>>2]=c,i[c+8>>2]=l,i[c+12>>2]=e,i[c+24>>2]=0}while(0);if(l=(i[6929]|0)+-1|0,i[6929]=l,!(l|0)){for(e=28140;e=i[e>>2]|0,e;)e=e+8|0;i[6929]=-1}}}}}function er(e,t){e|=0,t|=0;var n=0;return e?(n=y(t,e)|0,(t|e)>>>0>65535&&(n=((n>>>0)/(e>>>0)|0)==(t|0)?n:-1)):n=0,e=$n(n)|0,!e||!(i[e+-4>>2]&3)||yr(e|0,0,n|0)|0,e|0}function tr(e,t){e|=0,t|=0;var n=0,r=0;return e?t>>>0>4294967231?(t=Un()|0,i[t>>2]=12,t=0,t|0):(n=nr(e+-8|0,t>>>0<11?16:t+11&-8)|0,n|0?(t=n+8|0,t|0):(n=$n(t)|0,n?(r=i[e+-4>>2]|0,r=(r&-8)-(r&3?4:8)|0,_r(n|0,e|0,(r>>>0<t>>>0?r:t)|0)|0,W(e),t=n,t|0):(t=0,t|0))):(t=$n(t)|0,t|0)}function nr(e,t){e|=0,t|=0;var n=0,r=0,a=0,o=0,s=0,c=0,l=0,u=0,d=0,f=0;if(d=e+4|0,f=i[d>>2]|0,n=f&-8,c=e+n|0,!(f&3))return t>>>0<256?(e=0,e|0):(n>>>0>=(t+4|0)>>>0&&(n-t|0)>>>0<=i[7041]<<1>>>0||(e=0),e|0);if(n>>>0>=t>>>0)return n=n-t|0,n>>>0<=15||(u=e+t|0,i[d>>2]=f&1|t|2,i[u+4>>2]=n|3,f=c+4|0,i[f>>2]=i[f>>2]|1,rr(u,n)),e|0;if((i[6927]|0)==(c|0))return u=(i[6924]|0)+n|0,n=u-t|0,r=e+t|0,u>>>0<=t>>>0?(e=0,e|0):(i[d>>2]=f&1|t|2,i[r+4>>2]=n|1,i[6927]=r,i[6924]=n,e|0);if((i[6926]|0)==(c|0))return r=(i[6923]|0)+n|0,r>>>0<t>>>0?(e=0,e|0):(n=r-t|0,n>>>0>15?(u=e+t|0,r=e+r|0,i[d>>2]=f&1|t|2,i[u+4>>2]=n|1,i[r>>2]=n,r=r+4|0,i[r>>2]=i[r>>2]&-2,r=u):(i[d>>2]=f&1|r|2,r=e+r+4|0,i[r>>2]=i[r>>2]|1,r=0,n=0),i[6923]=n,i[6926]=r,e|0);if(r=i[c+4>>2]|0,r&2||(l=(r&-8)+n|0,l>>>0<t>>>0))return e=0,e|0;u=l-t|0,a=r>>>3;do if(r>>>0<256){if(r=i[c+8>>2]|0,n=i[c+12>>2]|0,(n|0)==(r|0)){i[6921]&=~(1<<a);break}i[r+12>>2]=n,i[n+8>>2]=r;break}else{s=i[c+24>>2]|0,n=i[c+12>>2]|0;do if((n|0)==(c|0)){if(r=c+16|0,a=r+4|0,n=i[a>>2]|0,n)r=a;else if(n=i[r>>2]|0,!n){a=0;break}for(;;)if(o=n+20|0,a=i[o>>2]|0,a)n=a,r=o;else if(o=n+16|0,a=i[o>>2]|0,a)n=a,r=o;else break;i[r>>2]=0,a=n}else a=i[c+8>>2]|0,i[a+12>>2]=n,i[n+8>>2]=a,a=n;while(0);if(s|0){if(n=i[c+28>>2]|0,r=27988+(n<<2)|0,(i[r>>2]|0)==(c|0)){if(i[r>>2]=a,!a){i[6922]&=~(1<<n);break}}else if(o=s+16|0,i[((i[o>>2]|0)==(c|0)?o:s+20|0)>>2]=a,!a)break;i[a+24>>2]=s,n=c+16|0,r=i[n>>2]|0,r|0&&(i[a+16>>2]=r,i[r+24>>2]=a),n=i[n+4>>2]|0,n|0&&(i[a+20>>2]=n,i[n+24>>2]=a)}}while(0);return u>>>0<16?(i[d>>2]=f&1|l|2,f=e+l+4|0,i[f>>2]=i[f>>2]|1,e|0):(c=e+t|0,i[d>>2]=f&1|t|2,i[c+4>>2]=u|3,f=e+l+4|0,i[f>>2]=i[f>>2]|1,rr(c,u),e|0)}function rr(e,t){e|=0,t|=0;var n=0,r=0,a=0,o=0,s=0,c=0;c=e+t|0,n=i[e+4>>2]|0;do if(n&1)s=e;else{if(a=i[e>>2]|0,!(n&3))return;if(s=e+(0-a)|0,t=a+t|0,(i[6926]|0)==(s|0)){if(e=c+4|0,n=i[e>>2]|0,(n&3)!=3)break;i[6923]=t,i[e>>2]=n&-2,i[s+4>>2]=t|1,i[c>>2]=t;return}if(r=a>>>3,a>>>0<256){if(e=i[s+8>>2]|0,n=i[s+12>>2]|0,(n|0)==(e|0)){i[6921]&=~(1<<r);break}i[e+12>>2]=n,i[n+8>>2]=e;break}o=i[s+24>>2]|0,e=i[s+12>>2]|0;do if((e|0)==(s|0)){if(n=s+16|0,r=n+4|0,e=i[r>>2]|0,e)n=r;else if(e=i[n>>2]|0,!e){e=0;break}for(;;)if(a=e+20|0,r=i[a>>2]|0,r)e=r,n=a;else if(a=e+16|0,r=i[a>>2]|0,r)e=r,n=a;else break;i[n>>2]=0}else a=i[s+8>>2]|0,i[a+12>>2]=e,i[e+8>>2]=a;while(0);if(o){if(n=i[s+28>>2]|0,r=27988+(n<<2)|0,(i[r>>2]|0)==(s|0)){if(i[r>>2]=e,!e){i[6922]&=~(1<<n);break}}else if(a=o+16|0,i[((i[a>>2]|0)==(s|0)?a:o+20|0)>>2]=e,!e)break;i[e+24>>2]=o,n=s+16|0,r=i[n>>2]|0,r|0&&(i[e+16>>2]=r,i[r+24>>2]=e),n=i[n+4>>2]|0,n&&(i[e+20>>2]=n,i[n+24>>2]=e)}}while(0);if(e=c+4|0,r=i[e>>2]|0,r&2)i[e>>2]=r&-2,i[s+4>>2]=t|1,i[s+t>>2]=t,a=t;else{if((i[6927]|0)==(c|0)){if(c=(i[6924]|0)+t|0,i[6924]=c,i[6927]=s,i[s+4>>2]=c|1,(s|0)!=(i[6926]|0))return;i[6926]=0,i[6923]=0;return}if((i[6926]|0)==(c|0)){c=(i[6923]|0)+t|0,i[6923]=c,i[6926]=s,i[s+4>>2]=c|1,i[s+c>>2]=c;return}a=(r&-8)+t|0,n=r>>>3;do if(r>>>0<256){if(e=i[c+8>>2]|0,t=i[c+12>>2]|0,(t|0)==(e|0)){i[6921]&=~(1<<n);break}i[e+12>>2]=t,i[t+8>>2]=e;break}else{o=i[c+24>>2]|0,t=i[c+12>>2]|0;do if((t|0)==(c|0)){if(e=c+16|0,n=e+4|0,t=i[n>>2]|0,t)e=n;else if(t=i[e>>2]|0,!t){n=0;break}for(;;)if(r=t+20|0,n=i[r>>2]|0,n)t=n,e=r;else if(r=t+16|0,n=i[r>>2]|0,n)t=n,e=r;else break;i[e>>2]=0,n=t}else n=i[c+8>>2]|0,i[n+12>>2]=t,i[t+8>>2]=n,n=t;while(0);if(o|0){if(t=i[c+28>>2]|0,e=27988+(t<<2)|0,(i[e>>2]|0)==(c|0)){if(i[e>>2]=n,!n){i[6922]&=~(1<<t);break}}else if(r=o+16|0,i[((i[r>>2]|0)==(c|0)?r:o+20|0)>>2]=n,!n)break;i[n+24>>2]=o,t=c+16|0,e=i[t>>2]|0,e|0&&(i[n+16>>2]=e,i[e+24>>2]=n),t=i[t+4>>2]|0,t|0&&(i[n+20>>2]=t,i[t+24>>2]=n)}}while(0);if(i[s+4>>2]=a|1,i[s+a>>2]=a,(s|0)==(i[6926]|0)){i[6923]=a;return}}if(t=a>>>3,a>>>0<256)n=27724+(t<<1<<2)|0,e=i[6921]|0,t=1<<t,e&t?(e=n+8|0,t=i[e>>2]|0):(i[6921]=e|t,t=n,e=n+8|0),i[e>>2]=s,i[t+12>>2]=s,i[s+8>>2]=t,i[s+12>>2]=n;else if(t=a>>>8,t?a>>>0>16777215?r=31:(o=(t+1048320|0)>>>16&8,c=t<<o,n=(c+520192|0)>>>16&4,c<<=n,r=(c+245760|0)>>>16&2,r=14-(n|o|r)+(c<<r>>>15)|0,r=a>>>(r+7|0)&1|r<<1):r=0,t=27988+(r<<2)|0,i[s+28>>2]=r,i[s+20>>2]=0,i[s+16>>2]=0,e=i[6922]|0,n=1<<r,!(e&n))i[6922]=e|n,i[t>>2]=s,i[s+24>>2]=t,i[s+12>>2]=s,i[s+8>>2]=s;else{t=i[t>>2]|0;a:do if((i[t+4>>2]&-8)!=(a|0)){for(r=a<<((r|0)==31?0:25-(r>>>1)|0);n=t+16+(r>>>31<<2)|0,e=i[n>>2]|0,e;){if((i[e+4>>2]&-8)==(a|0)){t=e;break a}r<<=1,t=e}i[n>>2]=s,i[s+24>>2]=t,i[s+12>>2]=s,i[s+8>>2]=s;return}while(0);o=t+8|0,c=i[o>>2]|0,i[c+12>>2]=s,i[o>>2]=s,i[s+8>>2]=c,i[s+12>>2]=t,i[s+24>>2]=0}}function G(e,t,n,r){return e|=0,t|=0,n|=0,r|=0,n=e+n>>>0,w(t+r+(n>>>0<e>>>0|0)>>>0|0),n|0}function ir(e,t,n,r){return e|=0,t|=0,n|=0,r|=0,r=t-r-(n>>>0>e>>>0|0)>>>0,w(r|0),e-n>>>0|0}function ar(e){return e|=0,(e?31-(S(e^e-1)|0)|0:32)|0}function or(e,t,n,r,a){e|=0,t|=0,n|=0,r|=0,a|=0;var o=0,s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0;if(d=e,l=t,u=l,s=n,p=r,c=p,!u)return o=!!(a|0),c?o?(i[a>>2]=e|0,i[a+4>>2]=t&0,p=0,a=0,w(p|0),a|0):(p=0,a=0,w(p|0),a|0):(o&&(i[a>>2]=(d>>>0)%(s>>>0),i[a+4>>2]=0),p=0,a=(d>>>0)/(s>>>0)>>>0,w(p|0),a|0);o=!(c|0);do if(s){if(!o){if(o=(S(c|0)|0)-(S(u|0)|0)|0,o>>>0<=31){f=o+1|0,c=31-o|0,t=o-31>>31,s=f,e=d>>>(f>>>0)&t|u<<c,t=u>>>(f>>>0)&t,o=0,c=d<<c;break}return a?(i[a>>2]=e|0,i[a+4>>2]=l|t&0,p=0,a=0,w(p|0),a|0):(p=0,a=0,w(p|0),a|0)}if(o=s-1|0,o&s|0){c=(S(s|0)|0)+33-(S(u|0)|0)|0,h=64-c|0,f=32-c|0,l=f>>31,m=c-32|0,t=m>>31,s=c,e=f-1>>31&u>>>(m>>>0)|(u<<f|d>>>(c>>>0))&t,t&=u>>>(c>>>0),o=d<<h&l,c=(u<<h|d>>>(m>>>0))&l|d<<f&c-33>>31;break}return a|0&&(i[a>>2]=o&d,i[a+4>>2]=0),(s|0)==1?(m=l|t&0,h=e|0,w(m|0),h|0):(h=ar(s|0)|0,m=u>>>(h>>>0)|0,h=u<<32-h|d>>>(h>>>0),w(m|0),h|0)}else{if(o)return a|0&&(i[a>>2]=(u>>>0)%(s>>>0),i[a+4>>2]=0),m=0,h=(u>>>0)/(s>>>0)>>>0,w(m|0),h|0;if(!d)return a|0&&(i[a>>2]=0,i[a+4>>2]=(u>>>0)%(c>>>0)),m=0,h=(u>>>0)/(c>>>0)>>>0,w(m|0),h|0;if(o=c-1|0,!(o&c))return a|0&&(i[a>>2]=e|0,i[a+4>>2]=o&u|t&0),m=0,h=u>>>((ar(c|0)|0)>>>0),w(m|0),h|0;if(o=(S(c|0)|0)-(S(u|0)|0)|0,o>>>0<=30){t=o+1|0,c=31-o|0,s=t,e=u<<c|d>>>(t>>>0),t=u>>>(t>>>0),o=0,c=d<<c;break}return a?(i[a>>2]=e|0,i[a+4>>2]=l|t&0,m=0,h=0,w(m|0),h|0):(m=0,h=0,w(m|0),h|0)}while(0);if(!s)u=c,l=0,c=0;else{f=n|0,d=p|r&0,u=G(f|0,d|0,-1,-1)|0,n=T()|0,l=c,c=0;do r=l,l=o>>>31|l<<1,o=c|o<<1,r=e<<1|r>>>31,p=e>>>31|t<<1,ir(u|0,n|0,r|0,p|0)|0,h=T()|0,m=h>>31|((h|0)<0?-1:0)<<1,c=m&1,e=ir(r|0,p|0,m&f|0,(((h|0)<0?-1:0)>>31|((h|0)<0?-1:0)<<1)&d)|0,t=T()|0,s=s-1|0;while(s|0);u=l,l=0}return s=0,a|0&&(i[a>>2]=e,i[a+4>>2]=t),m=(o|0)>>>31|(u|s)<<1|(s<<1|o>>>31)&0|l,h=o<<1&-2|c,w(m|0),h|0}function sr(e,t,n,r){e|=0,t|=0,n|=0,r|=0;var i=0,a=0,o=0,s=0,c=0,l=0;return l=t>>31|((t|0)<0?-1:0)<<1,c=((t|0)<0?-1:0)>>31|((t|0)<0?-1:0)<<1,a=r>>31|((r|0)<0?-1:0)<<1,i=((r|0)<0?-1:0)>>31|((r|0)<0?-1:0)<<1,s=ir(l^e|0,c^t|0,l|0,c|0)|0,o=T()|0,e=a^l,t=i^c,ir((or(s,o,ir(a^n|0,i^r|0,a|0,i|0)|0,T()|0,0)|0)^e,(T()|0)^t,e|0,t|0)|0}function cr(e,t){e|=0,t|=0;var n=0,r=0,i=0,a=0;return a=e&65535,i=t&65535,n=y(i,a)|0,r=e>>>16,e=(n>>>16)+(y(i,r)|0)|0,i=t>>>16,t=y(i,a)|0,w((e>>>16)+(y(i,r)|0)+(((e&65535)+t|0)>>>16)|0),e+t<<16|n&65535}function lr(e,t,n,r){e|=0,t|=0,n|=0,r|=0;var i=0,a=0;return i=e,a=n,n=cr(i,a)|0,e=T()|0,w((y(t,a)|0)+(y(r,i)|0)+e|e&0),n|0}function ur(e,t,n,r){e|=0,t|=0,n|=0,r|=0;var a=0,o=0,s=0,c=0,l=0,u=0;return a=M,M=M+16|0,c=a|0,s=t>>31|((t|0)<0?-1:0)<<1,o=((t|0)<0?-1:0)>>31|((t|0)<0?-1:0)<<1,u=r>>31|((r|0)<0?-1:0)<<1,l=((r|0)<0?-1:0)>>31|((r|0)<0?-1:0)<<1,e=ir(s^e|0,o^t|0,s|0,o|0)|0,t=T()|0,or(e,t,ir(u^n|0,l^r|0,u|0,l|0)|0,T()|0,c)|0,r=ir(i[c>>2]^s|0,i[c+4>>2]^o|0,s|0,o|0)|0,n=T()|0,M=a,w(n|0),r|0}function dr(e,t,n,r){e|=0,t|=0,n|=0,r|=0;var a=0,o=0;return o=M,M=M+16|0,a=o|0,or(e,t,n,r,a)|0,M=o,w(i[a+4>>2]|0),i[a>>2]|0}function fr(e,t,n){return e|=0,t|=0,n|=0,(n|0)<32?(w(t>>n|0),e>>>n|(t&(1<<n)-1)<<32-n):(w(((t|0)<0?-1:0)|0),t>>n-32)}function K(e,t,n){return e|=0,t|=0,n|=0,(n|0)<32?(w(t>>>n|0),e>>>n|(t&(1<<n)-1)<<32-n):(w(0),t>>>n-32|0)}function q(e,t,n){return e|=0,t|=0,n|=0,(n|0)<32?(w(t<<n|(e&(1<<n)-1<<32-n)>>>32-n),e<<n):(w(e<<n-32),0)}function pr(e,t,n){return e|=0,t|=0,n|=0,t=S(t)|0,(t|0)==32&&(t=t+(S(e)|0)|0),w(0),t|0}function mr(e,t){return e=+e,t=+t,e==e?t==t?+x(+e,+t):+e:+t}function hr(e,t){return e=+e,t=+t,e==e?t==t?+b(+e,+t):+e:+t}function gr(e){return e=+e,e>=0?+c(e+.5):+v(e-.5)}function _r(e,t,n){e|=0,t|=0,n|=0;var a=0,o=0,s=0;if((n|0)>=8192)return k(e|0,t|0,n|0)|0,e|0;if(s=e|0,o=e+n|0,(e&3)==(t&3)){for(;e&3;){if(!n)return s|0;r[e|0]=r[t|0]|0,e=e+1|0,t=t+1|0,n=n-1|0}for(n=o&-4,a=n-64|0;(e|0)<=(a|0);)i[e>>2]=i[t>>2],i[e+4>>2]=i[t+4>>2],i[e+8>>2]=i[t+8>>2],i[e+12>>2]=i[t+12>>2],i[e+16>>2]=i[t+16>>2],i[e+20>>2]=i[t+20>>2],i[e+24>>2]=i[t+24>>2],i[e+28>>2]=i[t+28>>2],i[e+32>>2]=i[t+32>>2],i[e+36>>2]=i[t+36>>2],i[e+40>>2]=i[t+40>>2],i[e+44>>2]=i[t+44>>2],i[e+48>>2]=i[t+48>>2],i[e+52>>2]=i[t+52>>2],i[e+56>>2]=i[t+56>>2],i[e+60>>2]=i[t+60>>2],e=e+64|0,t=t+64|0;for(;(e|0)<(n|0);)i[e>>2]=i[t>>2],e=e+4|0,t=t+4|0}else for(n=o-4|0;(e|0)<(n|0);)r[e|0]=r[t|0]|0,r[e+1|0]=r[t+1|0]|0,r[e+2|0]=r[t+2|0]|0,r[e+3|0]=r[t+3|0]|0,e=e+4|0,t=t+4|0;for(;(e|0)<(o|0);)r[e|0]=r[t|0]|0,e=e+1|0,t=t+1|0;return s|0}function vr(e,t,n){e|=0,t|=0,n|=0;var i=0;if((t|0)<(e|0)&(e|0)<(t+n|0)){for(i=e,t=t+n|0,e=e+n|0;(n|0)>0;)e=e-1|0,t=t-1|0,n=n-1|0,r[e|0]=r[t|0]|0;e=i}else _r(e,t,n)|0;return e|0}function yr(e,t,n){e|=0,t|=0,n|=0;var a=0,o=0,s=0,c=0;if(s=e+n|0,t&=255,(n|0)>=67){for(;e&3;)r[e|0]=t,e=e+1|0;for(a=s&-4,c=t|t<<8|t<<16|t<<24,o=a-64|0;(e|0)<=(o|0);)i[e>>2]=c,i[e+4>>2]=c,i[e+8>>2]=c,i[e+12>>2]=c,i[e+16>>2]=c,i[e+20>>2]=c,i[e+24>>2]=c,i[e+28>>2]=c,i[e+32>>2]=c,i[e+36>>2]=c,i[e+40>>2]=c,i[e+44>>2]=c,i[e+48>>2]=c,i[e+52>>2]=c,i[e+56>>2]=c,i[e+60>>2]=c,e=e+64|0;for(;(e|0)<(a|0);)i[e>>2]=c,e=e+4|0}for(;(e|0)<(s|0);)r[e|0]=t,e=e+1|0;return s-n|0}function br(e){return e=+e,e>=0?+c(e+.5):+v(e-.5)}function xr(e){e|=0;var t=0,n=0,r=0;return r=O()|0,n=i[s>>2]|0,t=n+e|0,(e|0)>0&(t|0)<(n|0)|(t|0)<0?(j(t|0)|0,D(12),-1):(t|0)>(r|0)&&!(A(t|0)|0)?(D(12),-1):(i[s>>2]=t,n|0)}function Sr(e,t,n){return e|=0,t|=0,n|=0,wr[e&3](t|0,n|0)|0}function Cr(e,t){return e|=0,t|=0,C(0),0}var wr=[Cr,U,Le,Re];return{___divdi3:sr,___muldi3:lr,___remdi3:ur,___uremdi3:dr,_areNeighborCells:ze,_bitshift64Ashr:fr,_bitshift64Lshr:K,_bitshift64Shl:q,_calloc:er,_cellAreaKm2:de,_cellAreaM2:fe,_cellAreaRads2:ue,_cellToBoundary:jt,_cellToCenterChild:ht,_cellToChildPos:It,_cellToChildren:pt,_cellToChildrenSize:dt,_cellToLatLng:At,_cellToLocalIj:an,_cellToParent:ut,_cellToVertex:zn,_cellToVertexes:Bn,_cellsToDirectedEdge:Be,_cellsToLinkedMultiPolygon:V,_childPosToCell:Lt,_compactCells:gt,_constructCell:ot,_destroyLinkedMultiPolygon:en,_directedEdgeToBoundary:Ke,_directedEdgeToCells:We,_edgeLengthKm:Qt,_edgeLengthM:$t,_edgeLengthRads:Zt,_emscripten_replace_memory:N,_free:W,_getBaseCellNumber:it,_getDirectedEdgeDestination:He,_getDirectedEdgeOrigin:Ve,_getHexagonAreaAvgKm2:Kt,_getHexagonAreaAvgM2:qt,_getHexagonEdgeLengthAvgKm:Jt,_getHexagonEdgeLengthAvgM:Yt,_getIcosahedronFaces:Nt,_getIndexDigit:at,_getNumCells:Xt,_getPentagons:Ft,_getRes0Cells:Ce,_getResolution:rt,_greatCircleDistanceKm:Wt,_greatCircleDistanceM:Gt,_greatCircleDistanceRads:Ut,_gridDisk:R,_gridDiskDistances:te,_gridDistance:sn,_gridPathCells:ln,_gridPathCellsSize:cn,_gridRing:ie,_gridRingUnsafe:ae,_i64Add:G,_i64Subtract:ir,_isPentagon:ft,_isResClassIII:yt,_isValidCell:st,_isValidDirectedEdge:Ue,_isValidIndex:ct,_isValidVertex:Hn,_latLngToCell:Dt,_llvm_ctlz_i64:pr,_llvm_maxnum_f64:mr,_llvm_minnum_f64:hr,_llvm_round_f64:gr,_localIjToCell:on,_malloc:$n,_maxFaceCount:Mt,_maxGridDiskSize:ee,_maxPolygonToCellsSize:ce,_maxPolygonToCellsSizeExperimental:_n,_memcpy:_r,_memmove:vr,_memset:yr,_originToDirectedEdges:Ge,_pentagonCount:Pt,_polygonToCells:le,_polygonToCellsExperimental:gn,_readInt64AsDoubleFromPointer:Nn,_res0CellCount:Se,_reverseDirectedEdge:qe,_round:br,_sbrk:xr,_sizeOfCellBoundary:On,_sizeOfCoordIJ:Mn,_sizeOfGeoLoop:kn,_sizeOfGeoPolygon:An,_sizeOfH3Index:En,_sizeOfLatLng:Dn,_sizeOfLinkedGeoPolygon:jn,_uncompactCells:_t,_uncompactCellsSize:vt,_vertexToLatLng:Vn,dynCall_iii:Sr,establishStackSpace:L,stackAlloc:P,stackRestore:I,stackSave:F}})({Math,Int8Array,Int32Array,Uint8Array,Float32Array,Float64Array},{a:Ke,b:d,c:f,d:Ee,e:ke,f:De,g:Oe,h:Me,i:Ae,j:Se,k:Ce,l:je,m:we,n:Te,o:xe,p:L},O);t.___divdi3=U.___divdi3,t.___muldi3=U.___muldi3,t.___remdi3=U.___remdi3,t.___uremdi3=U.___uremdi3,t._areNeighborCells=U._areNeighborCells,t._bitshift64Ashr=U._bitshift64Ashr,t._bitshift64Lshr=U._bitshift64Lshr,t._bitshift64Shl=U._bitshift64Shl,t._calloc=U._calloc,t._cellAreaKm2=U._cellAreaKm2,t._cellAreaM2=U._cellAreaM2,t._cellAreaRads2=U._cellAreaRads2,t._cellToBoundary=U._cellToBoundary,t._cellToCenterChild=U._cellToCenterChild,t._cellToChildPos=U._cellToChildPos,t._cellToChildren=U._cellToChildren,t._cellToChildrenSize=U._cellToChildrenSize,t._cellToLatLng=U._cellToLatLng,t._cellToLocalIj=U._cellToLocalIj,t._cellToParent=U._cellToParent,t._cellToVertex=U._cellToVertex,t._cellToVertexes=U._cellToVertexes,t._cellsToDirectedEdge=U._cellsToDirectedEdge,t._cellsToLinkedMultiPolygon=U._cellsToLinkedMultiPolygon,t._childPosToCell=U._childPosToCell,t._compactCells=U._compactCells,t._constructCell=U._constructCell,t._destroyLinkedMultiPolygon=U._destroyLinkedMultiPolygon,t._directedEdgeToBoundary=U._directedEdgeToBoundary,t._directedEdgeToCells=U._directedEdgeToCells,t._edgeLengthKm=U._edgeLengthKm,t._edgeLengthM=U._edgeLengthM,t._edgeLengthRads=U._edgeLengthRads;var Ie=t._emscripten_replace_memory=U._emscripten_replace_memory;t._free=U._free,t._getBaseCellNumber=U._getBaseCellNumber,t._getDirectedEdgeDestination=U._getDirectedEdgeDestination,t._getDirectedEdgeOrigin=U._getDirectedEdgeOrigin,t._getHexagonAreaAvgKm2=U._getHexagonAreaAvgKm2,t._getHexagonAreaAvgM2=U._getHexagonAreaAvgM2,t._getHexagonEdgeLengthAvgKm=U._getHexagonEdgeLengthAvgKm,t._getHexagonEdgeLengthAvgM=U._getHexagonEdgeLengthAvgM,t._getIcosahedronFaces=U._getIcosahedronFaces,t._getIndexDigit=U._getIndexDigit,t._getNumCells=U._getNumCells,t._getPentagons=U._getPentagons,t._getRes0Cells=U._getRes0Cells,t._getResolution=U._getResolution,t._greatCircleDistanceKm=U._greatCircleDistanceKm,t._greatCircleDistanceM=U._greatCircleDistanceM,t._greatCircleDistanceRads=U._greatCircleDistanceRads,t._gridDisk=U._gridDisk,t._gridDiskDistances=U._gridDiskDistances,t._gridDistance=U._gridDistance,t._gridPathCells=U._gridPathCells,t._gridPathCellsSize=U._gridPathCellsSize,t._gridRing=U._gridRing,t._gridRingUnsafe=U._gridRingUnsafe,t._i64Add=U._i64Add,t._i64Subtract=U._i64Subtract,t._isPentagon=U._isPentagon,t._isResClassIII=U._isResClassIII,t._isValidCell=U._isValidCell,t._isValidDirectedEdge=U._isValidDirectedEdge,t._isValidIndex=U._isValidIndex,t._isValidVertex=U._isValidVertex,t._latLngToCell=U._latLngToCell,t._llvm_ctlz_i64=U._llvm_ctlz_i64,t._llvm_maxnum_f64=U._llvm_maxnum_f64,t._llvm_minnum_f64=U._llvm_minnum_f64,t._llvm_round_f64=U._llvm_round_f64,t._localIjToCell=U._localIjToCell,t._malloc=U._malloc,t._maxFaceCount=U._maxFaceCount,t._maxGridDiskSize=U._maxGridDiskSize,t._maxPolygonToCellsSize=U._maxPolygonToCellsSize,t._maxPolygonToCellsSizeExperimental=U._maxPolygonToCellsSizeExperimental,t._memcpy=U._memcpy,t._memmove=U._memmove,t._memset=U._memset,t._originToDirectedEdges=U._originToDirectedEdges,t._pentagonCount=U._pentagonCount,t._polygonToCells=U._polygonToCells,t._polygonToCellsExperimental=U._polygonToCellsExperimental,t._readInt64AsDoubleFromPointer=U._readInt64AsDoubleFromPointer,t._res0CellCount=U._res0CellCount,t._reverseDirectedEdge=U._reverseDirectedEdge,t._round=U._round,t._sbrk=U._sbrk,t._sizeOfCellBoundary=U._sizeOfCellBoundary,t._sizeOfCoordIJ=U._sizeOfCoordIJ,t._sizeOfGeoLoop=U._sizeOfGeoLoop,t._sizeOfGeoPolygon=U._sizeOfGeoPolygon,t._sizeOfH3Index=U._sizeOfH3Index,t._sizeOfLatLng=U._sizeOfLatLng,t._sizeOfLinkedGeoPolygon=U._sizeOfLinkedGeoPolygon,t._uncompactCells=U._uncompactCells,t._uncompactCellsSize=U._uncompactCellsSize,t._vertexToLatLng=U._vertexToLatLng,t.establishStackSpace=U.establishStackSpace;var Le=t.stackAlloc=U.stackAlloc,Re=t.stackRestore=U.stackRestore,ze=t.stackSave=U.stackSave;if(t.dynCall_iii=U.dynCall_iii,t.asm=U,t.cwrap=b,t.setValue=m,t.getValue=h,ge){ve(ge)||(ge=o(ge)),me(`memory initializer`);var Be=function(e){e.byteLength&&(e=new Uint8Array(e)),A.set(e,p),t.memoryInitializerRequest&&delete t.memoryInitializerRequest.response,he(`memory initializer`)},Ve=function(){s(ge,Be,function(){throw`could not load memory initializer `+ge})},He=Fe(ge);if(He)Be(He.buffer);else if(t.memoryInitializerRequest){var Ue=function(){var e=t.memoryInitializerRequest,n=e.response;if(e.status!==200&&e.status!==0){var r=Fe(t.memoryInitializerRequestURL);if(r)n=r.buffer;else{console.warn(`a problem seems to have happened with Module.memoryInitializerRequest, status: `+e.status+`, retrying `+ge),Ve();return}}Be(n)};t.memoryInitializerRequest.response?setTimeout(Ue,0):t.memoryInitializerRequest.addEventListener(`load`,Ue)}else Ve()}var We;pe=function e(){We||Ge(),We||(pe=e)};function Ge(e){if(e||=i,de>0||(ie(),de>0))return;function n(){We||(We=!0,g||(ae(),oe(),t.onRuntimeInitialized&&t.onRuntimeInitialized(),se()))}t.setStatus?(t.setStatus(`Running...`),setTimeout(function(){setTimeout(function(){t.setStatus(``)},1),n()},1)):n()}t.run=Ge;function Ke(e){throw t.onAbort&&t.onAbort(e),e+=``,c(e),l(e),g=!0,`abort(`+e+`). Build with -s ASSERTIONS=1 for more info.`}if(t.abort=Ke,t.preInit)for(typeof t.preInit==`function`&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.pop()();return Ge(),e}(typeof J==`object`?J:{}),Y=`number`,X=Y,fc=Y,Z=Y,Q=Y,pc=Y,$=Y,mc=[[`sizeOfH3Index`,Y],[`sizeOfLatLng`,Y],[`sizeOfCellBoundary`,Y],[`sizeOfGeoLoop`,Y],[`sizeOfGeoPolygon`,Y],[`sizeOfLinkedGeoPolygon`,Y],[`sizeOfCoordIJ`,Y],[`readInt64AsDoubleFromPointer`,Y],[`isValidCell`,fc,[Z,Q]],[`isValidIndex`,fc,[Z,Q]],[`latLngToCell`,X,[Y,Y,pc,$]],[`cellToLatLng`,X,[Z,Q,$]],[`cellToBoundary`,X,[Z,Q,$]],[`maxGridDiskSize`,X,[Y,$]],[`gridDisk`,X,[Z,Q,Y,$]],[`gridDiskDistances`,X,[Z,Q,Y,$,$]],[`gridRing`,X,[Z,Q,Y,$]],[`gridRingUnsafe`,X,[Z,Q,Y,$]],[`maxPolygonToCellsSize`,X,[$,pc,Y,$]],[`polygonToCells`,X,[$,pc,Y,$]],[`maxPolygonToCellsSizeExperimental`,X,[$,pc,Y,$]],[`polygonToCellsExperimental`,X,[$,pc,Y,Y,Y,$]],[`cellsToLinkedMultiPolygon`,X,[$,Y,$]],[`destroyLinkedMultiPolygon`,null,[$]],[`compactCells`,X,[$,$,Y,Y]],[`uncompactCells`,X,[$,Y,Y,$,Y,pc]],[`uncompactCellsSize`,X,[$,Y,Y,pc,$]],[`isPentagon`,fc,[Z,Q]],[`isResClassIII`,fc,[Z,Q]],[`getBaseCellNumber`,Y,[Z,Q]],[`getResolution`,Y,[Z,Q]],[`getIndexDigit`,Y,[Z,Q,Y]],[`constructCell`,X,[Y,Y,$,$]],[`maxFaceCount`,X,[Z,Q,$]],[`getIcosahedronFaces`,X,[Z,Q,$]],[`cellToParent`,X,[Z,Q,pc,$]],[`cellToChildren`,X,[Z,Q,pc,$]],[`cellToCenterChild`,X,[Z,Q,pc,$]],[`cellToChildrenSize`,X,[Z,Q,pc,$]],[`cellToChildPos`,X,[Z,Q,pc,$]],[`childPosToCell`,X,[Y,Y,Z,Q,pc,$]],[`areNeighborCells`,X,[Z,Q,Z,Q,$]],[`cellsToDirectedEdge`,X,[Z,Q,Z,Q,$]],[`getDirectedEdgeOrigin`,X,[Z,Q,$]],[`getDirectedEdgeDestination`,X,[Z,Q,$]],[`isValidDirectedEdge`,fc,[Z,Q]],[`directedEdgeToCells`,X,[Z,Q,$]],[`originToDirectedEdges`,X,[Z,Q,$]],[`directedEdgeToBoundary`,X,[Z,Q,$]],[`reverseDirectedEdge`,X,[Z,Q,$]],[`gridDistance`,X,[Z,Q,Z,Q,$]],[`gridPathCells`,X,[Z,Q,Z,Q,$]],[`gridPathCellsSize`,X,[Z,Q,Z,Q,$]],[`cellToLocalIj`,X,[Z,Q,Z,Q,Y,$]],[`localIjToCell`,X,[Z,Q,$,Y,$]],[`getHexagonAreaAvgM2`,X,[pc,$]],[`getHexagonAreaAvgKm2`,X,[pc,$]],[`getHexagonEdgeLengthAvgM`,X,[pc,$]],[`getHexagonEdgeLengthAvgKm`,X,[pc,$]],[`greatCircleDistanceM`,Y,[$,$]],[`greatCircleDistanceKm`,Y,[$,$]],[`greatCircleDistanceRads`,Y,[$,$]],[`cellAreaM2`,X,[Z,Q,$]],[`cellAreaKm2`,X,[Z,Q,$]],[`cellAreaRads2`,X,[Z,Q,$]],[`edgeLengthM`,X,[Z,Q,$]],[`edgeLengthKm`,X,[Z,Q,$]],[`edgeLengthRads`,X,[Z,Q,$]],[`getNumCells`,X,[pc,$]],[`getRes0Cells`,X,[$]],[`res0CellCount`,Y],[`getPentagons`,X,[Y,$]],[`pentagonCount`,Y],[`cellToVertex`,X,[Z,Q,Y,$]],[`cellToVertexes`,X,[Z,Q,$]],[`vertexToLatLng`,X,[Z,Q,$]],[`isValidVertex`,fc,[Z,Q]]],hc=0,gc=1,_c=2,vc=3,yc=4,bc=5,xc=6,Sc=7,Cc=8,wc=9,Tc=10,Ec=11,Dc=12,Oc=13,kc=14,Ac=15,jc=16,Mc=17,Nc=18,Pc=19,Fc={};Fc[hc]=`Success`,Fc[gc]=`The operation failed but a more specific error is not available`,Fc[_c]=`Argument was outside of acceptable range`,Fc[vc]=`Latitude or longitude arguments were outside of acceptable range`,Fc[yc]=`Resolution argument was outside of acceptable range`,Fc[bc]=`Cell argument was not valid`,Fc[xc]=`Directed edge argument was not valid`,Fc[Sc]=`Undirected edge argument was not valid`,Fc[Cc]=`Vertex argument was not valid`,Fc[wc]=`Pentagon distortion was encountered`,Fc[Tc]=`Duplicate input`,Fc[Ec]=`Cell arguments were not neighbors`,Fc[Dc]=`Cell arguments had incompatible resolutions`,Fc[Oc]=`Memory allocation failed`,Fc[kc]=`Bounds of provided memory were insufficient`,Fc[Ac]=`Mode or flags argument was not valid`,Fc[jc]=`Index argument was not valid`,Fc[Mc]=`Base cell number was outside of acceptable range`,Fc[Nc]=`Child indexing digits invalid`,Fc[Pc]=`Child indexing digits refer to a deleted subsequence`;var Ic=1e3,Lc=1001,Rc=1002,zc={};zc[Ic]=`Unknown unit`,zc[Lc]=`Array length out of bounds`,zc[Rc]=`Got unexpected null value for H3 index`;var Bc=`Unknown error`;function Vc(e,t,n){var r=n&&`value`in n,i=Error((e[t]||Bc)+` (code: `+t+(r?`, value: `+n.value:``)+`)`);return i.code=t,i}function Hc(e,t){return Vc(Fc,e,arguments.length===2?{value:t}:{})}function Uc(e,t){return Vc(zc,e,arguments.length===2?{value:t}:{})}function Wc(e){if(e!==0)throw Hc(e)}var Gc={};mc.forEach(function(e){Gc[e[0]]=J.cwrap.apply(J,e)});var Kc=16,qc=4,Jc=4,Yc=8,Xc=8,Zc=Gc.sizeOfH3Index(),Qc=Gc.sizeOfLatLng(),$c=Gc.sizeOfCellBoundary();Gc.sizeOfGeoPolygon(),Gc.sizeOfGeoLoop();var el=Gc.sizeOfLinkedGeoPolygon();Gc.sizeOfCoordIJ();var tl={m:`m`,m2:`m2`,km:`km`,km2:`km2`,rads:`rads`,rads2:`rads2`};function nl(e){if(typeof e!=`number`||e<0||e>15||Math.floor(e)!==e)throw Hc(yc,e);return e}function rl(e){if(!e)throw Uc(Rc);return e}var il=/[^0-9a-fA-F]/;function al(e){if(Array.isArray(e)&&e.length===2&&Number.isInteger(e[0])&&Number.isInteger(e[1]))return e;if(typeof e!=`string`||il.test(e))return[0,0];var t=parseInt(e.substring(0,e.length-8),Kc);return[parseInt(e.substring(e.length-8),Kc),t]}function ol(e){if(e>=0)return e.toString(Kc);e&=2147483647;var t=cl(8,e.toString(Kc));return t=(parseInt(t[0],Kc)+8).toString(Kc)+t.substring(1),t}function sl(e,t){return ol(t)+cl(8,ol(e))}function cl(e,t){for(var n=e-t.length,r=``,i=0;i<n;i++)r+=`0`;return r+=t,r}function ll(e,t){t===void 0&&(t=0);var n=J.getValue(e+Zc*t,`i32`),r=J.getValue(e+Zc*t+qc,`i32`);return r?sl(n,r):null}function ul(e,t){return t===void 0&&(t=0),J.getValue(e+Yc*t,`double`)}function dl(e){return Gc.readInt64AsDoubleFromPointer(e)}function fl(e,t,n){J.HEAPU32.set(al(e),t/qc+2*n)}function pl(e,t){for(var n=t.length,r=0;r<n;r++)fl(t[r],e,r)}function ml(e){return Ol(J.getValue(e,`double`))}function hl(e){return[ml(e),ml(e+Yc)]}function gl(e){return[ml(e+Yc),ml(e)]}function _l(e,t,n){for(var r=J.getValue(e,`i32`),i=e+Yc,a=[],o=t?gl:hl,s=0;s<r*2;s+=2)a.push(o(i+Yc*s));return n&&a.push(a[0]),a}function vl(e,t){for(var n=[],r=t?gl:hl,i,a,o,s;e;){for(n.push(i=[]),a=J.getValue(e,`i8*`);a;){for(i.push(o=[]),s=J.getValue(a,`i8*`);s;)o.push(r(s)),s=J.getValue(s+Yc*2,`i8*`);t&&o.push(o[0]),a=J.getValue(a+Jc*2,`i8*`)}e=J.getValue(e+Jc*2,`i8*`)}return n}function yl(e){var t=al(e),n=t[0],r=t[1];return!!Gc.isPentagon(n,r)}function bl(e){var t=al(e),n=t[0],r=t[1];return Gc.isValidCell(n,r)?Gc.getResolution(n,r):-1}function xl(e,t,n){var r=J._malloc(Qc);J.HEAPF64.set([e,t].map(Dl),r/Yc);var i=J._malloc(Zc);try{return Wc(Gc.latLngToCell(r,n,i)),rl(ll(i))}finally{J._free(i),J._free(r)}}function Sl(e){var t=J._malloc(Qc),n=al(e),r=n[0],i=n[1];try{return Wc(Gc.cellToLatLng(r,i,t)),hl(t)}finally{J._free(t)}}function Cl(e,t){var n=J._malloc($c),r=al(e),i=r[0],a=r[1];try{return Wc(Gc.cellToBoundary(i,a,n)),_l(n,t,t)}finally{J._free(n)}}function wl(e,t){if(!e||!e.length)return[];var n=e.length,r=J._calloc(n,Zc);pl(r,e);var i=J._calloc(el);try{return Wc(Gc.cellsToLinkedMultiPolygon(r,n,i)),vl(i,t)}finally{Gc.destroyLinkedMultiPolygon(i),J._free(i),J._free(r)}}function Tl(e,t){var n=al(e),r=n[0],i=n[1],a=al(t),o=a[0],s=a[1],c=J._malloc(Xc);try{return Wc(Gc.gridDistance(r,i,o,s,c)),dl(c)}finally{J._free(c)}}function El(e,t){nl(e);var n=J._malloc(Yc);try{switch(t){case tl.m:Wc(Gc.getHexagonEdgeLengthAvgM(e,n));break;case tl.km:Wc(Gc.getHexagonEdgeLengthAvgKm(e,n));break;default:throw Uc(Ic,t)}return ul(n)}finally{J._free(n)}}function Dl(e){return e*Math.PI/180}function Ol(e){return e*180/Math.PI}function kl(e,t){t=t===void 0?e[0][0]:t;for(let n of e){let e=n[0]-t;e>180?n[0]-=360:e<-180&&(n[0]+=360)}}function Al(e,t,n){let[r,i]=Sl(e),a=t.length;kl(t,i);let o=t[0]===t[a-1]?a-1:a;for(let e=0;e<o;e++)t[e][0]=ee(i,t[e][0],n),t[e][1]=ee(r,t[e][1],n)}function jl(e,t,n){let[r,i]=Sl(e(t,n));return[i,r]}function Ml(e,t=1){let n=Cl(e,!0);return t===1?kl(n):Al(e,n,t),n}function Nl(e){let t=new Float64Array(e.length*2),n=0;for(let r of e)t[n++]=r[0],t[n++]=r[1];return t}var Pl={getPentagon:{type:`accessor`,value:e=>e.pentagon}},Fl=class extends Qi{indexToBounds(){let{data:e,getPentagon:t}=this.props;return{data:e,_normalize:!1,_windingOrder:`CCW`,positionFormat:`XY`,getPolygon:(e,n)=>{let r=t(e,n);return Nl(sc(typeof r==`string`?cc(r):r,{closedRing:!0,segments:`auto`}))}}}};Fl.layerName=`A5Layer`,Fl.defaultProps=Pl;function Il(e){return typeof e==`string`?e.charAt(0).toLowerCase()+e.slice(1):e}function Ll(e){if(Array.isArray(e))return e.map(e=>Ll(e));if(e&&typeof e==`object`){let t={};for(let[n,r]of Object.entries(e))t[Il(n)]=Ll(r);return t}return e}var Rl=RegExp(`^[:A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`);function zl(e,t){let n=[],r=t.exec(e);for(;r;){let i=[];i.startIndex=t.lastIndex-r[0].length;let a=r.length;for(let e=0;e<a;e++)i.push(r[e]);n.push(i),r=t.exec(e)}return n}var Bl=function(e){return Rl.exec(e)!=null};function Vl(e){return e!==void 0}var Hl=[`hasOwnProperty`,`toString`,`valueOf`,`__defineGetter__`,`__defineSetter__`,`__lookupGetter__`,`__lookupSetter__`],Ul=[`__proto__`,`constructor`,`prototype`],Wl={allowBooleanAttributes:!1,unpairedTags:[]};function Gl(e,t){t=Object.assign({},Wl,t);let n=[],r=!1,i=!1;e[0]===`﻿`&&(e=e.substr(1));for(let a=0;a<e.length;a++)if(e[a]===`<`&&e[a+1]===`?`){if(a+=2,a=ql(e,a),a.err)return a}else if(e[a]===`<`){let o=a;if(a++,e[a]===`!`){a=Jl(e,a);continue}{let s=!1;e[a]===`/`&&(s=!0,a++);let c=``;for(;a<e.length&&e[a]!==`>`&&e[a]!==` `&&e[a]!==`	`&&e[a]!==`
`&&e[a]!==`\r`;a++)c+=e[a];if(c=c.trim(),c[c.length-1]===`/`&&(c=c.substring(0,c.length-1),a--),!iu(c)){let t;return t=c.trim().length===0?`Invalid space after '<'.`:`Tag '`+c+`' is an invalid name.`,nu(`InvalidTag`,t,au(e,a))}let l=Zl(e,a);if(l===!1)return nu(`InvalidAttr`,`Attributes for '`+c+`' have open quote.`,au(e,a));let u=l.value;if(a=l.index,u[u.length-1]===`/`){let n=a-u.length;u=u.substring(0,u.length-1);let i=$l(u,t);if(i===!0)r=!0;else return nu(i.err.code,i.err.msg,au(e,n+i.err.line))}else if(s){if(!l.tagClosed)return nu(`InvalidTag`,`Closing tag '`+c+`' doesn't have proper closing.`,au(e,a));if(u.trim().length>0)return nu(`InvalidTag`,`Closing tag '`+c+`' can't have attributes or invalid starting.`,au(e,o));if(n.length===0)return nu(`InvalidTag`,`Closing tag '`+c+`' has not been opened.`,au(e,o));{let t=n.pop();if(c!==t.tagName){let n=au(e,t.tagStartPos);return nu(`InvalidTag`,`Expected closing tag '`+t.tagName+`' (opened in line `+n.line+`, col `+n.col+`) instead of closing tag '`+c+`'.`,au(e,o))}n.length==0&&(i=!0)}}else{let s=$l(u,t);if(s!==!0)return nu(s.err.code,s.err.msg,au(e,a-u.length+s.err.line));if(i===!0)return nu(`InvalidXml`,`Multiple possible root nodes found.`,au(e,a));t.unpairedTags.indexOf(c)!==-1||n.push({tagName:c,tagStartPos:o}),r=!0}for(a++;a<e.length;a++)if(e[a]===`<`){if(e[a+1]===`!`){a++,a=Jl(e,a);continue}if(e[a+1]===`?`){if(a=ql(e,++a),a.err)return a}else break}else if(e[a]===`&`){let t=tu(e,a);if(t==-1)return nu(`InvalidChar`,`char '&' is not expected.`,au(e,a));a=t}else if(i===!0&&!Kl(e[a]))return nu(`InvalidXml`,`Extra text at the end`,au(e,a));e[a]===`<`&&a--}}else{if(Kl(e[a]))continue;return nu(`InvalidChar`,`char '`+e[a]+`' is not expected.`,au(e,a))}return r?n.length==1?nu(`InvalidTag`,`Unclosed tag '`+n[0].tagName+`'.`,au(e,n[0].tagStartPos)):n.length>0?nu(`InvalidXml`,`Invalid '`+JSON.stringify(n.map(e=>e.tagName),null,4).replace(/\r?\n/g,``)+`' found.`,{line:1,col:1}):!0:nu(`InvalidXml`,`Start tag expected.`,1)}function Kl(e){return e===` `||e===`	`||e===`
`||e===`\r`}function ql(e,t){let n=t;for(;t<e.length;t++)if(e[t]==`?`||e[t]==` `){let r=e.substr(n,t-n);if(t>5&&r===`xml`)return nu(`InvalidXml`,`XML declaration allowed only at the start of the document.`,au(e,t));if(e[t]==`?`&&e[t+1]==`>`){t++;break}continue}return t}function Jl(e,t){if(e.length>t+5&&e[t+1]===`-`&&e[t+2]===`-`){for(t+=3;t<e.length;t++)if(e[t]===`-`&&e[t+1]===`-`&&e[t+2]===`>`){t+=2;break}}else if(e.length>t+8&&e[t+1]===`D`&&e[t+2]===`O`&&e[t+3]===`C`&&e[t+4]===`T`&&e[t+5]===`Y`&&e[t+6]===`P`&&e[t+7]===`E`){let n=1;for(t+=8;t<e.length;t++)if(e[t]===`<`)n++;else if(e[t]===`>`&&(n--,n===0))break}else if(e.length>t+9&&e[t+1]===`[`&&e[t+2]===`C`&&e[t+3]===`D`&&e[t+4]===`A`&&e[t+5]===`T`&&e[t+6]===`A`&&e[t+7]===`[`){for(t+=8;t<e.length;t++)if(e[t]===`]`&&e[t+1]===`]`&&e[t+2]===`>`){t+=2;break}}return t}var Yl=`"`,Xl=`'`;function Zl(e,t){let n=``,r=``,i=!1;for(;t<e.length;t++){if(e[t]===Yl||e[t]===Xl)r===``?r=e[t]:r!==e[t]||(r=``);else if(e[t]===`>`&&r===``){i=!0;break}n+=e[t]}return r===``&&{value:n,index:t,tagClosed:i}}function Ql(e){let t=[],n=e.length,r=0;for(;r<n;){let i=r;for(;r<n&&Kl(e[r]);)r++;if(r>=n)break;if(e[r]===`=`){r=i+1;continue}let a=e.slice(i,r),o=r;for(;r<n&&!Kl(e[r])&&e[r]!==`=`;)r++;let s=e.slice(o,r),c,l=r;for(;l<n&&Kl(e[l]);)l++;l<n&&e[l]===`=`&&(c=e.slice(r,l+1),r=l+1);let u,d,f=r;for(;f<n&&Kl(e[f]);)f++;if(f<n&&(e[f]===`"`||e[f]===`'`)){let t=f+1,n=e.indexOf(e[f],t);n!==-1&&(u=e[f],d=e.slice(t,n),r=n+1)}let p={startIndex:i};p[1]=a,p[2]=s,p[3]=c,p[4]=u!==void 0||void 0,p[5]=u,p[6]=d,t.push(p)}return t}function $l(e,t){let n=Ql(e),r={};for(let e=0;e<n.length;e++){if(n[e][1].length===0)return nu(`InvalidAttr`,`Attribute '`+n[e][2]+`' has no space in starting.`,ou(n[e]));if(n[e][3]!==void 0&&n[e][4]===void 0)return nu(`InvalidAttr`,`Attribute '`+n[e][2]+`' is without value.`,ou(n[e]));if(n[e][3]===void 0&&!t.allowBooleanAttributes)return nu(`InvalidAttr`,`boolean attribute '`+n[e][2]+`' is not allowed.`,ou(n[e]));let i=n[e][2];if(!ru(i))return nu(`InvalidAttr`,`Attribute '`+i+`' is an invalid name.`,ou(n[e]));if(!Object.prototype.hasOwnProperty.call(r,i))r[i]=1;else return nu(`InvalidAttr`,`Attribute '`+i+`' is repeated.`,ou(n[e]))}return!0}function eu(e,t){let n=/\d/;for(e[t]===`x`&&(t++,n=/[\da-fA-F]/);t<e.length;t++){if(e[t]===`;`)return t;if(!e[t].match(n))break}return-1}function tu(e,t){if(t++,e[t]===`;`)return-1;if(e[t]===`#`)return t++,eu(e,t);let n=0;for(;t<e.length;t++,n++)if(!(e[t].match(/\w/)&&n<20)){if(e[t]===`;`)break;return-1}return t}function nu(e,t,n){return{err:{code:e,msg:t,line:n.line||n,col:n.col}}}function ru(e){return Bl(e)}function iu(e){return Bl(e)}function au(e,t){let n=e.substring(0,t).split(/\r?\n/);return{line:n.length,col:n[n.length-1].length+1}}function ou(e){return e.startIndex+e[1].length}var su={cent:`¢`,pound:`£`,curren:`¤`,yen:`¥`,euro:`€`,dollar:`$`,fnof:`ƒ`,inr:`₹`,af:`؋`,birr:`ብር`,peso:`₱`,rub:`₽`,won:`₩`,yuan:`¥`,cedil:`¸`},cu={amp:`&`,apos:`'`,gt:`>`,lt:`<`,quot:`"`},lu={nbsp:`\xA0`,copy:`©`,reg:`®`,trade:`™`,mdash:`—`,ndash:`–`,hellip:`…`,laquo:`«`,raquo:`»`,lsquo:`‘`,rsquo:`’`,ldquo:`“`,rdquo:`”`,bull:`•`,para:`¶`,sect:`§`,deg:`°`,frac12:`½`,frac14:`¼`,frac34:`¾`},uu=Object.freeze({ALLOW:`allow`,BLOCK:`block`,THROW:`throw`}),du=new Set(`!?\\\\/[]$%{}^&*()<>|+`);function fu(e){if(e[0]===`#`)throw Error(`[EntityReplacer] Invalid character '#' in entity name: "${e}"`);for(let t of e)if(du.has(t))throw Error(`[EntityReplacer] Invalid character '${t}' in entity name: "${e}"`);return e}function pu(...e){let t=Object.create(null);for(let n of e)if(n)for(let e of Object.keys(n)){let r=n[e];if(typeof r==`string`)t[e]=r;else if(r&&typeof r==`object`&&r.val!==void 0){let n=r.val;typeof n==`string`&&(t[e]=n)}}return t}var mu=`external`,hu=`base`,gu=`all`;function _u(e){return!e||e===mu?new Set([mu]):e===gu?new Set([gu]):e===hu?new Set([hu]):Array.isArray(e)?new Set(e):new Set([mu])}var vu=Object.freeze({allow:0,leave:1,remove:2,throw:3}),yu=new Set([9,10,13]);function bu(e){if(!e)return{xmlVersion:1,onLevel:vu.allow,nullLevel:vu.remove};let t=e.xmlVersion===1.1?1.1:1,n=vu[e.onNCR]??vu.allow,r=vu[e.nullNCR]??vu.remove;return{xmlVersion:t,onLevel:n,nullLevel:Math.max(r,vu.remove)}}var xu=class{constructor(e={}){this._limit=e.limit||{},this._maxTotalExpansions=this._limit.maxTotalExpansions||0,this._maxExpandedLength=this._limit.maxExpandedLength||0,this._postCheck=typeof e.postCheck==`function`?e.postCheck:e=>e,this._limitTiers=_u(this._limit.applyLimitsTo??mu),this._numericAllowed=e.numericAllowed??!0,this._baseMap=pu(cu,e.namedEntities||null),this._externalMap=Object.create(null),this._inputMap=Object.create(null),this._totalExpansions=0,this._expandedLength=0,this._removeSet=new Set(e.remove&&Array.isArray(e.remove)?e.remove:[]),this._leaveSet=new Set(e.leave&&Array.isArray(e.leave)?e.leave:[]);let t=bu(e.ncr);this._ncrXmlVersion=t.xmlVersion,this._ncrOnLevel=t.onLevel,this._ncrNullLevel=t.nullLevel,this._onExternalEntity=typeof e.onExternalEntity==`function`?e.onExternalEntity:null,this._onInputEntity=typeof e.onInputEntity==`function`?e.onInputEntity:null}_applyRegistrationHook(e,t,n,r){if(!e)return!0;let i=e(t,n);if(i===uu.BLOCK)return!1;if(i===uu.THROW)throw Error(`[EntityDecoder] Registration of ${r} entity "&${t};" was rejected by hook`);return!0}setExternalEntities(e){if(e)for(let t of Object.keys(e))fu(t);if(!this._onExternalEntity){this._externalMap=pu(e);return}let t=pu(e),n=Object.create(null);for(let[e,r]of Object.entries(t))this._applyRegistrationHook(this._onExternalEntity,e,r,`external`)&&(n[e]=r);this._externalMap=n}addExternalEntity(e,t){fu(e),typeof t==`string`&&t.indexOf(`&`)===-1&&this._applyRegistrationHook(this._onExternalEntity,e,t,`external`)&&(this._externalMap[e]=t)}addInputEntities(e){if(this._totalExpansions=0,this._expandedLength=0,!this._onInputEntity){this._inputMap=pu(e);return}let t=pu(e),n=Object.create(null);for(let[e,r]of Object.entries(t))this._applyRegistrationHook(this._onInputEntity,e,r,`input`)&&(n[e]=r);this._inputMap=n}reset(){return this._inputMap=Object.create(null),this._totalExpansions=0,this._expandedLength=0,this}setXmlVersion(e){this._ncrXmlVersion=e===1.1?1.1:1}decode(e){if(typeof e!=`string`||e.length===0||e.indexOf(`&`)===-1)return e;let t=e,n=[],r=e.length,i=0,a=0,o=this._maxTotalExpansions>0,s=this._maxExpandedLength>0,c=o||s;for(;a<r;){if(e.charCodeAt(a)!==38){a++;continue}let t=a+1;for(;t<r&&e.charCodeAt(t)!==59&&t-a<=32;)t++;if(t>=r||e.charCodeAt(t)!==59){a++;continue}let l=e.slice(a+1,t);if(l.length===0){a++;continue}let u,d;if(this._removeSet.has(l))u=``,d===void 0&&(d=mu);else if(this._leaveSet.has(l)){a++;continue}else if(l.charCodeAt(0)===35){let e=this._resolveNCR(l);if(e===void 0){a++;continue}u=e,d=hu}else{let e=this._resolveName(l);u=e?.value,d=e?.tier}if(u===void 0)a++;else if(a>i&&n.push(e.slice(i,a)),n.push(u),i=t+1,a=i,c&&this._tierCounts(d)){if(o&&(this._totalExpansions++,this._totalExpansions>this._maxTotalExpansions))throw Error(`[EntityReplacer] Entity expansion count limit exceeded: ${this._totalExpansions} > ${this._maxTotalExpansions}`);if(s){let e=u.length-(l.length+2);if(e>0&&(this._expandedLength+=e,this._expandedLength>this._maxExpandedLength))throw Error(`[EntityReplacer] Expanded content length limit exceeded: ${this._expandedLength} > ${this._maxExpandedLength}`)}}}i<r&&n.push(e.slice(i));let l=n.length===0?e:n.join(``);return this._postCheck(l,t)}_tierCounts(e){return this._limitTiers.has(gu)?!0:this._limitTiers.has(e)}_resolveName(e){if(e in this._inputMap)return{value:this._inputMap[e],tier:mu};if(e in this._externalMap)return{value:this._externalMap[e],tier:mu};if(e in this._baseMap)return{value:this._baseMap[e],tier:hu}}_classifyNCR(e){return e===0?this._ncrNullLevel:e>=55296&&e<=57343||this._ncrXmlVersion===1&&e>=1&&e<=31&&!yu.has(e)?vu.remove:-1}_applyNCRAction(e,t,n){switch(e){case vu.allow:return String.fromCodePoint(n);case vu.remove:return``;case vu.leave:return;case vu.throw:throw Error(`[EntityDecoder] Prohibited numeric character reference &${t}; (U+${n.toString(16).toUpperCase().padStart(4,`0`)})`);default:return String.fromCodePoint(n)}}_resolveNCR(e){let t=e.charCodeAt(1),n;if(n=t===120||t===88?parseInt(e.slice(2),16):parseInt(e.slice(1),10),Number.isNaN(n)||n<0||n>1114111)return;let r=this._classifyNCR(n);if(!this._numericAllowed&&r<vu.remove)return;let i=r===-1?this._ncrOnLevel:Math.max(this._ncrOnLevel,r);return this._applyNCRAction(i,e,n)}},Su=e=>Hl.includes(e)?`__`+e:e,Cu={preserveOrder:!1,attributeNamePrefix:`@_`,attributesGroupName:!1,textNodeName:`#text`,ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0,eNotation:!0,unicode:!1},tagValueProcessor:function(e,t){return t},attributeValueProcessor:function(e,t){return t},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,entityDecoder:null,ignoreDeclaration:!1,ignorePiTags:!1,transformTagName:!1,transformAttributeName:!1,updateTag:function(e,t,n){return e},captureMetaData:!1,maxNestedTags:100,strictReservedNames:!0,jPath:!0,onDangerousProperty:Su};function wu(e,t){if(typeof e!=`string`)return;let n=e.toLowerCase();if(Hl.some(e=>n===e.toLowerCase())||Ul.some(e=>n===e.toLowerCase()))throw Error(`[SECURITY] Invalid ${t}: "${e}" is a reserved JavaScript keyword that could cause prototype pollution`)}function Tu(e,t){return typeof e==`boolean`?{enabled:e,maxEntitySize:1e4,maxExpansionDepth:1e4,maxTotalExpansions:1/0,maxExpandedLength:1e5,maxEntityCount:1e3,allowedTags:null,tagFilter:null,appliesTo:`all`}:typeof e==`object`&&e?{enabled:e.enabled!==!1,maxEntitySize:Math.max(1,e.maxEntitySize??1e4),maxExpansionDepth:Math.max(1,e.maxExpansionDepth??1e4),maxTotalExpansions:Math.max(1,e.maxTotalExpansions??1/0),maxExpandedLength:Math.max(1,e.maxExpandedLength??1e5),maxEntityCount:Math.max(1,e.maxEntityCount??1e3),allowedTags:e.allowedTags??null,tagFilter:e.tagFilter??null,appliesTo:e.appliesTo??`all`}:Tu(!0)}var Eu=function(e){let t=Object.assign({},Cu,e),n=[{value:t.attributeNamePrefix,name:`attributeNamePrefix`},{value:t.attributesGroupName,name:`attributesGroupName`},{value:t.textNodeName,name:`textNodeName`},{value:t.cdataPropName,name:`cdataPropName`},{value:t.commentPropName,name:`commentPropName`}];for(let{value:e,name:t}of n)e&&wu(e,t);return t.onDangerousProperty===null&&(t.onDangerousProperty=Su),t.processEntities=Tu(t.processEntities,t.htmlEntities),t.unpairedTagsSet=new Set(t.unpairedTags),t.stopNodes&&Array.isArray(t.stopNodes)&&(t.stopNodes=t.stopNodes.map(e=>typeof e==`string`&&e.startsWith(`*.`)?`..`+e.substring(2):e)),t},Du=typeof Symbol==`function`?Symbol(`XML Node Metadata`):`@@xmlMetadata`,Ou=class{constructor(e){this.tagname=e,this.child=[],this[`:@`]=Object.create(null)}add(e,t){e===`__proto__`&&(e=`#__proto__`),this.child.push({[e]:t})}addChild(e,t){e.tagname===`__proto__`&&(e.tagname=`#__proto__`),e[`:@`]&&Object.keys(e[`:@`]).length>0?this.child.push({[e.tagname]:e.child,":@":e[`:@`]}):this.child.push({[e.tagname]:e.child}),this.addStartIndex(t)}addStartIndex(e){e!==void 0&&(this.child[this.child.length-1][Du]={startIndex:e})}addEndIndex(e){let t=this.child[this.child.length-1];t!==void 0&&t[Du]!==void 0&&t[Du].endIndex===void 0&&(t[Du].endIndex=e)}static getMetaDataSymbol(){return Du}},ku=`:A-Za-z_À-ÖØ-öø-˿Ͱ-ͽͿ-҆҈-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�`,Au=ku+`\\-\\.\\d·̀-ͯ‿-⁀`,ju=`:A-Za-z_À-˿Ͱ-ͽͿ-҆҈-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�𐀀-󯿿`,Mu=ju+`\\-\\.\\d·̀-ͯ҇‿-⁀`,Nu=(e,t,n=``)=>{let r=`[${e.replace(`:`,``)}][${t.replace(`:`,``)}]*`;return{name:RegExp(`^[${e}][${t}]*$`,n),ncName:RegExp(`^${r}$`,n),qName:RegExp(`^${r}(?::${r})?$`,n),nmToken:RegExp(`^[${t}]+$`,n),nmTokens:RegExp(`^[${t}]+(?:\\s+[${t}]+)*$`,n)}},Pu=Nu(ku,Au),Fu=Nu(ju,Mu,`u`),Iu=Nu(`:A-Za-z_`,`:A-Za-z_\\-\\.\\d`),Lu=(e=`1.0`,t=!1)=>t?Iu:e===`1.1`?Fu:Pu,Ru=(e,{xmlVersion:t=`1.0`,asciiOnly:n=!1}={})=>Lu(t,n).qName.test(e),zu=class{constructor(e,t){this.suppressValidationErr=!e,this.options=e,this.xmlVersion=t||1}setXmlVersion(e=1){this.xmlVersion=e}readDocType(e,t){let n=Object.create(null),r=0;if(e[t+3]===`O`&&e[t+4]===`C`&&e[t+5]===`T`&&e[t+6]===`Y`&&e[t+7]===`P`&&e[t+8]===`E`){t+=9;let i=1,a=!1,o=!1,s=null,c=``;for(;t<e.length;t++)if(s!==null)e[t]===s&&(s=null),c+=e[t];else if(!a&&!o&&(e[t]===`"`||e[t]===`'`))s=e[t],c+=e[t];else if(e[t]===`<`&&!o){if(a&&Vu(e,`!ENTITY`,t)){t+=7;let i,a;if([i,a,t]=this.readEntityExp(e,t+1,this.suppressValidationErr),a.indexOf(`&`)===-1){if(this.options.enabled!==!1&&this.options.maxEntityCount!=null&&r>=this.options.maxEntityCount)throw Error(`Entity count (${r+1}) exceeds maximum allowed (${this.options.maxEntityCount})`);n[i]=a,r++}}else if(a&&Vu(e,`!ELEMENT`,t)){t+=8;let{index:n}=this.readElementExp(e,t+1);t=n}else if(a&&Vu(e,`!ATTLIST`,t))t+=8;else if(a&&Vu(e,`!NOTATION`,t)){t+=9;let{index:n}=this.readNotationExp(e,t+1,this.suppressValidationErr);t=n}else if(Vu(e,`!--`,t))o=!0;else throw Error(`Invalid DOCTYPE`);i++,c=``}else if(e[t]===`>`){if(o?e[t-1]===`-`&&e[t-2]===`-`&&(o=!1,i--):i--,i===0)break}else e[t]===`[`?a=!0:c+=e[t];if(s!==null||i!==0)throw Error(`Unclosed DOCTYPE`)}else throw Error(`Invalid Tag instead of DOCTYPE`);return{entities:n,i:t}}readEntityExp(e,t){t=Bu(e,t);let n=t;for(;t<e.length&&!/\s/.test(e[t])&&e[t]!==`"`&&e[t]!==`'`;)t++;let r=e.substring(n,t);if(Hu(r,{xmlVersion:this.xmlVersion}),t=Bu(e,t),!this.suppressValidationErr){if(e.substring(t,t+6).toUpperCase()===`SYSTEM`)throw Error(`External entities are not supported`);if(e[t]===`%`)throw Error(`Parameter entities are not supported`)}let i=``;if([t,i]=this.readIdentifierVal(e,t,`entity`),this.options.enabled!==!1&&this.options.maxEntitySize!=null&&i.length>this.options.maxEntitySize)throw Error(`Entity "${r}" size (${i.length}) exceeds maximum allowed size (${this.options.maxEntitySize})`);return t--,[r,i,t]}readNotationExp(e,t){t=Bu(e,t);let n=t;for(;t<e.length&&!/\s/.test(e[t]);)t++;let r=e.substring(n,t);!this.suppressValidationErr&&Hu(r,{xmlVersion:this.xmlVersion}),t=Bu(e,t);let i=e.substring(t,t+6).toUpperCase();if(!this.suppressValidationErr&&i!==`SYSTEM`&&i!==`PUBLIC`)throw Error(`Expected SYSTEM or PUBLIC, found "${i}"`);t+=i.length,t=Bu(e,t);let a=null,o=null;if(i===`PUBLIC`)[t,a]=this.readIdentifierVal(e,t,`publicIdentifier`),t=Bu(e,t),(e[t]===`"`||e[t]===`'`)&&([t,o]=this.readIdentifierVal(e,t,`systemIdentifier`));else if(i===`SYSTEM`&&([t,o]=this.readIdentifierVal(e,t,`systemIdentifier`),!this.suppressValidationErr&&!o))throw Error(`Missing mandatory system identifier for SYSTEM notation`);return{notationName:r,publicIdentifier:a,systemIdentifier:o,index:--t}}readIdentifierVal(e,t,n){let r=``,i=e[t];if(i!==`"`&&i!==`'`)throw Error(`Expected quoted string, found "${i}"`);t++;let a=t;for(;t<e.length&&e[t]!==i;)t++;if(r=e.substring(a,t),e[t]!==i)throw Error(`Unterminated ${n} value`);return t++,[t,r]}readElementExp(e,t){t=Bu(e,t);let n=t;for(;t<e.length&&!/\s/.test(e[t]);)t++;let r=e.substring(n,t);if(!this.suppressValidationErr&&!Ru(r,{xmlVersion:this.xmlVersion}))throw Error(`Invalid element name: "${r}"`);t=Bu(e,t);let i=``;if(e[t]===`E`&&Vu(e,`MPTY`,t))t+=4;else if(e[t]===`A`&&Vu(e,`NY`,t))t+=2;else if(e[t]===`(`){t++;let n=t;for(;t<e.length&&e[t]!==`)`;)t++;if(i=e.substring(n,t),e[t]!==`)`)throw Error(`Unterminated content model`)}else if(!this.suppressValidationErr)throw Error(`Invalid Element Expression, found "${e[t]}"`);return{elementName:r,contentModel:i.trim(),index:t}}readAttlistExp(e,t){t=Bu(e,t);let n=t;for(;t<e.length&&!/\s/.test(e[t]);)t++;let r=e.substring(n,t);for(Hu(r,{xmlVersion:this.xmlVersion}),t=Bu(e,t),n=t;t<e.length&&!/\s/.test(e[t]);)t++;let i=e.substring(n,t);if(!Hu(i,{xmlVersion:this.xmlVersion}))throw Error(`Invalid attribute name: "${i}"`);t=Bu(e,t);let a=``;if(e.substring(t,t+8).toUpperCase()===`NOTATION`){if(a=`NOTATION`,t+=8,t=Bu(e,t),e[t]!==`(`)throw Error(`Expected '(', found "${e[t]}"`);t++;let n=[];for(;t<e.length&&e[t]!==`)`;){let r=t;for(;t<e.length&&e[t]!==`|`&&e[t]!==`)`;)t++;let i=e.substring(r,t);if(i=i.trim(),!Hu(i,{xmlVersion:this.xmlVersion}))throw Error(`Invalid notation name: "${i}"`);n.push(i),e[t]===`|`&&(t++,t=Bu(e,t))}if(e[t]!==`)`)throw Error(`Unterminated list of notations`);t++,a+=` (`+n.join(`|`)+`)`}else{let n=t;for(;t<e.length&&!/\s/.test(e[t]);)t++;if(a+=e.substring(n,t),!this.suppressValidationErr&&![`CDATA`,`ID`,`IDREF`,`IDREFS`,`ENTITY`,`ENTITIES`,`NMTOKEN`,`NMTOKENS`].includes(a.toUpperCase()))throw Error(`Invalid attribute type: "${a}"`)}t=Bu(e,t);let o=``;return e.substring(t,t+8).toUpperCase()===`#REQUIRED`?(o=`#REQUIRED`,t+=8):e.substring(t,t+7).toUpperCase()===`#IMPLIED`?(o=`#IMPLIED`,t+=7):[t,o]=this.readIdentifierVal(e,t,`ATTLIST`),{elementName:r,attributeName:i,attributeType:a,defaultValue:o,index:t}}},Bu=(e,t)=>{for(;t<e.length&&/\s/.test(e[t]);)t++;return t};function Vu(e,t,n){for(let r=0;r<t.length;r++)if(t[r]!==e[n+r+1])return!1;return!0}function Hu(e,t){if(Ru(e,{xmlVersion:t}))return e;throw Error(`Invalid entity name ${e}`)}var Uu=[48,1632,1776,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,65296,120782,120792,120802,120812,120822,66720,68912,69734,69872,69942,70096,70384,70736,70864,71248,71360,71472,71904,72016,72688,72784,73040,73120,73552,92768,92864,93008,123200,123632,124144,125264,130032],Wu=new Map,Gu=65535,Ku=1632,qu=new Uint8Array(63904).fill(255);for(let e of Uu)for(let t=0;t<10;t++){let n=e+t;n<=Gu?qu[n-Ku]=t:Wu.set(n,t)}var Ju=48,Yu=57,Xu=45,Zu=new Set([8722,65293,65123]);function Qu(e){if(typeof e!=`string`)return e;let t=e.length;if(t===0)return e;let n=-1;for(let r=0;r<t;r++){let i=e.charCodeAt(r);if(!(i>=Ju&&i<=Yu||i===Xu)){if(i<1632){if(Zu.has(i)){n=r;break}}else if(i>=55296&&i<=56319){if(r+1<t){let t=e.charCodeAt(r+1);if(t>=56320&&t<=57343){let e=65536+(i-55296<<10)+(t-56320);if(Wu.has(e)){n=r;break}}}}else if(qu[i-1632]!==255||Zu.has(i)){n=r;break}}}if(n===-1)return e;let r=[];n>0&&r.push(e.slice(0,n));for(let i=n;i<t;i++){let n=e.charCodeAt(i);if(n>=Ju&&n<=Yu||n===Xu){r.push(e[i]);continue}if(n<1632){r.push(Zu.has(n)?`-`:e[i]);continue}if(n>=55296&&n<=56319){if(i+1<t){let t=e.charCodeAt(i+1);if(t>=56320&&t<=57343){let e=65536+(n-55296<<10)+(t-56320),a=Wu.get(e);if(a!==void 0){r.push(String.fromCharCode(a+48)),i++;continue}}}r.push(e[i]);continue}if(Zu.has(n)){r.push(`-`);continue}let a=qu[n-Ku];r.push(a===255?e[i]:String.fromCharCode(a+48))}return r.join(``)}var $u=/^[-+]?0x[a-fA-F0-9]+$/,ed=/^0b[01]+$/,td=/^0o[0-7]+$/,nd=/^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/,rd={hex:!0,binary:!1,octal:!1,leadingZeros:!0,decimalPoint:`.`,eNotation:!0,infinity:`original`,unicode:!1};function id(e,t={}){if(t=Object.assign({},rd,t),!e||typeof e!=`string`)return e;let n=e.trim();if(n.length===0||t.skipLike!==void 0&&t.skipLike.test(n))return e;if(n===`0`||t.unicode&&(n=Qu(n),n===`0`))return 0;if(t.hex&&$u.test(n))return cd(n,16);if(t.binary&&ed.test(n))return cd(n,2);if(t.octal&&td.test(n))return cd(n,8);if(!isFinite(n)){let r=Number(n);return Number.isNaN(r)?e:ld(e,r,t)}if(n.includes(`e`)||n.includes(`E`))return od(e,n,t);{let r=nd.exec(n);if(r){let i=r[1]||``,a=r[2],o=sd(r[3]),s=i?n[a.length+1]===`.`:n[a.length]===`.`;if(!t.leadingZeros&&(a.length>1||a.length===1&&!s))return e;{let r=Number(n),s=String(r);if(r===0)return r;if(s.search(/[eE]/)!==-1)return t.eNotation?r:e;if(n.indexOf(`.`)!==-1)return s===`0`||s===o||s===`${i}${o}`?r:e;let c=a?o:n;return a?c===s||i+c===s?r:e:c===s||c===i+s?r:e}}return e}}var ad=/^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;function od(e,t,n){if(!n.eNotation)return e;let r=t.match(ad);if(r){let i=r[1]||``,a=r[3].indexOf(`e`)===-1?`E`:`e`,o=r[2],s=i?t[o.length+1]===a:t[o.length]===a;return o.length>1&&s?e:o.length===1&&(r[3].startsWith(`.${a}`)||r[3][0]===a)?Number(t):o.length>0?n.leadingZeros&&!s?Number(t):e:Number(t)}return e}function sd(e){if(e&&e.indexOf(`.`)!==-1){let t=e.length;for(;t>0&&e.charCodeAt(t-1)===48;)t--;return e=e.slice(0,t),e===`.`?e=`0`:e[0]===`.`?e=`0`+e:e[e.length-1]===`.`&&(e=e.substring(0,e.length-1)),e}return e}function cd(e,t){let n=e.trim();if((t===2||t===8)&&(e=n.substring(2)),parseInt)return parseInt(e,t);if(Number.parseInt)return Number.parseInt(e,t);if(window&&window.parseInt)return window.parseInt(e,t);throw Error(`parseInt, Number.parseInt, window.parseInt are not supported`)}function ld(e,t,n){let r=t===1/0;switch(n.infinity.toLowerCase()){case`null`:return null;case`infinity`:return t;case`string`:return r?`Infinity`:`-Infinity`;default:return e}}function ud(e){return typeof e==`function`?e:Array.isArray(e)?t=>{for(let n of e)if(typeof n==`string`&&t===n||n instanceof RegExp&&n.test(t))return!0}:()=>!1}var dd=class{constructor(e,t={},n){this.pattern=e,this.separator=t.separator||`.`,this.segments=this._parse(e),this.data=n,this._hasDeepWildcard=this.segments.some(e=>e.type===`deep-wildcard`),this._hasAttributeCondition=this.segments.some(e=>e.attrName!==void 0),this._hasPositionSelector=this.segments.some(e=>e.position!==void 0)}_parse(e){let t=[],n=0,r=``;for(;n<e.length;)e[n]===this.separator?n+1<e.length&&e[n+1]===this.separator?(r.trim()&&(t.push(this._parseSegment(r.trim())),r=``),t.push({type:`deep-wildcard`}),n+=2):(r.trim()&&t.push(this._parseSegment(r.trim())),r=``,n++):(r+=e[n],n++);return r.trim()&&t.push(this._parseSegment(r.trim())),t}_parseSegment(e){let t={type:`tag`},n=null,r=e,i=e.match(/^([^\[]+)(\[[^\]]*\])(.*)$/);if(i&&(r=i[1]+i[3],i[2])){let e=i[2].slice(1,-1);e&&(n=e)}let a,o=r;if(r.includes(`::`)){let t=r.indexOf(`::`);if(a=r.substring(0,t).trim(),o=r.substring(t+2).trim(),!a)throw Error(`Invalid namespace in pattern: ${e}`)}let s,c=null;if(o.includes(`:`)){let e=o.lastIndexOf(`:`),t=o.substring(0,e).trim(),n=o.substring(e+1).trim();[`first`,`last`,`odd`,`even`].includes(n)||/^nth\(\d+\)$/.test(n)?(s=t,c=n):s=o}else s=o;if(!s)throw Error(`Invalid segment pattern: ${e}`);if(t.tag=s,a&&(t.namespace=a),n){if(n.includes(`=`)){let e=n.indexOf(`=`);t.attrName=n.substring(0,e).trim(),t.attrValue=n.substring(e+1).trim()}else t.attrName=n.trim()}if(c){let e=c.match(/^nth\((\d+)\)$/);e?(t.position=`nth`,t.positionValue=parseInt(e[1],10)):t.position=c}return t}get length(){return this.segments.length}hasDeepWildcard(){return this._hasDeepWildcard}hasAttributeCondition(){return this._hasAttributeCondition}hasPositionSelector(){return this._hasPositionSelector}toString(){return this.pattern}},fd=class{constructor(){this._byDepthAndTag=new Map,this._wildcardByDepth=new Map,this._deepWildcards=[],this._deepByTerminalTag=new Map,this._patterns=new Set,this._sealed=!1}add(e){if(this._sealed)throw TypeError(`ExpressionSet is sealed. Create a new ExpressionSet to add more expressions.`);if(this._patterns.has(e.pattern))return this;if(this._patterns.add(e.pattern),e.hasDeepWildcard()){let t=e.segments[e.segments.length-1];if(t&&t.type!==`deep-wildcard`&&t.tag!==`*`){let n=t.tag;this._deepByTerminalTag.has(n)||this._deepByTerminalTag.set(n,[]),this._deepByTerminalTag.get(n).push(e)}else this._deepWildcards.push(e);return this}let t=e.length,n=e.segments[e.segments.length-1]?.tag;if(!n||n===`*`)this._wildcardByDepth.has(t)||this._wildcardByDepth.set(t,[]),this._wildcardByDepth.get(t).push(e);else{let r=`${t}:${n}`;this._byDepthAndTag.has(r)||this._byDepthAndTag.set(r,[]),this._byDepthAndTag.get(r).push(e)}return this}addAll(e){for(let t of e)this.add(t);return this}has(e){return this._patterns.has(e.pattern)}get size(){return this._patterns.size}seal(){return this._sealed=!0,this}get isSealed(){return this._sealed}matchesAny(e){return this.findMatch(e)!==null}findMatch(e){let t=e.getDepth(),n=e.getCurrentTag(),r=`${t}:${n}`,i=this._byDepthAndTag.get(r);if(i){for(let t=0;t<i.length;t++)if(e.matches(i[t]))return i[t]}let a=this._wildcardByDepth.get(t);if(a){for(let t=0;t<a.length;t++)if(e.matches(a[t]))return a[t]}let o=this._deepByTerminalTag.get(n);if(o){for(let t=0;t<o.length;t++)if(e.matches(o[t]))return o[t]}for(let t=0;t<this._deepWildcards.length;t++)if(e.matches(this._deepWildcards[t]))return this._deepWildcards[t];return null}},pd=class{constructor(e){this._matcher=e}get separator(){return this._matcher.separator}getCurrentTag(){let e=this._matcher.path;return e.length>0?e[e.length-1].tag:void 0}getCurrentNamespace(){let e=this._matcher.path;return e.length>0?e[e.length-1].namespace:void 0}getAttrValue(e){let t=this._matcher.path;if(t.length!==0)return t[t.length-1].values?.[e]}hasAttr(e){let t=this._matcher.path;if(t.length===0)return!1;let n=t[t.length-1];return n.values!==void 0&&e in n.values}getAnyParentAttr(e){return this._matcher.getAnyParentAttr(e)}hasAnyParentAttr(e){return this._matcher.hasAnyParentAttr(e)}getPosition(){let e=this._matcher.path;return e.length===0?-1:e[e.length-1].position??0}getCounter(){let e=this._matcher.path;return e.length===0?-1:e[e.length-1].counter??0}getIndex(){return this.getPosition()}getDepth(){return this._matcher.path.length}toString(e,t=!0){return this._matcher.toString(e,t)}toArray(){return this._matcher.path.map(e=>e.tag)}matches(e){return this._matcher.matches(e)}matchesAny(e){return e.matchesAny(this._matcher)}},md=class{constructor(e={}){this.separator=e.separator||`.`,this.path=[],this.siblingStacks=[],this._pathStringCache=null,this._view=new pd(this),this._keptAttrs=[]}push(e,t=null,n=null,r=null){this._pathStringCache=null,this.path.length>0&&(this.path[this.path.length-1].values=void 0);let i=this.path.length,a=this.siblingStacks[i];a||(a={counts:new Map,total:0},this.siblingStacks[i]=a);let o=n?`${n}:${e}`:e,s=a.counts.get(o)||0,c=a.total;a.counts.set(o,s+1),a.total++;let l={tag:e,position:c,counter:s};n!=null&&(l.namespace=n),t!=null&&(l.values=t),this.path.push(l);let u=this.path.length,d=r===null?null:r.keep;if(d!=null&&d.length>0&&t)for(let e=0;e<d.length;e++){let n=d[e];t[n]!==void 0&&this._keptAttrs.push({depth:u,name:n,value:t[n]})}}pop(){if(this.path.length===0)return;this._pathStringCache=null;let e=this.path.pop();this.siblingStacks.length>this.path.length+1&&(this.siblingStacks.length=this.path.length+1);let t=this.path.length+1;for(;this._keptAttrs.length>0&&this._keptAttrs[this._keptAttrs.length-1].depth>=t;)this._keptAttrs.pop();return e}updateCurrent(e){if(this.path.length>0){let t=this.path[this.path.length-1];e!=null&&(t.values=e)}}getCurrentTag(){return this.path.length>0?this.path[this.path.length-1].tag:void 0}getCurrentNamespace(){return this.path.length>0?this.path[this.path.length-1].namespace:void 0}getAttrValue(e){if(this.path.length!==0)return this.path[this.path.length-1].values?.[e]}hasAttr(e){if(this.path.length===0)return!1;let t=this.path[this.path.length-1];return t.values!==void 0&&e in t.values}getAnyParentAttr(e){let t=this._keptAttrs;for(let n=t.length-1;n>=0;n--)if(t[n].name===e)return t[n].value}hasAnyParentAttr(e){let t=this._keptAttrs;for(let n=t.length-1;n>=0;n--)if(t[n].name===e)return!0;return!1}getPosition(){return this.path.length===0?-1:this.path[this.path.length-1].position??0}getCounter(){return this.path.length===0?-1:this.path[this.path.length-1].counter??0}getIndex(){return this.getPosition()}getDepth(){return this.path.length}toString(e,t=!0){let n=e||this.separator;if(n===this.separator&&t===!0){if(this._pathStringCache!==null)return this._pathStringCache;let e=this.path.map(e=>e.namespace?`${e.namespace}:${e.tag}`:e.tag).join(n);return this._pathStringCache=e,e}return this.path.map(e=>t&&e.namespace?`${e.namespace}:${e.tag}`:e.tag).join(n)}toArray(){return this.path.map(e=>e.tag)}reset(){this._pathStringCache=null,this.path=[],this.siblingStacks=[],this._keptAttrs=[]}matches(e){let t=e.segments;return t.length===0?!1:e.hasDeepWildcard()?this._matchWithDeepWildcard(t):this._matchSimple(t)}_matchSimple(e){if(this.path.length!==e.length)return!1;for(let t=0;t<e.length;t++)if(!this._matchSegment(e[t],this.path[t],t===this.path.length-1))return!1;return!0}_matchWithDeepWildcard(e){let t=this.path.length-1,n=e.length-1;for(;n>=0&&t>=0;){let r=e[n];if(r.type===`deep-wildcard`){if(n--,n<0)return!0;let r=e[n],i=!1;for(let e=t;e>=0;e--)if(this._matchSegment(r,this.path[e],e===this.path.length-1)){t=e-1,n--,i=!0;break}if(!i)return!1}else{if(!this._matchSegment(r,this.path[t],t===this.path.length-1))return!1;t--,n--}}return n<0}_matchSegment(e,t,n){if(e.tag!==`*`&&e.tag!==t.tag||e.namespace!==void 0&&e.namespace!==`*`&&e.namespace!==t.namespace||e.attrName!==void 0&&(!n||!t.values||!(e.attrName in t.values)||e.attrValue!==void 0&&String(t.values[e.attrName])!==String(e.attrValue)))return!1;if(e.position!==void 0){if(!n)return!1;let r=t.counter??0;if(e.position===`first`&&r!==0||e.position===`odd`&&r%2!=1||e.position===`even`&&r%2!=0||e.position===`nth`&&r!==e.positionValue)return!1}return!0}matchesAny(e){return e.matchesAny(this)}snapshot(){return{path:this.path.map(e=>({...e})),siblingStacks:this.siblingStacks.map(e=>e&&{counts:new Map(e.counts),total:e.total}),keptAttrs:this._keptAttrs.map(e=>({...e}))}}restore(e){this._pathStringCache=null,this.path=e.path.map(e=>({...e})),this.siblingStacks=e.siblingStacks.map(e=>e&&{counts:new Map(e.counts),total:e.total}),this._keptAttrs=(e.keptAttrs||[]).map(e=>({...e}))}readOnly(){return this._view}},hd=[{id:`html-script-open`,description:`<script opening tag`,pattern:/<script[\s>/]/i},{id:`html-script-close`,description:`<\/script closing tag`,pattern:/<\/script[\s>]/i},{id:`html-javascript-protocol`,description:`javascript: URI scheme (with optional whitespace/encoding)`,pattern:/j[\t\n\r ]*a[\t\n\r ]*v[\t\n\r ]*a[\t\n\r ]*s[\t\n\r ]*c[\t\n\r ]*r[\t\n\r ]*i[\t\n\r ]*p[\t\n\r ]*t[\t\n\r ]*:/i},{id:`html-vbscript-protocol`,description:`vbscript: URI scheme`,pattern:/vbscript[\t\n\r ]*:/i},{id:`html-data-html`,description:`data:text/html URI — can execute scripts in browsers`,pattern:/data[\t\n\r ]*:[\t\n\r ]*text\/html/i},{id:`html-data-xhtml`,description:`data:application/xhtml+xml URI`,pattern:/data[\t\n\r ]*:[\t\n\r ]*application\/xhtml/i},{id:`html-data-svg`,description:`data:image/svg+xml URI — can execute scripts`,pattern:/data[\t\n\r ]*:[\t\n\r ]*image\/svg\+xml/i},{id:`html-inline-event-handler`,description:`Inline event handler attributes: onclick=, onerror=, onload=, etc.`,pattern:/\bon\w{1,30}\s*=/i},{id:`html-entity-obfuscated-script`,description:`HTML-entity-encoded <script (e.g. &#x3C;script or &lt;script)`,pattern:/(?:&#x0*3[Cc];?|&#0*60;?|&lt;)\s*script/i},{id:`html-entity-obfuscated-javascript`,description:`HTML-entity-encoded javascript: (partial — catches common &#106; or &#x6a; for "j")`,pattern:/(?:&#x0*6[Aa];?|&#0*106;?)\s*(?:&#x0*61;?|a)[\s\S]{0,80}script\s*:/i},{id:`html-style-expression`,description:`CSS expression() — IE-era code execution in style attributes`,pattern:/style[\s\S]{0,20}expression\s*\(/i},{id:`html-object-embed`,description:`<object or <embed tags that can load active content`,pattern:/<(?:object|embed)[\s>/]/i},{id:`html-base-tag`,description:`<base href= — can hijack all relative URLs on a page`,pattern:/<base[\s>]/i},{id:`html-meta-refresh`,description:`<meta http-equiv="refresh" — can redirect users`,pattern:/<meta[\s\S]{0,40}http-equiv[\s\S]{0,20}refresh/i},{id:`html-srcdoc`,description:`srcdoc= attribute on iframes — embeds HTML that can run scripts`,pattern:/srcdoc\s*=/i},{id:`html-iframe`,description:`<iframe tag`,pattern:/<iframe[\s>/]/i},{id:`html-form`,description:`<form tag — can be used for phishing / credential harvesting injection`,pattern:/<form[\s>/]/i}],gd=[{id:`xml-cdata-injection`,description:`CDATA section injection: <![CDATA[ breaks out of text node context`,pattern:/<!\[CDATA\[/i},{id:`xml-cdata-close`,description:`CDATA close sequence: ]]> can terminate an enclosing CDATA section`,pattern:/\]\]>/},{id:`xml-processing-instruction`,description:`XML processing instruction: <?xml-stylesheet or <?php etc.`,pattern:/<\?(?:xml[\- ]|php|asp)/i},{id:`xml-doctype-injection`,description:`DOCTYPE declaration embedded in content — can define entities`,pattern:/<!DOCTYPE(?:[\s[]|$)/i},{id:`xml-entity-system`,description:`SYSTEM keyword — used in external entity declarations (XXE)`,pattern:/\bSYSTEM\s+["']/i},{id:`xml-entity-public`,description:`PUBLIC keyword — used in external entity declarations (XXE)`,pattern:/\bPUBLIC\s+["']/i},{id:`xml-entity-declaration`,description:`<!ENTITY declaration — defines entities, potential XXE or entity expansion`,pattern:/<!ENTITY[\s%]/i},{id:`xml-billion-laughs`,description:`Entity reference chaining / billion laughs: repeated &eX; style references`,pattern:/(?:&\w{1,20};){3,}/},{id:`xml-namespace-confusion`,description:`xmlns: attribute injection — can redefine namespaces to confuse parsers`,pattern:/\bxmlns(?::\w{1,40})?\s*=/i},{id:`xml-comment-injection`,description:`<!-- comment injection — can hide content from some parsers`,pattern:/<!--/},{id:`xml-comment-close`,description:`--> closes an enclosing XML comment`,pattern:/-->/},{id:`xml-pi-close`,description:`?> closes an enclosing processing instruction`,pattern:/\?>/}],_d=[{id:`svg-script-element`,description:`<script element inside SVG executes JavaScript`,pattern:/<script[\s>/]/i},{id:`svg-xlink-href-javascript`,description:`xlink:href with javascript: — classic SVG XSS via <a> or <use>`,pattern:/xlink\s*:\s*href\s*=\s*["']?\s*javascript\s*:/i},{id:`svg-href-javascript`,description:`href= with javascript: in SVG context (<a>, <animate>, etc.)`,pattern:/href\s*=\s*["']?\s*javascript\s*:/i},{id:`svg-foreignobject`,description:`<foreignObject embeds HTML inside SVG — can execute scripts`,pattern:/<foreignObject[\s>/]/i},{id:`svg-use-external`,description:`<use xlink:href or href pointing to external resource (non-fragment URL)`,pattern:/<use[\s\S]{0,60}(?:xlink\s*:\s*)?href\s*=\s*(?:["'][^#]|[^"'#\s>])/i},{id:`svg-animate-href`,description:`<animate attributeName="href" — can dynamically change href to javascript:`,pattern:/<animate[\s\S]{0,80}attributeName\s*=\s*["'][\s]*href["']/i},{id:`svg-animate-xlinkhref`,description:`<animate attributeName="xlink:href"`,pattern:/<animate[\s\S]{0,80}attributeName\s*=\s*["'][\s]*xlink\s*:\s*href["']/i},{id:`svg-set-javascript`,description:`<set to="javascript:..." — sets an attribute to a javascript: URI`,pattern:/<set[\s\S]{0,80}to\s*=\s*["']?\s*javascript\s*:/i},{id:`svg-event-handler`,description:`SVG-specific event handler attributes: onload=, onerror=, onactivate=, etc.`,pattern:/\bon(?:load|error|activate|begin|end|repeat|focus|blur|click|mouse\w{1,20}|key\w{1,20})\s*=/i},{id:`svg-handler-generic`,description:`Generic on* handler catch-all for SVG attributes`,pattern:/\bon\w{1,30}\s*=/i},{id:`svg-filter-feimage`,description:`<feImage href= — filter primitive that can load external resources`,pattern:/<feImage[\s\S]{0,80}(?:xlink\s*:\s*)?href\s*=/i},{id:`svg-image-external`,description:`<image xlink:href with http/https or javascript protocol`,pattern:/<image[\s\S]{0,80}(?:xlink\s*:\s*)?href\s*=\s*["']?\s*(?:https?|javascript)\s*:/i},{id:`svg-style-javascript`,description:`style= attribute containing javascript: (e.g. background:url(javascript:...))`,pattern:/style\s*=[\s\S]{0,60}javascript\s*:/i}],vd=[{id:`sql-block-comment-open`,description:`SQL block comment open: /* ... */ — unusual in legitimate user text`,pattern:/\/\*/},{id:`sql-union-select`,description:`UNION SELECT — most common SQL injection aggregation attack`,pattern:/\bUNION\s{1,20}(?:ALL\s{1,20})?SELECT\b/i},{id:`sql-drop-table`,description:`DROP TABLE — destructive DDL injection`,pattern:/\bDROP\s{1,20}TABLE\b/i},{id:`sql-drop-database`,description:`DROP DATABASE — destructive DDL injection`,pattern:/\bDROP\s{1,20}DATABASE\b/i},{id:`sql-insert-into`,description:`INSERT INTO — data injection`,pattern:/\bINSERT\s{1,20}INTO\b/i},{id:`sql-delete-from`,description:`DELETE FROM — data deletion injection`,pattern:/\bDELETE\s{1,20}FROM\b/i},{id:`sql-update-set`,description:`UPDATE ... SET — data modification injection`,pattern:/\bUPDATE\b[\s\S]{1,60}\bSET\b/i},{id:`sql-exec-xp`,description:`EXEC xp_ — MSSQL extended stored procedure execution`,pattern:/\bEXEC(?:UTE)?\s{1,20}xp_/i},{id:`sql-tautology-string`,description:`Classic string tautology: ' OR '1'='1 or " OR "1"="1"`,pattern:/'\s{0,10}OR\s{0,10}'[^']{0,20}'\s*=\s*'[^']{0,20}/i},{id:`sql-tautology-numeric`,description:`Numeric tautology: OR 1=1`,pattern:/\bOR\s{1,10}1\s*=\s*1\b/i},{id:`sql-always-true-zero`,description:`Numeric tautology: OR 0=0`,pattern:/\bOR\s{1,10}0\s*=\s*0\b/i},{id:`sql-sleep-benchmark`,description:`Time-based blind injection: SLEEP() or BENCHMARK()`,pattern:/\b(?:SLEEP|BENCHMARK)\s*\(/i},{id:`sql-waitfor-delay`,description:`MSSQL time-based blind injection: WAITFOR DELAY`,pattern:/\bWAITFOR\s{1,20}DELAY\b/i},{id:`sql-char-function`,description:`CHAR() function — used to obfuscate injected strings`,pattern:/\bCHAR\s*\(\s*\d{1,3}/i},{id:`sql-information-schema`,description:`INFORMATION_SCHEMA — reconnaissance query for table/column enumeration`,pattern:/\bINFORMATION_SCHEMA\b/i}],yd=[{id:`shell-path-traversal-unix`,description:`Unix path traversal: ../  — climbing the directory tree`,pattern:/\.\.\//},{id:`shell-path-traversal-windows`,description:`Windows path traversal: ..\\ — climbing the directory tree`,pattern:/\.\.\\/},{id:`shell-path-traversal-encoded`,description:`URL-encoded path traversal: %2e%2e or %2f variants`,pattern:/%2e%2e|%2f\.\.|\.\.%2f/i},{id:`shell-null-byte`,description:`Null byte injection: \\x00 or %00 — truncates strings in C-backed functions`,pattern:/\x00|%00/},{id:`shell-semicolon`,description:`Semicolon command separator: cmd1; cmd2`,pattern:/;/},{id:`shell-pipe`,description:`Pipe operator: cmd1 | cmd2`,pattern:/\|/},{id:`shell-and-operator`,description:`AND operator: cmd1 && cmd2`,pattern:/&&/},{id:`shell-or-operator`,description:`OR operator: cmd1 || cmd2`,pattern:/\|\|/},{id:`shell-backtick`,description:"Backtick command substitution: `cmd`",pattern:/`/},{id:`shell-dollar-paren`,description:`Dollar-paren command substitution: $(cmd)`,pattern:/\$\(/},{id:`shell-dollar-brace`,description:"Dollar-brace variable expansion: ${var} — can be abused for injection",pattern:/\$\{/},{id:`shell-redirect-out`,description:`Output redirection: cmd > file or cmd >> file`,pattern:/>{1,2}/},{id:`shell-redirect-in`,description:`Input redirection: cmd < file`,pattern:/</},{id:`shell-newline-injection`,description:`Newline injection: \\n or \\r — can inject new shell commands`,pattern:/[\n\r]/},{id:`shell-glob-star`,description:`Glob expansion: * or ? — can expand to unintended files`,pattern:/[/\\][*?]/},{id:`shell-absolute-root`,description:`Absolute root path injection: string starting with / or \\ (Windows UNC)`,pattern:/^(?:\/|\\\\)/},{id:`shell-windows-drive`,description:`Windows drive letter path injection: C:\\ or D:/`,pattern:/^[a-zA-Z]:[/\\]/},{id:`shell-curl-wget`,description:`curl/wget with URL or flags — can exfiltrate data or download payloads`,pattern:/\b(?:curl|wget)\s+(?:https?:\/\/|ftp:\/\/|-)/i}],bd=[{id:`redos-nested-quantifier-plus`,description:`Nested + quantifier inside a group with outer quantifier: (a+)+, (.+b)*, etc.`,pattern:/\([^)]*\+[^)]*\)[+*]/},{id:`redos-nested-quantifier-star`,description:`Nested * quantifier: (a*)* or (a*)+ — catastrophic backtracking`,pattern:/\([^)]*\*[^)]*\)[*+]/},{id:`redos-nested-groups`,description:`Doubly nested quantified groups: ((a+)+) — guaranteed catastrophic`,pattern:/\(\([^)]{0,40}\)[+*]\)[+*]/},{id:`redos-alternation-overlap`,description:`Overlapping alternation under quantifier: (a|a)+ — ambiguous NFA paths`,pattern:/\(([^|()]{1,20})\|(?:\1)(?:\|[^|()]{1,20}){0,5}\)[+*?]{1,2}/},{id:`redos-star-plus-concat`,description:`(x*x)+ pattern — triggers super-linear backtracking`,pattern:/\([^)]{0,10}\*[^)]{0,10}\)[+*]/},{id:`redos-dot-star-greedy`,description:`(.*){n,} or (.+){n,} — repeated greedy dot quantifiers`,pattern:/\(\.[*+]\)\{?\d/},{id:`redos-large-repetition`,description:`Very large fixed or range repetition count {1000,} or {1000,n} — denial of service via backtracking`,pattern:/\{\d{4,}(?:,\d*)?\}/},{id:`redos-catastrophic-alternation`,description:`Long alternation with many similar branches — polynomial backtracking risk`,pattern:/\([^)]{0,200}(?:\|[^|)]{0,50}){9,}\)/}],xd=`["'\\s]*:`,Sd=[{id:`nosql-where-operator`,description:`$where — executes arbitrary JavaScript server-side in MongoDB`,pattern:RegExp(`\\$where${xd}`,`i`)},{id:`nosql-ne-operator`,description:`$ne — "not equal" operator used to bypass equality checks`,pattern:RegExp(`\\$ne${xd}`,`i`)},{id:`nosql-gt-operator`,description:`$gt — "greater than" used to bypass password/value checks`,pattern:RegExp(`\\$gte?${xd}`,`i`)},{id:`nosql-lt-operator`,description:`$lt / $lte — "less than" bypass variants`,pattern:RegExp(`\\$lte?${xd}`,`i`)},{id:`nosql-regex-operator`,description:`$regex — can be used to extract data character by character (blind injection)`,pattern:RegExp(`\\$regex${xd}`,`i`)},{id:`nosql-or-operator`,description:`$or — logical OR; used to create always-true conditions`,pattern:RegExp(`\\$or${xd}\\s*\\[`,`i`)},{id:`nosql-and-operator`,description:`$and — logical AND operator injection`,pattern:RegExp(`\\$and${xd}\\s*\\[`,`i`)},{id:`nosql-nor-operator`,description:`$nor — logical NOR operator injection`,pattern:RegExp(`\\$nor${xd}\\s*\\[`,`i`)},{id:`nosql-exists-operator`,description:`$exists — can enumerate fields to determine schema`,pattern:RegExp(`\\$exists${xd}`,`i`)},{id:`nosql-in-operator`,description:`$in — matches any value in a list; can enumerate values`,pattern:RegExp(`\\$in${xd}\\s*\\[`,`i`)},{id:`nosql-expr-operator`,description:`$expr — allows aggregation expressions in queries (MongoDB 3.6+)`,pattern:RegExp(`\\$expr${xd}`,`i`)},{id:`nosql-function-operator`,description:`$function — executes arbitrary JavaScript in MongoDB 4.4+`,pattern:RegExp(`\\$function${xd}`,`i`)},{id:`nosql-accumulator-operator`,description:`$accumulator — custom aggregation with arbitrary JS execution`,pattern:RegExp(`\\$accumulator${xd}`,`i`)},{id:`nosql-proto-pollution`,description:`__proto__ — prototype pollution via object key injection`,pattern:/__proto__/},{id:`nosql-constructor-prototype`,description:`constructor.prototype — alternative prototype pollution vector (dot notation or JSON key)`,pattern:/constructor[\s"':.,{\[]*prototype/i},{id:`nosql-proto-bracket`,description:`["__proto__"] — bracket-notation prototype pollution`,pattern:/\[["']__proto__["']\]/}],Cd=[{id:`log-crlf-injection`,description:`CRLF injection: literal \\r or \\n embeds fake log lines`,pattern:/[\r\n]/},{id:`log-url-encoded-crlf`,description:`URL-encoded CRLF: %0d, %0a, %0D, %0A — decoded by some log parsers`,pattern:/%0[dDaA]/},{id:`log-unicode-newline`,description:`Unicode newline variants: U+2028 (line separator), U+2029 (paragraph separator)`,pattern:/[\u2028\u2029]/},{id:`log-log4shell-jndi`,description:"Log4Shell: ${jndi:...} triggers remote code execution in Apache Log4j",pattern:/\$\{jndi\s*:/i},{id:`log-log4shell-obfuscated`,description:"Obfuscated Log4Shell: ${::-j}... lookup-bypass prefix used to evade WAF detection",pattern:/\$\{::-/},{id:`log-log4j-lookup`,description:"Log4j lookup syntax: ${env:...}, ${sys:...}, ${ctx:...} — data exfiltration",pattern:/\$\{(?:env|sys|ctx|main|map|sd|web|docker|k8s|spring)\s*:/i},{id:`log-ssti-double-brace`,description:`SSTI double-brace: {{expression}} — Jinja2, Twig, Handlebars, etc.`,pattern:/\{\{[\s\S]{0,80}\}\}/},{id:`log-ssti-hash-brace`,description:`SSTI hash-brace: #{expression} — Thymeleaf, Velocity, Ruby ERB`,pattern:/#\{[\s\S]{0,80}\}/},{id:`log-ssti-dollar-brace`,description:"SSTI/EL injection: ${expression with operators or method calls} — JSP EL, Freemarker, SpEL",pattern:/\$\{[^}]*(?:\.|\(|\*|\+|\bclass\b|\bruntime\b|\bprocess\b|\bexec\b)[^}]{0,80}\}/i},{id:`log-ssti-percent-tag`,description:`SSTI ERB/ASP tag: <%= expression %> — Ruby ERB, ASP`,pattern:/<%=[\s\S]{0,80}%>/},{id:`log-null-byte`,description:`Null byte: \\x00 or %00 — can truncate log entries in C-backed loggers`,pattern:/\x00|%00/},{id:`log-ansi-escape`,description:`ANSI escape sequence: ESC[ — can manipulate terminal output when logs are tailed`,pattern:/\x1b\[/}],wd=[{id:`sql-line-comment`,description:`SQL line comment: -- followed by whitespace or end of string`,pattern:/--(?:\s|$)/},{id:`sql-stacked-query`,description:`Stacked queries: semicolon immediately followed by a SQL keyword`,pattern:/;\s{0,10}(?:SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC)\b/i},{id:`sql-hex-encoding`,description:`Hex-encoded string injection: 0x41414141 style (MySQL)`,pattern:/\b0x[0-9a-f]{4,}/i}],Td=[...vd,...wd],Ed=Object.freeze({colon:`:`,Tab:`	`,NewLine:`
`}),Dd=/&(?:#[xX]0*([0-9a-fA-F]{1,6});?|#0*([0-9]{1,7});?|([a-zA-Z][a-zA-Z0-9]{1,15});)/g;function Od(e){return e.indexOf(`&`)===-1?e:e.replace(Dd,(e,t,n,r)=>{if(r!==void 0)return Object.prototype.hasOwnProperty.call(Ed,r)?Ed[r]:e;let i=t===void 0?parseInt(n,10):parseInt(t,16);return!Number.isFinite(i)||i>1114111?e:String.fromCodePoint(i)})}hd.label=`HTML`,gd.label=`XML`,_d.label=`SVG`,hd.decodeEntities=!0,gd.decodeEntities=!0,_d.decodeEntities=!0,vd.label=`SQL`,Td.label=`SQL-STRICT`,yd.label=`SHELL`,bd.label=`REDOS`,Sd.label=`NOSQL`,Cd.label=`LOG`,Object.freeze({HTML:hd,XML:gd,SVG:_d,SQL:vd,"SQL-STRICT":Td,SHELL:yd,REDOS:bd,NOSQL:Sd,LOG:Cd});function kd(e){if(typeof e!=`string`)throw TypeError(`is-unsafe: first argument must be a string, got ${typeof e}`)}function Ad(e){if(!(e instanceof RegExp)){if(Array.isArray(e)){if(e.length===0)throw TypeError(`is-unsafe: context must not be an empty array`);if(Array.isArray(e[0])){for(let t of e)if(!Array.isArray(t)||t.length===0)throw TypeError(`is-unsafe: each context in the array must be a non-empty pattern array (PatternList)`)}}else throw TypeError(`is-unsafe: second argument must be a PatternList (e.g. HTML), an array of PatternLists (e.g. [HTML, XML]), or a RegExp. Got: ${typeof e}`)}}function jd(e){return e instanceof RegExp?{lists:null,regex:e}:Array.isArray(e[0])?{lists:e,regex:null}:{lists:[e],regex:null}}function Md(e,t){if(!t.decodeEntities)return null;let n=Od(e);return n===e?null:n}function Nd(e,t){let n=t.label??`CUSTOM`,r=Md(e,t);for(let i of t)if(i.pattern.test(e)||r!==null&&i.pattern.test(r))return{context:n,id:i.id,description:i.description,pattern:i.pattern};return null}function Pd(e,t){kd(e),Ad(t);let{lists:n,regex:r}=jd(t);if(r)return r.test(e);for(let t of n)if(Nd(e,t)!==null)return!0;return!1}function Fd(e,t){if(!e)return{};let n=t.attributesGroupName?e[t.attributesGroupName]:e;if(!n)return{};let r={};for(let e in n)if(e.startsWith(t.attributeNamePrefix)){let i=e.substring(t.attributeNamePrefix.length);r[i]=n[e]}else r[e]=n[e];return r}function Id(e){if(!e||typeof e!=`string`)return;let t=e.indexOf(`:`);if(t!==-1&&t>0){let n=e.substring(0,t);if(n!==`xmlns`)return n}}var Ld=class{constructor(e,t){this.options=e,this.currentNode=null,this.tagsNodeStack=[],this.parseXml=Hd,this.parseTextData=Rd,this.resolveNameSpace=zd,this.buildAttributesMap=Vd,this.isItStopNode=qd,this.replaceEntitiesValue=Gd,this.readStopNodeData=Qd,this.saveTextToParentTag=Kd,this.addChild=Wd,this.ignoreAttributesFn=ud(this.options.ignoreAttributes),this.entityExpansionCount=0,this.currentExpandedLength=0,this.doctypefound=!1;let n={...cu};this.options.entityDecoder?this.entityDecoder=this.options.entityDecoder:(typeof this.options.htmlEntities==`object`?n=this.options.htmlEntities:this.options.htmlEntities===!0&&(n={...lu,...su}),this.entityDecoder=new xu({namedEntities:{...n,...t},numericAllowed:this.options.htmlEntities,limit:{maxTotalExpansions:this.options.processEntities.maxTotalExpansions,maxExpandedLength:this.options.processEntities.maxExpandedLength,applyLimitsTo:this.options.processEntities.appliesTo},onInputEntity:(e,t)=>Pd(t,[hd,gd])?uu.BLOCK:uu.ALLOW})),this.matcher=new md,this.readonlyMatcher=this.matcher.readOnly(),this.isCurrentNodeStopNode=!1,this.stopNodeExpressionsSet=new fd;let r=this.options.stopNodes;if(r&&r.length>0){for(let e=0;e<r.length;e++){let t=r[e];typeof t==`string`?this.stopNodeExpressionsSet.add(new dd(t)):t instanceof dd&&this.stopNodeExpressionsSet.add(t)}this.stopNodeExpressionsSet.seal()}}};function Rd(e,t,n,r,i,a,o){let s=this.options;if(e!==void 0&&(s.trimValues&&!r&&(e=e.trim()),e.length>0)){o||(e=this.replaceEntitiesValue(e,t,n));let r=s.jPath?n.toString():n,c=s.tagValueProcessor(t,e,r,i,a);return c==null?e:typeof c!=typeof e||c!==e?c:s.trimValues||e.trim()===e?$d(e,s.parseTagValue,s.numberParseOptions):e}}function zd(e){if(this.options.removeNSPrefix){let t=e.split(`:`),n=e.charAt(0)===`/`?`/`:``;if(t[0]===`xmlns`)return``;t.length===2&&(e=n+t[1])}return e}var Bd=RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`,`gm`);function Vd(e,t,n,r=!1){let i=this.options;if(r===!0||i.ignoreAttributes!==!0&&typeof e==`string`){let r=zl(e,Bd),a=r.length,o={},s=Array(a),c=!1,l={};for(let e=0;e<a;e++){let t=this.resolveNameSpace(r[e][1]),a=r[e][4];if(t.length&&a!==void 0){let r=a;i.trimValues&&(r=r.trim()),r=this.replaceEntitiesValue(r,n,this.readonlyMatcher),s[e]=r,l[t]=r,c=!0}}c&&typeof t==`object`&&t.updateCurrent&&t.updateCurrent(l);let u=i.jPath?t.toString():this.readonlyMatcher,d=!1;for(let e=0;e<a;e++){let t=this.resolveNameSpace(r[e][1]);if(this.ignoreAttributesFn(t,u))continue;let n=i.attributeNamePrefix+t;if(t.length){if(i.transformAttributeName&&(n=i.transformAttributeName(n)),n=tf(n,i),r[e][4]!==void 0){let r=s[e],a=i.attributeValueProcessor(t,r,u);a==null?o[n]=r:typeof a!=typeof r||a!==r?o[n]=a:o[n]=$d(r,i.parseAttributeValue,i.numberParseOptions),d=!0}else i.allowBooleanAttributes&&(o[n]=!0,d=!0)}}if(!d)return;if(i.attributesGroupName&&!i.preserveOrder){let e={};return e[i.attributesGroupName]=o,e}return o}}var Hd=function(e){let t=this.options,n=t.captureMetaData?[]:void 0;e=e.replace(/\r\n?/g,t.captureMetaData?(e,t)=>(e.length===2&&n.push(t-n.length),`
`):`
`);let r=new Ou(`!xml`),i=r,a=``;this.matcher.reset(),this.entityDecoder.reset(),this.entityExpansionCount=0,this.currentExpandedLength=0,this.doctypefound=!1;let o=new zu(t.processEntities),s=e.length;for(let c=0;c<s;c++)if(e[c]===`<`){let l=e.charCodeAt(c+1);if(l===47){let o=Yd(e,`>`,c,`Closing Tag is not closed.`),s=e.substring(c+2,o).trim();if(t.removeNSPrefix){let e=s.indexOf(`:`);e!==-1&&(s=s.substr(e+1))}s=ef(t.transformTagName,s,``,t).tagName,i&&(a=this.saveTextToParentTag(a,i,this.readonlyMatcher));let l=this.matcher.getCurrentTag();if(s&&t.unpairedTagsSet.has(s))throw Error(`Unpaired tag can not be used as closing tag: </${s}>`);l&&t.unpairedTagsSet.has(l)&&(this.matcher.pop(),this.tagsNodeStack.pop()),this.matcher.pop(),this.isCurrentNodeStopNode=!1,i=this.tagsNodeStack.pop()||r,t.captureMetaData&&i&&i.addEndIndex(Ud(o+1,n)),a=``,c=o}else if(l===63){let r=Zd(e,c,!1,`?>`);if(!r)throw Error(`Pi Tag is not closed.`);a=this.saveTextToParentTag(a,i,this.readonlyMatcher);let s=this.buildAttributesMap(r.tagExp,this.matcher,r.tagName,!0);if(s){let e=s[this.options.attributeNamePrefix+`version`];this.entityDecoder.setXmlVersion(Number(e)||1),o.setXmlVersion(Number(e)||1)}if(!(t.ignoreDeclaration&&r.tagName===`?xml`||t.ignorePiTags)){let e=new Ou(r.tagName);e.add(t.textNodeName,``),r.tagName!==r.tagExp&&r.attrExpPresent&&t.ignoreAttributes!==!0&&(e[`:@`]=s);let a=t.captureMetaData?Ud(c,n):c;this.addChild(i,e,this.readonlyMatcher,a),t.captureMetaData&&i.addEndIndex(Ud(r.closeIndex+2,n))}c=r.closeIndex+1}else if(l===33&&e.charCodeAt(c+2)===45&&e.charCodeAt(c+3)===45){let n=Yd(e,`-->`,c+4,`Comment is not closed.`);if(t.commentPropName){let r=e.substring(c+4,n-2);a=this.saveTextToParentTag(a,i,this.readonlyMatcher),i.add(t.commentPropName,[{[t.textNodeName]:r}])}c=n}else if(l===33&&e.charCodeAt(c+2)===68){if(this.doctypefound)throw Error(`Multiple DOCTYPE declarations found.`);this.doctypefound=!0;let t=o.readDocType(e,c);this.entityDecoder.addInputEntities(t.entities),c=t.i}else if(l===33&&e.charCodeAt(c+2)===91){let n=Yd(e,`]]>`,c,`CDATA is not closed.`)-2,r=e.substring(c+9,n);a=this.saveTextToParentTag(a,i,this.readonlyMatcher);let o=this.parseTextData(r,i.tagname,this.readonlyMatcher,!0,!1,!0,!0);o??=``,t.cdataPropName?i.add(t.cdataPropName,[{[t.textNodeName]:r}]):i.add(t.textNodeName,o),c=n+2}else{let o=Zd(e,c,t.removeNSPrefix);if(!o){let t=e.substring(Math.max(0,c-50),Math.min(s,c+50));throw Error(`readTagExp returned undefined at position ${c}. Context: "${t}"`)}let l=o.tagName,u=o.rawTagName,d=o.tagExp,f=o.attrExpPresent,p=o.closeIndex;if({tagName:l,tagExp:d}=ef(t.transformTagName,l,d,t),t.strictReservedNames&&(l===t.commentPropName||l===t.cdataPropName||l===t.textNodeName||l===t.attributesGroupName))throw Error(`Invalid tag name: ${l}`);i&&a&&i.tagname!==`!xml`&&(a=this.saveTextToParentTag(a,i,this.readonlyMatcher,!1));let m=i;m&&t.unpairedTagsSet.has(m.tagname)&&(i=this.tagsNodeStack.pop(),this.matcher.pop());let h=!1;d.length>0&&d.lastIndexOf(`/`)===d.length-1&&(h=!0,l[l.length-1]===`/`?(l=l.substr(0,l.length-1),d=l):d=d.substr(0,d.length-1),f=l!==d);let g=null,_;_=Id(u),l!==r.tagname&&this.matcher.push(l,{},_),l!==d&&f&&(g=this.buildAttributesMap(d,this.matcher,l),g&&Fd(g,t)),l!==r.tagname&&(this.isCurrentNodeStopNode=this.isItStopNode());let v=t.captureMetaData?Ud(c,n):c;if(this.isCurrentNodeStopNode){let r=``;if(h)c=o.closeIndex;else if(t.unpairedTagsSet.has(l))c=o.closeIndex;else{let t=this.readStopNodeData(e,u,p+1);if(!t)throw Error(`Unexpected end of ${u}`);c=t.i,r=t.tagContent}let a=new Ou(l);g&&(a[`:@`]=g),a.add(t.textNodeName,r),this.matcher.pop(),this.isCurrentNodeStopNode=!1,this.addChild(i,a,this.readonlyMatcher,v),t.captureMetaData&&i.addEndIndex(Ud(c+1,n))}else{if(h){({tagName:l,tagExp:d}=ef(t.transformTagName,l,d,t));let e=new Ou(l);g&&(e[`:@`]=g),this.addChild(i,e,this.readonlyMatcher,v),t.captureMetaData&&i.addEndIndex(Ud(p+1,n)),this.matcher.pop(),this.isCurrentNodeStopNode=!1}else if(t.unpairedTagsSet.has(l)){let e=new Ou(l);g&&(e[`:@`]=g),this.addChild(i,e,this.readonlyMatcher,v),t.captureMetaData&&i.addEndIndex(Ud(o.closeIndex+1,n)),this.matcher.pop(),this.isCurrentNodeStopNode=!1,c=o.closeIndex;continue}else{let e=new Ou(l);if(this.tagsNodeStack.length>t.maxNestedTags)throw Error(`Maximum nested tags exceeded`);this.tagsNodeStack.push(i),g&&(e[`:@`]=g),this.addChild(i,e,this.readonlyMatcher,v),i=e}a=``,c=p}}}else a+=e[c];return r.child};function Ud(e,t){let n=0,r=t.length;for(;n<r;){let i=Math.floor((n+r)/2);t[i]<e?n=i+1:r=i}return e+n}function Wd(e,t,n,r){this.options.captureMetaData||(r=void 0);let i=this.options.jPath?n.toString():n,a=this.options.updateTag(t.tagname,i,t[`:@`]);a===!1||(typeof a==`string`&&(t.tagname=a),e.addChild(t,r))}function Gd(e,t,n){let r=this.options.processEntities;if(!r||!r.enabled)return e;if(r.allowedTags){let i=this.options.jPath?n.toString():n;if(!(Array.isArray(r.allowedTags)?r.allowedTags.includes(t):r.allowedTags(t,i)))return e}if(r.tagFilter){let i=this.options.jPath?n.toString():n;if(!r.tagFilter(t,i))return e}return this.entityDecoder.decode(e)}function Kd(e,t,n,r){return e&&=(r===void 0&&(r=t.child.length===0),e=this.parseTextData(e,t.tagname,n,!1,t[`:@`]?Object.keys(t[`:@`]).length!==0:!1,r),e!==void 0&&e!==``&&t.add(this.options.textNodeName,e),``),e}function qd(){return this.stopNodeExpressionsSet.size!==0&&this.matcher.matchesAny(this.stopNodeExpressionsSet)}function Jd(e,t,n=`>`){let r=0,i=e.length,a=n.charCodeAt(0),o=n.length>1?n.charCodeAt(1):-1,s=``,c=t;for(let n=t;n<i;n++){let t=e.charCodeAt(n);if(r)t===r&&(r=0);else if(t===34||t===39)r=t;else if(t===a){if(o!==-1){if(e.charCodeAt(n+1)===o)return s+=e.substring(c,n),{data:s,index:n}}else return s+=e.substring(c,n),{data:s,index:n}}else t===9&&!r&&(s+=e.substring(c,n)+` `,c=n+1)}}function Yd(e,t,n,r){let i=e.indexOf(t,n);if(i===-1)throw Error(r);return i+t.length-1}function Xd(e,t,n,r){let i=e.indexOf(t,n);if(i===-1)throw Error(r);return i}function Zd(e,t,n,r=`>`){let i=Jd(e,t+1,r);if(!i)return;let a=i.data,o=i.index,s=a.search(/\s/),c=a,l=!0;s!==-1&&(c=a.substring(0,s),a=a.substring(s+1).trimStart());let u=c;if(n){let e=c.indexOf(`:`);e!==-1&&(c=c.substr(e+1),l=c!==i.data.substr(e+1))}return{tagName:c,tagExp:a,closeIndex:o,attrExpPresent:l,rawTagName:u}}function Qd(e,t,n){let r=n,i=1,a=!1,o=-1,s=e.length;for(;n<s;n++)if(e[n]===`<`){let s=e.charCodeAt(n+1);if(s===47){let a=Xd(e,`>`,n,`${t} is not closed`);if(e.substring(n+2,a).trim()===t&&(i--,i===0))return{tagContent:e.substring(r,n),i:a};n=a}else if(s===63)n=Yd(e,`?>`,n+1,`StopNode is not closed.`);else if(s===33&&e.charCodeAt(n+2)===45&&e.charCodeAt(n+3)===45)n=Yd(e,`-->`,n+3,`StopNode is not closed.`);else if(s===33&&e.charCodeAt(n+2)===91)n=Yd(e,`]]>`,n,`StopNode is not closed.`)-2;else{let r=a?void 0:Zd(e,n,!1);if(r)r.tagName===t&&r.tagExp[r.tagExp.length-1]!==`/`&&i++,n=r.closeIndex;else{if(a=!0,o<n&&(o=e.indexOf(`>`,n),o===-1))return;let r=e.indexOf(`<`,n+1);if(r===-1||r>o){let r=e.substring(n+1,o),a=r.search(/\s/);(a===-1?r:r.substring(0,a))===t&&r[r.length-1]!==`/`&&i++,n=o}}}}}function $d(e,t,n){if(t&&typeof e==`string`){let t=e.trim();return t===`true`||t!==`false`&&id(e,n)}return Vl(e)?e:``}function ef(e,t,n,r){if(e){let r=e(t);n===t&&(n=r),t=r}return t=tf(t,r),{tagName:t,tagExp:n}}function tf(e,t){if(Ul.includes(e))throw Error(`[SECURITY] Invalid name: "${e}" is a reserved JavaScript keyword that could cause prototype pollution`);return Hl.includes(e)?t.onDangerousProperty(e):e}var nf=Ou.getMetaDataSymbol();function rf(e,t){if(!e||typeof e!=`object`)return{};if(!t)return e;let n={};for(let r in e)if(r.startsWith(t)){let i=r.substring(t.length);n[i]=e[r]}else n[r]=e[r];return n}function af(e,t,n,r){return of(e,t,n,r)}function of(e,t,n,r){let i,a={};for(let o=0;o<e.length;o++){let s=e[o],c=sf(s);if(c!==void 0&&c!==t.textNodeName){let e=rf(s[`:@`]||{},t.attributeNamePrefix);n.push(c,e)}if(c===t.textNodeName)i===void 0?i=s[c]:i+=``+s[c];else if(c===void 0)continue;else if(s[c]){let e=of(s[c],t,n,r),i=lf(e,t);if(Object.keys(e).length===0&&t.alwaysCreateTextNode&&(e[t.textNodeName]=``),s[`:@`]?cf(e,s[`:@`],r,t):Object.keys(e).length===1&&e[t.textNodeName]!==void 0&&!t.alwaysCreateTextNode?e=e[t.textNodeName]:Object.keys(e).length===0&&(t.alwaysCreateTextNode?e[t.textNodeName]=``:e=``),s[nf]!==void 0&&typeof e==`object`&&e&&(e[nf]=s[nf]),a[c]!==void 0&&Object.prototype.hasOwnProperty.call(a,c))Array.isArray(a[c])||(a[c]=[a[c]]),a[c].push(e);else{let n=t.jPath?r.toString():r;a[c]=t.isArray(c,n,i)?[e]:e}c!==void 0&&c!==t.textNodeName&&n.pop()}}return typeof i==`string`?i.length>0&&(a[t.textNodeName]=i):i!==void 0&&(a[t.textNodeName]=i),a}function sf(e){let t=Object.keys(e);for(let e=0;e<t.length;e++){let n=t[e];if(n!==`:@`)return n}}function cf(e,t,n,r){if(t){let i=Object.keys(t),a=i.length;for(let o=0;o<a;o++){let a=i[o],s=a.startsWith(r.attributeNamePrefix)?a.substring(r.attributeNamePrefix.length):a,c=r.jPath?n.toString()+`.`+s:n;e[a]=r.isArray(a,c,!0,!0)?[t[a]]:t[a]}}}function lf(e,t){let{textNodeName:n}=t,r=Object.keys(e).length;return!!(r===0||r===1&&(e[n]||typeof e[n]==`boolean`||e[n]===0))}var uf=class{constructor(e){this.externalEntities={},this.options=Eu(e)}parse(e,t){if(typeof e!=`string`&&e.toString)e=e instanceof Uint8Array&&!(typeof Buffer<`u`&&Buffer.isBuffer(e))?new TextDecoder(`utf-8`,{ignoreBOM:!0}).decode(e):e.toString();else if(typeof e!=`string`)throw Error(`XML data is accepted in String or Bytes[] form.`);if(t){t===!0&&(t={});let n=Gl(e,t);if(n!==!0)throw Error(`${n.err.msg}:${n.err.line}:${n.err.col}`)}let n=new Ld(this.options,this.externalEntities),r=n.parseXml(e);return this.options.preserveOrder||r===void 0?r:af(r,this.options,n.matcher,n.readonlyMatcher)}addEntity(e,t){if(t.indexOf(`&`)!==-1)throw Error(`Entity value can't have '&'`);if(e.indexOf(`&`)!==-1||e.indexOf(`;`)!==-1)throw Error(`An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'`);if(t===`&`)throw Error(`An entity with value '&' is not permitted`);this.externalEntities[e]=t}static getMetaDataSymbol(){return Ou.getMetaDataSymbol()}};function df(e,t){if(t?._parser&&t._parser!==`fast-xml-parser`)throw Error(t?._parser);let n=ff(e,{allowBooleanAttributes:!0,ignoreDeclaration:!0,removeNSPrefix:t?.removeNSPrefix,textNodeName:t?.textNodeName,isArray:(e,n,r,i)=>!!t?.arrayPaths?.some(e=>n===e),...t?._fastXML});return t?.uncapitalizeKeys?Ll(n):n}function ff(e,t){return new uf({ignoreAttributes:!1,attributeNamePrefix:``,...t}).parse(e)}var pf={dataType:null,batchType:null,name:`XML`,id:`xml`,module:`xml`,version:`4.4.5`,worker:!1,extensions:[`xml`],mimeTypes:[`application/xml`,`text/xml`],testText:mf,options:{xml:{_parser:`fast-xml-parser`,uncapitalizeKeys:!1,removeNSPrefix:!1,textNodeName:`value`,arrayPaths:[]}},parse:async(e,t)=>df(new TextDecoder().decode(e),{...pf.options.xml,...t?.xml}),parseTextSync:(e,t)=>df(e,{...pf.options.xml,...t?.xml})};function mf(e){return e.startsWith(`<?xml`)}function hf(e,t){let n=pf.parseTextSync?.(e,t),r=n?.ServiceExceptionReport?.ServiceException||n?.[`ogc:ServiceExceptionReport`]?.[`ogc:ServiceException`];return typeof r==`string`?r:r.value||r.code||`Unknown error`}var gf={dataType:null,batchType:null,id:`wms-error`,name:`WMS Error`,module:`wms`,version:`4.4.5`,worker:!1,extensions:[`xml`],mimeTypes:[`application/vnd.ogc.se_xml`,`application/xml`,`text/xml`],testText:_f,options:{wms:{throwOnError:!1}},parse:async(e,t)=>vf(new TextDecoder().decode(e),t),parseSync:(e,t)=>vf(new TextDecoder().decode(e),t),parseTextSync:(e,t)=>vf(e,t)};function _f(e){return e.startsWith(`<?xml`)}function vf(e,t){let n={...gf.options.wms,...t?.wms},r=hf(e,n),i=n.minimalErrors?r:`WMS Service error: ${r}`;if(n.throwOnError)throw Error(i);return i}function yf(e){return Array.isArray(e)?e:e?[e]:[]}function bf(e){let t=yf(e);return t.length>0&&t.every(e=>typeof e==`string`)?t:[]}function xf(e,t=void 0){switch(typeof e){case`number`:return e;case`string`:return parseFloat(e);default:return}}function Sf(e,t=void 0){switch(typeof e){case`number`:return e;case`string`:return parseInt(e,10);default:return}}function Cf(e){switch(e){case`true`:return!0;case`false`:return!1;case`1`:return!0;case`0`:return!1;default:return!1}}function wf(e,t){let n=pf.parseTextSync?.(e,t),r=n.WMT_MS_Capabilities||n.WMS_Capabilities||n,i=Tf(r);if(t?.inheritedLayerProps)for(let e of i.layers)Pf(e,null);return t?.includeRawJSON&&(i.json=r),t?.includeXMLText&&(i.xml=e),i}function Tf(e){let t={version:String(e.version||``),name:String(e.Service?.Name||`unnamed`),title:e.Service?.Title?String(e.Service?.Title):void 0,abstract:e.Service?.Abstract?String(e.Service?.Abstract):void 0,keywords:bf(e.Service?.KeywordList?.Keyword),fees:e.Service?.Fees?JSON.stringify(e.Service?.Fees):void 0,accessConstraints:e.Service?.AccessConstraints?JSON.stringify(e.Service?.AccessConstraints):void 0,layerLimit:Sf(e.Service?.LayerLimit),maxWidth:Sf(e.Service?.maxWidth),maxHeight:Sf(e.Service?.maxHeight),layers:[],requests:Ef(e.Capability?.Request),exceptions:Df(e.Exception)},n=yf(e.Capability?.Layer);for(let e of n)t.layers.push(Of(e));for(let[e,n]of Object.entries(t))n===void 0&&delete t[e];return t}function Ef(e){let t={};for(let[n,r]of Object.entries(e||{}))t[n]={mimeTypes:bf(r?.Format)};return t}function Df(e){if(yf(e?.Format).length>0)return{mimeTypes:bf(e)}}function Of(e){let t={title:String(e?.Title||``),name:e?.Name&&String(e?.Name),abstract:e?.Name&&String(e?.Abstract),keywords:bf(e.KeywordList?.Keyword)},n=e?.CRS||e?.SRS;n&&Array.isArray(n)&&n.every(e=>typeof e==`string`)&&(t.crs=n);let r=e?.EX_GeographicBoundingBox&&kf(e?.EX_GeographicBoundingBox);r&&(t.geographicBoundingBox=r),r=e?.LatLonBoundingBox&&Af(e?.LatLonBoundingBox),r&&(t.geographicBoundingBox=r);let i=e?.BoundingBox&&jf(e?.BoundingBox);i&&i.length>0&&(t.boundingBoxes=i);let a=yf(e?.Dimension).map(e=>Nf(e));a.length&&(t.dimensions=a),e?.opaque&&(t.opaque=Cf(e?.opaque)),e?.cascaded&&(t.cascaded=Cf(e?.cascaded)),e?.queryable&&(t.queryable=Cf(e?.queryable));let o=yf(e?.Layer),s=[];for(let e of o)s.push(Of(e));s.length>0&&(t.layers=s);for(let[e,n]of Object.entries(t))n===void 0&&delete t[e];return t}function kf(e){let{westBoundLongitude:t,northBoundLatitude:n,eastBoundLongitude:r,southBoundLatitude:i}=e;return[[t,i],[r,n]]}function Af(e){let{minx:t,miny:n,maxx:r,maxy:i}=e;return[[t,n],[r,i]]}function jf(e){return yf(e).map(e=>Mf(e))}function Mf(e){let{CRS:t,SRS:n,minx:r,miny:i,maxx:a,maxy:o,resx:s,resy:c}=e,l={crs:t||n,boundingBox:[[xf(r),xf(i)],[xf(a),xf(o)]]};return s&&(l.xResolution=s),c&&(l.yResolution=c),l}function Nf(e){let{name:t,units:n,value:r}=e,i={name:t,units:n,extent:r};return e.unitSymbol&&(i.unitSymbol=e.unitSymbol),e.default&&(i.defaultValue=e.default),e.multipleValues&&(i.multipleValues=Cf(e.multipleValues)),e.nearestValue&&(i.nearestValue=Cf(e.nearestValue)),e.current&&(i.current=Cf(e.current)),i}function Pf(e,t){t?.geographicBoundingBox&&!e.geographicBoundingBox&&(e.geographicBoundingBox=[...t.geographicBoundingBox]),t?.crs&&!e.crs&&(e.crs=[...t.crs]),t?.boundingBoxes&&!e.boundingBoxes&&(e.boundingBoxes=[...t.boundingBoxes]),t?.dimensions&&!e.dimensions&&(e.dimensions=[...t.dimensions]);for(let t of e.layers||[])Pf(t,e)}var Ff={dataType:null,batchType:null,id:`wms-capabilities`,name:`WMS Capabilities`,module:`wms`,version:`4.4.5`,worker:!1,extensions:[`xml`],mimeTypes:[`application/vnd.ogc.wms_xml`,`application/xml`,`text/xml`],testText:If,options:{wms:{}},parse:async(e,t)=>wf(new TextDecoder().decode(e),t?.wms),parseTextSync:(e,t)=>wf(e,t?.wms)};function If(e){return e.startsWith(`<?xml`)}function Lf(e,t){let n=(pf.parseTextSync?.(e,t)).FeatureInfoResponse?.FIELDS||[];return{features:(Array.isArray(n)?n:[n]).map(e=>Rf(e))}}function Rf(e){return{attributes:e||{},type:``,bounds:{bottom:0,top:0,left:0,right:0}}}var zf={...Ff,dataType:null,id:`wms-feature-info`,name:`WMS FeatureInfo`,parse:async(e,t)=>Lf(new TextDecoder().decode(e),t),parseTextSync:(e,t)=>Lf(e,t)};function Bf(e,t){return pf.parseTextSync?.(e,t)}var Vf={...Ff,dataType:null,id:`wms-layer-description`,name:`WMS DescribeLayer`,parse:async(e,t)=>Bf(new TextDecoder().decode(e),t),parseTextSync:(e,t)=>Bf(e,t)},Hf={name:`Web Map Service (OGC WMS)`,id:`wms`,module:`wms`,version:`0.0.0`,extensions:[],mimeTypes:[],type:`wms`,fromUrl:!0,fromBlob:!1,defaultOptions:{wms:{}},testURL:e=>e.toLowerCase().includes(`wms`),createDataSource:(e,t)=>new Uf(e,t)},Uf=class extends we{substituteCRS84;flipCRS;wmsParameters;vendorParameters;capabilities=null;constructor(e,t){super(e,t,Hf.defaultOptions),this.substituteCRS84=t.wms?.substituteCRS84??!1,this.flipCRS=[`EPSG:4326`],this.wmsParameters={layers:void 0,query_layers:void 0,styles:void 0,version:`1.3.0`,crs:`EPSG:4326`,format:`image/png`,info_format:`text/plain`,transparent:void 0,time:void 0,elevation:void 0,...t.wmsParameters,...t.wms?.wmsParameters},this.vendorParameters=t.wms?.vendorParameters||t.vendorParameters||{}}async getMetadata(){let e=await this.getCapabilities();return this.normalizeMetadata(e)}async getImage(e){let{boundingBox:t,bbox:n,...r}=e,i={bbox:t?[...t[0],...t[1]]:n,...r};return await this.getMap(i)}normalizeMetadata(e){return e}async getCapabilities(e,t){let n=this.getCapabilitiesURL(e,t),r=await this.fetch(n),i=await r.arrayBuffer();this._checkResponse(r,i);let a=await Ff.parse(i,this.loadOptions);return this.capabilities=a,a}async getMap(e,t){let n=this.getMapURL(e,t),r=await this.fetch(n),i=await r.arrayBuffer();this._checkResponse(r,i);try{return await I.parse(i,this.loadOptions)}catch{throw this._parseError(i)}}async getFeatureInfo(e,t){let n=this.getFeatureInfoURL(e,t),r=await this.fetch(n),i=await r.arrayBuffer();return this._checkResponse(r,i),await zf.parse(i,this.loadOptions)}async getFeatureInfoText(e,t){let n=this.getFeatureInfoURL(e,t),r=await this.fetch(n),i=await r.arrayBuffer();return this._checkResponse(r,i),new TextDecoder().decode(i)}async describeLayer(e,t){let n=this.describeLayerURL(e,t),r=await this.fetch(n),i=await r.arrayBuffer();return this._checkResponse(r,i),await Vf.parse(i,this.loadOptions)}async getLegendGraphic(e,t){let n=this.getLegendGraphicURL(e,t),r=await this.fetch(n),i=await r.arrayBuffer();this._checkResponse(r,i);try{return await I.parse(i,this.loadOptions)}catch{throw this._parseError(i)}}getCapabilitiesURL(e,t){let n={version:this.wmsParameters.version,...e};return this._getWMSUrl(`GetCapabilities`,n,t)}getMapURL(e,t){e=this._getWMS130Parameters(e);let n={version:this.wmsParameters.version,format:this.wmsParameters.format,transparent:this.wmsParameters.transparent,time:this.wmsParameters.time,elevation:this.wmsParameters.elevation,layers:this.wmsParameters.layers,styles:this.wmsParameters.styles,crs:this.wmsParameters.crs,...e};return this._getWMSUrl(`GetMap`,n,t)}getFeatureInfoURL(e,t){e=this._getWMS130Parameters(e);let{boundingBox:n,bbox:r}=e;e.bbox=n?[...n[0],...n[1]]:r;let i={version:this.wmsParameters.version,info_format:this.wmsParameters.info_format,layers:this.wmsParameters.layers,query_layers:this.wmsParameters.query_layers,styles:this.wmsParameters.styles,crs:this.wmsParameters.crs,...e};return this._getWMSUrl(`GetFeatureInfo`,i,t)}describeLayerURL(e,t){let n={version:this.wmsParameters.version,...e};return this._getWMSUrl(`DescribeLayer`,n,t)}getLegendGraphicURL(e,t){let n={version:this.wmsParameters.version,...e};return this._getWMSUrl(`GetLegendGraphic`,n,t)}_parseWMSUrl(e){let[t,n]=e.split(`?`),r=n.split(`&`),i={};for(let e of r){let[t,n]=e.split(`=`);i[t]=n}return{url:t,parameters:i}}_getWMSUrl(e,t,n){let r=this.url,i=!0,a={service:`WMS`,version:t.version,request:e,...t,...this.vendorParameters,...n},o=[`transparent`,`time`,`elevation`];for(let[e,n]of Object.entries(a))(!o.includes(e)||n)&&(r+=i?`?`:`&`,i=!1,r+=this._getURLParameter(e,n,t));return encodeURI(r)}_getWMS130Parameters(e){let t={...e};return t.srs&&(t.crs=t.crs||t.srs,delete t.srs),t}_getURLParameter(e,t,n){switch(e){case`crs`:n.version===`1.3.0`?this.substituteCRS84&&t===`EPSG:4326`&&(t=`CRS:84`):e=`srs`;break;case`srs`:n.version===`1.3.0`&&(e=`crs`);break;case`bbox`:let r=this._flipBoundingBox(t,n);r&&(t=r);break;case`x`:n.version===`1.3.0`&&(e=`i`);break;case`y`:n.version===`1.3.0`&&(e=`j`)}return e=e.toUpperCase(),Array.isArray(t)?`${e}=${t.join(`,`)}`:`${e}=${t?String(t):``}`}_flipBoundingBox(e,t){if(!Array.isArray(e)||e.length!==4)return null;let n=t.version===`1.3.0`&&this.flipCRS.includes(t.crs||``)&&!(this.substituteCRS84&&t.crs===`EPSG:4326`),r=e;return n?[r[1],r[0],r[3],r[2]]:r}async _fetchArrayBuffer(e){let t=await this.fetch(e),n=await t.arrayBuffer();return this._checkResponse(t,n),n}_checkResponse(e,t){let n=e.headers[`content-type`];if(!e.ok||gf.mimeTypes.includes(n)){let e=ie(this.loadOptions,{wms:{throwOnError:!0}}),n=gf.parseSync?.(t,e);throw Error(n)}}_parseError(e){let t=gf.parseSync?.(e,this.options.core?.loadOptions);return Error(t)}},Wf=6378137*Math.PI;function Gf(e){let t=S(e);return t[0]=(t[0]/256-1)*Wf,t[1]=(t[1]/256-1)*Wf,t}var Kf={id:`imagery-layer`,data:``,serviceType:`auto`,srs:`auto`,layers:{type:`array`,compare:!0,value:[]},onMetadataLoad:{type:`function`,value:()=>{}},onMetadataLoadError:{type:`function`,value:console.error},onImageLoadStart:{type:`function`,value:()=>{}},onImageLoad:{type:`function`,value:()=>{}},onImageLoadError:{type:`function`,compare:!1,value:(e,t)=>console.error(t,e)}},qf=class extends Ae{get isLoaded(){return this.state?.loadCounter===0&&super.isLoaded}shouldUpdateState(){return!0}initializeState(){this.state._nextRequestId=0,this.state.lastRequestId=-1,this.state.loadCounter=0}updateState({changeFlags:e,props:t,oldProps:n}){let{viewport:r}=this.context;e.dataChanged||t.serviceType!==n.serviceType?(this.state.imageSource=this._createImageSource(t),this._loadMetadata(),this.debounce(()=>this.loadImage(r,`image source changed`),0)):j(t.layers,n.layers,1)?e.viewportChanged&&this.debounce(()=>this.loadImage(r,`viewport changed`)):this.debounce(()=>this.loadImage(r,`layers changed`),0)}finalizeState(){}renderLayers(){let{bounds:e,image:t,lastRequestParameters:n}=this.state;return t&&new $e({...this.getSubLayerProps({id:`bitmap`}),_imageCoordinateSystem:n.srs===`EPSG:4326`?k.LNGLAT:k.CARTESIAN,bounds:e,image:t})}async getFeatureInfoText(e,t){let{lastRequestParameters:n}=this.state;return n?await this.state.imageSource.getFeatureInfoText?.({...n,query_layers:n.layers,x:e,y:t,info_format:`application/vnd.ogc.gml`}):``}_createImageSource(e){if(e.data instanceof De)return e.data;if(typeof e.data==`string`)return ae(e.data,[Hf],{core:{type:e.serviceType,loadOptions:e.loadOptions}});throw Error(`invalid image source in props.data`)}async _loadMetadata(){let{imageSource:e}=this.state;try{this.state.loadCounter++;let t=await e.getMetadata();this.state.imageSource===e&&this.getCurrentLayer()?.props.onMetadataLoad(t)}catch(e){this.getCurrentLayer()?.props.onMetadataLoadError(e)}finally{this.state.loadCounter--}}async loadImage(e,t){let{layers:n,serviceType:r}=this.props;if(r===`wms`&&n.length===0)return;let i=e.getBounds(),{width:a,height:o}=e,s=this.getRequestId(),{srs:c}=this.props;c===`auto`&&(c=e.resolution?`EPSG:4326`:`EPSG:3857`);let l={width:a,height:o,boundingBox:[[i[0],i[1]],[i[2],i[3]]],layers:n,crs:c};c===`EPSG:3857`&&(l.boundingBox=[Gf([i[0],i[1]]),Gf([i[2],i[3]])]);try{this.state.loadCounter++,this.props.onImageLoadStart(s);let e=await this.state.imageSource.getImage(l);this.state.lastRequestId<s&&(this.getCurrentLayer()?.props.onImageLoad(s),this.setState({image:e,bounds:i,lastRequestParameters:l,lastRequestId:s}))}catch(e){this.raiseError(e,`Load image`),this.getCurrentLayer()?.props.onImageLoadError(s,e)}finally{this.state.loadCounter--}}getRequestId(){return this.state._nextRequestId++}debounce(e,t=500){clearTimeout(this.state._timeoutId),this.state._timeoutId=setTimeout(()=>e(),t)}};qf.layerName=`WMSLayer`,qf.defaultProps=Kf;var Jf={getHeight:{type:`accessor`,value:0},greatCircle:!0},Yf=class extends Be{};Yf.layerName=`GreatCircleLayer`,Yf.defaultProps=Jf;var Xf=e(n(((e,n,r)=>{(function(e,r){typeof define==`function`&&define.amd?define([],r):typeof t==`function`&&typeof n==`object`&&n&&n.exports?n.exports=r():(e.dcodeIO=e.dcodeIO||{}).Long=r()})(r,function(){function e(e,t,n){this.low=e|0,this.high=t|0,this.unsigned=!!n}e.prototype.__isLong__,Object.defineProperty(e.prototype,"__isLong__",{value:!0,enumerable:!1,configurable:!1});function t(e){return(e&&e.__isLong__)===!0}e.isLong=t;var n={},r={};function i(e,t){var i,a,s;return t?(e>>>=0,(s=0<=e&&e<256)&&(a=r[e],a)?a:(i=o(e,(e|0)<0?-1:0,!0),s&&(r[e]=i),i)):(e|=0,(s=-128<=e&&e<128)&&(a=n[e],a)?a:(i=o(e,e<0?-1:0,!1),s&&(n[e]=i),i))}e.fromInt=i;function a(e,t){if(isNaN(e)||!isFinite(e))return t?_:g;if(t){if(e<0)return _;if(e>=p)return S}else{if(e<=-m)return C;if(e+1>=m)return x}return e<0?a(-e,t).neg():o(e%f|0,e/f|0,t)}e.fromNumber=a;function o(t,n,r){return new e(t,n,r)}e.fromBits=o;var s=Math.pow;function c(e,t,n){if(e.length===0)throw Error(`empty string`);if(e===`NaN`||e===`Infinity`||e===`+Infinity`||e===`-Infinity`)return g;if(typeof t==`number`?(n=t,t=!1):t=!!t,n||=10,n<2||36<n)throw RangeError(`radix`);var r;if((r=e.indexOf(`-`))>0)throw Error(`interior hyphen`);if(r===0)return c(e.substring(1),t,n).neg();for(var i=a(s(n,8)),o=g,l=0;l<e.length;l+=8){var u=Math.min(8,e.length-l),d=parseInt(e.substring(l,l+u),n);if(u<8){var f=a(s(n,u));o=o.mul(f).add(a(d))}else o=o.mul(i),o=o.add(a(d))}return o.unsigned=t,o}e.fromString=c;function l(t){return t instanceof e?t:typeof t==`number`?a(t):typeof t==`string`?c(t):o(t.low,t.high,t.unsigned)}e.fromValue=l;var u=65536,d=1<<24,f=u*u,p=f*f,m=p/2,h=i(d),g=i(0);e.ZERO=g;var _=i(0,!0);e.UZERO=_;var v=i(1);e.ONE=v;var y=i(1,!0);e.UONE=y;var b=i(-1);e.NEG_ONE=b;var x=o(-1,2147483647,!1);e.MAX_VALUE=x;var S=o(-1,-1,!0);e.MAX_UNSIGNED_VALUE=S;var C=o(0,-2147483648,!1);e.MIN_VALUE=C;var w=e.prototype;return w.toInt=function(){return this.unsigned?this.low>>>0:this.low},w.toNumber=function(){return this.unsigned?(this.high>>>0)*f+(this.low>>>0):this.high*f+(this.low>>>0)},w.toString=function(e){if(e||=10,e<2||36<e)throw RangeError(`radix`);if(this.isZero())return`0`;if(this.isNegative()){if(this.eq(C)){var t=a(e),n=this.div(t),r=n.mul(t).sub(this);return n.toString(e)+r.toInt().toString(e)}return`-`+this.neg().toString(e)}for(var i=a(s(e,6),this.unsigned),o=this,c=``;;){var l=o.div(i),u=(o.sub(l.mul(i)).toInt()>>>0).toString(e);if(o=l,o.isZero())return u+c;for(;u.length<6;)u=`0`+u;c=``+u+c}},w.getHighBits=function(){return this.high},w.getHighBitsUnsigned=function(){return this.high>>>0},w.getLowBits=function(){return this.low},w.getLowBitsUnsigned=function(){return this.low>>>0},w.getNumBitsAbs=function(){if(this.isNegative())return this.eq(C)?64:this.neg().getNumBitsAbs();for(var e=this.high==0?this.low:this.high,t=31;t>0&&!(e&1<<t);t--);return this.high==0?t+1:t+33},w.isZero=function(){return this.high===0&&this.low===0},w.isNegative=function(){return!this.unsigned&&this.high<0},w.isPositive=function(){return this.unsigned||this.high>=0},w.isOdd=function(){return(this.low&1)==1},w.isEven=function(){return!(this.low&1)},w.equals=function(e){return t(e)||(e=l(e)),this.unsigned!==e.unsigned&&this.high>>>31==1&&e.high>>>31==1?!1:this.high===e.high&&this.low===e.low},w.eq=w.equals,w.notEquals=function(e){return!this.eq(e)},w.neq=w.notEquals,w.lessThan=function(e){return this.comp(e)<0},w.lt=w.lessThan,w.lessThanOrEqual=function(e){return this.comp(e)<=0},w.lte=w.lessThanOrEqual,w.greaterThan=function(e){return this.comp(e)>0},w.gt=w.greaterThan,w.greaterThanOrEqual=function(e){return this.comp(e)>=0},w.gte=w.greaterThanOrEqual,w.compare=function(e){if(t(e)||(e=l(e)),this.eq(e))return 0;var n=this.isNegative(),r=e.isNegative();return n&&!r?-1:!n&&r?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1},w.comp=w.compare,w.negate=function(){return!this.unsigned&&this.eq(C)?C:this.not().add(v)},w.neg=w.negate,w.add=function(e){t(e)||(e=l(e));var n=this.high>>>16,r=this.high&65535,i=this.low>>>16,a=this.low&65535,s=e.high>>>16,c=e.high&65535,u=e.low>>>16,d=e.low&65535,f=0,p=0,m=0,h=0;return h+=a+d,m+=h>>>16,h&=65535,m+=i+u,p+=m>>>16,m&=65535,p+=r+c,f+=p>>>16,p&=65535,f+=n+s,f&=65535,o(m<<16|h,f<<16|p,this.unsigned)},w.subtract=function(e){return t(e)||(e=l(e)),this.add(e.neg())},w.sub=w.subtract,w.multiply=function(e){if(this.isZero()||(t(e)||(e=l(e)),e.isZero()))return g;if(this.eq(C))return e.isOdd()?C:g;if(e.eq(C))return this.isOdd()?C:g;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(h)&&e.lt(h))return a(this.toNumber()*e.toNumber(),this.unsigned);var n=this.high>>>16,r=this.high&65535,i=this.low>>>16,s=this.low&65535,c=e.high>>>16,u=e.high&65535,d=e.low>>>16,f=e.low&65535,p=0,m=0,_=0,v=0;return v+=s*f,_+=v>>>16,v&=65535,_+=i*f,m+=_>>>16,_&=65535,_+=s*d,m+=_>>>16,_&=65535,m+=r*f,p+=m>>>16,m&=65535,m+=i*d,p+=m>>>16,m&=65535,m+=s*u,p+=m>>>16,m&=65535,p+=n*f+r*d+i*u+s*c,p&=65535,o(_<<16|v,p<<16|m,this.unsigned)},w.mul=w.multiply,w.divide=function(e){if(t(e)||(e=l(e)),e.isZero())throw Error(`division by zero`);if(this.isZero())return this.unsigned?_:g;var n,r,i;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return _;if(e.gt(this.shru(1)))return y;i=_}else{if(this.eq(C))return e.eq(v)||e.eq(b)?C:e.eq(C)?v:(n=this.shr(1).div(e).shl(1),n.eq(g)?e.isNegative()?v:b:(r=this.sub(e.mul(n)),i=n.add(r.div(e)),i));if(e.eq(C))return this.unsigned?_:g;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();i=g}for(r=this;r.gte(e);){n=Math.max(1,Math.floor(r.toNumber()/e.toNumber()));for(var o=Math.ceil(Math.log(n)/Math.LN2),c=o<=48?1:s(2,o-48),u=a(n),d=u.mul(e);d.isNegative()||d.gt(r);)n-=c,u=a(n,this.unsigned),d=u.mul(e);u.isZero()&&(u=v),i=i.add(u),r=r.sub(d)}return i},w.div=w.divide,w.modulo=function(e){return t(e)||(e=l(e)),this.sub(this.div(e).mul(e))},w.mod=w.modulo,w.not=function(){return o(~this.low,~this.high,this.unsigned)},w.and=function(e){return t(e)||(e=l(e)),o(this.low&e.low,this.high&e.high,this.unsigned)},w.or=function(e){return t(e)||(e=l(e)),o(this.low|e.low,this.high|e.high,this.unsigned)},w.xor=function(e){return t(e)||(e=l(e)),o(this.low^e.low,this.high^e.high,this.unsigned)},w.shiftLeft=function(e){return t(e)&&(e=e.toInt()),(e&=63)==0?this:e<32?o(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):o(0,this.low<<e-32,this.unsigned)},w.shl=w.shiftLeft,w.shiftRight=function(e){return t(e)&&(e=e.toInt()),(e&=63)==0?this:e<32?o(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):o(this.high>>e-32,this.high>=0?0:-1,this.unsigned)},w.shr=w.shiftRight,w.shiftRightUnsigned=function(e){if(t(e)&&(e=e.toInt()),e&=63,e===0)return this;var n=this.high;if(e<32){var r=this.low;return o(r>>>e|n<<32-e,n>>>e,this.unsigned)}return o(e===32?n:n>>>e-32,0,this.unsigned)},w.shru=w.shiftRightUnsigned,w.toSigned=function(){return this.unsigned?o(this.low,this.high,!1):this},w.toUnsigned=function(){return this.unsigned?this:o(this.low,this.high,!0)},w.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()},w.toBytesLE=function(){var e=this.high,t=this.low;return[t&255,t>>>8&255,t>>>16&255,t>>>24&255,e&255,e>>>8&255,e>>>16&255,e>>>24&255]},w.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24&255,e>>>16&255,e>>>8&255,e&255,t>>>24&255,t>>>16&255,t>>>8&255,t&255]},e})}))(),1),Zf=180/Math.PI;function Qf(e,t,n){let r=1<<t;return[(e[0]+n[0])/r,(e[1]+n[1])/r]}function $f(e){return e>=.5?1/3*(4*e*e-1):1/3*(1-4*(1-e)*(1-e))}function ep(e){return[$f(e[0]),$f(e[1])]}function tp(e,[t,n]){switch(e){case 0:return[1,t,n];case 1:return[-t,1,n];case 2:return[-t,-n,1];case 3:return[-1,-n,-t];case 4:return[n,-1,-t];case 5:return[n,t,-1];default:throw Error(`Invalid face`)}}function np([e,t,n]){let r=Math.atan2(n,Math.sqrt(e*e+t*t));return[Math.atan2(t,e)*Zf,r*Zf]}function rp(e){let t=Xf.default.fromString(e,!0,10).toString(2);for(;t.length<64;)t=`0`+t;let n=t.lastIndexOf(`1`),r=t.substring(0,3),i=t.substring(3,n),a=i.length/2,o=Xf.default.fromString(r,!0,2).toString(10),s=Xf.default.fromString(i,!0,2).toString(4);for(;s.length<a;)s=`0`+s;return`${o}/${s}`}function ip(e,t,n,r){if(r===0){n===1&&(t[0]=e-1-t[0],t[1]=e-1-t[1]);let r=t[0];t[0]=t[1],t[1]=r}}function ap(e){let t=e.split(`/`),n=parseInt(t[0],10),r=t[1],i=r.length,a=[0,0],o;for(let e=i-1;e>=0;e--){o=i-e;let t=r[e],n=0,s=0;t===`1`?s=1:t===`2`?(n=1,s=1):t===`3`&&(n=1);let c=2**(o-1);ip(c,a,n,s),a[0]+=c*n,a[1]+=c*s}if(n%2==1){let e=a[0];a[0]=a[1],a[1]=e}return{face:n,ij:a,level:o}}function op(e){let t=e.padEnd(16,`0`);return Xf.default.fromString(t,16)}var sp=100;function cp({face:e,ij:t,level:n}){let r=[[0,0],[0,1],[1,1],[1,0],[0,0]],i=Math.max(1,Math.ceil(sp*2**-n)),a=new Float64Array(4*i*2+2),o=0,s=0;for(let c=0;c<4;c++){let l=r[c].slice(0),u=r[c+1],d=(u[0]-l[0])/i,f=(u[1]-l[1])/i;for(let r=0;r<i;r++){l[0]+=d,l[1]+=f;let r=np(tp(e,ep(Qf(t,n,l))));Math.abs(r[1])>89.999&&(r[0]=s);let i=r[0]-s;r[0]+=i>180?-360:i<-180?360:0,a[o++]=r[0],a[o++]=r[1],s=r[0]}}return a[o++]=a[0],a[o++]=a[1],a}function lp(e){if(typeof e==`string`){if(e.indexOf(`/`)>0)return e;e=op(e)}return rp(e.toString())}function up(e){return cp(ap(lp(e)))}var dp={getS2Token:{type:`accessor`,value:e=>e.token}},fp=class extends Qi{indexToBounds(){let{data:e,getS2Token:t}=this.props;return{data:e,_normalize:!1,positionFormat:`XY`,getPolygon:(e,n)=>up(t(e,n))}}};fp.layerName=`S2Layer`,fp.defaultProps=dp;var pp=512;function mp(e,t){let n=0,r=0,i=1<<e.length,a=i/pp;for(let t=0;t<e.length;t++){i>>=1;let a=parseInt(e[t]);a%2&&(n|=i),a>1&&(r|=i)}return[[n/a,pp-r/a],[(n+t)/a,pp-(r+t)/a]]}function hp(e,t=1){let[n,r]=mp(e,t),[i,a]=T(n),[o,s]=T(r);return[o,a,o,s,i,s,i,a,o,a]}var gp={getQuadkey:{type:`accessor`,value:e=>e.quadkey}},_p=class extends Qi{indexToBounds(){let{data:e,extruded:t,getQuadkey:n}=this.props,r=t?.99:1;return{data:e,_normalize:!1,positionFormat:`XY`,getPolygon:(e,t)=>hp(n(e,t),r),updateTriggers:{getPolygon:r}}}};_p.layerName=`QuadkeyLayer`,_p.defaultProps=gp;var vp=class{constructor(e){this.index=e,this.isVisible=!1,this.isSelected=!1,this.parent=null,this.children=[],this.content=null,this._loader=void 0,this._abortController=null,this._loaderId=0,this._isLoaded=!1,this._isCancelled=!1,this._needsReload=!1}get bbox(){return this._bbox}set bbox(e){this._bbox||(this._bbox=e,this.boundingBox=`west`in e?[[e.west,e.south],[e.east,e.north]]:[[e.left,e.top],[e.right,e.bottom]])}get data(){return this.isLoading&&this._loader?this._loader.then(()=>this.data):this.content}get isLoaded(){return this._isLoaded&&!this._needsReload}get isLoading(){return!!this._loader&&!this._isCancelled}get needsReload(){return this._needsReload||this._isCancelled}get byteLength(){let e=this.content?this.content.byteLength:0;return Number.isFinite(e)||console.error(`byteLength not defined in tile data`),e}async _loadData({getData:e,getRequestPriority:t,requestScheduler:n,onLoad:r,onError:i}){let{index:a,id:o,bbox:s,userData:c,zoom:l}=this,u=this._loaderId;this._abortController=new AbortController;let{signal:d}=this._abortController,f=await n.scheduleRequest(this,t);if(!f){this._isCancelled=!0;return}if(this._isCancelled){f.done();return}let p=null,m;try{p=await e({index:a,id:o,bbox:s,userData:c,zoom:l,signal:d})}catch(e){m=e||!0}finally{f.done()}u===this._loaderId&&(this._loader=void 0,this.content=p,this._isCancelled&&!p?this._isLoaded=!1:(this._isLoaded=!0,this._isCancelled=!1,m?i(m,this):r(this)))}loadData(e){return this._isLoaded=!1,this._isCancelled=!1,this._needsReload=!1,this._loaderId++,this._loader=this._loadData(e),this._loader}setNeedsReload(){this.isLoading&&(this.abort(),this._loader=void 0),this._needsReload=!0}abort(){this.isLoaded||(this._isCancelled=!0,this._abortController?.abort())}},yp=512,bp=3,xp=[[.5,.5],[0,0],[0,1],[1,0],[1,1]],Sp=xp.concat([[0,.5],[.5,0],[1,.5],[.5,1]]),Cp=Sp.concat([[.25,.5],[.75,.5]]),wp=class e{constructor(e,t,n){this.x=e,this.y=t,this.z=n}get children(){if(!this._children){let t=this.x*2,n=this.y*2,r=this.z+1;this._children=[new e(t,n,r),new e(t,n+1,r),new e(t+1,n,r),new e(t+1,n+1,r)]}return this._children}update(e){let{viewport:t,cullingVolume:n,elevationBounds:r,minZ:i,maxZ:a,bounds:o,offset:s,project:c}=e,l=this.getBoundingVolume(r,s,c);if(o&&!this.insideBounds(o)||n.computeVisibility(l)<0||c&&this.beyondHorizon(t.cameraPosition,c,r[1]))return!1;if(!this.childVisible){let{z:e}=this;if(e<a&&e>=i){let n=l.distanceTo(t.cameraPosition)*t.scale/t.height;e+=Math.floor(Math.log2(n))}if(e>=a)return this.selected=!0,!0}this.selected=!1,this.childVisible=!0;for(let t of this.children)t.update(e);return!0}getSelected(e=[]){if(this.selected&&e.push(this),this._children)for(let t of this._children)t.getSelected(e);return e}beyondHorizon(e,t,n){let r=e[0],i=e[1],a=e[2],o=Math.sqrt(r*r+i*i+a*a),s=Math.atan2(r,-i)*180/Math.PI,c=Math.asin(a/o)*180/Math.PI,[l,u]=Lp(this.x,this.y,this.z),[d,f]=Lp(this.x+1,this.y+1,this.z),p=(l+d)/2,m=p+((s-p+540)%360-180),h=t([Math.max(l,Math.min(m,d)),Math.max(f,Math.min(c,u)),n]);return h[0]*r+h[1]*i+h[2]*a<=h[0]*h[0]+h[1]*h[1]+h[2]*h[2]}insideBounds([e,t,n,r]){let i=yp/2**this.z;return this.x*i<n&&this.y*i<r&&(this.x+1)*i>e&&(this.y+1)*i>t}getBoundingVolume(e,t,n){if(n){let t=this.z<1?Cp:this.z<2?Sp:xp,r=[];for(let i of t){let t=Lp(this.x+i[0],this.y+i[1],this.z);t[2]=e[0],r.push(n(t)),e[0]!==e[1]&&(t[2]=e[1],r.push(n(t)))}return pe(r)}let r=yp/2**this.z,i=this.x*r+t*yp,a=yp-(this.y+1)*r;return new me([i,a,e[0]],[i+r,a+r,e[1]])}};function Tp(e,t,n,r){let i=e instanceof le?e.projectPosition:null,a=Object.values(e.getFrustumPlanes()).map(({normal:e,distance:t})=>new ue(e.clone().negate(),t)),o=new be(a),s=e.distanceScales.unitsPerMeter[2],c=n&&n[0]*s||0,l=n&&n[1]*s||0,u=e instanceof A&&e.pitch<=60?t:0;if(r){let[e,t,n,i]=r,a=S([e,i]),o=S([n,t]);r=[a[0],yp-a[1],o[0],yp-o[1]]}let d=new wp(0,0,0),f={viewport:e,project:i,cullingVolume:o,elevationBounds:[c,l],minZ:u,maxZ:t,bounds:r,offset:0};if(d.update(f),e instanceof A&&e.subViewports&&e.subViewports.length>1){for(f.offset=-1;d.update(f)&&!(--f.offset<-3););for(f.offset=1;d.update(f)&&!(++f.offset>bp););}return d.getSelected()}var Ep=512,Dp=[-1/0,-1/0,1/0,1/0],Op={type:`object`,value:null,validate:(e,t)=>t.optional&&e===null||typeof e==`string`||Array.isArray(e)&&e.every(e=>typeof e==`string`),equal:(e,t)=>{if(e===t)return!0;if(!Array.isArray(e)||!Array.isArray(t))return!1;let n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}};function kp(e,t){let n=[t.transformAsPoint([e[0],e[1]]),t.transformAsPoint([e[2],e[1]]),t.transformAsPoint([e[0],e[3]]),t.transformAsPoint([e[2],e[3]])];return[Math.min(...n.map(e=>e[0])),Math.min(...n.map(e=>e[1])),Math.max(...n.map(e=>e[0])),Math.max(...n.map(e=>e[1]))]}function Ap(e){return Math.abs(e.split(``).reduce((e,t)=>(e<<5)-e+t.charCodeAt(0)|0,0))}function jp(e,t){if(!e||!e.length)return null;let{index:n,id:r}=t;if(Array.isArray(e)){let t=Ap(r)%e.length;e=e[t]}let i=e;for(let e of Object.keys(n)){let t=RegExp(`{${e}}`,`g`);i=i.replace(t,String(n[e]))}return Number.isInteger(n.y)&&Number.isInteger(n.z)&&(i=i.replace(/\{-y\}/g,String(2**n.z-n.y-1))),i}function Mp(e,t,n){let r;if(t&&t.length===2){let[n,i]=t,a=e.getBounds({z:n}),o=e.getBounds({z:i});r=[Math.min(a[0],o[0]),Math.min(a[1],o[1]),Math.max(a[2],o[2]),Math.max(a[3],o[3])]}else r=e.getBounds();return e.isGeospatial?[Math.max(r[0],n[0]),Math.max(r[1],n[1]),Math.min(r[2],n[2]),Math.min(r[3],n[3])]:[Math.max(Math.min(r[0],n[2]),n[0]),Math.max(Math.min(r[1],n[3]),n[1]),Math.min(Math.max(r[2],n[0]),n[2]),Math.min(Math.max(r[3],n[1]),n[3])]}function Np({viewport:e,z:t,cullRect:n}){return(e.subViewports||[e]).map(e=>Pp(e,t||0,n))}function Pp(e,t,n){if(!Array.isArray(t)){let r=n.x-e.x,i=n.y-e.y,{width:a,height:o}=n,s={targetZ:t},c=e.unproject([r,i],s),l=e.unproject([r+a,i],s),u=e.unproject([r,i+o],s),d=e.unproject([r+a,i+o],s);return[Math.min(c[0],l[0],u[0],d[0]),Math.min(c[1],l[1],u[1],d[1]),Math.max(c[0],l[0],u[0],d[0]),Math.max(c[1],l[1],u[1],d[1])]}let r=Pp(e,t[0],n),i=Pp(e,t[1],n);return[Math.min(r[0],i[0]),Math.min(r[1],i[1]),Math.max(r[2],i[2]),Math.max(r[3],i[3])]}function Fp(e,t,n){return n?kp(e,n).map(e=>e*t/Ep):e.map(e=>e*t/Ep)}function Ip(e,t){return 2**e*Ep/t}function Lp(e,t,n){let r=Ip(n,Ep),i=e/r*360-180,a=Math.PI-2*Math.PI*t/r;return[i,180/Math.PI*Math.atan(.5*(Math.exp(a)-Math.exp(-a)))]}function Rp(e,t,n,r){let i=Ip(n,r);return[e/i*Ep,t/i*Ep]}function zp(e,t,n,r,i=Ep){if(e.isGeospatial){let[e,i]=Lp(t,n,r),[a,o]=Lp(t+1,n+1,r);return{west:e,north:i,east:a,south:o}}let[a,o]=Rp(t,n,r,i),[s,c]=Rp(t+1,n+1,r,i);return{left:a,top:o,right:s,bottom:c}}function Bp(e,t,n,r,i){let[a,o,s,c]=Fp(Mp(e,null,r),Ip(t,n),i),l=[];for(let e=Math.floor(a);e<s;e++)for(let n=Math.floor(o);n<c;n++)l.push({x:e,y:n,z:t});return l}function Vp({viewport:e,maxZoom:t,minZoom:n,zRange:r,extent:i,tileSize:a=Ep,modelMatrix:o,modelMatrixInverse:s,zoomOffset:c=0,visibleMinZoom:l,visibleMaxZoom:u}){let d=e.isGeospatial?Math.round(e.zoom+Math.log2(Ep/a)+c):Math.ceil(e.zoom+c);if(typeof n==`number`&&Number.isFinite(n)&&d<n){if(!i)return[];d=n}if(typeof t==`number`&&Number.isFinite(t)&&d>t&&(d=t),l!=null&&e.zoom<l||u!=null&&e.zoom>u)return[];let f=i;return o&&s&&i&&!e.isGeospatial&&(f=kp(i,o)),e.isGeospatial?Tp(e,d,r,i):Bp(e,d,a,f||Dp,s)}function Hp(e){return/(?=.*{z})(?=.*{x})(?=.*({y}|{-y}))/.test(e)}function Up(e){return Number.isFinite(e.west)&&Number.isFinite(e.north)&&Number.isFinite(e.east)&&Number.isFinite(e.south)}function Wp(e){let t={},n;return r=>{for(let i in r)if(!Gp(r[i],t[i])){n=e(r),t=r;break}return n}}function Gp(e,t){if(e===t)return!0;if(Array.isArray(e)){let n=e.length;if(!t||t.length!==n)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}return!1}var Kp=1,qp=2,Jp=`never`,Yp=`no-overlap`,Xp=`best-available`,Zp=5,Qp=0,$p=1e8,em=1e8-1,tm={[Xp]:im,[Yp]:am,[Jp]:()=>{}},nm={extent:null,tileSize:512,maxZoom:null,minZoom:null,maxCacheSize:null,maxCacheByteSize:null,refinementStrategy:`best-available`,zRange:null,maxRequests:6,debounceTime:0,zoomOffset:0,visibleMinZoom:null,visibleMaxZoom:null,onTileLoad:()=>{},onTileUnload:()=>{},onTileError:()=>{}},rm=class{constructor(e){this._getCullBounds=Wp(Np),this.opts={...nm,...e},this.setOptions(this.opts),this.onTileLoad=e=>{this.opts.onTileLoad?.(e),this.opts.maxCacheByteSize!==null&&(this._cacheByteSize+=e.byteLength,this._resizeCache())},this._requestScheduler=new re({throttleRequests:this.opts.maxRequests>0||this.opts.debounceTime>0,maxRequests:this.opts.maxRequests,debounceTime:this.opts.debounceTime}),this._cache=new Map,this._tiles=[],this._dirty=!1,this._cacheByteSize=0,this._viewport=null,this._zRange=null,this._selectedTiles=null,this._frameNumber=0,this._modelMatrix=new B,this._modelMatrixInverse=new B}get tiles(){return this._tiles}get selectedTiles(){return this._selectedTiles}get isLoaded(){return this._selectedTiles!==null&&this._selectedTiles.every(e=>e.isLoaded)}get needsReload(){return this._selectedTiles!==null&&this._selectedTiles.some(e=>e.needsReload)}setOptions(e){Object.assign(this.opts,e),Number.isFinite(e.maxZoom)&&(this._maxZoom=Math.floor(e.maxZoom)),Number.isFinite(e.minZoom)&&(this._minZoom=Math.ceil(e.minZoom)),this._viewport=null}finalize(){for(let e of this._cache.values())e.isLoading&&e.abort();this._cache.clear(),this._tiles=[],this._selectedTiles=null}reloadAll(){for(let e of this._cache.keys()){let t=this._cache.get(e);!this._selectedTiles||!this._selectedTiles.includes(t)?this._cache.delete(e):t.setNeedsReload()}}update(e,{zRange:t,modelMatrix:n}={zRange:null,modelMatrix:null}){let r=n?new B(n):new B,i=!r.equals(this._modelMatrix);if(!this._viewport||!e.equals(this._viewport)||!L(this._zRange,t)||i){i&&(this._modelMatrixInverse=r.clone().invert(),this._modelMatrix=r),this._viewport=e,this._zRange=t;let n=this.getTileIndices({viewport:e,maxZoom:this._maxZoom,minZoom:this._minZoom,zRange:t,modelMatrix:this._modelMatrix,modelMatrixInverse:this._modelMatrixInverse});this._selectedTiles=n.map(e=>this._getTile(e,!0)),this._dirty&&this._rebuildTree()}else this.needsReload&&(this._selectedTiles=this._selectedTiles.map(e=>this._getTile(e.index,!0)));let a=this.updateTileStates();return this._pruneRequests(),this._dirty&&this._resizeCache(),a&&this._frameNumber++,this._frameNumber}isTileVisible(e,t,n){if(!e.isVisible)return!1;if(t&&this._viewport){let r=this._getCullBounds({viewport:this._viewport,z:this._zRange,cullRect:t}),{bbox:i}=e;for(let[e,t,a,o]of r){let r;if(`west`in i)r=i.west<a&&i.east>e&&i.south<o&&i.north>t;else{if(n&&!B.IDENTITY.equals(n)){let[e,t,r,a]=kp([i.left,i.top,i.right,i.bottom],n);i={left:e,top:t,right:r,bottom:a}}let s=Math.min(i.top,i.bottom),c=Math.max(i.top,i.bottom);r=i.left<a&&i.right>e&&s<o&&c>t}if(r)return!0}return!1}return!0}getTileIndices({viewport:e,maxZoom:t,minZoom:n,zRange:r,modelMatrix:i,modelMatrixInverse:a}){let{tileSize:o,extent:s,zoomOffset:c,visibleMinZoom:l,visibleMaxZoom:u}=this.opts;return Vp({viewport:e,maxZoom:t,minZoom:n,zRange:r,tileSize:o,extent:s,modelMatrix:i,modelMatrixInverse:a,zoomOffset:c,visibleMinZoom:l,visibleMaxZoom:u})}getTileId(e){return`${e.x}-${e.y}-${e.z}`}getTileZoom(e){return e.z}getTileMetadata(e){let{tileSize:t}=this.opts;return{bbox:zp(this._viewport,e.x,e.y,e.z,t)}}getParentIndex(e){return{x:Math.floor(e.x/2),y:Math.floor(e.y/2),z:e.z-1}}updateTileStates(){let e=this.opts.refinementStrategy||`best-available`,t=Array(this._cache.size),n=0;for(let e of this._cache.values())t[n++]=e.isVisible,e.isSelected=!1,e.isVisible=!1;for(let e of this._selectedTiles)e.isSelected=!0,e.isVisible=!0;(typeof e==`function`?e:tm[e])(Array.from(this._cache.values())),n=0;for(let e of this._cache.values())if(t[n++]!==e.isVisible)return!0;return!1}_getRequestPriority(e){if(!e.isSelected&&!e.isVisible)return-1;let t=this._getTileDistancePriority(e);return e.isSelected?Qp+t:$p+t}_getTileDistancePriority(e){let{width:t,height:n}=this._viewport||{};if(!this._viewport||!t||!n)return 0;try{let r=this._getTileScreenCorners(e.bbox),i=[t/2,n/2];if(r.length===4){if(this._isPointInPolygon(i,r))return 0;let e=r.reduce((e,t,n)=>{let a=r[(n+1)%r.length];return Math.min(e,this._getPointToSegmentDistanceSquared(i,t,a))},2**53-1);return Math.min(e,em)}}catch{}return em}_getTileScreenCorners(e){return(`west`in e?[[e.west,e.south],[e.east,e.south],[e.east,e.north],[e.west,e.north]]:[[e.left,e.top],[e.right,e.top],[e.right,e.bottom],[e.left,e.bottom]]).map(e=>this._viewport.project(e)).filter(([e,t])=>Number.isFinite(e)&&Number.isFinite(t))}_isPointInPolygon(e,t){let n=!1,[r,i]=e;for(let e=0,a=t.length-1;e<t.length;a=e++){let[o,s]=t[e],[c,l]=t[a];s>i!=l>i&&r<(c-o)*(i-s)/(l-s)+o&&(n=!n)}return n}_getPointToSegmentDistanceSquared(e,t,n){let[r,i]=e,[a,o]=t,[s,c]=n,l=s-a,u=c-o,d=l*l+u*u,f=d?Math.max(0,Math.min(1,((r-a)*l+(i-o)*u)/d)):0,p=a+f*l,m=o+f*u,h=r-p,g=i-m;return h*h+g*g}_pruneRequests(){let{maxRequests:e=0}=this.opts,t=[],n=0;for(let e of this._cache.values())e.isLoading&&(n++,!e.isSelected&&!e.isVisible&&t.push(e));for(;e>0&&n>e&&t.length>0;)t.shift().abort(),n--}_rebuildTree(){let{_cache:e}=this;for(let t of e.values())t.parent=null,t.children&&(t.children.length=0);for(let t of e.values()){let e=this._getNearestAncestor(t);t.parent=e,e?.children&&e.children.push(t)}}_resizeCache(){let{_cache:e,opts:t}=this,n=t.maxCacheSize??(t.maxCacheByteSize===null?Zp*this.selectedTiles.length:1/0),r=t.maxCacheByteSize??1/0;if(e.size>n||this._cacheByteSize>r){for(let[i,a]of e)if(!a.isVisible&&!a.isSelected&&(this._cacheByteSize-=t.maxCacheByteSize===null?0:a.byteLength,e.delete(i),this.opts.onTileUnload?.(a)),e.size<=n&&this._cacheByteSize<=r)break;this._rebuildTree(),this._dirty=!0}this._dirty&&=(this._tiles=Array.from(this._cache.values()).sort((e,t)=>e.zoom-t.zoom),!1)}_getTile(e,t){let n=this.getTileId(e),r=this._cache.get(n),i=!1;return!r&&t?(r=new vp(e),Object.assign(r,this.getTileMetadata(r.index)),Object.assign(r,{id:n,zoom:this.getTileZoom(r.index)}),i=!0,this._cache.set(n,r),this._dirty=!0):r&&r.needsReload&&(i=!0),r&&i&&r.loadData({getData:this.opts.getTileData,getRequestPriority:this._getRequestPriority.bind(this),requestScheduler:this._requestScheduler,onLoad:this.onTileLoad,onError:this.opts.onTileError}),r}_getNearestAncestor(e){let{_minZoom:t=0}=this,n=e.index;for(;this.getTileZoom(n)>t;){n=this.getParentIndex(n);let e=this._getTile(n);if(e)return e}return null}};function im(e){for(let t of e)t.state=0;for(let t of e)t.isSelected&&!om(t)&&sm(t);for(let t of e)t.isVisible=!!(t.state&qp)}function am(e){for(let t of e)t.state=0;for(let t of e)t.isSelected&&om(t);let t=Array.from(e).sort((e,t)=>e.zoom-t.zoom);for(let e of t)if(e.isVisible=!!(e.state&qp),e.children&&(e.isVisible||e.state&Kp))for(let t of e.children)t.state=Kp;else e.isSelected&&sm(e)}function om(e){let t=e;for(;t;){if(t.isLoaded||t.content)return t.state|=qp,!0;t=t.parent}return!1}function sm(e){for(let t of e.children)t.isLoaded||t.content?t.state|=qp:sm(t)}var cm={TilesetClass:rm,data:{type:`data`,value:[]},dataComparator:Op.equal,renderSubLayers:{type:`function`,value:e=>new Xi(e)},getTileData:{type:`function`,optional:!0,value:null},onViewportLoad:{type:`function`,optional:!0,value:null},onTileLoad:{type:`function`,value:e=>{}},onTileUnload:{type:`function`,value:e=>{}},onTileError:{type:`function`,value:e=>console.error(e)},extent:{type:`array`,optional:!0,value:null,compare:!0},tileSize:512,maxZoom:null,minZoom:0,maxCacheSize:null,maxCacheByteSize:null,refinementStrategy:Xp,zRange:null,maxRequests:6,debounceTime:0,zoomOffset:0,visibleMinZoom:null,visibleMaxZoom:null},lm=class extends Ae{initializeState(){this.state={tileset:null,isLoaded:!1}}finalizeState(){this.state?.tileset?.finalize()}get isLoaded(){return!!this.state?.tileset?.selectedTiles?.every(e=>e.isLoaded&&(!e.content||!e.layers||e.layers.every(e=>e.isLoaded)))}shouldUpdateState({changeFlags:e}){return e.somethingChanged}updateState({changeFlags:e}){let{tileset:t}=this.state,n=e.propsOrDataChanged||e.updateTriggersChanged,r=e.dataChanged||e.updateTriggersChanged&&(e.updateTriggersChanged.all||e.updateTriggersChanged.getTileData);t?n&&(t.setOptions(this._getTilesetOptions()),r?t.reloadAll():t.tiles.forEach(e=>{e.layers=null})):(t=new this.props.TilesetClass(this._getTilesetOptions()),this.setState({tileset:t})),this._updateTileset()}_getTilesetOptions(){let{tileSize:e,maxCacheSize:t,maxCacheByteSize:n,refinementStrategy:r,extent:i,maxZoom:a,minZoom:o,maxRequests:s,debounceTime:c,zoomOffset:l,visibleMinZoom:u,visibleMaxZoom:d}=this.props;return{maxCacheSize:t,maxCacheByteSize:n,maxZoom:a,minZoom:o,tileSize:e,refinementStrategy:r,extent:i,maxRequests:s,debounceTime:c,zoomOffset:l,visibleMinZoom:u,visibleMaxZoom:d,getTileData:this.getTileData.bind(this),onTileLoad:this._onTileLoad.bind(this),onTileError:this._onTileError.bind(this),onTileUnload:this._onTileUnload.bind(this)}}_updateTileset(){let e=this.state.tileset,{zRange:t,modelMatrix:n}=this.props,r=e.update(this.context.viewport,{zRange:t,modelMatrix:n}),{isLoaded:i}=e,a=this.state.isLoaded!==i,o=this.state.frameNumber!==r;i&&(a||o)&&this._onViewportLoad(),o&&this.setState({frameNumber:r}),this.state.isLoaded=i}_onViewportLoad(){let{tileset:e}=this.state,{onViewportLoad:t}=this.props;t&&t(e.selectedTiles)}_onTileLoad(e){this.props.onTileLoad(e),e.layers=null,this.setNeedsUpdate()}_onTileError(e,t){this.props.onTileError(e),t.layers=null,this.setNeedsUpdate()}_onTileUnload(e){this.props.onTileUnload(e)}getTileData(e){let{data:t,getTileData:n,fetch:r}=this.props,{signal:i}=e;return e.url=typeof t==`string`||Array.isArray(t)?jp(t,e):null,n?n(e):r&&e.url?r(e.url,{propName:`data`,layer:this,signal:i}):null}renderSubLayers(e){return this.props.renderSubLayers(e)}getSubLayerPropsByTile(e){return null}getPickingInfo(e){let t=e.sourceLayer,n=t.props.tile,r=e.info;return r.picked&&(r.tile=n),r.sourceTile=n,r.sourceTileSubLayer=t,r}_updateAutoHighlight(e){e.sourceTileSubLayer.updateAutoHighlight(e)}renderLayers(){let{visibleMinZoom:e,visibleMaxZoom:t,minZoom:n,extent:r}=this.props,i=this.context.viewport.zoom;if(e!=null&&i<e||t!=null&&i>t||n!=null&&!r&&i<n){for(let e of this.state.tileset.tiles)e.layers=null;return[]}return this.state.tileset.tiles.map(e=>{let t=this.getSubLayerPropsByTile(e);if(e.isLoaded||e.content){if(e.layers)t&&e.layers[0]&&Object.keys(t).some(n=>e.layers[0].props[n]!==t[n])&&(e.layers=e.layers.map(e=>e.clone(t)));else{let n=this.renderSubLayers({...this.props,...this.getSubLayerProps({id:e.id,updateTriggers:this.props.updateTriggers}),data:e.content,_offset:0,tile:e});e.layers=E(n,Boolean).map(n=>n.clone({tile:e,...t}))}}return e.layers})}filterSubLayer({layer:e,cullRect:t}){let{tile:n}=e.props,{modelMatrix:r}=this.props;return this.state.tileset.isTileVisible(n,t,r?new B(r):null)}};lm.defaultProps=cm,lm.layerName=`TileLayer`;var um=`struct TripsUniforms {
  fadeTrail: f32,
  trailLength: f32,
  currentTime: f32,
};

@group(0) @binding(auto)
var<uniform> trips: TripsUniforms;
`,dm=`layout(std140) uniform tripsUniforms {
  bool fadeTrail;
  float trailLength;
  float currentTime;
} trips;
`,fm={name:`trips`,source:um,vs:dm,fs:dm,uniformTypes:{fadeTrail:`f32`,trailLength:`f32`,currentTime:`f32`}};function pm(e,t=e.length,n=!1){let r=new Float32Array(t*2);if(e.length===0)return r;let i=t>e.length,a=n?e.length:Math.max(e.length-1,1);for(let n=0;n<t;n++){let t=i?n%a:Math.min(n,e.length-1),o=i?(t+1)%a:Math.min(t+1,e.length-1);r[n*2]=e[t],r[n*2+1]=e[o]}return r}var mm={"  @location(12) rowIndexes: u32,":`
  @location(13) instanceTimestamps: vec2<f32>,`,"  @location(5) vJointType: f32,":`
  @location(6) vTime: f32,`,"    attributes.instanceColors.a * layer.opacity\n  );":`

  varyings.vTime = mix(
    attributes.instanceTimestamps.x,
    attributes.instanceTimestamps.y,
    varyings.vPathPosition.y / varyings.vPathLength
  );

  if (trips.fadeTrail > 0.5) {
    varyings.vColor.a *=
      1.0 - (trips.currentTime - varyings.vTime) / trips.trailLength;
  }`,"  // DECKGL_FILTER_COLOR":`
  if (
    varyings.vTime > trips.currentTime ||
    (trips.fadeTrail > 0.5 && varyings.vTime < trips.currentTime - trips.trailLength)
  ) {
    discard;
  }`},hm={fadeTrail:!0,trailLength:{type:`number`,value:120,min:0},currentTime:{type:`number`,value:0,min:0},getTimestamps:{type:`accessor`,value:e=>e.timestamps}},gm={"vs:#decl":`in float instanceTimestamps;
in float instanceNextTimestamps;
out float vTime;
`,"vs:#main-end":`vTime = instanceTimestamps + (instanceNextTimestamps - instanceTimestamps) * vPathPosition.y / vPathLength;
`,"fs:#decl":`in float vTime;
`,"fs:DECKGL_FILTER_COLOR":`if(vTime > trips.currentTime || (trips.fadeTrail && (vTime < trips.currentTime - trips.trailLength))) {
  discard;
}
if(trips.fadeTrail) {
  color.a *= 1.0 - (trips.currentTime - vTime) / trips.trailLength;
}
`},_m=class extends $n{getShaders(){let e=super.getShaders();return e.inject=this.context.device.type===`webgpu`?mm:gm,e.modules=[...e.modules,fm],e}initializeState(){super.initializeState(),this.getAttributeManager().addInstanced({...this.context.device.type===`webgpu`?{instanceTimestamps:{size:2,accessor:`getTimestamps`,update:this.calculateWebGPUTimestamps,bufferGroup:`path-instance-data`}}:{timestamps:{size:1,accessor:`getTimestamps`,shaderAttributes:{instanceTimestamps:{vertexOffset:0},instanceNextTimestamps:{vertexOffset:1}}}}})}calculateWebGPUTimestamps(e,{data:t,props:n}){let{pathTesselator:r}=this.state,{instanceCount:i,vertexStarts:a}=r,o=new Float32Array(i*2),{iterable:s,objectInfo:c}=m(t);for(let e of s){c.index++;let t=a[c.index],r=a[c.index+1]??i;if(r<=t)continue;let s=n.getTimestamps?.(e,c)??[];o.set(pm(s,r-t,n._pathType===`loop`),t*2)}e.startIndices=a,e.value=o}draw(e){let{fadeTrail:t,trailLength:n,currentTime:r}=this.props,i={fadeTrail:t,trailLength:n,currentTime:r};this.state.model.shaderInputs.setProps({trips:i}),super.draw(e)}};_m.layerName=`TripsLayer`,_m.defaultProps=hm;var vm=10;function ym(e,t){let n;return n=e==null?t:typeof e==`object`?{...e,coverage:t}:{getHexagon:e,coverage:t},n}var bm={...Pr.defaultProps,highPrecision:`auto`,coverage:{type:`number`,min:0,max:1,value:1},centerHexagon:null,getHexagon:{type:`accessor`,value:e=>e.hexagon},extruded:!0},xm=class e extends Ae{initializeState(){e._checkH3Lib(),this.state={edgeLengthKM:0,resolution:-1}}shouldUpdateState({changeFlags:e}){return this._shouldUseHighPrecision()?e.propsOrDataChanged:e.somethingChanged}updateState({props:e,changeFlags:t}){if(e.highPrecision!==!0&&(t.dataChanged||t.updateTriggersChanged&&t.updateTriggersChanged.getHexagon)){let e=this._calculateH3DataProps();this.setState(e)}this._updateVertices(this.context.viewport)}_calculateH3DataProps(){let e=-1,t=!1,n=!1,{iterable:r,objectInfo:i}=m(this.props.data);for(let a of r){i.index++;let r=this.props.getHexagon(a,i),o=bl(r);if(e<0){if(e=o,!this.props.highPrecision)break}else if(e!==o){n=!0;break}if(yl(r)){t=!0;break}}return{resolution:e,edgeLengthKM:e>=0?El(e,`km`):0,hasMultipleRes:n,hasPentagon:t}}_shouldUseHighPrecision(){if(this.props.highPrecision===`auto`){let{resolution:e,hasPentagon:t,hasMultipleRes:n}=this.state,{viewport:r}=this.context;return!!r?.resolution||n||t||e>=0&&e<=5}return this.props.highPrecision}_updateVertices(e){if(this._shouldUseHighPrecision())return;let{resolution:t,edgeLengthKM:n,centerHex:r}=this.state;if(t<0)return;let i=this.props.centerHexagon||xl(e.latitude,e.longitude,t);if(r===i)return;if(r)try{if(Tl(r,i)*n<vm)return}catch{}let{unitsPerMeter:a}=e.distanceScales,o=Ml(i),[s,c]=Sl(i),[l,u]=e.projectFlat([c,s]);o=o.map(t=>{let n=e.projectFlat(t);return[(n[0]-l)/a[0],(n[1]-u)/a[1]]}),this.setState({centerHex:i,vertices:o})}renderLayers(){return this._shouldUseHighPrecision()?this._renderPolygonLayer():this._renderColumnLayer()}_getForwardProps(){let{elevationScale:e,material:t,coverage:n,extruded:r,wireframe:i,stroked:a,filled:o,lineWidthUnits:s,lineWidthScale:c,lineWidthMinPixels:l,lineWidthMaxPixels:u,getFillColor:d,getElevation:f,getLineColor:p,getLineWidth:m,transitions:h,updateTriggers:g}=this.props;return{elevationScale:e,extruded:r,coverage:n,wireframe:i,stroked:a,filled:o,lineWidthUnits:s,lineWidthScale:c,lineWidthMinPixels:l,lineWidthMaxPixels:u,material:t,getElevation:f,getFillColor:d,getLineColor:p,getLineWidth:m,transitions:h,updateTriggers:{getFillColor:g.getFillColor,getElevation:g.getElevation,getLineColor:g.getLineColor,getLineWidth:g.getLineWidth}}}_renderPolygonLayer(){let{data:e,getHexagon:t,updateTriggers:n,coverage:r}=this.props,i=this.getSubLayerClass(`hexagon-cell-hifi`,Pr),a=this._getForwardProps();return a.updateTriggers.getPolygon=ym(n.getHexagon,r),new i(a,this.getSubLayerProps({id:`hexagon-cell-hifi`,updateTriggers:a.updateTriggers}),{data:e,_normalize:!1,_windingOrder:`CCW`,positionFormat:`XY`,getPolygon:(e,n)=>Nl(Ml(t(e,n),r))})}_renderColumnLayer(){let{data:e,getHexagon:t,updateTriggers:n}=this.props,r=this.getSubLayerClass(`hexagon-cell`,Fn),i=this._getForwardProps();return i.updateTriggers.getPosition=n.getHexagon,new r(i,this.getSubLayerProps({id:`hexagon-cell`,flatShading:!0,updateTriggers:i.updateTriggers}),{data:e,diskResolution:6,radius:1,vertices:this.state.vertices,getPosition:jl.bind(null,t)})}};xm.defaultProps=bm,xm.layerName=`H3HexagonLayer`,xm._checkH3Lib=()=>{};var Sm={getHexagons:{type:`accessor`,value:e=>e.hexagons}},Cm=class extends Qi{initializeState(){xm._checkH3Lib()}updateState({props:e,changeFlags:t}){if(t.dataChanged||t.updateTriggersChanged&&t.updateTriggersChanged.getHexagons){let{data:t,getHexagons:n}=e,r=[],{iterable:i,objectInfo:a}=m(t);for(let e of i){a.index++;let t=wl(n(e,a),!0);for(let n of t){for(let e of n)kl(e);r.push(this.getSubLayerRow({polygon:n},e,a.index))}}this.setState({polygons:r})}}indexToBounds(){let{getElevation:e,getFillColor:t,getLineColor:n,getLineWidth:r}=this.props;return{data:this.state.polygons,getPolygon:e=>e.polygon,getElevation:this.getSubLayerAccessor(e),getFillColor:this.getSubLayerAccessor(t),getLineColor:this.getSubLayerAccessor(n),getLineWidth:this.getSubLayerAccessor(r)}}};Cm.layerName=`H3ClusterLayer`,Cm.defaultProps=Sm;var wm=`layout(std140) uniform meshUniforms {
  bool pickFeatureIds;
} mesh;
`,Tm={name:`mesh`,vs:wm,fs:wm,source:`struct MeshUniforms {
  pickFeatureIds: f32,
};

@group(0) @binding(auto) var<uniform> mesh: MeshUniforms;
`,uniformTypes:{pickFeatureIds:`f32`}},Em=l.source.replace(/fn pbr_setPositionNormalTangentUV\([\s\S]*?\n}\n/,`fn pbr_setPositionNormalTangentUV(position: vec4f, normal: vec4f, tangent: vec4f, uv: vec2f)
{
  fragmentInputs.pbr_vPosition = position.xyz;
  fragmentInputs.pbr_vNormal = normal.xyz;
  fragmentInputs.pbr_vTBN = mat3x3f(
    vec3f(1.0, 0.0, 0.0),
    vec3f(0.0, 1.0, 0.0),
    vec3f(0.0, 0.0, 1.0)
  );
  fragmentInputs.pbr_vUV0 = uv;
  fragmentInputs.pbr_vUV1 = uv;
}
`).replace(/pbrProjection\.camera/g,`project.cameraPosition`),Dm={...l,source:Em},Om=`#version 300 es
#define SHADER_NAME simple-mesh-layer-vs
in vec3 positions;
in vec3 normals;
in vec3 colors;
in vec2 texCoords;
in vec4 uvRegions;
in float rowIndexes;
in vec4 instanceColors;
in vec3 instanceModelMatrixCol0;
in vec3 instanceModelMatrixCol1;
in vec3 instanceModelMatrixCol2;
out vec2 vTexCoord;
out vec3 cameraPosition;
out vec3 normals_commonspace;
out vec4 position_commonspace;
out vec4 vColor;
vec2 applyUVRegion(vec2 uv) {
#ifdef HAS_UV_REGIONS
return fract(uv) * (uvRegions.zw - uvRegions.xy) + uvRegions.xy;
#else
return uv;
#endif
}
void main(void) {
vec2 uv = applyUVRegion(texCoords);
geometry.uv = uv;
if (mesh.pickFeatureIds) {
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
} else {
geometry.pickingColor = picking_getPickingColorFromInstanceID();
}
mat3 instanceModelMatrix = mat3(instanceModelMatrixCol0, instanceModelMatrixCol1, instanceModelMatrixCol2);
vTexCoord = uv;
cameraPosition = project.cameraPosition;
vColor = vec4(colors * instanceColors.rgb, instanceColors.a);
vec3 pos = (instanceModelMatrix * positions) * simpleMesh.sizeScale;
vec3 projectedPosition = project_position(positions);
position_commonspace = vec4(projectedPosition, 1.0);
gl_Position = project_common_position_to_clipspace(position_commonspace);
geometry.position = position_commonspace;
normals_commonspace = project_normal(instanceModelMatrix * normals);
geometry.normal = normals_commonspace;
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
#ifdef MODULE_PBRMATERIAL
pbr_vPosition = geometry.position.xyz;
#ifdef HAS_NORMALS
pbr_vNormal = geometry.normal;
#endif
#ifdef HAS_UV
pbr_vUV0 = uv;
#else
pbr_vUV0 = vec2(0., 0.);
#endif
pbr_vUV1 = vec2(0., 0.);
geometry.uv = pbr_vUV0;
#endif
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,km=`#version 300 es
#define SHADER_NAME simple-mesh-layer-fs
precision highp float;
uniform sampler2D sampler;
in vec2 vTexCoord;
in vec3 cameraPosition;
in vec3 normals_commonspace;
in vec4 position_commonspace;
in vec4 vColor;
out vec4 fragColor;
void main(void) {
#ifdef MODULE_PBRMATERIAL
fragColor = vColor * pbr_filterColor(vec4(0));
geometry.uv = pbr_vUV0;
fragColor.a *= layer.opacity;
#else
geometry.uv = vTexCoord;
vec3 normal;
if (simpleMesh.flatShading) {
normal = normalize(cross(dFdx(position_commonspace.xyz), dFdy(position_commonspace.xyz)));
} else {
normal = normals_commonspace;
}
vec4 color = simpleMesh.hasTexture ? texture(sampler, vTexCoord) : vColor;
vec3 lightColor = lighting_getLightColor(color.rgb, cameraPosition, position_commonspace.xyz, normal);
fragColor = vec4(lightColor, color.a * layer.opacity);
#endif
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,Am=`struct VertexInputs {
  @location(0) positions: vec3<f32>,
#ifdef HAS_NORMALS
  @location(1) normals: vec3<f32>,
#endif
  @location(2) colors: vec4<f32>,
#ifdef HAS_UV
  @location(3) texCoords: vec2<f32>,
#endif
#ifdef HAS_UV_REGIONS
  @location(4) uvRegions: vec4<f32>,
#endif
#ifdef HAS_FEATURE_IDS
  @location(5) rowIndexes: u32,
#endif
  @location(6) instanceColors: vec4<f32>,
  @location(7) instanceModelMatrixCol0: vec3<f32>,
  @location(8) instanceModelMatrixCol1: vec3<f32>,
  @location(9) instanceModelMatrixCol2: vec3<f32>,
};

struct FragmentInputs {
  @builtin(position) position: vec4<f32>,
  @location(0) color: vec4<f32>,
  @location(1) texCoord: vec2<f32>,
  @location(2) pbrPosition: vec3<f32>,
  @location(3) pbrNormal: vec3<f32>,
  @location(4) pickingColor: vec3<f32>,
};

fn applyUVRegion(uv: vec2<f32>, uvRegion: vec4<f32>) -> vec2<f32> {
#ifdef HAS_UV_REGIONS
  // https://github.com/Esri/i3s-spec/blob/master/docs/1.7/geometryUVRegion.cmn.md
  return fract(uv) * (uvRegion.zw - uvRegion.xy) + uvRegion.xy;
#else
  return uv;
#endif
}

@vertex
fn vertexMain(
  inputs: VertexInputs,
  @builtin(instance_index) instanceIndex: u32
) -> FragmentInputs {
  var outputs: FragmentInputs;
  var texCoord = vec2<f32>(0.0);
  var normal = vec3<f32>(0.0, 0.0, 1.0);
  var uvRegion = vec4<f32>(0.0);

#ifdef HAS_UV
  texCoord = inputs.texCoords;
#endif
#ifdef HAS_NORMALS
  normal = inputs.normals;
#endif
#ifdef HAS_UV_REGIONS
  uvRegion = inputs.uvRegions;
#endif

  texCoord = applyUVRegion(texCoord, uvRegion);
  geometry.uv = texCoord;
#ifdef HAS_FEATURE_IDS
  geometry.pickingColor = picking_getPickingColorFromIndex(inputs.rowIndexes);
#else
  geometry.pickingColor = picking_getPickingColorFromIndex(instanceIndex);
#endif

  let instanceModelMatrix = mat3x3<f32>(
    inputs.instanceModelMatrixCol0,
    inputs.instanceModelMatrixCol1,
    inputs.instanceModelMatrixCol2
  );
  let commonPosition = vec4<f32>(project_position_vec3_f32(inputs.positions), 1.0);

  geometry.position = commonPosition;
  geometry.normal = project_normal(instanceModelMatrix * normal);

  outputs.position = project_common_position_to_clipspace(commonPosition);
  outputs.color = vec4<f32>(
    inputs.colors.rgb * inputs.instanceColors.rgb,
    inputs.instanceColors.a
  );
  outputs.texCoord = texCoord;
  outputs.pbrPosition = commonPosition.xyz;
  outputs.pbrNormal = geometry.normal;
  outputs.pickingColor = geometry.pickingColor;
  return outputs;
}

@fragment
fn fragmentMain(inputs: FragmentInputs) -> @location(0) vec4<f32> {
  fragmentGeometry.uv = inputs.texCoord;

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(inputs.pickingColor)) {
      discard;
    }
    return vec4<f32>(inputs.pickingColor, 1.0);
  }

  fragmentInputs.pbr_vPosition = inputs.pbrPosition;
  fragmentInputs.pbr_vUV0 = inputs.texCoord;
  fragmentInputs.pbr_vUV1 = vec2<f32>(0.0);
  fragmentInputs.pbr_vNormal = inputs.pbrNormal;

  var color = inputs.color * pbr_filterColor(vec4<f32>(0.0));
  color.a *= layer.opacity;

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(inputs.pickingColor - highlightedObjectColor))) {
      let highlightAlpha = picking.highlightColor.a;
      let blendedAlpha = highlightAlpha + color.a * (1.0 - highlightAlpha);
      if (blendedAlpha > 0.0) {
        color = vec4<f32>(
          mix(color.rgb, picking.highlightColor.rgb, highlightAlpha / blendedAlpha),
          blendedAlpha
        );
      }
    }
  }

  return deckgl_premultiplied_alpha(color);
}
`;function jm(e){let t=e.positions||e.POSITION,n=t.value.length/t.size;e.COLOR_0||e.colors||(e.colors={size:4,value:new Uint8Array(n*4).fill(255),normalized:!0})}var Mm={pbrMaterial:{type:`object`,value:null},featureIds:{type:`array`,value:null,optional:!0}},Nm=class extends u{getShaders(){let e=super.getShaders();return{...e,vs:Om,fs:km,source:Am,modules:[...e.modules,Dm,Tm]}}initializeState(){let{featureIds:e}=this.props;super.initializeState();let t=this.getAttributeManager();e&&t.add({rowIndexes:{type:`uint32`,size:1,noAlloc:!0,update:this.calculateFeatureIdsPickingIndexes}})}updateState(e){super.updateState(e);let{props:t,oldProps:n}=e;t.pbrMaterial!==n.pbrMaterial&&this.updatePbrMaterialUniforms(t.pbrMaterial)}draw(e){let{featureIds:t}=this.props,{model:n}=this.state;if(!n)return;let r={pickFeatureIds:!!t},i={camera:this.context.viewport.cameraPosition};n.shaderInputs.setProps({pbrProjection:i,mesh:r}),super.draw(e)}getModel(e){let{id:t}=this.props,n=this.parseMaterial(this.props.pbrMaterial,e);this.setState({parsedPBRMaterial:n});let r=this.getShaders();return jm(e.attributes),new d(this.context.device,{...this.getShaders(),id:t,geometry:e,bufferLayout:this.getAttributeManager().getBufferLayouts(),defines:{...r.defines,...n?.defines,HAS_UV_REGIONS:+!!e.attributes.uvRegions,HAS_FEATURE_IDS:+!!this.props.featureIds},parameters:n?.parameters,isInstanced:!0})}updatePbrMaterialUniforms(e){let{model:t}=this.state;if(t){let{mesh:n}=this.props,r=this.parseMaterial(e,n);this.setState({parsedPBRMaterial:r});let{pbr_baseColorSampler:i}=r.bindings,{emptyTexture:a}=this.state,o=i||a,s={...this.context.device.type===`webgpu`?{simpleMeshTexture:o}:{sampler:o},hasTexture:!!i},{camera:c,...l}={...r.bindings,...r.uniforms};t.shaderInputs.setProps({simpleMesh:s,pbrMaterial:l})}}parseMaterial(e,t){let n=!!(e.pbrMetallicRoughness&&e.pbrMetallicRoughness.baseColorTexture);return g(this.context.device,{unlit:n,...e},{NORMAL:t.attributes.normals,TEXCOORD_0:t.attributes.texCoords},{pbrDebug:!1,lights:!0,useTangents:!1})}calculateFeatureIdsPickingIndexes(e){let t=this.props.featureIds;e.value=new Uint32Array(t)}finalizeState(e){super.finalizeState(e),this.state.parsedPBRMaterial?.generatedTextures.forEach(e=>e.destroy()),this.setState({parsedPBRMaterial:null})}};Nm.layerName=`MeshLayer`,Nm.defaultProps=Mm;var Pm=class{item;previous;next;constructor(e,t,n){this.item=e,this.previous=t,this.next=n}},Fm=class{head=null;tail=null;_length=0;get length(){return this._length}add(e){let t=new Pm(e,this.tail,null);return this.tail?(this.tail.next=t,this.tail=t):(this.head=t,this.tail=t),++this._length,t}remove(e){e&&(e.previous&&e.next?(e.previous.next=e.next,e.next.previous=e.previous):e.previous?(e.previous.next=null,this.tail=e.previous):e.next?(e.next.previous=null,this.head=e.next):(this.head=null,this.tail=null),e.next=null,e.previous=null,--this._length)}splice(e,t){e!==t&&(this.remove(t),this._insert(e,t))}_insert(e,t){let n=e.next;e.next=t,this.tail===e?this.tail=t:n.previous=t,t.next=n,t.previous=e,++this._length}},Im=class{_list;_sentinel;_trimTiles;constructor(){this._list=new Fm,this._sentinel=this._list.add(`sentinel`),this._trimTiles=!1}reset(){this._list.splice(this._list.tail,this._sentinel)}touch(e){let t=e._cacheNode;t&&this._list.splice(this._sentinel,t)}add(e,t,n){t._cacheNode||(t._cacheNode=this._list.add(t),n&&n(e,t))}unloadTile(e,t,n){let r=t._cacheNode;r&&(this._list.remove(r),t._cacheNode=null,n&&n(e,t))}unloadTiles(e,t){let n=this._trimTiles;this._trimTiles=!1;let r=this._list,i=e.maximumMemoryUsage*1024*1024,a=this._sentinel,o=r.head;for(;o!==a&&(e.gpuMemoryUsageInBytes>i||n);){let n=o.item;o=o.next,this.unloadTile(e,n,t)}}trim(){this._trimTiles=!0}};function Lm(e,t){xe(e),xe(t);let{rtcCenter:n,gltfUpAxis:r}=t,{computedTransform:i,boundingVolume:{center:a}}=e,o=new B(i);switch(n&&o.translate(n),r){case`Z`:break;case`Y`:let e=new B().rotateX(Math.PI/2);o=o.multiplyRight(e);break;case`X`:let t=new B().rotateY(-Math.PI/2);o=o.multiplyRight(t)}t.isQuantized&&o.translate(t.quantizedVolumeOffset).scale(t.quantizedVolumeScale);let s=new R(a);t.cartesianModelMatrix=o,t.cartesianOrigin=s;let c=H.WGS84.cartesianToCartographic(s,new R);t.cartographicModelMatrix=H.WGS84.eastNorthUpToFixedFrame(s).invert().multiplyRight(o),t.cartographicOrigin=c;let l=zm(t);l&&(t.cartesianModelMatrix=new B(o).multiplyRight(l.matrix),t.cartographicModelMatrix.multiplyRight(l.matrix),l.matrix=B.IDENTITY),t.coordinateSystem||(t.modelMatrix=t.cartographicModelMatrix)}var Rm=1e6**2;function zm(e){let t=e.gltf;if(!t)return null;let n=typeof t.scene==`number`?t.scene:0,r=(t.scenes?.[n])?.nodes?.[0];if(!r?.matrix)return null;let i=r.matrix;return i[12]*i[12]+i[13]*i[13]+i[14]*i[14]<=Rm?null:r}var Bm=new R,Vm=new R,Hm=new be([new ue,new ue,new ue,new ue,new ue,new ue]);function Um(e,t){let{cameraDirection:n,cameraUp:r,height:i}=e,{metersPerUnit:a}=e.distanceScales,o=qm(e,e.center),s=H.WGS84.eastNorthUpToFixedFrame(o),c=e.unprojectPosition(e.cameraPosition),l=H.WGS84.cartographicToCartesian(c,new R),u=new R(s.transformAsVector(new R(n).scale(a))).normalize(),d=new R(s.transformAsVector(new R(r).scale(a))).normalize();Gm(e);let f=e.constructor,{longitude:p,latitude:m,width:h,bearing:g,zoom:_}=e,v=new f({longitude:p,latitude:m,height:i,width:h,bearing:g,zoom:_,pitch:0});return{camera:{position:l,direction:u,up:d},viewport:e,topDownViewport:v,height:i,cullingVolume:Hm,frameNumber:t,sseDenominator:1.15}}function Wm(e,t,n){if(n===0||e.length<=n)return[e,[]];let r=[],{longitude:i,latitude:a}=t.viewport;for(let[t,n]of e.entries()){let[e,o]=n.header.mbs,s=Math.abs(i-e),c=Math.abs(a-o),l=Math.sqrt(c*c+s*s);r.push([t,l])}let o=r.sort((e,t)=>e[1]-t[1]),s=[];for(let t=0;t<n;t++)s.push(e[o[t][0]]);let c=[];for(let t=n;t<o.length;t++)c.push(e[o[t][0]]);return[s,c]}function Gm(e){let t=e.getFrustumPlanes(),n=Km(t.near,e.cameraPosition),r=qm(e,n),i=qm(e,e.cameraPosition,Vm),a=0;Hm.planes[a++].fromPointNormal(r,Bm.copy(r).subtract(i));for(let i in t){if(i===`near`)continue;let o=t[i],s=qm(e,Km(o,n,Vm),Vm);Hm.planes[a++].fromPointNormal(s,Bm.copy(r).subtract(s))}}function Km(e,t,n=new R){let r=e.normal.dot(t);return n.copy(e.normal).scale(e.distance-r).add(t),n}function qm(e,t,n=new R){let r=e.unprojectPosition(t);return H.WGS84.cartographicToCartesian(r,n)}var Jm=6378137,Ym=6378137,Xm=6356752.314245179,Zm=new R;function Qm(e,t){if(e instanceof de){let{halfAxes:n}=e,r=th(n);return Math.log2(Xm/(r+t[2]))}if(e instanceof _e){let{radius:n}=e;return Math.log2(Xm/(n+t[2]))}if(e.width&&e.height){let{width:t,height:n}=e;return(Math.log2(Jm/t)+Math.log2(Ym/n))/2}return 1}function $m(e,t,n){H.WGS84.cartographicToCartesian([e.xmax,e.ymax,e.zmax],Zm);let r=Math.sqrt((Zm[0]-n[0])**2+(Zm[1]-n[1])**2+(Zm[2]-n[2])**2);return Math.log2(Xm/(r+t[2]))}function eh(e,t,n){let[r,i,a,o]=e;return $m({xmin:r,xmax:a,ymin:i,ymax:o,zmin:0,zmax:0},t,n)}function th(e){e.getColumn(0,Zm);let t=e.getColumn(1),n=e.getColumn(2);return Zm.add(t).add(n).len()}function nh(e){return e!=null}var rh=new R,ih=new R,ah=new R,oh=new R,sh=new R,ch=new R,lh=new R,uh=new R;function dh(e,t,n){if(xe(e,`3D Tile: boundingVolume must be defined`),e.box)return ph(e.box,t,n);if(e.region)return hh(e.region);if(e.sphere)return mh(e.sphere,t,n);throw Error(`3D Tile: boundingVolume must contain a sphere, region, or box`)}function fh(e,t){if(e.box)return gh(t);if(e.region){let[t,n,r,i,a,o]=e.region;return[[te(t),te(n),a],[te(r),te(i),o]]}if(e.sphere)return _h(t);throw Error(`Unkown boundingVolume type`)}function ph(e,t,n){let r=new R(e[0],e[1],e[2]);t.transform(r,r);let i=[];if(e.length===10){let t=e.slice(3,6),n=new Se;n.fromArray(e,6);let r=new R([1,0,0]),a=new R([0,1,0]),o=new R([0,0,1]);r.transformByQuaternion(n),r.scale(t[0]),a.transformByQuaternion(n),a.scale(t[1]),o.transformByQuaternion(n),o.scale(t[2]),i=[...r.toArray(),...a.toArray(),...o.toArray()]}else i=[...e.slice(3,6),...e.slice(6,9),...e.slice(9,12)];let a=t.transformAsVector(i.slice(0,3)),o=t.transformAsVector(i.slice(3,6)),s=t.transformAsVector(i.slice(6,9)),c=new Ce([a[0],a[1],a[2],o[0],o[1],o[2],s[0],s[1],s[2]]);return nh(n)?(n.center=r,n.halfAxes=c,n):new de(r,c)}function mh(e,t,n){let r=new R(e[0],e[1],e[2]);t.transform(r,r);let i=t.getScale(ih),a=Math.max(Math.max(i[0],i[1]),i[2]),o=e[3]*a;return nh(n)?(n.center=r,n.radius=o,n):new _e(r,o)}function hh(e){let[t,n,r,i,a,o]=e,s=H.WGS84.cartographicToCartesian([te(t),te(i),a],ah),c=H.WGS84.cartographicToCartesian([te(r),te(n),o],oh),l=new R().addVectors(s,c).multiplyByScalar(.5);return H.WGS84.cartesianToCartographic(l,sh),H.WGS84.cartographicToCartesian([te(r),sh[1],sh[2]],ch),H.WGS84.cartographicToCartesian([sh[0],te(i),sh[2]],lh),H.WGS84.cartographicToCartesian([sh[0],sh[1],o],uh),ph([...l,...ch.subtract(l),...lh.subtract(l),...uh.subtract(l)],new B)}function gh(e){let t=vh(),{halfAxes:n}=e,r=new R(n.getColumn(0)),i=new R(n.getColumn(1)),a=new R(n.getColumn(2));for(let n=0;n<2;n++){for(let n=0;n<2;n++){for(let n=0;n<2;n++)rh.copy(e.center),rh.add(r),rh.add(i),rh.add(a),yh(t,rh),a.negate();i.negate()}r.negate()}return t}function _h(e){let t=vh(),{center:n,radius:r}=e,i=H.WGS84.scaleToGeodeticSurface(n,rh),a;a=i?H.WGS84.geodeticSurfaceNormal(i):new R(0,0,1);let o=new R(a[2],-a[1],0);o.len()>0?o.normalize():o=new R(0,1,0);let s=o.clone().cross(a);for(let e of[o,s,a]){ih.copy(e).scale(r);for(let e=0;e<2;e++)rh.copy(n),rh.add(ih),yh(t,rh),ih.negate()}return t}function vh(){return[[1/0,1/0,1/0],[-1/0,-1/0,-1/0]]}function yh(e,t){H.WGS84.cartesianToCartographic(t,rh),e[0][0]=Math.min(e[0][0],rh[0]),e[0][1]=Math.min(e[0][1],rh[1]),e[0][2]=Math.min(e[0][2],rh[2]),e[1][0]=Math.max(e[1][0],rh[0]),e[1][1]=Math.max(e[1][1],rh[1]),e[1][2]=Math.max(e[1][2],rh[2])}new R,new R,new B,new R,new R,new R;function bh(e,t){let n=e*t;return 1-Math.exp(-(n*n))}function xh(e,t){if(e.dynamicScreenSpaceError&&e.dynamicScreenSpaceErrorComputedDensity){let n=e.dynamicScreenSpaceErrorComputedDensity,r=e.dynamicScreenSpaceErrorFactor;return bh(t,n)*r}return 0}function Sh(e,t,n){let r=e.tileset,i=e.parent&&e.parent.lodMetricValue||e.lodMetricValue,a=n?i:e.lodMetricValue;if(a===0)return 0;let o=Math.max(e._distanceToCamera,1e-7),{height:s,sseDenominator:c}=t,{viewDistanceScale:l}=r.options,u=a*s*(l||1)/(o*c);return u-=xh(r,o),u}var Ch=new R,wh=new R,Th=new R,Eh=new R,Dh=new R,Oh=new B,kh=new B;function Ah(e,t){if(e.lodMetricValue===0||isNaN(e.lodMetricValue))return`DIG`;let n=2*jh(e,t);return n<2?`OUT`:!e.header.children||n<=e.lodMetricValue?`DRAW`:e.header.children?`DIG`:`OUT`}function jh(e,t){let{topDownViewport:n}=t,r=e.header.mbs[1],i=e.header.mbs[0],a=e.header.mbs[2],o=e.header.mbs[3],s=[...e.boundingVolume.center],c=n.unprojectPosition(n.cameraPosition);H.WGS84.cartographicToCartesian(c,Ch),wh.copy(Ch).subtract(s).normalize(),H.WGS84.eastNorthUpToFixedFrame(s,Oh),kh.copy(Oh).invert(),Th.copy(Ch).transform(kh);let l=Math.sqrt(Th[0]*Th[0]+Th[1]*Th[1]),u=l*l/Th[2];Eh.copy([Th[0],Th[1],u]);let d=Eh.transform(Oh).subtract(s).normalize(),f=wh.cross(d).normalize().scale(o).add(s),p=H.WGS84.cartesianToCartographic(f),m=n.project([i,r,a]),h=n.project(p);return Dh.copy(m).subtract(h).magnitude()}function Mh(e){return{assetGltfUpAxis:e.asset&&e.asset.gltfUpAxis||`Y`}}var Nh=class{_map=new Map;_array;_length;constructor(e=0){this._array=Array(e),this._length=e}get length(){return this._length}set length(e){this._length=e,e>this._array.length&&(this._array.length=e)}get values(){return this._array}get(e){return xe(e<this._array.length),this._array[e]}set(e,t){xe(e>=0),e>=this.length&&(this.length=e+1),this._map.has(this._array[e])&&this._map.delete(this._array[e]),this._array[e]=t,this._map.set(t,e)}delete(e){let t=this._map.get(e);t>=0&&(this._array.splice(t,1),this._map.delete(e),this.length--)}peek(){return this._array[this._length-1]}push(e){if(!this._map.has(e)){let t=this.length++;this._array[t]=e,this._map.set(e,t)}}pop(){let e=this._array[--this.length];return this._map.delete(e),e}reserve(e){xe(e>=0),e>this._array.length&&(this._array.length=e)}resize(e){xe(e>=0),this.length=e}trim(e){e??=this.length,this._array.length=e}reset(){this._array=[],this._map=new Map,this._length=0}find(e){return this._map.has(e)}},Ph={loadSiblings:!1,skipLevelOfDetail:!1,updateTransforms:!0,onTraversalEnd:()=>{},viewportTraversersMap:{},basePath:``},Fh=class{options;root=null;selectedTiles={};requestedTiles={};emptyTiles={};lastUpdate=new Date().getTime();updateDebounceTime=1e3;_traversalStack=new Nh;_emptyTraversalStack=new Nh;_frameNumber=null;traversalFinished(e){return!0}constructor(e){this.options={...Ph,...e}}traverse(e,t,n){this.root=e,this.options={...this.options,...n},this.reset(),this.updateTile(e,t),this._frameNumber=t.frameNumber,this.executeTraversal(e,t)}reset(){this.requestedTiles={},this.selectedTiles={},this.emptyTiles={},this._traversalStack.reset(),this._emptyTraversalStack.reset()}executeTraversal(e,t){let n=this._traversalStack;for(e._selectionDepth=1,n.push(e);n.length>0;){let e=n.pop(),r=!1;this.canTraverse(e,t)&&(this.updateChildTiles(e,t),r=this.updateAndPushChildren(e,t,n,e.hasRenderContent?e._selectionDepth+1:e._selectionDepth));let i=e.parent,a=!(i&&!i._shouldRefine),o=!r;e.hasRenderContent?e.refine===ge.ADD?(this.loadTile(e,t),this.selectTile(e,t)):e.refine===ge.REPLACE&&(this.loadTile(e,t),o&&this.selectTile(e,t)):(this.emptyTiles[e.id]=e,this.loadTile(e,t),o&&this.selectTile(e,t)),this.touchTile(e,t),e._shouldRefine=r&&a}let r=new Date().getTime();(this.traversalFinished(t)||r-this.lastUpdate>this.updateDebounceTime)&&(this.lastUpdate=r,this.options.onTraversalEnd(t))}updateChildTiles(e,t){let n=e.children;for(let e of n)this.updateTile(e,t)}updateAndPushChildren(e,t,n,r){let{loadSiblings:i,skipLevelOfDetail:a}=this.options,o=e.children;o.sort(this.compareDistanceToCamera.bind(this));let s=e.refine===ge.REPLACE&&e.hasRenderContent&&!a,c=!1,l=!0;for(let e of o)if(e._selectionDepth=r,e.isVisibleAndInRequestVolume?(n.find(e)&&n.delete(e),n.push(e),c=!0):(s||i)&&(this.loadTile(e,t),this.touchTile(e,t)),s){let n;if(n=e._inRequestVolume?e.hasRenderContent?e.contentAvailable:this.executeEmptyTraversal(e,t):!1,l&&=n,!l)return!1}return c||(l=!1),l}updateTile(e,t){this.updateTileVisibility(e,t)}selectTile(e,t){this.shouldSelectTile(e)&&(e._selectedFrame=t.frameNumber,this.selectedTiles[e.id]=e)}loadTile(e,t){this.shouldLoadTile(e)&&(e._requestedFrame=t.frameNumber,e._priority=e._getPriority(),this.requestedTiles[e.id]=e)}touchTile(e,t){e.tileset._cache.touch(e),e._touchedFrame=t.frameNumber}canTraverse(e,t){return e.hasChildren?e.hasTilesetContent?!e.contentExpired:this.shouldRefine(e,t):!1}shouldLoadTile(e){return e.hasUnloadedContent||e.contentExpired}shouldSelectTile(e){return e.contentAvailable&&!this.options.skipLevelOfDetail}shouldRefine(e,t,n=!1){let r=e._screenSpaceError;return n&&(r=e.getScreenSpaceError(t,!0)),r>e.tileset.memoryAdjustedScreenSpaceError}updateTileVisibility(e,t){let n=[];if(this.options.viewportTraversersMap)for(let e in this.options.viewportTraversersMap)this.options.viewportTraversersMap[e]===t.viewport.id&&n.push(e);else n.push(t.viewport.id);e.updateVisibility(t,n)}compareDistanceToCamera(e,t){return e._distanceToCamera-t._distanceToCamera}anyChildrenVisible(e,t){let n=!1;for(let r of e.children)r.updateVisibility(t),n||=r.isVisibleAndInRequestVolume;return n}executeEmptyTraversal(e,t){let n=!0,r=this._emptyTraversalStack;for(r.push(e);r.length>0;){let e=r.pop(),i=!e.hasRenderContent&&this.canTraverse(e,t),a=!e.hasRenderContent&&e.children.length===0;if(i||e.contentAvailable||a||(n=!1),this.updateTile(e,t),e.isVisibleAndInRequestVolume||(this.loadTile(e,t),this.touchTile(e,t)),i){let t=e.children;for(let e of t)r.push(e)}}return e.hasEmptyContent||n}},Ih=new R;function Lh(e){return e!=null}var Rh=class{tileset;header;id;url;parent;refine;type;contentUrl;lodMetricType=`geometricError`;lodMetricValue=0;boundingVolume=null;content=null;contentState=V.UNLOADED;gpuMemoryUsageInBytes=0;children=[];depth=0;viewportIds=[];transform=new B;extensions=null;implicitTiling=null;userData={};computedTransform;hasEmptyContent=!1;hasTilesetContent=!1;traverser=new Fh({});_cacheNode=null;_frameNumber=null;_expireDate=null;_expiredContent=null;_boundingBox=void 0;_distanceToCamera=0;_screenSpaceError=0;_visibilityPlaneMask;_visible=void 0;_contentBoundingVolume;_viewerRequestVolume;_initialTransform=new B;_priority=0;_selectedFrame=0;_requestedFrame=0;_selectionDepth=0;_touchedFrame=0;_centerZDepth=0;_shouldRefine=!1;_stackLength=0;_visitedFrame=0;_inRequestVolume=!1;_lodJudge=null;tileDrawn=!0;constructor(e,t,n,r=``){this.header=t,this.tileset=e,this.id=r||t.id,this.url=t.url,this.parent=n,this.refine=this._getRefine(t.refine),this.type=t.type,this.contentUrl=t.contentUrl,this._initializeLodMetric(t),this._initializeTransforms(t),this._initializeBoundingVolumes(t),this._initializeContent(t),this._initializeRenderingState(t),Object.seal(this)}destroy(){this.header=null}isDestroyed(){return this.header===null}get selected(){return this._selectedFrame===this.tileset._frameNumber}get isVisible(){return this._visible}get isVisibleAndInRequestVolume(){return this._visible&&this._inRequestVolume}get hasRenderContent(){return!this.hasEmptyContent&&!this.hasTilesetContent}get hasChildren(){return this.children.length>0||this.header.children&&this.header.children.length>0}get contentReady(){return this.contentState===V.READY||this.hasEmptyContent}get contentAvailable(){return!!(this.contentReady&&this.hasRenderContent||this._expiredContent&&!this.contentFailed)}get hasUnloadedContent(){return this.hasRenderContent&&this.contentUnloaded}get contentUnloaded(){return this.contentState===V.UNLOADED}get contentExpired(){return this.contentState===V.EXPIRED}get contentFailed(){return this.contentState===V.FAILED}get distanceToCamera(){return this._distanceToCamera}get screenSpaceError(){return this._screenSpaceError}get boundingBox(){return this._boundingBox||=fh(this.header.boundingVolume,this.boundingVolume),this._boundingBox}getScreenSpaceError(e,t){switch(this.tileset.type){case fe.I3S:return jh(this,e);case fe.TILES3D:return Sh(this,e,t);default:throw Error(`Unsupported tileset type`)}}unselect(){this._selectedFrame=0}_getGpuMemoryUsageInBytes(){return this.content.gpuMemoryUsageInBytes||this.content.byteLength||0}_getPriority(){let e=this.tileset._traverser,{skipLevelOfDetail:t}=e.options,n=this.refine===ge.ADD||t;if(n&&!this.isVisible&&this._visible!==void 0||this.tileset._frameNumber-this._touchedFrame>=1||this.contentState===V.UNLOADED)return-1;let r=this.parent,i=r&&(!n||this._screenSpaceError===0||r.hasTilesetContent)?r._screenSpaceError:this._screenSpaceError,a=e.root?e.root._screenSpaceError:0;return Math.max(a-i,0)}async loadContent(){if(this.hasEmptyContent)return!1;if(this.content)return!0;this.contentExpired&&(this._expireDate=null),this.contentState=V.LOADING;let e=await this.tileset._requestScheduler.scheduleRequest(this.id,this._getPriority.bind(this));if(!e)return this.contentState=V.UNLOADED,!1;try{let e=this.tileset.getTileUrl(this.contentUrl),t=this.tileset.loader,n=this.tileset.loadOptions[t.id]||{},r={...this.tileset.loadOptions,[t.id]:{...n,isTileset:this.type===`json`,...this._getLoaderSpecificOptions(t.id)}};return this.content=await oe(e,t,r),this.tileset.options.contentLoader&&await this.tileset.options.contentLoader(this),this._isTileset()&&this.tileset._initializeTileHeaders(this.content,this),this.contentState=V.READY,this._onContentLoaded(),!0}catch(e){throw this.contentState=V.FAILED,e}finally{e.done()}}unloadContent(){return this.content&&this.content.destroy&&this.content.destroy(),this.content=null,this.header.content&&this.header.content.destroy&&this.header.content.destroy(),this.header.content=null,this.contentState=V.UNLOADED,this.tileDrawn=!0,!0}updateVisibility(e,t){if(this._frameNumber===e.frameNumber)return;let n=this.parent,r=n?n._visibilityPlaneMask:be.MASK_INDETERMINATE;if(this.tileset._traverser.options.updateTransforms){let e=n?n.computedTransform:this.tileset.modelMatrix;this._updateTransform(e)}this._distanceToCamera=this.distanceToTile(e),this._screenSpaceError=this.getScreenSpaceError(e,!1),this._visibilityPlaneMask=this.visibility(e,r),this._visible=this._visibilityPlaneMask!==be.MASK_OUTSIDE,this._inRequestVolume=this.insideViewerRequestVolume(e),this._frameNumber=e.frameNumber,this.viewportIds=t}visibility(e,t){let{cullingVolume:n}=e,{boundingVolume:r}=this;return n.computeVisibilityWithPlaneMask(r,t)}contentVisibility(){return!0}distanceToTile(e){let t=this.boundingVolume;return Math.sqrt(Math.max(t.distanceSquaredTo(e.camera.position),0))}cameraSpaceZDepth({camera:e}){let t=this.boundingVolume;return Ih.subVectors(t.center,e.position),e.direction.dot(Ih)}insideViewerRequestVolume(e){let t=this._viewerRequestVolume;return!t||t.distanceSquaredTo(e.camera.position)<=0}updateExpiration(){if(Lh(this._expireDate)&&this.contentReady&&!this.hasEmptyContent){let e=Date.now();Date.lessThan(this._expireDate,e)&&(this.contentState=V.EXPIRED,this._expiredContent=this.content)}}get extras(){return this.header.extras}_initializeLodMetric(e){`lodMetricType`in e?this.lodMetricType=e.lodMetricType:(this.lodMetricType=this.parent&&this.parent.lodMetricType||this.tileset.lodMetricType,console.warn(`3D Tile: Required prop lodMetricType is undefined. Using parent lodMetricType`)),`lodMetricValue`in e?this.lodMetricValue=e.lodMetricValue:(this.lodMetricValue=this.parent&&this.parent.lodMetricValue||this.tileset.lodMetricValue,console.warn(`3D Tile: Required prop lodMetricValue is undefined. Using parent lodMetricValue`))}_initializeTransforms(e){this.transform=e.transform?new B(e.transform):new B;let t=this.parent,n=this.tileset,r=t&&t.computedTransform?t.computedTransform.clone():n.modelMatrix.clone();this.computedTransform=new B(r).multiplyRight(this.transform);let i=t&&t._initialTransform?t._initialTransform.clone():new B;this._initialTransform=new B(i).multiplyRight(this.transform)}_initializeBoundingVolumes(e){this._contentBoundingVolume=null,this._viewerRequestVolume=null,this._updateBoundingVolume(e)}_initializeContent(e){this.content={_tileset:this.tileset,_tile:this},this.hasEmptyContent=!0,this.contentState=V.UNLOADED,this.hasTilesetContent=!1,e.contentUrl&&(this.content=null,this.hasEmptyContent=!1)}_initializeRenderingState(e){this.depth=e.level||(this.parent?this.parent.depth+1:0),this._shouldRefine=!1,this._distanceToCamera=0,this._centerZDepth=0,this._screenSpaceError=0,this._visibilityPlaneMask=be.MASK_INDETERMINATE,this._visible=void 0,this._inRequestVolume=!1,this._stackLength=0,this._selectionDepth=0,this._frameNumber=0,this._touchedFrame=0,this._visitedFrame=0,this._selectedFrame=0,this._requestedFrame=0,this._priority=0}_getRefine(e){return e||this.parent&&this.parent.refine||ge.REPLACE}_isTileset(){return this.contentUrl.indexOf(`.json`)!==-1}_onContentLoaded(){switch(this.content&&this.content.type){case`vctr`:case`geom`:this.tileset._traverser.disableSkipLevelOfDetail=!0}this._isTileset()?this.hasTilesetContent=!0:this.gpuMemoryUsageInBytes=this._getGpuMemoryUsageInBytes()}_updateBoundingVolume(e){this.boundingVolume=dh(e.boundingVolume,this.computedTransform,this.boundingVolume);let t=e.content;t&&(t.boundingVolume&&(this._contentBoundingVolume=dh(t.boundingVolume,this.computedTransform,this._contentBoundingVolume)),e.viewerRequestVolume&&(this._viewerRequestVolume=dh(e.viewerRequestVolume,this.computedTransform,this._viewerRequestVolume)))}_updateTransform(e=new B){let t=e.clone().multiplyRight(this.transform);t.equals(this.computedTransform)||(this.computedTransform=t,this._updateBoundingVolume(this.header))}_getLoaderSpecificOptions(e){switch(e){case`i3s`:return{...this.tileset.options.i3s,_tileOptions:{attributeUrls:this.header.attributeUrls,textureUrl:this.header.textureUrl,textureFormat:this.header.textureFormat,textureLoaderOptions:this.header.textureLoaderOptions,materialDefinition:this.header.materialDefinition,isDracoGeometry:this.header.isDracoGeometry,mbs:this.header.mbs},_tilesetOptions:{store:this.tileset.tileset.store,attributeStorageInfo:this.tileset.tileset.attributeStorageInfo,fields:this.tileset.tileset.fields},isTileHeader:!1};default:return Mh(this.tileset.tileset)}}},zh=class extends Fh{compareDistanceToCamera(e,t){return t._distanceToCamera===0&&e._distanceToCamera===0?t._centerZDepth-e._centerZDepth:t._distanceToCamera-e._distanceToCamera}updateTileVisibility(e,t){if(super.updateTileVisibility(e,t),!e.isVisibleAndInRequestVolume)return;let n=e.children.length>0;if(e.hasTilesetContent&&n){let n=e.children[0];this.updateTileVisibility(n,t),e._visible=n._visible;return}if(this.meetsScreenSpaceErrorEarly(e,t)){e._visible=!1;return}let r=e.refine===ge.REPLACE,i=e._optimChildrenWithinParent===ve.USE_OPTIMIZATION;r&&i&&n&&!this.anyChildrenVisible(e,t)&&(e._visible=!1)}meetsScreenSpaceErrorEarly(e,t){let{parent:n}=e;return!n||n.hasTilesetContent||n.refine!==ge.ADD?!1:!this.shouldRefine(e,t,!0)}},Bh=class{frameNumberMap=new Map;register(e,t){let n=this.frameNumberMap.get(e)||new Map,r=n.get(t)||0;n.set(t,r+1),this.frameNumberMap.set(e,n)}deregister(e,t){let n=this.frameNumberMap.get(e);if(!n)return;let r=n.get(t)||1;n.set(t,r-1)}isZero(e,t){return(this.frameNumberMap.get(e)?.get(t)||0)===0}},Vh={REQUESTED:`REQUESTED`,COMPLETED:`COMPLETED`,ERROR:`ERROR`},Hh=class{_statusMap;pendingTilesRegister=new Bh;constructor(){this._statusMap={}}add(e,t,n,r){if(!this._statusMap[t]){let{frameNumber:i,viewport:{id:a}}=r;this._statusMap[t]={request:e,callback:n,key:t,frameState:r,status:Vh.REQUESTED},this.pendingTilesRegister.register(a,i),e().then(e=>{this._statusMap[t].status=Vh.COMPLETED;let{frameNumber:n,viewport:{id:i}}=this._statusMap[t].frameState;this.pendingTilesRegister.deregister(i,n),this._statusMap[t].callback(e,r)}).catch(e=>{this._statusMap[t].status=Vh.ERROR;let{frameNumber:r,viewport:{id:i}}=this._statusMap[t].frameState;this.pendingTilesRegister.deregister(i,r),n(e)})}}update(e,t){if(this._statusMap[e]){let{frameNumber:n,viewport:{id:r}}=this._statusMap[e].frameState;this.pendingTilesRegister.deregister(r,n);let{frameNumber:i,viewport:{id:a}}=t;this.pendingTilesRegister.register(a,i),this._statusMap[e].frameState=t}}find(e){return this._statusMap[e]}hasPendingTiles(e,t){return!this.pendingTilesRegister.isZero(e,t)}},Uh=class extends Fh{_tileManager;constructor(e){super(e),this._tileManager=new Hh}traversalFinished(e){return!this._tileManager.hasPendingTiles(e.viewport.id,this._frameNumber||0)}shouldRefine(e,t){return e._lodJudge=Ah(e,t),e._lodJudge===`DIG`}updateChildTiles(e,t){let n=e.header.children||[],r=e.children,i=e.tileset;for(let a of n){let n=`${a.id}-${t.viewport.id}`,o=r&&r.find(e=>e.id===n);if(o)o&&this.updateTile(o,t);else{let r=()=>this._loadTile(a.id,i);this._tileManager.find(n)?this._tileManager.update(n,t):(i.tileset.nodePages&&(r=()=>i.tileset.nodePagesTile.formTileFromNodePages(a.id)),this._tileManager.add(r,n,t=>this._onTileLoad(t,e,n),t))}}return!1}async _loadTile(e,t){let{loader:n}=t,r=t.getTileUrl(`${t.url}/nodes/${e}`),i={...t.loadOptions,i3s:{...t.loadOptions.i3s,isTileHeader:!0}};return await oe(r,n,i)}_onTileLoad(e,t,n){let r=new Rh(t.tileset,e,t,n);t.children.push(r);let i=this._tileManager.find(r.id).frameState;this.updateTile(r,i),this._frameNumber===i.frameNumber&&(this.traversalFinished(i)||new Date().getTime()-this.lastUpdate>this.updateDebounceTime)&&this.executeTraversal(r,i)}},Wh={description:``,ellipsoid:H.WGS84,modelMatrix:new B,throttleRequests:!0,maxRequests:64,maximumMemoryUsage:32,memoryCacheOverflow:1,maximumTilesSelected:0,debounceTime:0,onTileLoad:()=>{},onTileUnload:()=>{},onTileError:()=>{},onTraversalComplete:e=>e,onUpdate:()=>{},contentLoader:void 0,viewDistanceScale:1,maximumScreenSpaceError:8,memoryAdjustedScreenSpaceError:!1,loadTiles:!0,updateTransforms:!0,viewportTraversersMap:null,loadOptions:{fetch:{}},attributions:[],basePath:``,i3s:{}},Gh=`Tiles In Tileset(s)`,Kh=`Tiles In Memory`,qh=`Tiles In View`,Jh=`Tiles To Render`,Yh=`Tiles Loaded`,Xh=`Tiles Loading`,Zh=`Tiles Unloaded`,Qh=`Failed Tile Loads`,$h=`Points/Vertices`,eg=`Tile Memory Use`,tg=`Maximum Screen Space Error`,ng=class{options;loadOptions;type;tileset;loader;url;basePath;modelMatrix;ellipsoid;lodMetricType;lodMetricValue;refine;root=null;roots={};asset={};description=``;properties;extras=null;attributions={};credits={};stats;contentFormats={draco:!1,meshopt:!1,dds:!1,ktx2:!1};cartographicCenter=null;cartesianCenter=null;zoom=1;boundingVolume=null;dynamicScreenSpaceErrorComputedDensity=0;maximumMemoryUsage=32;gpuMemoryUsageInBytes=0;memoryAdjustedScreenSpaceError=0;_cacheBytes=0;_cacheOverflowBytes=0;_frameNumber=0;_queryParams={};_extensionsUsed=[];_tiles={};_pendingCount=0;selectedTiles=[];traverseCounter=0;geometricError=0;lastUpdatedVieports=null;_requestedTiles=[];_emptyTiles=[];frameStateData={};_traverser;_cache=new Im;_requestScheduler;_heldTiles=new Set;updatePromise=null;tilesetInitializationPromise;constructor(e,t){this.options={...Wh,...t},this.tileset=e,this.loader=e.loader,this.type=e.type,this.url=e.url,this.basePath=e.basePath||ne(this.url),this.modelMatrix=this.options.modelMatrix,this.ellipsoid=this.options.ellipsoid,this.lodMetricType=e.lodMetricType,this.lodMetricValue=e.lodMetricValue,this.refine=e.root.refine,this.loadOptions=this.options.loadOptions||{},this._traverser=this._initializeTraverser(),this._requestScheduler=new re({throttleRequests:this.options.throttleRequests,maxRequests:this.options.maxRequests}),this.memoryAdjustedScreenSpaceError=this.options.maximumScreenSpaceError,this._cacheBytes=this.options.maximumMemoryUsage*1024*1024,this._cacheOverflowBytes=this.options.memoryCacheOverflow*1024*1024,this.stats=new z({id:this.url}),this._initializeStats(),this.tilesetInitializationPromise=this._initializeTileSet(e)}destroy(){this._destroy()}isLoaded(){return this._pendingCount===0&&this._frameNumber!==0&&this._requestedTiles.length===0}get tiles(){return Object.values(this._tiles)}get frameNumber(){return this._frameNumber}get queryParams(){return new URLSearchParams(this._queryParams).toString()}setProps(e){this.options={...this.options,...e}}getTileUrl(e){if(e.startsWith(`data:`))return e;let t=e;return this.queryParams.length&&(t=`${e}${e.includes(`?`)?`&`:`?`}${this.queryParams}`),t}hasExtension(e){return this._extensionsUsed.indexOf(e)>-1}update(e=null){this.tilesetInitializationPromise.then(()=>{!e&&this.lastUpdatedVieports?e=this.lastUpdatedVieports:this.lastUpdatedVieports=e,e&&this.doUpdate(e)})}async selectTiles(e=null){return await this.tilesetInitializationPromise,e&&(this.lastUpdatedVieports=e),this.updatePromise||=new Promise(e=>{setTimeout(()=>{this.lastUpdatedVieports&&this.doUpdate(this.lastUpdatedVieports),e(this._frameNumber),this.updatePromise=null},this.options.debounceTime)}),this.updatePromise}adjustScreenSpaceError(){this.gpuMemoryUsageInBytes<this._cacheBytes?this.memoryAdjustedScreenSpaceError=Math.max(this.memoryAdjustedScreenSpaceError/1.02,this.options.maximumScreenSpaceError):this.gpuMemoryUsageInBytes>this._cacheBytes+this._cacheOverflowBytes&&(this.memoryAdjustedScreenSpaceError*=1.02)}doUpdate(e){if(`loadTiles`in this.options&&!this.options.loadTiles||this.traverseCounter>0)return;let t=e instanceof Array?e:[e];this._cache.reset(),this._frameNumber++,this.traverseCounter=t.length;let n=[];for(let e of t){let t=e.id;this._needTraverse(t)?n.push(t):this.traverseCounter--}for(let e of t){let t=e.id;if(this.roots[t]||(this.roots[t]=this._initializeTileHeaders(this.tileset,null)),!n.includes(t))continue;let r=Um(e,this._frameNumber);this._traverser.traverse(this.roots[t],r,this.options)}}_needTraverse(e){let t=e;return this.options.viewportTraversersMap&&(t=this.options.viewportTraversersMap[e]),t===e}_onTraversalEnd(e){let t=e.viewport.id;this.frameStateData[t]||(this.frameStateData[t]={selectedTiles:[],_requestedTiles:[],_emptyTiles:[]});let n=this.frameStateData[t],[r,i]=Wm(Object.values(this._traverser.selectedTiles),e,this.options.maximumTilesSelected);n.selectedTiles=r;for(let e of i)e.unselect();n._requestedTiles=Object.values(this._traverser.requestedTiles),n._emptyTiles=Object.values(this._traverser.emptyTiles),this.traverseCounter--,this.traverseCounter>0||this._updateTiles()}_updateTiles(){let e=this.selectedTiles;this.selectedTiles=[],this._requestedTiles=[],this._emptyTiles=[];for(let e in this.frameStateData){let t=this.frameStateData[e];this.selectedTiles=this.selectedTiles.concat(t.selectedTiles),this._requestedTiles=this._requestedTiles.concat(t._requestedTiles),this._emptyTiles=this._emptyTiles.concat(t._emptyTiles)}this.selectedTiles=this.options.onTraversalComplete(this.selectedTiles);let t=new Set(this.selectedTiles.map(e=>e.id)),n=this.selectedTiles.some(e=>!e.tileDrawn),r=0;if(n){for(let e of t)this._heldTiles.add(e);for(let e of this._heldTiles){if(t.has(e))continue;let n=this._tiles[e];n&&n.contentAvailable?(n._selectedFrame=this._frameNumber,this.selectedTiles.push(n),r++):this._heldTiles.delete(e)}}else this._heldTiles=t;r>0&&setTimeout(()=>{this.selectTiles()},0);for(let e of this.selectedTiles)this._tiles[e.id]=e;this._loadTiles(),this._unloadTiles(),this._updateStats(),this._tilesChanged(e,this.selectedTiles)&&this.options.onUpdate()}_tilesChanged(e,t){if(e.length!==t.length)return!0;let n=new Set(e.map(e=>e.id)),r=new Set(t.map(e=>e.id)),i=e.filter(e=>!r.has(e.id)).length>0;return i||=t.filter(e=>!n.has(e.id)).length>0,i}_loadTiles(){this._requestedTiles.sort((e,t)=>e._priority-t._priority);for(let e of this._requestedTiles)e.contentUnloaded&&this._loadTile(e)}_unloadTiles(){this._cache.unloadTiles(this,(e,t)=>e._unloadTile(t))}_updateStats(){let e=0,t=0;for(let n of this.selectedTiles)n.contentAvailable&&n.content&&(e++,n.content.pointCount?t+=n.content.pointCount:t+=n.content.vertexCount);this.stats.get(qh).count=this.selectedTiles.length,this.stats.get(Jh).count=e,this.stats.get($h).count=t,this.stats.get(tg).count=this.memoryAdjustedScreenSpaceError}async _initializeTileSet(e){this.type===fe.I3S&&(this.calculateViewPropsI3S(),e.root=await e.root),this.root=this._initializeTileHeaders(e,null),this.type===fe.TILES3D&&(this._initializeTiles3DTileset(e),this.calculateViewPropsTiles3D()),this.type===fe.I3S&&this._initializeI3STileset()}calculateViewPropsI3S(){let e=this.tileset.fullExtent;if(e){let{xmin:t,xmax:n,ymin:r,ymax:i,zmin:a,zmax:o}=e;this.cartographicCenter=new R(t+(n-t)/2,r+(i-r)/2,a+(o-a)/2),this.cartesianCenter=new R,H.WGS84.cartographicToCartesian(this.cartographicCenter,this.cartesianCenter),this.zoom=$m(e,this.cartographicCenter,this.cartesianCenter);return}let t=this.tileset.store?.extent;if(t){let[e,n,r,i]=t;this.cartographicCenter=new R(e+(r-e)/2,n+(i-n)/2,0),this.cartesianCenter=new R,H.WGS84.cartographicToCartesian(this.cartographicCenter,this.cartesianCenter),this.zoom=eh(t,this.cartographicCenter,this.cartesianCenter)}else console.warn(`Extent is not defined in the tileset header`),this.cartographicCenter=new R,this.zoom=1}calculateViewPropsTiles3D(){let e=this.root,{center:t}=e.boundingVolume;t?(t[0]!==0||t[1]!==0||t[2]!==0?(this.cartographicCenter=new R,H.WGS84.cartesianToCartographic(t,this.cartographicCenter)):this.cartographicCenter=new R(0,0,-H.WGS84.radii[0]),this.cartesianCenter=t,this.zoom=Qm(e.boundingVolume,this.cartographicCenter)):(console.warn(`center was not pre-calculated for the root tile`),this.cartographicCenter=new R,this.zoom=1)}_initializeStats(){this.stats.get(Gh),this.stats.get(Xh),this.stats.get(Kh),this.stats.get(qh),this.stats.get(Jh),this.stats.get(Yh),this.stats.get(Zh),this.stats.get(Qh),this.stats.get($h),this.stats.get(eg,`memory`),this.stats.get(tg)}_initializeTileHeaders(e,t){let n=new Rh(this,e.root,t);if(t&&(t.children.push(n),n.depth=t.depth+1),this.type===fe.TILES3D){let e=[];for(e.push(n);e.length>0;){let t=e.pop();this.stats.get(Gh).incrementCount();let n=t.header.children||[];for(let r of n){let n=new Rh(this,r,t);if(n.contentUrl?.includes(`?session=`)){let e=new URL(n.contentUrl).searchParams.get(`session`);e&&(this._queryParams.session=e)}t.children.push(n),n.depth=t.depth+1,e.push(n)}}}return n}_initializeTraverser(){let e;switch(this.type){case fe.TILES3D:e=zh;break;case fe.I3S:e=Uh;break;default:e=Fh}return new e({basePath:this.basePath,onTraversalEnd:this._onTraversalEnd.bind(this)})}_destroyTileHeaders(e){this._destroySubtree(e)}async _loadTile(e){let t;try{this._onStartTileLoading(),t=await e.loadContent()}catch(t){this._onTileLoadError(e,t instanceof Error?t:Error(`load failed`))}finally{this._onEndTileLoading(),this._onTileLoad(e,t)}}_onTileLoadError(e,t){this.stats.get(Qh).incrementCount();let n=t.message||t.toString(),r=e.url;console.error(`A 3D tile failed to load: ${e.url} ${n}`),this.options.onTileError(e,n,r)}_onTileLoad(e,t){if(t){if(this.type===fe.I3S){let e=this.tileset?.nodePagesTile?.nodesInNodePages||0;this.stats.get(Gh).reset(),this.stats.get(Gh).addCount(e)}e&&e.content&&Lm(e,e.content),this.updateContentTypes(e),this._addTileToCache(e),this.options.onTileLoad(e)}}updateContentTypes(e){if(this.type===fe.I3S)switch(e.header.isDracoGeometry&&(this.contentFormats.draco=!0),e.header.textureFormat){case`dds`:this.contentFormats.dds=!0;break;case`ktx2`:this.contentFormats.ktx2=!0}else if(this.type===fe.TILES3D){let{extensionsRemoved:t=[]}=e.content?.gltf||{};t.includes(`KHR_draco_mesh_compression`)&&(this.contentFormats.draco=!0),t.includes(`EXT_meshopt_compression`)&&(this.contentFormats.meshopt=!0),t.includes(`KHR_texture_basisu`)&&(this.contentFormats.ktx2=!0)}}_onStartTileLoading(){this._pendingCount++,this.stats.get(Xh).incrementCount()}_onEndTileLoading(){this._pendingCount--,this.stats.get(Xh).decrementCount()}_addTileToCache(e){this._cache.add(this,e,t=>t._updateCacheStats(e))}_updateCacheStats(e){this.stats.get(Yh).incrementCount(),this.stats.get(Kh).incrementCount(),this.gpuMemoryUsageInBytes+=e.gpuMemoryUsageInBytes||0,this.stats.get(eg).count=this.gpuMemoryUsageInBytes,this.options.memoryAdjustedScreenSpaceError&&this.adjustScreenSpaceError()}_unloadTile(e){this.gpuMemoryUsageInBytes-=e.gpuMemoryUsageInBytes||0,this.stats.get(Kh).decrementCount(),this.stats.get(Zh).incrementCount(),this.stats.get(eg).count=this.gpuMemoryUsageInBytes,this.options.onTileUnload(e),e.unloadContent()}_destroy(){let e=[];for(this.root&&e.push(this.root);e.length>0;){let t=e.pop();for(let n of t.children)e.push(n);this._destroyTile(t)}this.root=null}_destroySubtree(e){let t=e,n=[];for(n.push(t);n.length>0;){e=n.pop();for(let t of e.children)n.push(t);e!==t&&this._destroyTile(e)}t.children=[]}_destroyTile(e){this._cache.unloadTile(this,e),this._unloadTile(e),e.destroy()}_initializeTiles3DTileset(e){if(e.queryString){let t=new URLSearchParams(e.queryString),n=Object.fromEntries(t.entries());this._queryParams={...this._queryParams,...n}}if(this.asset=e.asset,!this.asset)throw Error(`Tileset must have an asset property.`);if(this.asset.version!==`0.0`&&this.asset.version!==`1.0`&&this.asset.version!==`1.1`)throw Error(`The tileset must be 3D Tiles version either 0.0 or 1.0 or 1.1.`);`tilesetVersion`in this.asset&&(this._queryParams.v=this.asset.tilesetVersion),this.credits={attributions:this.options.attributions||[]},this.description=this.options.description||``,this.properties=e.properties,this.geometricError=e.geometricError,this._extensionsUsed=e.extensionsUsed||[],this.extras=e.extras}_initializeI3STileset(){let e=this.loadOptions.i3s;e&&typeof e==`object`&&`token`in e&&(this._queryParams.token=e.token)}},rg=[0],ig={[-1]:k.DEFAULT,0:k.CARTESIAN,1:k.LNGLAT,2:k.METER_OFFSETS,3:k.LNGLAT_OFFSETS};function ag(e){return typeof e==`number`?ig[e]??e:e}var og={getPointColor:{type:`accessor`,value:[0,0,0,255]},pointSize:1,data:``,loader:he,onTilesetLoad:{type:`function`,value:e=>{}},onTileLoad:{type:`function`,value:e=>{}},onTileUnload:{type:`function`,value:e=>{}},onTileError:{type:`function`,value:(e,t,n)=>{}},_getMeshColor:{type:`function`,value:e=>[255,255,255]}},sg=class extends Ae{initializeState(){`onTileLoadFail`in this.props&&P.removed(`onTileLoadFail`,`onTileError`)(),this.state={layerMap:{},tileset3d:null,activeViewports:{},lastUpdatedViewports:null}}get isLoaded(){return!!(this.state?.tileset3d?.isLoaded()&&super.isLoaded)}shouldUpdateState({changeFlags:e}){return e.somethingChanged}updateState({props:e,oldProps:t,changeFlags:n}){if(e.data&&e.data!==t.data&&this._loadTileset(e.data),n.viewportChanged){let{activeViewports:e}=this.state;Object.keys(e).length&&(this._updateTileset(e),this.state.lastUpdatedViewports=e,this.state.activeViewports={})}if(n.propsChanged){let{layerMap:e}=this.state;for(let t in e)e[t].needsUpdate=!0}}finalizeState(e){this.state.tileset3d?.destroy(),this.state.tileset3d=null,this.state.layerMap={},this.state.activeViewports={},this.state.lastUpdatedViewports=null,super.finalizeState(e)}activateViewport(e){let{activeViewports:t,lastUpdatedViewports:n}=this.state;this.internalState.viewport=e,t[e.id]=e;let r=n?.[e.id];r&&e.equals(r)||(this.setChangeFlags({viewportChanged:!0}),this.setNeedsUpdate())}getPickingInfo({info:e,sourceLayer:t}){let n=t&&t.props.tile;return e.picked&&(e.object=n),e.sourceTile=n,e}filterSubLayer({layer:e,viewport:t,cullRect:n,isPicking:r}){let{tile:i}=e.props,{id:a}=t;if(!i.selected||!i.viewportIds.includes(a))return!1;if(r&&n&&i.content?.cartographicOrigin){let[e,r]=t.project(i.content.cartographicOrigin),a=n.x+n.width/2,o=n.y+n.height/2,s=Math.max(t.width,t.height)/4,c=e-a,l=r-o;if(c*c+l*l>s*s)return!1}return!0}_updateAutoHighlight(e){let t=e.sourceTile,n=this.state.layerMap[t?.id];n&&n.layer&&n.layer.updateAutoHighlight(e)}async _loadTileset(e){let t=this.props.loadOptions||{},n=this.props.loaders?.length?this.props.loaders:this.props.loader,r=Array.isArray(n)?n[0]:n,{tileset:i,...a}=t,o={loadOptions:{...a},...i},s=e;if(`preload`in r&&typeof r.preload==`function`){let n=await r.preload(e,t);n.url&&(s=n.url),n.headers&&(o.loadOptions.core={...o.loadOptions.core,fetch:{...o.loadOptions.core?.fetch,headers:n.headers}}),Object.assign(o,n)}let c=new ng(await oe(s,r,o.loadOptions),{onTileLoad:this._onTileLoad.bind(this),onTileUnload:this._onTileUnload.bind(this),onTileError:this.props.onTileError,onUpdate:()=>this.setNeedsUpdate(),...o});this.setState({tileset3d:c,layerMap:{}}),this._updateTileset(this.state.activeViewports),this.props.onTilesetLoad(c)}_onTileLoad(e){let{lastUpdatedViewports:t}=this.state;e.tileDrawn=!1,this.props.onTileLoad(e),this._updateTileset(t),this.setNeedsUpdate()}_onTileUnload(e){delete this.state.layerMap[e.id],this.props.onTileUnload(e)}_updateTileset(e){if(!e)return;let{tileset3d:t}=this.state,{timeline:n}=this.context,r=Object.keys(e).length;n&&r&&t&&t.selectTiles(Object.values(e)).then(e=>{this.state.frameNumber!==e&&this.setState({frameNumber:e})})}_getSubLayer(e,t){if(!e.content)return null;switch(e.type){case ye.POINTCLOUD:return this._makePointCloudLayer(e,t);case ye.SCENEGRAPH:return this._make3DModelLayer(e);case ye.MESH:return this._makeSimpleMeshLayer(e,t);default:throw Error(`Tile3DLayer: Failed to render layer of type ${e.content.type}`)}}_makePointCloudLayer(e,t){let{attributes:n,pointCount:r,constantRGBA:i,cartographicOrigin:a,modelMatrix:o}=e.content,{positions:s,normals:c,colors:l}=n;if(!s)return null;let u=t&&t.props.data||{header:{vertexCount:r},attributes:{POSITION:s,NORMAL:c,COLOR_0:l}},{pointSize:d,getPointColor:f}=this.props;return new(this.getSubLayerClass(`pointcloud`,Pt))({pointSize:d},this.getSubLayerProps({id:`pointcloud`}),{id:`${this.id}-pointcloud-${e.id}`,tile:e,data:u,coordinateSystem:k.METER_OFFSETS,coordinateOrigin:a,modelMatrix:o,getColor:i||f,_offset:0})}_make3DModelLayer(e){let{gltf:t,instances:n,cartographicOrigin:r,modelMatrix:i}=e.content;return new(this.getSubLayerClass(`scenegraph`,p))({_lighting:`pbr`},this.getSubLayerProps({id:`scenegraph`}),{id:`${this.id}-scenegraph-${e.id}`,tile:e,data:n||rg,scenegraph:t,coordinateSystem:k.METER_OFFSETS,coordinateOrigin:r,modelMatrix:i,getTransformMatrix:e=>e.modelMatrix,getPosition:[0,0,0],_offset:0,onFirstDraw:()=>{e.tileDrawn=!0}})}_makeSimpleMeshLayer(e,t){let{attributes:n,indices:r,modelMatrix:i,cartographicOrigin:a,coordinateSystem:s=k.METER_OFFSETS,material:c,featureIds:l}=e.content,{_getMeshColor:u}=this.props,d=t&&t.props.mesh||new o({topology:`triangle-list`,attributes:cg(n),indices:r});return new(this.getSubLayerClass(`mesh`,Nm))(this.getSubLayerProps({id:`mesh`}),{id:`${this.id}-mesh-${e.id}`,tile:e,mesh:d,data:rg,getColor:u(e),pbrMaterial:c,modelMatrix:i,coordinateOrigin:a,coordinateSystem:ag(s),featureIds:l,_offset:0})}renderLayers(){let{tileset3d:e,layerMap:t}=this.state;return e?e.tiles.map(e=>{let n=t[e.id]=t[e.id]||{tile:e},{layer:r}=n;return e.selected&&(r?n.needsUpdate&&=(r=this._getSubLayer(e,r),!1):r=this._getSubLayer(e)),n.layer=r,r}).filter(Boolean):null}};sg.defaultProps=og,sg.layerName=`Tile3DLayer`;function cg(e){let t={};return t.positions={...e.positions,value:new Float32Array(e.positions.value)},e.normals&&(t.normals=e.normals),e.texCoords&&(t.texCoords=e.texCoords),e.colors&&(t.colors=e.colors),e.uvRegions&&(t.uvRegions=e.uvRegions),t}var lg={dataType:null,batchType:null,name:`Terrain`,id:`terrain`,module:`terrain`,version:`4.4.5`,worker:!0,extensions:[`png`,`pngraw`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`],mimeTypes:[`image/png`,`image/jpeg`,`image/gif`,`image/webp`,`image/bmp`],options:{terrain:{tesselator:`auto`,bounds:void 0,meshMaxError:10,elevationDecoder:{rScaler:1,gScaler:0,bScaler:0,offset:0},skirtHeight:void 0}}},ug=[1],dg=1,fg=1,pg=90,mg=180,hg={...lm.defaultProps,elevationData:Op,texture:{...Op,optional:!0},meshMaxError:{type:`number`,value:4},bounds:{type:`array`,value:null,optional:!0,compare:!0},color:{type:`color`,value:[255,255,255]},elevationDecoder:{type:`object`,value:{rScaler:1,gScaler:0,bScaler:0,offset:0}},workerUrl:``,wireframe:!1,material:!0,loaders:[lg]};function gg(e){return Array.isArray(e)?e.join(`;`):e||``}function _g(e,t,n){let r=(e[2]-e[0])/t*dg,i=(e[3]-e[1])/t*dg,a=[e[0]-r,e[1]-i,e[2]+r,e[3]+i];return n?[Math.max(a[0],-180),Math.max(a[1],-90),Math.min(a[2],mg),Math.min(a[3],pg)]:a}function vg(e){return!Number.isFinite(e)||e<=0?fg:Math.max(e,fg)}var yg=class extends Ae{updateState({props:e,oldProps:t}){let n=e.elevationData!==t.elevationData;if(n){let{elevationData:t}=e,n=t&&(Array.isArray(t)||bg(t));this.setState({isTiled:n})}let r=n||e.meshMaxError!==t.meshMaxError||e.elevationDecoder!==t.elevationDecoder||e.bounds!==t.bounds;if(!this.state.isTiled&&r){let t=this.loadTerrain(e);this.setState({terrain:t})}e.workerUrl&&P.removed(`workerUrl`,`loadOptions.terrain.workerUrl`)()}loadTerrain({elevationData:e,bounds:t,elevationDecoder:n,meshMaxError:r,signal:i}){if(!e)return null;let a=vg(r),o=this.getLoadOptions();o={...o,terrain:{skirtHeight:this.state.isTiled?a*2:0,...o?.terrain,bounds:t,meshMaxError:a,elevationDecoder:n}};let{fetch:s}=this.props;return s(e,{propName:`elevationData`,layer:this,loadOptions:o,signal:i})}getTiledTerrainData(e){let{elevationData:t,fetch:n,texture:r,elevationDecoder:i,meshMaxError:a}=this.props,{viewport:o}=this.context,s=jp(t,e),c=r&&jp(r,e),{signal:l}=e,u=[0,0],d=[0,0];if(o.isGeospatial){let t=e.bbox;u=o.projectFlat([t.west,t.south]),d=o.projectFlat([t.east,t.north])}else{let t=e.bbox;u=[t.left,t.bottom],d=[t.right,t.top]}let f=_g([u[0],u[1],d[0],d[1]],this.props.tileSize,o instanceof le),p=this.loadTerrain({elevationData:s,bounds:f,elevationDecoder:i,meshMaxError:a,signal:l}),m=c?n(c,{propName:`texture`,layer:this,loaders:[],signal:l}).catch(e=>null):Promise.resolve(null);return Promise.all([p,m])}renderSubLayers(e){let t=this.getSubLayerClass(`mesh`,u),{color:n,wireframe:r,material:i}=this.props,{data:a}=e;if(!a)return null;let[o,s]=a,{viewport:c}=this.context,l=c instanceof le,d=o?.header?.boundingBox,f=d&&d.every(([e,t])=>e>=-180&&e<=mg&&t>=-90&&t<=pg);return new t(e,{data:ug,mesh:o,texture:s,_instanced:!1,coordinateSystem:l&&f?k.LNGLAT:k.CARTESIAN,getPosition:e=>[0,0,0],getColor:n,wireframe:r,material:i})}onViewportLoad(e){if(!e)return;let{zRange:t}=this.state,n=e.map(e=>e.content).filter(Boolean).map(e=>e[0].header.boundingBox.map(e=>e[2]));if(n.length===0)return;let r=Math.min(...n.map(e=>e[0])),i=Math.max(...n.map(e=>e[1]));(!t||r<t[0]||i>t[1])&&this.setState({zRange:[r,i]})}renderLayers(){let{color:e,material:t,elevationData:n,texture:r,wireframe:i,meshMaxError:a,elevationDecoder:o,tileSize:s,maxZoom:c,minZoom:l,extent:d,maxRequests:f,onTileLoad:p,onTileUnload:m,onTileError:h,maxCacheSize:g,maxCacheByteSize:_,refinementStrategy:v,zoomOffset:y}=this.props;return this.state.isTiled?new lm(this.getSubLayerProps({id:`tiles`}),{getTileData:this.getTiledTerrainData.bind(this),renderSubLayers:this.renderSubLayers.bind(this),updateTriggers:{getTileData:{elevationData:gg(n),texture:gg(r),meshMaxError:a,elevationDecoder:o,projectionMode:this.context.viewport.projectionMode,zoomOffset:y}},onViewportLoad:this.onViewportLoad.bind(this),zRange:this.state.zRange||null,tileSize:s,maxZoom:c,minZoom:l,extent:d,maxRequests:f,onTileLoad:p,onTileUnload:m,onTileError:h,maxCacheSize:g,maxCacheByteSize:_,refinementStrategy:v,zoomOffset:y}):n?new(this.getSubLayerClass(`mesh`,u))(this.getSubLayerProps({id:`mesh`}),{data:ug,mesh:this.state.terrain,texture:r,_instanced:!1,getPosition:e=>[0,0,0],getColor:e,material:t,wireframe:i}):null}};yg.defaultProps=hg,yg.layerName=`TerrainLayer`;var bg=e=>e.includes(`{x}`)&&(e.includes(`{y}`)||e.includes(`{-y}`)),xg={clipBounds:[0,0,1,1],clipByInstance:void 0},Sg=`
layout(std140) uniform clipUniforms {
  vec4 bounds;
} clip;

bool clip_isInBounds(vec2 position) {
  return position.x >= clip.bounds[0] && position.y >= clip.bounds[1] && position.x < clip.bounds[2] && position.y < clip.bounds[3];
}
`,Cg={name:`clip`,vs:Sg,uniformTypes:{bounds:`vec4<f32>`}},wg={"vs:#decl":`
out float clip_isVisible;
`,"vs:DECKGL_FILTER_GL_POSITION":`
  clip_isVisible = float(clip_isInBounds(geometry.worldPosition.xy));
`,"fs:#decl":`
in float clip_isVisible;
`,"fs:DECKGL_FILTER_COLOR":`
  if (clip_isVisible < 0.5) discard;
`},Tg={name:`clip`,fs:Sg,uniformTypes:{bounds:`vec4<f32>`}},Eg={"vs:#decl":`
out vec2 clip_commonPosition;
`,"vs:DECKGL_FILTER_GL_POSITION":`
  clip_commonPosition = geometry.position.xy;
`,"fs:#decl":`
in vec2 clip_commonPosition;
`,"fs:DECKGL_FILTER_COLOR":`
  if (!clip_isInBounds(clip_commonPosition)) discard;
`},Dg=class extends je{getShaders(){let e=`instancePositions`in this.getAttributeManager().attributes;return this.props.clipByInstance!==void 0&&(e=!!this.props.clipByInstance),this.state.clipByInstance=e,this.context.device.type===`webgpu`?{}:e?{modules:[Cg],inject:wg}:{modules:[Tg],inject:Eg}}draw(){let{clipBounds:e}=this.props,t={};if(this.state.clipByInstance)t.bounds=e;else{let n=this.projectPosition([e[0],e[1],0]),r=this.projectPosition([e[2],e[3],0]);t.bounds=[Math.min(n[0],r[0]),Math.min(n[1],r[1]),Math.max(n[0],r[0]),Math.max(n[1],r[1])]}this.context.device.type===`webgpu`&&(t.enabled=!0,t.mode=this.state.clipByInstance?`instance`:`geometry`),this.setShaderModuleProps({clip:t})}};Dg.defaultProps=xg,Dg.extensionName=`ClipExtension`;function Og(e,t,n){switch(e.type){case`Point`:return jg(e,t,n);case`LineString`:return Ag(e,t,n);case`Polygon`:return kg(e,t,n);default:throw Error(`Unsupported geometry type: ${e?.type}`)}}function kg(e,t=-1/0,n=1/0){let{positions:r}=e,i=e.polygonIndices.value.filter(e=>e>=t&&e<=n),a=e.primitivePolygonIndices.value.filter(e=>e>=t&&e<=n);if(!(i.length>2)){let e=[];for(let t=0;t<a.length-1;t++){let n=a[t],i=a[t+1],o=Mg(r,n,i);e.push(o)}return{type:`Polygon`,coordinates:e}}let o=[];for(let t=0;t<i.length-1;t++){let n=i[t],r=i[t+1],a=kg(e,n,r).coordinates;o.push(a)}return{type:`MultiPolygon`,coordinates:o}}function Ag(e,t=-1/0,n=1/0){let{positions:r}=e,i=e.pathIndices.value.filter(e=>e>=t&&e<=n);if(!(i.length>2))return{type:`LineString`,coordinates:Mg(r,i[0],i[1])};let a=[];for(let e=0;e<i.length-1;e++){let t=Mg(r,i[e],i[e+1]);a.push(t)}return{type:`MultiLineString`,coordinates:a}}function jg(e,t,n){let{positions:r}=e,i=Mg(r,t,n);return i.length>1?{type:`MultiPoint`,coordinates:i}:{type:`Point`,coordinates:i[0]}}function Mg(e,t,n){t||=0,n||=e.value.length/e.size;let r=[];for(let i=t;i<n;i++){let t=[];for(let n=i*e.size;n<(i+1)*e.size;n++)t.push(Number(e.value[n]));r.push(t)}return r}function Ng(e,t){let n=t?.globalFeatureId;return n===void 0?Fg(e,t?.type):Pg(e,n)}function Pg(e,t){let n=Ig(e);for(let e of n){let n=0,r=e.featureIds.value[0];for(let i=0;i<e.featureIds.value.length;i++){let a=e.featureIds.value[i];if(a!==r){if(t===e.globalFeatureIds.value[n])return Rg(e,n,i);n=i,r=a}}if(t===e.globalFeatureIds.value[n])return Rg(e,n,e.featureIds.value.length)}throw Error(`featureId:${t} not found`)}function Fg(e,t){return Lg(Ig(e,t))}function Ig(e,t){let n=[];return e.points&&(e.points.type=`Point`,n.push(e.points)),e.lines&&(e.lines.type=`LineString`,n.push(e.lines)),e.polygons&&(e.polygons.type=`Polygon`,n.push(e.polygons)),n}function Lg(e){let t=[];for(let n of e){if(n.featureIds.value.length===0)continue;let e=0,r=n.featureIds.value[0];for(let i=0;i<n.featureIds.value.length;i++){let a=n.featureIds.value[i];a!==r&&(t.push(Rg(n,e,i)),e=i,r=a)}t.push(Rg(n,e,n.featureIds.value.length))}return t}function Rg(e,t,n){return{type:`Feature`,geometry:Og(e,t,n),properties:Bg(e,t,n),...zg(e,t,n)}}function zg(e,t=0,n){return e.fields&&e.fields[e.featureIds.value[t]]}function Bg(e,t=0,n){let r=Object.assign({},e.properties[e.featureIds.value[t]]);for(let n in e.numericProps)r[n]=e.numericProps[n].value[t];return r}var Vg=n((e=>{e.read=function(e,t,n,r,i){var a,o,s=i*8-r-1,c=(1<<s)-1,l=c>>1,u=-7,d=n?i-1:0,f=n?-1:1,p=e[t+d];for(d+=f,a=p&(1<<-u)-1,p>>=-u,u+=s;u>0;a=a*256+e[t+d],d+=f,u-=8);for(o=a&(1<<-u)-1,a>>=-u,u+=r;u>0;o=o*256+e[t+d],d+=f,u-=8);if(a===0)a=1-l;else if(a===c)return o?NaN:(p?-1:1)*(1/0);else o+=2**r,a-=l;return(p?-1:1)*o*2**(a-r)},e.write=function(e,t,n,r,i,a){var o,s,c,l=a*8-i-1,u=(1<<l)-1,d=u>>1,f=i===23?2**-24-2**-77:0,p=r?0:a-1,m=r?1:-1,h=+(t<0||t===0&&1/t<0);for(t=Math.abs(t),isNaN(t)||t===1/0?(s=+!!isNaN(t),o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(c=2**-o)<1&&(o--,c*=2),o+d>=1?t+=f/c:t+=f*2**(1-d),t*c>=2&&(o++,c/=2),o+d>=u?(s=0,o=u):o+d>=1?(s=(t*c-1)*2**i,o+=d):(s=t*2**(d-1)*2**i,o=0));i>=8;e[n+p]=s&255,p+=m,s/=256,i-=8);for(o=o<<i|s,l+=i;l>0;e[n+p]=o&255,p+=m,o/=256,l-=8);e[n+p-m]|=h*128}})),Hg=n(((e,t)=>{t.exports=r;var n=Vg();function r(e){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(e)?e:new Uint8Array(e||0),this.pos=0,this.type=0,this.length=this.buf.length}r.Varint=0,r.Fixed64=1,r.Bytes=2,r.Fixed32=5;var i=4294967296,a=1/i,o=12,s=typeof TextDecoder>`u`?null:new TextDecoder(`utf-8`);r.prototype={destroy:function(){this.buf=null},readFields:function(e,t,n){for(n||=this.length;this.pos<n;){var r=this.readVarint(),i=r>>3,a=this.pos;this.type=r&7,e(i,t,this),this.pos===a&&this.skip(r)}return t},readMessage:function(e,t){return this.readFields(e,t,this.readVarint()+this.pos)},readFixed32:function(){var e=w(this.buf,this.pos);return this.pos+=4,e},readSFixed32:function(){var e=E(this.buf,this.pos);return this.pos+=4,e},readFixed64:function(){var e=w(this.buf,this.pos)+w(this.buf,this.pos+4)*i;return this.pos+=8,e},readSFixed64:function(){var e=w(this.buf,this.pos)+E(this.buf,this.pos+4)*i;return this.pos+=8,e},readFloat:function(){var e=n.read(this.buf,this.pos,!0,23,4);return this.pos+=4,e},readDouble:function(){var e=n.read(this.buf,this.pos,!0,52,8);return this.pos+=8,e},readVarint:function(e){var t=this.buf,n,r=t[this.pos++];return n=r&127,r<128||(r=t[this.pos++],n|=(r&127)<<7,r<128)||(r=t[this.pos++],n|=(r&127)<<14,r<128)||(r=t[this.pos++],n|=(r&127)<<21,r<128)?n:(r=t[this.pos],n|=(r&15)<<28,c(n,e,this))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var e=this.readVarint();return e%2==1?(e+1)/-2:e/2},readBoolean:function(){return!!this.readVarint()},readString:function(){var e=this.readVarint()+this.pos,t=this.pos;return this.pos=e,e-t>=o&&s?O(this.buf,t,e):D(this.buf,t,e)},readBytes:function(){var e=this.readVarint()+this.pos,t=this.buf.subarray(this.pos,e);return this.pos=e,t},readPackedVarint:function(e,t){if(this.type!==r.Bytes)return e.push(this.readVarint(t));var n=l(this);for(e||=[];this.pos<n;)e.push(this.readVarint(t));return e},readPackedSVarint:function(e){if(this.type!==r.Bytes)return e.push(this.readSVarint());var t=l(this);for(e||=[];this.pos<t;)e.push(this.readSVarint());return e},readPackedBoolean:function(e){if(this.type!==r.Bytes)return e.push(this.readBoolean());var t=l(this);for(e||=[];this.pos<t;)e.push(this.readBoolean());return e},readPackedFloat:function(e){if(this.type!==r.Bytes)return e.push(this.readFloat());var t=l(this);for(e||=[];this.pos<t;)e.push(this.readFloat());return e},readPackedDouble:function(e){if(this.type!==r.Bytes)return e.push(this.readDouble());var t=l(this);for(e||=[];this.pos<t;)e.push(this.readDouble());return e},readPackedFixed32:function(e){if(this.type!==r.Bytes)return e.push(this.readFixed32());var t=l(this);for(e||=[];this.pos<t;)e.push(this.readFixed32());return e},readPackedSFixed32:function(e){if(this.type!==r.Bytes)return e.push(this.readSFixed32());var t=l(this);for(e||=[];this.pos<t;)e.push(this.readSFixed32());return e},readPackedFixed64:function(e){if(this.type!==r.Bytes)return e.push(this.readFixed64());var t=l(this);for(e||=[];this.pos<t;)e.push(this.readFixed64());return e},readPackedSFixed64:function(e){if(this.type!==r.Bytes)return e.push(this.readSFixed64());var t=l(this);for(e||=[];this.pos<t;)e.push(this.readSFixed64());return e},skip:function(e){var t=e&7;if(t===r.Varint)for(;this.buf[this.pos++]>127;);else if(t===r.Bytes)this.pos=this.readVarint()+this.pos;else if(t===r.Fixed32)this.pos+=4;else if(t===r.Fixed64)this.pos+=8;else throw Error(`Unimplemented type: `+t)},writeTag:function(e,t){this.writeVarint(e<<3|t)},realloc:function(e){for(var t=this.length||16;t<this.pos+e;)t*=2;if(t!==this.length){var n=new Uint8Array(t);n.set(this.buf),this.buf=n,this.length=t}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(e){this.realloc(4),T(this.buf,e,this.pos),this.pos+=4},writeSFixed32:function(e){this.realloc(4),T(this.buf,e,this.pos),this.pos+=4},writeFixed64:function(e){this.realloc(8),T(this.buf,e&-1,this.pos),T(this.buf,Math.floor(e*a),this.pos+4),this.pos+=8},writeSFixed64:function(e){this.realloc(8),T(this.buf,e&-1,this.pos),T(this.buf,Math.floor(e*a),this.pos+4),this.pos+=8},writeVarint:function(e){e=+e||0,e>268435455||e<0?d(e,this):(this.realloc(4),this.buf[this.pos++]=e&127|(e>127?128:0),e<=127||(this.buf[this.pos++]=(e>>>=7)&127|(e>127?128:0),e<=127||(this.buf[this.pos++]=(e>>>=7)&127|(e>127?128:0),e<=127||(this.buf[this.pos++]=e>>>7&127))))},writeSVarint:function(e){this.writeVarint(e<0?-e*2-1:e*2)},writeBoolean:function(e){this.writeVarint(!!e)},writeString:function(e){e=String(e),this.realloc(e.length*4),this.pos++;var t=this.pos;this.pos=k(this.buf,e,this.pos);var n=this.pos-t;n>=128&&m(t,n,this),this.pos=t-1,this.writeVarint(n),this.pos+=n},writeFloat:function(e){this.realloc(4),n.write(this.buf,e,this.pos,!0,23,4),this.pos+=4},writeDouble:function(e){this.realloc(8),n.write(this.buf,e,this.pos,!0,52,8),this.pos+=8},writeBytes:function(e){var t=e.length;this.writeVarint(t),this.realloc(t);for(var n=0;n<t;n++)this.buf[this.pos++]=e[n]},writeRawMessage:function(e,t){this.pos++;var n=this.pos;e(t,this);var r=this.pos-n;r>=128&&m(n,r,this),this.pos=n-1,this.writeVarint(r),this.pos+=r},writeMessage:function(e,t,n){this.writeTag(e,r.Bytes),this.writeRawMessage(t,n)},writePackedVarint:function(e,t){t.length&&this.writeMessage(e,h,t)},writePackedSVarint:function(e,t){t.length&&this.writeMessage(e,g,t)},writePackedBoolean:function(e,t){t.length&&this.writeMessage(e,y,t)},writePackedFloat:function(e,t){t.length&&this.writeMessage(e,_,t)},writePackedDouble:function(e,t){t.length&&this.writeMessage(e,v,t)},writePackedFixed32:function(e,t){t.length&&this.writeMessage(e,b,t)},writePackedSFixed32:function(e,t){t.length&&this.writeMessage(e,x,t)},writePackedFixed64:function(e,t){t.length&&this.writeMessage(e,S,t)},writePackedSFixed64:function(e,t){t.length&&this.writeMessage(e,C,t)},writeBytesField:function(e,t){this.writeTag(e,r.Bytes),this.writeBytes(t)},writeFixed32Field:function(e,t){this.writeTag(e,r.Fixed32),this.writeFixed32(t)},writeSFixed32Field:function(e,t){this.writeTag(e,r.Fixed32),this.writeSFixed32(t)},writeFixed64Field:function(e,t){this.writeTag(e,r.Fixed64),this.writeFixed64(t)},writeSFixed64Field:function(e,t){this.writeTag(e,r.Fixed64),this.writeSFixed64(t)},writeVarintField:function(e,t){this.writeTag(e,r.Varint),this.writeVarint(t)},writeSVarintField:function(e,t){this.writeTag(e,r.Varint),this.writeSVarint(t)},writeStringField:function(e,t){this.writeTag(e,r.Bytes),this.writeString(t)},writeFloatField:function(e,t){this.writeTag(e,r.Fixed32),this.writeFloat(t)},writeDoubleField:function(e,t){this.writeTag(e,r.Fixed64),this.writeDouble(t)},writeBooleanField:function(e,t){this.writeVarintField(e,!!t)}};function c(e,t,n){var r=n.buf,i,a=r[n.pos++];if(i=(a&112)>>4,a<128||(a=r[n.pos++],i|=(a&127)<<3,a<128)||(a=r[n.pos++],i|=(a&127)<<10,a<128)||(a=r[n.pos++],i|=(a&127)<<17,a<128)||(a=r[n.pos++],i|=(a&127)<<24,a<128)||(a=r[n.pos++],i|=(a&1)<<31,a<128))return u(e,i,t);throw Error(`Expected varint not more than 10 bytes`)}function l(e){return e.type===r.Bytes?e.readVarint()+e.pos:e.pos+1}function u(e,t,n){return n?t*4294967296+(e>>>0):(t>>>0)*4294967296+(e>>>0)}function d(e,t){var n,r;if(e>=0?(n=e%4294967296|0,r=e/4294967296|0):(n=~(-e%4294967296),r=~(-e/4294967296),n^4294967295?n=n+1|0:(n=0,r=r+1|0)),e>=0x10000000000000000||e<-0x10000000000000000)throw Error(`Given varint doesn't fit into 10 bytes`);t.realloc(10),f(n,r,t),p(r,t)}function f(e,t,n){n.buf[n.pos++]=e&127|128,e>>>=7,n.buf[n.pos++]=e&127|128,e>>>=7,n.buf[n.pos++]=e&127|128,e>>>=7,n.buf[n.pos++]=e&127|128,e>>>=7,n.buf[n.pos]=e&127}function p(e,t){var n=(e&7)<<4;t.buf[t.pos++]|=n|((e>>>=3)?128:0),e&&(t.buf[t.pos++]=e&127|((e>>>=7)?128:0),e&&(t.buf[t.pos++]=e&127|((e>>>=7)?128:0),e&&(t.buf[t.pos++]=e&127|((e>>>=7)?128:0),e&&(t.buf[t.pos++]=e&127|((e>>>=7)?128:0),e&&(t.buf[t.pos++]=e&127)))))}function m(e,t,n){var r=t<=16383?1:t<=2097151?2:t<=268435455?3:Math.floor(Math.log(t)/(Math.LN2*7));n.realloc(r);for(var i=n.pos-1;i>=e;i--)n.buf[i+r]=n.buf[i]}function h(e,t){for(var n=0;n<e.length;n++)t.writeVarint(e[n])}function g(e,t){for(var n=0;n<e.length;n++)t.writeSVarint(e[n])}function _(e,t){for(var n=0;n<e.length;n++)t.writeFloat(e[n])}function v(e,t){for(var n=0;n<e.length;n++)t.writeDouble(e[n])}function y(e,t){for(var n=0;n<e.length;n++)t.writeBoolean(e[n])}function b(e,t){for(var n=0;n<e.length;n++)t.writeFixed32(e[n])}function x(e,t){for(var n=0;n<e.length;n++)t.writeSFixed32(e[n])}function S(e,t){for(var n=0;n<e.length;n++)t.writeFixed64(e[n])}function C(e,t){for(var n=0;n<e.length;n++)t.writeSFixed64(e[n])}function w(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16)+e[t+3]*16777216}function T(e,t,n){e[n]=t,e[n+1]=t>>>8,e[n+2]=t>>>16,e[n+3]=t>>>24}function E(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16)+(e[t+3]<<24)}function D(e,t,n){for(var r=``,i=t;i<n;){var a=e[i],o=null,s=a>239?4:a>223?3:a>191?2:1;if(i+s>n)break;var c,l,u;s===1?a<128&&(o=a):s===2?(c=e[i+1],(c&192)==128&&(o=(a&31)<<6|c&63,o<=127&&(o=null))):s===3?(c=e[i+1],l=e[i+2],(c&192)==128&&(l&192)==128&&(o=(a&15)<<12|(c&63)<<6|l&63,(o<=2047||o>=55296&&o<=57343)&&(o=null))):s===4&&(c=e[i+1],l=e[i+2],u=e[i+3],(c&192)==128&&(l&192)==128&&(u&192)==128&&(o=(a&15)<<18|(c&63)<<12|(l&63)<<6|u&63,(o<=65535||o>=1114112)&&(o=null))),o===null?(o=65533,s=1):o>65535&&(o-=65536,r+=String.fromCharCode(o>>>10&1023|55296),o=56320|o&1023),r+=String.fromCharCode(o),i+=s}return r}function O(e,t,n){return s.decode(e.subarray(t,n))}function k(e,t,n){for(var r=0,i,a;r<t.length;r++){if(i=t.charCodeAt(r),i>55295&&i<57344){if(a){if(i<56320){e[n++]=239,e[n++]=191,e[n++]=189,a=i;continue}i=a-55296<<10|i-56320|65536,a=null}else{i>56319||r+1===t.length?(e[n++]=239,e[n++]=191,e[n++]=189):a=i;continue}}else a&&=(e[n++]=239,e[n++]=191,e[n++]=189,null);i<128?e[n++]=i:(i<2048?e[n++]=i>>6|192:(i<65536?e[n++]=i>>12|224:(e[n++]=i>>18|240,e[n++]=i>>12&63|128),e[n++]=i>>6&63|128),e[n++]=i&63|128)}return n}}));function Ug(e){let t=0;for(let n=0,r=e.length-1,i,a;n<e.length;r=n++)i=e[n],a=e[r],t+=(a[0]-i[0])*(i[1]+a[1]);return t}function Wg(e,t){if(Array.isArray(e[0])){for(let n of e)Wg(n,t);return}let n=e;n[0]/=t,n[1]/=t}function Gg(e,t){for(let n=0;n<e.length;++n)e[n]/=t}function Kg(e,t,n){if(typeof e[0][0]!=`number`){for(let r of e)Kg(r,t,n);return}let r=n*2**t.z,i=n*t.x,a=n*t.y;for(let t=0;t<e.length;t++){let n=e[t];n[0]=(n[0]+i)*360/r-180;let o=180-(n[1]+a)*360/r;n[1]=360/Math.PI*Math.atan(Math.exp(o*Math.PI/180))-90}}function qg(e,t,n){let{x:r,y:i,z:a}=t,o=n*2**a,s=n*r,c=n*i;for(let t=0,n=e.length;t<n;t+=2){e[t]=(e[t]+s)*360/o-180;let n=180-(e[t+1]+c)*360/o;e[t+1]=360/Math.PI*Math.atan(Math.exp(n*Math.PI/180))-90}}function Jg(e){let t=e.length;if(t<=1)return[e];let n=[],r,i;for(let a=0;a<t;a++){let t=Ug(e[a]);t!==0&&(i===void 0&&(i=t<0),i===t<0?(r&&n.push(r),r=[e[a]]):r&&r.push(e[a]))}return r&&n.push(r),n}function Yg(e){let t=e.indices.length,n=`Polygon`;if(t<=1)return{type:n,data:e.data,areas:[[Zt(e.data)]],indices:[e.indices]};let r=[],i=[],a=[],o=[],s,c=0;for(let n,l=0,u;l<t;l++){u=e.indices[l]-c,n=e.indices[l+1]-c||e.data.length;let t=Zt(e.data.slice(u,n));if(t===0){let t=e.data.slice(0,u),r=e.data.slice(n);e.data=t.concat(r),c+=n-u}else s===void 0&&(s=t<0),s===t<0?(o.length&&(r.push(a),i.push(o)),o=[u],a=[t]):(a.push(t),o.push(u))}return a&&r.push(a),o.length&&i.push(o),{type:n,areas:r,indices:i,data:e.data}}var Xg=class{properties;extent;type;id;_pbf;_geometry;_keys;_values;_geometryInfo;static types=[`Unknown`,`Point`,`LineString`,`Polygon`];constructor(e,t,n,r,i,a){this.properties={},this.extent=n,this.type=0,this.id=null,this._pbf=e,this._geometry=-1,this._keys=r,this._values=i,this._geometryInfo=a,e.readFields(Qg,this,t)}toGeoJSONFeature(e,t){let n=this.loadGeometry();switch(e){case`wgs84`:return Zg(this,n,e=>Kg(e,t,this.extent));default:return Zg(this,n,Wg)}}toBinaryFeature(e,t){let n=this.loadFlatGeometry();switch(e){case`wgs84`:return this._toBinaryCoordinates(n,e=>qg(e,t,this.extent));default:return this._toBinaryCoordinates(n,Gg)}}bbox(){let e=this._pbf;e.pos=this._geometry;let t=e.readVarint()+e.pos,n=1,r=0,i=0,a=0,o=1/0,s=-1/0,c=1/0,l=-1/0;for(;e.pos<t;){if(r<=0){let t=e.readVarint();n=t&7,r=t>>3}if(r--,n===1||n===2)i+=e.readSVarint(),a+=e.readSVarint(),i<o&&(o=i),i>s&&(s=i),a<c&&(c=a),a>l&&(l=a);else if(n!==7)throw Error(`unknown command ${n}`)}return[o,c,s,l]}_toBinaryCoordinates(e,t){let n;switch(t(e.data,this.extent),this.type){case 1:this._geometryInfo.pointFeaturesCount++,this._geometryInfo.pointPositionsCount+=e.indices.length,n={type:`Point`,...e};break;case 2:this._geometryInfo.lineFeaturesCount++,this._geometryInfo.linePathsCount+=e.indices.length,this._geometryInfo.linePositionsCount+=e.data.length/2,n={type:`LineString`,...e};break;case 3:n=Yg(e),this._geometryInfo.polygonFeaturesCount++,this._geometryInfo.polygonObjectsCount+=n.indices.length;for(let e of n.indices)this._geometryInfo.polygonRingsCount+=e.length;this._geometryInfo.polygonPositionsCount+=n.data.length/2;break;default:throw Error(`Invalid geometry type: ${this.type}`)}let r={type:`Feature`,geometry:n,properties:this.properties};return this.id!==null&&(r.id=this.id),r}loadGeometry(){let e=this._pbf;e.pos=this._geometry;let t=e.readVarint()+e.pos,n=1,r=0,i=0,a=0,o=[],s;for(;e.pos<t;){if(r<=0){let t=e.readVarint();n=t&7,r=t>>3}switch(r--,n){case 1:case 2:i+=e.readSVarint(),a+=e.readSVarint(),n===1&&(s&&o.push(s),s=[]),s&&s.push([i,a]);break;case 7:s&&s.push(s[0].slice());break;default:throw Error(`unknown command ${n}`)}}return s&&o.push(s),o}loadFlatGeometry(){let e=this._pbf;e.pos=this._geometry;let t=e.readVarint()+e.pos,n=1,r,i=0,a=0,o=0,s=0,c=[],l=[];for(;e.pos<t;)if(i<=0&&(r=e.readVarint(),n=r&7,i=r>>3),i--,n===1||n===2)a+=e.readSVarint(),o+=e.readSVarint(),n===1&&c.push(s),l.push(a,o),s+=2;else if(n===7){if(s>0){let e=c[c.length-1];l.push(l[e],l[e+1]),s+=2}}else throw Error(`unknown command ${n}`);return{data:l,indices:c}}};function Zg(e,t,n){let r=Xg.types[e.type],i,a,o;switch(e.type){case 1:let r=[];for(i=0;i<t.length;i++)r[i]=t[i][0];o=r,n(o,e.extent);break;case 2:for(o=t,i=0;i<o.length;i++)n(o[i],e.extent);break;case 3:for(o=Jg(t),i=0;i<o.length;i++)for(a=0;a<o[i].length;a++)n(o[i][a],e.extent);break;default:throw Error(`illegal vector tile type`)}o.length===1?o=o[0]:r=`Multi${r}`;let s={type:`Feature`,geometry:{type:r,coordinates:o},properties:e.properties};return e.id!==null&&(s.properties||={},s.properties.id=e.id),s}function Qg(e,t,n){t&&n&&(e===1?t.id=n.readVarint():e===2?$g(n,t):e===3?t.type=n.readVarint():e===4&&(t._geometry=n.pos))}function $g(e,t){let n=e.readVarint()+e.pos;for(;e.pos<n;){let n=t._keys[e.readVarint()],r=t._values[e.readVarint()];t.properties[n]=r}}Hg();var e_={name:`Mapbox Vector Tile`,id:`mvt`,module:`mvt`,extensions:[`mvt`,`pbf`],mimeTypes:[`application/vnd.mapbox-vector-tile`,`application/x-protobuf`],category:`geometry`},t_=`4.4.5`,n_={...e_,dataType:null,batchType:null,version:t_,worker:!0,options:{mvt:{shape:`geojson`,coordinates:`local`,layerProperty:`layerName`,layers:void 0,tileIndex:void 0}}};({...n_});var r_={Point:i_,MultiPoint:o_,LineString:s_,MultiLineString:c_,Polygon:l_,MultiPolygon:u_};function i_([e,t],[n,r],i){let a=ee(n[0],r[0],e),o=ee(n[1],r[1],t);return i.unprojectFlat([a,o])}function a_(e,t,n){return e.map(e=>i_(e,t,n))}function o_(e,t,n){return a_(e,t,n)}function s_(e,t,n){return a_(e,t,n)}function c_(e,t,n){return e.map(e=>s_(e,t,n))}function l_(e,t,n){return e.map(e=>a_(e,t,n))}function u_(e,t,n){return e.map(e=>l_(e,t,n))}function d_(e,t,n){let r=[n.projectFlat([t.west,t.north]),n.projectFlat([t.east,t.south])];return{...e,coordinates:r_[e.type](e.coordinates,r,n)}}var f_=[`points`,`lines`,`polygons`];function p_(e,t,n,r){for(let i of f_){let a=e[i]&&m_(e[i],t,n,r);if(a>=0)return a}return-1}function m_(e,t,n,r){let i=e.featureIds.value;if(!i.length)return-1;let a=0,o=i[i.length-1]+1;if(r){let t=h_(e,r);if(t)a=t[0],o=t[1]+1;else return-1}let s=-1;if(t in e.numericProps){let r=e.numericProps[t].value.findIndex((e,t)=>e===n&&i[t]>=a&&i[t]<o);return r>=0?e.globalFeatureIds.value[r]:-1}return t?s=__(e.properties,e=>e[t]===n,a,o):e.fields&&(s=__(e.fields,e=>e.id===n,a,o)),s>=0?g_(e,s):-1}function h_(e,t){if(!e.__layers){let t={},{properties:n}=e;for(let e=0;e<n.length;e++){let{layerName:r}=n[e];r&&(t[r]?t[r][1]=e:t[r]=[e,e])}e.__layers=t}return e.__layers[t]}function g_(e,t){if(!e.__ids){let t=[],n=e.featureIds.value,r=e.globalFeatureIds.value;for(let e=0;e<n.length;e++)t[n[e]]=r[e];e.__ids=t}return e.__ids[t]}function __(e,t,n,r){for(let i=n;i<r;i++)if(t(e[i],i))return i;return-1}var v_=512,y_={...Xi.defaultProps,data:Op,onDataLoad:{type:`function`,value:null,optional:!0,compare:!1},uniqueIdProperty:``,highlightedFeatureId:null,loaders:[n_],binary:!0},b_=class extends lm{initializeState(){super.initializeState();let e=this.context.viewport.resolution===void 0&&this.props.binary;this.setState({binary:e,data:null,tileJSON:null,hoveredFeatureId:null,hoveredFeatureLayerName:null})}get isLoaded(){return!!(this.state?.data&&super.isLoaded)}updateState({props:e,oldProps:t,context:n,changeFlags:r}){r.dataChanged&&this._updateTileData(),this.state?.data&&(super.updateState({props:e,oldProps:t,context:n,changeFlags:r}),this._setWGS84PropertyForTiles());let{highlightColor:i}=e;i!==t.highlightColor&&Array.isArray(i)&&this.setState({highlightColor:i})}async _updateTileData(){let e=this.props.data,t=null;if(typeof e==`string`&&!Hp(e)){let{onDataLoad:n,fetch:r}=this.props;this.setState({data:null,tileJSON:null});try{t=await r(e,{propName:`data`,layer:this,loaders:[]})}catch(t){this.raiseError(t,`loading TileJSON`),e=null}n&&n(t,{propName:`data`,layer:this})}else e&&typeof e==`object`&&`tilejson`in e&&(t=e);t&&(e=t.tiles),this.setState({data:e,tileJSON:t})}_getTilesetOptions(){let e=super._getTilesetOptions(),t=this.state.tileJSON,{minZoom:n,maxZoom:r}=this.props;return t&&(Number.isFinite(t.minzoom)&&t.minzoom>n&&(e.minZoom=t.minzoom),Number.isFinite(t.maxzoom)&&(!Number.isFinite(r)||t.maxzoom<r)&&(e.maxZoom=t.maxzoom)),e}renderLayers(){return this.state?.data?super.renderLayers():null}getTileData(e){let{data:t,binary:n}=this.state,{index:r,signal:i}=e,a=jp(t,e);if(!a)return Promise.reject(`Invalid URL`);let o=this.getLoadOptions(),{fetch:s}=this.props;return o={...o,core:{...o?.core,mimeType:`application/x-protobuf`},mvt:{...o?.mvt,shape:n?`binary`:`geojson`,coordinates:this.context.viewport.resolution?`wgs84`:`local`,tileIndex:r}},s(a,{propName:`data`,layer:this,loadOptions:o,signal:i})}renderSubLayers(e){let{x:t,y:n,z:r}=e.tile.index,i=2**r,a=v_/i,o=-a,s=v_*t/i,c=v_*(1-n/i),l=new B().scale([a,o,1]);e.autoHighlight=!1,this.context.viewport.resolution||(e.modelMatrix=l,e.coordinateOrigin=[s,c,0],e.coordinateSystem=k.CARTESIAN,e.extensions=[...e.extensions||[],new Dg]);let u=super.renderSubLayers(e);return this.state.binary&&!(u instanceof Xi)&&P.warn(`renderSubLayers() must return GeoJsonLayer when using binary:true`)(),u}_updateAutoHighlight(e){let{uniqueIdProperty:t}=this.props,{hoveredFeatureId:n,hoveredFeatureLayerName:r}=this.state,i=e.object,a=null,o=null;i&&(a=x_(i,t),o=S_(i));let{highlightColor:s}=this.props;typeof s==`function`&&(s=s(e)),(n!==a||r!==o)&&this.setState({highlightColor:s,hoveredFeatureId:a,hoveredFeatureLayerName:o})}_isWGS84(){return!!this.context.viewport.resolution}getPickingInfo(e){let t=super.getPickingInfo(e);if(this.state.binary&&t.index!==-1){let{data:n}=e.sourceLayer.props;t.object=Ng(n,{globalFeatureId:t.index})}return t.object&&!this._isWGS84()&&(t.object=w_(t.object,t.tile.bbox,this.context.viewport)),t}getSubLayerPropsByTile(e){return{highlightedObjectIndex:this.getHighlightedObjectIndex(e),highlightColor:this.state.highlightColor}}getHighlightedObjectIndex(e){let{hoveredFeatureId:t,hoveredFeatureLayerName:n,binary:r}=this.state,{uniqueIdProperty:i,highlightedFeatureId:a}=this.props,o=e.content,s=C_(a);if(!(C_(t)||s))return-1;let c=s?a:t;return Array.isArray(o)?o.findIndex(e=>{let t=x_(e,i)===c,r=s||S_(e)===n;return t&&r}):o&&r?p_(o,i,c,s?``:n):-1}_pickObjects(e){let{deck:t,viewport:n}=this.context,r=n.width,i=n.height,a=n.x,o=n.y,s=[this.id];return t.pickObjects({x:a,y:o,width:r,height:i,layerIds:s,maxObjects:e})}getRenderedFeatures(e=null){let t=this._pickObjects(e),n=new Set,r=[];for(let e of t){let t=x_(e.object,this.props.uniqueIdProperty);t===void 0?r.push(e.object):n.has(t)||(n.add(t),r.push(e.object))}return r}_setWGS84PropertyForTiles(){let e=`dataInWGS84`;this.state.tileset.selectedTiles.forEach(t=>{t.hasOwnProperty(e)||Object.defineProperty(t,e,{get:()=>{if(!t.content)return null;if(this.state.binary&&Array.isArray(t.content)&&!t.content.length)return[];let{bbox:e}=t;return t._contentWGS84===void 0&&Up(e)&&(t._contentWGS84=(this.state.binary?Ng(t.content):t.content).map(t=>w_(t,e,this.context.viewport))),t._contentWGS84}})})}};b_.layerName=`MVTLayer`,b_.defaultProps=y_;function x_(e,t){if(e.properties&&t)return e.properties[t];if(`id`in e)return e.id}function S_(e){return e.properties?.layerName||null}function C_(e){return e!=null&&e!==``}function w_(e,t,n){let r={...e,geometry:{type:e.geometry.type}};return Object.defineProperty(r.geometry,"coordinates",{get:()=>d_(e.geometry,t,n).coordinates}),r}var T_=`0123456789bcdefghjkmnpqrstuvwxyz`,E_={};for(let e=0;e<32;e++)E_[T_.charAt(e)]=e;var D_=-90,O_=90,k_=-180,A_=180;function j_(e){let t=!0,n=O_,r=D_,i=A_,a=k_,o,s=0;for(let c=0,l=e.length;c<l;c++){s=E_[e[c].toLowerCase()];for(let e=4;e>=0;e--){let c=s>>e&1;t?(o=(i+a)/2,c===1?a=o:i=o):(o=(n+r)/2,c===1?r=o:n=o),t=!t}}return[r,a,n,i]}function M_(e){let[t,n,r,i]=j_(e);return[i,r,i,t,n,t,n,r,i,r]}var N_={getGeohash:{type:`accessor`,value:e=>e.geohash}},P_=class extends Qi{indexToBounds(){let{data:e,getGeohash:t}=this.props;return{data:e,_normalize:!1,positionFormat:`XY`,getPolygon:(e,n)=>M_(t(e,n))}}};P_.layerName=`GeohashLayer`,P_.defaultProps=N_;export{Fl as A5Layer,P_ as GeohashLayer,Yf as GreatCircleLayer,Cm as H3ClusterLayer,xm as H3HexagonLayer,b_ as MVTLayer,_p as QuadkeyLayer,fp as S2Layer,yg as TerrainLayer,sg as Tile3DLayer,lm as TileLayer,_m as TripsLayer,Qi as _GeoCellLayer,vp as _Tile2DHeader,rm as _Tileset2D,qf as _WMSLayer,jp as _getURLFromTemplate};
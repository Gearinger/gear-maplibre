import{g as e}from"./dist-C5D-We5R.js";import{A as t,G as n,J as r,M as i,N as a,d as o,j as s,y as c}from"./mat3-C_EBwq0K.js";import{_ as l,f as u,g as d,h as f,l as p,m,p as h,s as g,t as _}from"./matrix4-CElYG7tD.js";var v=new e({id:`deck`}),y={};function b(e){y=e}function x(e,t,n,r){v.level>0&&y[e]&&y[e].call(null,t,n,r)}var S=`(?:var<\\s*(uniform|storage(?:\\s*,\\s*[A-Za-z_][A-Za-z0-9_]*)?)\\s*>|var)\\s+([A-Za-z_][A-Za-z0-9_]*)`,C=`\\s*`,w=[RegExp(`@binding\\(\\s*(auto|\\d+)\\s*\\)${C}@group\\(\\s*(\\d+)\\s*\\)${C}${S}`,`g`),RegExp(`@group\\(\\s*(\\d+)\\s*\\)${C}@binding\\(\\s*(auto|\\d+)\\s*\\)${C}${S}`,`g`)],T=[RegExp(`@binding\\(\\s*(auto|\\d+)\\s*\\)${C}@group\\(\\s*(\\d+)\\s*\\)${C}${S}`,`g`),RegExp(`@group\\(\\s*(\\d+)\\s*\\)${C}@binding\\(\\s*(auto|\\d+)\\s*\\)${C}${S}`,`g`)],ee=[RegExp(`@binding\\(\\s*(\\d+)\\s*\\)${C}@group\\(\\s*(\\d+)\\s*\\)${C}${S}`,`g`),RegExp(`@group\\(\\s*(\\d+)\\s*\\)${C}@binding\\(\\s*(\\d+)\\s*\\)${C}${S}`,`g`)],te=[RegExp(`@binding\\(\\s*(auto)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${S}`,`g`),RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto)\\s*\\)\\s*${S}`,`g`),RegExp(`@binding\\(\\s*(auto)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)(?:[\\s\\n\\r]*@[A-Za-z_][^\\n\\r]*)*[\\s\\n\\r]*${S}`,`g`),RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto)\\s*\\)(?:[\\s\\n\\r]*@[A-Za-z_][^\\n\\r]*)*[\\s\\n\\r]*${S}`,`g`)];function ne(e){let t=e.split(``),n=0,r=0,i=!1,a=!1,o=!1;for(;n<e.length;){let s=e[n],c=e[n+1];if(a)o?o=!1:s===`\\`?o=!0:s===`"`&&(a=!1),n++;else if(i)s===`
`||s===`\r`?i=!1:t[n]=` `,n++;else if(r>0){if(s===`/`&&c===`*`){t[n]=` `,t[n+1]=` `,r++,n+=2;continue}if(s===`*`&&c===`/`){t[n]=` `,t[n+1]=` `,r--,n+=2;continue}s!==`
`&&s!==`\r`&&(t[n]=` `),n++}else s===`"`?(a=!0,n++):s===`/`&&c===`/`?(t[n]=` `,t[n+1]=` `,i=!0,n+=2):s===`/`&&c===`*`?(t[n]=` `,t[n+1]=` `,r=1,n+=2):n++}return t.join(``)}function E(e,t){let n=ne(e),r=[];for(let i of t){i.lastIndex=0;let a;for(a=i.exec(n);a;){let o=i===t[0],s=a.index,c=a[0].length;r.push({match:e.slice(s,s+c),index:s,length:c,bindingToken:a[o?1:2],groupToken:a[o?2:1],accessDeclaration:a[3]?.trim(),name:a[4]}),a=i.exec(n)}}return r.sort((e,t)=>e.index-t.index)}function re(e,t,n){let r=E(e,t);if(!r.length)return e;let i=``,a=0;for(let t of r)i+=e.slice(a,t.index),i+=n(t),a=t.index+t.length;return i+=e.slice(a),i}function ie(e){return/@binding\(\s*auto\s*\)/.test(ne(e))}function ae(e,t){return E(e,t===w||t===T?te:t).find(e=>e.bindingToken===`auto`)}function oe(e,t={}){let n=se(e),r=ce(n);if(!r)return null;let i=le(n,r);if(!i)return null;let a=de(n,r,i);if(!a)return null;if(t.scanVertexAttributes===!1)return{attributes:[],bindings:a};let o=ue(n,r);if(!o)return null;let s=ge(n,r,i,o,t.vertexEntryPoint);return s?{attributes:s,bindings:a}:null}function se(e){let t=ne(e),n=/[A-Za-z_][A-Za-z0-9_]*|(?:0[xX][0-9A-Fa-f]+|\d+)|[@(){}<>\[\]:,;=]/g,r=[],i=n.exec(t);for(;i;)r.push({value:i[0],index:i.index}),i=n.exec(t);return r}function ce(e){let t=[],n=0;for(let r of e){if(r.value===`}`&&n===0)return null;t.push(n),r.value===`{`?n++:r.value===`}`&&n--}return n===0?t:null}function le(e,t){let n=new Map;for(let r=0;r<e.length;r++){if(t[r]!==0||e[r].value!==`alias`)continue;let i=e[r+1]?.value;if(!Me(i)||e[r+2]?.value!==`=`||n.has(i))return null;let a=Oe(e,t,r+3,`;`);if(a<0||a===r+3)return null;n.set(i,je(e.slice(r+3,a))),r=a}return n}function ue(e,t){let n=new Map;for(let r=0;r<e.length;r++){if(t[r]!==0||e[r].value!==`struct`)continue;let i=e[r+1]?.value,a=r+2;if(!Me(i)||n.has(i)||e[a]?.value!==`{`)return null;let o=Te(e,a,`{`,`}`);if(o<0)return null;n.set(i,e.slice(a+1,o)),r=o}return n}function de(e,t,n){let r=[],i=new Set,a=new Set;for(let o=0;o<e.length;o++){if(t[o]!==0||e[o].value!==`var`)continue;let s=ke(e,t,o),c=e.slice(s,o),l=Se(c,`group`),u=Se(c,`binding`);if(l===null||u===null||l===void 0!=(u===void 0))return null;if(l===void 0||u===void 0)continue;let d=o+1,f=[];if(e[d]?.value===`<`){let t=Te(e,d,`<`,`>`);if(t<0)return null;let n=Ee(e.slice(d+1,t),`,`);if(!n)return null;f=n.map(je),d=t+1}let p=e[d]?.value;if(!Me(p)||e[d+1]?.value!==`:`)return null;let m=Oe(e,t,d+2,`;`);if(m<0||m===d+2)return null;let h=ye(je(e.slice(d+2,m)),n);if(!h)return null;let g=fe({name:p,group:l,location:u,addressSpace:f,resourceType:h}),_=`${l}:${u}`;if(!g||i.has(_)||a.has(p))return null;r.push(g),i.add(_),a.add(p),o=m}return he(r),r.sort((e,t)=>e.group-t.group||e.location-t.location||e.name.localeCompare(t.name))}function fe(e){let{name:t,group:n,location:r,addressSpace:i,resourceType:a}=e,o={name:t,group:n,location:r};if(i[0]===`uniform`&&i.length===1)return{...o,type:`uniform`};if(i[0]===`storage`&&i.length<=2){let e=i[1]||`read`;return e===`read`?{...o,type:`read-only-storage`}:e===`read_write`?{...o,type:`storage`}:null}return i.length>0?null:a===`sampler`||a===`sampler_comparison`?{...o,type:`sampler`,...a===`sampler_comparison`?{samplerType:`comparison`}:{}}:a===`texture_external`?{...o,type:`external-texture`}:pe(o,a)||me(o,a)}function pe(e,t){let n=/^texture_storage_(1d|2d|2d_array|3d)<([A-Za-z0-9_]+),(read|write|read_write)>$/.exec(t);if(!n)return null;let r={read:`read-only`,write:`write-only`,read_write:`read-write`}[n[3]];return{...e,type:`storage`,format:n[2],access:r,viewDimension:we(n[1])}}function me(e,t){let n=/^texture_(multisampled_)?(1d|2d|2d_array|cube|cube_array|3d)<(f32|i32|u32)>$/.exec(t);if(n){if(n[1]&&n[2]!==`2d`)return null;let t={f32:`float`,i32:`sint`,u32:`uint`}[n[3]];return{...e,type:`texture`,viewDimension:we(n[2]),sampleType:t,multisampled:!!n[1]}}let r=/^texture_depth_(multisampled_)?(2d|2d_array|cube|cube_array)$/.exec(t);return!r||r[1]&&r[2]!==`2d`?null:{...e,type:`texture`,viewDimension:we(r[2]),sampleType:`depth`,multisampled:!!r[1]}}function he(e){for(let t of e){if(t.type!==`sampler`||t.samplerType||!t.name.endsWith(`Sampler`))continue;let n=t.name.slice(0,-7);e.find(e=>e.type===`texture`&&e.name===n&&e.group===t.group)?.sampleType===`depth`&&(t.samplerType=`non-filtering`)}}function ge(e,t,n,r,i){let a=_e(e,t);if(!a)return null;let o=a.filter(e=>e.vertex),s=i?o.find(e=>e.name===i):o.length===1?o[0]:void 0;if(!s)return o.length===0&&!i?[]:null;let c=Ee(s.parameters,`,`);if(!c)return null;let l=[],u=new Set,d=new Set,f=new Set;for(let e of c)if(e.length>0&&!ve({declaration:e,aliases:n,structures:r,attributes:l,attributeLocations:u,attributeNames:d,visitedStructures:f}))return null;return l.sort((e,t)=>e.location-t.location||e.name.localeCompare(t.name))}function _e(e,t){let n=[],r=new Set;for(let i=0;i<e.length;i++){if(t[i]!==0||e[i].value!==`fn`)continue;let a=e[i+1]?.value,o=i+2;if(!Me(a)||r.has(a)||e[o]?.value!==`(`)return null;let s=Te(e,o,`(`,`)`);if(s<0)return null;let c=ke(e,t,i);n.push({name:a,vertex:Ce(e.slice(c,i),`vertex`),parameters:e.slice(o+1,s)}),r.add(a),i=s}return n}function ve(e){let{declaration:t,aliases:n,structures:r,attributes:i,attributeLocations:a,attributeNames:o,visitedStructures:s}=e,c=De(t,`:`);if(c<1||c===t.length-1)return!1;let l=Ae(t.slice(0,c)),u=Se(t.slice(0,c),`location`),d=Ce(t.slice(0,c),`builtin`),f=ye(je(t.slice(c+1)),n);if(!l||u===null||!f||u!==void 0&&d)return!1;if(u!==void 0){let e=xe(f);return!e||a.has(u)||o.has(l)?!1:(i.push({name:l,location:u,type:e}),a.add(u),o.add(l),!0)}if(d)return!0;let p=r.get(f);if(!p||s.has(f))return!1;let m=Ee(p,`,`);if(!m)return!1;s.add(f);for(let t of m)if(t.length>0&&!ve({...e,declaration:t}))return!1;return s.delete(f),!0}function ye(e,t,n=new Set){let r=se(e),i=``;for(let e of r){let r=t.get(e.value);if(!r){i+=be(e.value);continue}if(n.has(e.value))return null;let a=new Set(n);a.add(e.value);let o=ye(r,t,a);if(!o)return null;i+=o}return i}function be(e){let t=/^(vec[234]|mat[234]x[234])([fiuh])$/.exec(e);if(!t)return e;let n={f:`f32`,i:`i32`,u:`u32`,h:`f16`}[t[2]];return`${t[1]}<${n}>`}function xe(e){return/^(?:i32|u32|f32|f16|vec[234]<(?:i32|u32|f32|f16)>)$/.test(e)?e:null}function Se(e,t){let n;for(let r=0;r<e.length;r++)if(e[r].value===`@`&&e[r+1]?.value===t){if(n!==void 0||e[r+2]?.value!==`(`||!/^\d+$/.test(e[r+3]?.value||``)||e[r+4]?.value!==`)`)return null;n=Number(e[r+3].value)}return n}function Ce(e,t){return e.some((n,r)=>n.value===`@`&&e[r+1]?.value===t)}function we(e){return e.replace(`_`,`-`)}function Te(e,t,n,r){let i=0;for(let a=t;a<e.length;a++)if(e[a].value===n)i++;else if(e[a].value===r&&--i===0)return a;return-1}function Ee(e,t){let n=[],r=0,i={"(":0,"<":0,"[":0,"{":0},a=Object.keys(i),o={")":`(`,">":`<`,"]":`[`,"}":`{`};for(let s=0;s<e.length;s++){let c=e[s].value;if(c===t&&a.every(e=>i[e]===0))n.push(e.slice(r,s)),r=s+1;else if(c in i)i[c]++;else if(c in o){let e=o[c];if(i[e]--,i[e]<0)return null}}return a.every(e=>i[e]===0)?(n.push(e.slice(r)),n):null}function De(e,t){let n=Ee(e,t);return n&&n.length===2?n[0].length:-1}function Oe(e,t,n,r){for(let i=n;i<e.length;i++)if(t[i]===0&&e[i].value===r)return i;return-1}function ke(e,t,n){for(let r=n-1;r>=0;r--)if(e[r].value===`;`&&t[r]===0||e[r].value===`}`&&t[r]===1)return r+1;return 0}function Ae(e){for(let t=e.length-1;t>=0;t--)if(Me(e[t].value))return e[t].value;return null}function je(e){return e.map(e=>e.value).join(``)}function Me(e){return!!(e&&/^[A-Za-z_][A-Za-z0-9_]*$/.test(e))}function D(e,t){if(!e){let e=Error(t||`shadertools: assertion failed.`);throw Error.captureStackTrace?.(e,D),e}}var Ne={number:{type:`number`,validate(e,t){return Number.isFinite(e)&&typeof t==`object`&&(t.max===void 0||e<=t.max)&&(t.min===void 0||e>=t.min)}},array:{type:`array`,validate(e,t){return Array.isArray(e)||ArrayBuffer.isView(e)}}};function Pe(e){let t={};for(let[n,r]of Object.entries(e))t[n]=Fe(r);return t}function Fe(e){let t=Ie(e);if(t!==`object`)return{value:e,...Ne[t],type:t};if(typeof e==`object`)return e?e.type===void 0?e.value===void 0?{type:`object`,value:e}:(t=Ie(e.value),{...e,...Ne[t],type:t}):{...e,...Ne[e.type],type:e.type}:{type:`object`,value:null};throw Error(`props`)}function Ie(e){return Array.isArray(e)||ArrayBuffer.isView(e)?`array`:typeof e}var Le={vertex:`#ifdef MODULE_LOGDEPTH
  logdepth_adjustPosition(gl_Position);
#endif
`,fragment:`#ifdef MODULE_MATERIAL
  fragColor = material_filterColor(fragColor);
#endif

#ifdef MODULE_LIGHTING
  fragColor = lighting_filterColor(fragColor);
#endif

#ifdef MODULE_FOG
  fragColor = fog_filterColor(fragColor);
#endif

#ifdef MODULE_PICKING
  fragColor = picking_filterHighlightColor(fragColor);
  fragColor = picking_filterPickingColor(fragColor);
#endif

#ifdef MODULE_LOGDEPTH
  logdepth_setFragDepth();
#endif
`},Re=/void\s+main\s*\([^)]*\)\s*\{\n?/,ze=/}\n?[^{}]*$/,Be=[],Ve=`__LUMA_INJECT_DECLARATIONS__`;function He(e){let t={vertex:{},fragment:{}};for(let n in e){let r=e[n],i=Ue(n);typeof r==`string`&&(r={order:0,injection:r}),t[i][n]=r}return t}function Ue(e){let t=e.slice(0,2);switch(t){case`vs`:return`vertex`;case`fs`:return`fragment`;default:throw Error(t)}}function We(e,t,n,r=!1,i=`glsl`,a={}){let o=t===`vertex`;for(let t in n){let r=n[t];r.sort((e,t)=>e.order-t.order),Be.length=r.length;for(let e=0,t=r.length;e<t;++e)Be[e]=r[e].injection;let s=`${Be.join(`
`)}\n`;switch(t){case`vs:#decl`:(i===`wgsl`||o)&&(e=e.replace(Ve,s));break;case`vs:#main-start`:(i===`wgsl`||o)&&(e=i===`wgsl`?Ge(e,`vertex`,s,`start`,a.vertex):e.replace(Re,e=>e+s));break;case`vs:#main-end`:(i===`wgsl`||o)&&(e=i===`wgsl`?Ge(e,`vertex`,s,`end`,a.vertex):e.replace(ze,e=>s+e));break;case`fs:#decl`:i!==`wgsl`&&o||(e=e.replace(Ve,s));break;case`fs:#main-start`:i!==`wgsl`&&o||(e=i===`wgsl`?Ge(e,`fragment`,s,`start`,a.fragment):e.replace(Re,e=>e+s));break;case`fs:#main-end`:i!==`wgsl`&&o||(e=i===`wgsl`?Ge(e,`fragment`,s,`end`,a.fragment):e.replace(ze,e=>s+e));break;default:e=e.replace(t,e=>e+s)}}return e=e.replace(Ve,``),r&&(e=e.replace(/\}\s*$/,e=>e+Le[t])),e}function Ge(e,t,n,r,i){let a=Ke(e,t,i);if(!a)return e;if(r===`start`){let t=a.openBraceIndex+1;return`${e.slice(0,t)}\n${n}${e.slice(t)}`}return`${e.slice(0,a.closeBraceIndex)}${n}${e.slice(a.closeBraceIndex)}`}function Ke(e,t,n){let r=t===`vertex`?`@vertex`:`@fragment`,i=e.indexOf(r);if(i<0)return null;let a=n?e.search(RegExp(`\\bfn\\s+${qe(n)}\\s*\\(`)):e.indexOf(`fn`,i);if(a<0)return null;let o=e.indexOf(`{`,a);if(o<0)return null;let s=0;for(let t=o;t<e.length;t++){let n=e[t];if(n===`{`)s++;else if(n===`}`&&(s--,s===0))return{openBraceIndex:o,closeBraceIndex:t}}return null}function qe(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function Je(e){e.map(e=>Ye(e))}function Ye(e){if(e.instance)return;Je(e.dependencies||[]);let{propTypes:t={},deprecations:n=[],inject:r={}}=e,i={normalizedInjections:He(r),parsedDeprecations:Ze(n)};t&&(i.propValidators=Pe(t)),e.instance=i;let a={};t&&(a=Object.entries(t).reduce((e,[t,n])=>{let r=n?.value;return r&&(e[t]=r),e},{})),e.defaultUniforms={...e.defaultUniforms,...a}}function Xe(e,t,n){e.deprecations?.forEach(e=>{e.regex?.test(t)&&(e.deprecated?n.deprecated(e.old,e.new)():n.removed(e.old,e.new)())})}function Ze(e){return e.forEach(e=>{switch(e.type){case`function`:e.regex=RegExp(`\\b${e.old}\\(`);break;default:e.regex=RegExp(`${e.type} ${e.old};`)}}),e}function Qe(e){Je(e);let t={},n={};$e({modules:e,level:0,moduleMap:t,moduleDepth:n});let r=Object.keys(n).sort((e,t)=>n[t]-n[e]).map(e=>t[e]);return Je(r),r}function $e(e){let{modules:t,level:n,moduleMap:r,moduleDepth:i}=e;if(n>=5)throw Error(`Possible loop in shader dependency graph`);for(let e of t)r[e.name]=e,(i[e.name]===void 0||i[e.name]<n)&&(i[e.name]=n);for(let e of t)e.dependencies&&$e({modules:e.dependencies,level:n+1,moduleMap:r,moduleDepth:i})}var et=new e({id:`luma.gl`}),tt={};function nt(e=`id`){return tt[e]=tt[e]||1,`${e}-${tt[e]++}`}var rt=`cpu-hotspot-profiler`,it=`GPU Resource Counts`,at=`Resource Counts`,ot=`GPU Time and Memory`,st=[`Resources`,`Buffers`,`Textures`,`Samplers`,`TextureViews`,`Framebuffers`,`QuerySets`,`Shaders`,`RenderPipelines`,`ComputePipelines`,`PipelineLayouts`,`VertexArrays`,`RenderPasss`,`RenderBundleEncoders`,`RenderBundles`,`ComputePasss`,`CommandEncoders`,`CommandBuffers`],ct=[`Resources`,`Buffers`,`Textures`,`Samplers`,`TextureViews`,`Framebuffers`,`QuerySets`,`Shaders`,`RenderPipelines`,`SharedRenderPipelines`,`ComputePipelines`,`PipelineLayouts`,`VertexArrays`,`RenderPasss`,`RenderBundleEncoders`,`RenderBundles`,`ComputePasss`,`CommandEncoders`,`CommandBuffers`],lt=st.flatMap(e=>[`${e} Created`,`${e} Active`]),ut=ct.flatMap(e=>[`${e} Created`,`${e} Active`]),dt=new WeakMap,ft=new WeakMap,O=class{static defaultProps={id:`undefined`,handle:void 0,_isHandleBorrowed:!1,userData:void 0};toString(){return`${this[Symbol.toStringTag]||this.constructor.name}:"${this.id}"`}toJSON(){return this.toString()}id;props;userData={};_device;destroyed=!1;allocatedBytes=0;allocatedBytesName=null;_attachedResources=new Set;get ownsHandle(){return(this.props.handle===void 0||this.props.handle===null)&&!this.isHandleBorrowed}get isHandleBorrowed(){return!!this.props._isHandleBorrowed}constructor(e,t,n){if(!e)throw Error(`no device`);this._device=e,this.props=pt(t,n);let r=this.props.id===`undefined`?nt(this[Symbol.toStringTag]):this.props.id;this.props.id=r,this.id=r,this.userData=this.props.userData||{},this.addStats()}destroy(){this.destroyed||this.destroyResource()}delete(){return this.destroy(),this}getProps(){return this.props}attachResource(e){this._attachedResources.add(e)}detachResource(e){this._attachedResources.delete(e)}destroyAttachedResource(e){this._attachedResources.delete(e)&&e.destroy()}destroyAttachedResources(){for(let e of this._attachedResources)e.destroy();this._attachedResources=new Set}destroyResource(){this.destroyed||=(this.destroyAttachedResources(),this.removeStats(),!0)}removeStats(){let e=k(this._device),t=e?A():0,n=[this._device.statsManager.getStats(it),this._device.statsManager.getStats(at)],r=ht(this._device);for(let e of n)mt(e,r);let i=this.getStatsName();for(let e of n)e.get(`Resources Active`).decrementCount(),e.get(`${i}s Active`).decrementCount();e&&(e.statsBookkeepingCalls=(e.statsBookkeepingCalls||0)+1,e.statsBookkeepingTimeMs=(e.statsBookkeepingTimeMs||0)+(A()-t))}trackAllocatedMemory(e,t=this.getStatsName()){let n=k(this._device),r=n?A():0,i=this._device.statsManager.getStats(ot);this.allocatedBytes>0&&this.allocatedBytesName&&(i.get(`GPU Memory`).subtractCount(this.allocatedBytes),i.get(`${this.allocatedBytesName} Memory`).subtractCount(this.allocatedBytes)),i.get(`GPU Memory`).addCount(e),i.get(`${t} Memory`).addCount(e),n&&(n.statsBookkeepingCalls=(n.statsBookkeepingCalls||0)+1,n.statsBookkeepingTimeMs=(n.statsBookkeepingTimeMs||0)+(A()-r)),this.allocatedBytes=e,this.allocatedBytesName=t}trackReferencedMemory(e,t=this.getStatsName()){this.trackAllocatedMemory(e,`External ${t}`)}trackDeallocatedMemory(e=this.getStatsName()){if(this.allocatedBytes===0){this.allocatedBytesName=null;return}let t=k(this._device),n=t?A():0,r=this._device.statsManager.getStats(ot);r.get(`GPU Memory`).subtractCount(this.allocatedBytes),r.get(`${this.allocatedBytesName||e} Memory`).subtractCount(this.allocatedBytes),t&&(t.statsBookkeepingCalls=(t.statsBookkeepingCalls||0)+1,t.statsBookkeepingTimeMs=(t.statsBookkeepingTimeMs||0)+(A()-n)),this.allocatedBytes=0,this.allocatedBytesName=null}trackDeallocatedReferencedMemory(e=this.getStatsName()){this.trackDeallocatedMemory(`Referenced ${e}`)}addStats(){let e=this.getStatsName(),t=k(this._device),n=t?A():0,r=[this._device.statsManager.getStats(it),this._device.statsManager.getStats(at)],i=ht(this._device);for(let e of r)mt(e,i);for(let t of r)t.get(`Resources Created`).incrementCount(),t.get(`Resources Active`).incrementCount(),t.get(`${e}s Created`).incrementCount(),t.get(`${e}s Active`).incrementCount();t&&(t.statsBookkeepingCalls=(t.statsBookkeepingCalls||0)+1,t.statsBookkeepingTimeMs=(t.statsBookkeepingTimeMs||0)+(A()-n)),gt(this._device,e)}getStatsName(){return _t(this)}};function pt(e,t){let n={...t};for(let t in e)e[t]!==void 0&&(n[t]=e[t]);return n}function mt(e,t){let n=e.stats,r=!1;for(let i of t)n[i]||(e.get(i),r=!0);let i=Object.keys(n).length,a=dt.get(e);if(!r&&a?.orderedStatNames===t&&a.statCount===i)return;let o={},s=ft.get(t);s||(s=new Set(t),ft.set(t,s));for(let e of t)n[e]&&(o[e]=n[e]);for(let[e,t]of Object.entries(n))s.has(e)||(o[e]=t);for(let e of Object.keys(n))delete n[e];Object.assign(n,o),dt.set(e,{orderedStatNames:t,statCount:i})}function ht(e){return e.type===`webgl`?ut:lt}function k(e){let t=e.userData[rt];return t?.enabled?t:null}function A(){return globalThis.performance?.now?.()??Date.now()}function gt(e,t){let n=k(e);if(n&&n.activeDefaultFramebufferAcquireDepth)switch(n.transientCanvasResourceCreates=(n.transientCanvasResourceCreates||0)+1,t){case`Texture`:n.transientCanvasTextureCreates=(n.transientCanvasTextureCreates||0)+1;break;case`TextureView`:n.transientCanvasTextureViewCreates=(n.transientCanvasTextureViewCreates||0)+1;break;case`Sampler`:n.transientCanvasSamplerCreates=(n.transientCanvasSamplerCreates||0)+1;break;case`Framebuffer`:n.transientCanvasFramebufferCreates=(n.transientCanvasFramebufferCreates||0)+1}}function _t(e){let t=Object.getPrototypeOf(e);for(;t;){let n=Object.getPrototypeOf(t);if(!n||n===O.prototype)return vt(t)||e[Symbol.toStringTag]||e.constructor.name;t=n}return e[Symbol.toStringTag]||e.constructor.name}function vt(e){let t=Object.getOwnPropertyDescriptor(e,Symbol.toStringTag);return typeof t?.get==`function`?t.get.call(e):typeof t?.value==`string`?t.value:null}var yt=class e extends O{static INDEX=16;static VERTEX=32;static UNIFORM=64;static STORAGE=128;static INDIRECT=256;static QUERY_RESOLVE=512;static MAP_READ=1;static MAP_WRITE=2;static COPY_SRC=4;static COPY_DST=8;get[Symbol.toStringTag](){return`Buffer`}usage;indexType;updateTimestamp;constructor(t,n){let r={...n};(n.usage||0)&e.INDEX&&!n.indexType&&(n.data instanceof Uint32Array?r.indexType=`uint32`:n.data instanceof Uint16Array?r.indexType=`uint16`:n.data instanceof Uint8Array&&(r.indexType=`uint8`)),delete r.data,super(t,r,e.defaultProps),this.usage=r.usage||0,this.indexType=r.indexType,this.updateTimestamp=t.incrementTimestamp()}clone(e){return this.device.createBuffer({...this.props,...e})}static DEBUG_DATA_MAX_LENGTH=32;debugData=new ArrayBuffer(0);_setDebugData(t,n,r){if(!this.device.props.debug)return;let i=null,a;ArrayBuffer.isView(t)?(i=t,a=t.buffer):a=t;let o=Math.min(t?t.byteLength:r,e.DEBUG_DATA_MAX_LENGTH);if(a===null)this.debugData=new ArrayBuffer(o);else{let e=Math.min(i?.byteOffset||0,a.byteLength),t=Math.max(0,a.byteLength-e),n=Math.min(o,t);this.debugData=new Uint8Array(a,e,n).slice().buffer}}static defaultProps={...O.defaultProps,handle:void 0,usage:0,byteLength:0,byteOffset:0,data:null,indexType:`uint16`,onMapped:void 0}},bt=globalThis.Float16Array;function xt(){return bt??Uint16Array}function St(e){return!!(bt&&e===bt)}function Ct(e){let t=e.includes(`norm`),n=!t&&!e.startsWith(`float`),r=e.startsWith(`s`),[i,a,o]=At[e]||[`uint8 `,`i32`,1];return{signedType:i,primitiveType:a,byteLength:o,normalized:t,integer:n,signed:r}}function wt(e){let t=e;switch(t){case`uint8`:return`unorm8`;case`sint8`:return`snorm8`;case`uint16`:return`unorm16`;case`sint16`:return`snorm16`;default:return t}}function Tt(e,t){switch(t){case 1:return e;case 2:return e+e%2;default:return e+(4-e%4)%4}}function Et(e){let t=ArrayBuffer.isView(e)?e.constructor:e;if(St(t))return`float16`;if(t===Uint8ClampedArray)return`uint8`;let n=Object.values(At).find(e=>t===e[4]);if(!n)throw Error(t.name);return n[0]}function Dt(e){return Et(e)}function Ot(e){if(e===`float16`)return xt();let t=At[e];if(!t)throw Error(e);let[,,,,n]=t;return n}function kt(e){return Ot(e)}var At={uint8:[`uint8`,`u32`,1,!1,Uint8Array],sint8:[`sint8`,`i32`,1,!1,Int8Array],unorm8:[`uint8`,`f32`,1,!0,Uint8Array],snorm8:[`sint8`,`f32`,1,!0,Int8Array],uint16:[`uint16`,`u32`,2,!1,Uint16Array],sint16:[`sint16`,`i32`,2,!1,Int16Array],unorm16:[`uint16`,`u32`,2,!0,Uint16Array],snorm16:[`sint16`,`i32`,2,!0,Int16Array],float16:[`float16`,`f16`,2,!1,Uint16Array],float32:[`float32`,`f32`,4,!1,Float32Array],uint32:[`uint32`,`u32`,4,!1,Uint32Array],sint32:[`sint32`,`i32`,4,!1,Int32Array]},jt=new class{getDataTypeInfo(e){return Ct(e)}getNormalizedDataType(e){return wt(e)}alignTo(e,t){return Tt(e,t)}getDataType(e){return Dt(e)}getTypedArrayConstructor(e){return kt(e)}},Mt=new class{getVertexFormatInfo(e){if(e===`unorm10-10-10-2`)return{type:`unorm8`,components:4,byteLength:4,integer:!1,signed:!1,normalized:!0};let t=e===`unorm8x4-bgra`?`unorm8x4`:e,n;t.endsWith(`-webgl`)&&(t=t.slice(0,-6),n=!0);let r=t.split(`x`);if(r.length>2)throw Error(`Unsupported vertex format: ${e}`);let[i,a]=r,o=i,s=Pt(e,a),c=Nt(e,o),l;try{l=n?Ft(e,o,s):this.makeVertexFormat(c.signedType,s,c.normalized)}catch{throw Error(`Unsupported vertex format: ${e}`)}if(l!==(n?e:t))throw Error(`Unsupported vertex format: ${e}`);let u={type:o,components:s,byteLength:c.byteLength*s,integer:c.integer,signed:c.signed,normalized:c.normalized};return n&&(u.webglOnly=!0),u}makeVertexFormat(e,t,n){let r=n?jt.getNormalizedDataType(e):e;switch(r){case`unorm8`:return t===1?`unorm8`:t===3?`unorm8x3-webgl`:`${r}x${t}`;case`snorm8`:return t===1?`snorm8`:t===3?`snorm8x3-webgl`:`${r}x${t}`;case`uint8`:case`sint8`:if(t===3)throw Error(`size: ${t}`);return t===1?r:`${r}x${t}`;case`uint16`:return t===1?`uint16`:t===3?`uint16x3-webgl`:`${r}x${t}`;case`sint16`:return t===1?`sint16`:t===3?`sint16x3-webgl`:`${r}x${t}`;case`unorm16`:return t===1?`unorm16`:t===3?`unorm16x3-webgl`:`${r}x${t}`;case`snorm16`:return t===1?`snorm16`:t===3?`snorm16x3-webgl`:`${r}x${t}`;case`float16`:if(t===3)throw Error(`size: ${t}`);return t===1?r:`${r}x${t}`;default:return t===1?r:`${r}x${t}`}}getVertexFormatFromAttribute(e,t,n){if(!t||t>4)throw Error(`size ${t}`);let r=t,i=jt.getDataType(e);return this.makeVertexFormat(i,r,n)}getCompatibleVertexFormat(e){let t;switch(e.primitiveType){case`f32`:t=`float32`;break;case`i32`:t=`sint32`;break;case`u32`:t=`uint32`;break;case`f16`:return e.components<=2?`float16x2`:`float16x4`}return e.components===1?t:`${t}x${e.components}`}};function Nt(e,t){try{return jt.getDataTypeInfo(t)}catch{throw Error(`Unsupported vertex format: ${e}`)}}function Pt(e,t){if(!t)return 1;let n=Number(t);if(n===2||n===3||n===4)return n;throw Error(`Unsupported vertex format: ${e}`)}function Ft(e,t,n){if(n!==3)throw Error(`Unsupported vertex format: ${e}`);switch(t){case`uint8`:case`sint8`:case`unorm8`:case`snorm8`:case`uint16`:case`sint16`:case`unorm16`:case`snorm16`:return`${t}x3-webgl`;default:throw Error(`Unsupported vertex format: ${e}`)}}var j=`texture-compression-bc`,M=`texture-compression-astc`,N=`texture-compression-etc2`,It=`texture-compression-etc1-webgl`,Lt=`texture-compression-pvrtc-webgl`,Rt=`texture-compression-atc-webgl`,zt=`float32-renderable-webgl`,Bt=`float16-renderable-webgl`,Vt=`rgb9e5ufloat-renderable-webgl`,Ht=`snorm8-renderable-webgl`,P=`norm16-webgl`,Ut=`norm16-renderable-webgl`,Wt=`snorm16-renderable-webgl`,Gt=`float32-filterable`,Kt=`float16-filterable-webgl`,F=3,qt=5,Jt=15,I=19,Yt=31,L=992,Xt=15360;function Zt(e){let t=tn[e];if(!t)throw Error(`Unsupported texture format ${e}`);return t}function Qt(){return tn}var $t={r8unorm:{webgpu:527},rg8unorm:{webgpu:527},"rgb8unorm-webgl":{},rgba8unorm:{webgpu:Yt},"rgba8unorm-srgb":{webgpu:Jt},r8snorm:{render:Ht,webgpu:837},rg8snorm:{render:Ht,webgpu:837},"rgb8snorm-webgl":{},rgba8snorm:{render:Ht,webgpu:341},r8uint:{webgpu:515},rg8uint:{webgpu:515},rgba8uint:{webgpu:I},r8sint:{webgpu:515},rg8sint:{webgpu:515},rgba8sint:{webgpu:I},bgra8unorm:{webgpu:Jt},"bgra8unorm-srgb":{webgpu:Xt},r16unorm:{f:P,render:Ut,webgpu:L},rg16unorm:{f:P,render:Ut,webgpu:L},"rgb16unorm-webgl":{f:P,render:!1},rgba16unorm:{f:P,render:Ut,webgpu:L},r16snorm:{f:P,render:Wt,webgpu:L},rg16snorm:{f:P,render:Wt,webgpu:L},"rgb16snorm-webgl":{f:P,render:!1},rgba16snorm:{f:P,render:Wt,webgpu:L},r16uint:{webgpu:515},rg16uint:{webgpu:515},rgba16uint:{webgpu:I},r16sint:{webgpu:515},rg16sint:{webgpu:515},rgba16sint:{webgpu:I},r16float:{render:Bt,filter:`float16-filterable-webgl`,webgpu:527},rg16float:{render:Bt,filter:Kt,webgpu:527},rgba16float:{render:Bt,filter:Kt,webgpu:Yt},r32uint:{webgpu:I},rg32uint:{webgpu:16387},rgba32uint:{webgpu:I},r32sint:{webgpu:I},rg32sint:{webgpu:16387},rgba32sint:{webgpu:I},r32float:{render:zt,filter:Gt,webgpu:I},rg32float:{render:!1,filter:Gt,webgpu:16387},"rgb32float-webgl":{render:zt,filter:Gt},rgba32float:{render:zt,filter:Gt,webgpu:I},"rgba4unorm-webgl":{channels:`rgba`,bitsPerChannel:[4,4,4,4],packed:!0},"rgb565unorm-webgl":{channels:`rgb`,bitsPerChannel:[5,6,5,0],packed:!0},"rgb5a1unorm-webgl":{channels:`rgba`,bitsPerChannel:[5,5,5,1],packed:!0},rgb9e5ufloat:{channels:`rgb`,packed:!0,render:Vt,webgpu:qt},rg11b10ufloat:{channels:`rgb`,bitsPerChannel:[11,11,10,0],packed:!0,p:1,render:zt,webgpu:517},rgb10a2unorm:{channels:`rgba`,bitsPerChannel:[10,10,10,2],packed:!0,p:1,webgpu:527},rgb10a2uint:{channels:`rgba`,bitsPerChannel:[10,10,10,2],packed:!0,p:1,webgpu:515},stencil8:{attachment:`stencil`,bitsPerChannel:[8,0,0,0],dataType:`uint8`,webgpu:F},depth16unorm:{attachment:`depth`,bitsPerChannel:[16,0,0,0],dataType:`uint16`,webgpu:F},depth24plus:{attachment:`depth`,bitsPerChannel:[24,0,0,0],dataType:`uint32`,webgpu:F},depth32float:{attachment:`depth`,bitsPerChannel:[32,0,0,0],dataType:`float32`,webgpu:F},"depth24plus-stencil8":{attachment:`depth-stencil`,bitsPerChannel:[24,8,0,0],packed:!0,webgpu:F},"depth32float-stencil8":{attachment:`depth-stencil`,bitsPerChannel:[32,8,0,0],packed:!0,f:`depth32float-stencil8`,webgpu:F}},en={"bc1-rgb-unorm-webgl":{f:j},"bc1-rgb-unorm-srgb-webgl":{f:j},"bc1-rgba-unorm":{f:j},"bc1-rgba-unorm-srgb":{f:j},"bc2-rgba-unorm":{f:j},"bc2-rgba-unorm-srgb":{f:j},"bc3-rgba-unorm":{f:j},"bc3-rgba-unorm-srgb":{f:j},"bc4-r-unorm":{f:j},"bc4-r-snorm":{f:j},"bc5-rg-unorm":{f:j},"bc5-rg-snorm":{f:j},"bc6h-rgb-ufloat":{f:j},"bc6h-rgb-float":{f:j},"bc7-rgba-unorm":{f:j},"bc7-rgba-unorm-srgb":{f:j},"etc2-rgb8unorm":{f:N},"etc2-rgb8unorm-srgb":{f:N},"etc2-rgb8a1unorm":{f:N},"etc2-rgb8a1unorm-srgb":{f:N},"etc2-rgba8unorm":{f:N},"etc2-rgba8unorm-srgb":{f:N},"eac-r11unorm":{f:N},"eac-r11snorm":{f:N},"eac-rg11unorm":{f:N},"eac-rg11snorm":{f:N},"astc-4x4-unorm":{f:M},"astc-4x4-unorm-srgb":{f:M},"astc-5x4-unorm":{f:M},"astc-5x4-unorm-srgb":{f:M},"astc-5x5-unorm":{f:M},"astc-5x5-unorm-srgb":{f:M},"astc-6x5-unorm":{f:M},"astc-6x5-unorm-srgb":{f:M},"astc-6x6-unorm":{f:M},"astc-6x6-unorm-srgb":{f:M},"astc-8x5-unorm":{f:M},"astc-8x5-unorm-srgb":{f:M},"astc-8x6-unorm":{f:M},"astc-8x6-unorm-srgb":{f:M},"astc-8x8-unorm":{f:M},"astc-8x8-unorm-srgb":{f:M},"astc-10x5-unorm":{f:M},"astc-10x5-unorm-srgb":{f:M},"astc-10x6-unorm":{f:M},"astc-10x6-unorm-srgb":{f:M},"astc-10x8-unorm":{f:M},"astc-10x8-unorm-srgb":{f:M},"astc-10x10-unorm":{f:M},"astc-10x10-unorm-srgb":{f:M},"astc-12x10-unorm":{f:M},"astc-12x10-unorm-srgb":{f:M},"astc-12x12-unorm":{f:M},"astc-12x12-unorm-srgb":{f:M},"pvrtc-rgb4unorm-webgl":{f:Lt},"pvrtc-rgba4unorm-webgl":{f:Lt},"pvrtc-rgb2unorm-webgl":{f:Lt},"pvrtc-rgba2unorm-webgl":{f:Lt},"etc1-rbg-unorm-webgl":{f:It},"atc-rgb-unorm-webgl":{f:Rt},"atc-rgba-unorm-webgl":{f:Rt},"atc-rgbai-unorm-webgl":{f:Rt}},tn={...$t,...en},nn=/^(r|rg|rgb|rgba|bgra)([0-9]*)([a-z]*)(-srgb)?(-webgl)?$/,rn=[`rgb`,`rgba`,`bgra`],an=[`depth`,`stencil`],on=5,sn=[`bc1`,`bc2`,`bc3`,`bc4`,`bc5`,`bc6`,`bc7`,`etc1`,`etc2`,`eac`,`atc`,`astc`,`pvrtc`],R=new class{isColor(e){return rn.some(t=>e.startsWith(t))}isDepthStencil(e){return an.some(t=>e.startsWith(t))}isCompressed(e){return sn.some(t=>e.startsWith(t))}getInfo(e){return un(e)}getCapabilities(e){return ln(e)}getWebGPUCapabilities(e){let t=Zt(e);return t.webgpu===void 0?this.isCompressed(e)&&!e.endsWith(`-webgl`)?on:0:t.webgpu}computeMemoryLayout(e){return cn(e)}};function cn({format:e,width:t,height:n,depth:r,byteAlignment:i}){let{bytesPerPixel:a,bytesPerBlock:o=a,blockWidth:s=1,blockHeight:c=1,compressed:l=!1}=R.getInfo(e),u=l?Math.ceil(t/s):t,d=l?Math.ceil(n/c):n,f=u*o,p=Math.ceil(f/i)*i,m=d,h=p*m*r;return{bytesPerPixel:a,bytesPerRow:p,rowsPerImage:m,depthOrArrayLayers:r,bytesPerImage:p*m,byteLength:h}}function ln(e){let t=Zt(e),n={format:e,create:t.f??!0,render:t.render??!0,filter:t.filter??!0,blend:t.blend??!0,store:t.store??!0},r=un(e),i=e.startsWith(`depth`)||e.startsWith(`stencil`),a=r?.signed,o=r?.integer,s=r?.webgl,c=!!r?.compressed;return n.render&&=!i&&!c,n.filter&&=!i&&!a&&!o&&!s,n}function un(e){let t=dn(e);if(R.isCompressed(e)){t.channels=`rgb`,t.components=3,t.bytesPerPixel=1,t.srgb=!1,t.compressed=!0,t.bytesPerBlock=pn(e);let n=fn(e);n&&(t.blockWidth=n.blockWidth,t.blockHeight=n.blockHeight)}let n=t.packed?null:nn.exec(e);if(n){let[,r,i,a,o,s]=n,c=`${a}${i}`,l=jt.getDataTypeInfo(c),u=l.byteLength*8,d=r?.length??1,f=[u,d>=2?u:0,d>=3?u:0,d>=4?u:0];t={format:e,attachment:t.attachment,dataType:l.signedType,components:d,channels:r,integer:l.integer,signed:l.signed,normalized:l.normalized,bitsPerChannel:f,bytesPerPixel:l.byteLength*d,packed:t.packed,srgb:t.srgb},s===`-webgl`&&(t.webgl=!0),o===`-srgb`&&(t.srgb=!0)}return e.endsWith(`-webgl`)&&(t.webgl=!0),e.endsWith(`-srgb`)&&(t.srgb=!0),t}function dn(e){let t={...Zt(e)},n=t.bytesPerPixel||1,r=t.bitsPerChannel||[8,8,8,8];return delete t.bitsPerChannel,delete t.bytesPerPixel,delete t.f,delete t.render,delete t.filter,delete t.blend,delete t.store,delete t.webgpu,{...t,format:e,attachment:t.attachment||`color`,channels:t.channels||`r`,components:t.components||t.channels?.length||1,bytesPerPixel:n,bitsPerChannel:r,dataType:t.dataType||`uint8`,srgb:t.srgb??!1,packed:t.packed??!1,webgl:t.webgl??!1,integer:t.integer??!1,signed:t.signed??!1,normalized:t.normalized??!1,compressed:t.compressed??!1}}function fn(e){let t=/.*-(\d+)x(\d+)-.*/.exec(e);if(t){let[,e,n]=t;return{blockWidth:Number(e),blockHeight:Number(n)}}return e.startsWith(`bc`)||e.startsWith(`etc1`)||e.startsWith(`etc2`)||e.startsWith(`eac`)||e.startsWith(`atc`)||e.startsWith(`pvrtc-rgb4`)||e.startsWith(`pvrtc-rgba4`)?{blockWidth:4,blockHeight:4}:e.startsWith(`pvrtc-rgb2`)||e.startsWith(`pvrtc-rgba2`)?{blockWidth:8,blockHeight:4}:null}function pn(e){return e.startsWith(`bc1`)||e.startsWith(`bc4`)||e.startsWith(`etc1`)||e.startsWith(`etc2-rgb8`)||e.startsWith(`etc2-rgb8a1`)||e.startsWith(`eac-r11`)||e===`atc-rgb-unorm-webgl`?8:e.startsWith(`bc2`)||e.startsWith(`bc3`)||e.startsWith(`bc5`)||e.startsWith(`bc6h`)||e.startsWith(`bc7`)||e.startsWith(`etc2-rgba8`)||e.startsWith(`eac-rg11`)||e.startsWith(`astc`)||e===`atc-rgba-unorm-webgl`||e===`atc-rgbai-unorm-webgl`?16:e.startsWith(`pvrtc`)?8:16}var mn=class e extends O{static defaultProps={...O.defaultProps,type:`color-sampler`,addressModeU:`clamp-to-edge`,addressModeV:`clamp-to-edge`,addressModeW:`clamp-to-edge`,magFilter:`nearest`,minFilter:`nearest`,mipmapFilter:`none`,lodMinClamp:0,lodMaxClamp:32,compare:`less-equal`,maxAnisotropy:1};get[Symbol.toStringTag](){return`Sampler`}constructor(t,n){n=e.normalizeProps(t,n),super(t,n,e.defaultProps)}static normalizeProps(e,t){return t}},hn={"1d":`1d`,"2d":`2d`,"2d-array":`2d`,cube:`2d`,"cube-array":`2d`,"3d":`3d`},gn=class e extends O{static SAMPLE=4;static STORAGE=8;static RENDER=16;static COPY_SRC=1;static COPY_DST=2;static TEXTURE=4;static RENDER_ATTACHMENT=16;dimension;baseDimension;format;width;height;depth;mipLevels;samples;byteAlignment;ready=Promise.resolve(this);isReady=!0;updateTimestamp;get[Symbol.toStringTag](){return`Texture`}toString(){return`Texture(${this.id},${this.format},${this.width}x${this.height})`}constructor(t,n,r){if(n=e.normalizeProps(t,n),super(t,n,e.defaultProps),this.dimension=this.props.dimension,this.baseDimension=hn[this.dimension],this.format=this.props.format,this.width=this.props.width,this.height=this.props.height,this.depth=this.props.depth,this.mipLevels=this.props.mipLevels,this.samples=this.props.samples||1,this.dimension===`cube`&&(this.depth=6),this.props.width===void 0||this.props.height===void 0){if(t.isExternalImage(n.data)){let e=t.getExternalImageSize(n.data);this.width=e?.width||1,this.height=e?.height||1}else this.width=1,this.height=1,(this.props.width===void 0||this.props.height===void 0)&&et.warn(`${this} created with undefined width or height. This is deprecated. Use DynamicTexture instead.`)()}this.byteAlignment=r?.byteAlignment||1,this.updateTimestamp=t.incrementTimestamp()}clone(e){return this.device.createTexture({...this.props,...e})}setSampler(e){this.sampler=e instanceof mn?e:this.device.createSampler(e)}copyImageData(e){let{data:t,depth:n,...r}=e;this.writeData(t,{...r,depthOrArrayLayers:r.depthOrArrayLayers??n})}computeMemoryLayout(e={}){let{width:t=this.width,height:n=this.height,depthOrArrayLayers:r=this.depth}=this._normalizeTextureReadOptions(e),{format:i,byteAlignment:a}=this;return R.computeMemoryLayout({format:i,width:t,height:n,depth:r,byteAlignment:a})}readBuffer(e,t){throw Error(`readBuffer not implemented`)}readDataAsync(e){throw Error(`readBuffer not implemented`)}writeBuffer(e,t){throw Error(`readBuffer not implemented`)}writeData(e,t){throw Error(`readBuffer not implemented`)}readDataSyncWebGL(e){throw Error(`readDataSyncWebGL not available`)}generateMipmapsWebGL(){throw Error(`generateMipmapsWebGL not available`)}static normalizeProps(e,t){let n={...t},{width:r,height:i}=n;return typeof r==`number`&&(n.width=Math.max(1,Math.ceil(r))),typeof i==`number`&&(n.height=Math.max(1,Math.ceil(i))),n}_initializeData(e){this.device.isExternalImage(e)?this.copyExternalImage({image:e,width:this.width,height:this.height,depth:this.depth,mipLevel:0,x:0,y:0,z:0,aspect:`all`,colorSpace:`srgb`,premultipliedAlpha:!1,flipY:!1}):e&&this.copyImageData({data:e,mipLevel:0,x:0,y:0,z:0,aspect:`all`})}_normalizeCopyImageDataOptions(e){let{data:t,depth:n,...r}=e,i=this._normalizeTextureWriteOptions({...r,depthOrArrayLayers:r.depthOrArrayLayers??n});return{data:t,depth:i.depthOrArrayLayers,...i}}_normalizeCopyExternalImageOptions(t){let n=e._omitUndefined(t),r=n.mipLevel??0,i=this._getMipLevelSize(r),a=this.device.getExternalImageSize(t.image),o={...e.defaultCopyExternalImageOptions,...i,...a,...n};return o.width=Math.min(o.width,i.width-o.x),o.height=Math.min(o.height,i.height-o.y),o.depth=Math.min(o.depth,i.depthOrArrayLayers-o.z),o}_normalizeCopyElementImageOptions(t){let n=e._omitUndefined(t),r=n.mipLevel??0,i=this._getMipLevelSize(r),a={...e.defaultCopyElementImageOptions,...i,...n};return a.width=Math.min(a.width,i.width-a.x),a.height=Math.min(a.height,i.height-a.y),a.depth=Math.min(a.depth,i.depthOrArrayLayers-a.z),a}_normalizeTextureReadOptions(t){let n=e._omitUndefined(t),r=n.mipLevel??0,i=this._getMipLevelSize(r),a={...e.defaultTextureReadOptions,...i,...n};return a.width=Math.min(a.width,i.width-a.x),a.height=Math.min(a.height,i.height-a.y),a.depthOrArrayLayers=Math.min(a.depthOrArrayLayers,i.depthOrArrayLayers-a.z),a}_getSupportedColorReadOptions(e){let t=this._normalizeTextureReadOptions(e),n=R.getInfo(this.format);switch(this._validateColorReadAspect(t),this._validateColorReadFormat(n),this.dimension){case`2d`:case`cube`:case`cube-array`:case`2d-array`:case`3d`:return t;default:throw Error(`${this} color readback does not support ${this.dimension} textures`)}}_validateColorReadAspect(e){if(e.aspect!==`all`)throw Error(`${this} color readback only supports aspect 'all'`)}_validateColorReadFormat(e){if(e.compressed)throw Error(`${this} color readback does not support compressed formats (${this.format})`);switch(e.attachment){case`color`:return;case`depth`:throw Error(`${this} color readback does not support depth formats (${this.format})`);case`stencil`:throw Error(`${this} color readback does not support stencil formats (${this.format})`);case`depth-stencil`:throw Error(`${this} color readback does not support depth-stencil formats (${this.format})`);default:throw Error(`${this} color readback does not support format ${this.format}`)}}_normalizeTextureWriteOptions(t){let n=e._omitUndefined(t),r=n.mipLevel??0,i=this._getMipLevelSize(r),a={...e.defaultTextureWriteOptions,...i,...n};a.width=Math.min(a.width,i.width-a.x),a.height=Math.min(a.height,i.height-a.y),a.depthOrArrayLayers=Math.min(a.depthOrArrayLayers,i.depthOrArrayLayers-a.z);let o=R.computeMemoryLayout({format:this.format,width:a.width,height:a.height,depth:a.depthOrArrayLayers,byteAlignment:this.byteAlignment}),s=o.bytesPerPixel*a.width;if(a.bytesPerRow=n.bytesPerRow??o.bytesPerRow,a.rowsPerImage=n.rowsPerImage??a.height,a.bytesPerRow<s)throw Error(`bytesPerRow (${a.bytesPerRow}) must be at least ${s} for ${this.format}`);if(a.rowsPerImage<a.height)throw Error(`rowsPerImage (${a.rowsPerImage}) must be at least ${a.height} for ${this.format}`);let c=this.device.getTextureFormatInfo(this.format).bytesPerPixel;if(c&&a.bytesPerRow%c!==0)throw Error(`bytesPerRow (${a.bytesPerRow}) must be a multiple of bytesPerPixel (${c}) for ${this.format}`);return a}_getMipLevelSize(e){return{width:Math.max(1,this.width>>e),height:this.baseDimension===`1d`?1:Math.max(1,this.height>>e),depthOrArrayLayers:this.dimension===`3d`?Math.max(1,this.depth>>e):this.depth}}getAllocatedByteLength(){let e=0;for(let t=0;t<this.mipLevels;t++){let{width:n,height:r,depthOrArrayLayers:i}=this._getMipLevelSize(t);e+=R.computeMemoryLayout({format:this.format,width:n,height:r,depth:i,byteAlignment:1}).byteLength}return e*this.samples}static _omitUndefined(e){return Object.fromEntries(Object.entries(e).filter(([,e])=>e!==void 0))}static defaultProps={...O.defaultProps,data:null,dimension:`2d`,format:`rgba8unorm`,usage:e.SAMPLE|e.RENDER|e.COPY_DST,width:void 0,height:void 0,depth:1,mipLevels:1,samples:void 0,sampler:{},view:void 0};static defaultCopyDataOptions={data:void 0,byteOffset:0,bytesPerRow:void 0,rowsPerImage:void 0,width:void 0,height:void 0,depthOrArrayLayers:void 0,depth:1,mipLevel:0,x:0,y:0,z:0,aspect:`all`};static defaultCopyExternalImageOptions={image:void 0,sourceX:0,sourceY:0,width:void 0,height:void 0,depth:1,mipLevel:0,x:0,y:0,z:0,aspect:`all`,colorSpace:`srgb`,premultipliedAlpha:!1,flipY:!1};static defaultCopyElementImageOptions={element:void 0,width:void 0,height:void 0,sourceX:0,sourceY:0,sourceWidth:void 0,sourceHeight:void 0,depth:1,mipLevel:0,x:0,y:0,z:0,aspect:`all`,colorSpace:`srgb`,premultipliedAlpha:!1,flipY:!1};static defaultTextureReadOptions={x:0,y:0,z:0,width:void 0,height:void 0,depthOrArrayLayers:1,mipLevel:0,aspect:`all`};static defaultTextureWriteOptions={byteOffset:0,bytesPerRow:void 0,rowsPerImage:void 0,x:0,y:0,z:0,width:void 0,height:void 0,depthOrArrayLayers:1,mipLevel:0,aspect:`all`}};function _n(e){let t=En[Sn(e)];if(!t)throw Error(`Unsupported variable shader type: ${e}`);return t}function vn(e){let t=Tn[xn(e)];if(!t)throw Error(`Unsupported attribute shader type: ${e}`);let[n,r]=t,i=n===`i32`||n===`u32`,a=n!==`u32`;return{primitiveType:n,components:r,byteLength:wn[n]*r,integer:i,signed:a}}var yn=class{getVariableShaderTypeInfo(e){return _n(e)}getAttributeShaderTypeInfo(e){return vn(e)}makeShaderAttributeType(e,t){return bn(e,t)}resolveAttributeShaderTypeAlias(e){return xn(e)}resolveVariableShaderTypeAlias(e){return Sn(e)}};function bn(e,t){return t===1?e:`vec${t}<${e}>`}function xn(e){return Dn[e]||e}function Sn(e){return On[e]||e}var Cn=new yn,wn={f32:4,f16:2,i32:4,u32:4},Tn={f32:[`f32`,1],"vec2<f32>":[`f32`,2],"vec3<f32>":[`f32`,3],"vec4<f32>":[`f32`,4],f16:[`f16`,1],"vec2<f16>":[`f16`,2],"vec3<f16>":[`f16`,3],"vec4<f16>":[`f16`,4],i32:[`i32`,1],"vec2<i32>":[`i32`,2],"vec3<i32>":[`i32`,3],"vec4<i32>":[`i32`,4],u32:[`u32`,1],"vec2<u32>":[`u32`,2],"vec3<u32>":[`u32`,3],"vec4<u32>":[`u32`,4]},En={f32:{type:`f32`,components:1},f16:{type:`f16`,components:1},i32:{type:`i32`,components:1},u32:{type:`u32`,components:1},"vec2<f32>":{type:`f32`,components:2},"vec3<f32>":{type:`f32`,components:3},"vec4<f32>":{type:`f32`,components:4},"vec2<f16>":{type:`f16`,components:2},"vec3<f16>":{type:`f16`,components:3},"vec4<f16>":{type:`f16`,components:4},"vec2<i32>":{type:`i32`,components:2},"vec3<i32>":{type:`i32`,components:3},"vec4<i32>":{type:`i32`,components:4},"vec2<u32>":{type:`u32`,components:2},"vec3<u32>":{type:`u32`,components:3},"vec4<u32>":{type:`u32`,components:4},"mat2x2<f32>":{type:`f32`,components:4},"mat2x3<f32>":{type:`f32`,components:6},"mat2x4<f32>":{type:`f32`,components:8},"mat3x2<f32>":{type:`f32`,components:6},"mat3x3<f32>":{type:`f32`,components:9},"mat3x4<f32>":{type:`f32`,components:12},"mat4x2<f32>":{type:`f32`,components:8},"mat4x3<f32>":{type:`f32`,components:12},"mat4x4<f32>":{type:`f32`,components:16},"mat2x2<f16>":{type:`f16`,components:4},"mat2x3<f16>":{type:`f16`,components:6},"mat2x4<f16>":{type:`f16`,components:8},"mat3x2<f16>":{type:`f16`,components:6},"mat3x3<f16>":{type:`f16`,components:9},"mat3x4<f16>":{type:`f16`,components:12},"mat4x2<f16>":{type:`f16`,components:8},"mat4x3<f16>":{type:`f16`,components:12},"mat4x4<f16>":{type:`f16`,components:16},"mat2x2<i32>":{type:`i32`,components:4},"mat2x3<i32>":{type:`i32`,components:6},"mat2x4<i32>":{type:`i32`,components:8},"mat3x2<i32>":{type:`i32`,components:6},"mat3x3<i32>":{type:`i32`,components:9},"mat3x4<i32>":{type:`i32`,components:12},"mat4x2<i32>":{type:`i32`,components:8},"mat4x3<i32>":{type:`i32`,components:12},"mat4x4<i32>":{type:`i32`,components:16},"mat2x2<u32>":{type:`u32`,components:4},"mat2x3<u32>":{type:`u32`,components:6},"mat2x4<u32>":{type:`u32`,components:8},"mat3x2<u32>":{type:`u32`,components:6},"mat3x3<u32>":{type:`u32`,components:9},"mat3x4<u32>":{type:`u32`,components:12},"mat4x2<u32>":{type:`u32`,components:8},"mat4x3<u32>":{type:`u32`,components:12},"mat4x4<u32>":{type:`u32`,components:16}},Dn={vec2i:`vec2<i32>`,vec3i:`vec3<i32>`,vec4i:`vec4<i32>`,vec2u:`vec2<u32>`,vec3u:`vec3<u32>`,vec4u:`vec4<u32>`,vec2f:`vec2<f32>`,vec3f:`vec3<f32>`,vec4f:`vec4<f32>`,vec2h:`vec2<f16>`,vec3h:`vec3<f16>`,vec4h:`vec4<f16>`},On={vec2i:`vec2<i32>`,vec3i:`vec3<i32>`,vec4i:`vec4<i32>`,vec2u:`vec2<u32>`,vec3u:`vec3<u32>`,vec4u:`vec4<u32>`,vec2f:`vec2<f32>`,vec3f:`vec3<f32>`,vec4f:`vec4<f32>`,vec2h:`vec2<f16>`,vec3h:`vec3<f16>`,vec4h:`vec4<f16>`,mat2x2f:`mat2x2<f32>`,mat2x3f:`mat2x3<f32>`,mat2x4f:`mat2x4<f32>`,mat3x2f:`mat3x2<f32>`,mat3x3f:`mat3x3<f32>`,mat3x4f:`mat3x4<f32>`,mat4x2f:`mat4x2<f32>`,mat4x3f:`mat4x3<f32>`,mat4x4f:`mat4x4<f32>`,mat2x2i:`mat2x2<i32>`,mat2x3i:`mat2x3<i32>`,mat2x4i:`mat2x4<i32>`,mat3x2i:`mat3x2<i32>`,mat3x3i:`mat3x3<i32>`,mat3x4i:`mat3x4<i32>`,mat4x2i:`mat4x2<i32>`,mat4x3i:`mat4x3<i32>`,mat4x4i:`mat4x4<i32>`,mat2x2u:`mat2x2<u32>`,mat2x3u:`mat2x3<u32>`,mat2x4u:`mat2x4<u32>`,mat3x2u:`mat3x2<u32>`,mat3x3u:`mat3x3<u32>`,mat3x4u:`mat3x4<u32>`,mat4x2u:`mat4x2<u32>`,mat4x3u:`mat4x3<u32>`,mat4x4u:`mat4x4<u32>`,mat2x2h:`mat2x2<f16>`,mat2x3h:`mat2x3<f16>`,mat2x4h:`mat2x4<f16>`,mat3x2h:`mat3x2<f16>`,mat3x3h:`mat3x3<f16>`,mat3x4h:`mat3x4<f16>`,mat4x2h:`mat4x2<f16>`,mat4x3h:`mat4x3<f16>`,mat4x4h:`mat4x4<f16>`},kn=/^(?:uniform\s+)?(?:(?:lowp|mediump|highp)\s+)?[A-Za-z0-9_]+(?:<[^>]+>)?\s+([A-Za-z0-9_]+)(?:\s*\[[^\]]+\])?\s*;/,An=/((?:layout\s*\([^)]*\)\s*)*)uniform\s+([A-Za-z_][A-Za-z0-9_]*)\s*\{([\s\S]*?)\}\s*([A-Za-z_][A-Za-z0-9_]*)?\s*;/g;function jn(e){return`${e.name}Uniforms`}function Mn(e,t){let n=t===`wgsl`?e.source:t===`vertex`?e.vs:e.fs;if(!n)return null;let r=jn(e);return Ln(n,t===`wgsl`?`wgsl`:`glsl`,r)}function Nn(e,t){let n=Object.keys(e.uniformTypes||{});if(!n.length)return null;let r=Mn(e,t);return r?{moduleName:e.name,uniformBlockName:jn(e),stage:t,expectedUniformNames:n,actualUniformNames:r,matches:Bn(n,r)}:null}function Pn(e,t,n={}){let r=Nn(e,t);if(!r||r.matches)return r;let i=Vn(r);return n.log?.error?.(i,r)(),n.throwOnError!==!1&&D(!1,i),r}function Fn(e){let t=[],n=Hn(e);for(let e of n.matchAll(An)){let n=e[1]?.trim()||null;t.push({blockName:e[2],body:e[3],instanceName:e[4]||null,layoutQualifier:n,hasLayoutQualifier:!!n,isStd140:!!(n&&/\blayout\s*\([^)]*\bstd140\b[^)]*\)/.exec(n))})}return t}function In(e,t,n,r){let i=Fn(e).filter(e=>!e.isStd140),a=new Set;for(let e of i){if(a.has(e.blockName))continue;a.add(e.blockName);let i=r?.label?`${r.label} `:``,o=e.hasLayoutQualifier?`declares ${Un(e.layoutQualifier)} instead of layout(std140)`:`does not declare layout(std140)`,s=`${i}${t} shader uniform block ${e.blockName} ${o}. luma.gl host-side shader block packing assumes explicit layout(std140) for GLSL uniform blocks. Add \`layout(std140)\` to the block declaration.`;n?.warn?.(s,e)()}return i}function Ln(e,t,n){let r=t===`wgsl`?Rn(e,n):zn(e,n);if(!r)return null;let i=[];for(let e of r.split(`
`)){let n=e.replace(/\/\/.*$/,``).trim();if(!n||n.startsWith(`#`))continue;let r=t===`wgsl`?n.match(/^([A-Za-z0-9_]+)\s*:/):n.match(kn);r&&i.push(r[1])}return i}function Rn(e,t){let n=RegExp(`\\bstruct\\s+${t}\\b`,`m`).exec(e);if(!n)return null;let r=e.indexOf(`{`,n.index);if(r<0)return null;let i=0;for(let t=r;t<e.length;t++){let n=e[t];if(n===`{`)i++;else if(n===`}`&&(i--,i===0))return e.slice(r+1,t)}return null}function zn(e,t){return Fn(e).find(e=>e.blockName===t)?.body||null}function Bn(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function Vn(e){let{expectedUniformNames:t,actualUniformNames:n}=e,r=t.filter(e=>!n.includes(e)),i=n.filter(e=>!t.includes(e)),a=[`Expected ${t.length} fields, found ${n.length}.`],o=Wn(t,n);return o&&a.push(o),r.length&&a.push(`Missing from shader block (${r.length}): ${Gn(r)}.`),i.length&&a.push(`Unexpected in shader block (${i.length}): ${Gn(i)}.`),t.length<=12&&n.length<=12&&(r.length||i.length)&&(a.push(`Expected: ${t.join(`, `)}.`),a.push(`Actual: ${n.join(`, `)}.`)),`${e.moduleName}: ${e.stage} shader uniform block ${e.uniformBlockName} does not match module.uniformTypes. ${a.join(` `)}`}function Hn(e){return e.replace(/\/\*[\s\S]*?\*\//g,``).replace(/\/\/.*$/gm,``)}function Un(e){return e.replace(/\s+/g,` `).trim()}function Wn(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++)if(e[r]!==t[r])return`First mismatch at field ${r+1}: expected ${e[r]}, found ${t[r]}.`;return e.length>t.length?`Shader block ends after field ${t.length}; expected next field ${e[t.length]}.`:t.length>e.length?`Shader block has extra field ${t.length}: ${t[e.length]}.`:null}function Gn(e,t=8){if(e.length<=t)return e.join(`, `);let n=e.length-t;return`${e.slice(0,t).join(`, `)}, ... (${n} more)`}function Kn(e){switch(e?.gpu.toLowerCase()){case`apple`:return`#define APPLE_GPU
// Apple optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`;case`nvidia`:return`#define NVIDIA_GPU
// Nvidia optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
`;case`intel`:return`#define INTEL_GPU
// Intel optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
// Intel's built-in 'tan' function doesn't have acceptable precision
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`;case`amd`:return`#define AMD_GPU
`;default:return`#define DEFAULT_GPU
// Prevent driver from optimizing away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
// Headless Chrome's software shader 'tan' function doesn't have acceptable precision
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// If the GPU doesn't have full 32 bits precision, will causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`}}function qn(e,t){if(Number(e.match(/^#version[ \t]+(\d+)/m)?.[1]||100)!==300)throw Error(`luma.gl v9 only supports GLSL 3.00 shader sources`);switch(t){case`vertex`:return e=Zn(e,Yn),e;case`fragment`:return e=Zn(e,Xn),e;default:throw Error(t)}}var Jn=[[/^(#version[ \t]+(100|300[ \t]+es))?[ \t]*\n/,`#version 300 es
`],[/\btexture(2D|2DProj|Cube)Lod(EXT)?\(/g,`textureLod(`],[/\btexture(2D|2DProj|Cube)(EXT)?\(/g,`texture(`]],Yn=[...Jn,[Qn(`attribute`),`in $1`],[Qn(`varying`),`out $1`]],Xn=[...Jn,[Qn(`varying`),`in $1`]];function Zn(e,t){for(let[n,r]of t)e=e.replace(n,r);return e}function Qn(e){return RegExp(`\\b${e}[ \\t]+(\\w+[ \\t]+\\w+(\\[\\w+\\])?;)`,`g`)}function $n(e,t,n=`glsl`){let r=``;for(let i in e){let a=e[i];if(r+=`${n===`wgsl`?`fn`:`void`} ${a.signature} {\n`,a.header&&(r+=`  ${a.header}`),t[i]){let e=t[i];e.sort((e,t)=>e.order-t.order);for(let t of e)r+=`  ${t.injection}\n`}a.footer&&(r+=`  ${a.footer}`),r+=`}
`}return r}function er(e){let t={vertex:{},fragment:{}};for(let n of e){let e,r;typeof n==`string`?(e={},r=n):(e=n,r=e.hook),r=r.trim();let i=r.indexOf(`:`),a=r.slice(0,i),o=r.slice(i+1),s=r.replace(/\(.+/,``),c=Object.assign(e,{signature:o});switch(a){case`vs`:t.vertex[s]=c;break;case`fs`:t.fragment[s]=c;break;default:throw Error(a)}}return t}function tr(e,t){return{name:nr(e,t),language:`glsl`,version:rr(e)}}function nr(e,t=`unnamed`){let n=/#define[^\S\r\n]*SHADER_NAME[^\S\r\n]*([A-Za-z0-9_-]+)\s*/.exec(e);return n?n[1]:t}function rr(e){let t=100,n=e.match(/[^\s]+/g);if(n&&n.length>=2&&n[0]===`#version`){let e=parseInt(n[1],10);Number.isFinite(e)&&(t=e)}if(t!==100&&t!==300)throw Error(`Invalid GLSL version ${t}`);return t}var ir=[RegExp(`@binding\\(\\s*(\\d+)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${S}\\s*:\\s*([^;]+);`,`g`),RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(\\d+)\\s*\\)\\s*${S}\\s*:\\s*([^;]+);`,`g`)];function ar(e,t=[]){let n=ne(e),r=new Map;for(let e of t)r.set(sr(e.name,e.group,e.location),e.moduleName);let i=[];for(let e of ir){e.lastIndex=0;let t;for(t=e.exec(n);t;){let a=e===ir[0],o=Number(t[a?1:2]),s=Number(t[a?2:1]),c=t[3]?.trim(),l=t[4],u=t[5].trim(),d=r.get(sr(l,s,o));i.push(or({name:l,group:s,binding:o,owner:d?`module`:`application`,moduleName:d,accessDeclaration:c,resourceType:u})),t=e.exec(n)}}return i.sort((e,t)=>e.group===t.group?e.binding===t.binding?e.name.localeCompare(t.name):e.binding-t.binding:e.group-t.group)}function or(e){let t={name:e.name,group:e.group,binding:e.binding,owner:e.owner,kind:`unknown`,moduleName:e.moduleName,resourceType:e.resourceType};if(e.accessDeclaration){let n=e.accessDeclaration.split(`,`).map(e=>e.trim());if(n[0]===`uniform`)return{...t,kind:`uniform`,access:`uniform`};if(n[0]===`storage`){let e=n[1]||`read_write`;return{...t,kind:e===`read`?`read-only-storage`:`storage`,access:e}}}return e.resourceType===`sampler`||e.resourceType===`sampler_comparison`?{...t,kind:`sampler`,samplerKind:e.resourceType===`sampler_comparison`?`comparison`:`filtering`}:e.resourceType.startsWith(`texture_storage_`)?{...t,kind:`storage-texture`,access:ur(e.resourceType),viewDimension:cr(e.resourceType)}:e.resourceType.startsWith(`texture_`)?{...t,kind:`texture`,viewDimension:cr(e.resourceType),sampleType:lr(e.resourceType),multisampled:e.resourceType.startsWith(`texture_multisampled_`)}:t}function sr(e,t,n){return`${t}:${n}:${e}`}function cr(e){if(e.includes(`cube_array`))return`cube-array`;if(e.includes(`2d_array`))return`2d-array`;if(e.includes(`cube`))return`cube`;if(e.includes(`3d`))return`3d`;if(e.includes(`2d`))return`2d`;if(e.includes(`1d`))return`1d`}function lr(e){if(e.startsWith(`texture_depth_`))return`depth`;if(e.includes(`<i32>`))return`sint`;if(e.includes(`<u32>`))return`uint`;if(e.includes(`<f32>`))return`float`}function ur(e){return/,\s*([A-Za-z_][A-Za-z0-9_]*)\s*>$/.exec(e)?.[1]}var z=`([a-zA-Z_][a-zA-Z0-9_]*)`,dr=/^\s*\#\s*if\s+(.+?)\s*(?:\/\/.*)?$/,fr=RegExp(`^\\s*\\#\\s*ifdef\\s*${z}\\s*$`),pr=RegExp(`^\\s*\\#\\s*ifndef\\s*${z}\\s*(?:\\/\\/.*)?$`),mr=/^\s*\#\s*else\s*(?:\/\/.*)?$/,hr=/^\s*\#\s*endif\s*$/,gr=RegExp(`^\\s*\\#\\s*ifdef\\s*${z}\\s*(?:\\/\\/.*)?$`),_r=/^\s*\#\s*endif\s*(?:\/\/.*)?$/;function B(e,t){let n=e.split(`
`),r=[],i=[],a=!0;for(let e of n){let n=e.match(dr),o=e.match(gr)||e.match(fr),s=e.match(pr),c=e.match(mr),l=e.match(_r)||e.match(hr);if(n){let e=vr(n[1],t?.defines||{}),r=a&&e;i.push({parentActive:a,branchTaken:e,active:r}),a=r}else if(o||s){let e=(o||s)?.[1],n=!!t?.defines?.[e],r=o?n:!n,c=a&&r;i.push({parentActive:a,branchTaken:r,active:c}),a=c}else if(c){let e=i[i.length-1];if(!e)throw Error(`Encountered #else without matching #if, #ifdef or #ifndef`);e.active=e.parentActive&&!e.branchTaken,e.branchTaken=!0,a=e.active}else l?(i.pop(),a=!i.length||i[i.length-1].active):a&&r.push(e)}if(i.length>0)throw Error(`Unterminated conditional block in shader source`);return r.join(`
`)}function vr(e,t){let n=e.trim();if(/^[+-]?\d+(?:\.\d+)?$/.test(n))return Number(n)!==0;if(n===`true`)return!0;if(n===`false`)return!1;let r=n.match(RegExp(`^!\\s*${z}$`));if(r)return!t[r[1]];let i=n.match(RegExp(`^${z}$`));if(i)return!!t[i[1]];let a=n.match(RegExp(`^defined\\s*\\(\\s*${z}\\s*\\)$`));if(a)return t[a[1]]!==void 0;let o=n.match(RegExp(`^!\\s*defined\\s*\\(\\s*${z}\\s*\\)$`));if(o)return t[o[1]]===void 0;throw Error(`Unsupported #if expression "${e}"`)}function yr(e,t){let n=[];for(let[r,i]of Object.entries(t))Sr(e,r),n.push(`in ${xr(i)} ${r};`);return n.join(`
`)}function br(e,t,n){let r=Object.entries(n);if(r.length===0)return{source:e,declarations:``,initialization:``};let i=Cr(e,t),a=e.slice(i.openParenthesis+1,i.closeParenthesis),o=wr(e,a),s=new Set(o.locations),c=[],l=[],u=[];for(let[t,n]of r){if(o.names.has(t)||kr(e,t))throw Error(`ShaderPlugin vertex input "${t}" conflicts with an existing WGSL shader input or variable`);let r=Ar(s);s.add(r);let i=`_luma_${t}`;c.push(`@location(${r}) ${i}: ${n}`),l.push(`var<private> ${t}: ${n};`),u.push(`${t} = ${i};`)}let d=a.trim()?`,
  `:`
  `,f=a.trim()?``:`
`,p=`${a}${d}${c.join(`,
  `)}${f}`;return{source:e.slice(0,i.openParenthesis+1)+p+e.slice(i.closeParenthesis),declarations:l.join(`
`),initialization:u.join(`
`)}}function xr(e){let{primitiveType:t,components:n}=Cn.getAttributeShaderTypeInfo(e),r=t===`i32`?`int`:t===`u32`?`uint`:`float`;return n===1?r:`${r===`int`?`i`:r===`uint`?`u`:``}vec${n}`}function Sr(e,t){let n=Nr(t);if(RegExp(`\\b(?:in|attribute)\\s+(?:(?:lowp|mediump|highp)\\s+)?[A-Za-z_][A-Za-z0-9_]*\\s+${n}\\s*(?:\\[|;)`).test(e))throw Error(`ShaderPlugin vertex input "${t}" conflicts with an existing GLSL input`)}function Cr(e,t){let n=RegExp(`\\bfn\\s+${Nr(t)}\\s*\\(`,`g`).exec(e);if(!n)throw Error(`ShaderPlugin vertex inputs require WGSL vertex entry point "${t}"`);let r=e.indexOf(`(`,n.index),i=jr(e,r,`(`,`)`);if(i<0)throw Error(`Unable to parse WGSL vertex entry point "${t}" parameters`);return{openParenthesis:r,closeParenthesis:i}}function wr(e,t){let n=Tr(t),r=new Set(Er(t)),i=Dr(t);for(let t of i){let i=Or(e,t);if(i!==null){n.push(...Tr(i));for(let e of Er(i))r.add(e)}}return{locations:n,names:r}}function Tr(e){let t=[],n=/@location\s*\(\s*(\d+)\s*\)/g,r=n.exec(e);for(;r;)t.push(Number(r[1])),r=n.exec(e);return t}function Er(e){let t=[],n=/(?:^|,)\s*(?:@[A-Za-z_][\w]*(?:\([^)]*\))?\s*)*([A-Za-z_][\w]*)\s*:/gm,r=n.exec(e);for(;r;)t.push(r[1]),r=n.exec(e);return t}function Dr(e){let t=[],n=/:\s*([A-Za-z_][\w]*)\b/g,r=n.exec(e);for(;r;)t.push(r[1]),r=n.exec(e);return t}function Or(e,t){let n=RegExp(`\\bstruct\\s+${Nr(t)}\\s*\\{`,`g`).exec(e);if(!n)return null;let r=e.indexOf(`{`,n.index),i=jr(e,r,`{`,`}`);return i<0?null:e.slice(r+1,i)}function kr(e,t){let n=Nr(t),r=RegExp(`\\b(?:var(?:<[^>]+>)?|let|const)\\s+${n}\\b`,`g`),i=r.exec(e);for(;i;){if(Mr(e,i.index)===0)return!0;i=r.exec(e)}return!1}function Ar(e){let t=0;for(;e.has(t);)t++;return t}function jr(e,t,n,r){let i=0,a=0,o=!1;for(let s=t;s<e.length;s++){let t=e[s],c=e[s+1];if(o)t===`
`&&(o=!1);else if(a>0)t===`/`&&c===`*`?(a++,s++):t===`*`&&c===`/`&&(a--,s++);else if(t===`/`&&c===`/`)o=!0,s++;else if(t===`/`&&c===`*`)a=1,s++;else if(t===n&&i++,t===r&&--i===0)return s}return-1}function Mr(e,t){let n=0,r=0,i=!1;for(let a=0;a<t;a++){let t=e[a],o=e[a+1];i?t===`
`&&(i=!1):r>0?t===`/`&&o===`*`?(r++,a++):t===`*`&&o===`/`&&(r--,a++):t===`/`&&o===`/`?(i=!0,a++):t===`/`&&o===`*`?(r=1,a++):t===`{`?n++:t===`}`&&n--}return n}function Nr(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function Pr(e,t,n){let r=[],i=[];for(let[a,o]of Object.entries(n)){ei(e,a);let n=o.interpolation===`flat`?`flat `:``,s=t===`vertex`?`out`:`in`;r.push(`${n}${s} ${xr(o.type)} ${a};`),t===`vertex`&&i.push(`${a} = ${Qr(o.type)};`)}return{declarations:r.join(`
`),initialization:i.join(`
`)}}function Fr(e,t,n,r){let i=Object.entries(r);if(i.length===0)return{source:e,declarations:``,vertexInitialization:``,fragmentInitialization:``};let a=e,o=Ir(a,t,`vertex`),s=Lr(a,o),c=Ir(a,n,`fragment`),l=Rr(a,c),u=zr(a,s),d=zr(a,l.type),f=new Set([...Yr(o.parameters),...Yr(u.body),...Yr(c.parameters),...Yr(d.body)]),p=new Set([...Jr(u.body),...Jr(d.body)]),m=[],h=[],g=[],_=[];for(let[e,t]of i){if(f.has(e)||Xr(a,e))throw Error(`ShaderPlugin varying "${e}" conflicts with existing WGSL stage I/O or a module variable`);let n=Zr(p);p.add(n);let r=t.interpolation===`flat`?` @interpolate(flat)`:``;m.push(`  @location(${n})${r} ${e}: ${t.type},`),h.push(`var<private> ${e}: ${t.type};`),g.push(`${e} = ${$r(t.type)};`),_.push(`${e} = ${l.name}.${e};`)}Vr(a,s,o.openBrace,o.closeBrace),a=Hr(a,s,o,i.map(([e])=>e)),o=Ir(a,t,`vertex`),a=Ur(a,o,i.map(([e])=>e));let v=(s===l.type?[s]:[s,l.type]).map(e=>zr(a,e).closeBrace).sort((e,t)=>t-e);for(let e of v)a=a.slice(0,e)+`${m.join(`
`)}\n`+a.slice(e);if(c=Ir(a,n,`fragment`),!RegExp(`\\b${V(l.name)}\\s*:`).test(c.parameters))throw Error(`Unable to preserve WGSL fragment input "${l.name}"`);return{source:a,declarations:h.join(`
`),vertexInitialization:g.join(`
`),fragmentInitialization:_.join(`
`)}}function Ir(e,t,n){let r=RegExp(`\\bfn\\s+${V(t)}\\s*\\(`,`g`).exec(e);if(!r)throw Error(`ShaderPlugin varyings require WGSL ${n} entry point "${t}"`);let i=e.indexOf(`(`,r.index),a=ti(e,i,`(`,`)`),o=e.indexOf(`{`,a),s=ti(e,o,`{`,`}`);if(a<0||o<0||s<0)throw Error(`Unable to parse WGSL ${n} entry point "${t}"`);return{openParenthesis:i,closeParenthesis:a,openBrace:o,closeBrace:s,parameters:e.slice(i+1,a)}}function Lr(e,t){let n=e.slice(t.closeParenthesis+1,t.openBrace),r=/->\s*([A-Za-z_][\w]*)\s*$/.exec(n.trim());if(!r||Br(e,r[1])===null)throw Error(`ShaderPlugin varyings require the WGSL vertex entry point to return a named struct`);return r[1]}function Rr(e,t){let n=[];for(let r of qr(t.parameters,`,`)){let t=/(?:@[A-Za-z_][\w]*(?:\([^)]*\))?\s*)*([A-Za-z_][\w]*)\s*:\s*([A-Za-z_][\w]*)\s*$/.exec(r.trim());t&&Br(e,t[2])&&n.push({name:t[1],type:t[2]})}if(n.length!==1)throw Error(`ShaderPlugin varyings require exactly one named WGSL fragment input struct; found ${n.length}`);return n[0]}function zr(e,t){let n=Br(e,t);if(!n)throw Error(`Unable to find WGSL stage I/O struct "${t}"`);return n}function Br(e,t){let n=RegExp(`\\bstruct\\s+${V(t)}\\s*\\{`,`g`).exec(e);if(!n)return null;let r=e.indexOf(`{`,n.index),i=ti(e,r,`{`,`}`);return i<0?null:{openBrace:r,closeBrace:i,body:e.slice(r+1,i)}}function Vr(e,t,n,r){let i=RegExp(`\\b${V(t)}\\s*\\(`,`g`),a=i.exec(e);for(;a;){if(a.index<n||a.index>r)throw Error(`ShaderPlugin varying output struct "${t}" is constructed outside the selected vertex entry point`);a=i.exec(e)}}function Hr(e,t,n,r){let i=RegExp(`\\b${V(t)}\\s*\\(`,`g`),a=[],o=i.exec(e);for(;o;){if(o.index>n.openBrace&&o.index<n.closeBrace){let r=e.indexOf(`(`,o.index),i=ti(e,r,`(`,`)`);if(i<0||i>n.closeBrace)throw Error(`Unable to parse WGSL output constructor "${t}"`);a.push({openParenthesis:r,closeParenthesis:i})}o=i.exec(e)}for(let t of a.sort((e,t)=>t.closeParenthesis-e.closeParenthesis)){let n=e.slice(t.openParenthesis+1,t.closeParenthesis).trim()?`, `:``;e=e.slice(0,t.closeParenthesis)+n+r.join(`, `)+e.slice(t.closeParenthesis)}return e}function Ur(e,t,n){let r=Wr(e,t.openBrace+1,t.closeBrace);for(let t=r.length-1;t>=0;t--){let i=r[t],a=e.slice(i.expressionStart,i.semicolon).trim();if(!a)throw Error(`ShaderPlugin varying vertex entry point cannot use an empty return`);let o=`_luma_vertexOutput${t}`,s=`{\nvar ${o} = ${a};\n${n.map(e=>`${o}.${e} = ${e};`).join(`
`)}\nreturn ${o};\n}`;e=e.slice(0,i.start)+s+e.slice(i.semicolon+1)}return e}function Wr(e,t,n){let r=[],i=t;for(;i<n;)if(i=Kr(e,i,n),e.slice(i,i+6)===`return`&&!/[A-Za-z0-9_]/.test(e[i+6]||``)){let t=i+6,a=Gr(e,t,n);if(a<0)throw Error(`Unable to parse WGSL return statement in selected vertex entry point`);r.push({start:i,expressionStart:t,semicolon:a}),i=a+1}else i++;return r}function Gr(e,t,n){let r=0,i=0;for(let a=t;a<n;a++){let t=Kr(e,a,n);if(t!==a){a=t-1;continue}let o=e[a];if(o===`(`&&r++,o===`)`&&r--,o===`[`&&i++,o===`]`&&i--,o===`;`&&r===0&&i===0)return a}return-1}function Kr(e,t,n){let r=t;if(e[r]===`/`&&e[r+1]===`/`){let t=e.indexOf(`
`,r+2);return t<0||t>n?n:t+1}if(e[r]===`/`&&e[r+1]===`*`){let t=1;for(r+=2;r<n&&t>0;)e[r]===`/`&&e[r+1]===`*`?(t++,r+=2):e[r]===`*`&&e[r+1]===`/`?(t--,r+=2):r++}return r}function qr(e,t){let n=[],r=0,i=0,a=0;for(let o=0;o<e.length;o++){let s=e[o];s===`(`&&i++,s===`)`&&i--,s===`<`&&a++,s===`>`&&a--,s===t&&i===0&&a===0&&(n.push(e.slice(r,o)),r=o+1)}return n.push(e.slice(r)),n}function Jr(e){let t=[],n=/@location\s*\(\s*(\d+)\s*\)/g,r=n.exec(e);for(;r;)t.push(Number(r[1])),r=n.exec(e);return t}function Yr(e){let t=[],n=/(?:^|,)\s*(?:@[A-Za-z_][\w]*(?:\([^)]*\))?\s*)*([A-Za-z_][\w]*)\s*:/gm,r=n.exec(e);for(;r;)t.push(r[1]),r=n.exec(e);return t}function Xr(e,t){let n=RegExp(`\\b(?:var(?:<[^>]+>)?|let|const)\\s+${V(t)}\\b`,`g`),r=n.exec(e);for(;r;){if(ni(e,r.index)===0)return!0;r=n.exec(e)}return!1}function Zr(e){let t=0;for(;e.has(t);)t++;return t}function Qr(e){let{primitiveType:t,components:n}=Cn.getAttributeShaderTypeInfo(e),r=t===`u32`?`0u`:t===`i32`?`0`:`0.0`;return n===1?r:`${xr(e)}(${r})`}function $r(e){let{primitiveType:t,components:n}=Cn.getAttributeShaderTypeInfo(e),r=`${t}(0)`;return n===1?r:`${e}(${r})`}function ei(e,t){if(RegExp(`\\b(?:flat\\s+|smooth\\s+)?(?:in|out|varying)\\s+(?:(?:lowp|mediump|highp)\\s+)?[A-Za-z_][A-Za-z0-9_]*\\s+${V(t)}\\s*(?:\\[|;)`).test(e))throw Error(`ShaderPlugin varying "${t}" conflicts with existing GLSL stage I/O`)}function ti(e,t,n,r){let i=0,a=0,o=!1;for(let s=t;s<e.length;s++){let t=e[s],c=e[s+1];if(o)t===`
`&&(o=!1);else if(a>0)t===`/`&&c===`*`?(a++,s++):t===`*`&&c===`/`&&(a--,s++);else if(t===`/`&&c===`/`)o=!0,s++;else if(t===`/`&&c===`*`)a=1,s++;else if(t===n&&i++,t===r&&--i===0)return s}return-1}function ni(e,t){let n=0;for(let r=0;r<t;r++){let i=Kr(e,r,t);i===r?(e[r]===`{`&&n++,e[r]===`}`&&n--):r=i-1}return n}function V(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}var ri=`\n\n${Ve}\n`,H=100,ii=`precision highp float;
`;function ai(e){let t=Qe(e.modules||[]),{source:n,bindingAssignments:r}=si(e.platformInfo,{...e,source:e.source,stage:`vertex`,modules:t});return{source:n,getUniforms:li(t),bindingAssignments:r,bindingTable:ar(n,r),shaderLayout:oe(n,{vertexEntryPoint:e.vertexEntryPoint,scanVertexAttributes:e.scanVertexAttributes})}}function oi(e){let{vs:t,fs:n}=e,r=Qe(e.modules||[]);return{vs:ci(e.platformInfo,{...e,source:t,stage:`vertex`,modules:r}),fs:ci(e.platformInfo,{...e,source:n,stage:`fragment`,modules:r}),getUniforms:li(r)}}function si(e,t){let{source:n,stage:r,modules:i,defines:a={},hookFunctions:o=[],inject:s={},pluginInjections:c={},pluginVertexInputs:l={},pluginVaryings:u={},vertexEntryPoint:d=`vertexMain`,fragmentEntryPoint:f=`fragmentMain`,log:p}=t;D(typeof n==`string`,`shader source must be a string`);let m=br(B(n,{defines:a}),d,l),h=Fr(m.source,d,f,u),g=h.source,_=``,v=er(o),y={},b={},x={};ui(c,y,b,x);for(let e in s){let t=typeof s[e]==`string`?{injection:s[e],order:0}:s[e],n=/^(v|f)s:(#)?([\w-]+)$/.exec(e);if(n){let r=n[2],i=n[3];r?i===`decl`?b[e]=[t]:x[e]=[t]:y[e]=[t]}else x[e]=[t]}di(m.declarations,m.initialization,b,x),fi(h,b,x);let S=i,C=yi(g),w=vi(C.source),T=Ci(S,t._bindingRegistry,w,a),ee=[];for(let e of S){p&&Xe(e,g,p);let n=bi(B(_i(e,`wgsl`,p),{defines:a}),e,{usedBindingsByGroup:w,bindingRegistry:t._bindingRegistry,reservedBindingKeysByGroup:T});ee.push(...n.bindingAssignments);let r=n.source;_+=r;let i=pi(e);for(let e in i){let t=/^(v|f)s:#([\w-]+)$/.exec(e);if(t){let n=t[2]===`decl`?b:x;n[e]=n[e]||[],n[e].push(i[e])}else y[e]=y[e]||[],y[e].push(i[e])}}return _+=ri,_=We(_,r,mi(b),!1,`wgsl`,{vertex:d,fragment:f}),_+=hi(v,y),_+=ji(ee),_+=C.source,_=We(_,r,x,!1,`wgsl`,{vertex:d,fragment:f}),Ai(_),{source:_,bindingAssignments:ee}}function ci(e,t){let{source:n,stage:r,language:i=`glsl`,modules:a,defines:o={},hookFunctions:s=[],inject:c={},pluginInjections:l={},pluginVertexInputs:u={},pluginVaryings:d={},prologue:f=!0,log:p}=t;D(typeof n==`string`,`shader source must be a string`);let m=i===`glsl`?tr(n).version:-1,h=e.shaderLanguageVersion,g=m===100?`#version 100`:`#version 300 es`,_=n.split(`
`).slice(1).join(`
`),v={};a.forEach(e=>{Object.assign(v,e.defines)}),Object.assign(v,o);let y=``;switch(i){case`wgsl`:break;case`glsl`:y=f?`\
${g}

// ----- PROLOGUE -------------------------
${`#define SHADER_TYPE_${r.toUpperCase()}`}

${Kn(e)}
${r===`fragment`?ii:``}

// ----- APPLICATION DEFINES -------------------------

${gi(v)}

`:`${g}
`}let b=er(s),x={},S={},C={};ui(l,x,S,C);for(let e in c){let t=typeof c[e]==`string`?{injection:c[e],order:0}:c[e],n=/^(v|f)s:(#)?([\w-]+)$/.exec(e);if(n){let r=n[2],i=n[3];r?i===`decl`?S[e]=[t]:C[e]=[t]:x[e]=[t]}else C[e]=[t]}if(r===`vertex`){let e=yr(_,u);e&&(S[`vs:#decl`]=S[`vs:#decl`]||[],S[`vs:#decl`].push({injection:e,order:-(2**53-1)}))}let w=Pr(_,r,d);if(w.declarations){let e=r===`vertex`?`vs:#decl`:`fs:#decl`;S[e]=S[e]||[],S[e].push({injection:w.declarations,order:-(2**53-1)})}w.initialization&&(C[`vs:#main-start`]=C[`vs:#main-start`]||[],C[`vs:#main-start`].push({injection:w.initialization,order:-(2**53-1)}));for(let e of a){p&&Xe(e,_,p);let t=_i(e,r,p);y+=t;let n=e.instance?.normalizedInjections[r]||{};for(let e in n){let t=/^(v|f)s:#([\w-]+)$/.exec(e);if(t){let r=t[2]===`decl`?S:C;r[e]=r[e]||[],r[e].push(n[e])}else x[e]=x[e]||[],x[e].push(n[e])}}return y+=`// ----- MAIN SHADER SOURCE -------------------------`,y+=ri,y=We(y,r,S),y+=$n(b[r],x),y+=_,y=We(y,r,C),i===`glsl`&&m!==h&&(y=qn(y,r)),i===`glsl`&&In(y,r,p),y.trim()}function li(e){return function(t){let n={};for(let r of e){let e=r.getUniforms?.(t,n);Object.assign(n,e)}return n}}function ui(e,t,n,r){for(let i in e){let a=/^(v|f)s:(#)?([\w-]+)$/.exec(i);if(a){let o=a[2],s=a[3],c=o?s===`decl`?n:r:t;c[i]=c[i]||[],c[i].push(...e[i])}else r[i]=r[i]||[],r[i].push(...e[i])}}function di(e,t,n,r){e&&(n[`vs:#decl`]=n[`vs:#decl`]||[],n[`vs:#decl`].push({injection:e,order:-(2**53-1)})),t&&(r[`vs:#main-start`]=r[`vs:#main-start`]||[],r[`vs:#main-start`].push({injection:t,order:-(2**53-1)}))}function fi(e,t,n){e.declarations&&(t[`vs:#decl`]=t[`vs:#decl`]||[],t[`vs:#decl`].push({injection:e.declarations,order:-(2**53-1)})),e.vertexInitialization&&(n[`vs:#main-start`]=n[`vs:#main-start`]||[],n[`vs:#main-start`].push({injection:e.vertexInitialization,order:-(2**53-1)})),e.fragmentInitialization&&(n[`fs:#main-start`]=n[`fs:#main-start`]||[],n[`fs:#main-start`].push({injection:e.fragmentInitialization,order:-(2**53-1)}))}function pi(e){return{...e.instance?.normalizedInjections.vertex||{},...e.instance?.normalizedInjections.fragment||{}}}function mi(e){let t=[...e[`vs:#decl`]||[],...e[`fs:#decl`]||[]];return t.length?{"vs:#decl":t}:{}}function hi(e,t){return $n(e.vertex,t,`wgsl`)+$n(e.fragment,t,`wgsl`)}function gi(e={}){let t=``;for(let n in e){let r=e[n];(r||Number.isFinite(r))&&(t+=`#define ${n.toUpperCase()} ${e[n]}\n`)}return t}function _i(e,t,n){let r;switch(t){case`vertex`:r=e.vs||``;break;case`fragment`:r=e.fs||``;break;case`wgsl`:r=e.source||``;break;default:D(!1)}if(!e.name)throw Error(`Shader module must have a name`);Pn(e,t,{log:n});let i=e.name.toUpperCase().replace(/[^0-9a-z]/gi,`_`),a=`\
// ----- MODULE ${e.name} ---------------

`;return t!==`wgsl`&&(a+=`#define MODULE_${i}\n`),a+=`${r}\n`,a}function vi(e){let t=new Map;for(let n of E(e,ee)){let e=Number(n.bindingToken),r=Number(n.groupToken);Ei(r,e,n.name),U(t,r,e,`application binding "${n.name}"`)}return t}function yi(e){let t=E(e,T),n=new Map;for(let e of t){if(e.bindingToken===`auto`)continue;let t=Number(e.bindingToken),r=Number(e.groupToken);Ei(r,t,e.name),U(n,r,t,`application binding "${e.name}"`)}let r={sawSupportedBindingDeclaration:t.length>0},i=re(e,T,e=>Si(e,n,r));if(ie(e)&&!r.sawSupportedBindingDeclaration)throw Error(`Unsupported @binding(auto) declaration form in application WGSL. Use adjacent "@group(N)" and "@binding(auto)" decorators followed by a bindable "var" declaration.`);return{source:i}}function bi(e,t,n){let r=[],i={sawSupportedBindingDeclaration:E(e,w).length>0,nextHintedBindingLocation:typeof t.firstBindingSlot==`number`?t.firstBindingSlot:null},a=re(e,w,e=>xi(e,{module:t,context:n,bindingAssignments:r,relocationState:i}));if(ie(e)&&!i.sawSupportedBindingDeclaration)throw Error(`Unsupported @binding(auto) declaration form in module "${t.name}". Use adjacent "@group(N)" and "@binding(auto)" decorators followed by a bindable "var" declaration.`);return{source:a,bindingAssignments:r}}function xi(e,t){let{module:n,context:r,bindingAssignments:i,relocationState:a}=t,{match:o,bindingToken:s,groupToken:c,name:l}=e,u=Number(c);if(s===`auto`){let e=Mi(u,n.name,l),t=r.bindingRegistry?.get(e),s=t===void 0?Oi(u,r.usedBindingsByGroup,n.name,a.nextHintedBindingLocation??void 0,r.bindingRegistry):t;return Di(n.name,u,s,l),t!==void 0&&wi(r.reservedBindingKeysByGroup,u,s,e)?(i.push({moduleName:n.name,name:l,group:u,location:s}),o.replace(/@binding\(\s*auto\s*\)/,`@binding(${s})`)):(U(r.usedBindingsByGroup,u,s,`module "${n.name}" binding "${l}"`),r.bindingRegistry?.set(e,s),i.push({moduleName:n.name,name:l,group:u,location:s}),a.nextHintedBindingLocation!==null&&t===void 0&&(a.nextHintedBindingLocation=s+1),o.replace(/@binding\(\s*auto\s*\)/,`@binding(${s})`))}let d=Number(s);return Di(n.name,u,d,l),U(r.usedBindingsByGroup,u,d,`module "${n.name}" binding "${l}"`),i.push({moduleName:n.name,name:l,group:u,location:d}),o}function Si(e,t,n){let{match:r,bindingToken:i,groupToken:a,name:o}=e,s=Number(a);if(i===`auto`){let e=ki(s,t);return Ei(s,e,o),U(t,s,e,`application binding "${o}"`),r.replace(/@binding\(\s*auto\s*\)/,`@binding(${e})`)}return n.sawSupportedBindingDeclaration=!0,r}function Ci(e,t,n,r){let i=new Map;if(!t)return i;for(let a of e)for(let e of Ti(a,r)){let r=Mi(e.group,a.name,e.name),o=t.get(r);if(o!==void 0){let t=i.get(e.group)||new Map,a=t.get(o);if(a&&a!==r)throw Error(`Duplicate WGSL binding reservation for modules "${a}" and "${r}": group ${e.group}, binding ${o}.`);U(n,e.group,o,`registered module binding "${r}"`),t.set(o,r),i.set(e.group,t)}}return i}function wi(e,t,n,r){let i=e.get(t);if(!i)return!1;let a=i.get(n);if(!a)return!1;if(a!==r)throw Error(`Registered module binding "${r}" collided with "${a}": group ${t}, binding ${n}.`);return!0}function Ti(e,t){let n=[],r=B(e.source||``,{defines:t});for(let e of E(r,w))n.push({name:e.name,group:Number(e.groupToken)});return n}function Ei(e,t,n){if(e===0&&t>=H)throw Error(`Application binding "${n}" in group 0 uses reserved binding ${t}. Application-owned explicit group-0 bindings must stay below ${H}.`)}function Di(e,t,n,r){if(t===0&&n<H)throw Error(`Module "${e}" binding "${r}" in group 0 uses reserved application binding ${n}. Module-owned explicit group-0 bindings must be ${H} or higher.`)}function U(e,t,n,r){let i=e.get(t)||new Set;if(i.has(n))throw Error(`Duplicate WGSL binding assignment for ${r}: group ${t}, binding ${n}.`);i.add(n),e.set(t,i)}function Oi(e,t,n,r,i){let a=t.get(e)||new Set,o=new Set,s=`${e}:`,c=`${s}${n}:`;for(let[e,t]of i||[])e.startsWith(c)&&o.add(t);let l=r??(e===0?H:a.size>0?Math.max(...a)+1:0);for(;a.has(l)||o.has(l);)l++;for(let[e,t]of i||[])t===l&&e.startsWith(s)&&i?.delete(e);return l}function ki(e,t){let n=t.get(e)||new Set,r=0;for(;n.has(r);)r++;return r}function Ai(e){let t=ae(e,w);if(!t)return;let n=Ni(e,t.index);throw n?Error(`Unresolved @binding(auto) for module "${n}" binding "${t.name}" remained in assembled WGSL source.`):Pi(e,t.index)?Error(`Unresolved @binding(auto) for application binding "${t.name}" remained in assembled WGSL source.`):Error(`Unresolved @binding(auto) remained in assembled WGSL source near "${Fi(t.match)}".`)}function ji(e){if(e.length===0)return``;let t=`// ----- MODULE WGSL BINDING ASSIGNMENTS ---------------
`;for(let n of e)t+=`// ${n.moduleName}.${n.name} -> @group(${n.group}) @binding(${n.location})\n`;return t+=`
`,t}function Mi(e,t,n){return`${e}:${t}:${n}`}function Ni(e,t){let n=/^\/\/ ----- MODULE ([^\n]+) ---------------$/gm,r,i;for(i=n.exec(e);i&&i.index<=t;)r=i[1],i=n.exec(e);return r}function Pi(e,t){let n=e.indexOf(ri);return n>=0?t>n:!0}function Fi(e){return e.replace(/\s+/g,` `).trim()}var Ii=class e{static defaultShaderAssemblers={};_hookFunctions=[];_defaultModules=[];static getDefaultShaderAssembler(t){return D(t===`glsl`||t===`wgsl`),t===`wgsl`?(e.defaultShaderAssemblers.wgsl=e.defaultShaderAssemblers.wgsl||new Ri,e.defaultShaderAssemblers.wgsl):(e.defaultShaderAssemblers.glsl=e.defaultShaderAssemblers.glsl||new Li,e.defaultShaderAssemblers.glsl)}addDefaultModule(e){this._defaultModules.find(t=>t.name===(typeof e==`string`?e:e.name))||this._defaultModules.push(e)}removeDefaultModule(e){let t=typeof e==`string`?e:e.name;this._defaultModules=this._defaultModules.filter(e=>e.name!==t)}addShaderHook(e,t){t&&(e=Object.assign(t,{hook:e})),this._hookFunctions.push(e)}_getModuleList(e=[]){let t=Array(this._defaultModules.length+e.length),n={},r=0;for(let e=0,i=this._defaultModules.length;e<i;++e){let i=this._defaultModules[e],a=i.name;t[r++]=i,n[a]=!0}for(let i=0,a=e.length;i<a;++i){let a=e[i],o=a.name;n[o]||(t[r++]=a,n[o]=!0)}return t.length=r,Je(t),t}},Li=class extends Ii{shaderLanguage=`glsl`;assembleGLSLShaderPair(e){let t=this._getModuleList(e.modules),n=this._hookFunctions;return{...oi({...e,vs:e.vs,fs:e.fs,modules:t,hookFunctions:n}),modules:t}}},Ri=class e extends Ii{shaderLanguage=`wgsl`;_wgslBindingRegistry=new Map;assembleWGSLShader(t){let n=this._getModuleList(t.modules),r=this._hookFunctions,i=e.getShaderPreprocessorDefines(t,n),a=t.platformInfo.shaderLanguage===`wgsl`&&t.source?B(t.source,{defines:i}):t.source,{source:o,getUniforms:s,bindingAssignments:c}=ai({...t,source:a,defines:i,_bindingRegistry:this._wgslBindingRegistry,modules:n,hookFunctions:r}),l=t.platformInfo.shaderLanguage===`wgsl`?B(o,{defines:i}):o;return{source:l,getUniforms:s,modules:n,bindingAssignments:c,bindingTable:ar(l,c),shaderLayout:oe(l,{vertexEntryPoint:t.vertexEntryPoint,scanVertexAttributes:t.scanVertexAttributes})}}static getShaderPreprocessorDefines(t,n){return{...e.getPlatformPreprocessorDefines(t.platformInfo),...n.reduce((e,t)=>(Object.assign(e,t.defines),e),{}),...t.defines}}static getPlatformPreprocessorDefines(e){let t=e.limits||{};return{LUMA_SUPPORTS_VERTEX_STORAGE_BUFFERS:e.type===`webgpu`&&(t.maxStorageBuffersInVertexStage||0)>0,LUMA_FP32_TAN_PRECISION_WORKAROUND:e.type===`webgpu`&&e.gpu.toLowerCase()!==`nvidia`&&e.gpu.toLowerCase()!==`amd`,LUMA_FP64_INTEGER_ARITHMETIC:e.type===`webgpu`&&e.gpu.toLowerCase()===`apple`}}},zi={name:`fp32`,source:`#ifdef LUMA_FP32_TAN_PRECISION_WORKAROUND
const FP32_TWO_PI: f32 = 6.2831854820251465;
const FP32_PI_2: f32 = 1.5707963705062866;
const FP32_PI_16: f32 = 0.1963495463132858;

const FP32_SIN_TABLE_0: f32 = 0.19509032368659973;
const FP32_SIN_TABLE_1: f32 = 0.3826834261417389;
const FP32_SIN_TABLE_2: f32 = 0.5555702447891235;
const FP32_SIN_TABLE_3: f32 = 0.7071067690849304;

const FP32_COS_TABLE_0: f32 = 0.9807852506637573;
const FP32_COS_TABLE_1: f32 = 0.9238795042037964;
const FP32_COS_TABLE_2: f32 = 0.8314695954322815;
const FP32_COS_TABLE_3: f32 = 0.7071067690849304;

const FP32_INVERSE_FACTORIAL_3: f32 = 1.666666716337204e-01;
const FP32_INVERSE_FACTORIAL_5: f32 = 8.333333767950535e-03;
const FP32_INVERSE_FACTORIAL_7: f32 = 1.9841270113829523e-04;
const FP32_INVERSE_FACTORIAL_9: f32 = 2.75573188446287533e-06;
const FP32_OVERFLOW: f32 = 3.402823466e+38;

fn sin_taylor_fp32(a: f32) -> f32 {
  if (a == 0.0) {
    return 0.0;
  }

  let x = -a * a;
  var sum = a;
  var term = a;

  term = term * x;
  sum = sum + term * FP32_INVERSE_FACTORIAL_3;
  term = term * x;
  sum = sum + term * FP32_INVERSE_FACTORIAL_5;
  term = term * x;
  sum = sum + term * FP32_INVERSE_FACTORIAL_7;
  term = term * x;
  sum = sum + term * FP32_INVERSE_FACTORIAL_9;

  return sum;
}

fn tan_taylor_fp32(a: f32) -> f32 {
  if (a == 0.0) {
    return 0.0;
  }

  let z = floor(a / FP32_TWO_PI);
  let reduced = a - FP32_TWO_PI * z;

  var quadrantValue = floor(reduced / FP32_PI_2 + 0.5);
  let quadrant = i32(quadrantValue);
  if (quadrant < -2 || quadrant > 2) {
    return FP32_OVERFLOW;
  }

  var angle = reduced - FP32_PI_2 * quadrantValue;
  quadrantValue = floor(angle / FP32_PI_16 + 0.5);
  let tableIndex = i32(quadrantValue);
  let absoluteTableIndex = abs(tableIndex);
  if (absoluteTableIndex > 4) {
    return FP32_OVERFLOW;
  }

  angle = angle - FP32_PI_16 * quadrantValue;
  let sinAngle = sin_taylor_fp32(angle);
  let cosAngle = sqrt(1.0 - sinAngle * sinAngle);

  var tableCos = 0.0;
  var tableSin = 0.0;
  if (absoluteTableIndex == 1) {
    tableCos = FP32_COS_TABLE_0;
    tableSin = FP32_SIN_TABLE_0;
  } else if (absoluteTableIndex == 2) {
    tableCos = FP32_COS_TABLE_1;
    tableSin = FP32_SIN_TABLE_1;
  } else if (absoluteTableIndex == 3) {
    tableCos = FP32_COS_TABLE_2;
    tableSin = FP32_SIN_TABLE_2;
  } else if (absoluteTableIndex == 4) {
    tableCos = FP32_COS_TABLE_3;
    tableSin = FP32_SIN_TABLE_3;
  }

  var sinReduced = sinAngle;
  var cosReduced = cosAngle;
  if (tableIndex > 0) {
    sinReduced = tableCos * sinAngle + tableSin * cosAngle;
    cosReduced = tableCos * cosAngle - tableSin * sinAngle;
  } else if (tableIndex < 0) {
    sinReduced = tableCos * sinAngle - tableSin * cosAngle;
    cosReduced = tableCos * cosAngle + tableSin * sinAngle;
  }

  var sinValue = 0.0;
  var cosValue = 0.0;
  if (quadrant == 0) {
    sinValue = sinReduced;
    cosValue = cosReduced;
  } else if (quadrant == 1) {
    sinValue = cosReduced;
    cosValue = -sinReduced;
  } else if (quadrant == -1) {
    sinValue = -cosReduced;
    cosValue = sinReduced;
  } else {
    sinValue = -sinReduced;
    cosValue = -cosReduced;
  }

  return sinValue / cosValue;
}

fn tan_fp32(a: f32) -> f32 {
  return tan_taylor_fp32(a);
}
#else
fn tan_fp32(a: f32) -> f32 {
  return tan(a);
}
#endif
`,vs:`#ifdef LUMA_FP32_TAN_PRECISION_WORKAROUND

// All these functions are for substituting tan() function from Intel GPU only
const float TWO_PI = 6.2831854820251465;
const float PI_2 = 1.5707963705062866;
const float PI_16 = 0.1963495463132858;

const float SIN_TABLE_0 = 0.19509032368659973;
const float SIN_TABLE_1 = 0.3826834261417389;
const float SIN_TABLE_2 = 0.5555702447891235;
const float SIN_TABLE_3 = 0.7071067690849304;

const float COS_TABLE_0 = 0.9807852506637573;
const float COS_TABLE_1 = 0.9238795042037964;
const float COS_TABLE_2 = 0.8314695954322815;
const float COS_TABLE_3 = 0.7071067690849304;

const float INVERSE_FACTORIAL_3 = 1.666666716337204e-01; // 1/3!
const float INVERSE_FACTORIAL_5 = 8.333333767950535e-03; // 1/5!
const float INVERSE_FACTORIAL_7 = 1.9841270113829523e-04; // 1/7!
const float INVERSE_FACTORIAL_9 = 2.75573188446287533e-06; // 1/9!

float sin_taylor_fp32(float a) {
  float r, s, t, x;

  if (a == 0.0) {
    return 0.0;
  }

  x = -a * a;
  s = a;
  r = a;

  r = r * x;
  t = r * INVERSE_FACTORIAL_3;
  s = s + t;

  r = r * x;
  t = r * INVERSE_FACTORIAL_5;
  s = s + t;

  r = r * x;
  t = r * INVERSE_FACTORIAL_7;
  s = s + t;

  r = r * x;
  t = r * INVERSE_FACTORIAL_9;
  s = s + t;

  return s;
}

void sincos_taylor_fp32(float a, out float sin_t, out float cos_t) {
  if (a == 0.0) {
    sin_t = 0.0;
    cos_t = 1.0;
  }
  sin_t = sin_taylor_fp32(a);
  cos_t = sqrt(1.0 - sin_t * sin_t);
}

float tan_taylor_fp32(float a) {
    float sin_a;
    float cos_a;

    if (a == 0.0) {
        return 0.0;
    }

    // 2pi range reduction
    float z = floor(a / TWO_PI);
    float r = a - TWO_PI * z;

    float t;
    float q = floor(r / PI_2 + 0.5);
    int j = int(q);

    if (j < -2 || j > 2) {
        return 1.0 / 0.0;
    }

    t = r - PI_2 * q;

    q = floor(t / PI_16 + 0.5);
    int k = int(q);
    int abs_k = int(abs(float(k)));

    if (abs_k > 4) {
        return 1.0 / 0.0;
    } else {
        t = t - PI_16 * q;
    }

    float u = 0.0;
    float v = 0.0;

    float sin_t, cos_t;
    float s, c;
    sincos_taylor_fp32(t, sin_t, cos_t);

    if (k == 0) {
        s = sin_t;
        c = cos_t;
    } else {
        if (abs(float(abs_k) - 1.0) < 0.5) {
            u = COS_TABLE_0;
            v = SIN_TABLE_0;
        } else if (abs(float(abs_k) - 2.0) < 0.5) {
            u = COS_TABLE_1;
            v = SIN_TABLE_1;
        } else if (abs(float(abs_k) - 3.0) < 0.5) {
            u = COS_TABLE_2;
            v = SIN_TABLE_2;
        } else if (abs(float(abs_k) - 4.0) < 0.5) {
            u = COS_TABLE_3;
            v = SIN_TABLE_3;
        }
        if (k > 0) {
            s = u * sin_t + v * cos_t;
            c = u * cos_t - v * sin_t;
        } else {
            s = u * sin_t - v * cos_t;
            c = u * cos_t + v * sin_t;
        }
    }

    if (j == 0) {
        sin_a = s;
        cos_a = c;
    } else if (j == 1) {
        sin_a = c;
        cos_a = -s;
    } else if (j == -1) {
        sin_a = -c;
        cos_a = s;
    } else {
        sin_a = -s;
        cos_a = -c;
    }
    return sin_a / cos_a;
}
#endif

float tan_fp32(float a) {
#ifdef LUMA_FP32_TAN_PRECISION_WORKAROUND
  return tan_taylor_fp32(a);
#else
  return tan(a);
#endif
}
`},Bi=`const SMOOTH_EDGE_RADIUS: f32 = 0.5;

struct VertexGeometry {
  position: vec4<f32>,
  worldPosition: vec3<f32>,
  worldPositionAlt: vec3<f32>,
  normal: vec3<f32>,
  uv: vec2<f32>,
  pickingColor: vec3<f32>,
};

var<private> geometry_: VertexGeometry = VertexGeometry(
  vec4<f32>(0.0, 0.0, 1.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec2<f32>(0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0)
);

struct FragmentGeometry {
  uv: vec2<f32>,
};

var<private> fragmentGeometry: FragmentGeometry;

fn smoothedge(edge: f32, x: f32) -> f32 {
  return smoothstep(edge - SMOOTH_EDGE_RADIUS, edge + SMOOTH_EDGE_RADIUS, x);
}
`,Vi=`#define SMOOTH_EDGE_RADIUS 0.5`,Hi={name:`geometry`,source:Bi,vs:`\
${Vi}

struct VertexGeometry {
  vec4 position;
  vec3 worldPosition;
  vec3 worldPositionAlt;
  vec3 normal;
  vec2 uv;
  vec3 pickingColor;
} geometry = VertexGeometry(
  vec4(0.0, 0.0, 1.0, 0.0),
  vec3(0.0),
  vec3(0.0),
  vec3(0.0),
  vec2(0.0),
  vec3(0.0)
);
`,fs:`\
${Vi}

struct FragmentGeometry {
  vec2 uv;
};
FragmentGeometry geometry;

float smoothedge(float edge, float x) {
  return smoothstep(edge - SMOOTH_EDGE_RADIUS, edge + SMOOTH_EDGE_RADIUS, x);
}
`},W;(function(e){e[e.Start=1]=`Start`,e[e.Move=2]=`Move`,e[e.End=4]=`End`,e[e.Cancel=8]=`Cancel`})(W||={});var G;(function(e){e[e.None=0]=`None`,e[e.Left=1]=`Left`,e[e.Right=2]=`Right`,e[e.Up=4]=`Up`,e[e.Down=8]=`Down`,e[e.Horizontal=3]=`Horizontal`,e[e.Vertical=12]=`Vertical`,e[e.All=15]=`All`})(G||={});var K;(function(e){e[e.Possible=1]=`Possible`,e[e.Began=2]=`Began`,e[e.Changed=4]=`Changed`,e[e.Ended=8]=`Ended`,e[e.Recognized=8]=`Recognized`,e[e.Cancelled=16]=`Cancelled`,e[e.Failed=32]=`Failed`})(K||={});var Ui=`auto`,Wi=`manipulation`,Gi=`none`,Ki=`pan-x`,qi=`pan-y`;function Ji(e){if(e.includes(`none`))return Gi;let t=e.includes(Ki),n=e.includes(qi);return t&&n?Gi:t||n?t?Ki:qi:e.includes(`manipulation`)?Wi:Ui}var Yi=class{constructor(e,t){this.actions=``,this.manager=e,this.set(t)}set(e){e===`compute`&&(e=this.compute()),this.manager.element&&(this.manager.element.style.touchAction=e,this.actions=e)}update(){this.set(this.manager.options.touchAction)}compute(){let e=[];for(let t of this.manager.recognizers)t.options.enable&&(e=e.concat(t.getTouchAction()));return Ji(e.join(` `))}};function Xi(e){return e.trim().split(/\s+/g)}function Zi(e,t,n){if(e)for(let r of Xi(t))e.addEventListener(r,n,!1)}function Qi(e,t,n){if(e)for(let r of Xi(t))e.removeEventListener(r,n,!1)}function $i(e){return(e.ownerDocument||e).defaultView}function ea(e,t){let n=e;for(;n;){if(n===t)return!0;n=n.parentNode}return!1}function ta(e){let t=e.length;if(t===1)return{x:Math.round(e[0].clientX),y:Math.round(e[0].clientY)};let n=0,r=0,i=0;for(;i<t;)n+=e[i].clientX,r+=e[i].clientY,i++;return{x:Math.round(n/t),y:Math.round(r/t)}}function na(e){let t=[],n=0;for(;n<e.pointers.length;)t[n]={clientX:Math.round(e.pointers[n].clientX),clientY:Math.round(e.pointers[n].clientY)},n++;return{timeStamp:Date.now(),pointers:t,center:ta(t),deltaX:e.deltaX,deltaY:e.deltaY}}function ra(e,t){let n=t.x-e.x,r=t.y-e.y;return Math.sqrt(n*n+r*r)}function ia(e,t){let n=t.clientX-e.clientX,r=t.clientY-e.clientY;return Math.sqrt(n*n+r*r)}function aa(e,t){let n=t.x-e.x,r=t.y-e.y;return Math.atan2(r,n)*180/Math.PI}function oa(e,t){let n=t.clientX-e.clientX,r=t.clientY-e.clientY;return Math.atan2(r,n)*180/Math.PI}function sa(e,t){return e===t?G.None:Math.abs(e)>=Math.abs(t)?e<0?G.Left:G.Right:t<0?G.Up:G.Down}function ca(e,t){let n=t.center,r=e.offsetDelta,i=e.prevDelta,a=e.prevInput;return(t.eventType===W.Start||a?.eventType===W.End)&&(i=e.prevDelta={x:a?.deltaX||0,y:a?.deltaY||0},r=e.offsetDelta={x:n.x,y:n.y}),{deltaX:i.x+(n.x-r.x),deltaY:i.y+(n.y-r.y)}}function la(e,t,n){return{x:t/e||0,y:n/e||0}}function ua(e,t){return ia(t[0],t[1])/ia(e[0],e[1])}function da(e,t){return oa(t[1],t[0])-oa(e[1],e[0])}function fa(e,t){let n=e.lastInterval||t,r=t.timeStamp-n.timeStamp,i,a,o,s;if(t.eventType!==W.Cancel&&(r>25||n.velocity===void 0)){let c=t.deltaX-n.deltaX,l=t.deltaY-n.deltaY,u=la(r,c,l);a=u.x,o=u.y,i=Math.abs(u.x)>Math.abs(u.y)?u.x:u.y,s=sa(c,l),e.lastInterval=t}else i=n.velocity,a=n.velocityX,o=n.velocityY,s=n.direction;t.velocity=i,t.velocityX=a,t.velocityY=o,t.direction=s}function pa(e,t){return`pointerId`in e?e.pointerId:t}function ma(e,t){e.movementOrigin=new Map(t.map((e,t)=>[pa(e,t),{clientX:e.clientX,clientY:e.clientY}])),e.firstMovementTime=void 0}function ha(e,t){let n=t.pointers.map(pa);if(e.movementOrigin?.size===n.length&&n.every(t=>e.movementOrigin.has(t))||ma(e,t.pointers),t.distancePerPointer=t.pointers.map((t,r)=>ia(e.movementOrigin.get(n[r]),t)),t.eventType&W.Move&&t.distancePerPointer.some(e=>e>0)&&(e.firstMovementTime??=t.timeStamp),t.movementDeltaTime=e.firstMovementTime===void 0?0:t.timeStamp-e.firstMovementTime,t.eventType&(W.End|W.Cancel)){let r=t.changedPointers.map(e=>pa(e,t.pointers.indexOf(e)));ma(e,t.pointers.filter((e,t)=>!r.includes(n[t])))}}function ga(e,t){let{session:n}=e,{pointers:r}=t,{length:i}=r;n.firstInput||=na(t),i>1&&!n.firstMultiple?n.firstMultiple=na(t):i===1&&(n.firstMultiple=!1);let{firstInput:a,firstMultiple:o}=n,s=o?o.center:a.center,c=t.center=ta(r);t.timeStamp=Date.now(),t.deltaTime=t.timeStamp-a.timeStamp,ha(n,t),t.angle=aa(s,c),t.distance=ra(s,c);let{deltaX:l,deltaY:u}=ca(n,t);t.deltaX=l,t.deltaY=u,t.offsetDirection=sa(t.deltaX,t.deltaY);let d=la(t.deltaTime,t.deltaX,t.deltaY);t.overallVelocityX=d.x,t.overallVelocityY=d.y,t.overallVelocity=Math.abs(d.x)>Math.abs(d.y)?d.x:d.y,t.scale=o?ua(o.pointers,r):1,t.rotation=o?da(o.pointers,r):0,t.maxPointers=n.prevInput?t.pointers.length>n.prevInput.maxPointers?t.pointers.length:n.prevInput.maxPointers:t.pointers.length;let f=e.element;return ea(t.srcEvent.target,f)&&(f=t.srcEvent.target),t.target=f,fa(n,t),t}function _a(e,t,n){let r=n.pointers.length,i=n.changedPointers.length,a=t&W.Start&&r-i===0,o=t&(W.End|W.Cancel)&&r-i===0;n.isFirst=!!a,n.isFinal=!!o,a&&(e.session={}),n.eventType=t;let s=ga(e,n);e.emit(`hammer.input`,s),e.recognize(s),e.session.prevInput=s}var va=class{constructor(e){this.evEl=``,this.evWin=``,this.evTarget=``,this.domHandler=e=>{this.manager.options.enable&&this.handler(e)},this.manager=e,this.element=e.element,this.target=e.options.inputTarget||e.element}callback(e,t){_a(this.manager,e,t)}init(){Zi(this.element,this.evEl,this.domHandler),Zi(this.target,this.evTarget,this.domHandler),Zi($i(this.element),this.evWin,this.domHandler)}destroy(){Qi(this.element,this.evEl,this.domHandler),Qi(this.target,this.evTarget,this.domHandler),Qi($i(this.element),this.evWin,this.domHandler)}},ya={pointerdown:W.Start,pointermove:W.Move,pointerup:W.End,pointercancel:W.Cancel,pointerout:W.Cancel},ba=`pointerdown`,xa=`pointermove pointerup pointercancel`,Sa=class extends va{constructor(e){super(e),this.evEl=ba,this.evWin=xa,this.store=this.manager.session.pointerEvents=[],this.init()}handler(e){let{store:t}=this,n=!1,r=ya[e.type],i=e.pointerType,a=i===`touch`,o=t.findIndex(t=>t.pointerId===e.pointerId);r&W.Start&&(e.buttons||a)?o<0&&(t.push(e),o=t.length-1):r&(W.End|W.Cancel)&&(n=!0),o<0||(t[o]=e,this.callback(r,{pointers:t,changedPointers:[e],eventType:r,pointerType:i,srcEvent:e}),n&&t.splice(o,1))}},Ca=[``,`webkit`,`Moz`,`MS`,`ms`,`o`];function wa(e,t){let n=t[0].toUpperCase()+t.slice(1);for(let r of Ca){let i=r?r+n:t;if(i in e)return i}}var Ta=1,Ea=2,Da={touchAction:`compute`,enable:!0,inputTarget:null,cssProps:{userSelect:`none`,userDrag:`none`,touchCallout:`none`,tapHighlightColor:`rgba(0,0,0,0)`}},Oa=class{constructor(e,t){this.options={...Da,...t,cssProps:{...Da.cssProps,...t.cssProps},inputTarget:t.inputTarget||e},this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=e,this.input=new Sa(this),this.touchAction=new Yi(this,this.options.touchAction),this.toggleCssProps(!0)}set(e){return Object.assign(this.options,e),e.touchAction&&this.touchAction.update(),e.inputTarget&&(this.input.destroy(),this.input.target=e.inputTarget,this.input.init()),this}stop(e){this.session.stopped=e?Ea:Ta}recognize(e){let{session:t}=this;if(t.stopped)return;this.session.prevented&&e.srcEvent.preventDefault();let n,{recognizers:r}=this,{curRecognizer:i}=t;(!i||i&&i.state&K.Recognized)&&(i=t.curRecognizer=null);let a=0;for(;a<r.length;)n=r[a],t.stopped!==Ea&&(!i||n===i||n.canRecognizeWith(i))?n.recognize(e):n.reset(),!i&&n.state&(K.Began|K.Changed|K.Ended)&&(i=t.curRecognizer=n),a++}get(e){let{recognizers:t}=this;for(let n=0;n<t.length;n++)if(t[n].options.event===e)return t[n];return null}add(e){if(Array.isArray(e)){for(let t of e)this.add(t);return this}let t=this.get(e.options.event);return t&&this.remove(t),this.recognizers.push(e),e.manager=this,this.touchAction.update(),e}remove(e){if(Array.isArray(e)){for(let t of e)this.remove(t);return this}let t=typeof e==`string`?this.get(e):e;if(t){let{recognizers:e}=this,n=e.indexOf(t);n!==-1&&(e.splice(n,1),this.touchAction.update())}return this}on(e,t){if(!e||!t)return;let{handlers:n}=this;for(let r of Xi(e))n[r]=n[r]||[],n[r].push(t)}off(e,t){if(!e)return;let{handlers:n}=this;for(let r of Xi(e))t?n[r]&&n[r].splice(n[r].indexOf(t),1):delete n[r]}emit(e,t){let n=this.handlers[e]&&this.handlers[e].slice();if(!n||!n.length)return;let r=t;r.type=e,r.preventDefault=function(){t.srcEvent.preventDefault()};let i=0;for(;i<n.length;)n[i](r),i++}destroy(){this.toggleCssProps(!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}toggleCssProps(e){let{element:t}=this;if(t){for(let[n,r]of Object.entries(this.options.cssProps)){let i=wa(t.style,n);e?(this.oldCssProps[i]=t.style[i],t.style[i]=r):t.style[i]=this.oldCssProps[i]||``}e||(this.oldCssProps={})}}},ka=1;function Aa(){return ka++}function ja(e){return e&K.Cancelled?`cancel`:e&K.Ended?`end`:e&K.Changed?`move`:e&K.Began?`start`:``}var Ma=class{constructor(e){this.options=e,this.id=Aa(),this.state=K.Possible,this.simultaneous={},this.requireFail=[]}set(e){return Object.assign(this.options,e),this.manager.touchAction.update(),this}recognizeWith(e){if(Array.isArray(e)){for(let t of e)this.recognizeWith(t);return this}let t;if(typeof e==`string`){if(t=this.manager.get(e),!t)throw Error(`Cannot find recognizer ${e}`)}else t=e;let{simultaneous:n}=this;return n[t.id]||(n[t.id]=t,t.recognizeWith(this)),this}dropRecognizeWith(e){if(Array.isArray(e)){for(let t of e)this.dropRecognizeWith(t);return this}let t;return t=typeof e==`string`?this.manager.get(e):e,t&&delete this.simultaneous[t.id],this}requireFailure(e){if(Array.isArray(e)){for(let t of e)this.requireFailure(t);return this}let t;if(typeof e==`string`){if(t=this.manager.get(e),!t)throw Error(`Cannot find recognizer ${e}`)}else t=e;let{requireFail:n}=this;return n.indexOf(t)===-1&&(n.push(t),t.requireFailure(this)),this}dropRequireFailure(e){if(Array.isArray(e)){for(let t of e)this.dropRequireFailure(t);return this}let t;if(t=typeof e==`string`?this.manager.get(e):e,t){let e=this.requireFail.indexOf(t);e>-1&&this.requireFail.splice(e,1)}return this}hasRequireFailures(){return!!this.requireFail.find(e=>e.options.enable)}canRecognizeWith(e){return!!this.simultaneous[e.id]}emit(e){if(!e)return;let{state:t}=this;t<K.Ended&&this.manager.emit(this.options.event+ja(t),e),this.manager.emit(this.options.event,e),e.additionalEvent&&this.manager.emit(e.additionalEvent,e),t>=K.Ended&&this.manager.emit(this.options.event+ja(t),e)}tryEmit(e){this.canEmit()?this.emit(e):this.state=K.Failed}canEmit(){let e=0;for(;e<this.requireFail.length;){if(!(this.requireFail[e].state&(K.Failed|K.Possible)))return!1;e++}return!0}recognize(e){let t={...e};this.options.enable?(this.state&(K.Recognized|K.Cancelled|K.Failed)&&(this.state=K.Possible),this.state=this.process(t),this.state&(K.Began|K.Changed|K.Ended|K.Cancelled)&&this.tryEmit(t)):(this.reset(),this.state=K.Failed)}getEventNames(){return[this.options.event]}reset(){}};function Na(e){return Math.abs(((e+180)%360+360)%360-180)}function Pa(e,t){return(t.distance===void 0||e.distance>=t.distance)&&(t.distancePerPointer===void 0||e.distancePerPointer.length>0&&e.distancePerPointer.every(e=>e>=t.distancePerPointer))&&(t.movementDeltaTime===void 0||e.movementDeltaTime>=t.movementDeltaTime)&&(t.rotation===void 0||Na(e.rotation)>=t.rotation)&&(t.scale===void 0||Math.abs(e.scale-1)>=t.scale)}var Fa=class extends Ma{attrTest(e){let t=this.options.pointers;return t===0||e.pointers.length===t}coherentTest(e){let t=this.options.coherent;return!t?.length||t.some(t=>Pa(e,t))}process(e){let{state:t}=this,{eventType:n}=e,r=t&(K.Began|K.Changed),i=this.attrTest(e);return r&&(n&W.Cancel||!i)?t|K.Cancelled:r||i?n&W.End?t|K.Ended:t&K.Began?t|K.Changed:K.Began:K.Failed}},Ia=[``,`start`,`move`,`end`,`cancel`],La=class extends Ma{constructor(e={}){super({enable:!0,event:`doubleclickdrag`,pointers:1,interval:500,time:350,threshold:28,dragThreshold:1,pixelsPerScale:120,...e}),this._tapStart=null,this._lastTap=null,this._drag=null,this._emittedStart=!1}getTouchAction(){return[Wi]}getEventNames(){return Ia.map(e=>this.options.event+e)}process(e){let{options:t}=this;return e.pointers.length===t.pointers?e.eventType&W.Start?this._handleStart(e):e.eventType&W.Move?this._handleMove(e):e.eventType&W.Cancel?this._handleEnd(e,!0):e.eventType&W.End?this._handleEnd(e,!1):K.Failed:(this.reset(),K.Failed)}reset(){this._tapStart=null,this._lastTap=null,this._drag=null,this._emittedStart=!1}emit(e){if(e){if(this.state===K.Began){if(!this._drag?.active||this._emittedStart)return;this._emittedStart=!0,this.manager.emit(`${this.options.event}start`,e),this.manager.emit(this.options.event,e)}else if(this.state===K.Changed){if(!this._emittedStart)return;this.manager.emit(`${this.options.event}move`,e),this.manager.emit(this.options.event,e)}else if(this.state===K.Ended){if(!this._emittedStart)return;this.manager.emit(this.options.event,e),this.manager.emit(`${this.options.event}end`,e),this._emittedStart=!1}else if(this.state===K.Cancelled){if(!this._emittedStart)return;this.manager.emit(this.options.event,e),this.manager.emit(`${this.options.event}cancel`,e),this._emittedStart=!1}}}_handleStart(e){let t=this._getPointerId(e);return this._lastTap&&this._isTapMatch(e,this._lastTap)?(this._tapStart=null,this._lastTap=null,this._drag={startCenter:e.center,pointerId:t,active:!1},this._emittedStart=!1,K.Began):(this._tapStart={center:e.center,timeStamp:e.timeStamp,pointerId:t},this._lastTap=null,this._drag=null,this._emittedStart=!1,K.Failed)}_handleMove(e){if(!this._drag||!this._isSamePointer(e,this._drag.pointerId))return K.Failed;let t=this._drag.startCenter.y-e.center.y;return!this._drag.active&&Math.abs(t)<this.options.dragThreshold?K.Began:(this._drag.active=!0,e.scale=2**(t/this.options.pixelsPerScale),this._emittedStart?K.Changed:K.Began)}_handleEnd(e,t){if(this._drag&&this._isSamePointer(e,this._drag.pointerId)){let{active:n,startCenter:r}=this._drag;return this._drag=null,this._tapStart=null,this._lastTap=null,n?(e.scale=2**((r.y-e.center.y)/this.options.pixelsPerScale),t?K.Cancelled:K.Ended):(this._emittedStart=!1,K.Failed)}return!this._tapStart||!this._isSamePointer(e,this._tapStart.pointerId)?(t&&this.reset(),K.Failed):(this._lastTap=this._isValidTap(e)?{center:e.center,timeStamp:e.timeStamp,pointerId:this._tapStart.pointerId}:null,this._tapStart=null,K.Failed)}_isTapMatch(e,t){return e.timeStamp-t.timeStamp<=this.options.interval&&ra(e.center,t.center)<=this.options.threshold}_isValidTap(e){return e.deltaTime<=this.options.time&&e.distance<=this.options.threshold}_getPointerId(e){return`pointerId`in e.srcEvent?e.srcEvent.pointerId:null}_isSamePointer(e,t){return t===null||this._getPointerId(e)===t}},Ra=class extends Ma{constructor(e={}){super({enable:!0,event:`tap`,pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10,...e}),this.pTime=null,this.pCenter=null,this._timer=null,this._input=null,this.count=0}getTouchAction(){return[Wi]}process(e){let{options:t}=this,n=e.pointers.length===t.pointers,r=e.distance<t.threshold,i=e.deltaTime<t.time;if(this.reset(),e.eventType&W.Start&&this.count===0)return this.failTimeout();if(r&&i&&n){if(e.eventType!==W.End)return this.failTimeout();let n=!this.pTime||e.timeStamp-this.pTime<t.interval,r=!this.pCenter||ra(this.pCenter,e.center)<t.posThreshold;if(this.pTime=e.timeStamp,this.pCenter=e.center,!r||!n?this.count=1:this.count+=1,this._input=e,this.count%t.taps===0)return this.hasRequireFailures()?(this._timer=setTimeout(()=>{this.state=K.Recognized,this.tryEmit(this._input)},t.interval),K.Began):K.Recognized}return K.Failed}failTimeout(){return this._timer=setTimeout(()=>{this.state=K.Failed},this.options.interval),K.Failed}reset(){clearTimeout(this._timer)}emit(e){this.state===K.Recognized&&(e.tapCount=this.count,this.manager.emit(this.options.event,e))}},za=class extends Fa{constructor(){super(...arguments),this.wheelSession=null,this.wheelSessionUnsubscribe=null,this.handleWheelSessionEvent=e=>{e.device===`trackpad`&&this.handleTrackpadEvent(e)}}set(e){let{wheelSession:t,...n}=e;return t&&t!==this.wheelSession&&(this.wheelSessionUnsubscribe?.(),this.wheelSessionUnsubscribe=null,this.wheelSession=t),super.set(n),this.updateWheelSessionSubscription(),this}getTrackpadInput(e,t={}){let{srcEvent:n}=e,r=t.deltaX??e.deltaX,i=t.deltaY??e.deltaY,a=sa(r,i),o=Math.sqrt(e.deltaX*e.deltaX+e.deltaY*e.deltaY),s=n;return{pointers:[s,s],changedPointers:[s,s],pointerType:`trackpad`,srcEvent:s,eventType:e.eventType,timeStamp:e.timeStamp,deltaTime:e.deltaTime,center:e.center,deltaX:r,deltaY:i,angle:Math.atan2(i,r)*180/Math.PI,distance:Math.sqrt(r*r+i*i),distancePerPointer:[o,o],movementDeltaTime:e.deltaTime,scale:1,rotation:0,direction:a,offsetDirection:a,velocity:e.velocity,velocityX:e.velocityX,velocityY:e.velocityY,overallVelocity:e.overallVelocity,overallVelocityX:e.overallVelocityX,overallVelocityY:e.overallVelocityY,maxPointers:2,target:n.target||this.manager.element,additionalEvent:``,...t}}updateWheelSessionSubscription(){let e=!!(this.wheelSession&&this.options.enable&&this.options.trackpad&&this.options.pointers===2);e&&!this.wheelSessionUnsubscribe?this.wheelSessionUnsubscribe=this.wheelSession.on(this.handleWheelSessionEvent):!e&&this.wheelSessionUnsubscribe&&(this.wheelSessionUnsubscribe(),this.wheelSessionUnsubscribe=null)}},Ba=[``,`start`,`move`,`end`,`cancel`,`up`,`down`,`left`,`right`],Va=class extends za{constructor(e={}){super({enable:!0,pointers:1,event:`pan`,threshold:10,direction:G.All,trackpad:!1,coherent:[],...e}),this.trackpadGesture=!1,this.pX=null,this.pY=null}getTouchAction(){let{options:{direction:e}}=this,t=[];return e&G.Horizontal&&t.push(qi),e&G.Vertical&&t.push(Ki),t}getEventNames(){return Ba.map(e=>this.options.event+e)}directionTest(e){let{options:t}=this,n=!0,{distance:r}=e,{direction:i}=e,a=e.deltaX,o=e.deltaY;return i&t.direction||(t.direction&G.Horizontal?(i=a===0?G.None:a<0?G.Left:G.Right,n=a!==this.pX,r=Math.abs(e.deltaX)):(i=o===0?G.None:o<0?G.Up:G.Down,n=o!==this.pY,r=Math.abs(e.deltaY))),e.direction=i,n&&r>t.threshold&&!!(i&t.direction)}attrTest(e){let t=!!(this.state&K.Began),n=!(this.options.coherent?.length&&e.eventType&(W.End|W.Cancel));return super.attrTest(e)&&(t||n&&this.coherentTest(e)&&this.directionTest(e))}emit(e){this.pX=e.deltaX,this.pY=e.deltaY;let t=G[e.direction].toLowerCase();t&&(e.additionalEvent=this.options.event+t),super.emit(e)}handleTrackpadEvent(e){e.isFirst&&(this.trackpadGesture=!e.srcEvent.ctrlKey,!this.trackpadGesture&&this.state&(K.Recognized|K.Cancelled|K.Failed)&&(this.state=K.Possible)),this.trackpadGesture&&(this.recognize(this.getTrackpadInput(e,{deltaX:-e.deltaX,deltaY:-e.deltaY,velocity:-e.velocity,velocityX:-e.velocityX,velocityY:-e.velocityY,overallVelocity:-e.overallVelocity,overallVelocityX:-e.overallVelocityX,overallVelocityY:-e.overallVelocityY})),e.isFinal&&(this.trackpadGesture=!1))}},Ha=[``,`start`,`move`,`end`,`cancel`,`in`,`out`],Ua=class extends za{constructor(e={}){super({enable:!0,event:`pinch`,threshold:0,pointers:2,trackpad:!1,coherent:[],...e}),this.trackpadGesture=!1}getTouchAction(){return[Gi]}getEventNames(){return Ha.map(e=>this.options.event+e)}attrTest(e){let t=!!this.options.coherent?.length,n=!!(this.state&K.Began),r=!(t&&e.eventType&(W.End|W.Cancel));return super.attrTest(e)&&(n||r&&(t?this.coherentTest(e):Math.abs(e.scale-1)>this.options.threshold))}emit(e){if(e.scale!==1){let t=e.scale<1?`in`:`out`;e.additionalEvent=this.options.event+t}super.emit(e)}handleTrackpadEvent(e){e.isFirst&&(this.trackpadGesture=e.srcEvent.ctrlKey,!this.trackpadGesture&&this.state&(K.Recognized|K.Cancelled|K.Failed)&&(this.state=K.Possible)),this.trackpadGesture&&(this.recognize(this.getTrackpadInput(e,{deltaX:0,deltaY:0,velocity:0,velocityX:0,velocityY:0,overallVelocity:0,overallVelocityX:0,overallVelocityY:0,scale:Math.exp(-e.deltaY/100)})),e.isFinal&&(this.trackpadGesture=!1))}},Wa=class{constructor(e,t,n){this.element=e,this.callback=t,this.options=n}listen(e,t){t?this.element.addEventListener(e,this.handleEvent,{passive:!1}):this.element.removeEventListener(e,this.handleEvent)}},Ga=(typeof navigator<`u`&&navigator.userAgent?navigator.userAgent.toLowerCase():``).indexOf(`firefox`)!==-1,Ka=40,qa=.25,Ja=class extends Wa{constructor(e,t,n){n.enable=n.enable??!1,super(e,t,n),this.handleEvent=e=>{if(!this.options.enable)return;let t=e.deltaY;globalThis.WheelEvent&&(Ga&&e.deltaMode===globalThis.WheelEvent.DOM_DELTA_PIXEL&&(t/=globalThis.devicePixelRatio),e.deltaMode===globalThis.WheelEvent.DOM_DELTA_LINE&&(t*=Ka)),e.shiftKey&&t&&(t*=qa),this.callback({type:`wheel`,center:{x:e.clientX,y:e.clientY},delta:-t,device:this.options.wheelSession?.device??`unknown`,srcEvent:e,pointerType:`mouse`,target:e.target})},n.enable&&(this.wheelSessionUnsubscribe=this.options.wheelSession?.on(()=>{}),this.listen(`wheel`,!0))}destroy(){this.listen(`wheel`,!1),this.wheelSessionUnsubscribe?.(),this.wheelSessionUnsubscribe=void 0}enableEventType(e,t){e===`wheel`&&this.options.enable!==t&&(this.options.enable=t,t&&!this.wheelSessionUnsubscribe&&(this.wheelSessionUnsubscribe=this.options.wheelSession?.on(()=>{})),this.listen(`wheel`,t),t||(this.wheelSessionUnsubscribe?.(),this.wheelSessionUnsubscribe=void 0))}},Ya=4.000244140625,Xa=40,Za=0,Qa=1,$a=40,eo=40,to=120,no={classificationDelay:32,endDelay:80},ro=class{constructor(e,t={}){this.subscriptions=new Map,this.session=null,this.classificationTimer=null,this.endTimer=null,this.pressedControlKeys=new Set,this.listeningForControlKeys=!1,this.handleEvent=e=>{if(!this.hasSubscribers)return`unknown`;let t=ao(e,this.pressedControlKeys.size>0),n=this.session;if(n&&t.timeStamp-n.lastTimeStamp>=this.options.endDelay){if(this.end(),!this.hasSubscribers)return`unknown`;n=null}n?(this.scheduleEnd(),this.addSample(n,t)):(n=this.startPendingSession(t),this.scheduleEnd());let{device:r}=n;return r===`unknown`&&(r=oo(n.samples,!1),r!==`unknown`&&this.begin(n,r)),r},this.finishClassification=()=>{if(this.classificationTimer=null,!this.session||this.session.device!==`unknown`)return;let e=this.session,t=oo(e.samples,!0);this.begin(e,t===`unknown`?`mouse`:t)},this.end=()=>{if(!this.session)return;if(this.session.device===`unknown`){let e=this.session,t=oo(e.samples,!0);this.begin(e,t===`unknown`?`mouse`:t)}if(!this.session)return;let e=this.session;this.emit(W.End,e.lastEvent),this.reset()},this.handleKeyDown=e=>{e.key===`Control`&&this.pressedControlKeys.add(e.code||e.key)},this.handleKeyUp=e=>{e.key===`Control`&&(e.code?this.pressedControlKeys.delete(e.code):this.pressedControlKeys.clear())},this.handleWindowBlur=()=>{this.pressedControlKeys.clear()},this.element=e,this.options={...no,...t},this.element?.addEventListener(`wheel`,this.handleEvent,{passive:!0})}get hasSubscribers(){return this.subscriptions.size>0}get device(){return this.session?.device??`unknown`}on(e){let t={listener:e};return this.subscriptions.set(e,t),this.updateControlKeyEventListeners(),()=>{this.subscriptions.get(e)===t&&this.off(e)}}off(e){this.subscriptions.delete(e),this.updateControlKeyEventListeners(),this.hasSubscribers||this.reset()}cancel(){let e=this.session;e&&e.device!==`unknown`&&this.emit(W.Cancel,e.lastEvent),this.reset()}destroy(){this.cancel(),this.subscriptions.clear(),this.updateControlKeyEventListeners(),this.element?.removeEventListener(`wheel`,this.handleEvent)}startPendingSession(e){let t={samples:[e],device:`unknown`,firstTimeStamp:e.timeStamp,lastTimeStamp:e.timeStamp,totalDeltaX:e.deltaX,totalDeltaY:e.deltaY,velocityX:0,velocityY:0,lastEvent:e.event};return this.session=t,this.classificationTimer=globalThis.setTimeout(this.finishClassification,this.options.classificationDelay),t}addSample(e,t){if(e.samples.push(t),e.lastTimeStamp=t.timeStamp,e.lastEvent=t.event,e.totalDeltaX+=t.deltaX,e.totalDeltaY+=t.deltaY,e.device!==`unknown`){let n=e.samples[e.samples.length-2],r=t.timeStamp-n.timeStamp;e.velocityX=r>0?t.deltaX/r:0,e.velocityY=r>0?t.deltaY/r:0,this.emit(W.Move,t.event,{velocityX:e.velocityX,velocityY:e.velocityY})}}begin(e,t){e.device=t,this.clearClassificationTimer(),this.emit(W.Start,e.samples[0].event);let n=e.lastTimeStamp-e.firstTimeStamp;e.velocityX=n>0?e.totalDeltaX/n:0,e.velocityY=n>0?e.totalDeltaY/n:0,this.emit(W.Move,e.lastEvent,{velocityX:e.velocityX,velocityY:e.velocityY})}scheduleEnd(){this.clearEndTimer(),this.endTimer=globalThis.setTimeout(this.end,this.options.endDelay)}emit(e,t,n){let r=this.session;if(!r||r.device===`unknown`)return;let i=e===W.Start,a=e===W.End||e===W.Cancel,o=i?r.firstTimeStamp:r.lastTimeStamp,s=i?0:Math.max(0,o-r.firstTimeStamp),c=i?0:r.totalDeltaX,l=i?0:r.totalDeltaY,u=s>0?c/s:0,d=s>0?l/s:0,f=i?0:n?.velocityX??r.velocityX,p=i?0:n?.velocityY??r.velocityY,m={eventType:e,device:r.device,srcEvent:t,timeStamp:o,center:{x:t.clientX,y:t.clientY},deltaX:c,deltaY:l,deltaTime:s,velocity:Math.abs(f)>Math.abs(p)?f:p,velocityX:f,velocityY:p,overallVelocity:Math.abs(u)>Math.abs(d)?u:d,overallVelocityX:u,overallVelocityY:d,isFirst:i,isFinal:a};for(let{listener:e}of[...this.subscriptions.values()])e(m)}reset(){this.clearClassificationTimer(),this.clearEndTimer(),this.session=null}clearClassificationTimer(){this.classificationTimer!==null&&(globalThis.clearTimeout(this.classificationTimer),this.classificationTimer=null)}clearEndTimer(){this.endTimer!==null&&(globalThis.clearTimeout(this.endTimer),this.endTimer=null)}updateControlKeyEventListeners(){let e=this.hasSubscribers,t=io();t&&e!==this.listeningForControlKeys&&(this.listeningForControlKeys=e,e?(t.addEventListener(`keydown`,this.handleKeyDown,!0),t.addEventListener(`keyup`,this.handleKeyUp,!0),t.addEventListener(`blur`,this.handleWindowBlur)):(t.removeEventListener(`keydown`,this.handleKeyDown,!0),t.removeEventListener(`keyup`,this.handleKeyUp,!0),t.removeEventListener(`blur`,this.handleWindowBlur),this.pressedControlKeys.clear()))}};function io(){return typeof window<`u`?window:globalThis.document?.defaultView}function ao(e,t){let n=e.deltaX,r=e.deltaY;return e.deltaMode===Qa&&(n*=Xa,r*=Xa),{event:e,timeStamp:e.timeStamp,deltaX:n,deltaY:r,isControlKeyDown:t}}function oo(e,t){return e.some(({event:e,isControlKeyDown:t})=>e.ctrlKey&&!t)?`trackpad`:e.some(({event:e})=>e.deltaMode!==Za)||e.some(so)||e.every(({event:e})=>{let t=e.wheelDelta;return t!==void 0&&Math.abs(t)%40==0})?`mouse`:e.some(({deltaX:e})=>e!==0)||e.length>1&&co(e)?`trackpad`:t?`mouse`:`unknown`}function so({event:e,deltaX:t,deltaY:n}){if(t!==0||n===0)return!1;let r=Math.abs(n/Ya);if(Number.isInteger(r))return!0;let i=e.wheelDelta;return typeof i==`number`&&i!==0&&i%to===0}function co(e){for(let t=0;t<e.length;t++){let n=e[t];if(Math.abs(n.deltaX)>eo||Math.abs(n.deltaY)>eo||t>0&&n.timeStamp-e[t-1].timeStamp>$a)return!1}return!0}var lo=[`mousedown`,`mousemove`,`mouseup`,`mouseover`,`mouseout`,`mouseenter`,`mouseleave`],uo=class extends Wa{constructor(e,t,n){super(e,t,{enable:!0,...n}),this.handleEvent=e=>{this.handleOverEvent(e),this.handleOutEvent(e),this.handleEnterEvent(e),this.handleLeaveEvent(e),this.handleMoveEvent(e)},this.pressed=!1;let{enable:r=!1}=this.options;this.enableMoveEvent=r,this.enableLeaveEvent=r,this.enableEnterEvent=r,this.enableOutEvent=r,this.enableOverEvent=r,r&&lo.forEach(e=>this.listen(e,!0))}destroy(){lo.forEach(e=>this.listen(e,!1))}enableEventType(e,t){switch(e){case`pointermove`:this.enableMoveEvent!==t&&(this.enableMoveEvent=t,this.listen(`mousedown`,t),this.listen(`mousemove`,t),this.listen(`mouseup`,t));break;case`pointerover`:this.enableOverEvent!==t&&(this.enableOverEvent=t,this.listen(`mouseover`,t));break;case`pointerout`:this.enableOutEvent!==t&&(this.enableOutEvent=t,this.listen(`mouseout`,t));break;case`pointerenter`:this.enableEnterEvent!==t&&(this.enableEnterEvent=t,this.listen(`mouseenter`,t));break;case`pointerleave`:this.enableLeaveEvent!==t&&(this.enableLeaveEvent=t,this.listen(`mouseleave`,t))}}handleOverEvent(e){this.enableOverEvent&&e.type===`mouseover`&&this._emit(`pointerover`,e)}handleOutEvent(e){this.enableOutEvent&&e.type===`mouseout`&&this._emit(`pointerout`,e)}handleEnterEvent(e){this.enableEnterEvent&&e.type===`mouseenter`&&this._emit(`pointerenter`,e)}handleLeaveEvent(e){this.enableLeaveEvent&&e.type===`mouseleave`&&this._emit(`pointerleave`,e)}handleMoveEvent(e){if(this.enableMoveEvent)switch(e.type){case`mousedown`:e.button>=0&&(this.pressed=!0);break;case`mousemove`:e.buttons===0&&(this.pressed=!1),this.pressed||this._emit(`pointermove`,e);break;case`mouseup`:this.pressed=!1}}_emit(e,t){this.callback({type:e,center:{x:t.clientX,y:t.clientY},srcEvent:t,pointerType:`mouse`,target:t.target})}},fo=[`keydown`,`keyup`],po=class extends Wa{constructor(e,t,n){super(e,t,{enable:!0,tabIndex:0,...n}),this.handleEvent=e=>{let t=e.target||e.srcElement;t.tagName===`INPUT`&&t.type===`text`||t.tagName===`TEXTAREA`||(this.enableDownEvent&&e.type===`keydown`&&this.callback({type:`keydown`,srcEvent:e,key:e.key,target:e.target}),this.enableUpEvent&&e.type===`keyup`&&this.callback({type:`keyup`,srcEvent:e,key:e.key,target:e.target}))};let{enable:r=!1}=this.options;this.enableDownEvent=r,this.enableUpEvent=r,e.tabIndex=this.options.tabIndex,e.style.outline=`none`,r&&fo.forEach(e=>this.listen(e,!0))}destroy(){fo.forEach(e=>this.listen(e,!1))}enableEventType(e,t){e===`keydown`&&this.enableDownEvent!==t&&(this.enableDownEvent=t,this.listen(e,t)),e===`keyup`&&this.enableUpEvent!==t&&(this.enableUpEvent=t,this.listen(e,t))}},mo=class extends Wa{constructor(e,t,n){n.enable=n.enable??!1,super(e,t,n),this.handleEvent=e=>{this.options.enable&&this.callback({type:`contextmenu`,center:{x:e.clientX,y:e.clientY},srcEvent:e,pointerType:`mouse`,target:e.target})},n.enable&&this.listen(`contextmenu`,!0)}destroy(){this.listen(`contextmenu`,!1)}enableEventType(e,t){e===`contextmenu`&&this.options.enable!==t&&(this.options.enable=t,this.listen(`contextmenu`,t))}},ho=1,go=2,_o=4,vo={pointerdown:ho,pointermove:go,pointerup:_o,mousedown:ho,mousemove:go,mouseup:_o},yo=0,bo=1,xo=2,So=1,Co=2,wo=4;function To(e){let t=vo[e.srcEvent.type];if(!t)return null;let{buttons:n,button:r}=e.srcEvent,i=!1,a=!1,o=!1;return t===go?(i=!!(n&So),a=!!(n&wo),o=!!(n&Co)):(i=r===yo,a=r===bo,o=r===xo),{leftButton:i,middleButton:a,rightButton:o}}function Eo(e,t){let n=e.center;if(!n)return null;let r=t.getBoundingClientRect(),i=r.width/t.offsetWidth||1,a=r.height/t.offsetHeight||1;return{center:n,offsetCenter:{x:(n.x-r.left-t.clientLeft)/i,y:(n.y-r.top-t.clientTop)/a}}}var Do={srcElement:`root`,priority:0},Oo=class{constructor(e,t){this.handleEvent=e=>{if(this.isEmpty())return;let t=this._normalizeEvent(e),n=e.srcEvent.target;for(;n&&n!==t.rootElement;){if(this._emit(t,n),t.handled)return;n=n.parentNode}this._emit(t,`root`)},this.eventManager=e,this.recognizerName=t,this.handlers=[],this.handlersByElement=new Map,this._active=!1}isEmpty(){return!this._active}add(e,t,n,r=!1,i=!1){let{handlers:a,handlersByElement:o}=this,s={...Do,...n},c=o.get(s.srcElement);c||(c=[],o.set(s.srcElement,c));let l={type:e,handler:t,srcElement:s.srcElement,priority:s.priority};r&&(l.once=!0),i&&(l.passive=!0),a.push(l),this._active=this._active||!l.passive;let u=c.length-1;for(;u>=0&&!(c[u].priority>=l.priority);)u--;c.splice(u+1,0,l)}remove(e,t){let{handlers:n,handlersByElement:r}=this;for(let i=n.length-1;i>=0;i--){let a=n[i];if(a.type===e&&a.handler===t){n.splice(i,1);let e=r.get(a.srcElement);e.splice(e.indexOf(a),1),e.length===0&&r.delete(a.srcElement)}}this._active=n.some(e=>!e.passive)}_emit(e,t){let n=this.handlersByElement.get(t);if(n){let t=!1,r=()=>{e.handled=!0},i=()=>{e.handled=!0,t=!0},a=[];for(let o=0;o<n.length;o++){let{type:s,handler:c,once:l}=n[o];if(c({...e,type:s,stopPropagation:r,stopImmediatePropagation:i}),l&&a.push(n[o]),t)break}for(let e=0;e<a.length;e++){let{type:t,handler:n}=a[e];this.remove(t,n)}}}_normalizeEvent(e){let t=this.eventManager.getElement();return{...e,...To(e),...Eo(e,t),preventDefault:()=>{e.srcEvent.preventDefault()},stopImmediatePropagation:null,stopPropagation:null,handled:!1,rootElement:t}}};function ko(e){if(`recognizer`in e)return e;let t,n=Array.isArray(e)?[...e]:[e];return t=typeof n[0]==`function`?new(n.shift())(n.shift()||{}):n.shift(),{recognizer:t,recognizeWith:typeof n[0]==`string`?[n[0]]:n[0],requireFailure:typeof n[1]==`string`?[n[1]]:n[1]}}var Ao=class{constructor(e=null,t={}){if(this._onBasicInput=e=>{this.manager.emit(e.srcEvent.type,e)},this._onOtherEvent=e=>{this.manager.emit(e.type,e)},this.options={recognizers:[],events:{},touchAction:`compute`,tabIndex:0,cssProps:{},...t},this.events=new Map,this.element=e,this.wheelSession=new ro(e),e){this.manager=new Oa(e,this.options);for(let e of this.options.recognizers){let{recognizer:t,recognizeWith:n,requireFailure:r}=ko(e);this.manager.add(t),n&&t.recognizeWith(n),r&&t.requireFailure(r)}this.manager.on(`hammer.input`,this._onBasicInput),this.wheelInput=new Ja(e,this._onOtherEvent,{enable:!1,wheelSession:this.wheelSession}),this.moveInput=new uo(e,this._onOtherEvent,{enable:!1}),this.keyInput=new po(e,this._onOtherEvent,{enable:!1,tabIndex:t.tabIndex}),this.contextmenuInput=new mo(e,this._onOtherEvent,{enable:!1}),this.on(this.options.events)}}getElement(){return this.element}destroy(){this.element?(this.wheelInput.destroy(),this.wheelSession.destroy(),this.moveInput.destroy(),this.keyInput.destroy(),this.contextmenuInput.destroy(),this.manager.destroy()):this.wheelSession.destroy()}on(e,t,n){this._addEventHandler(e,t,n,!1)}once(e,t,n){this._addEventHandler(e,t,n,!0)}watch(e,t,n){this._addEventHandler(e,t,n,!1,!0)}off(e,t){this._removeEventHandler(e,t)}emit(e){this.manager?.emit(e.type,e)}_toggleRecognizer(e,t){let{manager:n}=this;if(!n)return;let r=n.get(e);r&&(r.set({enable:t,wheelSession:this.wheelSession}),n.touchAction.update()),this.wheelInput?.enableEventType(e,t),this.moveInput?.enableEventType(e,t),this.keyInput?.enableEventType(e,t),this.contextmenuInput?.enableEventType(e,t)}_addEventHandler(e,t,n,r,i){if(typeof e!=`string`){n=t;for(let[t,a]of Object.entries(e))this._addEventHandler(t,a,n,r,i);return}let{manager:a,events:o}=this;if(!a)return;let s=o.get(e);if(!s){let t=this._getRecognizerName(e)||e;s=new Oo(this,t),o.set(e,s),a&&a.on(e,s.handleEvent)}s.add(e,t,n,r,i),s.isEmpty()||this._toggleRecognizer(s.recognizerName,!0)}_removeEventHandler(e,t){if(typeof e!=`string`){for(let[t,n]of Object.entries(e))this._removeEventHandler(t,n);return}let{events:n}=this,r=n.get(e);if(r&&(r.remove(e,t),r.isEmpty())){let{recognizerName:e}=r,t=!1;for(let r of n.values())if(r.recognizerName===e&&!r.isEmpty()){t=!0;break}t||this._toggleRecognizer(e,!1)}}_getRecognizerName(e){return this.manager.recognizers.find(t=>t.getEventNames().includes(e))?.options.event}},jo={DEFAULT:`default`,LNGLAT:`lnglat`,METER_OFFSETS:`meter-offsets`,LNGLAT_OFFSETS:`lnglat-offsets`,CARTESIAN:`cartesian`};Object.defineProperty(jo,"IDENTITY",{get:()=>(v.deprecated(`COORDINATE_SYSTEM.IDENTITY`,`COORDINATE_SYSTEM.CARTESIAN`)(),jo.CARTESIAN)});var q={WEB_MERCATOR:1,GLOBE:2,WEB_MERCATOR_AUTO_OFFSET:4,IDENTITY:0},Mo={common:0,meters:1,pixels:2},No={click:`onClick`,dblclick:`onClick`,panstart:`onDragStart`,panmove:`onDrag`,panend:`onDragEnd`},Po={multipan:[Va,{threshold:10,pointers:2,trackpad:!0}],pinch:[Ua,{trackpad:!0},null,[`multipan`]],pan:[Va,{threshold:1},[`pinch`],[`multipan`]],dblclick:[Ra,{event:`dblclick`,taps:2,enable:!1}],dblclickdrag:[La,{event:`dblclickdrag`,enable:!1},[`dblclick`],null],click:[Ra,{event:`click`},[`dblclickdrag`],[`dblclick`,`dblclickdrag`]]};function Fo(e,t){if(e===t)return!0;if(Array.isArray(e)){let n=e.length;if(!t||t.length!==n)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}return!1}function Io(e){let t={},n;return r=>{for(let i in r)if(!Fo(r[i],t[i])){n=e(r),t=r;break}return n}}var Lo=[0,0,0,0],Ro=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0],zo=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],Bo=[0,0,0],Vo=[0,0,0],Ho={default:-1,cartesian:0,lnglat:1,"meter-offsets":2,"lnglat-offsets":3};function Uo(e){let t=Ho[e];if(t===void 0)throw Error(`Invalid coordinateSystem: ${e}`);return t}var Wo=Io(Jo);function Go(e,t,n=Vo){n.length<3&&(n=[n[0],n[1],0]);let r=n,i,a=!0;switch(i=t===`lnglat-offsets`||t===`meter-offsets`?n:e.isGeospatial?[Math.fround(e.longitude),Math.fround(e.latitude),0]:null,e.projectionMode){case q.WEB_MERCATOR:t===`lnglat`?(i=[0,0,0],a=!1):t===`cartesian`&&(a=!1,i=e.unprojectPosition([Math.fround(e.center[0]),Math.fround(e.center[1]),0]));break;case q.WEB_MERCATOR_AUTO_OFFSET:t===`lnglat`?r=i:t===`cartesian`&&(r=[Math.fround(e.center[0]),Math.fround(e.center[1]),0],i=e.unprojectPosition(r),r[0]-=n[0],r[1]-=n[1],r[2]-=n[2]);break;case q.IDENTITY:r=e.position.map(Math.fround),r[2]=r[2]||0;break;case q.GLOBE:a=!1,i=null;break;default:a=!1}return{geospatialOrigin:i,shaderCoordinateOrigin:r,offsetMode:a}}function Ko(e,t,n){let{viewMatrixUncentered:r,projectionMatrix:i}=e,{viewMatrix:a,viewProjectionMatrix:o}=e,s=Lo,c=Lo,l=e.cameraPosition,{geospatialOrigin:u,shaderCoordinateOrigin:d,offsetMode:f}=Go(e,t,n);return f&&(c=e.projectPosition(u||d),l=[l[0]-c[0],l[1]-c[1],l[2]-c[2]],c[3]=1,s=p([],c,o),a=r||a,o=h([],i,a),o=h([],o,Ro)),{viewMatrix:a,viewProjectionMatrix:o,projectionCenter:s,originCommon:c,cameraPosCommon:l,shaderCoordinateOrigin:d,geospatialOrigin:u}}function qo({viewport:e,devicePixelRatio:t=1,modelMatrix:n=null,coordinateSystem:r=`default`,coordinateOrigin:i=Vo,autoWrapLongitude:a=!1}){r==="default"&&(r=e.isGeospatial?`lnglat`:`cartesian`);let o=Wo({viewport:e,devicePixelRatio:t,coordinateSystem:r,coordinateOrigin:i});return o.wrapLongitude=a,o.modelMatrix=n||zo,o}function Jo({viewport:e,devicePixelRatio:t,coordinateSystem:n,coordinateOrigin:r}){let{projectionCenter:i,viewProjectionMatrix:a,originCommon:o,cameraPosCommon:s,shaderCoordinateOrigin:c,geospatialOrigin:l}=Ko(e,n,r),u=e.getDistanceScales(),d=[e.width*t,e.height*t],f=p([],[0,0,-e.focalDistance,1],e.projectionMatrix)[3]||1,m={coordinateSystem:Uo(n),projectionMode:e.projectionMode,coordinateOrigin:c,commonOrigin:o.slice(0,3),center:i,pseudoMeters:!!e._pseudoMeters,viewportSize:d,devicePixelRatio:t,focalDistance:f,commonUnitsPerMeter:u.unitsPerMeter,commonUnitsPerWorldUnit:u.unitsPerMeter,commonUnitsPerWorldUnit2:Bo,scale:e.scale,wrapLongitude:!1,viewProjectionMatrix:a,modelMatrix:zo,cameraPosition:s};if(l){let t=e.getDistanceScales(l);switch(n){case`meter-offsets`:m.commonUnitsPerWorldUnit=t.unitsPerMeter,m.commonUnitsPerWorldUnit2=t.unitsPerMeter2;break;case`lnglat`:case`lnglat-offsets`:e._pseudoMeters||(m.commonUnitsPerMeter=t.unitsPerMeter),m.commonUnitsPerWorldUnit=t.unitsPerDegree,m.commonUnitsPerWorldUnit2=t.unitsPerDegree2;break;case`cartesian`:m.commonUnitsPerWorldUnit=[1,1,t.unitsPerMeter[2]],m.commonUnitsPerWorldUnit2=[0,0,t.unitsPerMeter2[2]]}}if(e.projectionMode===q.GLOBE&&n===`meter-offsets`){let e=r[0]*Math.PI/180,t=r[1]*Math.PI/180,n=Math.cos(t),i=((r[2]||0)/6370972+1)*256;m.commonOrigin=[Math.sin(e)*n*i,-Math.cos(e)*n*i,Math.sin(t)*i]}return m}var Yo=`\
${`\
${[`default`,`lnglat`,`meter-offsets`,`lnglat-offsets`,`cartesian`].map(e=>`const COORDINATE_SYSTEM_${e.toUpperCase().replaceAll(`-`,`_`)}: i32 = ${Uo(e)};`).join(``)}
${Object.keys(q).map(e=>`const PROJECTION_MODE_${e}: i32 = ${q[e]};`).join(``)}
${Object.keys(Mo).map(e=>`const UNIT_${e.toUpperCase()}: i32 = ${Mo[e]};`).join(``)}

const TILE_SIZE: f32 = 512.0;
const PI: f32 = 3.1415926536;
const WORLD_SCALE: f32 = TILE_SIZE / (PI * 2.0);
const ZERO_64_LOW: vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);
const EARTH_RADIUS: f32 = 6370972.0; // meters
const GLOBE_RADIUS: f32 = 256.0;

// -----------------------------------------------------------------------------
// Uniform block (converted from GLSL uniform block)
// -----------------------------------------------------------------------------
struct ProjectUniforms {
  wrapLongitude: i32,
  coordinateSystem: i32,
  commonUnitsPerMeter: vec3<f32>,
  projectionMode: i32,
  scale: f32,
  commonUnitsPerWorldUnit: vec3<f32>,
  commonUnitsPerWorldUnit2: vec3<f32>,
  center: vec4<f32>,
  modelMatrix: mat4x4<f32>,
  viewProjectionMatrix: mat4x4<f32>,
  viewportSize: vec2<f32>,
  devicePixelRatio: f32,
  focalDistance: f32,
  cameraPosition: vec3<f32>,
  coordinateOrigin: vec3<f32>,
  commonOrigin: vec3<f32>,
  pseudoMeters: i32,
};

@group(0) @binding(auto)
var<uniform> project: ProjectUniforms;

// -----------------------------------------------------------------------------
// Geometry data shared across the project helpers.
// The active layer shader is responsible for populating this private module
// state before calling the project functions below.
// -----------------------------------------------------------------------------

// Structure to carry additional geometry data used by deck.gl filters.
struct Geometry {
  worldPosition: vec3<f32>,
  worldPositionAlt: vec3<f32>,
  position: vec4<f32>,
  normal: vec3<f32>,
  uv: vec2<f32>,
  pickingColor: vec3<f32>,
};

var<private> geometry: Geometry;
`}

// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------

// Returns an adjustment factor for commonUnitsPerMeter
fn _project_size_at_latitude(lat: f32) -> f32 {
  let y = clamp(lat, -89.9, 89.9);
  return 1.0 / cos(radians(y));
}

// Overloaded version: scales a value in meters at a given latitude.
fn _project_size_at_latitude_m(meters: f32, lat: f32) -> f32 {
  return meters * project.commonUnitsPerMeter.z * _project_size_at_latitude(lat);
}

// Computes a non-linear scale factor based on geometry.
// (Note: This function relies on "geometry" being provided.)
fn project_size() -> f32 {
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR &&
      project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT &&
      project.pseudoMeters == 0) {
    if (geometry.position.w == 0.0) {
      return _project_size_at_latitude(geometry.worldPosition.y);
    }
    let y: f32 = geometry.position.y / TILE_SIZE * 2.0 - 1.0;
    let y2 = y * y;
    let y4 = y2 * y2;
    let y6 = y4 * y2;
    return 1.0 + 4.9348 * y2 + 4.0587 * y4 + 1.5642 * y6;
  }
  return 1.0;
}

// Overloads to scale offsets (meters to world units)
fn project_size_float(meters: f32) -> f32 {
  return meters * project.commonUnitsPerMeter.z * project_size();
}

fn project_size_vec2(meters: vec2<f32>) -> vec2<f32> {
  return meters * project.commonUnitsPerMeter.xy * project_size();
}

fn project_size_vec3(meters: vec3<f32>) -> vec3<f32> {
  return meters * project.commonUnitsPerMeter * project_size();
}

fn project_size_vec4(meters: vec4<f32>) -> vec4<f32> {
  return vec4<f32>(meters.xyz * project.commonUnitsPerMeter, meters.w);
}

// Returns a rotation matrix aligning the z‑axis with the given up vector.
fn project_get_orientation_matrix(up: vec3<f32>) -> mat3x3<f32> {
  let uz = normalize(up);
  let ux = select(
    vec3<f32>(1.0, 0.0, 0.0),
    normalize(vec3<f32>(uz.y, -uz.x, 0.0)),
    abs(uz.z) == 1.0
  );
  let uy = cross(uz, ux);
  return mat3x3<f32>(ux, uy, uz);
}

// Since WGSL does not support "out" parameters, we return a struct.
struct RotationResult {
  needsRotation: bool,
  transform: mat3x3<f32>,
};

fn project_needs_rotation(commonPosition: vec3<f32>) -> RotationResult {
  if (project.projectionMode == PROJECTION_MODE_GLOBE) {
    return RotationResult(true, project_get_orientation_matrix(commonPosition));
  } else {
    return RotationResult(false, mat3x3<f32>());  // identity alternative if needed
  };
}

// Projects a normal vector from the current coordinate system to world space.
fn project_normal(vector: vec3<f32>) -> vec3<f32> {
  let normal_modelspace = project.modelMatrix * vec4<f32>(vector, 0.0);
  var n = normalize(normal_modelspace.xyz * project.commonUnitsPerMeter);
  let rotResult = project_needs_rotation(geometry.position.xyz);
  if (rotResult.needsRotation) {
    n = rotResult.transform * n;
  }
  return n;
}

// Applies a scale offset based on y-offset (dy)
fn project_offset_(offset: vec4<f32>) -> vec4<f32> {
  let dy: f32 = offset.y;
  let commonUnitsPerWorldUnit = project.commonUnitsPerWorldUnit + project.commonUnitsPerWorldUnit2 * dy;
  return vec4<f32>(offset.xyz * commonUnitsPerWorldUnit, offset.w);
}

// Projects lng/lat coordinates to a unit tile [0,1]
fn project_mercator_(lnglat: vec2<f32>) -> vec2<f32> {
  var x = lnglat.x;
  if (project.wrapLongitude != 0) {
    x = ((x + 180.0) % 360.0) - 180.0;
  }
  let y = clamp(lnglat.y, -89.9, 89.9);
  return vec2<f32>(
    radians(x) + PI,
    PI + log(tan_fp32(PI * 0.25 + radians(y) * 0.5))
  ) * WORLD_SCALE;
}

// Projects lng/lat/z coordinates for a globe projection.
fn project_globe_(lnglatz: vec3<f32>) -> vec3<f32> {
  let lambda = radians(lnglatz.x);
  let phi = radians(lnglatz.y);
  let cosPhi = cos(phi);
  let D = (lnglatz.z / EARTH_RADIUS + 1.0) * GLOBE_RADIUS;
  return vec3<f32>(
    sin(lambda) * cosPhi,
    -cos(lambda) * cosPhi,
    sin(phi)
  ) * D;
}

// Mercator y of project_mercator_'s latitude clamp: log(tan(PI / 4 + radians(89.9) / 2))
const MAX_MERCATOR_Y: f32 = 7.0439589847;

// Inverse of project_globe_ followed by project_mercator_, without forming lat/lng:
// Mercator y = atanh(sin(lat)) = log((D + |z|) / |xy|), which stays accurate near the poles
fn project_globe_to_mercator_(spherePos: vec3<f32>) -> vec2<f32> {
  let D = length(spherePos);
  let h = max(length(spherePos.xy), 1e-20);
  let y = sign(spherePos.z) * min(log((D + abs(spherePos.z)) / h), MAX_MERCATOR_Y);
  let x = atan2(spherePos.x, -spherePos.y);
  return (vec2<f32>(x, y) + PI) * WORLD_SCALE;
}

// Flat common space (Mercator or cartesian) of a common position; identity except under GLOBE.
// WGSL has no function overloading: pass position.xyz for a vec4. See project.glsl.ts.
fn project_common_position_to_flat(commonPosition: vec3<f32>) -> vec2<f32> {
  if (project.projectionMode == PROJECTION_MODE_GLOBE) {
    return project_globe_to_mercator_(commonPosition);
  }
  return commonPosition.xy;
}

// World copy of a flat x nearest to referenceX
fn project_wrap_flat_x_(x: f32, referenceX: f32) -> f32 {
  return x - TILE_SIZE * floor((x - referenceX) / TILE_SIZE + 0.5);
}

// Flat position in the world copy nearest to referenceX (e.g. a bounds centre); geospatial only
fn project_common_position_to_flat_wrapped(commonPosition: vec3<f32>, referenceX: f32) -> vec2<f32> {
  var flatPosition = project_common_position_to_flat(commonPosition);
  if (project.projectionMode != PROJECTION_MODE_IDENTITY) {
    flatPosition.x = project_wrap_flat_x_(flatPosition.x, referenceX);
  }
  return flatPosition;
}

// Flat position continuous across the antimeridian under GLOBE (seam moved opposite referenceX,
// e.g. the camera); identity for flat modes. For periodic patterns.
fn project_common_position_to_flat_continuous(commonPosition: vec3<f32>, referenceX: f32) -> vec2<f32> {
  var flatPosition = project_common_position_to_flat(commonPosition);
  if (project.projectionMode == PROJECTION_MODE_GLOBE) {
    flatPosition.x = project_wrap_flat_x_(flatPosition.x, referenceX);
  }
  return flatPosition;
}

// Projects positions (with an optional 64-bit low part) from the input
// coordinate system to the common space.
fn project_position_vec4_f64(position: vec4<f32>, position64Low: vec3<f32>) -> vec4<f32> {
  var position_world = project.modelMatrix * position;

  // Work around for a Mac+NVIDIA bug:
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      return vec4<f32>(
        project_mercator_(position_world.xy),
        _project_size_at_latitude_m(position_world.z, position_world.y),
        position_world.w
      );
    }
    if (project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN) {
      position_world = vec4f(position_world.xyz + project.coordinateOrigin, position_world.w);
    }
  }
  if (project.projectionMode == PROJECTION_MODE_GLOBE) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      return vec4<f32>(
        project_globe_(position_world.xyz),
        position_world.w
      );
    }
    if (project.coordinateSystem == COORDINATE_SYSTEM_METER_OFFSETS) {
      let enuMatrix = project_get_orientation_matrix(project.commonOrigin);
      let metersToCommon = GLOBE_RADIUS / EARTH_RADIUS;
      let offsetCommon = (enuMatrix * vec3<f32>(-position_world.x, -position_world.y, position_world.z)) * metersToCommon;
      return vec4<f32>(project.commonOrigin + offsetCommon, position_world.w);
    }
  }
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      if (abs(position_world.y - project.coordinateOrigin.y) > 0.25) {
        return vec4<f32>(
          project_mercator_(position_world.xy) - project.commonOrigin.xy,
          project_size_float(position_world.z),
          position_world.w
        );
      }
    }
  }
  if (project.projectionMode == PROJECTION_MODE_IDENTITY ||
      (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET &&
       (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
        project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN))) {
    position_world = vec4f(position_world.xyz - project.coordinateOrigin, position_world.w);
  }

  return project_offset_(position_world) +
         project_offset_(project.modelMatrix * vec4<f32>(position64Low, 0.0));
}

// Overloaded versions for different input types.
fn project_position_vec4_f32(position: vec4<f32>) -> vec4<f32> {
  return project_position_vec4_f64(position, ZERO_64_LOW);
}

fn project_position_vec3_f64(position: vec3<f32>, position64Low: vec3<f32>) -> vec3<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 1.0), position64Low);
  return projected_position.xyz;
}

fn project_position_vec3_f32(position: vec3<f32>) -> vec3<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 1.0), ZERO_64_LOW);
  return projected_position.xyz;
}

fn project_position_vec2_f32(position: vec2<f32>) -> vec2<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 0.0, 1.0), ZERO_64_LOW);
  return projected_position.xy;
}

// Transforms a common space position to clip space.
fn project_common_position_to_clipspace_with_projection(position: vec4<f32>, viewProjectionMatrix: mat4x4<f32>, center: vec4<f32>) -> vec4<f32> {
  var clipPosition = viewProjectionMatrix * position + center;
  // deck.gl projection matrices use WebGL's [-w, w] depth range; WebGPU clips z to [0, w].
  clipPosition.z = (clipPosition.z + clipPosition.w) * 0.5;
  return clipPosition;
}

// Uses the project viewProjectionMatrix and center.
fn project_common_position_to_clipspace(position: vec4<f32>) -> vec4<f32> {
  return project_common_position_to_clipspace_with_projection(position, project.viewProjectionMatrix, project.center);
}

// Returns a clip space offset corresponding to a given number of screen pixels.
fn project_pixel_size_to_clipspace(pixels: vec2<f32>) -> vec2<f32> {
  let offset = pixels / project.viewportSize * project.devicePixelRatio * 2.0;
  return offset * project.focalDistance;
}

fn project_meter_size_to_pixel(meters: f32) -> f32 {
  return project_size_float(meters) * project.scale;
}

fn project_unit_size_to_pixel(size: f32, unit: i32) -> f32 {
  if (unit == UNIT_METERS) {
    return project_meter_size_to_pixel(size);
  } else if (unit == UNIT_COMMON) {
    return size * project.scale;
  }
  // UNIT_PIXELS: no scaling applied.
  return size;
}

fn project_pixel_size_float(pixels: f32) -> f32 {
  return pixels / project.scale;
}

fn project_pixel_size_vec2(pixels: vec2<f32>) -> vec2<f32> {
  return pixels / project.scale;
}
`,Xo=`\
${[`default`,`lnglat`,`meter-offsets`,`lnglat-offsets`,`cartesian`].map(e=>`const int COORDINATE_SYSTEM_${e.toUpperCase().replaceAll(`-`,`_`)} = ${Uo(e)};`).join(``)}
${Object.keys(q).map(e=>`const int PROJECTION_MODE_${e} = ${q[e]};`).join(``)}
${Object.keys(Mo).map(e=>`const int UNIT_${e.toUpperCase()} = ${Mo[e]};`).join(``)}
layout(std140) uniform projectUniforms {
bool wrapLongitude;
int coordinateSystem;
vec3 commonUnitsPerMeter;
int projectionMode;
float scale;
vec3 commonUnitsPerWorldUnit;
vec3 commonUnitsPerWorldUnit2;
vec4 center;
mat4 modelMatrix;
mat4 viewProjectionMatrix;
vec2 viewportSize;
float devicePixelRatio;
float focalDistance;
vec3 cameraPosition;
vec3 coordinateOrigin;
vec3 commonOrigin;
bool pseudoMeters;
} project;
const float TILE_SIZE = 512.0;
const float PI = 3.1415926536;
const float WORLD_SCALE = TILE_SIZE / (PI * 2.0);
const vec3 ZERO_64_LOW = vec3(0.0);
const float EARTH_RADIUS = 6370972.0;
const float GLOBE_RADIUS = 256.0;
float project_size_at_latitude(float lat) {
float y = clamp(lat, -89.9, 89.9);
return 1.0 / cos(radians(y));
}
float project_size() {
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR &&
project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT &&
project.pseudoMeters == false) {
if (geometry.position.w == 0.0) {
return project_size_at_latitude(geometry.worldPosition.y);
}
float y = geometry.position.y / TILE_SIZE * 2.0 - 1.0;
float y2 = y * y;
float y4 = y2 * y2;
float y6 = y4 * y2;
return 1.0 + 4.9348 * y2 + 4.0587 * y4 + 1.5642 * y6;
}
return 1.0;
}
float project_size_at_latitude(float meters, float lat) {
return meters * project.commonUnitsPerMeter.z * project_size_at_latitude(lat);
}
float project_size(float meters) {
return meters * project.commonUnitsPerMeter.z * project_size();
}
vec2 project_size(vec2 meters) {
return meters * project.commonUnitsPerMeter.xy * project_size();
}
vec3 project_size(vec3 meters) {
return meters * project.commonUnitsPerMeter * project_size();
}
vec4 project_size(vec4 meters) {
return vec4(meters.xyz * project.commonUnitsPerMeter, meters.w);
}
mat3 project_get_orientation_matrix(vec3 up) {
vec3 uz = normalize(up);
vec3 ux = abs(uz.z) == 1.0 ? vec3(1.0, 0.0, 0.0) : normalize(vec3(uz.y, -uz.x, 0));
vec3 uy = cross(uz, ux);
return mat3(ux, uy, uz);
}
bool project_needs_rotation(vec3 commonPosition, out mat3 transform) {
if (project.projectionMode == PROJECTION_MODE_GLOBE) {
transform = project_get_orientation_matrix(commonPosition);
return true;
}
return false;
}
vec3 project_normal(vec3 vector) {
vec4 normal_modelspace = project.modelMatrix * vec4(vector, 0.0);
vec3 n = normalize(normal_modelspace.xyz * project.commonUnitsPerMeter);
mat3 rotation;
if (project_needs_rotation(geometry.position.xyz, rotation)) {
n = rotation * n;
}
return n;
}
vec4 project_offset_(vec4 offset) {
float dy = offset.y;
vec3 commonUnitsPerWorldUnit = project.commonUnitsPerWorldUnit + project.commonUnitsPerWorldUnit2 * dy;
return vec4(offset.xyz * commonUnitsPerWorldUnit, offset.w);
}
vec2 project_mercator_(vec2 lnglat) {
float x = lnglat.x;
if (project.wrapLongitude) {
x = mod(x + 180., 360.0) - 180.;
}
float y = clamp(lnglat.y, -89.9, 89.9);
return vec2(
radians(x) + PI,
PI + log(tan_fp32(PI * 0.25 + radians(y) * 0.5))
) * WORLD_SCALE;
}
vec3 project_globe_(vec3 lnglatz) {
float lambda = radians(lnglatz.x);
float phi = radians(lnglatz.y);
float cosPhi = cos(phi);
float D = (lnglatz.z / EARTH_RADIUS + 1.0) * GLOBE_RADIUS;
return vec3(
sin(lambda) * cosPhi,
-cos(lambda) * cosPhi,
sin(phi)
) * D;
}
const float MAX_MERCATOR_Y = 7.0439589847;
vec2 project_globe_to_mercator_(vec3 spherePos) {
float D = length(spherePos);
float h = max(length(spherePos.xy), 1e-20);
float y = sign(spherePos.z) * min(log((D + abs(spherePos.z)) / h), MAX_MERCATOR_Y);
float x = atan(spherePos.x, -spherePos.y);
return (vec2(x, y) + PI) * WORLD_SCALE;
}
vec2 project_common_position_to_flat(vec3 commonPosition) {
if (project.projectionMode == PROJECTION_MODE_GLOBE) {
return project_globe_to_mercator_(commonPosition);
}
return commonPosition.xy;
}
vec2 project_common_position_to_flat(vec4 commonPosition) {
return project_common_position_to_flat(commonPosition.xyz);
}
float project_wrap_flat_x_(float x, float referenceX) {
return x - TILE_SIZE * floor((x - referenceX) / TILE_SIZE + 0.5);
}
vec2 project_common_position_to_flat_wrapped(vec3 commonPosition, float referenceX) {
vec2 flatPosition = project_common_position_to_flat(commonPosition);
if (project.projectionMode != PROJECTION_MODE_IDENTITY) {
flatPosition.x = project_wrap_flat_x_(flatPosition.x, referenceX);
}
return flatPosition;
}
vec2 project_common_position_to_flat_wrapped(vec4 commonPosition, float referenceX) {
return project_common_position_to_flat_wrapped(commonPosition.xyz, referenceX);
}
vec2 project_common_position_to_flat_continuous(vec3 commonPosition, float referenceX) {
vec2 flatPosition = project_common_position_to_flat(commonPosition);
if (project.projectionMode == PROJECTION_MODE_GLOBE) {
flatPosition.x = project_wrap_flat_x_(flatPosition.x, referenceX);
}
return flatPosition;
}
vec2 project_common_position_to_flat_continuous(vec4 commonPosition, float referenceX) {
return project_common_position_to_flat_continuous(commonPosition.xyz, referenceX);
}
vec4 project_position(vec4 position, vec3 position64Low) {
vec4 position_world = project.modelMatrix * position;
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
return vec4(
project_mercator_(position_world.xy),
project_size_at_latitude(position_world.z, position_world.y),
position_world.w
);
}
if (project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN) {
position_world.xyz += project.coordinateOrigin;
}
}
if (project.projectionMode == PROJECTION_MODE_GLOBE) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
return vec4(
project_globe_(position_world.xyz),
position_world.w
);
}
if (project.coordinateSystem == COORDINATE_SYSTEM_METER_OFFSETS) {
mat3 enuMatrix = project_get_orientation_matrix(project.commonOrigin);
float metersToCommon = GLOBE_RADIUS / EARTH_RADIUS;
vec3 offsetCommon = (enuMatrix * vec3(-position_world.xy, position_world.z)) * metersToCommon;
return vec4(project.commonOrigin + offsetCommon, position_world.w);
}
}
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
if (abs(position_world.y - project.coordinateOrigin.y) > 0.25) {
return vec4(
project_mercator_(position_world.xy) - project.commonOrigin.xy,
project_size(position_world.z),
position_world.w
);
}
}
}
if (project.projectionMode == PROJECTION_MODE_IDENTITY ||
(project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET &&
(project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN))) {
position_world.xyz -= project.coordinateOrigin;
}
return project_offset_(position_world) + project_offset_(project.modelMatrix * vec4(position64Low, 0.0));
}
vec4 project_position(vec4 position) {
return project_position(position, ZERO_64_LOW);
}
vec3 project_position(vec3 position, vec3 position64Low) {
vec4 projected_position = project_position(vec4(position, 1.0), position64Low);
return projected_position.xyz;
}
vec3 project_position(vec3 position) {
vec4 projected_position = project_position(vec4(position, 1.0), ZERO_64_LOW);
return projected_position.xyz;
}
vec2 project_position(vec2 position) {
vec4 projected_position = project_position(vec4(position, 0.0, 1.0), ZERO_64_LOW);
return projected_position.xy;
}
vec4 project_common_position_to_clipspace(vec4 position, mat4 viewProjectionMatrix, vec4 center) {
return viewProjectionMatrix * position + center;
}
vec4 project_common_position_to_clipspace(vec4 position) {
return project_common_position_to_clipspace(position, project.viewProjectionMatrix, project.center);
}
vec2 project_pixel_size_to_clipspace(vec2 pixels) {
vec2 offset = pixels / project.viewportSize * project.devicePixelRatio * 2.0;
return offset * project.focalDistance;
}
float project_size_to_pixel(float meters) {
return project_size(meters) * project.scale;
}
vec2 project_size_to_pixel(vec2 meters) {
return project_size(meters) * project.scale;
}
float project_size_to_pixel(float size, int unit) {
if (unit == UNIT_METERS) return project_size_to_pixel(size);
if (unit == UNIT_COMMON) return size * project.scale;
return size;
}
float project_pixel_size(float pixels) {
return pixels / project.scale;
}
vec2 project_pixel_size(vec2 pixels) {
return pixels / project.scale;
}
`,Zo={};function Qo(e=Zo){return`viewport`in e?qo(e):{}}var $o={name:`project`,dependencies:[zi,Hi],source:Yo,vs:Xo,getUniforms:Qo,uniformTypes:{wrapLongitude:`f32`,coordinateSystem:`i32`,commonUnitsPerMeter:`vec3<f32>`,projectionMode:`i32`,scale:`f32`,commonUnitsPerWorldUnit:`vec3<f32>`,commonUnitsPerWorldUnit2:`vec3<f32>`,center:`vec4<f32>`,modelMatrix:`mat4x4<f32>`,viewProjectionMatrix:`mat4x4<f32>`,viewportSize:`vec2<f32>`,devicePixelRatio:`f32`,focalDistance:`f32`,cameraPosition:`vec3<f32>`,coordinateOrigin:`vec3<f32>`,commonOrigin:`vec3<f32>`,pseudoMeters:`f32`}};function es(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function J(e,t){let n=p([],t,e);return g(n,n,1/n[3]),n}function ts(e,t,n){return e<t?t:e>n?n:e}function ns(e){return Math.log(e)*Math.LOG2E}var rs=Math.log2||ns;function Y(e,t){if(!e)throw Error(t||`@math.gl/web-mercator: assertion failed.`)}var X=Math.PI,is=X/4,Z=X/180,as=180/X,Q=512,os=4003e4,ss=85.051129,cs=1.5;function ls(e){return rs(e)}function us(e){let[t,n]=e;Y(Number.isFinite(t)),Y(Number.isFinite(n)&&n>=-90&&n<=90,`invalid latitude`);let r=t*Z,i=n*Z;return[Q*(r+X)/(2*X),Q*(X+Math.log(Math.tan(is+i*.5)))/(2*X)]}function ds(e){let[t,n]=e,r=t/Q*(2*X)-X,i=2*(Math.atan(Math.exp(n/Q*(2*X)-X))-is);return[r*as,i*as]}function fs(e){let{latitude:t}=e;return Y(Number.isFinite(t)),ls(os*Math.cos(t*Z))-9}function ps(e){let t=Math.cos(e*Z);return Q/os/t}function ms(e){let{latitude:t,longitude:n,highPrecision:r=!1}=e;Y(Number.isFinite(t)&&Number.isFinite(n));let i=Q,a=Math.cos(t*Z),o=i/360,s=o/a,c=i/os/a,l={unitsPerMeter:[c,c,c],metersPerUnit:[1/c,1/c,1/c],unitsPerDegree:[o,s,c],degreesPerUnit:[1/o,1/s,1/c]};if(r){let e=Z*Math.tan(t*Z)/a,n=o*e/2,r=i/os*e,u=r/s*c;l.unitsPerDegree2=[0,n,r],l.unitsPerMeter2=[u,0,u]}return l}function hs(e,t){let[n,r,i]=e,[a,o,s]=t,{unitsPerMeter:c,unitsPerMeter2:l}=ms({longitude:n,latitude:r,highPrecision:!0}),u=us(e);u[0]+=a*(c[0]+l[0]*o),u[1]+=o*(c[1]+l[1]*o);let d=ds(u),f=(i||0)+(s||0);return Number.isFinite(i)||Number.isFinite(s)?[d[0],d[1],f]:d}function gs(e){let{height:t,pitch:n,bearing:r,altitude:i,scale:a,center:o}=e,s=es();l(s,s,[0,0,-i]),m(s,s,-n*Z),f(s,s,r*Z);let u=a/t;return d(s,s,[u,u,u]),o&&l(s,s,c([],o)),s}function _s(e){let{width:t,height:n,altitude:r,pitch:i=0,offset:a,center:o,scale:s,nearZMultiplier:c=1,farZMultiplier:l=1}=e,{fovy:u=vs(cs)}=e;r!==void 0&&(u=vs(r));let d=u*Z,f=i*Z,p=ys(u),m=p;o&&(m+=o[2]*s/Math.cos(f)/n);let h=d*(.5+(a?a[1]:0)/n),g=Math.sin(h)*m/Math.sin(ts(Math.PI/2-f-h,.01,Math.PI-.01)),_=Math.sin(f)*g+m,v=m*10,y=Math.min(_*l,v);return{fov:d,aspect:t/n,focalDistance:p,near:c,far:y}}function vs(e){return 2*Math.atan(.5/e)*as}function ys(e){return .5/Math.tan(.5*e*Z)}function bs(e,t){let[n,r,i=0]=e;return Y(Number.isFinite(n)&&Number.isFinite(r)&&Number.isFinite(i)),J(t,[n,r,i,1])}function xs(e,t,n=0){let[r,i,a]=e;if(Y(Number.isFinite(r)&&Number.isFinite(i),`invalid pixel coordinate`),Number.isFinite(a))return J(t,[r,i,a,1]);let o=J(t,[r,i,0,1]),c=J(t,[r,i,1,1]),l=o[2],u=c[2],d=l===u?0:((n||0)-l)/(u-l);return s([],o,c,d)}function Ss(e){let{width:t,height:n,bounds:r,minExtent:i=0,maxZoom:a=24,offset:o=[0,0]}=e,[[s,c],[l,u]]=r,d=Cs(e.padding),f=us([s,ts(u,-ss,ss)]),p=us([l,ts(c,-ss,ss)]),m=[Math.max(Math.abs(p[0]-f[0]),i),Math.max(Math.abs(p[1]-f[1]),i)],h=[t-d.left-d.right-Math.abs(o[0])*2,n-d.top-d.bottom-Math.abs(o[1])*2];Y(h[0]>0&&h[1]>0);let g=h[0]/m[0],_=h[1]/m[1],v=(d.right-d.left)/2/g,y=(d.top-d.bottom)/2/_,b=ds([(p[0]+f[0])/2+v,(p[1]+f[1])/2+y]),x=Math.min(a,rs(Math.abs(Math.min(g,_))));return Y(Number.isFinite(x)),{longitude:b[0],latitude:b[1],zoom:x}}function Cs(e=0){return typeof e==`number`?{top:e,bottom:e,left:e,right:e}:(Y(Number.isFinite(e.top)&&Number.isFinite(e.bottom)&&Number.isFinite(e.left)&&Number.isFinite(e.right)),e)}var ws=Math.PI/180;function Ts(e,t=0){let{width:n,height:r,unproject:i}=e,a={targetZ:t},o=i([0,r],a),s=i([n,r],a),c,l;return(e.fovy?.5*e.fovy*ws:Math.atan(.5/e.altitude))>(90-e.pitch)*ws-.01?(c=Es(e,0,t),l=Es(e,n,t)):(c=i([0,0],a),l=i([n,0],a)),[o,s,l,c]}function Es(e,t,n){let{pixelUnprojectionMatrix:r}=e,i=J(r,[t,0,1,1]),a=J(r,[t,e.height,1,1]),o=(n*e.distanceScales.unitsPerMeter[2]-i[2])/(a[2]-i[2]),c=ds(s([],i,a,o));return c.push(n),c}var Ds=new class{constructor(e={}){this._pool=[],this.opts={overAlloc:2,poolSize:100},this.setOptions(e)}setOptions(e){Object.assign(this.opts,e)}allocate(e,t,{size:n=1,type:r,padding:i=0,copy:a=!1,initialize:o=!1,maxCount:s}){let c=r||e&&e.constructor||Float32Array,l=t*n+i;if(ArrayBuffer.isView(e)){if(l<=e.length)return e;if(l*e.BYTES_PER_ELEMENT<=e.buffer.byteLength)return new c(e.buffer,0,l)}let u=1/0;s&&(u=s*n+i);let d=this._allocate(c,l,o,u);return e&&a?d.set(e):o||d.fill(0,0,4),this._release(e),d}release(e){this._release(e)}_allocate(e,t,n,r){let i=Math.max(Math.ceil(t*this.opts.overAlloc),1);i>r&&(i=r);let a=this._pool,o=e.BYTES_PER_ELEMENT*i,s=a.findIndex(e=>e.byteLength>=o);if(s>=0){let t=new e(a.splice(s,1)[0],0,i);return n&&t.fill(0),t}return new e(i)}_release(e){if(!ArrayBuffer.isView(e))return;let t=this._pool,{buffer:n}=e,{byteLength:r}=n,i=t.findIndex(e=>e.byteLength>=r);i<0?t.push(n):(i>0||t.length<this.opts.poolSize)&&t.splice(i,0,n),t.length>this.opts.poolSize&&t.shift()}};function Os(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function ks(e,t){let n=e%t;return n<0?t+n:n}function As(e){return[e[12],e[13],e[14]]}function js(e){return{left:$(e[3]+e[0],e[7]+e[4],e[11]+e[8],e[15]+e[12]),right:$(e[3]-e[0],e[7]-e[4],e[11]-e[8],e[15]-e[12]),bottom:$(e[3]+e[1],e[7]+e[5],e[11]+e[9],e[15]+e[13]),top:$(e[3]-e[1],e[7]-e[5],e[11]-e[9],e[15]-e[13]),near:$(e[3]+e[2],e[7]+e[6],e[11]+e[10],e[15]+e[14]),far:$(e[3]-e[2],e[7]-e[6],e[11]-e[10],e[15]-e[14])}}var Ms=new o;function $(e,t,n,r){Ms.set(e,t,n);let i=Ms.len();return{distance:r/i,normal:new o(-e/i,-t/i,-n/i)}}function Ns(e){return e-Math.fround(e)}var Ps;function Fs(e,t){let{size:n=1,startIndex:r=0}=t,i=t.endIndex===void 0?e.length:t.endIndex,a=(i-r)/n;Ps=Ds.allocate(Ps,a,{type:Float32Array,size:n*2});let o=r,s=0;for(;o<i;){for(let t=0;t<n;t++){let r=e[o++];Ps[s+t]=r,Ps[s+t+n]=Ns(r)}s+=n*2}return Ps.subarray(0,a*n*2)}function Is(e){let t=null,n=!1;for(let r of e)r&&(t?(n||=(t=[[t[0][0],t[0][1]],[t[1][0],t[1][1]]],!0),t[0][0]=Math.min(t[0][0],r[0][0]),t[0][1]=Math.min(t[0][1],r[0][1]),t[1][0]=Math.max(t[1][0],r[1][0]),t[1][1]=Math.max(t[1][1],r[1][1])):t=r);return t}var Ls=Math.PI/180,Rs=Os(),zs=[0,0,0],Bs={unitsPerMeter:[1,1,1],metersPerUnit:[1,1,1]};function Vs({width:e,height:t,orthographic:r,fovyRadians:i,focalDistance:a,padding:o,near:s,far:c}){let l=e/t,u=r?new _().orthographic({fovy:i,aspect:l,focalDistance:a,near:s,far:c}):new _().perspective({fovy:i,aspect:l,near:s,far:c});if(o){let{left:r=0,right:i=0,top:a=0,bottom:s=0}=o,c=n((r+e-i)/2,0,e)-e/2,l=n((a+t-s)/2,0,t)-t/2;u[8]-=c*2/e,u[9]+=l*2/t}return u}var Hs=class e{constructor(e={}){this._frustumPlanes={},this.id=e.id||this.constructor.displayName||`viewport`,this.x=e.x||0,this.y=e.y||0,this.width=e.width||1,this.height=e.height||1,this.zoom=e.zoom||0,this.padding=e.padding,this.distanceScales=e.distanceScales||Bs,this.focalDistance=e.focalDistance||1,this.position=e.position||zs,this.modelMatrix=e.modelMatrix||null;let{longitude:t,latitude:n}=e;this.isGeospatial=Number.isFinite(n)&&Number.isFinite(t),this._initProps(e),this._initMatrices(e),this.equals=this.equals.bind(this),this.project=this.project.bind(this),this.unproject=this.unproject.bind(this),this.projectPosition=this.projectPosition.bind(this),this.unprojectPosition=this.unprojectPosition.bind(this),this.projectFlat=this.projectFlat.bind(this),this.unprojectFlat=this.unprojectFlat.bind(this)}get subViewports(){return null}get metersPerPixel(){return this.distanceScales.metersPerUnit[2]/this.scale}get projectionMode(){return this.isGeospatial?this.zoom<12?q.WEB_MERCATOR:q.WEB_MERCATOR_AUTO_OFFSET:q.IDENTITY}equals(t){return t instanceof e?this===t||t.width===this.width&&t.height===this.height&&t.scale===this.scale&&t.projectionMode===this.projectionMode&&t.resolution===this.resolution&&r(t.distanceScales.unitsPerMeter,this.distanceScales.unitsPerMeter)&&r(t.projectionMatrix,this.projectionMatrix)&&r(t.viewMatrix,this.viewMatrix):!1}project(e,{topLeft:t=!0}={}){let n=bs(this.projectPosition(e),this.pixelProjectionMatrix),[r,i]=n,a=t?i:this.height-i;return e.length===2?[r,a]:[r,a,n[2]]}unproject(e,{topLeft:t=!0,targetZ:n}={}){let[r,i,a]=e,o=t?i:this.height-i,s=n&&n*this.distanceScales.unitsPerMeter[2],c=xs([r,o,a],this.pixelUnprojectionMatrix,s),[l,u,d]=this.unprojectPosition(c);return Number.isFinite(a)?[l,u,d]:Number.isFinite(n)?[l,u,n]:[l,u]}projectPosition(e){let[t,n]=this.projectFlat(e);return[t,n,(e[2]||0)*this.distanceScales.unitsPerMeter[2]]}unprojectPosition(e){let[t,n]=this.unprojectFlat(e);return[t,n,(e[2]||0)*this.distanceScales.metersPerUnit[2]]}projectFlat(e){if(this.isGeospatial){let t=us(e);return t[1]=n(t[1],-318,830),t}return e}unprojectFlat(e){return this.isGeospatial?ds(e):e}getBounds(e={}){let t={targetZ:e.z||0},n=this.unproject([0,0],t),r=this.unproject([this.width,0],t),i=this.unproject([0,this.height],t),a=this.unproject([this.width,this.height],t);return[Math.min(n[0],r[0],i[0],a[0]),Math.min(n[1],r[1],i[1],a[1]),Math.max(n[0],r[0],i[0],a[0]),Math.max(n[1],r[1],i[1],a[1])]}getDistanceScales(e){return e&&this.isGeospatial?ms({longitude:e[0],latitude:e[1],highPrecision:!0}):this.distanceScales}containsPixel({x:e,y:t,width:n=1,height:r=1}){return e<this.x+this.width&&this.x<e+n&&t<this.y+this.height&&this.y<t+r}getFrustumPlanes(){return this._frustumPlanes.near||Object.assign(this._frustumPlanes,js(this.viewProjectionMatrix)),this._frustumPlanes}panByPosition(e,t,n){return null}_initProps(e){let t=e.longitude,n=e.latitude;this.isGeospatial&&(Number.isFinite(e.zoom)||(this.zoom=fs({latitude:n})+Math.log2(this.focalDistance)),this.distanceScales=e.distanceScales||ms({latitude:n,longitude:t}));let r=2**this.zoom;this.scale=r;let{position:i,modelMatrix:a}=e,s=zs;if(i&&(s=a?new _(a).transformAsVector(i,[]):i),this.isGeospatial){let e=this.projectPosition([t,n,0]);this.center=new o(s).scale(this.distanceScales.unitsPerMeter).add(e)}else this.center=this.projectPosition(s)}_initMatrices(e){let{viewMatrix:t=Rs,projectionMatrix:n=null,orthographic:r=!1,fovyRadians:i,fovy:a=75,near:s=.1,far:c=1e3,padding:f=null,focalDistance:p=1}=e;this.viewMatrixUncentered=t,this.viewMatrix=new _().multiplyRight(t).translate(new o(this.center).negate()),this.projectionMatrix=n||Vs({width:this.width,height:this.height,orthographic:r,fovyRadians:i||a*Ls,focalDistance:p,padding:f,near:s,far:c});let m=Os();h(m,m,this.projectionMatrix),h(m,m,this.viewMatrix),this.viewProjectionMatrix=m,this.viewMatrixInverse=u([],this.viewMatrix)||this.viewMatrix,this.cameraPosition=As(this.viewMatrixInverse);let g=Os(),y=Os();d(g,g,[this.width/2,-this.height/2,1]),l(g,g,[1,-1,0]),h(y,g,this.viewProjectionMatrix),this.pixelProjectionMatrix=y,this.pixelUnprojectionMatrix=u(Os(),this.pixelProjectionMatrix),this.pixelUnprojectionMatrix||v.warn(`Pixel project matrix not invertible`)()}};Hs.displayName=`Viewport`;var Us=class e extends Hs{constructor(e={}){let{latitude:t=0,longitude:r=0,zoom:i=0,pitch:a=0,bearing:o=0,nearZMultiplier:s=.1,farZMultiplier:c=1.01,nearZ:l,farZ:u,orthographic:d=!1,projectionMatrix:f,repeat:p=!1,worldOffset:m=0,position:h,padding:g,legacyMeterSizes:v=!1}=e,{width:y,height:b,altitude:x=1.5}=e,S=2**i;y||=1,b||=1;let C,w=null;if(f)x=f[5]/2,C=vs(x);else{e.fovy?(C=e.fovy,x=ys(C)):C=vs(x);let r;if(g){let{top:e=0,bottom:t=0}=g;r=[0,n((e+b-t)/2,0,b)-b/2]}w=_s({width:y,height:b,scale:S,center:h&&[0,0,h[2]*ps(t)],offset:r,pitch:a,fovy:C,nearZMultiplier:s,farZMultiplier:c}),Number.isFinite(l)&&(w.near=l),Number.isFinite(u)&&(w.far=u)}let T=gs({height:b,pitch:a,bearing:o,scale:S,altitude:x});m&&(T=new _().translate([512*m,0,0]).multiplyLeft(T)),super({...e,width:y,height:b,viewMatrix:T,longitude:r,latitude:t,zoom:i,...w,fovy:C,focalDistance:x}),this.latitude=t,this.longitude=r,this.zoom=i,this.pitch=a,this.bearing=o,this.altitude=x,this.fovy=C,this.orthographic=d,this._subViewports=p?[]:null,this._pseudoMeters=v,Object.freeze(this)}get subViewports(){if(this._subViewports&&!this._subViewports.length){let t=this.getBounds(),n=Math.floor((t[0]+180)/360),r=Math.ceil((t[2]-180)/360);for(let t=n;t<=r;t++){let n=t?new e({...this,worldOffset:t}):this;this._subViewports.push(n)}}return this._subViewports}equals(t){return t instanceof e&&t._pseudoMeters===this._pseudoMeters&&super.equals(t)}projectPosition(e){if(this._pseudoMeters)return super.projectPosition(e);let[t,n]=this.projectFlat(e);return[t,n,(e[2]||0)*ps(e[1])]}unprojectPosition(e){if(this._pseudoMeters)return super.unprojectPosition(e);let[t,n]=this.unprojectFlat(e);return[t,n,(e[2]||0)/ps(n)]}addMetersToLngLat(e,t){return hs(e,t)}panByPosition(e,n,r){let a=xs(n,this.pixelUnprojectionMatrix),o=this.projectFlat(e),s=t([],o,i([],a)),c=t([],this.center,s),[l,u]=this.unprojectFlat(c);return{longitude:l,latitude:u}}panByPosition3D(e,t){let n=e[2]||0,r=a([],e,this.unproject(t,{targetZ:n}));return{longitude:this.longitude+r[0],latitude:this.latitude+r[1]}}getBounds(e={}){let t=Ts(this,e.z||0);return[Math.min(t[0][0],t[1][0],t[2][0],t[3][0]),Math.min(t[0][1],t[1][1],t[2][1],t[3][1]),Math.max(t[0][0],t[1][0],t[2][0],t[3][0]),Math.max(t[0][1],t[1][1],t[2][1],t[3][1])]}fitBounds(t,n={}){let{width:r,height:i}=this,{longitude:a,latitude:o,zoom:s}=Ss({width:r,height:i,bounds:t,...n});return new e({width:r,height:i,longitude:a,latitude:o,zoom:s})}};Us.displayName=`WebMercatorViewport`;var Ws={NO_STATE:`Awaiting state`,MATCHED:`Matched. State transferred from previous layer`,INITIALIZED:`Initialized`,AWAITING_GC:`Discarded. Awaiting garbage collection`,AWAITING_FINALIZATION:`No longer matched. Awaiting garbage collection`,FINALIZED:`Finalized! Awaiting garbage collection`},Gs=Symbol.for(`component`),Ks=Symbol.for(`propTypes`),qs=Symbol.for(`deprecatedProps`),Js=Symbol.for(`asyncPropDefaults`),Ys=Symbol.for(`asyncPropOriginal`),Xs=Symbol.for(`asyncPropResolved`);function Zs(e,t=()=>!0){return Array.isArray(e)?Qs(e,t,[]):t(e)?[e]:[]}function Qs(e,t,n){let r=-1;for(;++r<e.length;){let i=e[r];Array.isArray(i)?Qs(i,t,n):t(i)&&n.push(i)}return n}function $s({target:e,source:t,start:n=0,count:r=1}){let i=t.length,a=r*i,o=0;for(let r=n;o<i;o++)e[r++]=t[o];for(;o<a;)o<a-o?(e.copyWithin(n+o,n,n+o),o*=2):(e.copyWithin(n+o,n,n+a-o),o=a);return e}function ec(e,t,n){if(e===t)return!0;if(!n||!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!ec(e[r],t[r],n-1))return!1;return!0}if(Array.isArray(t))return!1;if(typeof e==`object`&&typeof t==`object`){let r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(let i of r)if(!t.hasOwnProperty(i)||!ec(e[i],t[i],n-1))return!1;return!0}return!1}var tc=class{constructor(e){this._inProgress=!1,this._handle=null,this.time=0,this.settings={duration:0},this._timeline=e}get inProgress(){return this._inProgress}start(e){this.cancel(),this.settings=e,this._inProgress=!0,this.settings.onStart?.(this)}end(){this._inProgress&&(this._timeline.removeChannel(this._handle),this._handle=null,this._inProgress=!1,this.settings.onEnd?.(this))}cancel(){this._inProgress&&=(this.settings.onInterrupt?.(this),this._timeline.removeChannel(this._handle),this._handle=null,!1)}update(){if(!this._inProgress)return!1;if(this._handle===null){let{_timeline:e,settings:t}=this;this._handle=e.addChannel({delay:e.getTime(),duration:t.duration})}return this.time=this._timeline.getTime(this._handle),this._onUpdate(),this.settings.onUpdate?.(this),this._timeline.isFinished(this._handle)&&this.end(),!0}_onUpdate(){}};function nc(e,t){if(!e)throw Error(t||`deck.gl: assertion failed.`)}export{Tt as $,Io as A,Ii as B,us as C,$o as D,bs as E,Mo as F,Sn as G,Fn as H,Ao as I,mn as J,Cn as K,Hi as L,No as M,q as N,Go as O,Po as P,jt as Q,zi as R,ys as S,ds as T,jn as U,Ri as V,_n as W,Qt as X,R as Y,Mt as Z,Fs as _,Zs as a,nt as at,hs as b,Xs as c,x as ct,Ws as d,Et as et,Ks as f,ks as g,Is as h,$s as i,O as it,jo as j,Uo as k,Gs as l,b as lt,Hs as m,tc as n,Ot as nt,Js as o,et as ot,Us as p,gn as q,ec as r,yt as rt,Ys as s,Qe as st,nc as t,kt as tt,qs as u,v as ut,Ds as v,xs as w,vs as x,ss as y,Li as z};
import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { l as decodeKey } from './chunks/astro/server_CR3YeMnl.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = (_, next) => next();

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/justinprime/github/netlify-deploy/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page._Ma-rfcZ.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.AoJOcFV5.js"},{"type":"external","value":"/_astro/page._Ma-rfcZ.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.CV-wVR8i.css"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.AoJOcFV5.js"},{"type":"external","value":"/_astro/page._Ma-rfcZ.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.CV-wVR8i.css"},{"type":"external","src":"/_astro/_slug_.D9ciBvBw.css"}],"routeData":{"route":"/blog/[...slug]","isIndex":false,"type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/blog/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.AoJOcFV5.js"},{"type":"external","value":"/_astro/page._Ma-rfcZ.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.CV-wVR8i.css"},{"type":"external","src":"/_astro/index.vHIubPVI.css"},{"type":"inline","content":".swiper h2{margin-bottom:1rem;font-size:2.25rem;line-height:2.5rem}.swiper h3{margin-bottom:1rem;font-size:1.875rem;line-height:2.25rem;text-transform:lowercase;font-style:italic}.swiper p{margin-bottom:2rem;font-size:1.5rem;line-height:2rem}.swiper .justin-next,.swiper .justin-prev{cursor:pointer;transform-origin:center;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s;--tw-text-opacity: 1;color:rgb(40 42 54 / var(--tw-text-opacity))}.swiper .justin-next:hover,.swiper .justin-prev:hover{--tw-scale-x: 1.25;--tw-scale-y: 1.25;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.swiper .justin-next.swiper-button-disabled,.swiper .justin-prev.swiper-button-disabled{pointer-events:none;--tw-text-opacity: .3 }.swiper .justin-prev{margin-right:.5rem}\n"}],"routeData":{"route":"/work","isIndex":false,"type":"page","pattern":"^\\/work\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/work.astro","pathname":"/work","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.iajrhBlp.js"},{"type":"external","value":"/_astro/page._Ma-rfcZ.js"}],"styles":[{"type":"inline","content":"a[data-astro-cid-amtpk5hj]{position:relative;padding:1rem 2rem;text-align:center;font-weight:700;--tw-text-opacity: 1;color:rgb(40 42 54 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s;min-width:140px;text-decoration-line:none}a[data-astro-cid-amtpk5hj]:after{position:absolute;bottom:0;left:0;height:2px;width:100%;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s;z-index:-10;transform-origin:bottom center;content:\" \";animation:grow-out 175ms ease-out forwards}@keyframes grow-in{0%{height:2px}to{height:100%;border-radius:.375rem}}@keyframes grow-out{0%{height:100%}to{height:2px}}a[data-astro-cid-amtpk5hj]:hover{border-radius:.5rem}a[data-astro-cid-amtpk5hj]:hover:after{animation:grow-in 175ms ease-in forwards}a[data-astro-cid-amtpk5hj].default{--tw-text-opacity: 1;color:rgb(40 42 54 / var(--tw-text-opacity))}a[data-astro-cid-amtpk5hj].default:hover{border-color:transparent;--tw-bg-opacity: 1;background-color:rgb(40 42 54 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(248 248 242 / var(--tw-text-opacity))}a[data-astro-cid-amtpk5hj].green{--tw-text-opacity: 1;color:rgb(80 250 123 / var(--tw-text-opacity))}a[data-astro-cid-amtpk5hj].green:after{--tw-bg-opacity: 1;background-color:rgb(80 250 123 / var(--tw-bg-opacity))}a[data-astro-cid-amtpk5hj].green:hover{--tw-text-opacity: 1;color:rgb(40 42 54 / var(--tw-text-opacity))}a[data-astro-cid-amtpk5hj].cyan{--tw-text-opacity: 1;color:rgb(139 233 253 / var(--tw-text-opacity))}a[data-astro-cid-amtpk5hj].cyan:after{--tw-bg-opacity: 1;background-color:rgb(139 233 253 / var(--tw-bg-opacity))}a[data-astro-cid-amtpk5hj].cyan:hover{--tw-bg-opacity: 1;background-color:rgb(139 233 253 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(40 42 54 / var(--tw-text-opacity))}a[data-astro-cid-amtpk5hj].pink{--tw-text-opacity: 1;color:rgb(255 121 198 / var(--tw-text-opacity))}a[data-astro-cid-amtpk5hj].pink:after{--tw-bg-opacity: 1;background-color:rgb(255 121 198 / var(--tw-bg-opacity))}a[data-astro-cid-amtpk5hj].pink:hover{--tw-bg-opacity: 1;background-color:rgb(255 121 198 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(40 42 54 / var(--tw-text-opacity))}a[data-astro-cid-amtpk5hj].purple{--tw-text-opacity: 1;color:rgb(189 147 249 / var(--tw-text-opacity))}a[data-astro-cid-amtpk5hj].purple:after{--tw-bg-opacity: 1;background-color:rgb(189 147 249 / var(--tw-bg-opacity))}a[data-astro-cid-amtpk5hj].purple:hover{--tw-bg-opacity: 1;background-color:rgb(189 147 249 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(40 42 54 / var(--tw-text-opacity))}a[data-astro-cid-amtpk5hj].yellow{--tw-text-opacity: 1;color:rgb(241 250 140 / var(--tw-text-opacity))}a[data-astro-cid-amtpk5hj].yellow:after{--tw-bg-opacity: 1;background-color:rgb(241 250 140 / var(--tw-bg-opacity))}a[data-astro-cid-amtpk5hj].yellow:hover{--tw-bg-opacity: 1;background-color:rgb(241 250 140 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(40 42 54 / var(--tw-text-opacity))}\n"},{"type":"external","src":"/_astro/_slug_.CV-wVR8i.css"},{"type":"external","src":"/_astro/index.vHIubPVI.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/justinprime/github/netlify-deploy/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/justinprime/github/netlify-deploy/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/justinprime/github/netlify-deploy/src/layouts/header.astro",{"propagation":"in-tree","containsHead":false}],["/home/justinprime/github/netlify-deploy/src/layouts/base.astro",{"propagation":"in-tree","containsHead":false}],["/home/justinprime/github/netlify-deploy/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/justinprime/github/netlify-deploy/src/pages/work.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/work@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/work@_@astro":"pages/work.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Dzn2clcC.mjs","/home/justinprime/github/netlify-deploy/src/content/blog/adding-complexity.md?astroContentCollectionEntry=true":"chunks/adding-complexity_BZFp9a6v.mjs","/home/justinprime/github/netlify-deploy/src/content/blog/back-to-jekyll.md?astroContentCollectionEntry=true":"chunks/back-to-jekyll_lhyK5w36.mjs","/home/justinprime/github/netlify-deploy/src/content/blog/first-post.md?astroContentCollectionEntry=true":"chunks/first-post_D7rGQudl.mjs","/home/justinprime/github/netlify-deploy/src/content/blog/getting-a-workflow.md?astroContentCollectionEntry=true":"chunks/getting-a-workflow_DmaX8IgS.mjs","/home/justinprime/github/netlify-deploy/src/content/blog/now-to-astro.md?astroContentCollectionEntry=true":"chunks/now-to-astro_DDM_JDC4.mjs","/home/justinprime/github/netlify-deploy/src/content/blog/simple-alpine-theme-selector.md?astroContentCollectionEntry=true":"chunks/simple-alpine-theme-selector_B2pD-P5-.mjs","/home/justinprime/github/netlify-deploy/src/content/projects/just-a-calendar.md?astroContentCollectionEntry=true":"chunks/just-a-calendar_B3aN2wmC.mjs","/home/justinprime/github/netlify-deploy/src/content/projects/this-website.md?astroContentCollectionEntry=true":"chunks/this-website_DGhE8DJL.mjs","/home/justinprime/github/netlify-deploy/src/content/blog/adding-complexity.md?astroPropagatedAssets":"chunks/adding-complexity_D5ncEzt2.mjs","/home/justinprime/github/netlify-deploy/src/content/blog/back-to-jekyll.md?astroPropagatedAssets":"chunks/back-to-jekyll_Dh5I8uF8.mjs","/home/justinprime/github/netlify-deploy/src/content/blog/first-post.md?astroPropagatedAssets":"chunks/first-post_C1NqOCrk.mjs","/home/justinprime/github/netlify-deploy/src/content/blog/getting-a-workflow.md?astroPropagatedAssets":"chunks/getting-a-workflow_ChJBh7KH.mjs","/home/justinprime/github/netlify-deploy/src/content/blog/now-to-astro.md?astroPropagatedAssets":"chunks/now-to-astro_C6Gu85aO.mjs","/home/justinprime/github/netlify-deploy/src/content/blog/simple-alpine-theme-selector.md?astroPropagatedAssets":"chunks/simple-alpine-theme-selector_Bf0GNQyj.mjs","/home/justinprime/github/netlify-deploy/src/content/projects/just-a-calendar.md?astroPropagatedAssets":"chunks/just-a-calendar_BEuoQL13.mjs","/home/justinprime/github/netlify-deploy/src/content/projects/this-website.md?astroPropagatedAssets":"chunks/this-website_Du5JNll8.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/home/justinprime/github/netlify-deploy/src/content/blog/adding-complexity.md":"chunks/adding-complexity_3k4Vg1mf.mjs","/home/justinprime/github/netlify-deploy/src/content/blog/back-to-jekyll.md":"chunks/back-to-jekyll_Bj3GwKSD.mjs","/home/justinprime/github/netlify-deploy/src/content/blog/first-post.md":"chunks/first-post_DYZVPH3y.mjs","/home/justinprime/github/netlify-deploy/src/content/blog/getting-a-workflow.md":"chunks/getting-a-workflow_Zy-gdnPV.mjs","/home/justinprime/github/netlify-deploy/src/content/blog/now-to-astro.md":"chunks/now-to-astro_BH24nG7A.mjs","/home/justinprime/github/netlify-deploy/src/content/blog/simple-alpine-theme-selector.md":"chunks/simple-alpine-theme-selector_DM2K2tSQ.mjs","/home/justinprime/github/netlify-deploy/src/content/projects/just-a-calendar.md":"chunks/just-a-calendar_CJiLOBna.mjs","/home/justinprime/github/netlify-deploy/src/content/projects/this-website.md":"chunks/this-website_Dbe3ra8H.mjs","astro:scripts/page.js":"_astro/page._Ma-rfcZ.js","/astro/hoisted.js?q=0":"_astro/hoisted.iajrhBlp.js","/astro/hoisted.js?q=1":"_astro/hoisted.AoJOcFV5.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/favicon.BBQkU1S7.ico","/_astro/me.Cb_qjhmF.jpeg","/_astro/_slug_.CV-wVR8i.css","/_astro/_slug_.D9ciBvBw.css","/_astro/index.vHIubPVI.css","/resume.pdf","/_astro/hoisted.AoJOcFV5.js","/_astro/hoisted.iajrhBlp.js","/_astro/page._Ma-rfcZ.js","/fonts/FiraCodeNerdFont-Bold.ttf","/fonts/FiraCodeNerdFont-Light.ttf","/fonts/FiraCodeNerdFont-Medium.ttf","/fonts/FiraCodeNerdFont-Regular.ttf","/fonts/FiraCodeNerdFont-Retina.ttf","/fonts/SymbolsNerdFont-Regular.ttf","/fonts/SymbolsNerdFont-Regular.woff2","/fonts/SymbolsNerdFontMono-Regular.ttf","/_astro/page._Ma-rfcZ.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"LfI3WPpHzO8QJ6ZiwNCoS16zyBauf6zVsBRv0akChdA=","experimentalEnvGetSecretEnabled":false});

export { manifest };

if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return s[e]||(i=new Promise((async i=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},i=(i,s)=>{Promise.all(i.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(i)};self.define=(i,n,t)=>{s[i]||(s[i]=Promise.resolve().then((()=>{let s={};const a={uri:location.origin+i.slice(1)};return Promise.all(n.map((i=>{switch(i){case"exports":return s;case"module":return a;default:return e(i)}}))).then((e=>{const i=t(...e);return s.default||(s.default=i),s}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/server/middleware-manifest.json",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/1036.76fb0019c6212f1f.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/1317.6d18a23d8f2a0c06.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/1361.bbb5a61e89dc0488.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/1619.778788b04ea5dc06.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/1663.9cd0b6411d18213d.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/1783.511834a9f3fbac96.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/1816-32fa2667e5f38980.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/1825.b7872fcaf7933c91.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/2004.0215c1ef4c03732e.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/2136.f64efdccb71a021f.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/2344-701b5af2a5bfbf41.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/284.4526ea925e34c7d2.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/2962.9abf4c33026f69bb.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/2964.74656456b44b3630.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/3504.1225647e0a2506a5.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/3690.f2664f67bf35561f.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/4058.c30f413d9935f4be.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/4081.ce32c8a857e551f9.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/4270.2ba5081c8403adef.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/4278.381746c7b25ea51a.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/4551.2c53e74a6250f231.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/4765.7f9c29ebebe04fad.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/486.aee05fcca76ebf26.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/4913.7919045f74aba0a0.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/499.a86a3a9831dc6fd3.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/5069.48b592757b0328d7.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/5121.2ed4e1ef6a5801b6.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/5283.d538067efecf4961.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/5334.1f69964457991f89.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/5481.5a3b94ffec0fdc3c.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/584.30e5e9d3cd583dcf.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/6220.75023325e81058cb.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/6258.5bfee6c137949343.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/689.40d2898dac90ac29.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/692.bfbda1cccb9223d0.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/6953.1f049e1b4da45677.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/7490.7dd04535a732b3a8.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/7492.59f5ea6232d788d4.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/75fc9c18.dbea95b340aace72.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/7639.4bba38ce9a2506cb.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/7896.2daf219318b9a2eb.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/82.87a2612d67592eb2.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/8385.9bef43ba4d0e18d7.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/8857.5c0cdcc66bfb73a8.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/9169.294e5dcf4928503e.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/9181.5d630012f5a4a59f.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/9206.8e5c63a31be2333e.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/9588.e5079450293e8a77.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/9651.2c912108f59e2dc1.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/9729.9bdfa873b17b6dc3.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/990.b4aad60b5bd2708b.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/9912.85946ab63e3d49b1.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/commons-ef17bb02cd3d0c7b.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/d25bd147.83e8952a52e035d0.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/d2f59b09.bda9add694ce9fbc.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/fb7d5399.428315cc100307ef.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/framework-d9c9992982ceff03.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/main-46b5b3bb53527d22.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/pages/404-e766ab86baaeecdb.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/pages/_app-da3b293f50a81fe2.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/pages/_error-8cd1e69c8ad31f62.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/pages/about-me-f46dedd4c988ee2b.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/pages/cookie-declaration-0911af210b392c5f.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/pages/index-dda6e72552253e8b.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/pages/kealab-d4abea7e29e5f41e.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/pages/privacy-policy-2fcb9f875d395a0f.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/pages/strapi/%5B%5B...slug%5D%5D-e7b17e9b4b32ed9b.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/pages/terms-conditions-e952d9726e2ba9e7.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/chunks/webpack-608dbaafb31088e9.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/css/050d7968ed19605f.css",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/css/091732ff6c5bf513.css",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/css/27ea637f8d9b61a2.css",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/css/413e96ec1baccb98.css",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/css/5ccfe972225cd085.css",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/css/6ce65a3a65354018.css",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/css/85fcc411004bfa04.css",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/css/86e9017199126569.css",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/css/8c100cf1787c4bfe.css",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/css/994fb41bb828b7b2.css",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/css/b0b8ba230f0bd89c.css",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/css/b84d399b5e212ee8.css",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/css/c1f93bea30145f6e.css",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/css/d3fa888d74c3ecad.css",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/css/d4c32e0c3863e4b8.css",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/css/d57e1882390b8205.css",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/css/d6b1a7073d536714.css",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/css/e8b12d8216897476.css",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/dtI_qwVNWMDgnhGZ-VVsg/_buildManifest.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/dtI_qwVNWMDgnhGZ-VVsg/_middlewareManifest.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/dtI_qwVNWMDgnhGZ-VVsg/_ssgManifest.js",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/404-13a1b1b3d2c5d85993c353b000cf387b.svg.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/404-c9a9ac6a201cb47da23f36426ada08ee.svg",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/a2a-energia-logo-7e12aa2c41e7da0e9caaa175a8185172.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/amsa-logo-338dbb4a643a1353a44cd031d6c28ffb.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/amsa-logo-e814403825e0ff7e2abe02bb0a81aff4.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/android-bot-b95a78d973736c1acdf3eda7080e1ed4.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/application-architecture-4aafc03d2e2103f92c6f617b4cc7faf6.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/application-architecture-afe5dd54a21d43d5f6bbc8a3dd2d217a.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/application-architecture_low-85602a4d674f6323d7803c9c39451f7a.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/application-architecture_low-e512d208222fef010e86f40f229ff4e7.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/atos-logo-2e4dddb68adb31a16b22a415a24b5b5f.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/atos-logo-62dd1b23a3eac64a1e89db539737a03e.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/autogrill-logo-6c036815941d254d41f2d254907f7c26.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/autogrill-logo-eda92b2a912c480ea7578db8f9a300db.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/bg-grid-36b955885faca025c1c56ffd90d69287.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/bg-grid-5071cfd31be8a5e10603229403a7960e.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/bg-landscape-30881e07c7c2cd58b869865027ced6af.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/bg-landscape-34bb334fd02208550b039d5791a00cce.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/bg-landscape-9bacbe20db3b4c46ead35393b323e1f3.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/bg-landscape-ground-4faef586fdc0dec5f8c77331be590ff9.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/bg-landscape-ground-7e3d68dd7b97c13ada50dd937f2b7160.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/bg-landscape-ground-fea19cf2bf2ffafd775ced66a4815bf3.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/bg-super-mario-27ec76a57daaa8ad4a5dfe4504796b66.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/brain-graph-78ee2722fb92c8f54b443c27aa86aeb0.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/brain-graph-a2dbd1266e8e689917cab140cc2f6ee2.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/cinema-f4a329509a2b7d525bd4b53bf141cf60.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/cinema-feedf6596efc35fc89e1a19cc73e754c.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/cnh-logo-19e01dfb1b397588f46bff53d6cce9e5.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/cnh-logo-5d48bbff4ba1cbdd901184de7a164064.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/engineer-c796cf7b53d2e35964b560ff2703c771.gif",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/engineer-c796cf7b53d2e35964b560ff2703c771.gif.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/eni-logo-02e394cad4af85714cf10b0a6cda1344.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/eni-logo-5e0fa864b6b634961ff9b2502faf0672.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/fa-brands-400-13f826641a119c330543a49d5a2564b9.svg",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/fa-regular-400-8c07b9e285506d76aaabb1f9cc4f89fb.svg",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/fa-solid-900-12173987099db0e74f27332d47b4ddc3.svg",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/frontal-lobe-1eaf3918434942d5964ddff4b8c8fec9.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/frontal-lobe-70da10ab73d7478c50dc0dd2c7088804.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/graph-bg-a899de192d8c12d9eab023c03005c7a4.jpg",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/graph-bg-bc781b8ee003c55c3bd49ccb7ac82080.jpg.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/happy-hour-bari-43dc5f5d9a0ccd0f533e7f62e2edfe11.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/happy-hour-bari-f700f6b3f07e8d9d719a8b433d18f26c.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/ibm-logo-489d0f44dd10c9c47c440881e48af641.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/ibm-logo-be0139a95f370768565bf9fbdeb801a6.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/infrastructure-architecture-65aa8b802172137571df4259d898a20e.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/infrastructure-architecture-8cda5cb4b0e9a699cd94a706fc82dbc5.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/infrastructure-architecture_low-b0d11116980e085bea2603792944fe0b.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/infrastructure-architecture_low-cc61d242e7faeea5d41a242f86a8395d.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/intesa-sanpaolo-logo-923684123a0dbbac04f175665131270a.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/intesa-sanpaolo-logo-a5ea758cc8c53c71aa6d12e208ddfe62.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/jack-27843d37811ae3cf36473d79e2159269.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/jack-7d02e799ad08292a7023901fb687b5c7.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/jack-architect-272c7ac8a540da088cf0e1408e520351.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/jack-architect-9e5d7ae14c43988c861248b0c4fb572a.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/jack-fullstack-6f029a20c6be49496c8c5aadf1ce3796.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/jack-fullstack-e57d86d366ad91edcdeeaf671ebb49c3.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/jack-mobile-627f4d4a6a273ac65eb3c148f13bbac9.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/jack-mobile-adccdcfdb09df36a638207265ff1e6f2.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/knowledge-24d9ea06eec90977091b8268fe48f1a8.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/knowledge-af36e54abc3d02a419d79e4563d67043.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/learn-84dfc2968180ea0057cd0f6903a43c12.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/learn-a679bc16a5f95fffc0fa7ab995511272.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/marconi-28a054ba8385ce5013556cb6485f209b.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/marconi-34fd44eafbdff500c3cb999c1994f3df.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/martial-arts-125233272c8011a9c990f417377957ea.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/martial-arts-55c3821664d61b7967caa071c0106f0e.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/music-906aecd7842f58f9b9178dece95c9dad.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/music-bd7d087ec3f78cfdbf156e4422661e3e.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/not-website-9401235e21cde2d817ea2e9ee8aa8d01.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/not-website-d791ba8f8185be03beac7fbca75d0aa3.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/open-reply-logo-aa81aabfa0c1c9fdace6b9fd0f5fdc97.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/sochild-458e6c2e0f1918bd30a9190ca07d5511.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/sochild-f88b1189647fae1c686eaf6d1934c999.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/spearfishing-6e501d29ed156917509de2ec8efa236c.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/spearfishing-807ff44138e79cc935e3914d34455308.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/sport-666e3dd27126393e852eaa63df733272.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/sport-cd99c7ce64c9c7be58d1d34d2b8e5f31.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/sw-stack-bd29a1efc60985cc892c0ed7b09fb006.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/sw-stack-d80d50b1b30f56c8b7a4e47b7a0c1231.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/tetris-help-efd69d72e4be77e7bd1c14ab5dfb3a49.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/univ-liverpool-logo-9645736b0a6fc5117539a7e51d0ec382.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/univ-liverpool-logo-f79b50bc1354ff0a695378f4511e4e75.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/veneto-banca-logo-5c843cc126e45577d5877a2dc720c782.png",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/images/veneto-banca-logo-f131a76c867889ff6af3fe2463894696.png.webp",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/Roboto-Bold.5cab92a7.eot",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/Roboto-Bold.6540e693.ttf",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/Roboto-Bold.6690f2dc.woff2",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/Roboto-Bold.e4cd99ec.woff",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/Roboto-Light.0ccfdf89.woff2",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/Roboto-Light.57c1b7d1.ttf",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/Roboto-Light.790c2282.woff",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/Roboto-Light.c4c6ff55.eot",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/Roboto-Medium.0519ad6f.woff2",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/Roboto-Medium.99acac18.woff",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/Roboto-Medium.a45a1149.ttf",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/Roboto-Medium.f81a7d3e.eot",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/Roboto-Regular.0a9edc5b.woff",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/Roboto-Regular.5b3da978.eot",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/Roboto-Regular.793b729f.woff2",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/Roboto-Regular.af1dafcf.ttf",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/Roboto-Thin.04e13675.woff2",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/Roboto-Thin.07c6d6ea.woff",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/Roboto-Thin.85d2f90c.eot",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/Roboto-Thin.e110f8a2.ttf",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/fa-brands-400.0e53fe4f.woff",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/fa-brands-400.7edea186.woff2",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/fa-brands-400.9c02eaf6.ttf",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/fa-brands-400.b2970adc.eot",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/fa-regular-400.04dd5282.woff",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/fa-regular-400.7346017c.ttf",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/fa-regular-400.a0140e7c.eot",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/fa-regular-400.e2b3a9dc.woff2",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/fa-solid-900.620019ed.woff2",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/fa-solid-900.974801a4.eot",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/fa-solid-900.d5b0a356.ttf",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/fa-solid-900.e67670b0.woff",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/media/perfect_dos_vga_437_win.74105ed0.woff2",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/videos/binary-matrix-567ee5c29e23d7f0605a029fa2ce57c8.webm",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/videos/jack-d485a35244a8b8e3398ec440fd0d0ea0.webm",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/_next/static/videos/pdf-icon-glitch-02e51a2791d52a0c9127eb90803cefda.webm",revision:"dtI_qwVNWMDgnhGZ-VVsg"},{url:"/browserconfig.xml",revision:"7b0fbf861abc3a43137a39371dfc6596"},{url:"/favicon-16x16.png",revision:"159e9668c9e1f28056a5abff7b19f91f"},{url:"/favicon-32x32.png",revision:"296f00905350736d6c6b47a726d1848e"},{url:"/favicon.ico",revision:"4a5acd3f9b376eb991fefa90d7e2aed2"},{url:"/favicon.svg",revision:"cacdcdfb08f0ebb683017878d45fbfc1"},{url:"/fonts/perfect_dos_vga_437_win.woff2",revision:"4956f65d592b86b4ca41acb1ca787bae"},{url:"/fonts/roboto/Roboto-Bold.eot",revision:"ecdd509cadbf1ea78b8d2e31ec52328c"},{url:"/fonts/roboto/Roboto-Bold.ttf",revision:"e31fcf1885e371e19f5786c2bdfeae1b"},{url:"/fonts/roboto/Roboto-Bold.woff",revision:"dc81817def276b4f21395f7ea5e88dcd"},{url:"/fonts/roboto/Roboto-Bold.woff2",revision:"39b2c3031be6b4ea96e2e3e95d307814"},{url:"/fonts/roboto/Roboto-Light.eot",revision:"a990f611f2305dc12965f186c2ef2690"},{url:"/fonts/roboto/Roboto-Light.ttf",revision:"46e48ce0628835f68a7369d0254e4283"},{url:"/fonts/roboto/Roboto-Light.woff",revision:"3b813c2ae0d04909a33a18d792912ee7"},{url:"/fonts/roboto/Roboto-Light.woff2",revision:"69f8a0617ac472f78e45841323a3df9e"},{url:"/fonts/roboto/Roboto-Medium.eot",revision:"4d9f3f9e5195e7b074bb63ba4ce42208"},{url:"/fonts/roboto/Roboto-Medium.ttf",revision:"894a2ede85a483bf9bedefd4db45cdb9"},{url:"/fonts/roboto/Roboto-Medium.woff",revision:"fc78759e93a6cac50458610e3d9d63a0"},{url:"/fonts/roboto/Roboto-Medium.woff2",revision:"574fd0b50367f886d359e8264938fc37"},{url:"/fonts/roboto/Roboto-Regular.eot",revision:"30799efa5bf74129468ad4e257551dc3"},{url:"/fonts/roboto/Roboto-Regular.ttf",revision:"df7b648ce5356ea1ebce435b3459fd60"},{url:"/fonts/roboto/Roboto-Regular.woff",revision:"ba3dcd8903e3d0af5de7792777f8ae0d"},{url:"/fonts/roboto/Roboto-Regular.woff2",revision:"2751ee43015f9884c3642f103b7f70c9"},{url:"/fonts/roboto/Roboto-Thin.eot",revision:"dfe56a876d0282555d1e2458e278060f"},{url:"/fonts/roboto/Roboto-Thin.ttf",revision:"94998475f6aea65f558494802416c1cf"},{url:"/fonts/roboto/Roboto-Thin.woff",revision:"7500519de3d82e33d1587f8042e2afcb"},{url:"/fonts/roboto/Roboto-Thin.woff2",revision:"954bbdeb86483e4ffea00c4591530ece"},{url:"/img/404.svg",revision:"13a1b1b3d2c5d85993c353b000cf387b"},{url:"/img/application-architecture.png",revision:"5064edd0e9c7c42681ce15d6437021ea"},{url:"/img/application-architecture_low.png",revision:"b141326dbee4d615a5ee10f583ca6257"},{url:"/img/border-dash.png",revision:"662a3a4f50562c37cb92dadad9145a7b"},{url:"/img/browser-window.png",revision:"1bb994e5ce362323b32dceb9cda93f29"},{url:"/img/cosmo.png",revision:"f2c77b39c5755ecc4991f0c610b342de"},{url:"/img/cosmo.webp",revision:"3af97ebf220c31e899ac25c982a463b7"},{url:"/img/education/brain-graph.png",revision:"7eabb8f0bbeae89878aac91072e65b79"},{url:"/img/education/cerebellum.png",revision:"ef98b9d77854fd9312a2e39f29638cfe"},{url:"/img/education/frontal-lobe.png",revision:"2f7359709601e3c84d926f79377a672b"},{url:"/img/education/happy-hour-bari.png",revision:"f700f6b3f07e8d9d719a8b433d18f26c"},{url:"/img/education/marconi.png",revision:"34fd44eafbdff500c3cb999c1994f3df"},{url:"/img/education/occipital-lobe.png",revision:"18c0a52df22b3d70183365dcb2cdab35"},{url:"/img/education/parietal-lobe.png",revision:"4415becec8e2ede9a898c81fbd0b25e4"},{url:"/img/education/sochild.png",revision:"99a6f76d793aef0c99035e82ff8f87fe"},{url:"/img/education/temporal-lobe.png",revision:"9cc5c1eba1d2f2ae64d825f02ecd8a38"},{url:"/img/graph-bg.jpg",revision:"c30f3fa3dd25ab918c23f1a571f310d2"},{url:"/img/header-experience/android-bot.png",revision:"94e2a4595271199996e1020a4b4ac50e"},{url:"/img/header-experience/apple-logo.png",revision:"5f6e032f76ffd1368fbec90a9299535a"},{url:"/img/header-experience/bg-grid.png",revision:"6751e2b030d41c07e9ab4adf76d42b8e"},{url:"/img/header-experience/bg-landscape-ground.png",revision:"179ccc9c0ef8e7e11d9bdb6b6ed4461f"},{url:"/img/header-experience/bg-landscape-ground.webp",revision:"32d34aeda2e4ef15bff50b4e4e569a1e"},{url:"/img/header-experience/bg-landscape.png",revision:"5b6d0e5847ac55ec386aa7287db9d1e3"},{url:"/img/header-experience/bg-landscape.webp",revision:"06018b1c9e51bff37137bc4b92f64cbf"},{url:"/img/header-experience/bg-super-mario.png",revision:"e48ad80e50a266b466c7ecf3bc94a991"},{url:"/img/header-experience/bg-tetris.png",revision:"d0a641358d8345f43790dd0224cf667a"},{url:"/img/header-experience/border-tetris.png",revision:"d8a361c316960b9a61120a1394905ee6"},{url:"/img/header-experience/cloud-ai.png",revision:"433b61159f3481b1f41bef29c9430277"},{url:"/img/header-experience/crm.png",revision:"05d460991877585b426d85fefb9ed2e8"},{url:"/img/header-experience/devops.png",revision:"d3c24cf8c69051172dbeb5fe0e2059b0"},{url:"/img/header-experience/engineer.gif",revision:"c796cf7b53d2e35964b560ff2703c771"},{url:"/img/header-experience/micro-frontends.png",revision:"4a255e4cde467432c5622d89b3550434"},{url:"/img/header-experience/microservices.png",revision:"57500b5c605e69f2be82ef67b51eadd0"},{url:"/img/header-experience/order-manager.png",revision:"2ca319cbfd38466cc720d99873950c0a"},{url:"/img/header-experience/sw-stack.png",revision:"266a0c9b7a787760290c4abf46a2158b"},{url:"/img/header-experience/tetris-help.png",revision:"2e0c182f53658bf22950dda638893ff5"},{url:"/img/header-experience/tetris-score.png",revision:"c2e2f05a4eee881bb7c8910acbb20638"},{url:"/img/header-experience/tetris-statistics.png",revision:"e141fb2299e60af6bbc585b4058e9e96"},{url:"/img/hobbies/box.png",revision:"df6751c621724dcdca1e257f27f82325"},{url:"/img/hobbies/cinema.png",revision:"feedf6596efc35fc89e1a19cc73e754c"},{url:"/img/hobbies/martial-arts.png",revision:"55c3821664d61b7967caa071c0106f0e"},{url:"/img/hobbies/music.png",revision:"906aecd7842f58f9b9178dece95c9dad"},{url:"/img/hobbies/spearfishing.png",revision:"374cfb7473bf9d75c4e7a17a03023407"},{url:"/img/hobbies/sport.png",revision:"cd99c7ce64c9c7be58d1d34d2b8e5f31"},{url:"/img/infrastructure-architecture.png",revision:"738ef73f7bd13eab2f923986764815e8"},{url:"/img/infrastructure-architecture_low.png",revision:"aa9d94b1128f48118c5e5e12779b6b69"},{url:"/img/jack/jack-architect.png",revision:"9e5d7ae14c43988c861248b0c4fb572a"},{url:"/img/jack/jack-fullstack.png",revision:"e57d86d366ad91edcdeeaf671ebb49c3"},{url:"/img/jack/jack-mobile.png",revision:"adccdcfdb09df36a638207265ff1e6f2"},{url:"/img/jack/jack.png",revision:"90b663d787e63daadb198824365c408a"},{url:"/img/keadex-logo-150x150.png",revision:"5153814e1d19cf91eb199dd5d7483a9c"},{url:"/img/keadex-logo-192x192.png",revision:"517681a6acf62976a17f7021137b0ce9"},{url:"/img/keadex-logo-310x310.png",revision:"bc2b87efb9ff29e6591d3548f477c708"},{url:"/img/keadex-logo-384x384.png",revision:"c34691f3da9296ab25f98aaf1d3c31fb"},{url:"/img/keadex-logo-512x512.png",revision:"08c4549bc7296fb75a29d7c95bc274e1"},{url:"/img/keadex-logo-70x70.png",revision:"353cac9b1c8f30adb9ea0d3542ffd6fb"},{url:"/img/keadex-logo.png",revision:"b9ea7c3034595cfb0f462730d9215e28"},{url:"/img/knowledge.png",revision:"24d9ea06eec90977091b8268fe48f1a8"},{url:"/img/learn.png",revision:"a679bc16a5f95fffc0fa7ab995511272"},{url:"/img/logo/a2a-energia-logo.png",revision:"56acaa6f14a25502bc8023cb5a3a4412"},{url:"/img/logo/amsa-logo.png",revision:"5e12dcd1bf5db8e2eeb5b70357095a52"},{url:"/img/logo/atos-logo.png",revision:"2930dbf438934714622cbe73a935dd2f"},{url:"/img/logo/autogrill-logo.png",revision:"8df3203e337fbca4b6fbd52a7c712096"},{url:"/img/logo/cnh-logo.png",revision:"6e751a26abb2b50ce9aaf23681561f92"},{url:"/img/logo/eni-logo.png",revision:"ff2bd432e69879e5036232603265ce55"},{url:"/img/logo/ibm-logo.png",revision:"84d80b7768013354f9947887ed7ed2e3"},{url:"/img/logo/intesa-sanpaolo-logo.png",revision:"29723702a1ed2608665c61dc6d419c16"},{url:"/img/logo/open-reply-logo.png",revision:"3abe0b40ec4578d94864b5e888f59409"},{url:"/img/logo/univ-liverpool-logo.png",revision:"0279e87f508850ee13754c142753c958"},{url:"/img/logo/veneto-banca-logo.png",revision:"202c10f6ec0fa2adb1a02cf31e4b512e"},{url:"/img/logo/vodafone-logo.png",revision:"94b027bad12500b69e7d7dfcdf6df976"},{url:"/img/not-website.png",revision:"9401235e21cde2d817ea2e9ee8aa8d01"},{url:"/img/terminal-window.png",revision:"c1d8a5ea5deb4c94ee1ef1a4782f89bb"},{url:"/manifest.json",revision:"5356639eb7738f61cb227342675d11a0"},{url:"/video/binary-matrix.webm",revision:"567ee5c29e23d7f0605a029fa2ce57c8"},{url:"/video/jack/jack.webm",revision:"d485a35244a8b8e3398ec440fd0d0ea0"},{url:"/video/pdf-icon-glitch.webm",revision:"02e51a2791d52a0c9127eb90803cefda"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:s,state:n})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

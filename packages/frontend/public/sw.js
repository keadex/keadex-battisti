if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return c[e]||(a=new Promise(async a=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=a}else importScripts(e),a()})),a.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},a=(a,c)=>{Promise.all(a.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(a)};self.define=(a,i,f)=>{c[a]||(c[a]=Promise.resolve().then(()=>{let c={};const d={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return c;case"module":return d;default:return e(a)}})).then(e=>{const a=f(...e);return c.default||(c.default=a),c})}))}}define("./sw.js",["./workbox-2f16d78e"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/WyCW9xtLRBrYSPOUzmngK/_buildManifest.js",revision:"a7fbdbbd69d3980d72d92f26c9a43192"},{url:"/_next/static/WyCW9xtLRBrYSPOUzmngK/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/12.b8fffd82d8f797a56fd1.js",revision:"8d40912e83195af7b51563065cb4936f"},{url:"/_next/static/chunks/26.27b0b16bf9e8667d234a.js",revision:"1e800e7efa30022ec98ce0e6e951a591"},{url:"/_next/static/chunks/27.336546898a7286ebda18.js",revision:"b161fc4ab0db38fcb25cc602a8d10286"},{url:"/_next/static/chunks/28.d4d47d25875ec9df1c7c.js",revision:"40e3cb69dbbb5205e8888d8fcf592b62"},{url:"/_next/static/chunks/29.e3227a2af0a01bbe0719.js",revision:"6333883ae65d5ef95a72f664f3d71793"},{url:"/_next/static/chunks/30.d28a9a28a521e64c7828.js",revision:"3536028cd1c442284ae352189a9731a3"},{url:"/_next/static/chunks/31.c6b05a3157f215f560df.js",revision:"da82456c08f1117267fee000c69db639"},{url:"/_next/static/chunks/32.29a2b968a89ce83c0fe4.js",revision:"88c3bd229f41b495475b497a20f9923b"},{url:"/_next/static/chunks/33.4c1b00659857d4f3fed5.js",revision:"7a7d9835ed5153379cae72c1d3690299"},{url:"/_next/static/chunks/34.3768de6bfedf99d9db8e.js",revision:"afc6b1da9ed2400d4138b00fc01dfb94"},{url:"/_next/static/chunks/35.59506e343f829c82de81.js",revision:"82f952bb86a7284f69127a5cf6ef3d43"},{url:"/_next/static/chunks/36.962be54ec0dfc8e1bfab.js",revision:"16a30338058db9bb549e13dad9ee5328"},{url:"/_next/static/chunks/37.e461ec535eae883ac8f2.js",revision:"92e9664db996026e2d6f5851274af2e7"},{url:"/_next/static/chunks/38.6fdead0ced80ca3b97f2.js",revision:"57b5eb577cf463b69d727e3c44431390"},{url:"/_next/static/chunks/39.2fd75e760ecfabef1689.js",revision:"91ed585ecd3eb34ab0d5d014260d6d03"},{url:"/_next/static/chunks/40.72b09269fd46b3a49bed.js",revision:"99f9b2a1d2e01c0bca2949842a3f58ea"},{url:"/_next/static/chunks/41.dfd0a4ed98e1ed891f4d.js",revision:"16198ae014e15508be9790c32c851292"},{url:"/_next/static/chunks/42.ad7066020900ae5c3f98.js",revision:"05172f5db76d57c37855c14d36a78e17"},{url:"/_next/static/chunks/43.4a0608983c0a950aee2c.js",revision:"9b7c463f9f41bf2fa829cf4a525cc842"},{url:"/_next/static/chunks/44.b43aa38f3279b7df3ed6.js",revision:"68cfb10e921d5c8444f7d91c2899a280"},{url:"/_next/static/chunks/45.a12e1fe0c7e574069183.js",revision:"4a5a4a70a3e97f9939a489de7623910f"},{url:"/_next/static/chunks/46.9e3b416765e4cdd4a5d9.js",revision:"62d1e24225bfdf4395a435ca85b0d524"},{url:"/_next/static/chunks/47.2f0ec9772d7212e49758.js",revision:"5a6906f42a5e4fb9b4ab6c44cce83aa1"},{url:"/_next/static/chunks/48.d18868b1b1bb40be2802.js",revision:"7f1c473878c05d7a9780b29b6d754cab"},{url:"/_next/static/chunks/49.2648b0290a68e967514b.js",revision:"f4f1f8ef9be576d55be1c89975cb1a49"},{url:"/_next/static/chunks/50.9ce50ec74ed078c5efaa.js",revision:"f8e4689516356e5fffe381bd9b8c3545"},{url:"/_next/static/chunks/51.6e3a5b01be715d3235fe.js",revision:"591c34501087a9d3258b3b30e33b8efd"},{url:"/_next/static/chunks/7.2ff621d5026d1c7bc5c7.js",revision:"ccf14be4098cc2f4acc034064386e60a"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.b7c6713fb31342061c0f.js",revision:"ffc337c99fabc9a274c508c4c09e53aa"},{url:"/_next/static/chunks/8509c10d9e8225b2b2f66e64ea2e386b32ca89f0.0941c6d6a7767c1989b5.js",revision:"7a0d361491ed82500168ca29324774ff"},{url:"/_next/static/chunks/8a3d8df328d39ea5acecc365c4758029a314bc10.b5bc2f26b8d2f927b357.js",revision:"9017decd01da8dcdfa651b50587e1985"},{url:"/_next/static/chunks/95b98745c7115a4e6236ad090c96001665718c45.a8607d834c659f3578f4.js",revision:"1ecde29f95d339689f383e9a6003c6eb"},{url:"/_next/static/chunks/commons.0673b1867f81f1fd8764.js",revision:"67457f48a90305eac472a50158136881"},{url:"/_next/static/chunks/d25bd147.be2c8effba941ec610f5.js",revision:"55610cb60b89d62c4e53c75cfdb50905"},{url:"/_next/static/chunks/d2f59b09.529c66d235fa4732e1fb.js",revision:"92831494f2428b008fe1d16c140ba40d"},{url:"/_next/static/chunks/f54b42984bfe4d114461fcea2710af414ac1fe74.9dae3814badcd7396872.js",revision:"6dc03719410855d6cf078a64526b0aa6"},{url:"/_next/static/chunks/fb7d5399.dc407e44e77ff273d305.js",revision:"8985615055a757db67364665d2f19a59"},{url:"/_next/static/chunks/fe900dfb.748f7f460fe4ac62566f.js",revision:"558b16677112d754ba376553b26114de"},{url:"/_next/static/chunks/framework.1a7126ecdf5dcf56968c.js",revision:"4e54e49b10189b5bdbc51151c47f71be"},{url:"/_next/static/chunks/main-6adfa81f08e24fa11cb6.js",revision:"66819aff536f7ce24dad709cc38a732f"},{url:"/_next/static/chunks/pages/404-97656481da400d993b42.js",revision:"5d229f7346981740d717275337af229e"},{url:"/_next/static/chunks/pages/_app-7374e2304125ade42788.js",revision:"59500300ca79a3ede582b11083c8ad66"},{url:"/_next/static/chunks/pages/_error-1310aac130cf56ddc019.js",revision:"6e437c7f6e8bb9ed524a159c94e1372b"},{url:"/_next/static/chunks/pages/about-me-661bd95506c6eba66e36.js",revision:"6c6a1626f316b8b83f69e056010a80e8"},{url:"/_next/static/chunks/pages/cookie-declaration-aafe3d8ea0d60ac53eb8.js",revision:"bd4d3ae9242885410d19a4821f5c5d13"},{url:"/_next/static/chunks/pages/index-f3d2cd3ff4d6f5fec265.js",revision:"7f8afeae686b7fa03b62e66d0175d48c"},{url:"/_next/static/chunks/pages/kealab-84dbb8727741df264f19.js",revision:"75de225500a70031c772c4d117144475"},{url:"/_next/static/chunks/pages/privacy-policy-3e3dc528783370f8216e.js",revision:"1e56c0076549a2ef834980f9960072db"},{url:"/_next/static/chunks/pages/strapi/%5B[...slug%5D%5D-16be5a511c84bffd9101.js",revision:"24bd3d748bf22ea53f04f23f7d8a9c4b"},{url:"/_next/static/chunks/pages/terms-conditions-28ad1d6832c6211c70ba.js",revision:"3dce9c9f7099ef4c12c3ba4cdcb0d350"},{url:"/_next/static/chunks/polyfills-3aec2ade60f03d19f733.js",revision:"1137b8bb5386fdc810e9bf6cb99128b1"},{url:"/_next/static/chunks/webpack-d34f952292bb4e1c33e5.js",revision:"b2b249bdb5bc34b087f8815b0e38c2d2"},{url:"/_next/static/css/1d9a7858316ecde1689b.css",revision:"0a8e373134bc8af3905bd67c26b5edfa"},{url:"/_next/static/css/21120a4fb7a228006c59.css",revision:"10fb2d2568f4fac5b5fa77293e5bbbf9"},{url:"/_next/static/css/2a6eb6f4571207fe75e8.css",revision:"057b06ddab88bb7061ac79d4722e70ed"},{url:"/_next/static/css/32ca0cab52a93d08d1b2.css",revision:"2b6639bdfb4e0a645bfa29397f5fe1b3"},{url:"/_next/static/css/373571e3f571b742ff4f.css",revision:"c895a6d609925b2ad87c8df198892b42"},{url:"/_next/static/css/3fcca9533ed8252484b1.css",revision:"1296d0efbbd2a386f0d110c9b5aeec0b"},{url:"/_next/static/css/454278a3187a945f6dcb.css",revision:"57996d2350d7bd189baab95bc20c98fe"},{url:"/_next/static/css/49ea8614f7c063ed9684.css",revision:"231dcf26771a93638377f14d6b397e5d"},{url:"/_next/static/css/57c76525fe3503847477.css",revision:"6a2bc83b1419c6fc5beec498653cbc2a"},{url:"/_next/static/css/5c7ddad4cc3fb4f224b1.css",revision:"5111f399f50f335e3220ed009b0d1429"},{url:"/_next/static/css/61638d6719fbdce5780a.css",revision:"3b12d1065359759a2fea0bf5b7b282f0"},{url:"/_next/static/css/be77145188e02bde7b4e.css",revision:"0d268a6ef0f18529e78ca47f75cd84f4"},{url:"/_next/static/css/d52426ac20cd508dfedb.css",revision:"42ae3d44e8d3bdd1ff3007705d911b16"},{url:"/_next/static/css/e743f575de533daadfaa.css",revision:"465f4af13f99f5276df53f540a469e15"},{url:"/_next/static/css/fb3093c97687837806f1.css",revision:"cb16f2e2f8d218089433809ede3a3f59"},{url:"/_next/static/images/404-13a1b1b3d2c5d85993c353b000cf387b.svg.webp",revision:"13a1b1b3d2c5d85993c353b000cf387b"},{url:"/_next/static/images/404-c9a9ac6a201cb47da23f36426ada08ee.svg",revision:"c9a9ac6a201cb47da23f36426ada08ee"},{url:"/_next/static/images/a2a-energia-logo-7e12aa2c41e7da0e9caaa175a8185172.png.webp",revision:"7e12aa2c41e7da0e9caaa175a8185172"},{url:"/_next/static/images/amsa-logo-338dbb4a643a1353a44cd031d6c28ffb.png.webp",revision:"338dbb4a643a1353a44cd031d6c28ffb"},{url:"/_next/static/images/amsa-logo-e814403825e0ff7e2abe02bb0a81aff4.png",revision:"e814403825e0ff7e2abe02bb0a81aff4"},{url:"/_next/static/images/android-bot-b95a78d973736c1acdf3eda7080e1ed4.png",revision:"b95a78d973736c1acdf3eda7080e1ed4"},{url:"/_next/static/images/atos-logo-2e4dddb68adb31a16b22a415a24b5b5f.png",revision:"2e4dddb68adb31a16b22a415a24b5b5f"},{url:"/_next/static/images/atos-logo-62dd1b23a3eac64a1e89db539737a03e.png.webp",revision:"62dd1b23a3eac64a1e89db539737a03e"},{url:"/_next/static/images/autogrill-logo-6c036815941d254d41f2d254907f7c26.png.webp",revision:"6c036815941d254d41f2d254907f7c26"},{url:"/_next/static/images/autogrill-logo-eda92b2a912c480ea7578db8f9a300db.png",revision:"eda92b2a912c480ea7578db8f9a300db"},{url:"/_next/static/images/bg-grid-36b955885faca025c1c56ffd90d69287.png.webp",revision:"36b955885faca025c1c56ffd90d69287"},{url:"/_next/static/images/bg-grid-5071cfd31be8a5e10603229403a7960e.png",revision:"5071cfd31be8a5e10603229403a7960e"},{url:"/_next/static/images/bg-landscape-30881e07c7c2cd58b869865027ced6af.webp",revision:"30881e07c7c2cd58b869865027ced6af"},{url:"/_next/static/images/bg-landscape-34bb334fd02208550b039d5791a00cce.png.webp",revision:"34bb334fd02208550b039d5791a00cce"},{url:"/_next/static/images/bg-landscape-9bacbe20db3b4c46ead35393b323e1f3.png",revision:"9bacbe20db3b4c46ead35393b323e1f3"},{url:"/_next/static/images/bg-landscape-ground-4faef586fdc0dec5f8c77331be590ff9.webp",revision:"4faef586fdc0dec5f8c77331be590ff9"},{url:"/_next/static/images/bg-landscape-ground-7e3d68dd7b97c13ada50dd937f2b7160.png",revision:"7e3d68dd7b97c13ada50dd937f2b7160"},{url:"/_next/static/images/bg-landscape-ground-fea19cf2bf2ffafd775ced66a4815bf3.png.webp",revision:"fea19cf2bf2ffafd775ced66a4815bf3"},{url:"/_next/static/images/bg-super-mario-27ec76a57daaa8ad4a5dfe4504796b66.png.webp",revision:"27ec76a57daaa8ad4a5dfe4504796b66"},{url:"/_next/static/images/brain-graph-78ee2722fb92c8f54b443c27aa86aeb0.png.webp",revision:"78ee2722fb92c8f54b443c27aa86aeb0"},{url:"/_next/static/images/brain-graph-a2dbd1266e8e689917cab140cc2f6ee2.png",revision:"a2dbd1266e8e689917cab140cc2f6ee2"},{url:"/_next/static/images/cinema-f4a329509a2b7d525bd4b53bf141cf60.png.webp",revision:"f4a329509a2b7d525bd4b53bf141cf60"},{url:"/_next/static/images/cinema-feedf6596efc35fc89e1a19cc73e754c.png",revision:"feedf6596efc35fc89e1a19cc73e754c"},{url:"/_next/static/images/cnh-logo-19e01dfb1b397588f46bff53d6cce9e5.png",revision:"19e01dfb1b397588f46bff53d6cce9e5"},{url:"/_next/static/images/cnh-logo-5d48bbff4ba1cbdd901184de7a164064.png.webp",revision:"5d48bbff4ba1cbdd901184de7a164064"},{url:"/_next/static/images/engineer-c796cf7b53d2e35964b560ff2703c771.gif",revision:"c796cf7b53d2e35964b560ff2703c771"},{url:"/_next/static/images/engineer-c796cf7b53d2e35964b560ff2703c771.gif.webp",revision:"c796cf7b53d2e35964b560ff2703c771"},{url:"/_next/static/images/eni-logo-02e394cad4af85714cf10b0a6cda1344.png.webp",revision:"02e394cad4af85714cf10b0a6cda1344"},{url:"/_next/static/images/eni-logo-5e0fa864b6b634961ff9b2502faf0672.png",revision:"5e0fa864b6b634961ff9b2502faf0672"},{url:"/_next/static/images/fa-brands-400-f47313759538d5adb59398c3db61e0a3.svg",revision:"f47313759538d5adb59398c3db61e0a3"},{url:"/_next/static/images/fa-regular-400-8c07b9e285506d76aaabb1f9cc4f89fb.svg",revision:"8c07b9e285506d76aaabb1f9cc4f89fb"},{url:"/_next/static/images/fa-solid-900-3e3b1d45f34fc8ab762a81af4d3f27a4.svg",revision:"3e3b1d45f34fc8ab762a81af4d3f27a4"},{url:"/_next/static/images/frontal-lobe-1eaf3918434942d5964ddff4b8c8fec9.png",revision:"1eaf3918434942d5964ddff4b8c8fec9"},{url:"/_next/static/images/frontal-lobe-70da10ab73d7478c50dc0dd2c7088804.png.webp",revision:"70da10ab73d7478c50dc0dd2c7088804"},{url:"/_next/static/images/graph-bg-a899de192d8c12d9eab023c03005c7a4.jpg",revision:"a899de192d8c12d9eab023c03005c7a4"},{url:"/_next/static/images/graph-bg-bc781b8ee003c55c3bd49ccb7ac82080.jpg.webp",revision:"bc781b8ee003c55c3bd49ccb7ac82080"},{url:"/_next/static/images/happy-hour-bari-43dc5f5d9a0ccd0f533e7f62e2edfe11.png.webp",revision:"43dc5f5d9a0ccd0f533e7f62e2edfe11"},{url:"/_next/static/images/happy-hour-bari-f700f6b3f07e8d9d719a8b433d18f26c.png",revision:"f700f6b3f07e8d9d719a8b433d18f26c"},{url:"/_next/static/images/ibm-logo-489d0f44dd10c9c47c440881e48af641.png",revision:"489d0f44dd10c9c47c440881e48af641"},{url:"/_next/static/images/ibm-logo-be0139a95f370768565bf9fbdeb801a6.png.webp",revision:"be0139a95f370768565bf9fbdeb801a6"},{url:"/_next/static/images/intesa-sanpaolo-logo-923684123a0dbbac04f175665131270a.png",revision:"923684123a0dbbac04f175665131270a"},{url:"/_next/static/images/intesa-sanpaolo-logo-a5ea758cc8c53c71aa6d12e208ddfe62.png.webp",revision:"a5ea758cc8c53c71aa6d12e208ddfe62"},{url:"/_next/static/images/jack-27843d37811ae3cf36473d79e2159269.png",revision:"27843d37811ae3cf36473d79e2159269"},{url:"/_next/static/images/jack-7d02e799ad08292a7023901fb687b5c7.png.webp",revision:"7d02e799ad08292a7023901fb687b5c7"},{url:"/_next/static/images/jack-architect-272c7ac8a540da088cf0e1408e520351.png.webp",revision:"272c7ac8a540da088cf0e1408e520351"},{url:"/_next/static/images/jack-architect-9e5d7ae14c43988c861248b0c4fb572a.png",revision:"9e5d7ae14c43988c861248b0c4fb572a"},{url:"/_next/static/images/jack-fullstack-6f029a20c6be49496c8c5aadf1ce3796.png.webp",revision:"6f029a20c6be49496c8c5aadf1ce3796"},{url:"/_next/static/images/jack-fullstack-e57d86d366ad91edcdeeaf671ebb49c3.png",revision:"e57d86d366ad91edcdeeaf671ebb49c3"},{url:"/_next/static/images/jack-mobile-627f4d4a6a273ac65eb3c148f13bbac9.png.webp",revision:"627f4d4a6a273ac65eb3c148f13bbac9"},{url:"/_next/static/images/jack-mobile-adccdcfdb09df36a638207265ff1e6f2.png",revision:"adccdcfdb09df36a638207265ff1e6f2"},{url:"/_next/static/images/knwoledge-24d9ea06eec90977091b8268fe48f1a8.png",revision:"24d9ea06eec90977091b8268fe48f1a8"},{url:"/_next/static/images/knwoledge-af36e54abc3d02a419d79e4563d67043.png.webp",revision:"af36e54abc3d02a419d79e4563d67043"},{url:"/_next/static/images/learn-84dfc2968180ea0057cd0f6903a43c12.png.webp",revision:"84dfc2968180ea0057cd0f6903a43c12"},{url:"/_next/static/images/learn-a679bc16a5f95fffc0fa7ab995511272.png",revision:"a679bc16a5f95fffc0fa7ab995511272"},{url:"/_next/static/images/marconi-28a054ba8385ce5013556cb6485f209b.png.webp",revision:"28a054ba8385ce5013556cb6485f209b"},{url:"/_next/static/images/marconi-34fd44eafbdff500c3cb999c1994f3df.png",revision:"34fd44eafbdff500c3cb999c1994f3df"},{url:"/_next/static/images/martial-arts-125233272c8011a9c990f417377957ea.png.webp",revision:"125233272c8011a9c990f417377957ea"},{url:"/_next/static/images/martial-arts-55c3821664d61b7967caa071c0106f0e.png",revision:"55c3821664d61b7967caa071c0106f0e"},{url:"/_next/static/images/music-906aecd7842f58f9b9178dece95c9dad.png",revision:"906aecd7842f58f9b9178dece95c9dad"},{url:"/_next/static/images/music-bd7d087ec3f78cfdbf156e4422661e3e.png.webp",revision:"bd7d087ec3f78cfdbf156e4422661e3e"},{url:"/_next/static/images/not-website-9401235e21cde2d817ea2e9ee8aa8d01.png",revision:"9401235e21cde2d817ea2e9ee8aa8d01"},{url:"/_next/static/images/not-website-d791ba8f8185be03beac7fbca75d0aa3.png.webp",revision:"d791ba8f8185be03beac7fbca75d0aa3"},{url:"/_next/static/images/open-reply-logo-aa81aabfa0c1c9fdace6b9fd0f5fdc97.png",revision:"aa81aabfa0c1c9fdace6b9fd0f5fdc97"},{url:"/_next/static/images/sochild-458e6c2e0f1918bd30a9190ca07d5511.png.webp",revision:"458e6c2e0f1918bd30a9190ca07d5511"},{url:"/_next/static/images/sochild-f88b1189647fae1c686eaf6d1934c999.png",revision:"f88b1189647fae1c686eaf6d1934c999"},{url:"/_next/static/images/spearfishing-6e501d29ed156917509de2ec8efa236c.png.webp",revision:"6e501d29ed156917509de2ec8efa236c"},{url:"/_next/static/images/spearfishing-807ff44138e79cc935e3914d34455308.png",revision:"807ff44138e79cc935e3914d34455308"},{url:"/_next/static/images/sport-666e3dd27126393e852eaa63df733272.png.webp",revision:"666e3dd27126393e852eaa63df733272"},{url:"/_next/static/images/sport-cd99c7ce64c9c7be58d1d34d2b8e5f31.png",revision:"cd99c7ce64c9c7be58d1d34d2b8e5f31"},{url:"/_next/static/images/sw-stack-bd29a1efc60985cc892c0ed7b09fb006.png",revision:"bd29a1efc60985cc892c0ed7b09fb006"},{url:"/_next/static/images/sw-stack-d80d50b1b30f56c8b7a4e47b7a0c1231.png.webp",revision:"d80d50b1b30f56c8b7a4e47b7a0c1231"},{url:"/_next/static/images/tetris-help-efd69d72e4be77e7bd1c14ab5dfb3a49.png.webp",revision:"efd69d72e4be77e7bd1c14ab5dfb3a49"},{url:"/_next/static/images/univ-liverpool-logo-9645736b0a6fc5117539a7e51d0ec382.png",revision:"9645736b0a6fc5117539a7e51d0ec382"},{url:"/_next/static/images/univ-liverpool-logo-f79b50bc1354ff0a695378f4511e4e75.png.webp",revision:"f79b50bc1354ff0a695378f4511e4e75"},{url:"/_next/static/images/veneto-banca-logo-5c843cc126e45577d5877a2dc720c782.png",revision:"5c843cc126e45577d5877a2dc720c782"},{url:"/_next/static/images/veneto-banca-logo-f131a76c867889ff6af3fe2463894696.png.webp",revision:"f131a76c867889ff6af3fe2463894696"},{url:"/_next/static/media/Roboto-Bold.29d0602f3c74d2be2107889818d85108.ttf",revision:"e31fcf1885e371e19f5786c2bdfeae1b"},{url:"/_next/static/media/Roboto-Bold.5f2071a3ea1059dce0ada10ae75530c0.eot",revision:"ecdd509cadbf1ea78b8d2e31ec52328c"},{url:"/_next/static/media/Roboto-Bold.8b6957a1ce4f6e9236f980cf01e457bc.woff2",revision:"39b2c3031be6b4ea96e2e3e95d307814"},{url:"/_next/static/media/Roboto-Bold.9f4933e9b9559f8615f3997fccad5db8.woff",revision:"dc81817def276b4f21395f7ea5e88dcd"},{url:"/_next/static/media/Roboto-Light.7cedccda2feb66b96d7a374d774eeef0.ttf",revision:"46e48ce0628835f68a7369d0254e4283"},{url:"/_next/static/media/Roboto-Light.7d1febe76014e661e3f2a3827be43d5e.woff2",revision:"69f8a0617ac472f78e45841323a3df9e"},{url:"/_next/static/media/Roboto-Light.82fabc8ad3eb207e456ae361e1eed67e.eot",revision:"a990f611f2305dc12965f186c2ef2690"},{url:"/_next/static/media/Roboto-Light.dd9e8e47c13bd958253aab92355588ed.woff",revision:"3b813c2ae0d04909a33a18d792912ee7"},{url:"/_next/static/media/Roboto-Medium.987ab5111b87d67e6f6e491e36ba46a3.ttf",revision:"894a2ede85a483bf9bedefd4db45cdb9"},{url:"/_next/static/media/Roboto-Medium.ad11054c06a5d3f128daa73c3826c463.eot",revision:"4d9f3f9e5195e7b074bb63ba4ce42208"},{url:"/_next/static/media/Roboto-Medium.c90d94fb3f94e426c31e82cafadc524c.woff2",revision:"574fd0b50367f886d359e8264938fc37"},{url:"/_next/static/media/Roboto-Medium.e2d3fd034896d1bc0fc5cd6586862202.woff",revision:"fc78759e93a6cac50458610e3d9d63a0"},{url:"/_next/static/media/Roboto-Regular.04b605aa85f24816e3e6cc19b10c3d09.ttf",revision:"df7b648ce5356ea1ebce435b3459fd60"},{url:"/_next/static/media/Roboto-Regular.5e1aec00d3a032511dde0121ec1ecc5d.woff",revision:"ba3dcd8903e3d0af5de7792777f8ae0d"},{url:"/_next/static/media/Roboto-Regular.86c03c03a6e4002e883ab32fa17fbdfb.eot",revision:"30799efa5bf74129468ad4e257551dc3"},{url:"/_next/static/media/Roboto-Regular.e9a9d280f48fac104245f45ce1a44e33.woff2",revision:"2751ee43015f9884c3642f103b7f70c9"},{url:"/_next/static/media/Roboto-Thin.06ca73da1f5188a4c6791b60607c831a.woff2",revision:"954bbdeb86483e4ffea00c4591530ece"},{url:"/_next/static/media/Roboto-Thin.7bf9050517b14eb2acfdcb7087fee229.woff",revision:"7500519de3d82e33d1587f8042e2afcb"},{url:"/_next/static/media/Roboto-Thin.bc405e852883934268b588431036d452.ttf",revision:"94998475f6aea65f558494802416c1cf"},{url:"/_next/static/media/Roboto-Thin.ddc05a8dfb503bf29180f781dec5aaf1.eot",revision:"dfe56a876d0282555d1e2458e278060f"},{url:"/_next/static/media/fa-brands-400.0fea24969112a781acd2463caf03f138.eot",revision:"e2ca6541bff3a3e9f4799ee327b28c58"},{url:"/_next/static/media/fa-brands-400.c967a94cfbe2b06627ffe7861c741a61.woff2",revision:"f075c50f89795e4cdb4d45b51f1a6800"},{url:"/_next/static/media/fa-brands-400.dc2cbadd690e1d4b2c9c11c8143d027c.woff",revision:"ad527cc5ec23d6da66e8a1d6772ea6d3"},{url:"/_next/static/media/fa-brands-400.ec82f282c7f54b6370985bdf8406d5b7.ttf",revision:"8300bd7f30e0a313c1d772b49d96cb8e"},{url:"/_next/static/media/fa-regular-400.08f9891a6f44d9546678133ab121fc54.eot",revision:"b01516c1808be557667befec76cd6318"},{url:"/_next/static/media/fa-regular-400.1008b5226941c24f44681061d347ad5e.woff2",revision:"4a74738e7728e93c4394b8604081da62"},{url:"/_next/static/media/fa-regular-400.1069ea55beaa0106030287c659732543.woff",revision:"3c6879c4f342203d099bdd66dce6d396"},{url:"/_next/static/media/fa-regular-400.1495f578452eb676f730244d3b9368cd.ttf",revision:"49f00693b0e5d45097832ef5ea1bc541"},{url:"/_next/static/media/fa-solid-900.10ecefc282f2761808bf26cb335511d5.ttf",revision:"205f07b3883c484f27f40d21a92950d4"},{url:"/_next/static/media/fa-solid-900.3a24a60e7f9c6574864a38814fa07533.eot",revision:"8ac3167427b1d5d2967646bd8f7a0587"},{url:"/_next/static/media/fa-solid-900.3ceb50e7bcafb577367c21b53064e00c.woff2",revision:"8e1ed89b6ccb8ce41faf5cb672677105"},{url:"/_next/static/media/fa-solid-900.46fdbd2d897f8824e63c8862af60b24c.woff",revision:"4451e1d86df7491dd874f2c41eee1053"},{url:"/_next/static/media/perfect_dos_vga_437_win.72e63517652c82e8ae4a8d2ac73c80ed.woff2",revision:"4956f65d592b86b4ca41acb1ca787bae"},{url:"/_next/static/videos/binary-matrix-4bd5d9e560067075939b048ab375294a.mp4",revision:"4bd5d9e560067075939b048ab375294a"},{url:"/_next/static/videos/binary-matrix-567ee5c29e23d7f0605a029fa2ce57c8.webm",revision:"567ee5c29e23d7f0605a029fa2ce57c8"},{url:"/_next/static/videos/jack-0ff7b76324b492e42c611398b80e7631.mp4",revision:"0ff7b76324b492e42c611398b80e7631"},{url:"/_next/static/videos/jack-d485a35244a8b8e3398ec440fd0d0ea0.webm",revision:"d485a35244a8b8e3398ec440fd0d0ea0"},{url:"/_next/static/videos/pdf-icon-glitch-02e51a2791d52a0c9127eb90803cefda.webm",revision:"02e51a2791d52a0c9127eb90803cefda"},{url:"/_next/static/videos/pdf-icon-glitch-5f8b38e200e7e06ef0fcf6b7b7f44afb.mp4",revision:"5f8b38e200e7e06ef0fcf6b7b7f44afb"},{url:"/browserconfig.xml",revision:"7b0fbf861abc3a43137a39371dfc6596"},{url:"/custom_template/README.md",revision:"1e22a2f2f6338c93069ec58e93cf97db"},{url:"/custom_template/js/main.js",revision:"3f6f2c87db07cab08b86b1584dc689f3"},{url:"/favicon-16x16.png",revision:"159e9668c9e1f28056a5abff7b19f91f"},{url:"/favicon-32x32.png",revision:"296f00905350736d6c6b47a726d1848e"},{url:"/favicon.ico",revision:"4a5acd3f9b376eb991fefa90d7e2aed2"},{url:"/favicon.svg",revision:"cacdcdfb08f0ebb683017878d45fbfc1"},{url:"/fonts/perfect_dos_vga_437_win.woff2",revision:"4956f65d592b86b4ca41acb1ca787bae"},{url:"/fonts/roboto/Roboto-Bold.eot",revision:"ecdd509cadbf1ea78b8d2e31ec52328c"},{url:"/fonts/roboto/Roboto-Bold.ttf",revision:"e31fcf1885e371e19f5786c2bdfeae1b"},{url:"/fonts/roboto/Roboto-Bold.woff",revision:"dc81817def276b4f21395f7ea5e88dcd"},{url:"/fonts/roboto/Roboto-Bold.woff2",revision:"39b2c3031be6b4ea96e2e3e95d307814"},{url:"/fonts/roboto/Roboto-Light.eot",revision:"a990f611f2305dc12965f186c2ef2690"},{url:"/fonts/roboto/Roboto-Light.ttf",revision:"46e48ce0628835f68a7369d0254e4283"},{url:"/fonts/roboto/Roboto-Light.woff",revision:"3b813c2ae0d04909a33a18d792912ee7"},{url:"/fonts/roboto/Roboto-Light.woff2",revision:"69f8a0617ac472f78e45841323a3df9e"},{url:"/fonts/roboto/Roboto-Medium.eot",revision:"4d9f3f9e5195e7b074bb63ba4ce42208"},{url:"/fonts/roboto/Roboto-Medium.ttf",revision:"894a2ede85a483bf9bedefd4db45cdb9"},{url:"/fonts/roboto/Roboto-Medium.woff",revision:"fc78759e93a6cac50458610e3d9d63a0"},{url:"/fonts/roboto/Roboto-Medium.woff2",revision:"574fd0b50367f886d359e8264938fc37"},{url:"/fonts/roboto/Roboto-Regular.eot",revision:"30799efa5bf74129468ad4e257551dc3"},{url:"/fonts/roboto/Roboto-Regular.ttf",revision:"df7b648ce5356ea1ebce435b3459fd60"},{url:"/fonts/roboto/Roboto-Regular.woff",revision:"ba3dcd8903e3d0af5de7792777f8ae0d"},{url:"/fonts/roboto/Roboto-Regular.woff2",revision:"2751ee43015f9884c3642f103b7f70c9"},{url:"/fonts/roboto/Roboto-Thin.eot",revision:"dfe56a876d0282555d1e2458e278060f"},{url:"/fonts/roboto/Roboto-Thin.ttf",revision:"94998475f6aea65f558494802416c1cf"},{url:"/fonts/roboto/Roboto-Thin.woff",revision:"7500519de3d82e33d1587f8042e2afcb"},{url:"/fonts/roboto/Roboto-Thin.woff2",revision:"954bbdeb86483e4ffea00c4591530ece"},{url:"/img/404.svg",revision:"13a1b1b3d2c5d85993c353b000cf387b"},{url:"/img/application-architecture.svg",revision:"47c54474ca17d63ec4bf4abcc13d5e59"},{url:"/img/border-dash.png",revision:"662a3a4f50562c37cb92dadad9145a7b"},{url:"/img/browser-window.png",revision:"1bb994e5ce362323b32dceb9cda93f29"},{url:"/img/cosmo.png",revision:"f2c77b39c5755ecc4991f0c610b342de"},{url:"/img/cosmo.webp",revision:"3af97ebf220c31e899ac25c982a463b7"},{url:"/img/education/brain-graph.png",revision:"7eabb8f0bbeae89878aac91072e65b79"},{url:"/img/education/cerebellum.png",revision:"ef98b9d77854fd9312a2e39f29638cfe"},{url:"/img/education/frontal-lobe.png",revision:"2f7359709601e3c84d926f79377a672b"},{url:"/img/education/happy-hour-bari.png",revision:"f700f6b3f07e8d9d719a8b433d18f26c"},{url:"/img/education/marconi.png",revision:"34fd44eafbdff500c3cb999c1994f3df"},{url:"/img/education/occipital-lobe.png",revision:"18c0a52df22b3d70183365dcb2cdab35"},{url:"/img/education/parietal-lobe.png",revision:"4415becec8e2ede9a898c81fbd0b25e4"},{url:"/img/education/sochild.png",revision:"99a6f76d793aef0c99035e82ff8f87fe"},{url:"/img/education/temporal-lobe.png",revision:"9cc5c1eba1d2f2ae64d825f02ecd8a38"},{url:"/img/graph-bg.jpg",revision:"c30f3fa3dd25ab918c23f1a571f310d2"},{url:"/img/header-experience/android-bot.png",revision:"94e2a4595271199996e1020a4b4ac50e"},{url:"/img/header-experience/apple-logo.png",revision:"5f6e032f76ffd1368fbec90a9299535a"},{url:"/img/header-experience/bg-grid.png",revision:"6751e2b030d41c07e9ab4adf76d42b8e"},{url:"/img/header-experience/bg-landscape-ground.png",revision:"179ccc9c0ef8e7e11d9bdb6b6ed4461f"},{url:"/img/header-experience/bg-landscape-ground.webp",revision:"32d34aeda2e4ef15bff50b4e4e569a1e"},{url:"/img/header-experience/bg-landscape.png",revision:"5b6d0e5847ac55ec386aa7287db9d1e3"},{url:"/img/header-experience/bg-landscape.webp",revision:"06018b1c9e51bff37137bc4b92f64cbf"},{url:"/img/header-experience/bg-super-mario.png",revision:"e48ad80e50a266b466c7ecf3bc94a991"},{url:"/img/header-experience/bg-tetris.png",revision:"d0a641358d8345f43790dd0224cf667a"},{url:"/img/header-experience/border-tetris.png",revision:"d8a361c316960b9a61120a1394905ee6"},{url:"/img/header-experience/cloud-ai.png",revision:"433b61159f3481b1f41bef29c9430277"},{url:"/img/header-experience/crm.png",revision:"05d460991877585b426d85fefb9ed2e8"},{url:"/img/header-experience/devops.png",revision:"d3c24cf8c69051172dbeb5fe0e2059b0"},{url:"/img/header-experience/engineer.gif",revision:"c796cf7b53d2e35964b560ff2703c771"},{url:"/img/header-experience/micro-frontends.png",revision:"4a255e4cde467432c5622d89b3550434"},{url:"/img/header-experience/microservices.png",revision:"57500b5c605e69f2be82ef67b51eadd0"},{url:"/img/header-experience/order-manager.png",revision:"2ca319cbfd38466cc720d99873950c0a"},{url:"/img/header-experience/sw-stack.png",revision:"266a0c9b7a787760290c4abf46a2158b"},{url:"/img/header-experience/tetris-help.png",revision:"2e0c182f53658bf22950dda638893ff5"},{url:"/img/header-experience/tetris-score.png",revision:"c2e2f05a4eee881bb7c8910acbb20638"},{url:"/img/header-experience/tetris-statistics.png",revision:"e141fb2299e60af6bbc585b4058e9e96"},{url:"/img/hobbies/box.png",revision:"df6751c621724dcdca1e257f27f82325"},{url:"/img/hobbies/cinema.png",revision:"feedf6596efc35fc89e1a19cc73e754c"},{url:"/img/hobbies/martial-arts.png",revision:"55c3821664d61b7967caa071c0106f0e"},{url:"/img/hobbies/music.png",revision:"906aecd7842f58f9b9178dece95c9dad"},{url:"/img/hobbies/spearfishing.png",revision:"374cfb7473bf9d75c4e7a17a03023407"},{url:"/img/hobbies/sport.png",revision:"cd99c7ce64c9c7be58d1d34d2b8e5f31"},{url:"/img/infrastructure-architecture.svg",revision:"3f567b55bd46cbb9b85c8e4137516f23"},{url:"/img/jack/jack-architect.png",revision:"9e5d7ae14c43988c861248b0c4fb572a"},{url:"/img/jack/jack-fullstack.png",revision:"e57d86d366ad91edcdeeaf671ebb49c3"},{url:"/img/jack/jack-mobile.png",revision:"adccdcfdb09df36a638207265ff1e6f2"},{url:"/img/jack/jack.png",revision:"90b663d787e63daadb198824365c408a"},{url:"/img/keadex-logo-150x150.png",revision:"5153814e1d19cf91eb199dd5d7483a9c"},{url:"/img/keadex-logo-192x192.png",revision:"517681a6acf62976a17f7021137b0ce9"},{url:"/img/keadex-logo-310x310.png",revision:"bc2b87efb9ff29e6591d3548f477c708"},{url:"/img/keadex-logo-384x384.png",revision:"c34691f3da9296ab25f98aaf1d3c31fb"},{url:"/img/keadex-logo-512x512.png",revision:"08c4549bc7296fb75a29d7c95bc274e1"},{url:"/img/keadex-logo-70x70.png",revision:"353cac9b1c8f30adb9ea0d3542ffd6fb"},{url:"/img/keadex-logo.png",revision:"b9ea7c3034595cfb0f462730d9215e28"},{url:"/img/knwoledge.png",revision:"24d9ea06eec90977091b8268fe48f1a8"},{url:"/img/learn.png",revision:"a679bc16a5f95fffc0fa7ab995511272"},{url:"/img/logo/a2a-energia-logo.png",revision:"56acaa6f14a25502bc8023cb5a3a4412"},{url:"/img/logo/amsa-logo.png",revision:"5e12dcd1bf5db8e2eeb5b70357095a52"},{url:"/img/logo/atos-logo.png",revision:"2930dbf438934714622cbe73a935dd2f"},{url:"/img/logo/autogrill-logo.png",revision:"8df3203e337fbca4b6fbd52a7c712096"},{url:"/img/logo/cnh-logo.png",revision:"6e751a26abb2b50ce9aaf23681561f92"},{url:"/img/logo/eni-logo.png",revision:"ff2bd432e69879e5036232603265ce55"},{url:"/img/logo/ibm-logo.png",revision:"84d80b7768013354f9947887ed7ed2e3"},{url:"/img/logo/intesa-sanpaolo-logo.png",revision:"29723702a1ed2608665c61dc6d419c16"},{url:"/img/logo/open-reply-logo.png",revision:"3abe0b40ec4578d94864b5e888f59409"},{url:"/img/logo/univ-liverpool-logo.png",revision:"0279e87f508850ee13754c142753c958"},{url:"/img/logo/veneto-banca-logo.png",revision:"202c10f6ec0fa2adb1a02cf31e4b512e"},{url:"/img/logo/vodafone-logo.png",revision:"94b027bad12500b69e7d7dfcdf6df976"},{url:"/img/not-website.png",revision:"9401235e21cde2d817ea2e9ee8aa8d01"},{url:"/img/terminal-window.png",revision:"c1d8a5ea5deb4c94ee1ef1a4782f89bb"},{url:"/manifest.json",revision:"5356639eb7738f61cb227342675d11a0"},{url:"/video/binary-matrix.mp4",revision:"4bd5d9e560067075939b048ab375294a"},{url:"/video/binary-matrix.webm",revision:"567ee5c29e23d7f0605a029fa2ce57c8"},{url:"/video/jack/jack.mp4",revision:"0ff7b76324b492e42c611398b80e7631"},{url:"/video/jack/jack.webm",revision:"d485a35244a8b8e3398ec440fd0d0ea0"},{url:"/video/pdf-icon-glitch.mp4",revision:"5f8b38e200e7e06ef0fcf6b7b7f44afb"},{url:"/video/pdf-icon-glitch.webm",revision:"02e51a2791d52a0c9127eb90803cefda"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));

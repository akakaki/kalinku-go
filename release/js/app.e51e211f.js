(function(t){function e(e){for(var r,a,o=e[0],l=e[1],u=e[2],b=0,f=[];b<o.length;b++)a=o[b],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);s&&s(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var l=n[o];0!==c[l]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},c={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var s=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=(n("b680"),{key:0}),i={key:1};function a(t,e,n,a,o,l){return Object(r["h"])(),Object(r["d"])(r["a"],null,[a.list.length?Object(r["c"])("",!0):(Object(r["h"])(),Object(r["d"])("div",{key:0,class:Object(r["g"])(["opps",t.tw(["fixed","top-0","left-0","w-full","h-full","flex","flex-col","items-center","justify-center","text(white lg)","bg-black","bg-opacity-50","z-20"])])},[a.loading||a.list.length?Object(r["c"])("",!0):(Object(r["h"])(),Object(r["d"])("span",c,"👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾")),Object(r["e"])("span",null,Object(r["j"])(a.loading?"獲取宇宙天地力量中...":!a.list.length&&"👾 被外星人攻擊中沒有取到任何資料 👾"),1),a.loading||a.list.length?Object(r["c"])("",!0):(Object(r["h"])(),Object(r["d"])("span",i,"👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾"))],2)),Object(r["e"])("div",{class:Object(r["g"])(["mountain__wrap",t.tw(["relative","z-10","flex","overflow-hidden","transition-all","duration-200",a.switchHistoryList?"ml-[-120px]":""])])},[Object(r["e"])("div",{class:Object(r["g"])(["mountain__container",t.tw(["relative"])])},[Object(r["e"])("div",{id:"mountain",class:Object(r["g"])(t.tw(["h-screen","w-screen","z-10"]))},null,2),Object(r["e"])("div",{class:Object(r["g"])(["switch",t.tw(["absolute","top-3","right-3","z-10"])])},[Object(r["e"])("div",{class:Object(r["g"])(["history__switch",t.tw(["cursor-pointer","text-[20px]","transition-all","duration-200",a.switchHistoryList?"bg-gray-600":"bg-white","rounded-full","h-10","w-10","flex","items-center","justify-center","pt-[6px]","shadow-xl","mb-4"])]),onClick:e[0]||(e[0]=function(){return a.history&&a.history.apply(a,arguments)})},"📚",2),Object(r["e"])("div",{class:Object(r["g"])(["tips__switch",t.tw(["cursor-pointer","text-[20px]","transition-all","duration-200",a.switchTips?"bg-gray-600":"bg-white","rounded-full","h-10","w-10","flex","items-center","justify-center","pt-[6px]","shadow-xl"])]),onClick:e[1]||(e[1]=function(){return a.tips&&a.tips.apply(a,arguments)})},"💡",2)],2)],2),Object(r["e"])("div",{class:Object(r["g"])(["history__wrap",t.tw(["w-[120px]","flex-shrink-0","overflow-y-auto","h-screen","relative","z-10",a.switchHistoryList?"shadow-lg":""])])},[Object(r["e"])("div",{class:Object(r["g"])(["history__label",t.tw(["my-2","font-bold"])])},"歷史紀錄",2),Object(r["e"])("div",{class:Object(r["g"])(["history__list",t.tw(["p-2"])])},[(Object(r["h"])(!0),Object(r["d"])(r["a"],null,Object(r["i"])(a.list,(function(e){return Object(r["h"])(),Object(r["d"])("div",{class:Object(r["g"])(["history__item",t.tw(["border-b","mb-2"])])},[Object(r["e"])("div",{class:Object(r["g"])(t.tw(["mt-2","text-xs"]))},"經緯 "+Object(r["j"])(e.latitude.toFixed(4))+", 經度 "+Object(r["j"])(e.longitude.toFixed(4)),3),Object(r["e"])("div",{class:Object(r["g"])(t.tw(["mt-2","text-xs"]))},Object(r["j"])(a.formatTimer(e.time)),3)],2)})),256))],2)],2)],2)],64)}var o=n("1da1"),l=(n("96cf"),n("b64b"),n("d81d"),n("99af"),n("d3b7"),n("6cc5"),n("94ae")),u=n.n(l),s=n("a1e9"),b=n("5c40"),f=n("0844"),d=n("5a0c"),p=n.n(d),h={name:"App",setup:function(){var t=Object(s["l"])(!1),e=null,n=Object(s["l"])([]),r=Object(s["l"])({}),c=Object(s["l"])(null),i=function(){var t={latitude:24.1096584,longitude:120.6190964},n=Object.keys(r.value).length?r.value:t;e=u.a.map("mountain",{center:[n.latitude,n.longitude],zoom:16});var i=u.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:!1}).addTo(e);if(!Object.keys(r.value).length)return i.getContainer().classList.add(Object(f["b"])(["filter"]),Object(f["b"])("grayscale"),Object(f["b"])(["blur-sm"])),!1;c.value=u.a.marker([r.value.latitude,r.value.longitude],{icon:new u.a.divIcon({className:Object(f["b"])(["bg-green-500","rounded-full","border","border-white"]),html:'<span class="'.concat(Object(f["b"])(["bg-green-500","rounded-full","animate-ping","block","h-full"]),'"></span>')})}),c.value.addTo(e);var a=p()().diff(p()(r.value.time),"year"),o=p()().diff(p()(r.value.time),"month"),l=p()().diff(p()(r.value.time),"day"),s=p()().diff(p()(r.value.time),"hour"),b=p()().diff(p()(r.value.time),"minute"),d=p()().diff(p()(r.value.time),"second"),h=a||o||l||s||b||d;console.log("timeBefore",r.value.time);var j=a?"年":o?"月":l?"天":s?"小時":b?"分鐘":d?"秒":"🥳",v=["🤖","🏃🏽‍♂️","⛰","📍","🙌🏻","💫","🛵","🏍","🚀","🛸"],O=Math.floor(Math.random()*v.length);c.value.bindPopup('\n        <div class="'.concat(Object(f["b"])(["flex","flex-col","min-w-[10vw]"]),'">\n          <span class="').concat(Object(f["b"])(["text-base","break-all"]),'">').concat(r.value.remark||v[O],'</span>\n          <div class="').concat(Object(f["b"])(["text(xs right gray-400)","mt-2"]),'">').concat(h).concat(j,"前更新</div>\n        </div>\n      ")),c.value.openPopup(),document.querySelector(".leaflet-control-attribution").remove()},a=function(){var t="https://script.google.com/macros/s/AKfycbyZRrktB7nM-TPVdI-Y9hheHNxY3hNgg2_fgb2fL5tHYX4F5FI06Jy0pXKpLVByG1RQiw/exec";return new Promise((function(e,n){fetch(t).then((function(t){return t.json()})).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},l=function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.value=!0,e.next=3,a().then((function(t){n.value=t,n.value.length&&(r.value=n.value[n.value.length-1])})).catch((function(t){return console.error(t)}));case 3:t.value=!1,i();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(t){return p()(t).format("YY-MM-DD HH:mm")},h=Object(s["l"])(!1),j=function(){h.value=!h.value},v=Object(s["l"])(!1),O=function(){v.value=!v.value,v.value?c.value.openPopup():c.value.closePopup()};return Object(b["s"])((function(){Object(b["q"])((function(){l()}))})),{loading:t,list:n,formatTimer:d,history:j,switchHistoryList:h,switchTips:v,tips:O}}},j=(n("a793"),n("6b0d")),v=n.n(j);const O=v()(h,[["render",a]]);var g=O,m={theme:{extend:{colors:{}}}};Object(f["a"])(m);var w={install:function(t){t.config.globalProperties.tw=f["b"]}};Object(r["b"])({render:function(){return Object(r["f"])(g)}}).use(w).mount("#app")},a793:function(t,e,n){"use strict";n("d977")},d977:function(t,e,n){}});
//# sourceMappingURL=app.e51e211f.js.map
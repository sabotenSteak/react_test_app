(this.webpackJsonpschedule_manager_app=this.webpackJsonpschedule_manager_app||[]).push([[0],{104:function(t,e,a){},111:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(33),i=a.n(r),c=(a(104),a(16)),b=a(14),d=a(9),s=a(175),m=a(153),u=a(182),h=a(165),l=a(176),g=a(178),j=a(1),x=function(){return Object(j.jsx)(l.a,{position:"relative",sx:{bgcolor:"white",boxShadow:1},children:Object(j.jsx)(g.a,{variant:"h5",margin:"4",sx:{color:"black",m:4},children:"\ud83c\udf52 no title."})})},f=a(154),O=a(173),y=function(t){var e=t.monthlyWindow,a=[{titleJA:"\u62c5\u5f53\u8005",titleEN:"Staffs"}].concat(Object(d.a)(e),[{titleJA:"",titleEN:""}]);return Object(j.jsx)(m.a,{sx:{textAlign:"center",p:"30px 0px 0px"},children:Object(j.jsx)(f.a,{direction:"row",children:Object(d.a)(a).map((function(t,e){return Object(j.jsxs)(O.a,{xs:12/Object(d.a)(a).length,height:"60px",borderLeft:0!==e?"1pt dashed black":"",children:[Object(j.jsxs)(g.a,{variant:"subtitle2",color:"gray",children:[t.titleEN,Object(j.jsx)("br",{})]}),Object(j.jsx)(g.a,{variant:"subtitle2",children:t.titleJA})]})}))})})},p=a(155),v=function(t){var e=t.staff;return Object(j.jsxs)(p.a,{p:"1",sx:{p:2},children:[Object(j.jsxs)(g.a,{variant:"subtitle2",children:["ID:",e.id,Object(j.jsx)("br",{})]}),Object(j.jsx)(g.a,{variant:"subtitle2",children:e.position}),Object(j.jsx)(g.a,{variant:"subtitle2",marginTop:"20pt",children:e.nameEn}),Object(j.jsx)(g.a,{variant:"h5",sx:{fontWeight:"600"},children:e.name})]})},S=a(170),N=a(171),C=a(167),M=a(169),A=a(172),U=function(t){var e=t.index,a=t.staff,n=t.badgeUnit,o=t.onClassification,r=void 0===o?function(t){return t}:o,i=t.onStartMonth,c=void 0===i?function(t){return t}:i,b=t.onEndMonth,s=void 0===b?function(t){return t}:b;return Object(j.jsxs)(m.a,{sx:{m:2},children:[Object(j.jsxs)(S.a,{fullWidth:!0,children:[Object(j.jsx)(N.a,{id:"classificationSelectLabel",children:"Class"}),Object(j.jsx)(C.a,{labelid:"classificationSelectLabel",id:"classificationSelect",value:n.badgeClassification,label:"classification",sx:{fontSize:"12px",color:"black"},onChange:function(t){return r(a.id,e,t.target.value)},children:Object(d.a)(a.associatedBadge).map((function(t){return Object(j.jsxs)(M.a,{value:t.badgeValue,sx:{fontSize:"10px"},children:[t.badgeValue,"- ",t.badgeName]})}))})]}),Object(j.jsx)(f.a,{component:"form",p:"10pt 5pt 0pt",children:Object(j.jsx)(A.a,{variant:"standard",id:"startMonth",label:"Term Starting Month",value:n.startMonth,type:"month",size:"small",InputLabelProps:{shrink:!0,sx:{fontSize:"14px"}},InputProps:{sx:{fontSize:"12px"}},onChange:function(t){return c(a.id,e,t.target.value)}})}),Object(j.jsx)(f.a,{component:"form",p:"5pt 5pt 0pt",children:Object(j.jsx)(A.a,{variant:"standard",id:"endMonth",label:"Term Ending Month",value:n.endMonth,type:"month",size:"small",InputLabelProps:{shrink:!0,sx:{fontSize:"14px"}},InputProps:{sx:{fontSize:"12px"}},onChange:function(t){return s(a.id,e,t.target.value)}})})]})},E=a(166),z=a(159),L=a(63),I=function(t){var e=t.badgeUnit,a=Number(e.startMonth.substr(0,4)),n=Number(e.startMonth.substr(5,6)),o=Number(e.endMonth.substr(0,4)),r=Number(e.endMonth.substr(5,6)),i=e.badgeClassification,c=Object(d.a)(L).filter((function(t){return t.badge===i&&(t.year===a-1&&t.month>=n||t.year>a-1)&&(t.year===o-1&&t.month<=r||t.year<o-1)})).reduce((function(t,e){return t+e.amount}),0),b=Object(d.a)(L).filter((function(t){return t.badge===i&&(t.year===a-2&&t.month>=n||t.year>a-2)&&(t.year===o-2&&t.month<=r||t.year<o-2)})).reduce((function(t,e){return t+e.amount}),0),s=Object(d.a)(L).filter((function(t){return t.badge===i&&(t.year===a-3&&t.month>=n||t.year>a-3)&&(t.year===o-3&&t.month<=r||t.year<o-3)})).reduce((function(t,e){return t+e.amount}),0);return e.amount=Math.floor((c+b+s)/3),Object(j.jsx)(m.a,{sx:{m:2,height:"50px",textAlign:"center"},children:0!==a&&0!==o&&""!==i?12*a+n>12*o+r?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(z.a,{color:"error",fontSize:"small"}),Object(j.jsx)(g.a,{color:"error.light",variant:"subtitle2",sx:{fontSize:"10px"},children:"\u958b\u59cb\u6708\u304c\u7d42\u4e86\u6708\u306e\u5f8c\u306b\u306a\u3063\u3066\u3044\u307e\u3059"})]}):Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(f.a,{direction:"row",children:Object(j.jsxs)(O.a,{container:!0,children:[Object(j.jsx)(O.a,{xs:8,children:Object(j.jsxs)(m.a,{sx:{textAlign:"right",whiteSpace:"nowrap",color:"gray"},children:[Object(j.jsx)(E.a,{title:"3 years ago",children:Object(j.jsx)(g.a,{sx:{fontSize:"12px"},children:s})}),Object(j.jsx)(E.a,{title:"2 years ago",children:Object(j.jsx)(g.a,{sx:{fontSize:"12px"},children:b})}),Object(j.jsx)(E.a,{title:"Last year",children:Object(j.jsx)(g.a,{sx:{fontSize:"12px"},children:c})})]})}),Object(j.jsxs)(O.a,{xs:20,children:[Object(j.jsxs)(g.a,{noWrap:"true",color:"gray",variant:"subtitle2",textAlign:"right",paddingTop:"12px",sx:{fontSize:"12px"},children:["Est.:",Object(j.jsx)("br",{})]}),Object(j.jsxs)(g.a,{noWrap:"true",color:"black",variant:"subtitle1",textAlign:"right",children:[e.amount,"\u4ef6"]})]})]})})}):Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(g.a,{variant:"subtitle2",color:"gray",p:"10px 0px 0px",sx:{fontSize:"12px"},children:"Pleast enter parameters"})})})},J=a(181),T=a(160),w=a(161),k=function(t){var e=t.index,a=t.badgeUnit,n=t.staff,o=t.extendStopper,r=t.onTermChange,i=void 0===r?function(t){return t}:r;return Object(j.jsx)(m.a,{sx:{textAlign:"right"},children:Object(j.jsxs)(J.a,{disableElevation:!0,variant:"text",size:"small","aria-label":"term adjuster buttons",children:[Object(j.jsx)(E.a,{title:"Shortening",children:Object(j.jsx)(u.a,{disabled:a.badgeLength<=2,onClick:function(){return i(n.id,e,!1)},children:Object(j.jsx)(T.a,{fontSize:"small"})})}),Object(j.jsx)(E.a,{title:"Extending",children:Object(j.jsx)(u.a,{disabled:a.badgeLength>=8||!0===o,onClick:function(){return i(n.id,e,!0)},children:Object(j.jsx)(w.a,{fontSize:"small"})})})]})})},D=a(162),B=a(163),F=function(t){var e=t.staff,a=t.addBadgeStopper,n=t.onBadgeNumberChange,o=void 0===n?function(t){return t}:n;return Object(j.jsx)(m.a,{sx:{textAlign:"right"},children:Object(j.jsxs)(J.a,{disableElevation:!0,variant:"text",size:"small","aria-label":"term adjuster buttons",children:[Object(j.jsx)(E.a,{title:"Remove a badge",children:Object(j.jsx)(u.a,{onClick:function(){return o(e.id,!1)},children:Object(j.jsx)(D.a,{fontSize:"small"})})}),Object(j.jsx)(E.a,{title:"Add a badge",children:Object(j.jsx)(u.a,{disabled:!0===a,onClick:function(){return o(e.id,!0)},children:Object(j.jsx)(B.a,{fontSize:"small"})})})]})})},P=function(t){var e=t.badgeUnits,a=t.isTotalTermMatched,n=void 0===a?{isTotalTermMatched:n}:a,o=e.reduce((function(t,e){return t+Number(e.amount)}),0);return Object(j.jsxs)(m.a,{sx:{m:2,textAlign:"right"},children:[Object(j.jsx)(m.a,{sx:{height:"195px"}}),!0===n?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(g.a,{color:"black",variant:"subtitle2",sx:{textAlign:"right",fontSize:"12px"},children:["Sum Est.:",Object(j.jsx)("br",{})]}),Object(j.jsxs)(g.a,{color:"#24140e",variant:"h5",children:[o,"\u4ef6"]})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(z.a,{color:"error",fontSize:"small"}),Object(j.jsx)(g.a,{color:"error.light",variant:"subtitle2",sx:{fontSize:"10px"},children:"Please adjust term length"})]})]})},W=a(183),V=a(164),_=function(){return Object(j.jsxs)(m.a,{sx:{m:1},children:[Object(j.jsx)(E.a,{title:"Change associated badge",children:Object(j.jsx)(W.a,{onClick:function(){},children:Object(j.jsx)(V.a,{})})}),Object(j.jsx)("badgeDialog",{onClose:function(){}})]})},H=function(t){var e=t.staff,a=t.monthlyWindow,n=t.badgeUnits,o=t.onClassification,r=void 0===o?function(t){return t}:o,i=t.onStartMonth,c=void 0===i?function(t){return t}:i,b=t.onEndMonth,s=void 0===b?function(t){return t}:b,m=t.onTermChange,u=void 0===m?function(t){return t}:m,h=t.onBadgeNumberChange,l=void 0===h?function(t){return t}:h,g=n.reduce((function(t,e){return t+Number(e.badgeLength)}),0),x=g>=4*Object(d.a)(a).length,y=g>4*Object(d.a)(a).length-2,p=g===4*Object(d.a)(a).length;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(f.a,{direction:"row",children:Object(j.jsxs)(O.a,{container:!0,columns:4*Object(d.a)(a).length,children:[Object(j.jsxs)(O.a,{xs:4*Object(d.a)(a).length/(Object(d.a)(a).length+2),height:"280px",border:"1px solid gray",children:[Object(j.jsx)(F,{staff:e,onBadgeNumberChange:l,addBadgeStopper:y}),Object(j.jsx)(v,{staff:e}),Object(j.jsx)(_,{})]}),Object(j.jsx)(O.a,{xs:4*Object(d.a)(a).length*Object(d.a)(a).length/(Object(d.a)(a).length+2),children:Object(j.jsx)(f.a,{direction:"row",children:Object(d.a)(n).map((function(t,a){return Object(j.jsxs)(O.a,{xs:n[a].badgeLength,height:"280px",border:"1px solid gray",bgcolor:a%2!==0?"#f8f4e6":"#fffff9",children:[Object(j.jsx)(k,{index:a,staff:e,badgeUnit:n[a],onTermChange:u,extendStopper:x}),Object(j.jsx)(U,{index:a,staff:e,badgeUnit:n[a],onClassification:r,onStartMonth:c,onEndMonth:s}),Object(j.jsx)(I,{badgeUnit:n[a]})]})}))})}),Object(j.jsx)(O.a,{xs:4*Object(d.a)(a).length/(Object(d.a)(a).length+2),height:"280px",border:!0===p?"1px solid gray":"1px dashed #ff6347",children:Object(j.jsx)(P,{badgeUnits:n,isTotalTermMatched:p})})]})})})},K=a(73),R=Object(K.a)({palette:{primary:{main:"#ff6347"},secondary:{main:"#0000cd"},error:{main:"#ff6347"},info:{main:"#fafad2"}}}),q=a(64),G=a(72),Q=function(){var t=Object(d.a)(q).map((function(t,e){return{index:e,badgeClassification:"",badgeLength:4,startMonth:"",endMonth:"",amount:0}})),e=Object(d.a)(G).map((function(e){return{staffID:e.id,badgeUnits:Object(d.a)(t)}})),a=o.a.useState(e),n=Object(b.a)(a,2),r=n[0],i=n[1];console.log(r);var l=function(t,e,a){var n=Object(d.a)(r).map((function(n){return n.staffID===t?Object(c.a)(Object(c.a)({},n),{},{badgeUnits:n.badgeUnits.map((function(t){return t.index===e?Object(c.a)(Object(c.a)({},t),{},{badgeClassification:a}):t}))}):n}));i(n)},g=function(t,e,a){var n=Object(d.a)(r).map((function(n){return n.staffID===t?Object(c.a)(Object(c.a)({},n),{},{badgeUnits:n.badgeUnits.map((function(t){return t.index===e?Object(c.a)(Object(c.a)({},t),{},{startMonth:a}):t}))}):n}));i(n)},f=function(t,e,a){var n=Object(d.a)(r).map((function(n){return n.staffID===t?Object(c.a)(Object(c.a)({},n),{},{badgeUnits:n.badgeUnits.map((function(t){return t.index===e?Object(c.a)(Object(c.a)({},t),{},{endMonth:a}):t}))}):n}));i(n)},O=function(t,e,a){var n=Object(d.a)(r).map((function(n){return n.staffID===t?Object(c.a)(Object(c.a)({},n),{},{badgeUnits:n.badgeUnits.map((function(t){return t.index===e&&!0===a?Object(c.a)(Object(c.a)({},t),{},{badgeLength:t.badgeLength+1}):t.index===e&&!1===a?Object(c.a)(Object(c.a)({},t),{},{badgeLength:t.badgeLength-1}):t}))}):n}));i(n)},p=function(t,e){console.log(t,e);var a=Object(d.a)(r).map((function(a){return a.staffID===t&&!1===e?Object(c.a)(Object(c.a)({},a),{},{badgeUnits:a.badgeUnits.filter((function(t,e){return e!==a.badgeUnits.length-1}))}):a.staffID===t&&!0===e?Object(c.a)(Object(c.a)({},a),{},{badgeUnits:a.badgeUnits.concat({index:a.badgeUnits.length,badgeClassification:"",badgeLength:2,startMonth:"",endMonth:"",amount:0})}):a}));i(a)};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(s.a,{theme:R,children:[Object(j.jsx)(x,{}),Object(j.jsxs)(m.a,{sx:{m:"0px 10px 0px"},children:[Object(j.jsx)(y,{monthlyWindow:q}),Object(d.a)(G).map((function(t,e){return Object(j.jsx)(H,{staff:t,badgeUnits:t.id===r[e].staffID?r[e].badgeUnits:"",monthlyWindow:q,onClassification:l,onStartMonth:g,onEndMonth:f,onTermChange:O,onBadgeNumberChange:p},t.id)})),Object(j.jsx)(u.a,{variant:"outlined",startIcon:Object(j.jsx)(h.a,{}),sx:{m:1},children:"Add New Person"}),"\u2190SIP"]})]})})},X=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,184)).then((function(e){var a=e.getCLS,n=e.getFID,o=e.getFCP,r=e.getLCP,i=e.getTTFB;a(t),n(t),o(t),r(t),i(t)}))};i.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(Q,{})}),document.getElementById("root")),X()},63:function(t){t.exports=JSON.parse('[{"year":2020,"month":1,"badge":"01-01","amount":101},{"year":2020,"month":2,"badge":"01-01","amount":102},{"year":2020,"month":3,"badge":"01-01","amount":103},{"year":2020,"month":4,"badge":"01-01","amount":104},{"year":2020,"month":5,"badge":"01-01","amount":105},{"year":2020,"month":6,"badge":"01-01","amount":106},{"year":2020,"month":7,"badge":"01-01","amount":107},{"year":2020,"month":8,"badge":"01-01","amount":108},{"year":2020,"month":9,"badge":"01-01","amount":109},{"year":2020,"month":10,"badge":"01-01","amount":110},{"year":2020,"month":11,"badge":"01-01","amount":111},{"year":2020,"month":12,"badge":"01-01","amount":112},{"year":2021,"month":1,"badge":"01-01","amount":1010},{"year":2021,"month":2,"badge":"01-01","amount":1020},{"year":2021,"month":3,"badge":"01-01","amount":1030},{"year":2021,"month":4,"badge":"01-01","amount":1040},{"year":2021,"month":5,"badge":"01-01","amount":1050},{"year":2021,"month":6,"badge":"01-01","amount":1060},{"year":2021,"month":7,"badge":"01-01","amount":1070},{"year":2021,"month":8,"badge":"01-01","amount":1080},{"year":2021,"month":9,"badge":"01-01","amount":1090},{"year":2021,"month":10,"badge":"01-01","amount":1100},{"year":2021,"month":11,"badge":"01-01","amount":1110},{"year":2021,"month":12,"badge":"01-01","amount":1120},{"year":2020,"month":1,"badge":"10-01","amount":201},{"year":2020,"month":2,"badge":"10-01","amount":202},{"year":2020,"month":3,"badge":"10-01","amount":203},{"year":2020,"month":4,"badge":"10-01","amount":204},{"year":2020,"month":5,"badge":"10-01","amount":205},{"year":2020,"month":6,"badge":"10-01","amount":206},{"year":2020,"month":7,"badge":"10-01","amount":207},{"year":2020,"month":8,"badge":"10-01","amount":208},{"year":2020,"month":9,"badge":"10-01","amount":209},{"year":2020,"month":10,"badge":"10-01","amount":210},{"year":2020,"month":11,"badge":"10-01","amount":211},{"year":2020,"month":12,"badge":"10-01","amount":212},{"year":2021,"month":1,"badge":"10-01","amount":2010},{"year":2021,"month":2,"badge":"10-01","amount":2020},{"year":2021,"month":3,"badge":"10-01","amount":2030},{"year":2021,"month":4,"badge":"10-01","amount":2040},{"year":2021,"month":5,"badge":"10-01","amount":2050},{"year":2021,"month":6,"badge":"10-01","amount":2060},{"year":2021,"month":7,"badge":"10-01","amount":2070},{"year":2021,"month":8,"badge":"10-01","amount":2080},{"year":2021,"month":9,"badge":"10-01","amount":2090},{"year":2021,"month":10,"badge":"10-01","amount":2100},{"year":2021,"month":11,"badge":"10-01","amount":2110},{"year":2021,"month":12,"badge":"10-01","amount":2120},{"year":2020,"month":1,"badge":"01-02","amount":1},{"year":2020,"month":2,"badge":"01-02","amount":2},{"year":2020,"month":3,"badge":"01-02","amount":3},{"year":2020,"month":4,"badge":"01-02","amount":4},{"year":2020,"month":5,"badge":"01-02","amount":5},{"year":2020,"month":6,"badge":"01-02","amount":6},{"year":2020,"month":7,"badge":"01-02","amount":7},{"year":2020,"month":8,"badge":"01-02","amount":8},{"year":2020,"month":9,"badge":"01-02","amount":9},{"year":2020,"month":10,"badge":"01-02","amount":10},{"year":2020,"month":11,"badge":"01-02","amount":11},{"year":2020,"month":12,"badge":"01-02","amount":12},{"year":2021,"month":1,"badge":"01-02","amount":1},{"year":2021,"month":2,"badge":"01-02","amount":12},{"year":2021,"month":3,"badge":"01-02","amount":13},{"year":2021,"month":4,"badge":"01-02","amount":14},{"year":2021,"month":5,"badge":"01-02","amount":15},{"year":2021,"month":6,"badge":"01-02","amount":16},{"year":2021,"month":7,"badge":"01-02","amount":17},{"year":2021,"month":8,"badge":"01-02","amount":18},{"year":2021,"month":9,"badge":"01-02","amount":19},{"year":2021,"month":10,"badge":"01-02","amount":11},{"year":2021,"month":11,"badge":"01-02","amount":11},{"year":2021,"month":12,"badge":"01-02","amount":12},{"year":2020,"month":1,"badge":"10-02","amount":1000},{"year":2020,"month":2,"badge":"10-02","amount":2},{"year":2020,"month":3,"badge":"10-02","amount":3},{"year":2020,"month":4,"badge":"10-02","amount":4},{"year":2020,"month":5,"badge":"10-02","amount":50},{"year":2020,"month":6,"badge":"10-02","amount":6},{"year":2020,"month":7,"badge":"10-02","amount":7},{"year":2020,"month":8,"badge":"10-02","amount":8},{"year":2020,"month":9,"badge":"10-02","amount":9},{"year":2020,"month":10,"badge":"10-02","amount":10},{"year":2020,"month":11,"badge":"10-02","amount":11},{"year":2020,"month":12,"badge":"10-02","amount":12},{"year":2021,"month":1,"badge":"10-02","amount":1},{"year":2021,"month":2,"badge":"10-02","amount":12},{"year":2021,"month":3,"badge":"10-02","amount":13},{"year":2021,"month":4,"badge":"10-02","amount":14},{"year":2021,"month":5,"badge":"10-02","amount":15},{"year":2021,"month":6,"badge":"10-02","amount":16},{"year":2021,"month":7,"badge":"10-02","amount":17},{"year":2021,"month":8,"badge":"10-02","amount":18},{"year":2021,"month":9,"badge":"10-02","amount":19},{"year":2021,"month":10,"badge":"10-02","amount":11},{"year":2021,"month":11,"badge":"10-02","amount":11},{"year":2021,"month":12,"badge":"10-02","amount":12}]')},64:function(t){t.exports=JSON.parse('[{"val":"04","titleJA":"4\u6708","titleEN":"April"},{"val":"05","titleJA":"5\u6708","titleEN":"May"},{"val":"06","titleJA":"6\u6708","titleEN":"June"},{"val":"07","titleJA":"7\u6708","titleEN":"July"},{"val":"08","titleJA":"8\u6708","titleEN":"August"},{"val":"09","titleJA":"9\u6708","titleEN":"September"},{"val":"10","titleJA":"10\u6708","titleEN":"October"}]')},72:function(t){t.exports=JSON.parse('[{"name":"\u7530\u4e2d \u4e00","nameEn":"TANAKA Hajime","id":"1234","position":"Senior Director","associatedBadge":[{"badgeValue":"01-01","badgeName":"\u713c\u304d\u83d3\u5b50"},{"badgeValue":"01-02","badgeName":"\u679c\u7269\u53c8\u306f\u91ce\u83dc"},{"badgeValue":"01-03","badgeName":"\u30c1\u30fc\u30ba\u3001\u30d0\u30bf\u30fc\u3001\u305d\u306e\u4ed6\u306e\u4e73\u88fd\u54c1"}]},{"name":"\u9060\u85e4 \u9022\u4eba","nameEn":"ENDO Auto","id":"1984","position":"Director","associatedBadge":[{"badgeValue":"10-01","badgeName":"\u7f6e\u6642\u8a08"},{"badgeValue":"10-02","badgeName":"\u8155\u6642\u8a08"}]}]')}},[[111,1,2]]]);
//# sourceMappingURL=main.3389b71d.chunk.js.map
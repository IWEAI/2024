import{h as p,i as y,d as f,u,o as r,c as t,n as o,j as a,r as l,k as d,b as c,l as h,m,g as n,t as i,q as v}from"./index-D0pABKxv.js";const S=p({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:y([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),b=f({name:"ElCard"}),C=f({...b,props:S,setup(w){const s=u("card");return(e,$)=>(r(),t("div",{class:o([a(s).b(),a(s).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(r(),t("div",{key:0,class:o(a(s).e("header"))},[l(e.$slots,"header",{},()=>[n(i(e.header),1)])],2)):d("v-if",!0),c("div",{class:o([a(s).e("body"),e.bodyClass]),style:h(e.bodyStyle)},[l(e.$slots,"default")],6),e.$slots.footer||e.footer?(r(),t("div",{key:1,class:o(a(s).e("footer"))},[l(e.$slots,"footer",{},()=>[n(i(e.footer),1)])],2)):d("v-if",!0)],2))}});var g=m(C,[["__file","card.vue"]]);const E=v(g);export{E};

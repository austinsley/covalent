(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{prFk:function(t,e,n){"use strict";n.r(e),n.d(e,"MarkdownNavigatorDemoModule",(function(){return Y}));var o=n("SVse"),r=n("l09l"),i=n("iInd"),a=n("8Y7J"),c=n("MJ5V"),s=n("XesW"),d=n("qDEf");let m=(()=>{class t{constructor(){this.items=[{title:"Url children demo",childrenUrl:"/assets/demos-data/children_url_1.json"}]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Ib({type:t,selectors:[["markdown-navigator-demo-children-url"]],decls:1,vars:1,consts:[[3,"items"]],template:function(t,e){1&t&&a.Pb(0,"td-markdown-navigator",0),2&t&&a.mc("items",e.items)},directives:[d.a],styles:[""]}),t})(),l=(()=>{class t{constructor(){this.items=[{title:"Covalent Browser Support",url:"https://github.com/teradata/covalent/blob/master/README.md",anchor:"browser-support"},{title:"Angular Commit Message Format",url:"https://github.com/angular/angular/blob/master/CONTRIBUTING.md",anchor:"commit-message-format"}]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Ib({type:t,selectors:[["markdown-navigator-demo-anchor"]],decls:1,vars:3,consts:[[3,"items"]],template:function(t,e){1&t&&a.Pb(0,"td-markdown-navigator",0),2&t&&(a.Jc("height",300,"px"),a.mc("items",e.items))},directives:[d.a],styles:[""]}),t})();var u=n("Ynp+"),b=n("s7LF");function p(t,e){return t.title===e.title}let g=(()=>{class t{constructor(){this.items=[{title:"Item A",id:"A",children:[{title:"Item A1",id:"A1"},{title:"Item A2",id:"A2"},{title:"Item A3",id:"A3"}]}]}handleChange(){switch(this.selection){case"reference":this.startAt=this.items[0].children[0],this.compareWith=void 0;break;case"id":this.startAt={id:"A2"},this.compareWith=void 0;break;case"custom":this.startAt={title:"Item A3"},this.compareWith=p}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Ib({type:t,selectors:[["markdown-navigator-demo-start-at"]],decls:10,vars:6,consts:[[3,"ngModel","change","ngModelChange"],["value","reference"],["value","id"],["value","custom"],[3,"items","startAt","compareWith"]],template:function(t,e){1&t&&(a.Ub(0,"span"),a.Oc(1,"Start at descendant:"),a.Tb(),a.Ub(2,"mat-button-toggle-group",0),a.cc("change",(function(){return e.handleChange()}))("ngModelChange",(function(t){return e.selection=t})),a.Ub(3,"mat-button-toggle",1),a.Oc(4,"A1"),a.Tb(),a.Ub(5,"mat-button-toggle",2),a.Oc(6,"A2"),a.Tb(),a.Ub(7,"mat-button-toggle",3),a.Oc(8,"A3"),a.Tb(),a.Tb(),a.Pb(9,"td-markdown-navigator",4)),2&t&&(a.Cb(2),a.mc("ngModel",e.selection),a.Cb(7),a.Jc("height",200,"px"),a.mc("items",e.items)("startAt",e.startAt)("compareWith",e.compareWith))},directives:[u.b,b.m,b.p,u.a,d.a],styles:["span[_ngcontent-%COMP%]{margin-right:1em}"]}),t})(),h=(()=>{class t{constructor(){this.startAt=[{id:"url-children-demo"},{id:"child-2"},{id:"grandchild-2"}],this.items=[{id:"url-children-demo",title:"Url children demo",childrenUrl:"/assets/demos-data/children_url_1.json"}]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Ib({type:t,selectors:[["markdown-navigator-demo-children-url-start-at"]],decls:1,vars:2,consts:[[3,"items","startAt"]],template:function(t,e){1&t&&a.Pb(0,"td-markdown-navigator",0),2&t&&a.mc("items",e.items)("startAt",e.startAt)},directives:[d.a],styles:[""]}),t})();function v(t,e){return t.title===e.title}let w=(()=>{class t{constructor(){this.items=[{id:"external_obj_store",title:"External Object Store",childrenUrl:"https://www.teradata.com/product-help/UseCases/use_cases.json",startAtLink:{title:"External Object Store"}},{id:"url-children-demo",title:"Url children demo",childrenUrl:"/assets/demos-data/children_url_3.json"}],this.compareWith=v}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Ib({type:t,selectors:[["markdown-navigator-demo-start-at-onclick-children-url"]],decls:1,vars:2,consts:[[3,"items","compareWith"]],template:function(t,e){1&t&&a.Pb(0,"td-markdown-navigator",0),2&t&&a.mc("items",e.items)("compareWith",e.compareWith)},directives:[d.a],styles:[""]}),t})(),k=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Ib({type:t,selectors:[["ng-component"]],decls:2,vars:2,template:function(t,e){1&t&&(a.Ub(0,"p"),a.Oc(1,"Global footer"),a.Tb()),2&t&&a.Jc("padding",1,"em")},encapsulation:2}),t})(),f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Ib({type:t,selectors:[["ng-component"]],decls:2,vars:2,template:function(t,e){1&t&&(a.Ub(0,"p"),a.Oc(1,"Item footer"),a.Tb()),2&t&&a.Jc("padding",1,"em")},encapsulation:2}),t})(),T=(()=>{class t{constructor(){this.items=[{title:"Item Footer",markdownString:"Uses footer set at item level",footer:f},{title:"Global footer",markdownString:"Falls back to footer set at the top level"}],this.footer=k}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Ib({type:t,selectors:[["markdown-navigator-demo-footer"]],decls:1,vars:4,consts:[[3,"items","footer"]],template:function(t,e){1&t&&a.Pb(0,"td-markdown-navigator",0),2&t&&(a.Jc("height",300,"px"),a.mc("items",e.items)("footer",e.footer))},directives:[d.a],styles:[""]}),t})();var C=n("zHaW");let I=(()=>{class t{constructor(t){this._snackBar=t,this.items=[{markdownString:'[Trigger button click event](#data={"planet":"mars"})'}]}handleButtonClicked(t){this._snackBar.open("Button clicked: "+JSON.stringify(t),void 0,{duration:2e3})}}return t.\u0275fac=function(e){return new(e||t)(a.Ob(C.a))},t.\u0275cmp=a.Ib({type:t,selectors:[["markdown-navigator-demo-button-clicked"]],decls:1,vars:3,consts:[[3,"items","buttonClicked"]],template:function(t,e){1&t&&(a.Ub(0,"td-markdown-navigator",0),a.cc("buttonClicked",(function(t){return e.handleButtonClicked(t)})),a.Tb()),2&t&&(a.Jc("height",200,"px"),a.mc("items",e.items))},directives:[d.a],styles:[""]}),t})();var y=n("Dxy4");let U=(()=>{class t{constructor(t){this._markdownNavigatorWindowService=t}open(){this._markdownNavigatorWindowService.open({items:[{title:"Mars",markdownString:'[Go to Mars](#data={"planet":"mars"})'},{title:"Jupiter",markdownString:'[Go to Jupiter](#data={"planet":"Jupiter"})'},{title:"Covalent Browser Support",url:"https://github.com/Teradata/covalent/blob/develop/README.md",anchor:"browser-support"},{id:"child_id",title:"Children",childrenUrl:"/assets/demos-data/children_url_1.json"}],dialogConfig:{width:"300px",height:"300px"},startAt:[{id:"child_id"},{id:"child-1"}]})}}return t.\u0275fac=function(e){return new(e||t)(a.Ob(r.b))},t.\u0275cmp=a.Ib({type:t,selectors:[["markdown-navigator-demo-service"]],decls:2,vars:0,consts:[["mat-raised-button","",3,"click"]],template:function(t,e){1&t&&(a.Ub(0,"button",0),a.cc("click",(function(){return e.open()})),a.Oc(1,"Open"),a.Tb())},directives:[y.b],styles:[""]}),t})(),O=(()=>{class t{constructor(t,e){this._markdownNavigatorWindowService=t,this._snackBar=e}open(){this._markdownNavigatorWindowService.open({items:[{markdownString:'[Trigger button click event](#data={"planet":"mars"})'}]}).componentInstance.buttonClicked.subscribe(t=>this._snackBar.open("Button clicked: "+JSON.stringify(t),void 0,{duration:2e3}))}}return t.\u0275fac=function(e){return new(e||t)(a.Ob(r.b),a.Ob(C.a))},t.\u0275cmp=a.Ib({type:t,selectors:[["markdown-navigator-demo-service-button-clicked"]],decls:2,vars:0,consts:[["mat-raised-button","",3,"click"]],template:function(t,e){1&t&&(a.Ub(0,"button",0),a.cc("click",(function(){return e.open()})),a.Oc(1,"Open"),a.Tb())},directives:[y.b],styles:[""]}),t})();var S=n("NYqv");let A=(()=>{class t{constructor(t){this._markdownNavigatorWindowService=t,this.disabled=!1}click(){this.disabled||this._markdownNavigatorWindowService.open(this.config)}}return t.\u0275fac=function(e){return new(e||t)(a.Ob(S.a))},t.\u0275dir=a.Jb({type:t,selectors:[["","tdMarkdownNavigatorWindow",""]],hostBindings:function(t,e){1&t&&a.cc("click",(function(){return e.click()}))},inputs:{config:["tdMarkdownNavigatorWindow","config"],disabled:"disabled"}}),t})();const M=function(){return{markdownString:"Directive demo"}},_=function(t){return[t]},W=function(t){return{items:t}};let N=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Ib({type:t,selectors:[["markdown-navigator-demo-directive"]],decls:2,vars:7,consts:[["mat-raised-button","",3,"tdMarkdownNavigatorWindow","disabled"]],template:function(t,e){1&t&&(a.Ub(0,"button",0),a.Oc(1," Open\n"),a.Tb()),2&t&&a.mc("tdMarkdownNavigatorWindow",a.qc(5,W,a.qc(3,_,a.pc(2,M))))("disabled",!1)},directives:[y.b,A],styles:[""]}),t})();var J=n("uBmD"),P=n("jMqV");const x=function(){return{enabled:!1}},B=function(t){return{minimap:t}};function j(t){return JSON.stringify(t,void 0,4)}const D=[{title:"Item 1",markdownString:"wow"},{title:"Item 2",markdownString:"wow"}];let q=(()=>{class t{constructor(t){this._markdownNavigatorWindowService=t,this.input=j(D),this.items=D,this.windowShouldOpen=!1}applyInput(){this.items=JSON.parse(this.input),this.input=j(this.items),this.openOrClose()}openOrClose(){this.windowShouldOpen?this._markdownNavigatorWindowService.open({items:this.items}):this._markdownNavigatorWindowService.close()}}return t.\u0275fac=function(e){return new(e||t)(a.Ob(r.b))},t.\u0275cmp=a.Ib({type:t,selectors:[["markdown-navigator-demo-editor"]],decls:10,vars:12,consts:[["layout","row","layout-xs","column"],["flex","50","flex-xs","100"],["flex","",3,"language","ngModel","editorOptions","ngModelChange"],["layout","row","layout-align","space-between center"],[3,"ngModel","ngModelChange","change"],["mat-raised-button","",1,"text-upper",3,"click"],[3,"items"]],template:function(t,e){1&t&&(a.Ub(0,"div",0),a.Ub(1,"div",1),a.Ub(2,"td-code-editor",2),a.cc("ngModelChange",(function(t){return e.input=t})),a.Tb(),a.Ub(3,"div",3),a.Ub(4,"mat-slide-toggle",4),a.cc("ngModelChange",(function(t){return e.windowShouldOpen=t}))("change",(function(){return e.openOrClose()})),a.Oc(5,"Open window"),a.Tb(),a.Ub(6,"button",5),a.cc("click",(function(){return e.applyInput()})),a.Oc(7,"Apply"),a.Tb(),a.Tb(),a.Tb(),a.Ub(8,"div",1),a.Pb(9,"td-markdown-navigator",6),a.Tb(),a.Tb()),2&t&&(a.Cb(2),a.Jc("height",300,"px"),a.mc("language","json")("ngModel",e.input)("editorOptions",a.qc(10,B,a.pc(9,x))),a.Cb(2),a.mc("ngModel",e.windowShouldOpen),a.Cb(5),a.Jc("height",300,"px"),a.mc("items",e.items))},directives:[J.a,b.m,b.p,P.a,y.b,d.a],styles:[""]}),t})();const E=[{path:"",component:(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Ib({type:t,selectors:[["markdown-navigator-demo"]],decls:24,vars:24,consts:[[3,"demoId","demoTitle"]],template:function(t,e){1&t&&(a.Ub(0,"demo-component",0),a.Pb(1,"markdown-navigator-demo-basic"),a.Tb(),a.Ub(2,"demo-component",0),a.Pb(3,"markdown-navigator-demo-children-url"),a.Tb(),a.Ub(4,"demo-component",0),a.Pb(5,"markdown-navigator-demo-anchor"),a.Tb(),a.Ub(6,"demo-component",0),a.Pb(7,"markdown-navigator-demo-start-at"),a.Tb(),a.Ub(8,"demo-component",0),a.Pb(9,"markdown-navigator-demo-children-url-start-at"),a.Tb(),a.Ub(10,"demo-component",0),a.Pb(11,"markdown-navigator-demo-start-at-onclick-children-url"),a.Tb(),a.Ub(12,"demo-component",0),a.Pb(13,"markdown-navigator-demo-footer"),a.Tb(),a.Ub(14,"demo-component",0),a.Pb(15,"markdown-navigator-demo-button-clicked"),a.Tb(),a.Ub(16,"demo-component",0),a.Pb(17,"markdown-navigator-demo-service"),a.Tb(),a.Ub(18,"demo-component",0),a.Pb(19,"markdown-navigator-demo-service-button-clicked"),a.Tb(),a.Ub(20,"demo-component",0),a.Pb(21,"markdown-navigator-demo-directive"),a.Tb(),a.Ub(22,"demo-component",0),a.Pb(23,"markdown-navigator-demo-editor"),a.Tb()),2&t&&(a.mc("demoId","markdown-navigator-demo-basic")("demoTitle","Basic"),a.Cb(2),a.mc("demoId","markdown-navigator-demo-children-url")("demoTitle","Children url"),a.Cb(2),a.mc("demoId","markdown-navigator-demo-anchor")("demoTitle","Anchor jumping"),a.Cb(2),a.mc("demoId","markdown-navigator-demo-start-at")("demoTitle","Start at"),a.Cb(2),a.mc("demoId","markdown-navigator-demo-children-url-start-at")("demoTitle","Start at with children url"),a.Cb(2),a.mc("demoId","markdown-navigator-demo-start-at-onclick-children-url")("demoTitle","StartAt on nested url"),a.Cb(2),a.mc("demoId","markdown-navigator-demo-footer")("demoTitle","Footer"),a.Cb(2),a.mc("demoId","markdown-navigator-demo-button-clicked")("demoTitle","Button click events"),a.Cb(2),a.mc("demoId","markdown-navigator-demo-service")("demoTitle","Service"),a.Cb(2),a.mc("demoId","markdown-navigator-demo-service-button-clicked")("demoTitle","Button click events via service"),a.Cb(2),a.mc("demoId","markdown-navigator-demo-directive")("demoTitle","Directive"),a.Cb(2),a.mc("demoId","markdown-navigator-demo-editor")("demoTitle","Live editor"))},directives:[c.a,s.a,m,l,g,h,w,T,I,U,O,N,q],styles:[""]}),t})()}];let F=(()=>{class t{}return t.\u0275mod=a.Mb({type:t}),t.\u0275inj=a.Lb({factory:function(e){return new(e||t)},imports:[[i.g.forChild(E)],i.g]}),t})();var G=n("Krbs"),L=n("SqCe"),R=n("GLwO"),V=n("lDlI");let Y=(()=>{class t{}return t.\u0275mod=a.Mb({type:t}),t.\u0275inj=a.Lb({factory:function(e){return new(e||t)},imports:[[G.a,F,R.a,r.a,V.a,o.c,y.c,L.e,u.c,P.b,b.i]]}),t})()}}]);
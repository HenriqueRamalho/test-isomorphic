(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[108,141,142,143,144],{1241:function(t,n,l){"use strict";var e=l(61),r=l(62),o=l(231),a=l(216),i=l(215),q=l(0),c=l.n(q),s=l(1557),u=l.n(s),p=(l(1567),l(1568),l(1569),l(39)),b=l(32),d=l(6),f=l(77);function h(){var t=Object(p.a)(["\n  .ql-editor {\n    min-height: 215px;\n    text-align: ",";\n  }\n\n  .ql-toolbar.ql-snow,\n  .ql-container.ql-snow {\n    border: 1px solid ",";\n    text-align: ",";\n\n    .ql-formats {\n      margin: ",";\n    }\n\n    .ql-picker-label {\n      padding: ",";\n\n      &:not(.ql-color-picker):not(.ql-icon-picker) {\n        svg {\n          right: ",";\n          left: ",";\n        }\n      }\n    }\n  }\n\n  .ql-container {\n    font-family: ",";\n    min-height: 220px;\n  }\n\n  .ql-editor p,\n  .ql-editor ol,\n  .ql-editor ul,\n  .ql-editor pre,\n  .ql-editor blockquote,\n  .ql-editor h1,\n  .ql-editor h2,\n  .ql-editor h3,\n  .ql-editor h4,\n  .ql-editor h5,\n  .ql-editor h6 {\n    color: ",";\n  }\n\n  .ql-snow.ql-toolbar button:hover,\n  .ql-snow .ql-toolbar button:hover,\n  .ql-snow.ql-toolbar button:focus,\n  .ql-snow .ql-toolbar button:focus,\n  .ql-snow.ql-toolbar button.ql-active,\n  .ql-snow .ql-toolbar button.ql-active,\n  .ql-snow.ql-toolbar .ql-picker-label:hover,\n  .ql-snow .ql-toolbar .ql-picker-label:hover,\n  .ql-snow.ql-toolbar .ql-picker-label.ql-active,\n  .ql-snow .ql-toolbar .ql-picker-label.ql-active,\n  .ql-snow.ql-toolbar .ql-picker-item:hover,\n  .ql-snow .ql-toolbar .ql-picker-item:hover,\n  .ql-snow.ql-toolbar .ql-picker-item.ql-selected,\n  .ql-snow .ql-toolbar .ql-picker-item.ql-selected {\n    color: ",";\n  }\n  .ql-snow.ql-toolbar button:hover .ql-fill,\n  .ql-snow .ql-toolbar button:hover .ql-fill,\n  .ql-snow.ql-toolbar button:focus .ql-fill,\n  .ql-snow .ql-toolbar button:focus .ql-fill,\n  .ql-snow.ql-toolbar button.ql-active .ql-fill,\n  .ql-snow .ql-toolbar button.ql-active .ql-fill,\n  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,\n  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,\n  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,\n  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,\n  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n  .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,\n  .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,\n  .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\n    fill: ",";\n  }\n  .ql-snow.ql-toolbar button:hover .ql-stroke,\n  .ql-snow .ql-toolbar button:hover .ql-stroke,\n  .ql-snow.ql-toolbar button:focus .ql-stroke,\n  .ql-snow .ql-toolbar button:focus .ql-stroke,\n  .ql-snow.ql-toolbar button.ql-active .ql-stroke,\n  .ql-snow .ql-toolbar button.ql-active .ql-stroke,\n  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,\n  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,\n  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,\n  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,\n  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n  .ql-snow.ql-toolbar button:hover .ql-stroke-miter,\n  .ql-snow .ql-toolbar button:hover .ql-stroke-miter,\n  .ql-snow.ql-toolbar button:focus .ql-stroke-miter,\n  .ql-snow .ql-toolbar button:focus .ql-stroke-miter,\n  .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,\n  .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,\n  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\n    stroke: ",";\n  }\n\n  .ql-snow a {\n    color: ",";\n  }\n"]);return h=function(){return t},t}var m=b.d.div(h(),(function(t){return"rtl"===t["data-rtl"]?"right":"left"}),Object(d.palette)("border",0),(function(t){return"rtl"===t["data-rtl"]?"right":"left"}),(function(t){return"rtl"===t["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),(function(t){return"rtl"===t["data-rtl"]?"0 8px 0 2px":"0 2px 0 8px"}),(function(t){return"rtl"===t["data-rtl"]?"inherit":"0"}),(function(t){return"rtl"===t["data-rtl"]?"0":"inherit"}),Object(d.font)("primary",0),Object(d.palette)("text",0),Object(d.palette)("primary",0),Object(d.palette)("primary",0),Object(d.palette)("primary",0),Object(d.palette)("primary",0)),w=Object(f.a)(m),k=function(t){Object(a.a)(l,t);var n=Object(i.a)(l);function l(t){var r;return Object(e.a)(this,l),(r=n.call(this,t)).state={editorHtml:"",theme:"snow"},r.handleChange=r.handleChange.bind(Object(o.a)(r)),r}return Object(r.a)(l,[{key:"handleChange",value:function(t){this.setState({editorHtml:t})}},{key:"handleThemeChange",value:function(t){"core"===t&&(t=null),this.setState({theme:t})}},{key:"render",value:function(){return c.a.createElement(w,null,c.a.createElement(u.a,{theme:this.state.theme,onChange:this.handleChange,value:this.state.editorHtml,modules:l.modules,formats:l.formats,bounds:".app",placeholder:this.props.placeholder}))}}]),l}(c.a.Component);k.modules={toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{size:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image","video"],["clean"]],clipboard:{matchVisual:!1}},k.formats=["header","font","size","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image","video"];n.a=k},3717:function(t,n,l){"use strict";l.r(n);var e=l(0),r=l.n(e),o=l(640),a=l(639),i=l(637),q=l(642),c=l(652),s=l(1241);n.default=function(){return r.a.createElement(i.default,null,r.a.createElement(o.default,null,r.a.createElement(c.a,{id:"forms.editor.header"})),r.a.createElement(a.default,null,r.a.createElement(q.default,null,r.a.createElement(s.a,{placeholder:"Write something..."}))))}},637:function(t,n,l){"use strict";l.r(n);var e=l(0),r=l.n(e),o=l(39);function a(){var t=Object(o.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return a=function(){return t},t}var i=l(32).d.div(a());n.default=function(t){return r.a.createElement(i,Object.assign({className:null!=t.className?"".concat(t.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},t),t.children)}},639:function(t,n,l){"use strict";l.r(n);var e=l(0),r=l.n(e),o=l(39),a=l(32),i=l(6);function q(){var t=Object(o.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return q=function(){return t},t}function c(){var t=Object(o.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return c=function(){return t},t}var s=a.d.h3(c(),Object(i.palette)("text",0)),u=a.d.p(q(),Object(i.palette)("text",3)),p=function(t){return r.a.createElement("div",null,t.title?r.a.createElement(s,{className:"isoBoxTitle"}," ",t.title," "):"",t.subtitle?r.a.createElement(u,{className:"isoBoxSubTitle"}," ",t.subtitle," "):"")};function b(){var t=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return b=function(){return t},t}var d=a.d.div(b(),Object(i.palette)("border",0),"");n.default=function(t){return r.a.createElement(d,{className:"".concat(t.className?t.className:""," isoBoxWrapper"),style:t.style},r.a.createElement(p,{title:t.title,subtitle:t.subtitle}),t.children)}},640:function(t,n,l){"use strict";l.r(n);var e=l(0),r=l.n(e),o=l(39),a=l(32),i=l(6),q=l(77);function c(){var t=Object(o.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return c=function(){return t},t}var s=a.d.h1(c(),Object(i.palette)("secondary",2),Object(i.palette)("secondary",3),(function(t){return"rtl"===t["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),Object(i.palette)("secondary",3),(function(t){return"rtl"===t["data-rtl"]?"0 15px 0 0":"0 0 0 15px"})),u=Object(q.a)(s);n.default=function(t){return r.a.createElement(u,{className:"isoComponentTitle"},t.children)}},642:function(t,n,l){"use strict";l.r(n);var e=l(0),r=l.n(e),o=l(39),a=l(32),i=l(6),q=l(77);function c(){var t=Object(o.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"]);return c=function(){return t},t}var s=a.d.div(c(),(function(t){return"rtl"===t["data-rtl"]?"0":"10px"}),(function(t){return"rtl"===t["data-rtl"]?"10px":"0"}),(function(t){return"rtl"===t["data-rtl"]?"0":"70px"}),(function(t){return"rtl"===t["data-rtl"]?"70px":"0"}),(function(t){return"rtl"===t["data-rtl"]?"right":"left"}),(function(t){return"rtl"===t["data-rtl"]?"0":"295px"}),(function(t){return"rtl"===t["data-rtl"]?"295px":"0"}),(function(t){return"rtl"===t["data-rtl"]?"0":"70px"}),(function(t){return"rtl"===t["data-rtl"]?"70px":"0"}),(function(t){return"rtl"===t["data-rtl"]?"8px":"0 !important"}),(function(t){return"rtl"===t["data-rtl"]?"0 !important":"8px"}),(function(t){return"rtl"===t["data-rtl"]?"0":"8px"}),(function(t){return"rtl"===t["data-rtl"]?"8px":"0"}),Object(i.palette)("secondary",1),(function(t){return"rtl"===t["data-rtl"]?"auto":"6px"}),(function(t){return"rtl"===t["data-rtl"]?"6px":"0"}),(function(t){return"rtl"===t["data-rtl"]?"0":"15px"}),(function(t){return"rtl"===t["data-rtl"]?"15px":"0"}),(function(t){return t["data-rtl"],"0"}),(function(t){return t["data-rtl"],"0"})),u=Object(q.a)(s);n.default=function(t){return r.a.createElement(u,{className:"isoExampleWrapper",style:t.style},t.children)}}}]);
//# sourceMappingURL=108.74617302.chunk.js.map
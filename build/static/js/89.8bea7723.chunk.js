(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[89,141,142,143,144],{3793:function(t,n,e){"use strict";e.r(n);e(643);var a=e(645),r=(e(644),e(646)),i=e(128),l=e(0),o=e.n(l),c=e(218),d=e(640),s=e(639),u=e(637),m=e(642),f=e(652),p=e(801),h=e(647),g=e(39),x=e(32),b=e(6),w=e(47);function k(){var t=Object(g.a)(["\n  p {\n    font-size: 13px;\n    color: ",";\n    line-height: 1.5;\n  }\n"]);return k=function(){return t},t}function E(){var t=Object(g.a)(["\n  .ant-modal-header {\n    padding: 13px 16px;\n    background: ",";\n    color: ",";\n    border-bottom: 1px solid ",";\n    ",";\n  }\n\n  .ant-modal-title {\n    margin: 0;\n    font-size: 15px;\n    line-height: 21px;\n    font-weight: 500;\n    color: ",";\n  }\n\n  .ant-modal-close {\n    right: ",";\n    left: ",";\n  }\n\n  .ant-modal-body {\n    padding: 16px;\n    font-size: 13px;\n    color: ",";\n    line-height: 1.5;\n  }\n\n  .ant-modal-footer {\n    border-top: 1px solid ",";\n    padding: 10px 16px 10px 10px;\n    text-align: right;\n    ",";\n\n    .ant-btn-lg {\n      padding: 0 35px;\n      font-size: 14px;\n      height: 42px;\n    }\n\n    button + button {\n      margin: ",";\n    }\n  }\n\n  .ant-confirm {\n    .ant-modal-body {\n      padding: 30px 35px;\n    }\n  }\n\n  .ant-confirm-body {\n    .ant-confirm-title {\n      color: ",";\n      font-weight: 700;\n      font-size: 15px;\n    }\n\n    .ant-confirm-content {\n      margin-left: 42px;\n      font-size: 13px;\n      color: ",";\n      margin-top: 8px;\n    }\n  }\n"]);return E=function(){return t},t}var y=x.d.div(k(),Object(b.palette)("text",3)),v=function(t){return Object(x.d)(t)(E(),Object(b.palette)("grayscale",5),Object(b.palette)("text",0),Object(b.palette)("border",0),Object(w.a)("4px 4px 0 0"),Object(b.palette)("text",0),(function(t){return"rtl"===t["data-rtl"]?"inherit":"0"}),(function(t){return"rtl"===t["data-rtl"]?"0":"inherit"}),Object(b.palette)("text",3),Object(b.palette)("border",0),Object(w.a)("0 0 4px 4px"),(function(t){return"rtl"===t["data-rtl"]?"0 8px 0 0":"0 0 0 8px"}),Object(b.palette)("text",0),Object(b.palette)("text",3))},O=e(77),j=v(p.a),T=Object(O.a)(j),C=p.a.confirm;function S(){p.a.info({title:o.a.createElement("h3",null,"This is a notification message"),content:o.a.createElement(y,null,o.a.createElement("p",null,"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."),o.a.createElement("p",null,"some messages...some messages...")),onOk:function(){},okText:"OK",cancelText:"Cancel"})}function B(){p.a.success({title:"This is a success message",content:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",okText:"OK",cancelText:"Cancel"})}function F(){p.a.error({title:"This is an error message",content:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",okText:"OK",cancelText:"Cancel"})}function z(){p.a.warning({title:"This is a warning message",content:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",okText:"OK",cancelText:"Cancel"})}function N(){C({title:"Want to delete these items?",content:"When clicked the OK button, this dialog will be closed after 1 second",onOk:function(){return new Promise((function(t,n){setTimeout(Math.random()>.5?t:n,1e3)})).catch((function(){}))},onCancel:function(){},okText:"OK",cancelText:"Cancel"})}n.default=function(){var t=o.a.useState({loading:!1,visible:!1}),n=Object(i.a)(t,2),e=n[0],l=n[1],p=function(){l({loading:!0}),setTimeout((function(){l({loading:!1,visible:!1})}),2e3)},g=function(){l({visible:!1})},x=h.b.rowStyle,b=h.b.colStyle,w=h.b.gutter,k={marginRight:"5px",marginBottom:"5px"};return o.a.createElement(u.default,null,o.a.createElement(d.default,null,o.a.createElement(f.a,{id:"feedback.alert.modalBlockTitle"})),o.a.createElement(a.a,{style:x,gutter:w,justify:"start"},o.a.createElement(r.a,{md:12,sm:12,xs:24,style:b},o.a.createElement(s.default,{title:o.a.createElement(f.a,{id:"feedback.alert.modalTitle"}),subtitle:o.a.createElement(f.a,{id:"feedback.alert.modalSubTitle"})},o.a.createElement(m.default,null,o.a.createElement(c.b,{type:"primary",onClick:function(){l({visible:!0})}},o.a.createElement(f.a,{id:"feedback.alert.simpleModalDialogue"})),o.a.createElement(T,{visible:e.visible,title:"Title",onOk:p,onCancel:g,footer:[o.a.createElement(c.b,{key:"back",size:"large",onClick:g},"Return"),o.a.createElement(c.b,{key:"submit",type:"primary",size:"large",loading:e.loading,onClick:p},"Submit")]},o.a.createElement("p",null,"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."),o.a.createElement("p",null,"Some contents..."))))),o.a.createElement(r.a,{md:12,sm:12,xs:24,style:b},o.a.createElement(s.default,{title:o.a.createElement(f.a,{id:"feedback.alert.modalTitle"}),subtitle:o.a.createElement(f.a,{id:"feedback.alert.modalSubTitle"})},o.a.createElement(m.default,null,o.a.createElement(c.b,{onClick:S,style:k},o.a.createElement(f.a,{id:"feedback.alert.infoTitle"})),o.a.createElement(c.b,{onClick:B,style:k},o.a.createElement(f.a,{id:"feedback.alert.successTitle"})),o.a.createElement(c.b,{onClick:F,style:k},o.a.createElement(f.a,{id:"feedback.alert.errorTitle"})),o.a.createElement(c.b,{onClick:z},o.a.createElement(f.a,{id:"feedback.alert.warningTitle"})))))),o.a.createElement(a.a,{style:x,gutter:w,justify:"start"},o.a.createElement(r.a,{md:12,sm:12,xs:24,style:b},o.a.createElement(s.default,{title:o.a.createElement(f.a,{id:"feedback.alert.modalTitle"}),subtitle:o.a.createElement(f.a,{id:"feedback.alert.modalSubTitle"})},o.a.createElement(m.default,null,o.a.createElement(c.b,{onClick:N},o.a.createElement(f.a,{id:"feedback.alert.confirmationModalDialogue"})))))))}},637:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),i=e(39);function l(){var t=Object(i.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return l=function(){return t},t}var o=e(32).d.div(l());n.default=function(t){return r.a.createElement(o,Object.assign({className:null!=t.className?"".concat(t.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},t),t.children)}},639:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),i=e(39),l=e(32),o=e(6);function c(){var t=Object(i.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return c=function(){return t},t}function d(){var t=Object(i.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return d=function(){return t},t}var s=l.d.h3(d(),Object(o.palette)("text",0)),u=l.d.p(c(),Object(o.palette)("text",3)),m=function(t){return r.a.createElement("div",null,t.title?r.a.createElement(s,{className:"isoBoxTitle"}," ",t.title," "):"",t.subtitle?r.a.createElement(u,{className:"isoBoxSubTitle"}," ",t.subtitle," "):"")};function f(){var t=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return f=function(){return t},t}var p=l.d.div(f(),Object(o.palette)("border",0),"");n.default=function(t){return r.a.createElement(p,{className:"".concat(t.className?t.className:""," isoBoxWrapper"),style:t.style},r.a.createElement(m,{title:t.title,subtitle:t.subtitle}),t.children)}},640:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),i=e(39),l=e(32),o=e(6),c=e(77);function d(){var t=Object(i.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return d=function(){return t},t}var s=l.d.h1(d(),Object(o.palette)("secondary",2),Object(o.palette)("secondary",3),(function(t){return"rtl"===t["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),Object(o.palette)("secondary",3),(function(t){return"rtl"===t["data-rtl"]?"0 15px 0 0":"0 0 0 15px"})),u=Object(c.a)(s);n.default=function(t){return r.a.createElement(u,{className:"isoComponentTitle"},t.children)}},642:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),i=e(39),l=e(32),o=e(6),c=e(77);function d(){var t=Object(i.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"]);return d=function(){return t},t}var s=l.d.div(d(),(function(t){return"rtl"===t["data-rtl"]?"0":"10px"}),(function(t){return"rtl"===t["data-rtl"]?"10px":"0"}),(function(t){return"rtl"===t["data-rtl"]?"0":"70px"}),(function(t){return"rtl"===t["data-rtl"]?"70px":"0"}),(function(t){return"rtl"===t["data-rtl"]?"right":"left"}),(function(t){return"rtl"===t["data-rtl"]?"0":"295px"}),(function(t){return"rtl"===t["data-rtl"]?"295px":"0"}),(function(t){return"rtl"===t["data-rtl"]?"0":"70px"}),(function(t){return"rtl"===t["data-rtl"]?"70px":"0"}),(function(t){return"rtl"===t["data-rtl"]?"8px":"0 !important"}),(function(t){return"rtl"===t["data-rtl"]?"0 !important":"8px"}),(function(t){return"rtl"===t["data-rtl"]?"0":"8px"}),(function(t){return"rtl"===t["data-rtl"]?"8px":"0"}),Object(o.palette)("secondary",1),(function(t){return"rtl"===t["data-rtl"]?"auto":"6px"}),(function(t){return"rtl"===t["data-rtl"]?"6px":"0"}),(function(t){return"rtl"===t["data-rtl"]?"0":"15px"}),(function(t){return"rtl"===t["data-rtl"]?"15px":"0"}),(function(t){return t["data-rtl"],"0"}),(function(t){return t["data-rtl"],"0"})),u=Object(c.a)(s);n.default=function(t){return r.a.createElement(u,{className:"isoExampleWrapper",style:t.style},t.children)}},643:function(t,n,e){"use strict";e(127),e(649)},644:function(t,n,e){"use strict";e(127),e(649)},645:function(t,n,e){"use strict";var a=e(1126);n.a=a.a},646:function(t,n,e){"use strict";var a=e(1077);n.a=a.a},647:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"c",(function(){return r}));var a={blue:{deep:"rgb(0, 121, 191)",light:"lightblue",lighter:"#d9fcff",soft:"#E6FCFF"},black:"#4d4d4d",shadow:"rgba(0,0,0,0.2)",grey:{darker:"#C1C7D0",dark:"#E2E4E6",medium:"#DFE1E5",N30:"#EBECF0",light:"#F4F5F7"},green:"rgb(185, 244, 188)",white:"white",purple:"rebeccapurple",orange:"#FF991F"},r=8,i={rowStyle:{width:"100%",display:"flex",flexFlow:"row wrap"},colStyle:{marginBottom:"16px"},gutter:16};n.b=i}}]);
//# sourceMappingURL=89.8bea7723.chunk.js.map
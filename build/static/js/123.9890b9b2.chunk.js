(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[123],{2106:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var o=n(660),i=n.n(o),r=n(49),a=n.n(r);function l(e){var t,n=function(n){return function(){t=null,e.apply(void 0,i()(n))}},o=function(){if(null==t){for(var e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];t=a()(n(o))}};return o.cancel=function(){return a.a.cancel(t)},o}function f(){return function(e,t,n){var o=n.value,i=!1;return{configurable:!0,get:function(){if(i||this===e.prototype||this.hasOwnProperty(t))return o;var n=l(o.bind(this));return i=!0,Object.defineProperty(this,t,{value:n,configurable:!0,writable:!0}),i=!1,n}}}}},3039:function(e,t,n){},3763:function(e,t,n){"use strict";n.r(t);n(127),n(3039);var o=n(5),i=n.n(o),r=n(7),a=n.n(r),l=n(42),f=n.n(l),u=n(50),c=n.n(u),s=n(51),p=n.n(s),d=n(52),h=n.n(d),m=n(130),v=n.n(m),g=n(0),y=n.n(g),b=n(8),x=n.n(b),E=n(54),w=n(222),P=n(99),T=n(2106),N=n(1633);function O(e){return e!==window?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function S(e,t,n){if(void 0!==n&&t.top>e.top-n)return n+t.top}function A(e,t,n){if(void 0!==n&&t.bottom<e.bottom+n)return n+(window.innerHeight-t.bottom)}var B=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],C=[];function k(e,t){if(e){var n=C.find((function(t){return t.target===e}));n?n.affixList.push(t):(n={target:e,affixList:[t],eventHandlers:{}},C.push(n),B.forEach((function(t){n.eventHandlers[t]=Object(N.a)(e,t,(function(){n.affixList.forEach((function(e){e.lazyUpdatePosition()}))}))})))}}function j(e){var t=C.find((function(t){var n=t.affixList.some((function(t){return t===e}));return n&&(t.affixList=t.affixList.filter((function(t){return t!==e}))),n}));t&&0===t.affixList.length&&(C=C.filter((function(e){return e!==t})),B.forEach((function(e){var n=t.eventHandlers[e];n&&n.remove&&n.remove()})))}var F,z=function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"===typeof Reflect?"undefined":v()(Reflect))&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a};function L(){return"undefined"!==typeof window?window:null}!function(e){e[e.None=0]="None",e[e.Prepare=1]="Prepare"}(F||(F={}));var R=function(e){p()(n,e);var t=h()(n);function n(){var e;return f()(this,n),(e=t.apply(this,arguments)).state={status:F.None,lastAffix:!1,prevTarget:null},e.getOffsetTop=function(){var t=e.props.offsetBottom,n=e.props.offsetTop;return void 0===t&&void 0===n&&(n=0),n},e.getOffsetBottom=function(){return e.props.offsetBottom},e.savePlaceholderNode=function(t){e.placeholderNode=t},e.saveFixedNode=function(t){e.fixedNode=t},e.measure=function(){var t=e.state,n=t.status,o=t.lastAffix,i=e.props.onChange,r=e.getTargetFunc();if(n===F.Prepare&&e.fixedNode&&e.placeholderNode&&r){var a=e.getOffsetTop(),l=e.getOffsetBottom(),f=r();if(f){var u={status:F.None},c=O(f),s=O(e.placeholderNode),p=S(s,c,a),d=A(s,c,l);void 0!==p?(u.affixStyle={position:"fixed",top:p,width:s.width,height:s.height},u.placeholderStyle={width:s.width,height:s.height}):void 0!==d&&(u.affixStyle={position:"fixed",bottom:d,width:s.width,height:s.height},u.placeholderStyle={width:s.width,height:s.height}),u.lastAffix=!!u.affixStyle,i&&o!==u.lastAffix&&i(u.lastAffix),e.setState(u)}}},e.prepareMeasure=function(){e.setState({status:F.Prepare,affixStyle:void 0,placeholderStyle:void 0})},e.render=function(){var t=e.context.getPrefixCls,n=e.state,o=n.affixStyle,r=n.placeholderStyle,l=e.props,f=l.prefixCls,u=l.children,c=x()(a()({},t("affix",f),o)),s=Object(E.a)(e.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return g.createElement(w.a,{onResize:function(){e.updatePosition()}},g.createElement("div",i()({},s,{ref:e.savePlaceholderNode}),o&&g.createElement("div",{style:r,"aria-hidden":"true"}),g.createElement("div",{className:c,ref:e.saveFixedNode,style:o},g.createElement(w.a,{onResize:function(){e.updatePosition()}},u))))},e}return c()(n,[{key:"getTargetFunc",value:function(){var e=this.context.getTargetContainer,t=this.props.target;return void 0!==t?t:e||L}},{key:"componentDidMount",value:function(){var e=this,t=this.getTargetFunc();t&&(this.timeout=setTimeout((function(){k(t(),e),e.updatePosition()})))}},{key:"componentDidUpdate",value:function(e){var t=this.state.prevTarget,n=this.getTargetFunc(),o=null;n&&(o=n()||null),t!==o&&(j(this),o&&(k(o,this),this.updatePosition()),this.setState({prevTarget:o})),e.offsetTop===this.props.offsetTop&&e.offsetBottom===this.props.offsetBottom||this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),j(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var e=this.getTargetFunc(),t=this.state.affixStyle;if(e&&t){var n=this.getOffsetTop(),o=this.getOffsetBottom(),i=e();if(i&&this.placeholderNode){var r=O(i),a=O(this.placeholderNode),l=S(a,r,n),f=A(a,r,o);if(void 0!==l&&t.top===l||void 0!==f&&t.bottom===f)return}}this.prepareMeasure()}}]),n}(g.Component);R.contextType=P.b,z([Object(T.b)()],R.prototype,"updatePosition",null),z([Object(T.b)()],R.prototype,"lazyUpdatePosition",null);var U=R,H=(n(168),n(70));t.default=function(){var e=this;return y.a.createElement("div",null,y.a.createElement("h2",null," Basic Affix "),y.a.createElement(U,null,y.a.createElement(H.a,{type:"primary"},"Affix top")),y.a.createElement("br",null),y.a.createElement(U,{offsetBottom:0},y.a.createElement(H.a,{type:"primary"},"Affix bottom")),y.a.createElement("br",null),y.a.createElement("br",null),y.a.createElement("br",null),y.a.createElement("br",null),y.a.createElement("h2",null," Containter to Scroll Affix "),y.a.createElement("div",{className:"scrollable-container",ref:function(t){e.container=t}},y.a.createElement("div",{className:"background"},y.a.createElement(U,{target:function(){return e.container}},y.a.createElement(H.a,{type:"primary"},"Fixed at the top of container")))),y.a.createElement("br",null),y.a.createElement("br",null),y.a.createElement("br",null),y.a.createElement("br",null),y.a.createElement("h2",null," Affix with Callback "),y.a.createElement(U,{offsetTop:120,onChange:function(e){}},y.a.createElement(H.a,null,"120px to affix top")),y.a.createElement("br",null),y.a.createElement("br",null),y.a.createElement("br",null),y.a.createElement("br",null))}}}]);
//# sourceMappingURL=123.9890b9b2.chunk.js.map
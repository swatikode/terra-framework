(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1053:function(e,t){var n=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],o=n.join(","),a="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function i(e,t){t=t||{};var n,i,l,u=[],c=[],p=e.querySelectorAll(o);for(t.includeContainer&&a.call(e,o)&&(p=Array.prototype.slice.apply(p)).unshift(e),n=0;n<p.length;n++)r(i=p[n])&&(0===(l=s(i))?u.push(i):c.push({documentOrder:n,tabIndex:l,node:i}));return c.sort(d).map((function(e){return e.node})).concat(u)}function r(e){return!(!l(e)||function(e){return function(e){return c(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t=function(e){for(var t=0;t<e.length;t++)if(e[t].checked)return e[t]}(e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'));return!t||t===e}(e)}(e)||s(e)<0)}function l(e){return!(e.disabled||function(e){return c(e)&&"hidden"===e.type}(e)||function(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}(e))}i.isTabbable=function(e){if(!e)throw new Error("No node provided");return!1!==a.call(e,o)&&r(e)},i.isFocusable=function(e){if(!e)throw new Error("No node provided");return!1!==a.call(e,u)&&l(e)};var u=n.concat("iframe").join(",");function s(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:t}function d(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex}function c(e){return"INPUT"===e.tagName}e.exports=i},1076:function(e,t,n){e.exports={"content-container":"LayoutSlidePanel-module__content-container___1m5jV","layout-slide-panel":"LayoutSlidePanel-module__layout-slide-panel___3eewh",content:"LayoutSlidePanel-module__content___3B7TM",panel:"LayoutSlidePanel-module__panel___6Nxw2","is-animated":"LayoutSlidePanel-module__is-animated___kTH1Z","is-open":"LayoutSlidePanel-module__is-open___2sbzk","is-tiny":"LayoutSlidePanel-module__is-tiny___vnS05","is-small":"LayoutSlidePanel-module__is-small___2kbxc","is-overlay":"LayoutSlidePanel-module__is-overlay___2HevX","is-squish":"LayoutSlidePanel-module__is-squish___2WqMy","main-container":"LayoutSlidePanel-module__main-container___1O3uK"}},1092:function(e,t,n){"use strict";var o=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(18)),i=o(n(163)),r=o(n(20)),l=o(n(23)),u=o(n(24)),s=o(n(27)),d=o(n(22)),c=o(n(25)),p=o(n(0)),f=o(n(2)),m=o(n(4)),g=o(n(55)),y=o(n(371)),_=o(n(1076)),h=o(n(1112)),v=n(1135);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var P=m.default.bind(_.default),O={header:f.default.element,menu:f.default.element,menuText:f.default.string,children:f.default.element},T=function(e){function t(e){var n;return(0,r.default)(this,t),(n=(0,l.default)(this,(0,u.default)(t).call(this,e))).toggleMenu=n.toggleMenu.bind((0,s.default)(n)),n.togglePin=n.togglePin.bind((0,s.default)(n)),n.updateSize=(0,y.default)(n.updateSize.bind((0,s.default)(n)),100),n.renderHeader=n.renderHeader.bind((0,s.default)(n)),n.renderMenu=n.renderMenu.bind((0,s.default)(n)),n.renderContent=n.renderContent.bind((0,s.default)(n)),n.state=t.stateForProps(e,{size:(0,v.getBreakpointSize)(),prevProps:n.props}),n}return(0,c.default)(t,e),(0,d.default)(t,null,[{key:"stateForProps",value:function(e,t){var n="tiny"===t.size||"small"===t.size,o=!n,a=!!e.menu;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t||{},{isFixedMenu:o,isToggleMenu:n,menuIsPresent:a,menuIsOpen:a&&(t.menuIsOpen||o),menuIsPinned:a&&t.menuIsPinned})}},{key:"getDerivedStateFromProps",value:function(e,n){return e!==n.prevProps?t.stateForProps(e,n):null}}]),(0,d.default)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateSize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateSize)}},{key:"updateSize",value:function(){var e=(0,v.getBreakpointSize)();this.state.size!==e&&this.setState(t.stateForProps(this.props,{size:e}))}},{key:"toggleMenu",value:function(){var e=this;return new Promise((function(t){e.setState((function(e){return{menuIsOpen:!e.menuIsOpen}}),t)}))}},{key:"togglePin",value:function(){var e=this;return new Promise((function(t){e.setState((function(e){return{menuIsPinned:!e.menuIsPinned}}),t)}))}},{key:"renderHeader",value:function(){var e=this.props.header,t=this.state,n=t.size,o=t.menuIsOpen,a=t.isToggleMenu,i=t.menuIsPresent;if(!e)return null;var r=a&&i;return p.default.cloneElement(e,{layoutConfig:{size:n,toggleMenu:r?this.toggleMenu:void 0,menuIsOpen:o}})}},{key:"renderMenu",value:function(){var e=this.props.menu,t=this.state,n=t.size,o=t.menuIsOpen,a=t.menuIsPinned,i=t.isToggleMenu,r=t.menuIsPresent,l=i&&r;return r?p.default.cloneElement(e,{layoutConfig:{size:n,toggleMenu:l?this.toggleMenu:void 0,menuIsOpen:o,menuIsPinned:a}}):null}},{key:"renderContent",value:function(){var e=this.props.children,t=this.state,n=t.size,o=t.menuIsOpen,a=t.isToggleMenu,i=t.menuIsPresent,r=a&&i;return p.default.createElement(g.default,{fill:!0,header:a&&this.renderHeader(),className:P("content-container")},e?p.default.cloneElement(e,{layoutConfig:{size:n,toggleMenu:r?this.toggleMenu:void 0,menuIsOpen:o}}):null)}},{key:"render",value:function(){var e=this.props.menuText,t=this.state,n=t.menuIsOpen,o=t.menuIsPinned,i=t.size,r=t.isFixedMenu,l=t.isToggleMenu;return p.default.createElement(g.default,(0,a.default)({fill:!0,header:!l&&this.renderHeader()},(0,v.getCustomProps)(this.props,O)),p.default.createElement(h.default,{panelContent:this.renderMenu(),panelBehavior:o||r?"squish":"overlay",size:i,onToggle:this.toggleMenu,toggleText:e,isOpen:n,isAnimated:!0},this.renderContent()))}}]),t}(p.default.Component);T.propTypes=O;var E=T;t.default=E},1112:function(e,t,n){"use strict";var o=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(18)),i=o(n(28)),r=o(n(20)),l=o(n(22)),u=o(n(23)),s=o(n(24)),d=o(n(27)),c=o(n(25)),p=o(n(0)),f=o(n(2)),m=o(n(4)),g=o(n(168)),y=o(n(169)),_=o(n(1053)),h=o(n(1076)),v=m.default.bind(h.default),b={isAnimated:f.default.bool,isOpen:f.default.bool,isToggleEnabled:f.default.bool,children:f.default.element,panelBehavior:f.default.oneOf(["overlay","squish"]),panelContent:f.default.node,size:f.default.string.isRequired,onToggle:f.default.func,toggleText:f.default.string},P=function(e){function t(e){var n;return(0,r.default)(this,t),(n=(0,u.default)(this,(0,s.default)(t).call(this,e))).setPanelNode=n.setPanelNode.bind((0,d.default)(n)),n.handleTransitionEnd=n.handleTransitionEnd.bind((0,d.default)(n)),n.preparePanelForTransition=n.preparePanelForTransition.bind((0,d.default)(n)),n.isHidden=!e.isOpen,n}return(0,c.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){document.createElement("main"),this.panelNode&&this.panelNode.addEventListener("transitionend",this.handleTransitionEnd)}},{key:"componentDidUpdate",value:function(){this.lastIsOpen=this.props.isOpen}},{key:"componentWillUnmount",value:function(){this.panelNode&&this.panelNode.removeEventListener("transitionend",this.handleTransitionEnd)}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"handleTransitionEnd",value:function(){!this.props.isOpen&&this.panelNode&&(this.panelNode.setAttribute("aria-hidden","true"),this.isHidden=!0,document.querySelector("button[data-application-header-toggle]")?document.querySelector("button[data-application-header-toggle]").focus():(0,_.default)(document.querySelector("[data-terra-layout-main]"))[0]&&(0,_.default)(document.querySelector("[data-terra-layout-main]"))[0].focus())}},{key:"preparePanelForTransition",value:function(){this.props.isOpen&&!this.lastIsOpen&&this.panelNode&&(this.panelNode.setAttribute("aria-hidden","false"),this.isHidden=!1,(0,_.default)(this.panelNode)[0]&&(0,_.default)(this.panelNode)[0].focus())}},{key:"render",value:function(){var e=this.props,t=e.isAnimated,n=e.isOpen,o=(e.isToggleEnabled,e.children),r=e.panelBehavior,l=e.panelContent,u=e.size,s=e.onToggle,d=(e.toggleText,(0,i.default)(e,["isAnimated","isOpen","isToggleEnabled","children","panelBehavior","panelContent","size","onToggle","toggleText"]));this.preparePanelForTransition();var c="tiny"===u,f="small"===u,m=c||f,_=!!m||"overlay"===r,h=n&&_,b=m?"dark":"clear",P=v(["layout-slide-panel",{"is-open":n},{"is-overlay":_},{"is-squish":!_},d.className]),O=v(["panel",{"is-tiny":c},{"is-small":f},{"is-animated":t&&_&&!!l}]);return p.default.createElement("div",(0,a.default)({},d,{className:P}),p.default.createElement("div",{className:O,"aria-hidden":this.isHidden?"true":"false",ref:this.setPanelNode},l),p.default.createElement(y.default,{className:v("content")},p.default.createElement(g.default,{isRelativeToContainer:!0,onRequestClose:s,isOpen:h,backgroundStyle:b,zIndex:"6000"}),p.default.createElement("main",{role:"main","data-terra-layout-main":!0,className:v("main-container")},o)))}}]),t}(p.default.Component);P.propTypes=b,P.defaultProps={isAnimated:!1,isOpen:!1,isToggleEnabled:!1,panelBehavior:"overlay"};var O=P;t.default=O},1135:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getCustomProps=t.getBreakpointSize=void 0;var o=768,a=992,i=1216,r=1440;t.getBreakpointSize=function(e){var t=e||window.innerWidth;return t>=r?"huge":t>=i?"large":t>=a?"medium":t>=o?"small":"tiny"};t.getCustomProps=function(e,t){return Object.keys(e).filter((function(e){return!Object.keys(t).includes(e)})).reduce((function(t,n){return t[n]=e[n],t}),{})}},1185:function(e,t,n){e.exports={"panel-content":"TestLayoutCommon-module__panel-content___2CkcC","layout-slide-panel-content":"TestLayoutCommon-module__layout-slide-panel-content___3FD5f","content-wrapper":"TestLayoutCommon-module__content-wrapper___3fQ-z","layout-test":"TestLayoutCommon-module__layout-test___2lyVY"}},1436:function(e,t,n){e.exports={"content-wrapper1":"LayoutTestCommon-module__content-wrapper1___autmK","content-wrapper2":"LayoutTestCommon-module__content-wrapper2___dEkRh","content-text":"LayoutTestCommon-module__content-text___3roMM","test-content-toggle":"LayoutTestCommon-module__test-content-toggle___3KNWJ","test-menu-toggle":"LayoutTestCommon-module__test-menu-toggle___34A6a"}},1437:function(e,t,n){"use strict";var o=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),i=o(n(2)),r=o(n(4)),l=o(n(1436)),u=r.default.bind(l.default),s={layoutConfig:i.default.object},d=function(e){var t=e.layoutConfig;return a.default.createElement("div",{id:"test-content",className:u("content-wrapper1")},a.default.createElement("div",{className:u("content-wrapper2")},a.default.createElement("h2",{className:u("content-text")},"Content"),t.toggleMenu&&a.default.createElement("button",{type:"button",className:u("test-content-toggle"),onClick:t.toggleMenu},"Toggle Menu")))};d.propTypes=s;var c=d;t.default=c}}]);
//# sourceMappingURL=16-c5caaab9425fb91ac39d.js.map
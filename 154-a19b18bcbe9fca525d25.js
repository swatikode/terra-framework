(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{1019:function(e,l,a){"use strict";var t=a(5);Object.defineProperty(l,"__esModule",{value:!0}),l.SlidePanelPositions=l.default=void 0;var n=t(a(18)),i=t(a(28)),s=t(a(20)),r=t(a(22)),o=t(a(23)),d=t(a(24)),u=t(a(27)),c=t(a(25)),f=t(a(0)),p=t(a(2)),m=t(a(4)),h=t(a(1030)),v=m.default.bind(h.default),_={START:"start",END:"end"};l.SlidePanelPositions=_;var S={panelAriaLabel:p.default.string,mainAriaLabel:p.default.string,mainContent:p.default.node,panelContent:p.default.node,panelBehavior:p.default.oneOf(["overlay","squish"]),panelPosition:p.default.oneOf(["start","end"]),panelSize:p.default.oneOf(["small","large"]),isFullscreen:p.default.bool,isOpen:p.default.bool,fill:p.default.bool},g={panelBehavior:"overlay",panelPosition:_.END,panelSize:"small"},b=function(e){function l(e){var a;return(0,s.default)(this,l),(a=(0,o.default)(this,(0,d.default)(l).call(this,e))).setPanelNode=a.setPanelNode.bind((0,u.default)(a)),a.mainNode=f.default.createRef(),a}return(0,c.default)(l,e),(0,r.default)(l,[{key:"componentDidUpdate",value:function(e){this.props.isOpen&&this.props.isOpen!==e.isOpen?this.panelNode.focus():this.props.isOpen||this.props.isOpen===e.isOpen||this.mainNode.current.focus()}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"render",value:function(){var e=this.props,l=e.panelAriaLabel,a=e.mainAriaLabel,t=e.mainContent,s=e.panelContent,r=e.panelBehavior,o=e.panelPosition,d=e.panelSize,u=e.isFullscreen,c=e.isOpen,p=e.fill,m=(0,i.default)(e,["panelAriaLabel","mainAriaLabel","mainContent","panelContent","panelBehavior","panelPosition","panelSize","isFullscreen","isOpen","fill"]),h=v(["slide-panel",{"is-open":c},{"is-fullscreen":u},{fill:p},m.className]),S=f.default.createElement("div",{className:v(["panel"]),tabIndex:"-1","aria-label":l,"aria-hidden":c?"false":"true",ref:this.setPanelNode},s),g=f.default.createElement("div",{className:v("main"),tabIndex:"-1","aria-label":a,ref:this.mainNode},t),b=o===_.START?f.default.createElement(f.default.Fragment,null,S,g):f.default.createElement(f.default.Fragment,null,g,S);return f.default.createElement("div",(0,n.default)({},m,{className:h,"data-slide-panel-panel-behavior":r,"data-slide-panel-panel-position":o,"data-slide-panel-panel-size":d}),b)}}]),l}(f.default.Component);b.propTypes=S,b.defaultProps=g;var E=b;l.default=E},1030:function(e,l,a){e.exports={"slide-panel":"SlidePanel-module__slide-panel___16_Ez",main:"SlidePanel-module__main___Qtxtf",panel:"SlidePanel-module__panel___2NV-G","is-open":"SlidePanel-module__is-open___IAbgR","is-fullscreen":"SlidePanel-module__is-fullscreen___29Ymh",fill:"SlidePanel-module__fill___11BRG"}},1091:function(e,l,a){"use strict";var t=a(5),n=a(15);Object.defineProperty(l,"__esModule",{value:!0}),l.default=l.disclosureType=void 0;var i,s=t(a(18)),r=t(a(28)),o=t(a(20)),d=t(a(22)),u=t(a(23)),c=t(a(24)),f=t(a(27)),p=t(a(25)),m=t(a(163)),h=t(a(0)),v=t(a(2)),_=t(a(83)),S=t(a(55)),g=n(a(226)),b=t(a(366)),E=t(a(1019));l.disclosureType="panel";var y={children:v.default.node,panelBehavior:v.default.oneOf(["overlay","squish"]),disclosureAccessory:v.default.element,withDisclosureContainer:v.default.func},P=(i={},(0,m.default)(i,g.availableDisclosureSizes.TINY,"small"),(0,m.default)(i,g.availableDisclosureSizes.SMALL,"small"),(0,m.default)(i,g.availableDisclosureSizes.MEDIUM,"large"),(0,m.default)(i,g.availableDisclosureSizes.LARGE,"large"),(0,m.default)(i,g.availableDisclosureSizes.HUGE,"large"),i),C=function(e){function l(e){var a;return(0,o.default)(this,l),(a=(0,u.default)(this,(0,c.default)(l).call(this,e))).renderSlidePanel=a.renderSlidePanel.bind((0,f.default)(a)),a}return(0,p.default)(l,e),(0,d.default)(l,[{key:"renderSlidePanel",value:function(e){var l,a,t,n=this.props,i=(n.children,n.panelBehavior),o=n.disclosureAccessory,d=(n.withDisclosureContainer,(0,r.default)(n,["children","panelBehavior","disclosureAccessory","withDisclosureContainer"]));(e.disclosure.size===g.availableDisclosureSizes.FULLSCREEN||e.disclosure.isMaximized)&&(l=!0),a=e.disclosure.dimensions?(t=e.disclosure.dimensions).width>480||t.height>600?"large":"small":P[e.disclosure.size];var u=e.disclosureComponentKeys[e.disclosureComponentKeys.length-1],c=(e.disclosureComponentData[u]||{}).headerAdapterData;return h.default.createElement(E.default,(0,s.default)({},d,{fill:!0,panelBehavior:i,isFullscreen:l,panelSize:a,isOpen:e.disclosure.isOpen,panelContent:h.default.createElement(S.default,{fill:!0,header:h.default.createElement(h.default.Fragment,null,c?h.default.createElement(_.default,{title:c.title,onClose:e.closeDisclosure,onBack:e.disclosureComponentKeys.length>1?e.dismissPresentedComponent:void 0,onMaximize:e.maximizeDisclosure,onMinimize:e.minimizeDisclosure},c.collapsibleMenuView):void 0,o)},h.default.createElement(b.default,{items:e.disclosure.components,isAnimated:!0})),mainContent:e.children.components}))}},{key:"render",value:function(){var e=this.props,l=e.withDisclosureContainer,a=e.children;return h.default.createElement(g.default,{withDisclosureContainer:l,supportedDisclosureTypes:["panel"],render:this.renderSlidePanel},a)}}]),l}(h.default.Component);C.propTypes=y,C.defaultProps={panelBehavior:"overlay"};var O=C;l.default=O},2253:function(e,l,a){e.exports={"aggregator-with-disclosure-test":"AggregatorWithDisclosure-test-module__aggregator-with-disclosure-test___2l_0y"}},2406:function(e,l,a){"use strict";var t=a(15),n=a(5);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var i=n(a(93)),s=t(a(0)),r=n(a(54)),o=n(a(1091)),d=a(226),u=n(a(4)),c=n(a(2253)),f=n(a(1127)),p=n(a(1536)),m=u.default.bind(c.default),h=Object.freeze([{key:"SECTION_0",component:s.default.createElement(p.default,{name:"Section 0",targetId:"section0"})},{key:"SECTION_1",component:s.default.createElement(p.default,{name:"Section 1",targetId:"section1"})}]),v=Object.freeze([{key:"SECTION_2",component:s.default.createElement(p.default,{name:"Section 2",targetId:"section2"})},{key:"SECTION_3",component:s.default.createElement(p.default,{name:"Section 3",targetId:"section3"})}]),_=(0,d.withDisclosureManager)((function(e){var l=e.itemsList,a=e.disclosureManager;return s.default.createElement(f.default,{items:l,disclose:a.disclose})}));var S=function(){var e=(0,s.useState)(!1),l=(0,i.default)(e,2),a=l[0],t=l[1];return s.default.createElement("div",{id:"test-aggregator",role:"main",className:m("aggregator-with-disclosure-test")},s.default.createElement(r.default,{id:"flip-button",text:"Flip Items",onClick:function(){return t(!a)}}),s.default.createElement(o.default,null,s.default.createElement(_,{itemsList:a?v:h})))};l.default=S}}]);
//# sourceMappingURL=154-a19b18bcbe9fca525d25.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{1019:function(e,l,t){"use strict";var a=t(5);Object.defineProperty(l,"__esModule",{value:!0}),l.SlidePanelPositions=l.default=void 0;var n=a(t(18)),i=a(t(28)),u=a(t(20)),d=a(t(22)),r=a(t(23)),o=a(t(24)),m=a(t(27)),s=a(t(25)),f=a(t(0)),c=a(t(2)),p=a(t(4)),E=a(t(1030)),v=p.default.bind(E.default),I={START:"start",END:"end"};l.SlidePanelPositions=I;var _={panelAriaLabel:c.default.string,mainAriaLabel:c.default.string,mainContent:c.default.node,panelContent:c.default.node,panelBehavior:c.default.oneOf(["overlay","squish"]),panelPosition:c.default.oneOf(["start","end"]),panelSize:c.default.oneOf(["small","large"]),isFullscreen:c.default.bool,isOpen:c.default.bool,fill:c.default.bool},h={panelBehavior:"overlay",panelPosition:I.END,panelSize:"small"},b=function(e){function l(e){var t;return(0,u.default)(this,l),(t=(0,r.default)(this,(0,o.default)(l).call(this,e))).setPanelNode=t.setPanelNode.bind((0,m.default)(t)),t.mainNode=f.default.createRef(),t}return(0,s.default)(l,e),(0,d.default)(l,[{key:"componentDidUpdate",value:function(e){this.props.isOpen&&this.props.isOpen!==e.isOpen?this.panelNode.focus():this.props.isOpen||this.props.isOpen===e.isOpen||this.mainNode.current.focus()}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"render",value:function(){var e=this.props,l=e.panelAriaLabel,t=e.mainAriaLabel,a=e.mainContent,u=e.panelContent,d=e.panelBehavior,r=e.panelPosition,o=e.panelSize,m=e.isFullscreen,s=e.isOpen,c=e.fill,p=(0,i.default)(e,["panelAriaLabel","mainAriaLabel","mainContent","panelContent","panelBehavior","panelPosition","panelSize","isFullscreen","isOpen","fill"]),E=v(["slide-panel",{"is-open":s},{"is-fullscreen":m},{fill:c},p.className]),_=f.default.createElement("div",{className:v(["panel"]),tabIndex:"-1","aria-label":l,"aria-hidden":s?"false":"true",ref:this.setPanelNode},u),h=f.default.createElement("div",{className:v("main"),tabIndex:"-1","aria-label":t,ref:this.mainNode},a),b=r===I.START?f.default.createElement(f.default.Fragment,null,_,h):f.default.createElement(f.default.Fragment,null,h,_);return f.default.createElement("div",(0,n.default)({},p,{className:E,"data-slide-panel-panel-behavior":d,"data-slide-panel-panel-position":r,"data-slide-panel-panel-size":o}),b)}}]),l}(f.default.Component);b.propTypes=_,b.defaultProps=h;var P=b;l.default=P},1030:function(e,l,t){e.exports={"slide-panel":"SlidePanel-module__slide-panel___16_Ez",main:"SlidePanel-module__main___Qtxtf",panel:"SlidePanel-module__panel___2NV-G","is-open":"SlidePanel-module__is-open___IAbgR","is-fullscreen":"SlidePanel-module__is-fullscreen___29Ymh",fill:"SlidePanel-module__fill___11BRG"}},1035:function(e,l,t){"use strict";var a=t(5);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var n=a(t(0)),i=function(){return n.default.createElement("div",null,n.default.createElement("h3",null,"Main Content"),n.default.createElement("p",null,"Lorem ipsum dolor sit amet, mea te odio ludus adipiscing. Cu oporteat temporibus nam, aperiam adipisci mel et, mei no oportere salutatus. Iudico lucilius ei pri. Eleifend philosophia et ius."),n.default.createElement("p",null,"Id elit congue copiosae eam, elitr laboramus mediocritatem nam in, decore propriae et usu. An vix insolens dignissim, novum gloriatur delicatissimi mei ne, ne ancillae tincidunt nec. Iusto expetenda scriptorem mei cu, ne per prima nihil utinam. Cibo ocurreret no nam, nec euismod vivendum te."),n.default.createElement("ul",null,n.default.createElement("li",null,"Item 1"),n.default.createElement("li",null,"Item 2"),n.default.createElement("li",null,"Item 3"),n.default.createElement("li",null,"Item 4"),n.default.createElement("li",null,"Item 5"),n.default.createElement("li",null,"Item 6"),n.default.createElement("li",null,"Item 7"),n.default.createElement("li",null,"Item 8"),n.default.createElement("li",null,"Item 9"),n.default.createElement("li",null,"Item 10"),n.default.createElement("li",null,"Item 11"),n.default.createElement("li",null,"Item 12"),n.default.createElement("li",null,"Item 13"),n.default.createElement("li",null,"Item 14"),n.default.createElement("li",null,"Item 15")))};l.default=i},1036:function(e,l,t){"use strict";var a=t(5);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var n=a(t(0)),i=function(){return n.default.createElement("div",null,n.default.createElement("h3",null,"Panel Content"),n.default.createElement("p",null,"Lorem ipsum dolor sit amet, mea te odio ludus adipiscing. Cu oporteat temporibus nam, aperiam adipisci mel et, mei no oportere salutatus. Iudico lucilius ei pri. Eleifend philosophia et ius."),n.default.createElement("p",null,"Id elit congue copiosae eam, elitr laboramus mediocritatem nam in, decore propriae et usu. An vix insolens dignissim, novum gloriatur delicatissimi mei ne, ne ancillae tincidunt nec. Iusto expetenda scriptorem mei cu, ne per prima nihil utinam. Cibo ocurreret no nam, nec euismod vivendum te."),n.default.createElement("ul",null,n.default.createElement("li",null,"Item 1"),n.default.createElement("li",null,"Item 2"),n.default.createElement("li",null,"Item 3"),n.default.createElement("li",null,"Item 4"),n.default.createElement("li",null,"Item 5"),n.default.createElement("li",null,"Item 6"),n.default.createElement("li",null,"Item 7"),n.default.createElement("li",null,"Item 8"),n.default.createElement("li",null,"Item 9"),n.default.createElement("li",null,"Item 10"),n.default.createElement("li",null,"Item 11"),n.default.createElement("li",null,"Item 12"),n.default.createElement("li",null,"Item 13"),n.default.createElement("li",null,"Item 14"),n.default.createElement("li",null,"Item 15")))};l.default=i},1527:function(e,l,t){"use strict";var a=t(15),n=t(5);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var i=n(t(0)),u=a(t(1019)),d=n(t(1035)),r=n(t(1036)),o=function(){return i.default.createElement(u.default,{mainContent:i.default.createElement(d.default,null),panelContent:i.default.createElement(r.default,null),panelBehavior:"overlay",panelPosition:u.SlidePanelPositions.END,panelSize:"small",isOpen:!0})};l.default=o}}]);
//# sourceMappingURL=187-db37f1e5593a32e0c567.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[407],{2274:function(t,e,n){t.exports={"test-popup-area":"ArrowVerticalLeftAdjustmentPopup-test-module__test-popup-area___3ghE4","popup-text":"ArrowVerticalLeftAdjustmentPopup-test-module__popup-text___1JAwJ","popup-button":"ArrowVerticalLeftAdjustmentPopup-test-module__popup-button___1habZ"}},2627:function(t,e,n){"use strict";var o=n(5);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(n(20)),a=o(n(22)),d=o(n(23)),s=o(n(24)),l=o(n(27)),i=o(n(25)),p=o(n(0)),r=o(n(4)),f=o(n(129)),c=o(n(2274)),h=r.default.bind(c.default),N=function(t){function e(t){var n;return(0,u.default)(this,e),(n=(0,d.default)(this,(0,s.default)(e).call(this,t))).handleButtonClick=n.handleButtonClick.bind((0,l.default)(n)),n.handleRequestClose=n.handleRequestClose.bind((0,l.default)(n)),n.setButtonNode=n.setButtonNode.bind((0,l.default)(n)),n.getButtonNode=n.getButtonNode.bind((0,l.default)(n)),n.setParentNode=n.setParentNode.bind((0,l.default)(n)),n.getParentNode=n.getParentNode.bind((0,l.default)(n)),n.state={open:!0},n}return(0,i.default)(e,t),(0,a.default)(e,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"setParentNode",value:function(t){this.parentNode=t}},{key:"getParentNode",value:function(){return this.parentNode}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){return p.default.createElement("div",{id:"test-popup-area",className:h("test-popup-area"),ref:this.setParentNode},p.default.createElement(f.default,{boundingRef:this.getParentNode,classNameArrow:"test-arrow",classNameContent:"test-content",contentAttachment:"top left",contentHeight:"120",contentWidth:"160",isArrowDisplayed:!0,isOpen:this.state.open,onRequestClose:this.handleRequestClose,targetRef:this.getButtonNode},p.default.createElement("p",{className:h("popup-text")},"This popup arrow has verital-left attachment, but was adjusted to be on the screen.")),p.default.createElement("button",{type:"button",id:"alignment-button",className:h("popup-button"),onClick:this.handleButtonClick,ref:this.setButtonNode},""))}}]),e}(p.default.Component);e.default=N}}]);
//# sourceMappingURL=407-865963641f133d17996e.js.map
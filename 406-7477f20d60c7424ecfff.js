(window.webpackJsonp=window.webpackJsonp||[]).push([[406],{2273:function(t,e,n){t.exports={"test-popup-area":"ArrowVerticalAttachmentsPopup-test-module__test-popup-area___3Tfr1","popup-text":"ArrowVerticalAttachmentsPopup-test-module__popup-text___1RsiK","popup-button":"ArrowVerticalAttachmentsPopup-test-module__popup-button___22C3f"}},2626:function(t,e,n){"use strict";var a=n(5);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n(20)),u=a(n(22)),l=a(n(23)),d=a(n(24)),s=a(n(27)),i=a(n(25)),c=a(n(0)),r=a(n(4)),h=a(n(129)),p=a(n(2273)),f=r.default.bind(p.default),m=function(t){function e(t){var n;return(0,o.default)(this,e),(n=(0,l.default)(this,(0,d.default)(e).call(this,t))).handleButtonClick=n.handleButtonClick.bind((0,s.default)(n)),n.handleAttachment=n.handleAttachment.bind((0,s.default)(n)),n.handleRequestClose=n.handleRequestClose.bind((0,s.default)(n)),n.setButtonNode=n.setButtonNode.bind((0,s.default)(n)),n.getButtonNode=n.getButtonNode.bind((0,s.default)(n)),n.setParentNode=n.setParentNode.bind((0,s.default)(n)),n.getParentNode=n.getParentNode.bind((0,s.default)(n)),n.state={open:!1,attachment:"bottom left"},n}return(0,i.default)(e,t),(0,u.default)(e,[{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"setParentNode",value:function(t){this.parentNode=t}},{key:"getParentNode",value:function(){return this.parentNode}},{key:"handleAttachment",value:function(t){this.setState({attachment:t.target.value,open:!0})}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("div",{id:"test-popup-area",className:f("test-popup-area"),ref:this.setParentNode},c.default.createElement(h.default,{boundingRef:this.getParentNode,classNameArrow:"test-arrow",classNameContent:"test-content",contentAttachment:this.state.attachment,contentHeight:"80",contentWidth:"160",isArrowDisplayed:!0,isOpen:this.state.open,onRequestClose:this.handleRequestClose,targetRef:this.getButtonNode},c.default.createElement("p",{className:f("popup-text")},"This popup arrow has vertical attachment.")),c.default.createElement("button",{type:"button",id:"alignment-button",className:f("popup-button"),onClick:this.handleButtonClick,ref:this.setButtonNode},"")),c.default.createElement("p",null,"Choose Content Attachment:"),c.default.createElement("button",{type:"button",id:"attach-Left",value:"bottom left",onClick:this.handleAttachment},"Attach Bottom Left"),c.default.createElement("button",{type:"button",id:"attach-Center",value:"bottom center",onClick:this.handleAttachment},"Attach Bottom Center"),c.default.createElement("button",{type:"button",id:"attach-Right",value:"bottom right",onClick:this.handleAttachment},"Attach Bottom Right"))}}]),e}(c.default.Component);e.default=m}}]);
//# sourceMappingURL=406-7477f20d60c7424ecfff.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[417],{2282:function(t,e,n){t.exports={"test-popup-area":"DifferentAttachmentsPopup-test-module__test-popup-area___JYlRU","popup-text":"DifferentAttachmentsPopup-test-module__popup-text___adSGf","popup-button":"DifferentAttachmentsPopup-test-module__popup-button___1ry5j"}},2638:function(t,e,n){"use strict";var a=n(5);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n(20)),u=a(n(22)),l=a(n(23)),d=a(n(24)),s=a(n(27)),i=a(n(25)),h=a(n(0)),c=a(n(4)),r=a(n(129)),p=a(n(2282)),f=c.default.bind(p.default),m={"bottom left":"top right","bottom right":"top left"},b=function(t){function e(t){var n;return(0,o.default)(this,e),(n=(0,l.default)(this,(0,d.default)(e).call(this,t))).handleButtonClick=n.handleButtonClick.bind((0,s.default)(n)),n.handleAttachment=n.handleAttachment.bind((0,s.default)(n)),n.handleRequestClose=n.handleRequestClose.bind((0,s.default)(n)),n.setButtonNode=n.setButtonNode.bind((0,s.default)(n)),n.getButtonNode=n.getButtonNode.bind((0,s.default)(n)),n.setParentNode=n.setParentNode.bind((0,s.default)(n)),n.getParentNode=n.getParentNode.bind((0,s.default)(n)),n.state={open:!1,contentAttachment:"bottom left",targetAttachment:"top right"},n}return(0,i.default)(e,t),(0,u.default)(e,[{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"setParentNode",value:function(t){this.parentNode=t}},{key:"getParentNode",value:function(){return this.parentNode}},{key:"handleAttachment",value:function(t){this.setState({contentAttachment:t.target.value,targetAttachment:m[t.target.value],open:!0})}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){return h.default.createElement("div",null,h.default.createElement("div",{id:"test-popup-area",className:f("test-popup-area"),ref:this.setParentNode},h.default.createElement(r.default,{boundingRef:this.getParentNode,classNameArrow:"test-arrow",classNameContent:"test-content",contentAttachment:this.state.contentAttachment,targetAttachment:this.state.targetAttachment,contentHeight:"80",contentWidth:"160",isArrowDisplayed:!0,isOpen:this.state.open,onRequestClose:this.handleRequestClose,targetRef:this.getButtonNode},h.default.createElement("p",{className:f("popup-text")},"This popup arrow has vertical attachment.")),h.default.createElement("button",{type:"button",id:"alignment-button",className:f("popup-button"),onClick:this.handleButtonClick,ref:this.setButtonNode},"")),h.default.createElement("p",null,"Choose Content Attachment. It will flip the target attachment."),h.default.createElement("button",{type:"button",id:"attach-Left",value:"bottom left",onClick:this.handleAttachment},"Attach Bottom Left"),h.default.createElement("button",{type:"button",id:"attach-Right",value:"bottom right",onClick:this.handleAttachment},"Attach Bottom Right"))}}]),e}(h.default.Component);e.default=b}}]);
//# sourceMappingURL=417-ef4e58eeb50d0b7e36c7.js.map
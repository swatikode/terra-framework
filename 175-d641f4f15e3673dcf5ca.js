(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{1063:function(e,l,a){"use strict";var t=a(5);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var d=t(a(18)),o=t(a(28)),i=t(a(0)),u=t(a(227)),n=t(a(2)),r=t(a(4)),s=t(a(1073)),c=r.default.bind(s.default),_={320:320,640:640,960:960,1120:1120,1280:1280,1600:1600},m={ariaLabel:n.default.string.isRequired,header:n.default.element.isRequired,footer:n.default.element.isRequired,children:n.default.node,onRequestClose:n.default.func.isRequired,isOpen:n.default.bool,width:n.default.oneOf(Object.keys(_)),closeOnOutsideClick:n.default.bool,rootSelector:n.default.string},f=function(e){var l=e.header,a=e.footer,t=e.children,n=e.onRequestClose,r=e.isOpen,s=e.ariaLabel,m=e.width,f=e.closeOnOutsideClick,p=e.rootSelector,h=(0,o.default)(e,["header","footer","children","onRequestClose","isOpen","ariaLabel","width","closeOnOutsideClick","rootSelector"]);if(!r)return null;var g=["dialog-modal-wrapper"];return m in _?g.push("width-".concat(_[m])):g.push("width-1120"),i.default.createElement(u.default,{ariaLabel:s,role:"dialog",classNameModal:c(g),isOpen:r,onRequestClose:n,zIndex:"7000",closeOnOutsideClick:f,rootSelector:p},i.default.createElement("div",(0,d.default)({},h,{className:c("dialog-modal-inner-wrapper",h.className)}),i.default.createElement("div",{className:c("dialog-modal-container")},i.default.createElement("div",null,l),i.default.createElement("div",{className:c("dialog-modal-body")},t),i.default.createElement("div",null,a))))};f.propTypes=m,f.defaultProps={children:null,isOpen:!1,width:"1120",closeOnOutsideClick:!1,rootSelector:"#root"};var p=f;l.default=p},1073:function(e,l,a){e.exports={"dialog-modal-wrapper":"DialogModal-module__dialog-modal-wrapper___3L6PG","width-320":"DialogModal-module__width-320___1SJka","width-480":"DialogModal-module__width-480___2dOBX","width-560":"DialogModal-module__width-560___3zVv8","width-640":"DialogModal-module__width-640___2PEtl","width-800":"DialogModal-module__width-800___2rG5D","width-960":"DialogModal-module__width-960___wkRF0","width-1120":"DialogModal-module__width-1120___qNLsc","width-1280":"DialogModal-module__width-1280___1bosK","width-1440":"DialogModal-module__width-1440___1bYIL","width-1600":"DialogModal-module__width-1600___2Rb_O","width-1760":"DialogModal-module__width-1760___2xeul","width-1920":"DialogModal-module__width-1920___1Vq72","dialog-modal-inner-wrapper":"DialogModal-module__dialog-modal-inner-wrapper___3kstA","dialog-modal-container":"DialogModal-module__dialog-modal-container___10XP8","dialog-modal-header":"DialogModal-module__dialog-modal-header___vojqY","dialog-modal-footer":"DialogModal-module__dialog-modal-footer___2S67Y","dialog-modal-body":"DialogModal-module__dialog-modal-body___xtsrz"}},2261:function(e,l,a){e.exports={"selection-list":"DiaglogModalWithSelect-test-module__selection-list___mJHOR"}},2539:function(e,l,a){"use strict";var t=a(5);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var d=t(a(20)),o=t(a(22)),i=t(a(23)),u=t(a(24)),n=t(a(27)),r=t(a(25)),s=t(a(0)),c=t(a(54)),_=t(a(83)),m=t(a(232)),f=t(a(375)),p=t(a(4)),h=t(a(1063)),g=t(a(2261)),w=p.default.bind(g.default),v=function(e){function l(){var e;return(0,d.default)(this,l),(e=(0,i.default)(this,(0,u.default)(l).call(this))).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,n.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,n.default)(e)),e}return(0,r.default)(l,e),(0,o.default)(l,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){var e=["Lorem ipsum dolor sit amet, consectetur adipiscing elit. ","Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.","Integer congue feugiat ultricies."," Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.","Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi."," Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.","Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.","Nam vehicula, arcu vitae egestas porttitor,","turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit."];return s.default.createElement("div",null,s.default.createElement(h.default,{ariaLabel:"Dialog Modal",isOpen:this.state.isOpen,onRequestClose:this.handleCloseModal,header:s.default.createElement(_.default,{title:"Action Header used here",onClose:this.handleCloseModal}),footer:s.default.createElement(m.default,{start:"Footer Goes here"})},s.default.createElement("p",null,e),s.default.createElement(f.default,{placeholder:"Select a color",className:w("selection-list")},s.default.createElement(f.default.Option,{value:"blue",display:"Blue"}),s.default.createElement(f.default.Option,{value:"green",display:"Green"}),s.default.createElement(f.default.Option,{value:"purple",display:"Purple"}),s.default.createElement(f.default.Option,{value:"red",display:"Red"}),s.default.createElement(f.default.Option,{value:"violet",display:"Violet"})),s.default.createElement("p",null,e)),s.default.createElement(c.default,{id:"trigger-dialog-modal",text:"Trigger Dialog Modal",onClick:this.handleOpenModal}))}}]),l}(s.default.Component);l.default=v}}]);
//# sourceMappingURL=175-d641f4f15e3673dcf5ca.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1005:function(e,n){},1200:function(e,n,t){e.exports={"content-wrapper":"AbstractModalDocCommon-module__content-wrapper___TPyHL"}},1360:function(e,n,t){e.exports={"fixed-size":"ExampleAbstractSize-module__fixed-size___1tr2m"}},1706:function(e,n,t){"use strict";t.r(n),n.default="# Terra Abstract Modal\n\nThe abstract modal is a structural component that provides the ability to display portal'd content in a layer above the app. It consists of an overlay and an unstyled absolute positioned div in which content can be placed. The abstract modal is not intended to be consumed directly, but rather wrapped in a higher order component. Higher order components can provide the abstract modal with sizing, visual styles, and content (e.g; header, body, and actionable buttons). The abstract modals maximum size is constrained by the viewport size, so the content placed inside the modal needs to be responsive.\n\nOur recommendation for HOC is the [terra-modal-manager][1], as it provides sizing, responsive behavior, visual styles, and a disclosure stack.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-abstract-modal`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n| react-intl | ^2.9.0 |\n\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n[1]: https://github.com/cerner/terra-framework/tree/master/packages/terra-modal-manager/docs\n\n## Component Features\n* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n"},1707:function(e){e.exports=JSON.parse('{"name":"terra-abstract-modal","main":"lib/AbstractModal.js","version":"3.19.0","description":"The abstract modal is a structural component that provides the ability to display portal\'d content in a layer above the app.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-framework.git"},"keywords":["Cerner","Terra","terra-abstract-modal","Abstract","Modal","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-framework/issues"},"homepage":"https://github.com/cerner/terra-framework#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5","react-intl":"^2.9.0"},"dependencies":{"classnames":"^2.2.5","keycode-js":"^2.0.1","mutationobserver-shim":"0.3.3","prop-types":"^15.5.8","react-portal":"^4.1.2","terra-visually-hidden-text":"^2.0.0","wicg-inert":"^2.1.1"},"devDependencies":{"terra-doc-template":"^2.2.0","terra-icon":"^3.1.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio-default":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js","wdio-fusion":"cd ../.. && THEME=orion-fusion-theme npx wdio ./packages/$npm_package_name/wdio.conf.js","wdio":"npm run wdio-default && npm run wdio-fusion"}}')},1708:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport { Portal } from 'react-portal';\nimport * as KeyCode from 'keycode-js';\nimport 'mutationobserver-shim';\nimport './_contains-polyfill';\nimport './_matches-polyfill';\nimport ModalContent from './_ModalContent';\n\nconst zIndexes = ['6000', '7000', '8000', '9000'];\n\nconst propTypes = {\n  /**\n   * String that labels the modal for screen readers.\n   */\n  ariaLabel: PropTypes.string.isRequired,\n  /**\n   * Content inside the modal dialog.\n   */\n  children: PropTypes.node.isRequired,\n  /**\n   * CSS classnames that are appended to the modal.\n   */\n  classNameModal: PropTypes.string,\n  /**\n   * CSS classnames that are appended to the overlay.\n   */\n  classNameOverlay: PropTypes.string,\n  /**\n   * If set to true, the modal will close when the esc key is pressed.\n   */\n  closeOnEsc: PropTypes.bool,\n  /**\n   * If set to true, the modal will close when a mouse click is triggered outside the modal.\n   */\n  closeOnOutsideClick: PropTypes.bool,\n  /**\n   * If set to true, the modal will be fullscreen on all breakpoint sizes.\n   */\n  isFullscreen: PropTypes.bool,\n  /**\n   * If set to true, the modal will rendered as opened.\n   */\n  isOpen: PropTypes.bool.isRequired,\n  /**\n   * Callback function indicating a close condition was met, should be combined with isOpen for state management.\n   */\n  onRequestClose: PropTypes.func.isRequired,\n  /**\n   * Role attribute on the modal dialog.\n   */\n  role: PropTypes.string,\n  /**\n   * Allows assigning of root element custom data attribute for easy selecting of document base component.\n   */\n  rootSelector: PropTypes.string,\n  /**\n   * Z-Index layer to apply to the ModalContent and ModalOverlay. Valid values are the standard modal layer: '6000', and the max layer: '8000'.\n   */\n  zIndex: PropTypes.oneOf(zIndexes),\n};\n\nconst defaultProps = {\n  classNameModal: null,\n  classNameOverlay: null,\n  closeOnEsc: true,\n  closeOnOutsideClick: true,\n  isFullscreen: false,\n  role: 'dialog',\n  rootSelector: '#root',\n  zIndex: '6000',\n};\n\nclass AbstractModal extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      modalTrigger: undefined,\n    };\n    this.handleKeydown = this.handleKeydown.bind(this);\n    this.showModalDomUpdates = this.showModalDomUpdates.bind(this);\n    this.hideModalDomUpdates = this.hideModalDomUpdates.bind(this);\n    this.modalElement = React.createRef();\n  }\n\n  componentDidMount() {\n    // eslint-disable-next-line no-prototype-builtins\n    if (!Element.prototype.hasOwnProperty('inert')) {\n      // IE10 throws an error if wicg-inert is imported too early, as wicg-inert tries to set an observer on document.body which may not exist on import\n      // eslint-disable-next-line global-require\n      require('wicg-inert/dist/inert');\n    }\n    document.addEventListener('keydown', this.handleKeydown);\n\n    if (this.props.isOpen) {\n      this.showModalDomUpdates();\n    }\n  }\n\n  componentDidUpdate(prevProps) {\n    if (this.props.isOpen) {\n      if (!prevProps.isOpen) {\n        this.showModalDomUpdates();\n      }\n    } else if (prevProps.isOpen) {\n      this.hideModalDomUpdates();\n    }\n  }\n\n  componentWillUnmount() {\n    document.removeEventListener('keydown', this.handleKeydown);\n    this.hideModalDomUpdates();\n  }\n\n  showModalDomUpdates() {\n    const mainDocumentElement = document.querySelector(this.props.rootSelector);\n    // Store element that was last focused prior to modal opening\n    this.setState({ modalTrigger: document.activeElement });\n\n    if (mainDocumentElement) {\n      const inert = +mainDocumentElement.getAttribute('data-overlay-count');\n\n      if (!mainDocumentElement.hasAttribute('data-overlay-count')) {\n        mainDocumentElement.setAttribute('data-overlay-count', '1');\n        mainDocumentElement.setAttribute('inert', '');\n      } else if (mainDocumentElement && mainDocumentElement.hasAttribute('data-overlay-count')) {\n        mainDocumentElement.setAttribute('data-overlay-count', `${inert + 1}`);\n      }\n\n      // Handle focus shift for VoiceOver on iOS\n      if ('ontouchstart' in window) {\n        this.modalElement.current.querySelector('[data-terra-abstract-modal-begin]').focus();\n      } else {\n        // Shift focus to modal dialog\n        this.modalElement.current.focus();\n      }\n    }\n  }\n\n  hideModalDomUpdates() {\n    const mainDocumentElement = document.querySelector(this.props.rootSelector);\n\n    if (mainDocumentElement) {\n      const inert = +mainDocumentElement.getAttribute('data-overlay-count');\n\n      if (inert === 1) {\n        mainDocumentElement.removeAttribute('data-overlay-count');\n        mainDocumentElement.removeAttribute('inert');\n        // Ensures aria-hidden is properly cleaned up\n        setTimeout(() => mainDocumentElement.removeAttribute('aria-hidden'), 0);\n      } else if (inert && inert > 1) {\n        mainDocumentElement.setAttribute('data-overlay-count', `${inert - 1}`);\n      }\n    }\n\n    setTimeout(() => {\n      if (this.state.modalTrigger && this.state.modalTrigger.focus) {\n        // Shift focus back to element that was last focused prior to opening the modal\n        this.state.modalTrigger.focus();\n      } else {\n        // In some cases on IE, when the focus cannot be restored on the element (SVG element, for instance)\n        // that was last focused prior to opening the modal, place the focus on the HTML body element to repro\n        // the behavior noticed on other major browsers.\n        document.querySelector('body').focus();\n      }\n    }, 0); // Allows inert processing to finish before shifting focus back\n  }\n\n  handleKeydown(e) {\n    const body = document.querySelector('body');\n    if (e.keyCode === KeyCode.KEY_ESCAPE && this.props.isOpen && this.props.closeOnEsc) {\n      if (this.modalElement.current) {\n        if (e.target === this.modalElement.current || this.modalElement.current.contains(e.target) || e.target === body) {\n          this.props.onRequestClose();\n        }\n      }\n    }\n  }\n\n  render() {\n    const {\n      ariaLabel,\n      children,\n      classNameModal,\n      classNameOverlay,\n      closeOnEsc,\n      closeOnOutsideClick,\n      isFullscreen,\n      isOpen,\n      role,\n      rootSelector,\n      onRequestClose,\n      zIndex,\n      ...customProps\n    } = this.props;\n\n    if (!isOpen) {\n      return null;\n    }\n\n    return (\n      <Portal\n        isOpened={isOpen}\n      >\n        <ModalContent\n          {...customProps}\n          closeOnOutsideClick={closeOnOutsideClick}\n          ariaLabel={ariaLabel}\n          classNameModal={classNameModal}\n          classNameOverlay={classNameOverlay}\n          role={role}\n          isFullscreen={isFullscreen}\n          onRequestClose={onRequestClose}\n          zIndex={zIndex}\n          aria-modal=\"true\"\n          ref={this.modalElement}\n        >\n          {children}\n        </ModalContent>\n      </Portal>\n    );\n  }\n}\n\nAbstractModal.propTypes = propTypes;\nAbstractModal.defaultProps = defaultProps;\n\nexport default AbstractModal;\n"},1709:function(e,n,t){"use strict";var a=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var l=a(t(20)),o=a(t(22)),s=a(t(23)),r=a(t(24)),i=a(t(27)),d=a(t(25)),c=a(t(0)),u=a(t(227)),p=a(t(4)),m=a(t(1360)),h=a(t(1200)),f=p.default.bind(h.default),b=function(e){function n(){var e;return(0,l.default)(this,n),(e=(0,s.default)(this,(0,r.default)(n).call(this))).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,i.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,i.default)(e)),e}return(0,d.default)(n,e),(0,o.default)(n,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(u.default,{ariaLabel:"Default Modal",isOpen:this.state.isOpen,onRequestClose:this.handleCloseModal,classNameModal:m.default["fixed-size"]},c.default.createElement("div",{className:f("content-wrapper")},c.default.createElement("h1",null,"Default Modal"),c.default.createElement("br",null),c.default.createElement("p",null,"You can close the modal by:"),c.default.createElement("ul",null,c.default.createElement("li",null,"- Pressing the ESC key"),c.default.createElement("li",null,"- Clicking on the overlay"),c.default.createElement("li",null,"- Clicking on the close button")),c.default.createElement("br",null),c.default.createElement("p",null,"On smaller screens, the modal will take up the full screen."),c.default.createElement("p",null),c.default.createElement("br",null),c.default.createElement("button",{type:"button",onClick:this.handleCloseModal},"Close Modal"))),c.default.createElement("button",{type:"button",onClick:this.handleOpenModal},"Open Modal"))}}]),n}(c.default.Component);n.default=b},1710:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport AbstractModal from 'terra-abstract-modal';\nimport classNames from 'classnames/bind';\nimport styles from './ExampleAbstractSize.module.scss';\nimport generalStyles from './AbstractModalDocCommon.module.scss';\n\nconst cx = classNames.bind(generalStyles);\n\nclass AbstractModalIsOpen extends React.Component {\n  constructor() {\n    super();\n\n    this.state = {\n      isOpen: false,\n    };\n\n    this.handleOpenModal = this.handleOpenModal.bind(this);\n    this.handleCloseModal = this.handleCloseModal.bind(this);\n  }\n\n  handleOpenModal() {\n    this.setState({ isOpen: true });\n  }\n\n  handleCloseModal() {\n    this.setState({ isOpen: false });\n  }\n\n  render() {\n    return (\n      <div>\n        <AbstractModal\n          ariaLabel=\"Default Modal\"\n          isOpen={this.state.isOpen}\n          onRequestClose={this.handleCloseModal}\n          classNameModal={styles['fixed-size']}\n        >\n          <div className={cx('content-wrapper')}>\n            <h1>Default Modal</h1>\n            <br />\n            <p>You can close the modal by:</p>\n            <ul>\n              <li>- Pressing the ESC key</li>\n              <li>- Clicking on the overlay</li>\n              <li>- Clicking on the close button</li>\n            </ul>\n            <br />\n            <p>On smaller screens, the modal will take up the full screen.</p>\n            <p />\n            <br />\n            <button type=\"button\" onClick={this.handleCloseModal}>Close Modal</button>\n          </div>\n        </AbstractModal>\n        <button type=\"button\" onClick={this.handleOpenModal}>Open Modal</button>\n      </div>\n    );\n  }\n}\n\nexport default AbstractModalIsOpen;\n"},1711:function(e,n,t){"use strict";var a=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var l=a(t(20)),o=a(t(22)),s=a(t(23)),r=a(t(24)),i=a(t(27)),d=a(t(25)),c=a(t(0)),u=a(t(227)),p=a(t(4)),m=a(t(1360)),h=a(t(1200)),f=p.default.bind(h.default),b=function(e){function n(){var e;return(0,l.default)(this,n),(e=(0,s.default)(this,(0,r.default)(n).call(this))).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,i.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,i.default)(e)),e}return(0,d.default)(n,e),(0,o.default)(n,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(u.default,{ariaLabel:"Modal disable close on outside click",isOpen:this.state.isOpen,closeOnOutsideClick:!1,onRequestClose:this.handleCloseModal,classNameModal:m.default["fixed-size"]},c.default.createElement("div",{className:f("content-wrapper")},c.default.createElement("h1",null,"Modal disable close on outside click"),c.default.createElement("br",null),c.default.createElement("p",null,"You can close the modal by:"),c.default.createElement("ul",null,c.default.createElement("li",null,"- Pressing the ESC key"),c.default.createElement("li",null,"- Clicking on the close button")),c.default.createElement("br",null),c.default.createElement("button",{type:"button",onClick:this.handleCloseModal},"Close Modal"))),c.default.createElement("button",{type:"button",onClick:this.handleOpenModal},"Open Modal"))}}]),n}(c.default.Component);n.default=b},1712:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport AbstractModal from 'terra-abstract-modal';\nimport classNames from 'classnames/bind';\nimport styles from './ExampleAbstractSize.module.scss';\nimport generalStyles from './AbstractModalDocCommon.module.scss';\n\nconst cx = classNames.bind(generalStyles);\n\nclass AbstractModalCloseOnOutsideClick extends React.Component {\n  constructor() {\n    super();\n\n    this.state = {\n      isOpen: false,\n    };\n\n    this.handleOpenModal = this.handleOpenModal.bind(this);\n    this.handleCloseModal = this.handleCloseModal.bind(this);\n  }\n\n  handleOpenModal() {\n    this.setState({ isOpen: true });\n  }\n\n  handleCloseModal() {\n    this.setState({ isOpen: false });\n  }\n\n  render() {\n    return (\n      <div>\n        <AbstractModal\n          ariaLabel=\"Modal disable close on outside click\"\n          isOpen={this.state.isOpen}\n          closeOnOutsideClick={false}\n          onRequestClose={this.handleCloseModal}\n          classNameModal={styles['fixed-size']}\n        >\n          <div className={cx('content-wrapper')}>\n            <h1>Modal disable close on outside click</h1>\n            <br />\n            <p>You can close the modal by:</p>\n            <ul>\n              <li>- Pressing the ESC key</li>\n              <li>- Clicking on the close button</li>\n            </ul>\n            <br />\n            <button type=\"button\" onClick={this.handleCloseModal}>Close Modal</button>\n          </div>\n        </AbstractModal>\n        <button type=\"button\" onClick={this.handleOpenModal}>Open Modal</button>\n      </div>\n    );\n  }\n}\n\nexport default AbstractModalCloseOnOutsideClick;\n"},1713:function(e,n,t){"use strict";var a=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var l=a(t(20)),o=a(t(22)),s=a(t(23)),r=a(t(24)),i=a(t(27)),d=a(t(25)),c=a(t(0)),u=a(t(227)),p=a(t(4)),m=a(t(1200)),h=p.default.bind(m.default),f=function(e){function n(){var e;return(0,l.default)(this,n),(e=(0,s.default)(this,(0,r.default)(n).call(this))).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,i.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,i.default)(e)),e}return(0,d.default)(n,e),(0,o.default)(n,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(u.default,{ariaLabel:"Fullscreen Modal",isOpen:this.state.isOpen,isFullscreen:!0,onRequestClose:this.handleCloseModal},c.default.createElement("div",{className:h("content-wrapper")},c.default.createElement("h1",null,"Fullscreen Modal"),c.default.createElement("br",null),c.default.createElement("p",null,"This modal will always take up the full screen."),c.default.createElement("p",null),c.default.createElement("br",null),c.default.createElement("button",{type:"button",onClick:this.handleCloseModal},"Close Modal"))),c.default.createElement("button",{type:"button",onClick:this.handleOpenModal},"Open Modal"))}}]),n}(c.default.Component);n.default=f},1714:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport AbstractModal from 'terra-abstract-modal';\nimport classNames from 'classnames/bind';\nimport styles from './AbstractModalDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass AbstractModalIsFullscreen extends React.Component {\n  constructor() {\n    super();\n\n    this.state = {\n      isOpen: false,\n    };\n\n    this.handleOpenModal = this.handleOpenModal.bind(this);\n    this.handleCloseModal = this.handleCloseModal.bind(this);\n  }\n\n  handleOpenModal() {\n    this.setState({ isOpen: true });\n  }\n\n  handleCloseModal() {\n    this.setState({ isOpen: false });\n  }\n\n  render() {\n    return (\n      <div>\n        <AbstractModal\n          ariaLabel=\"Fullscreen Modal\"\n          isOpen={this.state.isOpen}\n          isFullscreen\n          onRequestClose={this.handleCloseModal}\n        >\n          <div className={cx('content-wrapper')}>\n            <h1>Fullscreen Modal</h1>\n            <br />\n            <p>This modal will always take up the full screen.</p>\n            <p />\n            <br />\n            <button type=\"button\" onClick={this.handleCloseModal}>Close Modal</button>\n          </div>\n        </AbstractModal>\n        <button type=\"button\" onClick={this.handleOpenModal}>Open Modal</button>\n      </div>\n    );\n  }\n}\n\nexport default AbstractModalIsFullscreen;\n"},1715:function(e,n,t){"use strict";var a=t(15),l=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=l(t(20)),s=l(t(22)),r=l(t(23)),i=l(t(24)),d=l(t(27)),c=l(t(25)),u=a(t(0)),p=l(t(227)),m=l(t(4)),h=l(t(1360)),f=l(t(1200)),b=m.default.bind(f.default),M=function(e){var n=e.handleCloseModal,t=(0,u.useRef)(null);return(0,u.useEffect)((function(){t.current.focus()}),[]),u.default.createElement("div",{id:"alert-dialog-content",className:b("content-wrapper")},u.default.createElement("h1",null,"Alert Dialog Modal"),u.default.createElement("br",null),u.default.createElement("p",null,"The abstract modal can be used to create an alert dialog modal. You can use the role,"," ",u.default.createElement("code",null,"alertdialog")," ",", to create a modal dialog that interrupts the users workflow to get a response, usually some sort of confirmation."),u.default.createElement("button",{ref:t,type:"button",onClick:n},"Confirm action"),u.default.createElement("button",{type:"button",onClick:n},"Close Modal"))},y=function(e){function n(){var e;return(0,o.default)(this,n),(e=(0,r.default)(this,(0,i.default)(n).call(this))).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,d.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,d.default)(e)),e}return(0,c.default)(n,e),(0,s.default)(n,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement(p.default,{ariaLabel:"","aria-labelledby":"alert-dialog-content",isOpen:this.state.isOpen,onRequestClose:this.handleCloseModal,closeOnOutsideClick:!1,classNameModal:h.default["fixed-size"],role:"alertdialog"},u.default.createElement(M,{handleCloseModal:this.handleCloseModal})),u.default.createElement("button",{type:"button",onClick:this.handleOpenModal},"Open Modal"))}}]),n}(u.default.Component);n.default=y},1716:function(e,n,t){"use strict";t.r(n),n.default="import React, { useRef, useEffect } from 'react';\nimport AbstractModal from 'terra-abstract-modal';\nimport classNames from 'classnames/bind';\nimport styles from './ExampleAbstractSize.module.scss';\nimport generalStyles from './AbstractModalDocCommon.module.scss';\n\nconst cx = classNames.bind(generalStyles);\n\n/* eslint-disable-next-line react/prop-types */\nconst AlertDialogContent = ({ handleCloseModal }) => {\n  const confirmBtn = useRef(null);\n\n  useEffect(() => {\n    confirmBtn.current.focus();\n  }, []);\n\n  return (\n    <div id=\"alert-dialog-content\" className={cx('content-wrapper')}>\n      <h1>Alert Dialog Modal</h1>\n      <br />\n      <p>\n        The abstract modal can be used to create an alert dialog modal. You can use the role,\n        {' '}\n        <code>alertdialog</code>\n        {' '}\n        , to create a modal dialog that interrupts the users workflow to get a response, usually some sort of confirmation.\n      </p>\n      <button ref={confirmBtn} type=\"button\" onClick={handleCloseModal}>Confirm action</button>\n      <button type=\"button\" onClick={handleCloseModal}>Close Modal</button>\n    </div>\n  );\n};\n\n/* VoiceOver will not read the content of the modal dialog if the role attribute\n is set to `alertdialog` and ariaLabel is defined */\nconst ariaLabel = '';\n\nclass AbstractModalAlertDialog extends React.Component {\n  constructor() {\n    super();\n\n    this.state = {\n      isOpen: false,\n    };\n\n    this.handleOpenModal = this.handleOpenModal.bind(this);\n    this.handleCloseModal = this.handleCloseModal.bind(this);\n  }\n\n  handleOpenModal() {\n    this.setState({ isOpen: true });\n  }\n\n  handleCloseModal() {\n    this.setState({ isOpen: false });\n  }\n\n  render() {\n    return (\n      <div>\n        <AbstractModal\n          ariaLabel={ariaLabel}\n          aria-labelledby=\"alert-dialog-content\"\n          isOpen={this.state.isOpen}\n          onRequestClose={this.handleCloseModal}\n          closeOnOutsideClick={false}\n          classNameModal={styles['fixed-size']}\n          role=\"alertdialog\"\n        >\n          <AlertDialogContent handleCloseModal={this.handleCloseModal} />\n        </AbstractModal>\n        <button type=\"button\" onClick={this.handleOpenModal}>Open Modal</button>\n      </div>\n    );\n  }\n}\n\nexport default AbstractModalAlertDialog;\n"},2291:function(e,n,t){"use strict";var a=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var l=a(t(0)),o=a(t(1004)),s=a(t(1706)),r=t(1707),i=a(t(1708)),d=a(t(1709)),c=a(t(1710)),u=a(t(1711)),p=a(t(1712)),m=a(t(1713)),h=a(t(1714)),f=a(t(1715)),b=a(t(1716)),M=function(){return l.default.createElement(o.default,{packageName:r.name,readme:s.default,srcPath:"https://github.com/cerner/terra-framework/tree/master/packages/".concat(r.name),examples:[{title:"Default Modal",example:l.default.createElement(d.default,null),source:c.default},{title:"Disable closing the modal when clicking on the overlay",example:l.default.createElement(u.default,null),source:p.default},{title:"Fullscreen Modal",example:l.default.createElement(m.default,null),source:h.default},{title:"Alert Dialog Modal",example:l.default.createElement(f.default,null),source:b.default}],propsTables:[{componentName:"Modal",componentSrc:i.default}]})};n.default=M}}]);
//# sourceMappingURL=89-6457d5d7fae75dec071d.js.map
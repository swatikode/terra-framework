(window.webpackJsonp=window.webpackJsonp||[]).push([[71,149,150,187,188,189,190,191,192,193],{1005:function(e,n){},1019:function(e,n,l){"use strict";var t=l(5);Object.defineProperty(n,"__esModule",{value:!0}),n.SlidePanelPositions=n.default=void 0;var a=t(l(18)),i=t(l(28)),o=t(l(20)),r=t(l(22)),s=t(l(23)),d=t(l(24)),u=t(l(27)),p=t(l(25)),m=t(l(0)),c=t(l(2)),f=t(l(4)),P=t(l(1030)),h=f.default.bind(P.default),S={START:"start",END:"end"};n.SlidePanelPositions=S;var v={panelAriaLabel:c.default.string,mainAriaLabel:c.default.string,mainContent:c.default.node,panelContent:c.default.node,panelBehavior:c.default.oneOf(["overlay","squish"]),panelPosition:c.default.oneOf(["start","end"]),panelSize:c.default.oneOf(["small","large"]),isFullscreen:c.default.bool,isOpen:c.default.bool,fill:c.default.bool},E={panelBehavior:"overlay",panelPosition:S.END,panelSize:"small"},b=function(e){function n(e){var l;return(0,o.default)(this,n),(l=(0,s.default)(this,(0,d.default)(n).call(this,e))).setPanelNode=l.setPanelNode.bind((0,u.default)(l)),l.mainNode=m.default.createRef(),l}return(0,p.default)(n,e),(0,r.default)(n,[{key:"componentDidUpdate",value:function(e){this.props.isOpen&&this.props.isOpen!==e.isOpen?this.panelNode.focus():this.props.isOpen||this.props.isOpen===e.isOpen||this.mainNode.current.focus()}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"render",value:function(){var e=this.props,n=e.panelAriaLabel,l=e.mainAriaLabel,t=e.mainContent,o=e.panelContent,r=e.panelBehavior,s=e.panelPosition,d=e.panelSize,u=e.isFullscreen,p=e.isOpen,c=e.fill,f=(0,i.default)(e,["panelAriaLabel","mainAriaLabel","mainContent","panelContent","panelBehavior","panelPosition","panelSize","isFullscreen","isOpen","fill"]),P=h(["slide-panel",{"is-open":p},{"is-fullscreen":u},{fill:c},f.className]),v=m.default.createElement("div",{className:h(["panel"]),tabIndex:"-1","aria-label":n,"aria-hidden":p?"false":"true",ref:this.setPanelNode},o),E=m.default.createElement("div",{className:h("main"),tabIndex:"-1","aria-label":l,ref:this.mainNode},t),b=s===S.START?m.default.createElement(m.default.Fragment,null,v,E):m.default.createElement(m.default.Fragment,null,E,v);return m.default.createElement("div",(0,a.default)({},f,{className:P,"data-slide-panel-panel-behavior":r,"data-slide-panel-panel-position":s,"data-slide-panel-panel-size":d}),b)}}]),n}(m.default.Component);b.propTypes=v,b.defaultProps=E;var g=b;n.default=g},1030:function(e,n,l){e.exports={"slide-panel":"SlidePanel-module__slide-panel___16_Ez",main:"SlidePanel-module__main___Qtxtf",panel:"SlidePanel-module__panel___2NV-G","is-open":"SlidePanel-module__is-open___IAbgR","is-fullscreen":"SlidePanel-module__is-fullscreen___29Ymh",fill:"SlidePanel-module__fill___11BRG"}},1035:function(e,n,l){"use strict";var t=l(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t(l(0)),i=function(){return a.default.createElement("div",null,a.default.createElement("h3",null,"Main Content"),a.default.createElement("p",null,"Lorem ipsum dolor sit amet, mea te odio ludus adipiscing. Cu oporteat temporibus nam, aperiam adipisci mel et, mei no oportere salutatus. Iudico lucilius ei pri. Eleifend philosophia et ius."),a.default.createElement("p",null,"Id elit congue copiosae eam, elitr laboramus mediocritatem nam in, decore propriae et usu. An vix insolens dignissim, novum gloriatur delicatissimi mei ne, ne ancillae tincidunt nec. Iusto expetenda scriptorem mei cu, ne per prima nihil utinam. Cibo ocurreret no nam, nec euismod vivendum te."),a.default.createElement("ul",null,a.default.createElement("li",null,"Item 1"),a.default.createElement("li",null,"Item 2"),a.default.createElement("li",null,"Item 3"),a.default.createElement("li",null,"Item 4"),a.default.createElement("li",null,"Item 5"),a.default.createElement("li",null,"Item 6"),a.default.createElement("li",null,"Item 7"),a.default.createElement("li",null,"Item 8"),a.default.createElement("li",null,"Item 9"),a.default.createElement("li",null,"Item 10"),a.default.createElement("li",null,"Item 11"),a.default.createElement("li",null,"Item 12"),a.default.createElement("li",null,"Item 13"),a.default.createElement("li",null,"Item 14"),a.default.createElement("li",null,"Item 15")))};n.default=i},1036:function(e,n,l){"use strict";var t=l(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t(l(0)),i=function(){return a.default.createElement("div",null,a.default.createElement("h3",null,"Panel Content"),a.default.createElement("p",null,"Lorem ipsum dolor sit amet, mea te odio ludus adipiscing. Cu oporteat temporibus nam, aperiam adipisci mel et, mei no oportere salutatus. Iudico lucilius ei pri. Eleifend philosophia et ius."),a.default.createElement("p",null,"Id elit congue copiosae eam, elitr laboramus mediocritatem nam in, decore propriae et usu. An vix insolens dignissim, novum gloriatur delicatissimi mei ne, ne ancillae tincidunt nec. Iusto expetenda scriptorem mei cu, ne per prima nihil utinam. Cibo ocurreret no nam, nec euismod vivendum te."),a.default.createElement("ul",null,a.default.createElement("li",null,"Item 1"),a.default.createElement("li",null,"Item 2"),a.default.createElement("li",null,"Item 3"),a.default.createElement("li",null,"Item 4"),a.default.createElement("li",null,"Item 5"),a.default.createElement("li",null,"Item 6"),a.default.createElement("li",null,"Item 7"),a.default.createElement("li",null,"Item 8"),a.default.createElement("li",null,"Item 9"),a.default.createElement("li",null,"Item 10"),a.default.createElement("li",null,"Item 11"),a.default.createElement("li",null,"Item 12"),a.default.createElement("li",null,"Item 13"),a.default.createElement("li",null,"Item 14"),a.default.createElement("li",null,"Item 15")))};n.default=i},1107:function(e,n,l){e.exports={"content-wrapper":"SlidePanelDocCommon-test-module__content-wrapper___1FDjp","content-wrapper-large":"SlidePanelDocCommon-test-module__content-wrapper-large___9DcFW","main-content":"SlidePanelDocCommon-test-module__main-content___25hpF","panel-content":"SlidePanelDocCommon-test-module__panel-content___3OmYU","content-wrapper-toggle":"SlidePanelDocCommon-test-module__content-wrapper-toggle___1Zi-9",button:"SlidePanelDocCommon-test-module__button___3r3Sh"}},1413:function(e){e.exports=JSON.parse('{"name":"terra-slide-panel","main":"lib/SlidePanel.js","version":"3.21.0","description":"The Terra SlidePanel component is a progressive disclosure mechanism that allows additional content to be shown and hidden in a variety of ways.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-framework.git"},"keywords":["Cerner","Terra","Framework","terra-slide-panel","SlidePanel","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-framework/issues"},"homepage":"https://github.com/cerner/terra-framework#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8"},"devDependencies":{"terra-doc-template":"^2.2.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio-default":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js","wdio-fusion":"cd ../.. && THEME=orion-fusion-theme npx wdio ./packages/$npm_package_name/wdio.conf.js","wdio":"npm run wdio-default && npm run wdio-fusion"}}')},1524:function(e,n,l){"use strict";var t=l(15),a=l(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(l(0)),o=t(l(1019)),r=a(l(1035)),s=a(l(1036)),d=function(){return i.default.createElement(o.default,{mainContent:i.default.createElement(r.default,null),panelContent:i.default.createElement(s.default,null),panelBehavior:"overlay",panelPosition:o.SlidePanelPositions.END,panelSize:"small",isOpen:!0})};n.default=d},1525:function(e,n,l){"use strict";var t=l(15),a=l(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(l(0)),o=t(l(1019)),r=a(l(1035)),s=a(l(1036)),d=function(){return i.default.createElement(o.default,{mainContent:i.default.createElement(r.default,null),panelContent:i.default.createElement(s.default,null),panelBehavior:"squish",panelPosition:o.SlidePanelPositions.END,panelSize:"small",isOpen:!0})};n.default=d},1526:function(e,n,l){"use strict";var t=l(15),a=l(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(l(0)),o=t(l(1019)),r=a(l(1035)),s=a(l(1036)),d=function(){return i.default.createElement(o.default,{mainContent:i.default.createElement(r.default,null),panelContent:i.default.createElement(s.default,null),panelBehavior:"overlay",panelPosition:o.SlidePanelPositions.START,panelSize:"small",isOpen:!0})};n.default=d},1527:function(e,n,l){"use strict";var t=l(15),a=l(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(l(0)),o=t(l(1019)),r=a(l(1035)),s=a(l(1036)),d=function(){return i.default.createElement(o.default,{mainContent:i.default.createElement(r.default,null),panelContent:i.default.createElement(s.default,null),panelBehavior:"overlay",panelPosition:o.SlidePanelPositions.END,panelSize:"small",isOpen:!0})};n.default=d},1528:function(e,n,l){"use strict";var t=l(15),a=l(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(l(0)),o=t(l(1019)),r=a(l(1035)),s=a(l(1036)),d=function(){return i.default.createElement(o.default,{mainContent:i.default.createElement(r.default,null),panelContent:i.default.createElement(s.default,null),panelBehavior:"overlay",panelPosition:o.SlidePanelPositions.END,panelSize:"small",isOpen:!0})};n.default=d},1529:function(e,n,l){"use strict";var t=l(15),a=l(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(l(0)),o=t(l(1019)),r=a(l(1035)),s=a(l(1036)),d=function(){return i.default.createElement(o.default,{mainContent:i.default.createElement(r.default,null),panelContent:i.default.createElement(s.default,null),panelBehavior:"overlay",panelPosition:o.SlidePanelPositions.END,panelSize:"large",isOpen:!0})};n.default=d},1530:function(e,n,l){"use strict";var t=l(15),a=l(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(l(0)),o=t(l(1019)),r=a(l(1035)),s=a(l(1036)),d=function(){return i.default.createElement(o.default,{mainContent:i.default.createElement(r.default,null),panelContent:i.default.createElement(s.default,null),panelBehavior:"overlay",panelPosition:o.SlidePanelPositions.END,panelSize:"small",isOpen:!0,isFullscreen:!0})};n.default=d},1531:function(e,n,l){"use strict";var t=l(15),a=l(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(l(0)),o=a(l(4)),r=t(l(1019)),s=a(l(1035)),d=a(l(1036)),u=a(l(1107)),p=o.default.bind(u.default),m=function(){return i.default.createElement("div",{className:p("content-wrapper")},i.default.createElement(r.default,{mainContent:i.default.createElement(s.default,null),panelContent:i.default.createElement(d.default,null),panelBehavior:"squish",panelPosition:r.SlidePanelPositions.END,panelSize:"small",isOpen:!0,fill:!0}))};n.default=m},1532:function(e,n,l){"use strict";var t=l(15),a=l(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(l(0)),o=a(l(4)),r=t(l(1019)),s=a(l(1035)),d=a(l(1036)),u=a(l(1107)),p=o.default.bind(u.default),m=function(){return i.default.createElement("div",{className:p("content-wrapper")},i.default.createElement(r.default,{mainContent:i.default.createElement(s.default,null),panelContent:i.default.createElement(d.default,null),panelBehavior:"squish",panelPosition:r.SlidePanelPositions.END,panelSize:"small",isOpen:!0}))};n.default=m},2181:function(e,n,l){"use strict";l.r(n),n.default="# Terra Slide Panel\n\nThe Terra SlidePanel component is a progressive disclosure mechanism that allows additional content to be shown and hidden in a variety of ways.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-slide-panel`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Component Features\n* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n"},2182:function(e,n,l){"use strict";l.r(n),n.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport styles from './SlidePanel.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst SlidePanelPositions = {\n  START: 'start',\n  END: 'end',\n};\n\nconst propTypes = {\n  /**\n   * String that labels the Panel content area for screen readers.\n   */\n  panelAriaLabel: PropTypes.string,\n\n  /**\n   * String that labels the Main content area for screen readers.\n   */\n  mainAriaLabel: PropTypes.string,\n\n  /**\n   * The component to display in the main content area.\n   */\n  mainContent: PropTypes.node,\n\n  /**\n   * The component to display in the panel content area.\n   */\n  panelContent: PropTypes.node,\n\n  /**\n   * The style of panel presentation. One of `overlay`, `squish`.\n   */\n  panelBehavior: PropTypes.oneOf(['overlay', 'squish']),\n\n  /**\n   * The position at which the panel will be displayed. This property honors the current direction setting. One of `start`, `end`.\n   */\n  panelPosition: PropTypes.oneOf(['start', 'end']),\n\n  /**\n   * The size at which the panel will be displayed. One of `small`, `large`.\n   */\n  panelSize: PropTypes.oneOf(['small', 'large']),\n\n  /**\n   * Whether or not, when open, the panel should be displayed with the full width of the SlidePanel.\n   */\n  isFullscreen: PropTypes.bool,\n\n  /**\n   * Whether or not the panel should be displayed.\n   */\n  isOpen: PropTypes.bool,\n\n  /**\n   * Whether or not the SlidePanel should be sized relative to its parent container.\n   */\n  fill: PropTypes.bool,\n};\n\nconst defaultProps = {\n  panelBehavior: 'overlay',\n  panelPosition: SlidePanelPositions.END,\n  panelSize: 'small',\n};\n\nclass SlidePanel extends React.Component {\n  constructor(props) {\n    super(props);\n    this.setPanelNode = this.setPanelNode.bind(this);\n    this.mainNode = React.createRef();\n  }\n\n  componentDidUpdate(prevProps) {\n    if (this.props.isOpen && this.props.isOpen !== prevProps.isOpen) {\n      this.panelNode.focus();\n    } else if (!this.props.isOpen && this.props.isOpen !== prevProps.isOpen) {\n      this.mainNode.current.focus();\n    }\n  }\n\n  setPanelNode(node) {\n    this.panelNode = node;\n  }\n\n  render() {\n    const {\n      panelAriaLabel,\n      mainAriaLabel,\n      mainContent,\n      panelContent,\n      panelBehavior,\n      panelPosition,\n      panelSize,\n      isFullscreen,\n      isOpen,\n      fill,\n      ...customProps\n    } = this.props;\n    const slidePanelClassNames = cx([\n      'slide-panel',\n      { 'is-open': isOpen },\n      { 'is-fullscreen': isFullscreen },\n      { fill },\n      customProps.className,\n    ]);\n\n    const panelDiv = (\n      <div className={cx(['panel'])} tabIndex=\"-1\" aria-label={panelAriaLabel} aria-hidden={!isOpen ? 'true' : 'false'} ref={this.setPanelNode}>\n        {panelContent}\n      </div>\n    );\n\n    const mainDiv = (\n      <div className={cx('main')} tabIndex=\"-1\" aria-label={mainAriaLabel} ref={this.mainNode}>\n        {mainContent}\n      </div>\n    );\n\n    const content = (panelPosition === SlidePanelPositions.START) ? (\n      <React.Fragment>\n        {panelDiv}\n        {mainDiv}\n      </React.Fragment>\n    ) : (\n      <React.Fragment>\n        {mainDiv}\n        {panelDiv}\n      </React.Fragment>\n    );\n\n    return (\n      <div\n        {...customProps}\n        className={slidePanelClassNames}\n        data-slide-panel-panel-behavior={panelBehavior}\n        data-slide-panel-panel-position={panelPosition}\n        data-slide-panel-panel-size={panelSize}\n      >\n        {content}\n      </div>\n    );\n  }\n}\n\nSlidePanel.propTypes = propTypes;\nSlidePanel.defaultProps = defaultProps;\n\nexport default SlidePanel;\nexport { SlidePanelPositions };\n"},2183:function(e,n,l){"use strict";l.r(n),n.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport SlidePanel from 'terra-slide-panel';\nimport classNames from 'classnames/bind';\nimport styles from './DefaultSlidePanel.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst mainContentForSlidePanel = togglePanelHandler => (\n  <div>\n    <header className={cx('header-content')}>\n      <h3>Main Content</h3>\n      <button id=\"mainToggleBtn\" type=\"button\" onClick={togglePanelHandler} className={cx('custom-button')}>Main Toggle Panel</button>\n    </header>\n    <div className={cx('content-wrapper')}>\n      <p>\n        This is the main content area of the slide panel.\n        The overall height of the SlidePanel is determined by\n        the intrinsic height of the content in this container.\n      </p>\n      <p>\n        {'Focus is moved to the toggle button in the panel container when the panel is opened via the componentDidUpdate lifecycle hook in '}\n        <a href=\"https://github.com/cerner/terra-framework/blob/master/packages/terra-slide-panel/src/terra-dev-site/doc/example/DefaultSlidePanel.jsx\">the example code</a>\n        {'.'}\n      </p>\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n        <li>Item 5</li>\n        <li>Item 6</li>\n        <li>Item 7</li>\n        <li>Item 8</li>\n      </ul>\n    </div>\n  </div>\n);\n\nconst panelContentForSlidePanel = (togglePanelHandler, toggleFullscreenHandler) => (\n  <div>\n    <header className={cx('header-content')}>\n      <h3 className={cx('heading')}>Panel Content</h3>\n      <button id=\"panelToggleBtn\" type=\"button\" onClick={togglePanelHandler} className={cx('extension-button')}>Panel Toggle Panel</button>\n      <button type=\"button\" onClick={toggleFullscreenHandler} className={cx('extension-button')}>Toggle Fullscreen</button>\n    </header>\n    <div className={cx('content-wrapper')}>\n      <p>This is the panel content area of the slide panel.</p>\n      <p>\n        {'Focus is moved to the toggle button in the main container when the panel is closed via the componentDidUpdate lifecycle hook in '}\n        <a href=\"https://github.com/cerner/terra-framework/blob/master/packages/terra-slide-panel/src/terra-dev-site/doc/example/DefaultSlidePanel.jsx\">the example code</a>\n        {'.'}\n      </p>\n      <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n        <li>Item 4</li>\n        <li>Item 5</li>\n        <li>Item 6</li>\n        <li>Item 7</li>\n        <li>Item 8</li>\n        <li>Item 9</li>\n        <li>Item 10</li>\n        <li>Item 11</li>\n        <li>Item 12</li>\n        <li>Item 13</li>\n        <li>Item 14</li>\n        <li>Item 15</li>\n      </ul>\n    </div>\n  </div>\n);\n\nclass DefaultSlidePanel extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      panelIsOpen: props.isOpen || false,\n      panelIsFullscreen: props.isFullscreen || false,\n    };\n\n    this.handlePanelToggle = this.handlePanelToggle.bind(this);\n    this.handleFullscreenToggle = this.handleFullscreenToggle.bind(this);\n  }\n\n  handlePanelToggle() {\n    this.setState(prevState => ({\n      panelIsOpen: !prevState.panelIsOpen,\n      panelIsFullscreen: prevState.panelIsOpen,\n    }));\n  }\n\n  handleFullscreenToggle() {\n    const newState = this.state;\n\n    newState.panelIsFullscreen = !this.state.panelIsFullscreen;\n\n    this.setState(newState);\n  }\n\n  render() {\n    return (\n      <div className={cx('container')}>\n        <div className={cx('container-attributes')}>\n          <SlidePanel\n            mainContent={mainContentForSlidePanel(this.handlePanelToggle)}\n            panelContent={panelContentForSlidePanel(this.handlePanelToggle, this.handleFullscreenToggle)}\n            panelSize={this.props.panelSize}\n            panelBehavior={this.props.panelBehavior}\n            panelPosition={this.props.panelPosition}\n            isOpen={this.state.panelIsOpen}\n            isFullscreen={this.state.panelIsFullscreen}\n            fill={this.props.fill}\n          />\n        </div>\n      </div>\n    );\n  }\n}\n\nDefaultSlidePanel.propTypes = {\n  panelBehavior: PropTypes.oneOf(['overlay', 'squish']),\n  panelPosition: PropTypes.oneOf(['start', 'end']),\n  panelSize: PropTypes.oneOf(['small', 'large']),\n  isFullscreen: PropTypes.bool,\n  isOpen: PropTypes.bool,\n  fill: PropTypes.bool,\n};\n\nexport default DefaultSlidePanel;\n"},2184:function(e,n,l){"use strict";l.r(n),n.default="import React from 'react';\nimport SlidePanel, { SlidePanelPositions } from '../../../SlidePanel';\nimport SlidePanelMainContent from '../common/SlidePanelMainContent';\nimport SlidePanelPanelContent from '../common/SlidePanelPanelContent';\n\nconst SlidePanelOverlay = () => (\n  <SlidePanel\n    mainContent={<SlidePanelMainContent />}\n    panelContent={<SlidePanelPanelContent />}\n    panelBehavior=\"overlay\"\n    panelPosition={SlidePanelPositions.END}\n    panelSize=\"small\"\n    isOpen\n  />\n);\n\nexport default SlidePanelOverlay;\n"},2185:function(e,n,l){"use strict";l.r(n),n.default="import React from 'react';\nimport SlidePanel, { SlidePanelPositions } from '../../../SlidePanel';\nimport SlidePanelMainContent from '../common/SlidePanelMainContent';\nimport SlidePanelPanelContent from '../common/SlidePanelPanelContent';\n\nconst SlidePanelSquish = () => (\n  <SlidePanel\n    mainContent={<SlidePanelMainContent />}\n    panelContent={<SlidePanelPanelContent />}\n    panelBehavior=\"squish\"\n    panelPosition={SlidePanelPositions.END}\n    panelSize=\"small\"\n    isOpen\n  />\n);\n\nexport default SlidePanelSquish;\n"},2186:function(e,n,l){"use strict";l.r(n),n.default="import React from 'react';\nimport SlidePanel, { SlidePanelPositions } from '../../../SlidePanel';\nimport SlidePanelMainContent from '../common/SlidePanelMainContent';\nimport SlidePanelPanelContent from '../common/SlidePanelPanelContent';\n\nconst SlidePanelStart = () => (\n  <SlidePanel\n    mainContent={<SlidePanelMainContent />}\n    panelContent={<SlidePanelPanelContent />}\n    panelBehavior=\"overlay\"\n    panelPosition={SlidePanelPositions.START}\n    panelSize=\"small\"\n    isOpen\n  />\n);\n\nexport default SlidePanelStart;\n"},2187:function(e,n,l){"use strict";l.r(n),n.default="import React from 'react';\nimport SlidePanel, { SlidePanelPositions } from '../../../SlidePanel';\nimport SlidePanelMainContent from '../common/SlidePanelMainContent';\nimport SlidePanelPanelContent from '../common/SlidePanelPanelContent';\n\nconst SlidePanelEnd = () => (\n  <SlidePanel\n    mainContent={<SlidePanelMainContent />}\n    panelContent={<SlidePanelPanelContent />}\n    panelBehavior=\"overlay\"\n    panelPosition={SlidePanelPositions.END}\n    panelSize=\"small\"\n    isOpen\n  />\n);\n\nexport default SlidePanelEnd;\n"},2188:function(e,n,l){"use strict";l.r(n),n.default="import React from 'react';\nimport SlidePanel, { SlidePanelPositions } from '../../../SlidePanel';\nimport SlidePanelMainContent from '../common/SlidePanelMainContent';\nimport SlidePanelPanelContent from '../common/SlidePanelPanelContent';\n\nconst SlidePanelSmall = () => (\n  <SlidePanel\n    mainContent={<SlidePanelMainContent />}\n    panelContent={<SlidePanelPanelContent />}\n    panelBehavior=\"overlay\"\n    panelPosition={SlidePanelPositions.END}\n    panelSize=\"small\"\n    isOpen\n  />\n);\n\nexport default SlidePanelSmall;\n"},2189:function(e,n,l){"use strict";l.r(n),n.default="import React from 'react';\nimport SlidePanel, { SlidePanelPositions } from '../../../SlidePanel';\nimport SlidePanelMainContent from '../common/SlidePanelMainContent';\nimport SlidePanelPanelContent from '../common/SlidePanelPanelContent';\n\nconst SlidePanelLarge = () => (\n  <SlidePanel\n    mainContent={<SlidePanelMainContent />}\n    panelContent={<SlidePanelPanelContent />}\n    panelBehavior=\"overlay\"\n    panelPosition={SlidePanelPositions.END}\n    panelSize=\"large\"\n    isOpen\n  />\n);\n\nexport default SlidePanelLarge;\n"},2190:function(e,n,l){"use strict";l.r(n),n.default="import React from 'react';\nimport SlidePanel, { SlidePanelPositions } from '../../../SlidePanel';\nimport SlidePanelMainContent from '../common/SlidePanelMainContent';\nimport SlidePanelPanelContent from '../common/SlidePanelPanelContent';\n\nconst SlidePanelFullscreen = () => (\n  <SlidePanel\n    mainContent={<SlidePanelMainContent />}\n    panelContent={<SlidePanelPanelContent />}\n    panelBehavior=\"overlay\"\n    panelPosition={SlidePanelPositions.END}\n    panelSize=\"small\"\n    isOpen\n    isFullscreen\n  />\n);\n\nexport default SlidePanelFullscreen;\n"},2191:function(e,n,l){"use strict";l.r(n),n.default="import React from 'react';\nimport classNames from 'classnames/bind';\nimport SlidePanel, { SlidePanelPositions } from '../../../SlidePanel';\nimport SlidePanelMainContent from '../common/SlidePanelMainContent';\nimport SlidePanelPanelContent from '../common/SlidePanelPanelContent';\nimport styles from './SlidePanelDocCommon.test.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst SlidePanelFill = () => (\n  <div className={cx('content-wrapper')}>\n    <SlidePanel\n      mainContent={<SlidePanelMainContent />}\n      panelContent={<SlidePanelPanelContent />}\n      panelBehavior=\"squish\"\n      panelPosition={SlidePanelPositions.END}\n      panelSize=\"small\"\n      isOpen\n      fill\n    />\n  </div>\n);\n\nexport default SlidePanelFill;\n"},2192:function(e,n,l){"use strict";l.r(n),n.default="import React from 'react';\nimport classNames from 'classnames/bind';\nimport SlidePanel, { SlidePanelPositions } from '../../../SlidePanel';\nimport SlidePanelMainContent from '../common/SlidePanelMainContent';\nimport SlidePanelPanelContent from '../common/SlidePanelPanelContent';\nimport styles from './SlidePanelDocCommon.test.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst SlidePanelNoFill = () => (\n  <div className={cx('content-wrapper')}>\n    <SlidePanel\n      mainContent={<SlidePanelMainContent />}\n      panelContent={<SlidePanelPanelContent />}\n      panelBehavior=\"squish\"\n      panelPosition={SlidePanelPositions.END}\n      panelSize=\"small\"\n      isOpen\n    />\n  </div>\n);\n\nexport default SlidePanelNoFill;\n"},2193:function(e,n,l){"use strict";var t=l(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t(l(20)),i=t(l(22)),o=t(l(23)),r=t(l(24)),s=t(l(27)),d=t(l(25)),u=t(l(0)),p=t(l(2)),m=t(l(1019)),c=t(l(4)),f=t(l(2194)),P=c.default.bind(f.default),h=function(e,n){return u.default.createElement("div",null,u.default.createElement("header",{className:P("header-content")},u.default.createElement("h3",{className:P("heading")},"Panel Content"),u.default.createElement("button",{id:"panelToggleBtn",type:"button",onClick:e,className:P("extension-button")},"Panel Toggle Panel"),u.default.createElement("button",{type:"button",onClick:n,className:P("extension-button")},"Toggle Fullscreen")),u.default.createElement("div",{className:P("content-wrapper")},u.default.createElement("p",null,"This is the panel content area of the slide panel."),u.default.createElement("p",null,"Focus is moved to the toggle button in the main container when the panel is closed via the componentDidUpdate lifecycle hook in ",u.default.createElement("a",{href:"https://github.com/cerner/terra-framework/blob/master/packages/terra-slide-panel/src/terra-dev-site/doc/example/DefaultSlidePanel.jsx"},"the example code"),"."),u.default.createElement("ul",null,u.default.createElement("li",null,"Item 1"),u.default.createElement("li",null,"Item 2"),u.default.createElement("li",null,"Item 3"),u.default.createElement("li",null,"Item 4"),u.default.createElement("li",null,"Item 5"),u.default.createElement("li",null,"Item 6"),u.default.createElement("li",null,"Item 7"),u.default.createElement("li",null,"Item 8"),u.default.createElement("li",null,"Item 9"),u.default.createElement("li",null,"Item 10"),u.default.createElement("li",null,"Item 11"),u.default.createElement("li",null,"Item 12"),u.default.createElement("li",null,"Item 13"),u.default.createElement("li",null,"Item 14"),u.default.createElement("li",null,"Item 15"))))},S=function(e){function n(e){var l;return(0,a.default)(this,n),(l=(0,o.default)(this,(0,r.default)(n).call(this,e))).state={panelIsOpen:e.isOpen||!1,panelIsFullscreen:e.isFullscreen||!1},l.handlePanelToggle=l.handlePanelToggle.bind((0,s.default)(l)),l.handleFullscreenToggle=l.handleFullscreenToggle.bind((0,s.default)(l)),l}return(0,d.default)(n,e),(0,i.default)(n,[{key:"handlePanelToggle",value:function(){this.setState((function(e){return{panelIsOpen:!e.panelIsOpen,panelIsFullscreen:e.panelIsOpen}}))}},{key:"handleFullscreenToggle",value:function(){var e=this.state;e.panelIsFullscreen=!this.state.panelIsFullscreen,this.setState(e)}},{key:"render",value:function(){return u.default.createElement("div",{className:P("container")},u.default.createElement("div",{className:P("container-attributes")},u.default.createElement(m.default,{mainContent:(e=this.handlePanelToggle,u.default.createElement("div",null,u.default.createElement("header",{className:P("header-content")},u.default.createElement("h3",null,"Main Content"),u.default.createElement("button",{id:"mainToggleBtn",type:"button",onClick:e,className:P("custom-button")},"Main Toggle Panel")),u.default.createElement("div",{className:P("content-wrapper")},u.default.createElement("p",null,"This is the main content area of the slide panel. The overall height of the SlidePanel is determined by the intrinsic height of the content in this container."),u.default.createElement("p",null,"Focus is moved to the toggle button in the panel container when the panel is opened via the componentDidUpdate lifecycle hook in ",u.default.createElement("a",{href:"https://github.com/cerner/terra-framework/blob/master/packages/terra-slide-panel/src/terra-dev-site/doc/example/DefaultSlidePanel.jsx"},"the example code"),"."),u.default.createElement("ul",null,u.default.createElement("li",null,"Item 1"),u.default.createElement("li",null,"Item 2"),u.default.createElement("li",null,"Item 3"),u.default.createElement("li",null,"Item 4"),u.default.createElement("li",null,"Item 5"),u.default.createElement("li",null,"Item 6"),u.default.createElement("li",null,"Item 7"),u.default.createElement("li",null,"Item 8"))))),panelContent:h(this.handlePanelToggle,this.handleFullscreenToggle),panelSize:this.props.panelSize,panelBehavior:this.props.panelBehavior,panelPosition:this.props.panelPosition,isOpen:this.state.panelIsOpen,isFullscreen:this.state.panelIsFullscreen,fill:this.props.fill})));var e}}]),n}(u.default.Component);S.propTypes={panelBehavior:p.default.oneOf(["overlay","squish"]),panelPosition:p.default.oneOf(["start","end"]),panelSize:p.default.oneOf(["small","large"]),isFullscreen:p.default.bool,isOpen:p.default.bool,fill:p.default.bool};var v=S;n.default=v},2194:function(e,n,l){e.exports={"header-content":"DefaultSlidePanel-module__header-content___3HdXY","content-wrapper":"DefaultSlidePanel-module__content-wrapper___3oxAE","custom-button":"DefaultSlidePanel-module__custom-button___8i6uM",container:"DefaultSlidePanel-module__container___3AaRk","container-attributes":"DefaultSlidePanel-module__container-attributes___2Mkj0"}},2384:function(e,n,l){"use strict";var t=l(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t(l(0)),i=t(l(1004)),o=l(1413),r=t(l(2181)),s=t(l(2182)),d=t(l(2183)),u=t(l(2184)),p=t(l(2185)),m=t(l(2186)),c=t(l(2187)),f=t(l(2188)),P=t(l(2189)),h=t(l(2190)),S=t(l(2191)),v=t(l(2192)),E=t(l(2193)),b=t(l(1524)),g=t(l(1525)),C=t(l(1526)),_=t(l(1527)),y=t(l(1528)),I=t(l(1529)),T=t(l(1530)),N=t(l(1531)),O=t(l(1532)),x=function(){return a.default.createElement(i.default,{packageName:o.name,readme:r.default,srcPath:"https://github.com/cerner/terra-framework/tree/master/packages/".concat(o.name),examples:[{title:"SlidePanel - Controlled Demo",example:a.default.createElement(E.default,null),source:d.default},{title:"SlidePanel - Behavior - Overlay",example:a.default.createElement(b.default,null),source:u.default},{title:"SlidePanel - Behavior - Squish",example:a.default.createElement(g.default,null),source:p.default},{title:"SlidePanel - Position - Start",example:a.default.createElement(C.default,null),source:m.default},{title:"SlidePanel - Position - End",example:a.default.createElement(_.default,null),source:c.default},{title:"SlidePanel - Size - Small",example:a.default.createElement(y.default,null),source:f.default},{title:"SlidePanel - Size - Large",example:a.default.createElement(I.default,null),source:P.default},{title:"SlidePanel - Fullscreen",example:a.default.createElement(T.default,null),source:h.default},{title:"SlidePanel - Fill",example:a.default.createElement(N.default,null),source:S.default},{title:"SlidePanel - Fill Off",example:a.default.createElement(O.default,null),source:v.default}],propsTables:[{componentSrc:s.default}]})};n.default=x}}]);
//# sourceMappingURL=71-c87a53eb907f285f3266.js.map
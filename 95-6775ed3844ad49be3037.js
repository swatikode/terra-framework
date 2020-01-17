(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{1005:function(e,t){},1044:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(18)),o=a(n(28)),l=a(n(0)),s=a(n(2)),i=a(n(4)),c=a(n(1045)),p=i.default.bind(c.default),u={content:s.default.element,extensions:s.default.element,footer:s.default.element,header:s.default.element},d=function(e){var t,n,a,s,i=e.content,c=e.extensions,u=e.footer,d=e.header,m=(0,o.default)(e,["content","extensions","footer","header"]),f=p(["menu","fill",m.className]);return d&&(t=l.default.createElement("div",{className:p(["fit","header"])},d)),i&&(n=l.default.createElement("div",{className:p(["fill","content"])},l.default.createElement("div",{className:p("normalizer")},i))),c&&(a=l.default.createElement("div",{className:p(["fit","widget"])},c)),u&&(s=l.default.createElement("div",{className:p(["fit","footer"])},u)),l.default.createElement("div",(0,r.default)({},m,{className:f}),t,l.default.createElement("div",{className:p(["fill","body"])},a,n),s)};d.propTypes=u;var m=d;t.default=m},1045:function(e,t,n){e.exports={fit:"ApplicationMenuLayout-module__fit___2_ZyC",fill:"ApplicationMenuLayout-module__fill___-mAIP",menu:"ApplicationMenuLayout-module__menu___2MW9V",header:"ApplicationMenuLayout-module__header___rjp8P",footer:"ApplicationMenuLayout-module__footer___3YHVr",body:"ApplicationMenuLayout-module__body___2a4kY",widgets:"ApplicationMenuLayout-module__widgets___33Lug",content:"ApplicationMenuLayout-module__content___dGOMr",normalizer:"ApplicationMenuLayout-module__normalizer___3ImZQ"}},1799:function(e){e.exports=JSON.parse('{"name":"terra-application-menu-layout","main":"lib/ApplicationMenuLayout.js","version":"3.18.0","description":"This component renders an application menu layout. To be used with a terra-layout or terra-navigation-layout.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-framework.git"},"keywords":["Cerner","Terra","Framework","terra-application-menu-layout","Application","Menu","Layout","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-framework/issues"},"homepage":"https://github.com/cerner/terra-framework#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8"},"devDependencies":{"terra-doc-template":"^2.2.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"}}')},1800:function(e,t,n){"use strict";n.r(t),t.default="# Terra Application Menu Layout\n\nThis component renders an application menu layout. To be used with terra-layout or terra-navigation-layout.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-application-menu-layout`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Component Features\n* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n"},1801:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\n\nimport styles from './ApplicationMenuLayout.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * Content element to be placed within the fill area of the header.\n   * */\n  content: PropTypes.element,\n  /**\n   * Extensions element to be placed before the end of the header.\n   * */\n  extensions: PropTypes.element,\n  /**\n   * Footer element to be placed at the end of the header.\n   * */\n  footer: PropTypes.element,\n  /**\n   * Header element to be placed at the start of the header.\n   * */\n  header: PropTypes.element,\n};\n\nconst ApplicationMenuLayout = ({\n  content,\n  extensions,\n  footer,\n  header,\n  ...customProps\n}) => {\n  const menuClassNames = cx([\n    'menu',\n    'fill',\n    customProps.className,\n  ]);\n\n  let headerElement;\n  if (header) {\n    headerElement = <div className={cx(['fit', 'header'])}>{header}</div>;\n  }\n\n  let contentElement;\n  if (content) {\n    contentElement = <div className={cx(['fill', 'content'])}><div className={cx('normalizer')}>{content}</div></div>;\n  }\n\n  let extensionsElement;\n  if (extensions) {\n    extensionsElement = <div className={cx(['fit', 'widget'])}>{extensions}</div>;\n  }\n\n  let footerElement;\n  if (footer) {\n    footerElement = <div className={cx(['fit', 'footer'])}>{footer}</div>;\n  }\n\n  return (\n    <div {...customProps} className={menuClassNames}>\n      {headerElement}\n      <div className={cx(['fill', 'body'])}>\n        {extensionsElement}\n        {contentElement}\n      </div>\n      {footerElement}\n    </div>\n  );\n};\n\nApplicationMenuLayout.propTypes = propTypes;\n\nexport default ApplicationMenuLayout;\n"},1802:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(4)),l=a(n(1044)),s=a(n(1803)),i=a(n(1805)),c=o.default.bind(i.default),p=function(){return r.default.createElement("div",{className:c("content-wrapper")},r.default.createElement(l.default,{header:r.default.createElement(s.default,{text:"Header",type:"header"}),footer:r.default.createElement(s.default,{text:"Footer",type:"footer"}),extensions:r.default.createElement(s.default,{text:"Extensions",type:"extensions"}),content:r.default.createElement(s.default,{text:"Content"})}))};t.default=p},1803:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(4)),l=a(n(2)),s=a(n(1804)),i=o.default.bind(s.default),c={text:l.default.string,type:l.default.string},p=function(e){var t=e.text,n=e.type;return r.default.createElement("div",{className:i("wrapper1-".concat(n))},r.default.createElement("div",{className:i("wrapper2")},r.default.createElement("div",{className:i("wrapper3")},r.default.createElement("h3",null,t))))};p.propTypes=c,p.defaultProps={text:"PlaceHolder",type:"default"};var u=p;t.default=u},1804:function(e,t,n){e.exports={"wrapper1-default":"Placeholder-module__wrapper1-default___92Yyq","wrapper1-header":"Placeholder-module__wrapper1-header___3TN8T","wrapper1-footer":"Placeholder-module__wrapper1-footer___nR26y","wrapper1-extensions":"Placeholder-module__wrapper1-extensions___3OiWL",wrapper2:"Placeholder-module__wrapper2___2cj5m",wrapper3:"Placeholder-module__wrapper3___2Qfvu"}},1805:function(e,t,n){e.exports={"content-wrapper":"MenuWireframe-module__content-wrapper___2C--N"}},1806:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport classNames from \'classnames/bind\';\nimport ApplicationMenuLayout from \'terra-application-menu-layout\';\nimport PlaceHolder from \'terra-application-menu-layout/lib/terra-dev-site/doc/common/Placeholder\';\nimport styles from \'./MenuWireframe.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst Menu = () => (\n  <div className={cx(\'content-wrapper\')}>\n    <ApplicationMenuLayout\n      header={<PlaceHolder text="Header" type="header" />}\n      footer={<PlaceHolder text="Footer" type="footer" />}\n      extensions={<PlaceHolder text="Extensions" type="extensions" />}\n      content={<PlaceHolder text="Content" />}\n    />\n  </div>\n);\n\nexport default Menu;\n'},2306:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(1004)),l=n(1799),s=a(n(1800)),i=a(n(1801)),c=a(n(1802)),p=a(n(1806)),u=function(){return r.default.createElement(o.default,{packageName:l.name,readme:s.default,srcPath:"https://github.com/cerner/terra-framework/tree/master/packages/".concat(l.name),examples:[{title:"Menu - Wireframe",example:r.default.createElement(c.default,null),source:p.default}],propsTables:[{componentSrc:i.default}]})};t.default=u}}]);
//# sourceMappingURL=95-6775ed3844ad49be3037.js.map
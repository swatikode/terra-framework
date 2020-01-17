(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1005:function(e,t){},1100:function(e,t,n){},1417:function(e){e.exports=JSON.parse('{"name":"terra-theme-provider","main":"lib/ThemeProvider.js","version":"3.17.0","description":"The theme provider component provides a theme to Terra UI components rendered within it via CSS custom properties a.k.a CSS variables.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-framework.git"},"keywords":["Cerner","Terra","terra-theme-provider","ThemeProvider","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-framework/issues"},"homepage":"https://github.com/cerner/terra-framework#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","terra-mixins":"^1.0.0"},"devDependencies":{"terra-doc-template":"^2.2.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"}}')},2220:function(e,t,n){"use strict";n.r(t),t.default="# Terra Theme Provider\n\nThe theme provider component provides a theme to Terra UI components rendered within it via CSS custom properties a.k.a CSS variables. This is accomplished by setting a CSS class which contains defined CSS custom properties for the specified theme on the DOM element that wraps the children rendered by the theme provider.\n\nIf you need to theme styles on to the `html` or `body` elements applied in terra-base, you can set the `isGlobalTheme` prop on the theme provider component. This will set the CSS class generated from the `themeName` prop on the `html` element.\n\n*Note:*\n* Apps should only use the `isGlobalTheme` prop on one theme provider component.\n* The CSS custom properties applied via the theme provided only works in browsers which have native support for CSS custom properties.\n\n## Theme Names\nThe theme provider component offers a set of first class terra theme names via `ThemeProvider.Opts.Themes`.\nThese are intended to be used with the `themeName` prop:\n\n`<ThemeProvider themeName={ThemeProvider.Opts.Themes.CONSUMER}>`\n\nThe following themes are available via `ThemeProvider.Opts.Themes`\n\n* `CONSUMER` Theme for consumer user experience\n* `MOCK` Theme for mock testing\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-theme-provider`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n"},2221:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport className from 'classnames';\n\nconst cx = className;\n\nconst ThemeProviderThemes = {\n  CONSUMER: 'cerner-consumer-theme',\n  MOCK: 'cerner-mock-theme',\n};\n\nconst propTypes = {\n  /**\n   * The component(s) that will be wrapped by `<ThemeProvider />`\n   */\n  children: PropTypes.node.isRequired,\n  /**\n   * Name of class for specified theme. e.g `cerner-consumer-theme`\n   */\n  themeName: PropTypes.string,\n  /**\n   * When set to true, applies theme class to HTML element\n   */\n  isGlobalTheme: PropTypes.bool,\n};\n\nconst defaultProps = {\n  isGlobalTheme: false,\n};\n\nclass ThemeProvider extends React.Component {\n  componentDidMount() {\n    if (this.props.isGlobalTheme === true && this.props.themeName) {\n      document.documentElement.classList.add(this.props.themeName);\n    }\n  }\n\n  componentDidUpdate(prevProps) {\n    if (this.props === prevProps) return;\n    if (this.props.isGlobalTheme === true) {\n      if (prevProps.themeName) {\n        document.documentElement.classList.remove(prevProps.themeName);\n      }\n\n      if (this.props.themeName) {\n        document.documentElement.classList.add(this.props.themeName);\n      }\n    }\n  }\n\n  componentWillUnmount() {\n    if (this.props.isGlobalTheme === true && this.props.themeName) {\n      document.documentElement.classList.remove(this.props.themeName);\n    }\n  }\n\n  render() {\n    const {\n      themeName, isGlobalTheme, children, ...customProps\n    } = this.props;\n    return (<div {...customProps} className={cx(themeName, customProps.className)}>{children}</div>);\n  }\n}\n\nThemeProvider.propTypes = propTypes;\nThemeProvider.defaultProps = defaultProps;\nThemeProvider.Opts = {};\nThemeProvider.Opts.Themes = ThemeProviderThemes;\n\nexport default ThemeProvider;\n"},2222:function(e,t,n){"use strict";var r=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(20)),s=r(n(22)),a=r(n(23)),m=r(n(24)),i=r(n(27)),p=r(n(25)),l=r(n(0)),h=r(n(4)),d=r(n(368)),c=r(n(2223)),u=r(n(2225)),f=h.default.bind(u.default),v=function(e){function t(e){var n;return(0,o.default)(this,t),(n=(0,a.default)(this,(0,m.default)(t).call(this,e))).state={theme:""},n.handleThemeChange=n.handleThemeChange.bind((0,i.default)(n)),n}return(0,p.default)(t,e),(0,s.default)(t,[{key:"handleThemeChange",value:function(e){this.setState({theme:e.target.value})}},{key:"render",value:function(){var e;return e=window.CSS&&window.CSS.supports&&window.CSS.supports("(--fake-var: 0)")?l.default.createElement("div",{className:f("theme-switcher-wrapper")},l.default.createElement("label",{htmlFor:"theme"}," Theme: "),l.default.createElement("select",{id:"theme",value:this.state.theme,onChange:this.handleThemeChange},l.default.createElement("option",{value:""},"Default"),l.default.createElement("option",{value:d.default.Opts.Themes.MOCK},"Mock Theme"))):l.default.createElement("div",null),l.default.createElement("div",null,l.default.createElement("div",null,e),l.default.createElement(d.default,{themeName:this.state.theme},l.default.createElement("div",null,l.default.createElement(c.default,null,"Themable component"))))}}]),t}(l.default.Component);t.default=v},2223:function(e,t,n){"use strict";var r=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(18)),s=r(n(28)),a=r(n(0)),m=r(n(2)),i=r(n(4)),p=r(n(2224));n(1100);var l=i.default.bind(p.default),h={children:m.default.node.isRequired},d=function(e){var t=e.children,n=(0,s.default)(e,["children"]);return a.default.createElement("div",(0,o.default)({},n,{className:l("mock-theme-component",n.className)}),t)};d.propTypes=h;var c=d;t.default=c},2224:function(e,t,n){e.exports={"mock-theme-component":"MockThemeComponent-module__mock-theme-component___1_aaC"}},2225:function(e,t,n){e.exports={"theme-switcher-wrapper":"DefaultThemeProvider-module__theme-switcher-wrapper___1MiLI"}},2226:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport classNames from 'classnames/bind';\nimport ThemeProvider from 'terra-theme-provider';\nimport MockThemeComponent from 'terra-theme-provider/lib/terra-dev-site/doc/example/MockThemeComponent';\nimport styles from './DefaultThemeProvider.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass DefaultThemeProvider extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      theme: '',\n    };\n    this.handleThemeChange = this.handleThemeChange.bind(this);\n  }\n\n  handleThemeChange(e) {\n    this.setState({ theme: e.target.value });\n  }\n\n  render() {\n    let themeSwitcher;\n\n    function supportsCSSVars() {\n      return window.CSS && window.CSS.supports && window.CSS.supports('(--fake-var: 0)');\n    }\n\n    if (supportsCSSVars()) {\n      themeSwitcher = (\n        <div className={cx('theme-switcher-wrapper')}>\n          <label htmlFor=\"theme\"> Theme: </label>\n          <select id=\"theme\" value={this.state.theme} onChange={this.handleThemeChange}>\n            <option value=\"\">Default</option>\n            <option value={ThemeProvider.Opts.Themes.MOCK}>Mock Theme</option>\n          </select>\n        </div>\n      );\n    } else {\n      themeSwitcher = (\n        <div />\n      );\n    }\n\n    return (\n      <div>\n        <div>{themeSwitcher}</div>\n        <ThemeProvider themeName={this.state.theme}>\n          <div>\n            <MockThemeComponent>Themable component</MockThemeComponent>\n          </div>\n        </ThemeProvider>\n      </div>\n    );\n  }\n}\n\nexport default DefaultThemeProvider;\n"},2393:function(e,t,n){"use strict";var r=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),s=r(n(1004)),a=n(1417),m=r(n(2220)),i=r(n(2221)),p=r(n(2222)),l=r(n(2226)),h=function(){return o.default.createElement(s.default,{packageName:a.name,readme:m.default,srcPath:"https://github.com/cerner/terra-framework/tree/master/packages/".concat(a.name),examples:[{title:"Example Theme Provider",example:o.default.createElement(p.default,null),source:l.default}],propsTables:[{componentSrc:i.default}]})};t.default=h}}]);
//# sourceMappingURL=99-71fdfb72a56698b4dba3.js.map
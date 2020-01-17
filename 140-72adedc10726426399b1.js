(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{1005:function(e,n){},1410:function(e){e.exports=JSON.parse('{"name":"terra-navigation-side-menu","main":"lib/NavigationSideMenu.js","version":"2.24.0","description":"A structual component for nesting navigational items within the content section of the terra-menu-layout.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-framework.git"},"keywords":["Cerner","Terra","terra-navigation-side-menu","NavigationSideMenu","Navigation","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-framework/issues"},"homepage":"https://github.com/cerner/terra-framework#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5","react-intl":"^2.8.0"},"dependencies":{"classnames":"^2.2.5","keycode-js":"^2.0.1","prop-types":"^15.5.8","terra-action-header":"^2.0.0","terra-content-container":"^3.0.0","terra-icon":"^3.1.0","terra-visually-hidden-text":"^2.0.0"},"devDependencies":{"terra-doc-template":"^2.2.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"}}')},2120:function(e,n,t){"use strict";t.r(n),n.default="# Terra Navigation Side Menu\n\nA structural component for nesting navigational items within the content section of the terra-menu-layout.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-navigation-side-menu`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n| react-intl | ^2.8.0 |\n\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Component Features\n* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n"},2121:function(e,n,t){"use strict";t.r(n),n.default="import React, { Component, Fragment } from 'react';\nimport PropTypes from 'prop-types';\nimport { injectIntl, intlShape } from 'react-intl';\nimport classNames from 'classnames/bind';\nimport ActionHeader from 'terra-action-header';\nimport ContentContainer from 'terra-content-container';\nimport VisuallyHiddenText from 'terra-visually-hidden-text';\nimport * as KeyCode from 'keycode-js';\nimport MenuItem from './_MenuItem';\n\nimport styles from './NavigationSideMenu.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * @private\n   * Internationalization object with translation APIs. Provided by `injectIntl`.\n   */\n  intl: intlShape.isRequired,\n  /**\n   * An array of configuration for each menu item.\n   */\n  menuItems: PropTypes.arrayOf(PropTypes.shape({\n    /**\n     * Keys of menu items\n     */\n    childKeys: PropTypes.arrayOf(PropTypes.string),\n    /**\n     * Used to match visual style of a menuItem with children on an item without children.\n     */\n    hasSubMenu: PropTypes.bool,\n    /**\n     * Whether or not the menu is the primary navigation links in small form factor.\n     */\n    isRootMenu: PropTypes.bool,\n    /**\n     * ID to be applied to the menu item div.\n     */\n    id: PropTypes.string,\n    /**\n     * Optional meta data to be returned along with the item key within the onChange.\n     */\n    metaData: PropTypes.object,\n    /**\n     * Unique identifier that will be returned in the onChange callback when an endpoint is reached.\n     */\n    key: PropTypes.string.isRequired,\n    /**\n     * Text for the menu row and header title when selected.\n     */\n    text: PropTypes.string.isRequired,\n  })),\n  /**\n   * Callback function when a menu endpoint is reached.\n   * returns (event, { selectedMenuKey: String, selectedChildKey: String, metaData: Object})\n   */\n  onChange: PropTypes.func.isRequired,\n  /**\n   * Delegate prop showParent function that is provided by the terra-navigation-layout.\n   */\n  routingStackBack: PropTypes.func,\n  /**\n   * Key of the currently selected child item on the selected menu page.\n   * This is used when traveling back up the menu stack or when the child is an end point.\n   */\n  selectedChildKey: PropTypes.string,\n  /**\n   * Key of the currently selected menu page.\n   */\n  selectedMenuKey: PropTypes.string.isRequired,\n  /**\n   * An optional toolbar to display below the side menu action header\n   */\n  toolbar: PropTypes.element,\n};\n\nconst defaultProps = {\n  menuItems: [],\n};\n\nconst processMenuItems = (menuItems) => {\n  const items = {};\n  const parents = {};\n  menuItems.forEach((item) => {\n    items[item.key] = {\n      id: item.id,\n      text: item.text,\n      childKeys: item.childKeys,\n      metaData: item.metaData,\n      hasSubMenu: item.hasSubMenu,\n      isRootMenu: item.isRootMenu,\n    };\n    if (item.childKeys) {\n      item.childKeys.forEach((key) => {\n        parents[key] = item.key;\n      });\n    }\n  });\n  return { items, parents };\n};\n\nclass NavigationSideMenu extends Component {\n  constructor(props) {\n    super(props);\n\n    this.handleBackClick = this.handleBackClick.bind(this);\n    this.handleItemClick = this.handleItemClick.bind(this);\n    this.updateAriaLiveContent = this.updateAriaLiveContent.bind(this);\n    this.setVisuallyHiddenComponent = this.setVisuallyHiddenComponent.bind(this);\n\n    const { items, parents } = processMenuItems(props.menuItems);\n    this.state = {\n      items,\n      parents,\n      prevPropsMenuItem: props.menuItems,\n    };\n  }\n\n  static getDerivedStateFromProps(nextProps, prevState) {\n    if (nextProps.menuItems !== prevState.prevPropsMenuItem) {\n      return processMenuItems(nextProps.menuItems);\n    }\n    return null;\n  }\n\n  setVisuallyHiddenComponent(node) {\n    this.visuallyHiddenComponent = node;\n  }\n\n  handleBackClick(event) {\n    const parentKey = this.state.parents[this.props.selectedMenuKey];\n    if (parentKey) {\n      this.props.onChange(\n        event,\n        {\n          selectedMenuKey: parentKey,\n          selectedChildKey: this.props.selectedMenuKey,\n          metaData: this.state.items[parentKey].metaData,\n        },\n      );\n    }\n  }\n\n  handleItemClick(event, key) {\n    const selectedItem = this.state.items[key];\n\n    if (this.state.items[key] && this.state.items[key].text) {\n      this.updateAriaLiveContent(this.state.items[key].text);\n    }\n\n    if (selectedItem.childKeys && selectedItem.childKeys.length) {\n      this.props.onChange(\n        event,\n        {\n          selectedMenuKey: key,\n          selectedChildKey: undefined,\n          metaData: selectedItem.metaData,\n        },\n      );\n    } else {\n      this.props.onChange(\n        event,\n        {\n          selectedMenuKey: this.props.selectedMenuKey,\n          selectedChildKey: key,\n          metaData: selectedItem.metaData,\n        },\n      );\n    }\n  }\n\n  buildListItem(key) {\n    const item = this.state.items[key];\n    const onKeyDown = (event) => {\n      if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE || event.nativeEvent.keyCode === KeyCode.KEY_RETURN) {\n        event.preventDefault();\n        this.handleItemClick(event, key);\n      }\n    };\n\n    return (\n      <MenuItem\n        id={item.id}\n        hasChevron={item.hasSubMenu || (item.childKeys && item.childKeys.length > 0)}\n        isSelected={key === this.props.selectedChildKey}\n        text={item.text}\n        key={key}\n        onClick={(event) => { this.handleItemClick(event, key); }}\n        onKeyDown={onKeyDown}\n        data-menu-item={key}\n      />\n    );\n  }\n\n  buildListContent(currentItem) {\n    if (currentItem && currentItem.childKeys && currentItem.childKeys.length) {\n      return <nav role=\"navigation\"><ul className={cx(['side-menu-list'])}>{currentItem.childKeys.map(key => this.buildListItem(key))}</ul></nav>;\n    }\n    return null;\n  }\n\n  updateAriaLiveContent(item) {\n    const { intl } = this.props;\n    const selected = intl.formatMessage({ id: 'Terra.navigation.side.menu.selected' });\n\n    // Guard against race condition with the ref being established and updating the ref's innerText\n    if (!this.visuallyHiddenComponent) {\n      return;\n    }\n\n    this.visuallyHiddenComponent.innerText = item ? `${item} ${selected}` : '';\n  }\n\n  render() {\n    const {\n      menuItems,\n      onChange,\n      routingStackBack,\n      selectedChildKey,\n      selectedMenuKey,\n      toolbar,\n      ...customProps\n    } = this.props;\n    const currentItem = this.state.items[selectedMenuKey];\n    let sideMenuContentContainerClassNames = cx([\n      'side-menu-content-container',\n    ]);\n\n    let onBack;\n    const parentKey = this.state.parents[selectedMenuKey];\n    if (parentKey) {\n      onBack = this.handleBackClick;\n    } else {\n      onBack = routingStackBack;\n    }\n\n    let header;\n    if (onBack || !currentItem.isRootMenu) {\n      header = (\n        <Fragment>\n          <ActionHeader\n            className={cx('side-menu-action-header')}\n            onBack={onBack}\n            title={currentItem ? currentItem.text : null}\n            data-navigation-side-menu-action-header\n          />\n          {toolbar}\n        </Fragment>\n      );\n    } else {\n      sideMenuContentContainerClassNames = cx(['side-menu-content-container', 'is-root']);\n    }\n\n    return (\n      <Fragment>\n        <VisuallyHiddenText\n          aria-atomic=\"true\"\n          aria-live=\"assertive\"\n          aria-relevant=\"additions text\"\n          refCallback={this.setVisuallyHiddenComponent}\n        />\n        <ContentContainer {...customProps} header={header} fill className={sideMenuContentContainerClassNames}>\n          {this.buildListContent(currentItem)}\n        </ContentContainer>\n      </Fragment>\n    );\n  }\n}\n\nNavigationSideMenu.propTypes = propTypes;\nNavigationSideMenu.defaultProps = defaultProps;\n\nexport default injectIntl(NavigationSideMenu);\n"},2122:function(e,n,t){"use strict";var s=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=s(t(20)),a=s(t(22)),r=s(t(23)),o=s(t(24)),u=s(t(27)),d=s(t(25)),l=s(t(0)),c=s(t(4)),m=s(t(1085)),p=s(t(2123)),h=c.default.bind(p.default),y=function(e){function n(e){var t;return(0,i.default)(this,n),(t=(0,r.default)(this,(0,o.default)(n).call(this,e))).handleOnChange=t.handleOnChange.bind((0,u.default)(t)),t.resetMenuState=t.resetMenuState.bind((0,u.default)(t)),t.fakeRoutingBack=t.fakeRoutingBack.bind((0,u.default)(t)),t.state={selectedMenuKey:"menu",selectedChildKey:void 0},t}return(0,d.default)(n,e),(0,a.default)(n,[{key:"handleOnChange",value:function(e,n){this.setState({selectedMenuKey:n.selectedMenuKey,selectedChildKey:n.selectedChildKey})}},{key:"resetMenuState",value:function(){this.setState({selectedMenuKey:"menu",selectedChildKey:void 0})}},{key:"fakeRoutingBack",value:function(){this.setState({selectedMenuKey:"fake-parent",selectedChildKey:void 0})}},{key:"render",value:function(){var e;return e="fake-parent"===this.state.selectedMenuKey?l.default.createElement("div",{className:h("content")},l.default.createElement("button",{type:"button",onClick:this.resetMenuState},"Child Route"),l.default.createElement("p",null,"Parent Route")):l.default.createElement(m.default,{id:"test-menu",menuItems:[{key:"menu",text:"Menu",childKeys:["submenu1","submenu2","submenu3","submenu4"]},{key:"submenu1",text:"Sub Menu 1",childKeys:["subsubmenu1","subsubmenu2","subsubmenu3"],id:"test-item-1"},{key:"submenu2",text:"Sub Menu 2"},{key:"submenu3",text:"Sub Menu 3"},{key:"submenu4",text:"Sub Menu 4"},{key:"subsubmenu1",text:"Sub-Sub Menu 1",id:"test-item-2"},{key:"subsubmenu2",text:"Sub-Sub Menu 2"},{key:"subsubmenu3",text:"Sub-Sub Menu 3"}],onChange:this.handleOnChange,routingStackBack:this.fakeRoutingBack,selectedMenuKey:this.state.selectedMenuKey,selectedChildKey:this.state.selectedChildKey}),l.default.createElement("div",{className:h("content-wrapper")},e)}}]),n}(l.default.Component);n.default=y},2123:function(e,n,t){e.exports={content:"NavigationSideMenuExample-module__content___3w5fk","content-wrapper":"NavigationSideMenuExample-module__content-wrapper___2sz9G",toolbar:"NavigationSideMenuExample-module__toolbar___uM12J"}},2124:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport classNames from 'classnames/bind';\nimport NavigationSideMenu from 'terra-navigation-side-menu';\n\nimport styles from './NavigationSideMenuExample.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass NavigationSideMenuDefault extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.handleOnChange = this.handleOnChange.bind(this);\n    this.resetMenuState = this.resetMenuState.bind(this);\n    this.fakeRoutingBack = this.fakeRoutingBack.bind(this);\n\n    this.state = { selectedMenuKey: 'menu', selectedChildKey: undefined };\n  }\n\n  handleOnChange(event, changeData) {\n    this.setState({ selectedMenuKey: changeData.selectedMenuKey, selectedChildKey: changeData.selectedChildKey });\n  }\n\n  resetMenuState() {\n    this.setState({ selectedMenuKey: 'menu', selectedChildKey: undefined });\n  }\n\n  fakeRoutingBack() {\n    this.setState({ selectedMenuKey: 'fake-parent', selectedChildKey: undefined });\n  }\n\n  render() {\n    let content;\n    if (this.state.selectedMenuKey === 'fake-parent') {\n      content = (\n        <div className={cx('content')}>\n          <button type=\"button\" onClick={this.resetMenuState}>\n            Child Route\n          </button>\n          <p>Parent Route</p>\n        </div>\n      );\n    } else {\n      content = (\n        <NavigationSideMenu\n          id=\"test-menu\"\n          menuItems={[\n            { key: 'menu', text: 'Menu', childKeys: ['submenu1', 'submenu2', 'submenu3', 'submenu4'] },\n            {\n              key: 'submenu1', text: 'Sub Menu 1', childKeys: ['subsubmenu1', 'subsubmenu2', 'subsubmenu3'], id: 'test-item-1',\n            },\n            { key: 'submenu2', text: 'Sub Menu 2' },\n            { key: 'submenu3', text: 'Sub Menu 3' },\n            { key: 'submenu4', text: 'Sub Menu 4' },\n            { key: 'subsubmenu1', text: 'Sub-Sub Menu 1', id: 'test-item-2' },\n            { key: 'subsubmenu2', text: 'Sub-Sub Menu 2' },\n            { key: 'subsubmenu3', text: 'Sub-Sub Menu 3' },\n          ]}\n          onChange={this.handleOnChange}\n          routingStackBack={this.fakeRoutingBack}\n          selectedMenuKey={this.state.selectedMenuKey}\n          selectedChildKey={this.state.selectedChildKey}\n        />\n      );\n    }\n\n    return (\n      <div className={cx('content-wrapper')}>\n        {content}\n      </div>\n    );\n  }\n}\n\nexport default NavigationSideMenuDefault;\n"},2373:function(e,n,t){"use strict";var s=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=s(t(0)),a=s(t(1004)),r=t(1410),o=s(t(2120)),u=s(t(2121)),d=s(t(2122)),l=s(t(2124)),c=function(){return i.default.createElement(a.default,{packageName:r.name,readme:o.default,srcPath:"https://github.com/cerner/terra-framework/tree/master/packages/".concat(r.name),examples:[{title:"Navigation Side Menu Example",example:i.default.createElement(d.default,null),source:l.default}],propsTables:[{componentSrc:u.default}]})};n.default=c}}]);
//# sourceMappingURL=140-72adedc10726426399b1.js.map
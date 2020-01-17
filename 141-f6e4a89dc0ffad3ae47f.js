(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{1005:function(e,n){},1115:function(e,n,t){e.exports={container:"SlideGroupDemo-module__container___2zjCb",slide:"SlideGroupDemo-module__slide___1Lr5R","content-wrapper":"SlideGroupDemo-module__content-wrapper___2e3Pl",button:"SlideGroupDemo-module__button___769LH","custom-slide":"SlideGroupDemo-module__custom-slide____pG-d"}},2175:function(e,n,t){"use strict";t.r(n),n.default="# Terra Slide Group\n\nThe SlideGroup is a utility component that utilizes the `react-transition-group` library to present a stack of components in an\nanimated fashion.\n\nThe last component in the group is visible, and all others are hidden. While the hidden components are not visible and\nmarked with the `aria-hidden` attribute, they are not actually unmounted.\n\nAs a utility component, any component utilizing the SlideGroup will need to handle the keyboard accessibility of the content on each slide.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-slide-group`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Usage\n\n```jsx\nimport React from 'react';\nimport SlideGroup from 'terra-slide-group';\n\n<SlideGroup\n  items={[\n    <div key=\"FIRST\">First Component (I'm hidden)</div>,\n    <div key=\"SECOND\">Second Component (I'm hidden, too)</div>,\n    <div key=\"THIRD\">Third Component (I'm visible, because I'm the last component in the stack)</div>,\n  ]}\n  isAnimated\n>\n```\n"},2176:function(e){e.exports=JSON.parse('{"name":"terra-slide-group","main":"lib/SlideGroup.js","version":"4.15.0","description":"A component that utilizes the `react-transition-group` library to present a stack of components in an animated fashion","repository":{"type":"git","url":"git+https://github.com/cerner/terra-framework.git"},"keywords":["Cerner","Terra","terra-slide-group","SlideGroup","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-framework/issues"},"homepage":"https://github.com/cerner/terra-framework#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","react-transition-group":"^4.0.0"},"devDependencies":{"terra-doc-template":"^2.2.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio-default":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js","wdio-fusion":"cd ../.. && THEME=orion-fusion-theme npx wdio ./packages/$npm_package_name/wdio.conf.js","wdio":"npm run wdio-default && npm run wdio-fusion"}}')},2177:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport TransitionGroup from 'react-transition-group/TransitionGroup';\nimport CSSTransition from 'react-transition-group/CSSTransition';\nimport Slide from './Slide';\nimport transitions from './Slide.module.scss';\n\nconst cx = classNames.bind(transitions);\n\nconst propTypes = {\n  /**\n   * The array of components for the group. Only the last component is visible. The others are hidden but still mounted.\n   */\n  // eslint-disable-next-line react/forbid-prop-types\n  items: PropTypes.array,\n  /**\n   * When true, the transition between slides is animated.\n   */\n  isAnimated: PropTypes.bool,\n};\n\nconst defaultProps = {\n  isAnimated: false,\n};\n\nclass SlideGroup extends React.Component {\n  static hidePreviousSlide(enteredElement) {\n    if (enteredElement.previousSibling) {\n      enteredElement.previousSibling.setAttribute('aria-hidden', true);\n    }\n  }\n\n  static showPreviousSlide(exitingElement) {\n    if (exitingElement.previousSibling) {\n      exitingElement.previousSibling.removeAttribute('aria-hidden');\n    }\n  }\n\n  constructor(props) {\n    super(props);\n    this.setContainer = this.setContainer.bind(this);\n  }\n\n  setContainer(node) {\n    if (!node) { return; } // Ref callbacks happen on mount and unmount, element is null on unmount\n    this.slideGroup = node;\n  }\n\n  render() {\n    const { items, isAnimated, ...customProps } = this.props;\n    // We don't want to render the transition group when no children exist. Doing so will cause the first child to\n    // animate into place, which in most cases we do not want.\n    if (!items || !items.length) {\n      return null;\n    }\n\n    // We use the key from the first child as the key for the transition group. This will cause the transition group to\n    // rerender when the root child changes and subsequently prevent that child from animating into position.\n    const transitionGroupKey = items[0].key;\n\n    const itemCount = items.length - 1;\n\n    const transitionNames = {\n      enter: transitions.enter,\n      enterActive: transitions['enter-active'],\n      exit: transitions.exit,\n      exitActive: transitions['exit-active'],\n    };\n\n    return (\n      <TransitionGroup {...customProps} ref={this.setContainer} className={cx(['slide-group', customProps.className])} key={transitionGroupKey}>\n        {items.map((item, index) => (\n          <CSSTransition\n            classNames={transitionNames}\n            enter={isAnimated}\n            onEntered={SlideGroup.hidePreviousSlide}\n            exit={isAnimated}\n            onExit={SlideGroup.showPreviousSlide}\n            timeout={300}\n            key={item.key}\n            id=\"shmmoop\"\n          >\n            <Slide isHidden={!isAnimated && index !== itemCount}>\n              {item}\n            </Slide>\n          </CSSTransition>\n        ))}\n      </TransitionGroup>\n    );\n  }\n}\n\nSlideGroup.propTypes = propTypes;\nSlideGroup.defaultProps = defaultProps;\n\nexport default SlideGroup;\n"},2178:function(e,n,t){"use strict";var i=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t(20)),o=i(t(22)),s=i(t(23)),a=i(t(24)),l=i(t(27)),d=i(t(25)),u=i(t(0)),p=i(t(2)),c=i(t(4)),m=i(t(366)),h=i(t(1115)),f=c.default.bind(h.default),S=function(e){function n(e){var t;return(0,r.default)(this,n),(t=(0,s.default)(this,(0,a.default)(n).call(this,e))).increment=t.increment.bind((0,l.default)(t)),t.decrement=t.decrement.bind((0,l.default)(t)),t.state={counter:1},t}return(0,d.default)(n,e),(0,o.default)(n,[{key:"increment",value:function(){this.setState((function(e){return{counter:e.counter+1}}))}},{key:"decrement",value:function(){this.setState((function(e){return{counter:e.counter-1}}))}},{key:"render",value:function(){for(var e=[],n=0;n<this.state.counter;n+=1)e.push(u.default.createElement("div",{key:"Slide ".concat(n),className:f("slide")},u.default.createElement("h2",null,"Slide",n),u.default.createElement("br",null),u.default.createElement("button",{type:"button",onClick:this.increment},"Increment"),0!==n?u.default.createElement("button",{type:"button",onClick:this.decrement},"Decrement"):null));return u.default.createElement("div",{className:f("container")},u.default.createElement(m.default,{items:e,isAnimated:this.props.isAnimated}))}}]),n}(u.default.Component);S.propTypes={isAnimated:p.default.bool};var b=S;n.default=b},2179:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport SlideGroup from 'terra-slide-group';\nimport styles from './SlideGroupDemo.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass SlideGroupDemo extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.increment = this.increment.bind(this);\n    this.decrement = this.decrement.bind(this);\n\n    this.state = {\n      counter: 1,\n    };\n  }\n\n  increment() {\n    this.setState(prevState => ({\n      counter: prevState.counter + 1,\n    }));\n  }\n\n  decrement() {\n    this.setState(prevState => ({\n      counter: prevState.counter - 1,\n    }));\n  }\n\n  render() {\n    const slides = [];\n    for (let i = 0; i < this.state.counter; i += 1) {\n      slides.push((\n        <div\n          key={`Slide ${i}`}\n          className={cx('slide')}\n        >\n          <h2>\n            Slide\n            {i}\n          </h2>\n          <br />\n          <button type=\"button\" onClick={this.increment}>Increment</button>\n          {i !== 0 ? <button type=\"button\" onClick={this.decrement}>Decrement</button> : null}\n        </div>\n      ));\n    }\n\n    return (\n      <div className={cx('container')}>\n        <SlideGroup items={slides} isAnimated={this.props.isAnimated} />\n      </div>\n    );\n  }\n}\n\nSlideGroupDemo.propTypes = {\n  isAnimated: PropTypes.bool,\n};\n\nexport default SlideGroupDemo;\n"},2382:function(e,n,t){"use strict";var i=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t(0)),o=i(t(1004)),s=i(t(2175)),a=t(2176),l=i(t(2177)),d=i(t(2178)),u=i(t(2179)),p=function(){return r.default.createElement(o.default,{packageName:a.name,readme:s.default,srcPath:"https://github.com/cerner/terra-framework/tree/master/packages/".concat(a.name),examples:[{title:"Non-Animated SlideGroup",example:r.default.createElement(d.default,null),source:u.default},{title:"Animated SlideGroup",example:r.default.createElement(d.default,{isAnimated:!0}),source:u.default}],propsTables:[{componentName:"Slide Group",componentSrc:l.default}]})};n.default=p}}]);
//# sourceMappingURL=141-f6e4a89dc0ffad3ae47f.js.map
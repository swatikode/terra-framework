(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{1005:function(e,r){},1413:function(e){e.exports=JSON.parse('{"name":"terra-slide-panel","main":"lib/SlidePanel.js","version":"3.21.0","description":"The Terra SlidePanel component is a progressive disclosure mechanism that allows additional content to be shown and hidden in a variety of ways.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-framework.git"},"keywords":["Cerner","Terra","Framework","terra-slide-panel","SlidePanel","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-framework/issues"},"homepage":"https://github.com/cerner/terra-framework#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8"},"devDependencies":{"terra-doc-template":"^2.2.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio-default":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js","wdio-fusion":"cd ../.. && THEME=orion-fusion-theme npx wdio ./packages/$npm_package_name/wdio.conf.js","wdio":"npm run wdio-default && npm run wdio-fusion"}}')},2195:function(e,r,n){"use strict";n.r(r),r.default="# Terra Slide Panel Upgrade Guide\n## Changes from version 2 to version 3\n### Changes to CSS Custom Properties\n\n#### Renamed\n| Previous | New |\n|-|-|\n| --terra-slide-panel-panel-width-small | --terra-slide-panel-panel-small-width |\n\n#### Added\n* --terra-slide-panel-main-background-color\n* --terra-slide-panel-panel-overlay-position-start-box-shadow\n* --terra-slide-panel-panel-overlay-position-end-box-shadow\n* --terra-slide-panel-main-squish-background-color\n* --terra-slide-panel-panel-squish-background-color\n* --terra-slide-panel-panel-squish-border-right-color\n* --terra-slide-panel-panel-squish-border-left-color\n* --terra-slide-panel-panel-squish-width-small\n* --terra-slide-panel-panel-squish-width-large-scalar\n\n#### Removed\n* --terra-slide-panel-shadow-color\n* --terra-slide-panel-shadow-color\n* --terra-slide-panel-panel-border-color\n* --terra-slide-panel-panel-border-color\n"},2385:function(e,r,n){"use strict";var a=n(5);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var s=a(n(0)),o=a(n(1004)),t=a(n(2195)),i=n(1413),l=function(){return s.default.createElement(o.default,{packageName:i.name,srcPath:"https://github.com/cerner/terra-framework/tree/master/packages/".concat(i.name),readme:t.default})};r.default=l}}]);
//# sourceMappingURL=311-f8dea0c13abb9587a987.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[439],{1338:function(t,e,a){t.exports={marked:"marked-module__marked___2rRhM"}},2290:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),d=a(4),s=a.n(d),i=a(1338),p=a.n(i),o=s.a.bind(p.a);e.default=function(){return n.a.createElement("div",{dir:"ltr",className:o("marked"),dangerouslySetInnerHTML:{__html:'\x3c!-- Logo --\x3e\n<p align="center">\n  <img height="128" width="128" src="https://github.com/cerner/terra-framework/raw/master/terra.png" />\n</p>\n\n\x3c!-- Name --\x3e\n<h1 align="center">\n  Terra Framework\n</h1>\n\n<p><a href="http://engineering.cerner.com/2014/01/cerner-and-open-source/"><img src="https://badgen.net/badge/Cerner/OSS/blue" alt="Cerner OSS"></a>\n<a href="https://github.com/cerner/terra-framework/blob/master/LICENSE"><img src="https://badgen.net/github/license/cerner/terra-framework" alt="License"></a>\n<a href="https://travis-ci.com/cerner/terra-framework"><img src="https://badgen.net/travis/cerner/terra-framework" alt="Build Status"></a>\n<a href="https://david-dm.org/cerner/terra-framework?type=dev"><img src="https://badgen.net/david/dev/cerner/terra-framework" alt="devDependencies status"></a>\n<a href="https://lerna.js.org/"><img src="https://badgen.net/badge/maintained%20with/lerna/cc00ff" alt="lerna"></a></p>\n<ul>\n<li><a href="#supported-browsers">Supported Browsers</a></li>\n<li><a href="#packages">Packages</a><ul>\n<li><a href="#versioning">Versioning</a></li>\n<li><a href="#status">Status</a></li>\n<li><a href="#deprecated">Deprecated</a></li>\n</ul>\n</li>\n<li><a href="#supported-browsers">Supported Browsers</a></li>\n<li><a href="#internationalization-i18n">Internationalization (I18n)</a><ul>\n<li><a href="#packages-requiring-i18n">Packages Requiring I18n</a></li>\n</ul>\n</li>\n<li><a href="#contributing">Contributing</a></li>\n<li><a href="#local-development">Local Development</a></li>\n<li><a href="#license">LICENSE</a></li>\n</ul>\n<h2 id="packages">\n  Packages\n</h2>\n\n<h3 id="versioning">\n  Versioning\n</h3>\n\n<p>When a component reaches v1.0.0., it is considered to be stable and will follow <a href="http://semver.org/">SemVer</a> for versioning.</p>\n<ol>\n<li>MAJOR versions represent breaking changes</li>\n<li>MINOR versions represent added functionality in a backwards-compatible manner</li>\n<li>PATCH versions represent backwards-compatible bug fixes</li>\n</ol>\n<p>Consult the component CHANGELOGs, related issues, and PRs for more information.</p>\n<p>We view the React.js props API of our components as our main public API. We use this to guide us when versioning components.</p>\n<p>Prior to components reaching v1.0.0, a component is considered to be in a beta stage.\nComponents in beta stage may include breaking changes, new features, and bug fixes all within v0.x.x releases.</p>\n<h3 id="status">\n  Status\n</h3>\n\n<p><img src="https://badgen.net/badge/status/Stable/green" alt="Stable">\n<img src="https://badgen.net/badge/status/Beta/orange" alt="Beta">\n<img src="https://badgen.net/badge/status/Deprecated/grey" alt="Deprecated"></p>\n\x3c!-- AUTO-GENERATED-CONTENT:START (SUBPACKAGELIST) --\x3e\n<table>\n<thead>\n<tr>\n<th>Terra Package</th>\n<th>Version</th>\n<th>Status</th>\n<th>Dependencies</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-abstract-modal">terra-abstract-modal</a></td>\n<td><a href="https://www.npmjs.org/package/terra-abstract-modal"><img src="https://badgen.net/npm/v/terra-abstract-modal" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-abstract-modal"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-abstract-modal" alt="terra-abstract-modal"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-aggregator">terra-aggregator</a></td>\n<td><a href="https://www.npmjs.org/package/terra-aggregator"><img src="https://badgen.net/npm/v/terra-aggregator" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-aggregator"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-aggregator" alt="terra-aggregator"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-application-header-layout">terra-application-header-layout</a></td>\n<td><a href="https://www.npmjs.org/package/terra-application-header-layout"><img src="https://badgen.net/npm/v/terra-application-header-layout" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-application-header-layout"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-application-header-layout" alt="terra-application-header-layout"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-application-layout">terra-application-layout</a></td>\n<td><a href="https://www.npmjs.org/package/terra-application-layout"><img src="https://badgen.net/npm/v/terra-application-layout" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-application-layout"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-application-layout" alt="terra-application-layout"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-application-links">terra-application-links</a></td>\n<td><a href="https://www.npmjs.org/package/terra-application-links"><img src="https://badgen.net/npm/v/terra-application-links" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-application-links"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-application-links" alt="terra-application-links"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-application-menu-layout">terra-application-menu-layout</a></td>\n<td><a href="https://www.npmjs.org/package/terra-application-menu-layout"><img src="https://badgen.net/npm/v/terra-application-menu-layout" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-application-menu-layout"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-application-menu-layout" alt="terra-application-menu-layout"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-application-name">terra-application-name</a></td>\n<td><a href="https://www.npmjs.org/package/terra-application-name"><img src="https://badgen.net/npm/v/terra-application-name" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-application-name"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-application-name" alt="terra-application-name"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-application-navigation">terra-application-navigation</a></td>\n<td><a href="https://www.npmjs.org/package/terra-application-navigation"><img src="https://badgen.net/npm/v/terra-application-navigation" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-application-navigation"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-application-navigation" alt="terra-application-navigation"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-application-utility">terra-application-utility</a></td>\n<td><a href="https://www.npmjs.org/package/terra-application-utility"><img src="https://badgen.net/npm/v/terra-application-utility" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-application-utility"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-application-utility" alt="terra-application-utility"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-brand-footer">terra-brand-footer</a></td>\n<td><a href="https://www.npmjs.org/package/terra-brand-footer"><img src="https://badgen.net/npm/v/terra-brand-footer" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-brand-footer"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-brand-footer" alt="terra-brand-footer"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-collapsible-menu-view">terra-collapsible-menu-view</a></td>\n<td><a href="https://www.npmjs.org/package/terra-collapsible-menu-view"><img src="https://badgen.net/npm/v/terra-collapsible-menu-view" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-collapsible-menu-view"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-collapsible-menu-view" alt="terra-collapsible-menu-view"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-date-picker">terra-date-picker</a></td>\n<td><a href="https://www.npmjs.org/package/terra-date-picker"><img src="https://badgen.net/npm/v/terra-date-picker" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-date-picker"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-date-picker" alt="terra-date-picker"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-date-time-picker">terra-date-time-picker</a></td>\n<td><a href="https://www.npmjs.org/package/terra-date-time-picker"><img src="https://badgen.net/npm/v/terra-date-time-picker" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-date-time-picker"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-date-time-picker" alt="terra-date-time-picker"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-dialog-modal">terra-dialog-modal</a></td>\n<td><a href="https://www.npmjs.org/package/terra-dialog-modal"><img src="https://badgen.net/npm/v/terra-dialog-modal" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-dialog-modal"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-dialog-modal" alt="terra-dialog-modal"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-disclosure-manager">terra-disclosure-manager</a></td>\n<td><a href="https://www.npmjs.org/package/terra-disclosure-manager"><img src="https://badgen.net/npm/v/terra-disclosure-manager" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-disclosure-manager"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-disclosure-manager" alt="terra-disclosure-manager"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-embedded-content-consumer">terra-embedded-content-consumer</a></td>\n<td><a href="https://www.npmjs.org/package/terra-embedded-content-consumer"><img src="https://badgen.net/npm/v/terra-embedded-content-consumer" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-embedded-content-consumer"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-embedded-content-consumer" alt="terra-embedded-content-consumer"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-form-validation">terra-form-validation</a></td>\n<td><a href="https://www.npmjs.org/package/terra-form-validation"><img src="https://badgen.net/npm/v/terra-form-validation" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-form-validation"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-form-validation" alt="terra-form-validation"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-hookshot">terra-hookshot</a></td>\n<td><a href="https://www.npmjs.org/package/terra-hookshot"><img src="https://badgen.net/npm/v/terra-hookshot" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-hookshot"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-hookshot" alt="terra-hookshot"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-infinite-list">terra-infinite-list</a></td>\n<td><a href="https://www.npmjs.org/package/terra-infinite-list"><img src="https://badgen.net/npm/v/terra-infinite-list" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-infinite-list"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-infinite-list" alt="terra-infinite-list"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-layout">terra-layout</a></td>\n<td><a href="https://www.npmjs.org/package/terra-layout"><img src="https://badgen.net/npm/v/terra-layout" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-layout"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-layout" alt="terra-layout"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-menu">terra-menu</a></td>\n<td><a href="https://www.npmjs.org/package/terra-menu"><img src="https://badgen.net/npm/v/terra-menu" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-menu"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-menu" alt="terra-menu"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-modal-manager">terra-modal-manager</a></td>\n<td><a href="https://www.npmjs.org/package/terra-modal-manager"><img src="https://badgen.net/npm/v/terra-modal-manager" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-modal-manager"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-modal-manager" alt="terra-modal-manager"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-navigation-layout">terra-navigation-layout</a></td>\n<td><a href="https://www.npmjs.org/package/terra-navigation-layout"><img src="https://badgen.net/npm/v/terra-navigation-layout" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-navigation-layout"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-navigation-layout" alt="terra-navigation-layout"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-navigation-prompt">terra-navigation-prompt</a></td>\n<td><a href="https://www.npmjs.org/package/terra-navigation-prompt"><img src="https://badgen.net/npm/v/terra-navigation-prompt" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-navigation-prompt"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-navigation-prompt" alt="terra-navigation-prompt"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-navigation-side-menu">terra-navigation-side-menu</a></td>\n<td><a href="https://www.npmjs.org/package/terra-navigation-side-menu"><img src="https://badgen.net/npm/v/terra-navigation-side-menu" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-navigation-side-menu"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-navigation-side-menu" alt="terra-navigation-side-menu"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-notification-dialog">terra-notification-dialog</a></td>\n<td><a href="https://www.npmjs.org/package/terra-notification-dialog"><img src="https://badgen.net/npm/v/terra-notification-dialog" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-notification-dialog"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-notification-dialog" alt="terra-notification-dialog"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-popup">terra-popup</a></td>\n<td><a href="https://www.npmjs.org/package/terra-popup"><img src="https://badgen.net/npm/v/terra-popup" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-popup"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-popup" alt="terra-popup"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-slide-group">terra-slide-group</a></td>\n<td><a href="https://www.npmjs.org/package/terra-slide-group"><img src="https://badgen.net/npm/v/terra-slide-group" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-slide-group"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-slide-group" alt="terra-slide-group"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-slide-panel">terra-slide-panel</a></td>\n<td><a href="https://www.npmjs.org/package/terra-slide-panel"><img src="https://badgen.net/npm/v/terra-slide-panel" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-slide-panel"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-slide-panel" alt="terra-slide-panel"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-slide-panel-manager">terra-slide-panel-manager</a></td>\n<td><a href="https://www.npmjs.org/package/terra-slide-panel-manager"><img src="https://badgen.net/npm/v/terra-slide-panel-manager" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-slide-panel-manager"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-slide-panel-manager" alt="terra-slide-panel-manager"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-tabs">terra-tabs</a></td>\n<td><a href="https://www.npmjs.org/package/terra-tabs"><img src="https://badgen.net/npm/v/terra-tabs" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-tabs"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-tabs" alt="terra-tabs"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-theme-provider">terra-theme-provider</a></td>\n<td><a href="https://www.npmjs.org/package/terra-theme-provider"><img src="https://badgen.net/npm/v/terra-theme-provider" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-theme-provider"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-theme-provider" alt="terra-theme-provider"></a></td>\n</tr>\n<tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-time-input">terra-time-input</a></td>\n<td><a href="https://www.npmjs.org/package/terra-time-input"><img src="https://badgen.net/npm/v/terra-time-input" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Stable/green" alt="Stable"></td>\n<td><a href="https://david-dm.org/cerner/terra-framework?path=packages/terra-time-input"><img src="https://badgen.net/david/dep/cerner/terra-framework/packages/terra-time-input" alt="terra-time-input"></a></td>\n</tr>\n<tr>\n<td>\x3c!-- AUTO-GENERATED-CONTENT:END *--\x3e</td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n</tbody></table>\n<h3 id="deprecated">\n  Deprecated\n</h3>\n\n<table>\n<thead>\n<tr>\n<th>Terra Package</th>\n<th>Version</th>\n<th>Status</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-app-delegate">terra-app-delegate</a></td>\n<td><a href="https://www.npmjs.org/package/terra-app-delegate"><img src="https://badgen.net/npm/v/terra-app-delegate" alt="NPM version"></a></td>\n<td><img src="https://badgen.net/badge/status/Deprecated/grey" alt="Deprecated"></td>\n</tr>\n</tbody></table>\n<h2 id="supported-browsers">\n  Supported Browsers\n</h2>\n\n<table>\n<thead>\n<tr>\n<th>Browser</th>\n<th>Version</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>Chrome &amp; Chrome for Android</td>\n<td>Current</td>\n</tr>\n<tr>\n<td>Edge</td>\n<td>Current</td>\n</tr>\n<tr>\n<td>Firefox</td>\n<td>Current</td>\n</tr>\n<tr>\n<td>Internet Explorer</td>\n<td>10 &amp; 11</td>\n</tr>\n<tr>\n<td>Safari &amp; Mobile Safari</td>\n<td>Current</td>\n</tr>\n</tbody></table>\n<h2 id="internationalization-i18n">\n  Internationalization (I18n)\n</h2>\n\n<p>Please review <a href="https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/internationalization">Terra&#39;s Internationalization documentation</a> for more information. Included are directions on consumption and how internationalization is setup.</p>\n<h3 id="packages-requiring-i18n">\n  Packages Requiring I18n\n</h3>\n\n<ul>\n<li><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-application-header-layout">terra-application-header-layout</a></li>\n<li><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-application-layout">terra-application-layout</a></li>\n<li><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-application-links">terra-application-links</a></li>\n<li><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-application-utility">terra-application-utility</a></li>\n<li><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-collapsible-menu-view">terra-collapsible-menu-view</a></li>\n<li><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-date-picker">terra-date-picker</a></li>\n<li><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-date-time-picker">terra-date-time-picker</a></li>\n<li><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-menu">terra-menu</a></li>\n<li><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-notification-dialog">terra-notification-dialog</a></li>\n<li><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-popup">terra-popup</a></li>\n<li><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-tabs">terra-tabs</a></li>\n<li><a href="https://github.com/cerner/terra-framework/tree/master/packages/terra-time-input">terra-time-input</a></li>\n</ul>\n<h2 id="contributing">\n  Contributing\n</h2>\n\n<p>Please read through our <a href="/terra-framework/CONTRIBUTING.md">contributing guidelines</a>. Included are directions for issue reporting and pull requests.</p>\n<h2 id="local-development">\n  Local Development\n</h2>\n\n<ol>\n<li>Install docker <a href="https://www.docker.com/">https://www.docker.com/</a> to run browser tests.</li>\n<li>Install dependencies and run tests.<pre><code class="codeblock language-sh">npm install\nnpm run test</code></pre>\n</li>\n</ol>\n<h2 id="license">\n  LICENSE\n</h2>\n\n<p>Copyright 2017 - 2019 Cerner Innovation, Inc.</p>\n<p>Licensed under the Apache License, Version 2.0 (the &quot;License&quot;); you may not use this file except in compliance with the License. You may obtain a copy of the License at</p>\n<p>&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.apache.org/licenses/LICENSE-2.0">http://www.apache.org/licenses/LICENSE-2.0</a></p>\n<p>Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an &quot;AS IS&quot; BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.</p>\n'}})}}}]);
//# sourceMappingURL=439-6afdf616511025de66bd.js.map
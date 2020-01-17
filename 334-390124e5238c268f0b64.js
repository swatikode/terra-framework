(window.webpackJsonp=window.webpackJsonp||[]).push([[334],{1005:function(n,e){},1717:function(n,e,d){"use strict";d.r(e),e.default="Changelog\n=========\n\nUnreleased\n----------\n\n3.19.0 - (January 7, 2020)\n------------------\n### Changed\n* Update screenshots\n\n### Removed\n* Removed yarn reference in docs\n\n3.18.0 - (December 16, 2019)\n------------------\n### Changed\n* Update screenshot\n\n3.17.0 - (December 10, 2019)\n------------------\n### Added\n* Added orion-fusion-theme and generated the respective reference wdio screenshots.\n\n3.16.0 - (November 7, 2019)\n------------------\n### Changed\n* Resolved lint warnings for multiple empty lines\n\n3.15.0 - (October 16, 2019)\n------------------\n### Changed\n* Minor dependency updates\n\n### Fixed\n* Place focus onto the HTML body element upon modal dismissal in IE.\n  * This is done _only_ when the modal is disclosed via a non-HTML element (SVG, for instance).\n\n3.14.0 - (October 3, 2019)\n------------------\n### Changed\n* Minor dependency updates\n\n3.13.0 - (September 26, 2019)\n------------------\n### Changed\n* Minor dependency updates\n\n### Fixed\n* Check whether `focus` is defined for the modal trigger element before restoring focus.\n\n3.12.0 - (September 19, 2019)\n------------------\n### Changed\n* Removed `details` tag from doc-site.\n* Doc site example module import syntax modified to use package.json name resolution\n\n### Added\n* Added en-CA translations.\n\n3.11.0 - (September 6, 2019)\n------------------\n### Changed\n* Cleaned up imports in examples and test files\n* Updated `keycode-js` from `v1.0.4` to `v2.0.1`\n* Moved running the wicg-inert script to when 'terra-abstract-modal' is mounted\n\n3.10.0 - (August 21, 2019)\n------------------\n### Fixed\n* Ensure aria-hidden attribute on root node is properly removed when modal is closed\n\n3.9.0 - (August 14, 2019)\n------------------\n### Changed\n* updated package.json test scripts\n\n3.8.0 - (July 30, 2019)\n------------------\n### Removed\n* Removed DEPENDENCIES.md file\n\n3.7.1 - (July 23, 2019)\n------------------\n### Changed\n* Updated DEPENDENCIES.md doc\n\n3.7.0 - (July 23, 2019)\n------------------\n### Added\n* Added Node.contains polyfill to better support IE 10 / IE 11\n\n### Fixed\n* Fixed issue in IE 10 when trying to pull value from data attribute\n\n3.6.0 - (July 16, 2019)\n------------------\n### Added\n* Added visually hidden text to better indicate beginning and ending of modal dialog\n* Added translations for visually hidden text that indicates beginning and end of modal dialog\n* Added documentation on required peerDependencies\n\n\n3.5.0 - (July 10, 2019)\n------------------\n### Fixed\n* Added `data-overlay-count` attribute to root document when overlay is opened\n* Added check for `data-modal-count` attribute on root document to track opening and closing of overlays and modals,\n  to prevent the removal of the `inert` attribute from the root element if another overlay or abstract modal exists.\n\n### Changed\n* When the abstract modal is open on touch devices, it will now focus on the first interactive DOM element within it. This enables focus to be shifted into the modal correctly when using VoiceOver on iOS.\n\n3.4.0 - (July 2, 2019)\n------------------\n### Changed\n* Renamed test and example SCSS files to end with `.module.scss` extension\n* Removed conditional logic required to import wicg-inert polyfill\n\n3.3.0 - (June 19, 2019)\n------------------\n### Added\n* Added check to only load inert polyfill if it is not already defined on the Element prototype\n\n### Changed\n* Removed all inline styles from Dev-site components and implemented the same styles using external css.\n* Update wdio spec to use Terra.describeViewports\n\n3.2.0 - (June 12, 2019)\n------------------\n### Changed\n* Cleaned up Jest/WDIO tests\n\n### Removed\n* Removed node_modules from .npmignore\n\n3.1.0 - (May 21, 2019)\n------------------\n### Changed\n* Update tests for terra-toolkit v5 and terra-dev-site v5 changes\n* Update tests to use `Terra.should.validateElement()`\n\n3.0.0 - (May 13, 2019)\n------------------\n### Breaking Changes\n* Removed focus-trap from abstract modal\n* Replaced with functionality that will disable focus on elements outside of the modal (not including content rendered from the modal in a portal)\n* Removed `isFocused` prop\n* Removed `fallbackFocus` prop. Focus now always shifts to modal container when opened.\n\n### Added\n* Component specific handling for pressing Escape key to close the abstract modal\n\n2.6.0 - (April 24, 2019)\n------------------\n### Changed\n* Moved packages we use solely in doc examples and tests to devDependencies\n\n2.5.0 - (March 26, 2019)\n------------------\n### Changed\n* Update react/react-dom peer-dependency to latest stable minor release\n* Updated `rootProp` default value from `[data-terra-base]` to `#root`\n\n### Removed\n* Removed peer dependency on terra-base\n* Removed baseStyles import from terra-base\n\n2.4.0 - (March 12, 2019)\n------------------\n### Changed\n* Replaced local keyCode values with keycode-js npm package\n\n2.3.0 - (March 5, 2019)\n------------------\n### Changed\n* escapeDeactivates option set on focus trap to prevent escape from breaking focus\n\n2.2.0 - (February 5, 2019)\n------------------\n### Changed\n* Migrate package to the terra-framework repository\n\n2.1.0 - (January 26, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.0.0 - (January 22, 2019)\n------------------\n### Changed\n* Updated theme variables\n\n1.29.0 - (January 22, 2019)\n------------------\n### Changed\n* Updated dependencies to fix major version bump issues\n\n1.28.0 - (January 22, 2019)\n------------------\n### Changed\n* Updated dependencies to fix major version bump issues\n\n1.27.0 - (January 8, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.26.0 - (January 2, 2019)\n------------------\n### Added\n* Added support for the fallbackFocus option of FocusTrap\n\n### Changed\n* Removed use of componentWillReceiveProps\n\n1.25.1 - (November 20, 2018)\n------------------\n### Changed\n* Patch dependency version bump\n\n1.25.0 - (November 19, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.24.0 - (November 13, 2018)\n------------------\n### Changed\n* Defaulted role prop to dialog.\n* Added aria-modal to the modal.\n\n1.23.0 - (November 9, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.22.0 - (October 24, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.21.0 - (October 16, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.20.0 - (October 8, 2018)\n------------------\n### Changed\n* Upgrade focus-trap-react to ^4.0.1\n\n1.19.0 - (October 2, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.18.0 - (September 25, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n* Use absolute position for modal and modal overlay for iOS stability\n\n1.17.1 - (September 6, 2018)\n------------------\n### Changed\n* Patch dependency version bump\n\n1.17.0 - (September 5, 2018)\n------------------\n### Changed\n* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2\n* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2\n\n1.16.0 - (September 4, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.15.0 - (August 29, 2018)\n------------------\n### Changed\n* Formatting changes per eslint v5 update\n\n1.14.0 - (August 1, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.13.0 - (July 19, 2018)\n------------------\n### Changed\n* Add .module extension to SCSS file(s)\n\n1.12.0 - (July 17, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n* Formatting changes per eslint v4 update\n* Required props no longer set a default prop\n\n1.11.0 - (July 10, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.10.0 - (June 28, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n### Added\n* Added change log to the documentation on terra-dev-site\n\n1.9.0 - (June 22, 2018)\n------------------\n### Changed\n* Moved terra-base from dependency to peerDependency\n\n1.8.0 - (June 19, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.7.0 - (June 12, 2018)\n------------------\n### Changed\n* Updated \"test:jest\" script to work on windows.\n* Converted Nightwatch tests to WebdriverIO.\n\n1.6.0 - (May 30, 2018)\n------------------\n### Changed\n* Updated structure to match terra-dev-site 1.0 and moved doc examples internal.\n\n1.5.0 - (May 25, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.4.0 - (May 23, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.3.0 - (May 16, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.2.0 - (May 9, 2018)\n------------------\n### Changed\n* Add more z-indexes\n\n1.1.0 - (May 2, 2018)\n------------------\n### Changed\n* Updated outdated documentation\n* Minor dependency version bump\n\n1.0.0 - (April 20, 2018)\n------------------\nInitial stable release\n"},2292:function(n,e,d){"use strict";var o=d(5);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=o(d(0)),a=o(d(1004)),r=o(d(1717)),i=function(){return t.default.createElement(a.default,{packageName:"terra-abstract-modal",srcPath:"https://github.com/cerner/terra-framework/tree/master/packages/terra-abstract-modal",readme:r.default})};e.default=i}}]);
//# sourceMappingURL=334-390124e5238c268f0b64.js.map
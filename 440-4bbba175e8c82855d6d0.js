(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{1338:function(e,n,s){e.exports={marked:"marked-module__marked___2rRhM"}},2339:function(e,n,s){"use strict";s.r(n);var a=s(0),o=s.n(a),t=s(4),r=s.n(t),p=s(1338),d=s.n(p),i=r.a.bind(d.a);n.default=function(){return o.a.createElement("div",{dir:"ltr",className:i("marked"),dangerouslySetInnerHTML:{__html:'<h1 id="upgrade-guide-v2-to-v3"><a class="anchor" aria-hidden="true" tabIndex="-1" href="#upgrade-guide-v2-to-v3"><span class="icon icon-link" /></a>Upgrade Guide - v2 to v3</h1><p>Versions 2.x of the DisclosureManager utilize prop injection to provide child components with functions used to change the DisclosureManager state. With versions 3.x, the DisclosureManager uses React&#39;s Context API instead of prop injection to provide those functions. Components that interact with a DisclosureManager (or one of Terra&#39;s provided implementations, ModalManager or SlidePanelManager) must be updated to continue getting access to the DisclosureManager APIs.</p>\n<p>Components today that receive an <code>app</code> prop from a DisclosureManager will need to use the <code>withDisclosureManager()</code> higher order component generator to interface with the DisclosureManager&#39;s context. Instead of a prop named <code>app</code>, components wrapped with <code>withDisclosureManager()</code> will receive a prop named <code>disclosureManager</code>. </p>\n<p>The <code>disclosureManager</code> prop is equivalent to the previous <code>app</code> prop; it has just been renamed to better unify the consumer-facing API conventions with the DisclosureManager itself. As a result of this renaming, the <code>terra-app-delegate</code> package has been deprecated and is no longer used. The <code>disclosureManagerShape</code> object can be imported from the <code>terra-disclosure-manager</code> package instead for use in other propType declarations.</p>\n<p>With prop injection, the <code>app</code> prop was only provided to immediate children of the DisclosureManager. However, by using context, the <code>disclosureManager</code> value will be exposed to any children of the DisclosureManager that are wrapped with <code>withDisclosureManager()</code>. Components that are currently passing an <code>app</code> prop around to their own child components should be able to remove that logic and have those subsequent children interface with the context directly. Components that do not directly interact with the DisclosureManager should be able to safely ignore its existance.</p>\n<p>The below examples show contrasting v2.x and v3.x implementations of components that interact with a DisclosureManager (in this case, a ModalManager).</p>\n<pre><code class="codeblock language-diff">/**\n<span class="token unchanged"> * v2.x to v3.x\n */\n import Base from \'terra-base\';\n import ModalManager from \'terra-modal-manager\'; \n</span><span class="token deleted-sign deleted">- import AppDelegate from \'terra-app-delegate\';\n</span><span class="token inserted-sign inserted">+ import { withDisclosureManager, disclosureManagerShape } from \'terra-disclosure-manager\';\n</span>\n<span class="token deleted-sign deleted">- const MyDisclosureComponent = ({ app }) => (\n</span><span class="token inserted-sign inserted">+ const MyDisclosureComponent = withDisclosureManager(({ disclosureManager }) => (\n</span><span class="token unchanged">   &lt;Button\n     text="Close Modal"\n     onClick={() => { \n</span><span class="token deleted-sign deleted">-      app.closeDisclosure();\n</span><span class="token inserted-sign inserted">+      disclosureManager.closeDisclosure();\n</span><span class="token unchanged">     }}\n   />\n</span><span class="token deleted-sign deleted">- );\n</span><span class="token inserted-sign inserted">+ ));\n</span>\n<span class="token unchanged"> MyDisclosureComponent.propType = {\n</span><span class="token deleted-sign deleted">-   app: AppDelegate.propType,\n</span><span class="token inserted-sign inserted">+   disclosureManager: disclosureManagerShape,\n</span><span class="token unchanged"> };\n</span>\n<span class="token deleted-sign deleted">- const MyComponent = ({ app }) => (\n</span><span class="token inserted-sign inserted">+ const MyComponent = withDisclosureManager(({ disclosureManager }) => (\n</span><span class="token unchanged">    &lt;Button\n      text="Launch Modal"\n      onClick={() => { \n</span><span class="token deleted-sign deleted">-       app.disclose({\n</span><span class="token inserted-sign inserted">+       disclosureManager.disclose({\n</span><span class="token unchanged">          preferredType: \'modal\',\n          content: {\n            key: \'MY-MODAL-DISCLOSURE\',\n            component: &lt;MyDisclosureComponent />,\n          }\n        });\n      }}\n   />\n</span><span class="token deleted-sign deleted">- );\n</span><span class="token inserted-sign inserted">+ ));\n</span>\n<span class="token unchanged"> MyComponent.propType = {\n</span><span class="token deleted-sign deleted">-   app: AppDelegate.propType,\n</span><span class="token inserted-sign inserted">+   disclosureManager: disclosureManagerShape,\n</span><span class="token unchanged"> };\n</span>\n<span class="token unchanged"> const MyApp = () => (\n   &lt;Base locale="en">\n     &lt;ModalManager>\n       &lt;MyComponent />\n     &lt;/ModalManager>\n   &lt;/Base>\n );</span></code></pre>\n'}})}}}]);
//# sourceMappingURL=440-4bbba175e8c82855d6d0.js.map
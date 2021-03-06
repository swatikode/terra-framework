import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

// Component Source
import SlideGroupSrc from '!raw-loader!../../../../src/SlideGroup.jsx';

// Example Files
import SlideGroupDemo from '../example/SlideGroupDemo';
import SlideGroupDemoSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SlideGroupDemo';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Non-Animated SlideGroup',
        example: <SlideGroupDemo />,
        source: SlideGroupDemoSrc,
      },
      {
        title: 'Animated SlideGroup',
        example: <SlideGroupDemo isAnimated />,
        source: SlideGroupDemoSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Slide Group',
        componentSrc: SlideGroupSrc,
      },
    ]}
  />
);

export default DocPage;

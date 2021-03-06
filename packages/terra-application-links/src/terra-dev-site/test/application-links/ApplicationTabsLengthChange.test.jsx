import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ApplicationTabs from '../../../tabs/ApplicationTabs';
import testShortConfig from '../common/testShortConfig';
import testLinkConfig from '../common/testLinkConfig';
import demoStyles from './demoStyles.module.scss';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      shortLinks: true,
    };
  }

  handleToggle() {
    this.setState(prevState => ({ shortLinks: !prevState.shortLinks }));
  }

  render() {
    return (
      <MemoryRouter
        initialEntries={testLinkConfig.map(link => link.path)}
        initialIndex={0}
      >
        <div>
          <div className={demoStyles['demo-header']}>
            <ApplicationTabs id="test-tabs" links={this.state.shortLinks ? testShortConfig : testLinkConfig} />
          </div>
          <button type="button" onClick={this.handleToggle}>Click to toggle link length</button>
        </div>
      </MemoryRouter>
    );
  }
}

import React from 'react';
import Menu from '../../../../Menu';

class SubMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: false };
  }

  componentDidMount() {
    this.forceUpdate();
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }

  getButtonNode() {
    return this.buttonNode;
  }

  handleButtonClick() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <div>
          This menu has a nested submenu. When the Nested Menu item is clicked as submenu should replace the initial menu.
          There should be a header with a back button and a title of Nested Menu.
        </div>
        <Menu
          isOpen={this.state.open}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
        >
          <Menu.Item text="Default 1" key="1" className="TestInitialMenuContent" />
          <Menu.Item
            text="Nested Menu"
            key="2"
            className="TestNestedMenu"
            subMenuItems={[
              <Menu.Item text="Default 2.1" key="2.1" className="TestNestedMenuContent" />,
              <Menu.Item text="Default 2.2" key="2.2" className="TestNestedMenuContent" />,
              <Menu.Item text="Default 2.3" key="2.3" className="TestNestedMenuContent" />,
              <Menu.Item text="Default 2.4" key="2.4" className="TestNestedMenuContent" />,
              <Menu.Item text="Default 2.5" key="2.5" className="TestNestedMenuContent" />,
              <Menu.Item text="Default 2.6" key="2.6" className="TestNestedMenuContent" />,
              <Menu.Item text="Default 2.7" key="2.7" className="TestNestedMenuContent" />,
              <Menu.Item text="Default 2.8" key="2.8" className="TestNestedMenuContent" />,
              <Menu.Item text="Default 2.9" key="2.9" className="TestNestedMenuContent" />,
              <Menu.Item text="Default 3.0" key="3.0" className="TestNestedMenuContent" />,
              <Menu.Item text="Default 3.1" key="3.1" className="TestNestedMenuContent" />,
              <Menu.Item text="Default 3.2" key="3.2" className="TestNestedMenuContent" />,
              <Menu.Item text="Default 3.3" key="3.3" className="TestNestedMenuContent" />,
            ]}
          />
          <Menu.Item text="Default 3" key="3" />
          <Menu.Item text="Default 4" key="4" />
          <Menu.Item text="Default 5" key="5" />
        </Menu>
        <button type="button" id="sub-menu-button" onClick={this.handleButtonClick} ref={this.setButtonNode}>
          Default Menu
        </button>
      </div>
    );
  }
}

export default SubMenu;

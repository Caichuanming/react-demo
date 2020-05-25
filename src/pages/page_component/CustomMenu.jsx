import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

function CustomMenu() {
  return (
    <Menu
      // onClick={this.handleClick}
      mode="horizontal"
    >
      <Menu.Item key="Home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="About">
        <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item key="List">
        <Link to="/list">List</Link>
      </Menu.Item>
    </Menu>
  );
}

export default CustomMenu;

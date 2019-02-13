import React, { Component } from "react";
import { Menu, Icon } from "antd";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const divStyle = {};

class Navbar extends Component {
  state = {
    current: "home"
  };

  handleClick = (e: any) => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        style={divStyle}
      >
        <Menu.Item key="home">
          <Icon type="home" />
          Home
        </Menu.Item>

        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="branches" />
              Projects
            </span>
          }
        >
          <MenuItemGroup title="Personal">
            <Menu.Item key="pokedex">Pokedex</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Hackathons">
            <Menu.Item key="cheffam">Cheffam</Menu.Item>
            <Menu.Item key="tampbud">TampBud</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="school">
            <Menu.Item key="matchingPennies">Matching Pennies</Menu.Item>
            <Menu.Item key="whackAProf">Whack-A-Prof</Menu.Item>
          </MenuItemGroup>
        </SubMenu>

        <Menu.Item key="resume">
          <Icon type="profile" />
          Résumé
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;

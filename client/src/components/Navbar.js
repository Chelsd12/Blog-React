import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";

export default class Navbar extends React.Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
      return (
        <Segment inverted>
          <Menu inverted pointing secondary>
            <NavLink exact to="/">
            <Menu.Item 
                name='home' 
                active={activeItem === 'home'} 
                onClick={this.handleItemClick} 
                color="teal"
            />
            </NavLink>
            <NavLink exact to="/blogs">
            <Menu.Item
              name='Blogs'
              active={activeItem === 'Blogs'}
              onClick={this.handleItemClick}
              color="teal"
            />
            </NavLink>
          </Menu>
        </Segment>
      )
    }
  };//end of class Navbar
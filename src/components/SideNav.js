import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


class SideNav extends Component {
  render() {
    return (
      <div>
        <Drawer >
          <MenuItem onTouchTap={()=>console.log('mentu')}>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    )
  }
}
export default SideNav;

import React, { Component } from 'react';
const style = {
  navStyle: {
    backgroundColor: '#512da8',
  },
};
class NavBar extends Component {
  render() {
    return (
      <nav style={style.navStyle} className="navbar navbar-light">
        <a href="#" className="text-white navbar-brand">
          Default
        </a>
      </nav>
    );
  }
}
export default NavBar;

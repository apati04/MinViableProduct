import React, { Component } from 'react';
const style = {
  navStyle : {
    backgroundColor : '#512da8'
  }
};
class NavBar extends Component {
  render() {
    return (
      <nav style={style.navStyle} className="navbar navbar-light">
        <a href="#" className="font-bold text-white navbar-brand">
          Learn Javascript{' '}
          <span>
            <small className="ml-1 font-weight-100">
              by Andrew Patipaksiri
            </small>
          </span>
        </a>
      </nav>
    );
  }
}
export default NavBar;

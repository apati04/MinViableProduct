import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import '../../dist/style.css';
// only class components can have state
class SearchBar extends Component {
  // initialize state in a class component
  // controlled component*
  constructor(props) {
    super(props); // this is calling the parent method with super
    // initialize state. the obj property is what updates the state
    // state only exists on a class base component and can be initialized:
    //  state inside render
    this.state = { term: '' };
  }

  // handles input change
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
  render() {
    // manipulate state with this.setState, causes re-rendering into the DOM on state change
    return (
      <div className="search-bar">
        <div>
          <RaisedButton className="pink lighten-3  " onClick={ (event) => this.onInputChange('es6 scoping') }>ES6 Scoping</RaisedButton>
          <RaisedButton className="pink lighten-3  " onClick={ (event) => this.onInputChange('es6 promises') }>ES6 Promises</RaisedButton>
          <RaisedButton className="pink lighten-3   " onClick={ (event) => this.onInputChange('es6 arrow functions') }>ES6 Functions</RaisedButton>
          <RaisedButton className="pink lighten-3   " onClick={ (event) => this.onInputChange('es6 string templating') }>ES6 String Templating</RaisedButton>
          <RaisedButton className="pink lighten-3  " onClick={ (event) => this.onInputChange('es6 object enhancements') }>ES6 Objects</RaisedButton>
        </div>


      </div>

    );
  }
}



export default SearchBar;
// React.createElement (line 3)
// define new class called searchbar, & give it all functionality of React.Component
// grab the Component from from react
// *define render method in a class
// *must return jsx or will give error
// every class must have a render method
// create CLASS based Component
// give index.js ability to import this file
//
// search component internal record keeping
// ie. user typed in something
// ********
// functional component
//********
// const SearchBar = () => {

//   return <input />;
// }
// When to use class vs functional component?
//
// inside render HANDLE EVENTHANDLER onInputChange and pass it a prop  with a value of onInputChange(event) *event is an object that describes the content or what was changed
//
// when referencing a variable use {};

import React, { Component } from 'react';
import {Button, Icon} from 'react-materialize';
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
          <Button className="pink lighten-3  " onClick={ (event) => this.onInputChange('es6 scoping') }><Icon right>polymer</Icon>ES6 Scoping</Button>
          <Button className="pink lighten-3  " onClick={ (event) => this.onInputChange('es6 promises') }><Icon right>polymer</Icon>ES6 Promises</Button>
          <Button className="pink lighten-3   " onClick={ (event) => this.onInputChange('es6 arrow functions') }><Icon right>polymer</Icon>ES6 Functions</Button>
          <Button className="pink lighten-3   " onClick={ (event) => this.onInputChange('es6 string templating') }><Icon right>polymer</Icon>ES6 String Templating</Button>
          <Button className="pink lighten-3  " onClick={ (event) => this.onInputChange('es6 object enhancements') }><Icon right>polymer</Icon>ES6 Objects</Button>
        </div>

        <div>
          <Button className="light-blue lighten-2" onClick={ (event) => this.onInputChange('javascript Bubble Sort ') }><Icon right>turned_in_not</Icon>Bubble Sort</Button>
          <Button className="light-blue lighten-2 " onClick={ (event) => this.onInputChange('javascript Merge Sort') }><Icon right>turned_in_not</Icon>Merge Sort</Button>
          <Button className="light-blue lighten-2 " onClick={ (event) => this.onInputChange('javascript quick sort ') }><Icon right>turned_in_not</Icon>Quick Sort</Button>
          <Button className="light-blue lighten-2 " onClick={ (event) => this.onInputChange('javascript insertion sort ') }><Icon right>turned_in_not</Icon>Insertion Sort</Button>
          <Button className="light-blue lighten-2 " onClick={ (event) => this.onInputChange('javascript selection sort ') }><Icon right>turned_in_not</Icon>Selection Sort</Button>
        </div>
        <div>
          <Button className="orange lighten-2 " onClick={ (event) => this.onInputChange('javascript stacks queue') }><Icon right>code</Icon>Stacks & Queues</Button>
          <Button className="orange lighten-2 " onClick={ (event) => this.onInputChange('javascript graph data structure') }><Icon right>code</Icon>Graph</Button>
          <Button className="orange lighten-2 " onClick={ (event) => this.onInputChange('linked list javascript') }><Icon right>code</Icon>Linked List</Button>
          <Button className="orange lighten-2 " onClick={ (event) => this.onInputChange('binary tree javascript') }><Icon right>code</Icon>Binary Tree</Button>
          <Button className="orange lighten-2 " onClick={ (event) => this.onInputChange('hash table javascript') }><Icon right>code</Icon>Hash Table</Button>
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

import React, { Component } from 'react';

class Category extends Component {
    constructor(props) {
    super(props); // this is calling the parent method with super
    // initialize state. the obj property is what updates the state
    // state only exists on a class base component and can be initialized:
    //  state inside render
    this.state = { term: '' }; 
  }
  render() {
    // manipulate state with this.setState, causes re-rendering into the DOM on state change
    return (
      <div className="search-bar">
        <input  
          value={this.state.term}
          onChange = { (event) => this.onInputChange(event.target.value) } />
      </div>
    )

  }
}

export default Category
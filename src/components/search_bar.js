import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {term: ''}
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <div>
          <Button className="btn" onClick={ (event) => this.onInputChange('es6 scoping') }>ES6 Scoping</Button>
          <Button className="btn" onClick={ (event) => this.onInputChange('es6 promises') }>ES6 Promises</Button>
          <Button className="btn" onClick={ (event) => this.onInputChange('es6 arrow functions') }>ES6 Functions</Button>
          <Button className="btn" onClick={ (event) => this.onInputChange('es6 string templating') }>ES6 String Templating</Button>
          <Button className="btn" onClick={ (event) => this.onInputChange('es6 object enhancements') }>ES6 Objects</Button>
          <Button className="btn" onClick={ (event) => this.onInputChange('es6 map') }>ES6 Map</Button>
          <Button className="btn" onClick={ (event) => this.onInputChange('es6 set') }>ES6 Set</Button>
          <Button className="btn" onClick={ (event) => this.onInputChange('es6 destructuring') }>ES6 Destructuring</Button>
        </div>
      </div>

    );
  }
}
export default SearchBar;

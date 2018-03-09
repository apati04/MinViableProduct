import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-header">
          <div className="bg-light bmd-form-group bmd-collapse-inline pull-xs-right">
            <button
              className="btn bmd-btn-icon"
              for="search"
              data-toggle="collapse"
              data-target="#collapse-search"
              aria-expanded="false"
              aria-controls="collapse-search"
            >
              <i className="material-icons">search</i>
            </button>
            <span id="collapse-search" className="collapse">
              <input
                className="form-control small"
                id="search"
                placeholder="Search for videos..."
                type="text"
              />
            </span>
          </div>
        </div>
        <div className="p-3 list-group list-group-flush">
          <h6 className="list-group-item-heading border-bottom">Basic</h6>
          <button
            className="list-group-item list-group-item-action active"
            id="list-jsfun-list"
            data-toggle="list"
            aria-controls="jsfun"
            onClick={() => this.onInputChange('javascript fundamentals')}
          >
            JS Fundamentals
          </button>
          <button
            type="button"
            id="list-hof-list"
            data-toggle="list"
            aria-controls="hof"
            className="list-group-item list-group-item-action"
            onClick={(event) => this.onInputChange('higher order functions')}
          >
            Higher Order Functions
          </button>
          <button
            type="button"
            id="list-reactjs-list"
            data-toggle="list"
            aria-controls="reactjs"
            className="list-group-item list-group-item-action"
            onClick={({ target: { innerText } }) =>
              this.onInputChange(innerText)}
          >
            ReactJS
          </button>
          <button
            className="list-group-item list-group-item-action"
            id="list-es6string-list"
            data-toggle="list"
            aria-controls="es6string"
            onClick={({ target: { innerText } }) =>
              this.onInputChange(innerText)}
          >
            ES6 String Templating
          </button>
          <button
            id="list-es6objects-list"
            data-toggle="list"
            aria-controls="es6objects"
            className="list-group-item list-group-item-action"
            onClick={({ target: { innerText } }) =>
              this.onInputChange(innerText)}
          >
            ES6 Objects
          </button>
        </div>
      </div>
    );
  }
}
export default SearchBar;


import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../dist/style.css';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';

const render = (Component) => {
    ReactDOM.render(
      <AppContainer>
        <Component />
      </AppContainer>,
      document.querySelector('.container')
    );
  };

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}

import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import SearchBar from './components/search_bar';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// Used by Material-ui

import '../dist/style.css';

import App from './components/App';
import { AppContainer } from 'react-hot-loader';
  injectTapEventPlugin();
  const render = (Component) => {

    ReactDOM.render(
      <AppContainer>
        <Component />
      </AppContainer>,
      document.getElementById('root')
    );
  };

  render(App);

  // Hot Module Replacement API
  if (module.hot) {
    module.hot.accept('./components/App', () => {

      render(App);
    });
  }

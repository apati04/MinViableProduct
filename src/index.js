import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import SearchBar from './components/search_bar';
import { Router, Route, Link } from 'react-router';
import {Button, Icon} from 'react-materialize';


const API_KEY = 'AIzaSyDWIuVtuCczj6s_5WKw0N8QSRPuaeNQwzU';



class App extends Component {
  constructor(props) { //construct and init state
    super(props);
      // #28: add state for selected videos; pass callback into videoList, then videoListItem
      this.state = {
        videos: [] ,
        selectedVideo: null
      }; // list of objects
      this.videoSearch('es6');

  }

  videoSearch(term){
    YTSearch( {key: API_KEY, term: term}, (videos) => {
        // set the state videos. use param es6 syntas short obj creation { name };
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      });
  }
  render() {
    //throttle a.k.a debounce into search bar
    const videoSearch = (term) => {this.videoSearch(term)};

    return (
      // need to pass videos from parent App to child VideoList; passing props (videos={t.s.v})
      // #28 pass callbacks to video list and downwards

        <div>
          <SearchBar onSearchTermChange={videoSearch} />
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
        </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

// <App /> this creates an instance of a class 'App'
// App = class of a component
// <> *JSX tag

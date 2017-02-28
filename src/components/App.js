import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import SearchBar from './search_bar';
const API_KEY = 'AIzaSyDWIuVtuCczj6s_5WKw0N8QSRPuaeNQwzU';


class App extends Component {
  constructor(props) {
    super(props);

      this.state = {
        videos: [] ,
        selectedVideo: null
      }; // list of objects
      this.videoSearch('es6');

  }
  videoSearch(term){
    YTSearch( {key: API_KEY, term: term}, (videos) => {

        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      });
  }
  render() {
    const videoSearch = (term) => {this.videoSearch(term)};
    return (
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
export default App;

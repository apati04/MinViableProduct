import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search-promise';
import YTCardList from './YTCardList';
import VideoDetail from './video_detail';
import SearchBar from './search_bar';
import NavBar from './NavBar';

class App extends Component {
  state = {
    videos        : [],
    selectedVideo : null
  };
  componentDidMount() {
    this.videoSearch('javascript fundamentals');
  }
  videoSearch = async (term) => {
    const request = await YTSearch({
      key  : process.env.REACT_APP_YOUTUBE_KEY,
      term
    });
    console.log(request);
    this.setState({
      videos        : request,
      selectedVideo : request[0]
    });
  };
  render() {
    const videoSearch = (search) => {
      this.videoSearch(search);
    };
    return (
      <div className="bg-light">
        <NavBar />
        <div className="d-flex justify-content-between">
          <SearchBar onSearchTermChange={videoSearch} />
          <div className="container m-auto p-5">
            <VideoDetail video={this.state.selectedVideo} />
            <YTCardList
              onVideoSelect={(selectedVideo) =>
                this.setState({ selectedVideo })}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;

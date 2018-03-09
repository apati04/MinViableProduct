// this component will list items & detail, no need for state,
// functional component
import React from 'react';
import YTCardItem from './YTCardItem';
// in a functional class props is an argument.... in a class it is a method so this.props
const YTCardList = (props) => {
  const videoItems = props.videos.map((video) => {
    // each video has an etag (check network tab)
    return (
      <YTCardItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return (
    <div className="list-group list-group-flush">
      <div className="card">
        <div class="card-header">Featured</div>
        <div className="card-body">{videoItems}</div>
      </div>
    </div>
  );
};

export default YTCardList;

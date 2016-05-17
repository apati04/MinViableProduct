// this component will list items & detail, no need for state,
// functional component
import React from 'react';
import VideoListItem from './video_list_item';
// in a functional class props is an argument.... in a class it is a method so this.props
const VideoList = (props) => {
  const videoItems = props.videos.map((video) =>{ 
    // each video has an etag (check network tab)
    return (
      <VideoListItem 
        onVideoSelect = {props.onVideoSelect}
        key={video.etag} 
      video={video} />
    )
  });

  return (
    // col with width 4
    // map over videos and render each video to page
    // **react has its own process of rendering a list** it requires a unique id so react can check for the element to change
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
};

export default VideoList;
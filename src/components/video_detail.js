// will component maintain state... properties are available through props (title...etc);
// functional component
import React from 'react';

const VideoDetail = ({video}) => {
  // add a check for video
  if(!video){
    return (<div>Wait!</div>)
  }

  // craft embed url
  // string interpolation
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;


  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
          




    </div>
  
  )
};

export default VideoDetail;
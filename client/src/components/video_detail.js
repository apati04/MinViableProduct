import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Wait!</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="card">
      <h5
        style={{ height: '65px' }}
        className="card-header text-center font-weight-bold"
      >
        <span className="align-middle">{video.snippet.title}</span>
      </h5>
      <div className="card-body">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} />
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;

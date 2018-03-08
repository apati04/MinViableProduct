import React from 'react';

const YTCardItem = ({ video, onVideoSelect }) => {
  const { default: { url, width, height } } = video.snippet.thumbnails;
  return (
    <div
      className=" border-bottom list-group-item align-items-center mt-1 p-2"
      onClick={() => onVideoSelect(video)}
    >
      <div className="d-flex flex-row">
        <img
          src={url}
          alt=""
          width={width}
          height={height}
          className="d-inline-flex card-img-left d-none d-md-block"
        />
        <div className="flex-column">
          <p className="lead card-title">{video.snippet.title}</p>
          <small className="card-text">{video.snippet.description}</small>
        </div>
      </div>
    </div>
  );
};

export default YTCardItem;

import React from 'react';
import PropTypes from 'prop-types';

const VideoDetail = ({video}) => {

  const videoId = video.id.videoId;
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title={video.snippet.title} className="embed-responsive-item" src={videoUrl}></iframe>
      </div>
      <div className="details">
        <div>
          <h5>{ video.snippet.title }</h5>
        </div>
        <div>{ video.snippet.description }</div>
      </div>
    </div>
  );
};

VideoDetail.propTypes = {
  video: PropTypes.object,
};

export default VideoDetail;
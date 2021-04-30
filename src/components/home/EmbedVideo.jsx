import React from "react";

function EmbedVideo({ embedId, }) {
    
    return (
    
        <div className="video-responsive">
        <iframe
        className="responsive-iframe"
          // width="853"
          // height="480"
          src={`${embedId}`}
          frameBorder="0"
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div> 
    );
  }
  
export default EmbedVideo;
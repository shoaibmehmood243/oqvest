import React, { useEffect, useState } from 'react';
import { Dialog } from 'primereact/dialog';

const VideoDialog = ({ videoId, visible, onHide }) => {

  return (
    <Dialog draggable={false} visible={visible} onHide={onHide}>
        <iframe
          width="100%"
          height="300"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
    </Dialog>
  );
};

export default VideoDialog;
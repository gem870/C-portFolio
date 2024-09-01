import React, { useRef, useState } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const handleTimeUpdate = () => {
    const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(currentProgress);
  };

  const handleReplay = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  return (
    <div>
      <video
        ref={videoRef}
        width="600"
        onTimeUpdate={handleTimeUpdate}
        onClick={handlePlayPause}
        className="cursor-pointer"
      >
        <source src="your-video-file.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div 
        onClick={handlePlayPause}
        className="cursor-pointer mt-4 p-2 bg-blue-500 text-white text-center"
      >
        Play/Pause
      </div>

      <div className="mt-2">
        <div className="w-full bg-gray-300 h-2 rounded">
          <div
            className="bg-blue-500 h-2 rounded"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div 
        onClick={handleReplay}
        className="cursor-pointer mt-4 p-2 bg-red-500 text-white text-center"
      >
        Replay
      </div>
    </div>
  );
};

export default VideoPlayer;

import React, { useState, useRef } from 'react';
import ringtone from '../assets/notification/noti1.mp3';

function RingPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(ringtone));

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
}

export default RingPlayer;

import React, { useRef, useState } from "react";
import "./style.css";

function CustomVideoPlayer() {
  const video = useRef();
  const [play, setPlay] = useState(false);
  const [progressTime, setProgressTime] = useState(0);
  const [time, setTime] = useState("00:00");

  const handlePlay = () => {
    if (play) {
      video.current.pause();
    } else {
      video.current.play();
    }
    setPlay(!play);
  };

  const handleStop = () => {
    setPlay(false);
    video.current.pause();
    video.current.currentTime = 0;
  };

  const handleBar = (e) => {
    video.current.currentTime =
      (+e.target.value * video.current.duration) / 100;
  };

  const handleTimeUpdate = () => {
    //video.current.duration => 59 segundos
    //video.current.currentTime => tiempo ACTUAL del video

    let progreso = (video.current.currentTime / video.current.duration) * 100;
    setProgressTime(progreso);

    //get min
    let mins = Math.floor(video.current.currentTime / 60);
    if (mins < video.current.duration) {
      mins = "0" + String(mins);
    }

    // Get Seconds
    let secs = Math.floor(video.current.currentTime % 60);

    if (secs < 10) {
      secs = "0" + String(secs);
    }

    setTime(mins + ":" + secs);
  };

  return (
    <div className="CustomVideoPlayer">
      <h1>Custom Video Player</h1>
      <div className="contenedor">
        <video
          ref={video}
          src={process.env.PUBLIC_URL + "/video/gone.mp4"}
          className="video"
          poster={process.env.PUBLIC_URL + "/video/03-01.png"}
          onTimeUpdate={() => handleTimeUpdate()}
        ></video>
        <div className="controles">
          <button onClick={() => handlePlay()}>
            {!play ? (
              <span className="material-symbols-rounded">play_arrow</span>
            ) : (
              <span className="material-symbols-rounded">pause</span>
            )}
          </button>
          <button onClick={() => handleStop()}>
            <span className="material-symbols-rounded">stop</span>
          </button>
          <input
            onChange={handleBar}
            type="range"
            className="progress"
            min="0"
            max="100"
            step="0.1"
            value={progressTime}
          />
          <div className="timestamp">{time}</div>
        </div>
      </div>
    </div>
  );
}

export default CustomVideoPlayer;

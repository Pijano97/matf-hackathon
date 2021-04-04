import React, { useEffect, useState } from "react";
import "./LoadingBar.css";

function LoadingBar({ done, title, max_progress, min_progress }) {
  const [style, setStyle] = useState({});

  let width = (done * 100) / max_progress;

  if (width > 100) {
    width = 100;
  }

  if (width < 0) {
    width = 0;
  }

  useEffect(() => {
    console.log("test");
    const newStyle = {
      opacity: 1,
      width: `${width}%`,
    };

    setStyle(newStyle);
  }, [width]);

  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        {done}
      </div>
      <div className="progress__first">{min_progress}</div>
      <div className="progress__last">{max_progress}</div>
    </div>
  );
}

export default LoadingBar;

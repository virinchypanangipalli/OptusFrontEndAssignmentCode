import React from "react";

const Progress = ({ bar }) => {
  return (
    <div className="progress">
      <div
        className="progress-done"
        style={{ opacity: 1, width: `${bar.bar}%`, background: bar.background }}
      >
        <span style={{ color: bar.color }}>{bar.bar}%</span>
      </div>
    </div>
  );
};

export default Progress;

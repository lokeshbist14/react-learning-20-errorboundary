import React from "react";

function EventError() {
  const handleClick = () => {
    throw new Error("Button error!");
  };

  return (
    <div>

      <button onClick={handleClick}>
        Cause Error
      </button>
    </div>
  );
}

export default EventError;
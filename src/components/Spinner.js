// Spinner.js
import React, { useEffect } from "react";

const Spinner = () => {
  return (
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 border-red-500 border-2
      transition-all duration-500 ease-in-out
      animate-expendWidth
      "
    ></div>
  );
};

export default Spinner;

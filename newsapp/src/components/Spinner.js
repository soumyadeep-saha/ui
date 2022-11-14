import React from "react";
import loading from "./../images/spinner.webp";

const Spinner = () => {
  return (
    <div className="text-center">
      <img
        className="my-3"
        src={loading}
        alt="loading"
        style={{ height: "150px", width: "150px" }}
      />
    </div>
  );
};
export default Spinner;

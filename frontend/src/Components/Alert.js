import React from "react";

export const Alert = ({ display }) => {
  return (
    <div className="alert-toast fixed bottom-0 right-0 m-8 w-5/6 md:w-full max-w-sm" style={{ display: display ? "block" : "none" }}>
      <label
        className="flex items-start justify-between w-full p-2 bg-red-500 h-24 rounded shadow-lg text-white"
        title="close"
      >
        Invalid File Format!
      </label>
    </div>
  );
};
export const SuccessAlert = ({ display }) => {
  return (
    <div className="alert-toast fixed bottom-0 right-0 m-8 w-5/6 md:w-full max-w-sm" style={{ display: display ? "block" : "none" }}>
      <label
        className="flex items-start justify-between w-full p-2 bg-green-500 h-24 rounded shadow-lg text-white"
        title="close"
      >
        File Uploaded successfully!
      </label>
    </div>
  );
};

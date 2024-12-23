import React from "react";
import ReactDOM from "react-dom/client";

export const App = () => {
  return (
    <div>
      <h1 className="text-red-700"> Title Rendered</h1>
    </div>
  );
};
const a = ReactDOM.createRoot(document.getElementById("header"));
a.render(<App></App>);

const heading=React.createElement("h1",{id:"heading"},"This is React which I am learning :)");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// creating nested html structure

// <div id="parent">
  // <div id="child">
    // <h1>I am heading</h1>
    // <h2>I am heading</h2>
  // </div>
// </div>

const parent=React.createElement("div",{id:"parent"},
              React.createElement("div",{id:"child"},
              [React.createElement("h1",{id:"heading1"},"I am heading 1"),React.createElement("h2",{id:"heading2"},"I am heading 2")]
                ));
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


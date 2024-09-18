import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Menu from "./Menu";
import Home from "./Home";
import About from "./About";
import Challenges from "./Challenges";
import reportWebVitals from "./reportWebVitals";

function App() {
  const [page, setPage] = useState(0);

  return (
    <React.StrictMode>
      <div className="bdy">
        <Menu setPage={setPage} currentPage={page} />
        {page === 0 && <Home />}
        {page === 0 && <Challenges />}
        {page === 1 && <About />}
        {page === 2 && <Challenges />}
      </div>
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals();

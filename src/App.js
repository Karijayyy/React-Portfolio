import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavTabs from "./components/NavTabs";
import Home from "./pages/Home";
// import About from "./components/pages/About";
// import Blog from "./components/pages/Blog";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/about" component={About} /> */}
        {/* <Route exact path="/blog" component={Blog} /> */}
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
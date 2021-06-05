import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
// Contact Form
// import './App.css';
// import ContactForm from './ContactForm';

//NavTabs component
// import NavTabs from "./components/NavTabs";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
      </div>
    </Router>
  );
}

// Need to figure out the syntax to get this working on this page to use the contact form 

// const App = () => {
//   return (
//     <div className="App">                 
//         <ContactForm />           
//     </div>
//   );
// }


export default App;
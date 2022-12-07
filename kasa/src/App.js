import React from "react";
import { 
  BrowserRouter as Router, 
  Routes,
  Route,
} from "react-router-dom";

import About from "./pages/About"
import Home from "./pages/Home";
import Accomodations from "./pages/Accomodations";
import Error404 from "./pages/Error404";

import Header from "./components/Header";
import Footer from "./components/Footer";


function App() 
{

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/accomodations/:id" element={<Accomodations />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
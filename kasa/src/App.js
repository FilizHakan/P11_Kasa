import React from "react";
import { 
  BrowserRouter as Router, 
  Routes,
  Route,
} from "react-router-dom";

import About from "./pages/About"
import Home from "./pages/Home";
import Housing from "./pages/Housing";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./pages/Error";

function App() 
{
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/accueil" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/housing/:id" element={<Housing />} />
        <Route exact path="/housing/:id" element={<Error />} />
        <Route exact path="/*" element={<Error />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
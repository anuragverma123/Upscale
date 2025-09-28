import React from "react";
import Navbar from "./components/Navbar/Navbar";
// Import the page you want to show (e.g., Home)
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Upload from "./Pages/Upload";

import History from "./Pages/History";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
//import Loginpop from "./Pages/Loginpop";
const App = () => {
  return (
    <div>
      <Navbar />
      {/* Render your page component here */}
      <Home />
      
      <Upload/>
      
      <History/>
       
      <About/>
      <Contact/>
      <Login/>
      
      

      
      
    </div>
  );
};

export default App;

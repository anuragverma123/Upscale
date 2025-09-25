import React from "react";
import Navbar from "./components/Navbar/Navbar";
// Import the page you want to show (e.g., Home)
import Home from "./Pages/Home";
import Upload from "./Pages/Upload"
import Login from "./Pages/Login";
import History from "./Pages/History";
const App = () => {
  return (
    <div>
      <Navbar />
      {/* Render your page component here */}
      <Home />
      <Upload/>
      <Login/>
      <History/>
    </div>
  );
};

export default App;

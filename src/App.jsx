import React from "react";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import Slider from "./components/Slider";


const App = () => {
  return(
    <div>
      <Announcement/>
      <Navbar/>
      <Slider />
    </div>

  ) 
};

//yarn start in cd hat website to start server

export default App;

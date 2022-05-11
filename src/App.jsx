import React from "react";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import Slider from "./components/Slider";
import Categories from "./components/Categories";


const App = () => {
  return(
    <div>
      <Announcement/>
      <Navbar/>
      <Slider />
      <Categories />
    </div>

  ) 
};

//yarn start in cd hat website to start server

export default App;

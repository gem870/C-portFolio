import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";
import MessageBox from "./components/MessageBox";
import Message from "./components/Message";
import BlogList from "./components/BlogList";
import BlogDetails from "./components/BlogDetails";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <div className="App flex flex-col">
      <Navbar/>
      
      <div className="pt-[300px] px-20 animate-fadeIn relative ">
      
       <About/>
       <Project/>
       <Project/>
       <Project/>
       <Project />

       

      </div>


      <BlogDetails/>
      {/* <BlogList/> */}
      <MessageBox/>
      {/* <Message/>  */}
      <Footer/> 
    </div>
  );
}

export default App;

import React from "react";
import './App.css';
import Home from "./components/Home/Home"
import News from "./components/News/News"
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
       <div>
          <Route component={Home} path="/" exact/>
          <Route component={News} path="/news"/>
      </div>
    
    </BrowserRouter>
    
  );
  
}

export default App;

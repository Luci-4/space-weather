import React from "react";
import './App.css';
import Home from "./components/Home/Home"
import News from "./components/News/News"
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
       <Routes>
          <Route element={<Home/>} path="/" exact/>
          <Route element={<News/>} path="/news"/>
      </Routes>
    
    </BrowserRouter>
    
  );
  
}

export default App;

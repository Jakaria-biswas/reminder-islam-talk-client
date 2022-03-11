import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Add from './components/Add/Add';
import ShowTalk from "./components/ShowTalk/ShowTalk";
import Header from "./components/Header/Header";
import Details from "./components/Details/Details";


function App() {
  return (       
    <div >
       
      
      <Routes>
       <Route path="/" element={<Home/>}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/talkId/:id" element={<Details/>}></Route>
      </Routes>

    </div>
  );
}

export default App;

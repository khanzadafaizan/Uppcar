import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Download from './components/Download';
import Parts from './Parts';
import Footer2 from './components/Footer2';
import VinCheck from './VinCheck';
import Compare from './Compare';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from './Login';
import Create from './Create';

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/parts" element={<Parts/>} />
          <Route path="/vincheck" element={<VinCheck/>} />
          <Route path="/compare" element={<Compare/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/create" element={<Create/>} />
        </Routes>
      </BrowserRouter>
    

    </>
  );
}

export default App;

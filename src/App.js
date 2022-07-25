 import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Blogs from './pages/Blogs';
import CreateBlog from './pages/CreateBlog';
import Navar from './components/Navar';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Navar></Navar>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/blogs" element={ <Blogs/>}></Route>
        <Route path="/blogs/create" element={<CreateBlog/>}></Route>
       </Routes>
    </>
    
  );
}

export default App;

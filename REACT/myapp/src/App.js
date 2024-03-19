import './App.css';
import Nav from './Component/Nav'
import Home from "./Component/Home";
import About from "./Component/About";
import Login from "./Component/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './Component/Test';
import Parent from './Context/Parent';
import Child from './Context/Child';
import SubChild from './Context/SubChild';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/:id" element={<Test />} />
            <Route path="/login" element={<Login />} />
            <Route path="/parent" element={<Parent />} />
            <Route path="/child" element={<Child />} />
            <Route path="/subchild" element={<SubChild />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Home/> */}
      {/* <About/> */}
    </>
  );
}

export default App;
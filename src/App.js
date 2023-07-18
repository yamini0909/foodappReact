
import './App.css';
import Header from "./Components/Header"
import Body from "./Components/Body/Body"
import {Routes, Route} from "react-router-dom"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Menupage from './Components/MenuPage';
import "./index.css"
function App() {
 
  return (
    <div className="App">
         <Header style={{textDecoration: 'none'}}/>
      <Routes>
        <Route className='link-styling' path="/" element={<Body/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route className='link-styling' path="/menu/:resId" element={<Menupage/>}></Route>
      </Routes> 
    </div>
  );
}

export default App;

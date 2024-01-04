import{BrowserRouter as Router, Routes,Route} from "react-router-dom"
import './App.css';
import PrintCode from "./components/PrintCode";

import ConvertedCode from "./components/CovertedCode";
import Sidebar from "./components/Sidebar";
import ArrayMethods from "./sections/ArrayMethods";
import Promises from "./sections/Promises";
import AddNewConcept from "./components/AddNewConcept";

import Home from "./components/Home";
function App() {


  return (
    <div id="App">
    {/* {window.addEventListener('resize', getScreenWidth)} */}
    <Router>
    {/* {screenWidth<620?<Sidebar/>:""} */}
    <Sidebar/>
      
      <Routes>
      <Route path="/JsManual2" element={<Home/>}/>
        <Route path="/JsManual2/printcode" element={<PrintCode/>}/>
        <Route path="/JsManual2/concode" element={<ConvertedCode/>}/>
       
        <Route path="/JsManual2/arraymethods" element={<ArrayMethods/>}/>
        <Route path="/JsManual2/promises" element={<Promises/>}/>
        <Route path="/JsManual2/addnewconcept" element={<AddNewConcept/>}/>
    
      
      
      </Routes>



      
      
    </Router>
   
    </div>
  );
}

export default App;

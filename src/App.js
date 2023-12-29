import{BrowserRouter as Router, Routes,Route} from "react-router-dom"
import './App.css';
import PrintCode from "./components/PrintCode";
import Topics from './components/Topics';
import ConvertedCode from "./components/CovertedCode";
import Sidebar from "./components/Sidebar";
import ArrayMethods from "./sections/ArrayMethods";
function App() {

  return (
    <div id="App">
    
    <Router>
      
      <Sidebar/>
      
      <Routes>
        
        <Route path="/JsManual2/printcode" element={<PrintCode/>}/>
        <Route path="/JsManual2/concode" element={<ConvertedCode/>}/>
        <Route path="/JsManual2/topics" element={<Topics/>}/>
        <Route path="/JsManual2/arraymethods" element={<ArrayMethods/>}/>
    
      
      
      </Routes>



      
      
    </Router>
   
    </div>
  );
}

export default App;

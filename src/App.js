import{BrowserRouter as Router, Routes,Route, Link} from "react-router-dom"
import './App.css';
import PrintCode from "./components/PrintCode";
import Topics from './components/Topics';
import ConvertedCode from "./components/CovertedCode";
import Sidebar from "./components/Sidebar";
function App() {

  return (
    <div id="App">
    
    <Router>
      {/* <div className="nav-bar">
        <Link to="/JsManual2/printcode">Print Code</Link>
        <Link to="/JsManual2/topics">Topics</Link>

      </div> */}
      <Sidebar/>
      
      <Routes>
        
        <Route path="/JsManual2/printcode" element={<PrintCode/>}/>
        <Route path="/JsManual2/concode" element={<ConvertedCode/>}/>
        <Route path="/JsManual2/topics" element={<Topics/>}/>
    
      
      
      </Routes>



      
      
    </Router>
   
    </div>
  );
}

export default App;

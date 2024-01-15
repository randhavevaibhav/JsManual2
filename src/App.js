import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PrintCode from "./components/PrintCode";
import { useState } from "react";
import ConvertedCode from "./components/CovertedCode";
import Sidebar from "./components/Sidebar";

import ArrayMethods from "./sections/ArrayMethods";
import Promises from "./sections/Promises";
import ObjectJs from "./sections/ObjectJs";
import AddNewConcept from "./components/AddNewConcept";
import DeleteTopic from "./components/DeleteTopic";

import { IsLoadingContex } from "./Contexts/IsLoadingContex";
import Home from "./components/Home";
import StringJS from "./sections/StringJS";

import { GetScreenDimentions } from "./helper/GetScreenDimentions";

function App() {
  const [loading, setLoading] = useState(false);

  
  return (
    <>
      <IsLoadingContex.Provider value={{loading,setLoading} }>
        <div id="App">
          {/* {window.addEventListener('resize', GetScreenDimentions)} */}
          <Router>
            {/* {screenWidth<620?<Sidebar/>:""} */}
            <Sidebar />

            <Routes>
              <Route path="/JsManual2" element={<Home />} />
              <Route path="/JsManual2/printcode" element={<PrintCode />} />
              <Route path="/JsManual2/concode" element={<ConvertedCode />} />

              <Route
                path="/JsManual2/Array"
                element={<ArrayMethods />}
              />
              <Route path="/JsManual2/Promises" element={<Promises />} />
              <Route path="/JsManual2/String" element={<StringJS />} />
              <Route path="/JsManual2/Object" element={<ObjectJs />} />

              <Route
                path="/JsManual2/addnewconcept"
                element={<AddNewConcept />}
              />

            <Route path='/JsManual2/:topic/deletetopic/:id' 
            element={<DeleteTopic/>}/>

            </Routes>
          </Router>
        </div>
      </IsLoadingContex.Provider>
    </>
  );
}

export default App;

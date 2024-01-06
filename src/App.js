import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PrintCode from "./components/PrintCode";
import { useState } from "react";
import ConvertedCode from "./components/CovertedCode";
import Sidebar from "./components/Sidebar";
import ArrayMethods from "./sections/ArrayMethods";
import Promises from "./sections/Promises";
import AddNewConcept from "./components/AddNewConcept";
import { IsLoadingContex } from "./Contexts/IsLoadingContex";
import Home from "./components/Home";
import StringJS from "./sections/StringJS";
function App() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <IsLoadingContex.Provider value={{loading,setLoading} }>
        <div id="App">
          {/* {window.addEventListener('resize', getScreenWidth)} */}
          <Router>
            {/* {screenWidth<620?<Sidebar/>:""} */}
            <Sidebar />

            <Routes>
              <Route path="/JsManual2" element={<Home />} />
              <Route path="/JsManual2/printcode" element={<PrintCode />} />
              <Route path="/JsManual2/concode" element={<ConvertedCode />} />

              <Route
                path="/JsManual2/arraymethods"
                element={<ArrayMethods />}
              />
              <Route path="/JsManual2/promises" element={<Promises />} />
              <Route path="/JsManual2/string" element={<StringJS />} />

              <Route
                path="/JsManual2/addnewconcept"
                element={<AddNewConcept />}
              />
            </Routes>
          </Router>
        </div>
      </IsLoadingContex.Provider>
    </>
  );
}

export default App;

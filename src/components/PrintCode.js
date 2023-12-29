import "../styles/PrintCode.css";
import { useState } from "react";
import ConvertedCode from "./CovertedCode";

const PrintCode = ()=>{
const [showCode, setShowCode] = useState(false);
const [textArea, setTextArea] = useState("");
const sendTextArea = ()=>{

    const textAreaContaint = document.getElementById("codeTextArea");

    if(textAreaContaint.value===""||textAreaContaint.value===undefined)
    {
        alert("Please enter some text in text field !!")

    }
    else{
        setTextArea(textAreaContaint.value);
        setShowCode(true);
   
    }

    



}

    return (<>
    
    <div className="code">
       
      {showCode?<>
      
      <ConvertedCode codeText={textArea}/>
       
      
      </>:<> <div className="textArea">
            <textarea rows="30" cols="80" id="codeTextArea" placeholder="Enter code to be converted into PDF ......."></textarea>
            
        
        
           <button onClick={()=>{
                
                sendTextArea();
           }}>Converted Code</button>

        </div></> }

    </div>
    
    </>);
}

export default PrintCode;
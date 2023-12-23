import hljs from "highlight.js";
import "highlightjs-copy/dist/highlightjs-copy.min.css";
import { useEffect } from "react";
const ConvertedCode = ({codeText})=>{

    const printdiv = (codeDiv)=>{
        // var header_str = '<html><head><title>' + document.title  + '</title></head><body>';
        // var footer_str = '</body></html>';
        // var new_str = document.getElementById(codeDiv).innerHTML;
        // var old_str = document.body.innerHTML;
        
        // document.body.innerHTML = header_str + new_str + footer_str;
        // console.log("html ===> "+document.body.innerHTML);
        // document.getElementById('print_inner_div').setAttribute("style","width:100%;height:100%");
        // window.print();
        // document.body.innerHTML = old_str;
        window.print();

    }
    useEffect(() => {
        hljs.highlightAll();
        
        
      }, []);

    return(<>
     <button onClick={()=>{
            printdiv('printable_div_id');
        }}>Print Code</button>
    <div className="Conv-code" id='printable_div_id' >

    <div className='Code padding20px' id="print_inner_div">
          <pre className='code-body' style={{whiteSpace:"pre-wrap"}} >

            <code className="javascript"style={{borderRadius:10}} >
            {codeText}
            </code>
          </pre>
           
        </div>

    </div>
       
    
    </>);

};


export default ConvertedCode;
import '../styles/TopicItems.css';
import "highlight.js/styles/github.css";
import "../styles/atom-one-drak.css";
import hljs from "highlight.js";

import { useEffect} from "react";

const TopicItems = ({idx,topicName,syntax,explanation,videoLink})=>{
 
  useEffect(() => {
    hljs.highlightAll();
  }, []);
    return(<>
    <div className='container' id={idx} >
        <div className="topic-name padding20px" >
            {topicName}
        </div>
        <div className='Code padding20px'>
          <pre className='code-body'>

            <code className="javascript" >
            {syntax}
            </code>
          </pre>
           
        </div>
        <div className="explanation padding20px">
          {explanation}
        </div>
        <div className="youtube-links padding20px">
          {videoLink}
        </div>
       
      </div>
    
    </>);
};


export default TopicItems;
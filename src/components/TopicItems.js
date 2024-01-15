import "../styles/TopicItems.css";
import "../styles/dracula.css";

import hljs from "highlight.js";
import "highlightjs-copy/dist/highlightjs-copy.min.css";
import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

const TopicItems = ({
  idx,
  topicName,
  subTopicName,
  syntax,
  explanation,
  IMPPoints,
  videoLink,
  videoTitle,
}) => {
  const [copButtonText, setcopButtonText] = useState("Copy Code");
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <>
      <div className="container">
        <div className="first-section">
          <div className="topic-name padding20px">
            <b>{subTopicName}</b>
          </div>
          <div id="copy-button">
            <CopyToClipboard
              text={syntax}
              onCopy={() => {
                setcopButtonText("Copied !!");
                setTimeout(() => {
                  setcopButtonText("Copy Code");
                }, 4000);
              }}
            >
              <button>{copButtonText}</button>
            </CopyToClipboard>
          </div>
        </div>

        <div className="Code">
          <pre className="code-body" style={{ whiteSpace: "pre-wrap" }}>
            <code className="javascript" style={{ borderRadius: 10 }}>
              {syntax}
            </code>
          </pre>
        </div>
        <div className="explanation padding20px">
          <h3>Explaination:</h3>
          <p>{explanation}</p>
        </div>

        {toString.call(IMPPoints) === "[object Array]" ? (
          (IMPPoints.length>0 ?<>
          
          <div className="ImpPoints padding20px">
              <h3>IMP Points:</h3>
              
                {IMPPoints.map((point, idx) => {
                  return (
                    <>
                      {<div className="points">
                      <p>{idx + 1+"."}</p>
                      <p>{point+"."}</p>

                      </div>
                }
                        
                        
                    </>
                  );
                })}
              
            </div>
          
          
          </>:"")
        ) : (
          ""
        )}
        {videoTitle?(<><div className="youtube-links padding20px">
          <h3>YouTube Link - </h3>
          <a href={videoLink} target="_blank" rel="noreferrer">
            {videoTitle}
          </a>
        </div></>):""}

        <div id="delete-button">
          <Link to={`/JsManual2/${topicName}/deletetopic/${idx}`}>
          <button>Delete Topic</button>
          </Link>
          
      </div>
        
      </div>
     
    </>
  );
};

export default TopicItems;

/* eslint-disable react/prop-types */


import '../styles/TopicItems.css';
const TopicItems = ({idx,topicName,syntax,explanation,videoLink})=>{



    return(<>
    <div className='container' id={idx} >
        <div className="topic-name padding20px" >
            {topicName}
        </div>
        <div className='Code padding20px'>
          <pre className='code-body'>

            <code className='language-js'>
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
import React, { useEffect, useState } from 'react'
import TopicItems from "../components/TopicItems";

import axios from 'axios';

function Promises() {
const QTopicName = "Promises";
const [fetchTopic,setFetchTopic] = useState([]);



useEffect(()=>{
  axios.get(`https://js-manual2-backend.vercel.app/jstopics/${QTopicName}`)
  .then((res)=>{
   
    setFetchTopic(res.data.data) ;
  })
  
  .catch((err)=>{
    console.log(err);
  })
  
  


},[])




  return (
    <>
     <div className="main-container">

{/* {PromisesList.map((topic, id) => {
    return (
      <TopicItems
        key={id}
        topicName={topic.topicName}
        syntax={topic.syntax}
        explanation={topic.explanation}
        IMPPoints={topic.IMPPoints}
        videoLink={topic.videoLink}
        videoTitle={topic.videoTitle}
      ></TopicItems>
    );
  })} */}

  {fetchTopic.map((val)=>{
return(
<TopicItems
        key={val._id}
        topicName={val.subTopicName}
        syntax={val.syntax}
        explanation={val.explanation}
        IMPPoints={val.IMPPoints}
        videoLink={val.videoLink}
        videoTitle={val.videoTitle}
      ></TopicItems>



)



  })}

</div>
    </>
  )
}

export default Promises

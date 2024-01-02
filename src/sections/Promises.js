import React, { useEffect, useState } from 'react'
import TopicItems from "../components/TopicItems";
import {LoadingDiv, disableScreen,enableScreen } from '../helper/LoadingHelper';
import axios from 'axios';

function Promises() {
const QTopicName = "Promises";
const [fetchTopic,setFetchTopic] = useState([]);
const [loading,setLoading] =  useState(false);


useEffect(()=>{
  setLoading(true);
  disableScreen();
  axios.get(`https://js-manual2-backend.vercel.app/jstopics/${QTopicName}`)
  .then((res)=>{
    setLoading(false);
    enableScreen();
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

{loading ? <LoadingDiv/> :""}
    </>
  )
}

export default Promises

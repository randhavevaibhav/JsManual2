import React, { useEffect, useState } from 'react'
import TopicItems from "../components/TopicItems";
import { LoadingSkeleton } from '../helper/LoadingHelper';
import axios from 'axios';
import "../styles/SkeletonLoading.css";
function Promises() {
const QTopicName = "Promises";
const [fetchTopic,setFetchTopic] = useState([]);
const [loading,setLoading] =  useState(false);
 

useEffect(()=>{
  setLoading(true);
  
  axios.get(`https://js-manual2-backend.vercel.app/jstopics/${QTopicName}`)
  .then((res)=>{
    setLoading(false);
   
    setFetchTopic(res.data.data) ;
  })
  
  .catch((err)=>{
    console.log(err);
  })
 
  


},[])




  return (
    <>
     <div className='main-container'>
     


  {loading ? <LoadingSkeleton skeletonItems={1}/>:fetchTopic.map((val)=>{
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

import {React,useEffect,useState} from "react";
import axios from "axios";
import TopicItems from "../components/TopicItems";

import { LoadingSkeleton } from '../helper/LoadingHelper';
import "../styles/SkeletonLoading.css";

function StringJS() {

const QTopicName = "String";
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

    {loading ? <LoadingSkeleton skeletonItems={5}/>:fetchTopic.map((topic, id) => {
        return (
          <TopicItems
            key={id}
            topicName={topic.subTopicName}
            syntax={topic.syntax}
            explanation={topic.explanation}
            IMPPoints={topic.IMPPoints}
            videoLink={topic.videoLink}
            videoTitle={topic.videoTitle}
          ></TopicItems>
        );
      })}

    </div>

   
     
    </>
  );
}

export default StringJS;

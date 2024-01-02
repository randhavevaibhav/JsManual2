import {React,useEffect,useState} from "react";
import axios from "axios";
import TopicItems from "../components/TopicItems";
import { ArrayMethodsList } from "../helper/ArrayMethodsList";
function ArrayMethods() {

const QTopicName = "Array";
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

    {fetchTopic.map((topic, id) => {
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

export default ArrayMethods;

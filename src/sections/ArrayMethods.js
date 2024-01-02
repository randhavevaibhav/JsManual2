import {React,useEffect,useState} from "react";
import axios from "axios";
import TopicItems from "../components/TopicItems";
import { LoadingDiv, disableScreen, enableScreen } from "../helper/LoadingHelper";
function ArrayMethods() {

const QTopicName = "Array";
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

    {loading ? <LoadingDiv/> :""}
     
    </>
  );
}

export default ArrayMethods;

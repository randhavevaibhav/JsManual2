import TopicList from "../helper/TopicList";
import TopicItems from "./TopicItems";

const Topics = () =>{

return(<>
<div className="main-container">

    {TopicList.map((topic,id)=>{

return(
    
<TopicItems
key={id}
topicName={topic.topicName}
syntax = {topic.syntax}
explanation = {topic.explanation}
videoLink = {topic.videoLink}
videoTitle = {topic.videoTitle}

></TopicItems>

   

)
})


}


</div>


</>);


}


export default Topics;
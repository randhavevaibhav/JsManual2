import TopicList from "../helper/TopicList";
import TopicItems from "./TopicItems";

const Topics = () =>{

return(<>

    {TopicList.map((topic,id)=>{

return(

<TopicItems
key={id}
topicName={topic.topicName}
syntax = {topic.syntax}
explanation = {topic.explanation}
videoLink = {topic.videoLink}

></TopicItems>)
})}





</>);


}


export default Topics;
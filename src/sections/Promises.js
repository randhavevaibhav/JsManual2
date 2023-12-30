import React from 'react'
import TopicItems from "../components/TopicItems";
import { PromisesList } from "../helper/PromisesList";
function Promises() {
  return (
    <>
     <div className="main-container">

{PromisesList.map((topic, id) => {
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
  })}

</div>
    </>
  )
}

export default Promises

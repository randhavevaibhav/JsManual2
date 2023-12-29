import React from "react";

import TopicItems from "../components/TopicItems";
import { ArrayMethodsList } from "../helper/ArrayMethodsList";
function ArrayMethods() {
  return (
    <>
    <div className="main-container">

    {ArrayMethodsList.map((topic, id) => {
        return (
          <TopicItems
            key={id}
            topicName={topic.topicName}
            syntax={topic.syntax}
            explanation={topic.explanation}
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

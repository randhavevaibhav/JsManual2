import TopicList from "../helper/TopicList";
import TopicItems from "./TopicItems";

const Topics = () => {
  return (
    <>
      {/* <div className="main-container">
        {TopicList.map((topic, id) => {
          return (
            <>
              <div className="main-container">
                <TopicItems
                  key={id}
                  topicName={topic.topicName}
                  syntax={topic.syntax}
                  IMPPoints={topic.IMPPoints}
                  explanation={topic.explanation}
                  videoLink={topic.videoLink}
                  videoTitle={topic.videoTitle}
                ></TopicItems>
              </div>
            </>
          );
        })}
      </div> */}
    </>
  );
};

export default Topics;

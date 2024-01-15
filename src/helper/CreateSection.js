import React, { useContext } from "react";
import TopicItems from "../components/TopicItems";
import { LoadingSkeleton } from "./LoadingHelper";
import useFetchTopicDB from "./useFetchTopicDB";
import { IsLoadingContex } from "../Contexts/IsLoadingContex";

function CreateSection({QTopicName}) {
  
  const { loading } = useContext(IsLoadingContex);
  
  const { data } = useFetchTopicDB(QTopicName);

  return (
    <>
      <div className="main-container">
        {loading ? (
          <LoadingSkeleton skeletonItems={10} />
        ) : (
          data.map((val) => {
           
            return (
              <TopicItems
                idx={val._id}
                topicName={val.topicName}
                subTopicName={val.subTopicName}
                syntax={val.syntax}
                explanation={val.explanation}
                IMPPoints={val.IMPPoints}
                videoLink={val.videoLink}
                videoTitle={val.videoTitle}
              ></TopicItems>
            );
          })
        )}
        
      </div>

      
    </>
  );
}

export default CreateSection;

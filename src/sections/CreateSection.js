import React, { useContext } from "react";
import TopicItems from "../components/TopicItems";
import { LoadingSkeleton } from "../helper/LoadingHelper";
import "../styles/SkeletonLoading.css";
import useFetchTopicDB from "../helper/useFetchTopicDB";
import { IsLoadingContex } from "../Contexts/IsLoadingContex";

function CreateSection({QTopicName}) {
  
  const { loading } = useContext(IsLoadingContex);
  
  const { data } = useFetchTopicDB(QTopicName);

  return (
    <>
      <div className="main-container">
        {loading ? (
          <LoadingSkeleton skeletonItems={1} />
        ) : (
          data.map((val) => {
            return (
              <TopicItems
                key={val._id}
                topicName={val.subTopicName}
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

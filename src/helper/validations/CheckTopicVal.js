import { JsTopicList } from "../JSTopicList";

export  const checkTopic = (Ptopic) => {
    if (JsTopicList.indexOf(Ptopic) < 0) {
      alert(
        `Metioned topic is not present in the list ==> 
    available list ====> ` + JsTopicList
      );

      return false;
    } else {
      return true;
    }
  };
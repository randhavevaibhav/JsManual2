import React from "react";
import { useState } from "react";
import "../styles/AddNewConcept.css";
import { JsTopicList } from "../helper/JSTopicList";
import axios from "axios";

function AddNewConcept() {
  const [formData, setFormData] = useState({
    topicName: "",
    subTopicName: "",
    syntax: "",
    explanation: "",
    IMPPoints:"",
    YTVideoTitle: "",
    YTVideoLink: "",
  });

  const [IMPInputValues, setIMPInputValues] = useState(['']);
  const [points, setPoints] = useState(["IMP point 1"]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateYouTubeUrl = (urlToParse) => {
    if (urlToParse) {
      let regExp =
        /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
      if (urlToParse.match(regExp)) {
        return true;
      }
    }
    return false;
  };

  const validateFormData = (formData) => {
    let topicNameLen = formData.topicName.length;
    let subTopicNameLen = formData.subTopicName.length;
    let YTVideoTitle = formData.YTVideoTitle.length;
    let IMPInputTextFields = document.getElementsByClassName("IMPInputs");


    if (!checkTopic(formData.topicName)) {
      return false;
    }
    if (topicNameLen > 50 || subTopicNameLen > 50 || YTVideoTitle > 50) {
      alert(
        "Please reduce no. of words in topic name, sub-topic name or in youtube video title"
      );
      return false;
    }

    Array.prototype.forEach.call(IMPInputTextFields, function(fields,index) {
      
      console.log("IMP inputs value ===> "+fields.value);
      if(fields.value===""|| fields.value===undefined)
      {
        alert("Please fill input filed no. "+(index+1));
        return false;
      }
      });

    



    if (validateYouTubeUrl(formData.YTVideoLink)) {
      if (formData.YTVideoTitle === "" || formData.YTVideoTitle === undefined) {
        alert("Please enter valid youtube video title !!");
        return false;
      }
    } else if (
      formData.YTVideoTitle === "" ||
      formData.YTVideoTitle === undefined
    ) {
      if (
        !validateYouTubeUrl(formData.YTVideoLink) &&
        !(formData.YTVideoLink === "" || formData.YTVideoLink === undefined)
      ) {
        alert("Please enter valid youtube link !!");
        return false;
      }
    } else if (
      !(formData.YTVideoTitle === "" || formData.YTVideoTitle === undefined)
    ) {
      if (!validateYouTubeUrl(formData.YTVideoLink)) {
        alert("Please enter valid youtube link !!");
        return false;
      }
    }

    return true;
  };

  const formatCodeSyntax = (para) => {
    let tempVal = para;

    let fromAr = [
        /\\/g,
        /'/g,
        /"/g,
        /\r\n/g,
        /[\r\n]/g,
        /\t/g,
        new RegExp("--" + ">", "g"),
        new RegExp("<!" + "--", "g"),
        /\//g,
      ],
      toAr = [
        "\\\\",
        "\\'",
        '\\"',
        "\\n",
        "\\n",
        "\\t",
        "--'+'>",
        "<!'+'--",
        "\\/",
      ];
    for (let x = 0; x < fromAr.length; x++) {
      tempVal = tempVal.replace(fromAr[x], toAr[x]);
    }

    return tempVal;
  };

  const checkTopic = (Ptopic) => {
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

  const clearFormData = (PFormData) => {
    const blankForm = {
      topicName: "",
      subTopicName: "",
      syntax: "",
      explanation: "",
      YTVideoTitle: "",
      YTVideoLink: "",
    };
    setFormData((formData) => ({
      ...formData,
      ...blankForm,
    }));
  };

  const saveDataToDB = (PformData) => {
    axios
      .post(
        `https://js-manual2-backend.vercel.app/jstopics/newtopic`,
        PformData
      )
      .then(() => {
        alert("new topic saved to DB !!");
      })
      .catch((error) => {
        alert(`An Error ocuured please check the console log`);
        console.log(error);
      });
    console.log("****** PformData =====> "+JSON.stringify(PformData))

    console.log("***** formData.IMPPoints ======> "+formData.IMPPoints);
  };



  const handleSubmit = (event) => {
    event.preventDefault();

    let formatedSyntaxStr = formatCodeSyntax(formData.syntax);

    if (validateFormData(formData)) {
      alert("Form validation passed !!!");
      
      formData.syntax = formatedSyntaxStr;
      console.log("***** IMPInputValues ======> "+IMPInputValues);

    formData.IMPPoints = IMPInputValues;

      saveDataToDB(formData);
     
      clearFormData(formData);

    } else {
      alert("Form validation Failed !!!");
      
    }
  };


  const handleInputChange = (index, value) => {
    const updatedInputValues = [...IMPInputValues];
    updatedInputValues[index] = value;
    setIMPInputValues(updatedInputValues);
  };


  const addTextField = () => {
    if(points.length>2)
    {
        alert("only 3 IMP points can be added!! ");
    }
    else{
      const newPointLabel = `IMP point ${points.length + 1}`;
    setPoints([...points, newPointLabel]);
    setIMPInputValues([...IMPInputValues, '']);

    }
    
   
  };
  const removeTextField = (index) => {
    const updatedPoints = [...points];
    updatedPoints.splice(index, 1);
    setPoints(updatedPoints);

    const updatedInputValues = [...IMPInputValues];
    updatedInputValues.splice(index, 1);
    setIMPInputValues(updatedInputValues);

  };
  return (
    <>
      <div className="concept-main-container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="topicName">Topic Name:</label>
            <input
              type="text"
              id="topicName"
              name="topicName"
              value={formData.topicName}
              onChange={handleChange}
              required
            />
            <br />

            <label htmlFor="subTopicName">Sub-Topic Name:</label>
            <input
              type="text"
              id="subTopicName"
              name="subTopicName"
              value={formData.subTopicName}
              onChange={handleChange}
              required
            />
            <br />

            <label htmlFor="syntax">Syntax:</label>
            <textarea
              type="text"
              id="syntax"
              name="syntax"
              value={formData.syntax}
              onChange={handleChange}
              required
            />
            <br />

            <label htmlFor="explanation">Explanation:</label>
            <textarea
              type="text"
              id="explanation"
              name="explanation"
              value={formData.explanation}
              onChange={handleChange}
              required
            />
            <br />

            {points.map((point, index) => (
              <div id="IMPPoints-main-container">
                <div id="IMPPoints-text-container" key={index}>
                  <label>{point}</label>
                  <input type="text" 
                   value={IMPInputValues[index]}
                   className="IMPInputs"
                   onChange={(e) => handleInputChange(index, e.target.value)}/>
            
                </div>
                <div id="removeIMPpointButton">
                    <button type="button" onClick={() => removeTextField(index)}>
                      Remove Point
                    </button>
                  </div>
              </div>
            ))}
            
            <button id="addIMPpointButton" type="button" onClick={()=>{addTextField()}}>
              Add IMP Point
            </button>

          
            

            <br />

            <label htmlFor="YTVideoTitle">Youtube Video title:</label>
            <input
              type="text"
              id="YTVideoTitle"
              name="YTVideoTitle"
              value={formData.YTVideoTitle}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="YTVideoLink">Youtube Video Link:</label>
            <input
              type="text"
              id="YTVideoLink"
              name="YTVideoLink"
              value={formData.YTVideoLink}
              onChange={handleChange}
            />
            <br />

            <input type="submit"  value="Submit" id="submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default AddNewConcept;

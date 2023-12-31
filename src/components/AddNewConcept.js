import React from "react";
import { useState } from "react";
import "../styles/AddNewConcept.css";
function AddNewConcept() {
  const [formData, setFormData] = useState({
    topicName: "",
    subTopicName: "",
    syntax: "",
    explanation: "",
    YTVideoTitle: "",
    YTVideoLink: "",
  });

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
    if (topicNameLen > 50 || subTopicNameLen > 50 || YTVideoTitle >50) {
      alert(
        "Please reduce no. of words in topic name, sub-topic name or in youtube video title"
      );
    }
    if(!validateYouTubeUrl(formData.YTVideoLink))
    {
        alert("Please enter valid youtube link !!");
    }


  };

const formatCodeSyntax =(para)=>{
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
      /\//g
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
      "\\/"
    ];
  for (let x = 0; x < fromAr.length; x++) {
    tempVal = tempVal.replace(fromAr[x], toAr[x]);
  }

 return tempVal;
}
  const handleSubmit = (event) => {
    event.preventDefault();
   
    validateFormData(formData);
    let formatedSyntaxStr = formatCodeSyntax(formData.syntax);
    console.log("tempVal ===> "+formatedSyntaxStr);
    console.log("Form Data:", formData);
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

            <input type="submit" value="Submit" id="submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default AddNewConcept;

import React from "react";
import { useState } from "react";
import "../styles/AddNewConcept.css";
import axios from "axios";
import {
  LoadingDiv,
  disableScreen,
  enableScreen,
} from "../helper/LoadingHelper";
import { validateFormData } from "../helper/validations/ValidateFormData";

function AddNewConcept() {
  const [formData, setFormData] = useState({
    topicName: "",
    subTopicName: "",
    syntax: "",
    explanation: "",
    IMPPoints: "",
    YTVideoTitle: "",
    YTVideoLink: "",
  });

  const [IMPInputValues, setIMPInputValues] = useState([""]);
  const [points, setPoints] = useState([]);
  const [loading, setLoading] = useState(false);

 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };






  const clearFormData = () => {
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

    let blankArr = [];

    IMPInputValues.forEach(() => {
      blankArr.push("");
    });

    setIMPInputValues(blankArr);
  };

  const saveDataToDB = (PformData) => {
    setLoading(true);
    disableScreen();

    //sample code to mimic database operation

    // setTimeout(() => {
    //   setLoading(false);
    //   enableScreen();
    // }, 4000);

    axios
      .post(
        `https://js-manual2-backend.vercel.app/jstopics/newtopic`,
        PformData
      )
      .then(() => {
        alert("new topic saved to DB !!");
        setLoading(false);
       enableScreen();
      })
      .catch((error) => {
        alert(`An Error ocuured please check the console log`);
        console.log(error);
      });

   
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateFormData(formData) ) {
      alert("Form validation passed !!!");

      console.log("***** IMPInputValues ======> " + IMPInputValues);

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
    if (points.length > 2) {
      alert("only 3 IMP points can be added!! ");
    } else {
      const newPointLabel = `IMP point ${points.length + 1}`;
      setPoints([...points, newPointLabel]);
      setIMPInputValues([...IMPInputValues, ""]);
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
      <div className="wrapper-container">
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

              {points.length > 0
                ? points.map((point, index) => (
                    <div id="IMPPoints-main-container">
                      <div id="IMPPoints-text-container" key={index}>
                        <label>{point}</label>
                        <input
                          type="text"
                          value={IMPInputValues[index]}
                          className="IMPInputs"
                          onChange={(e) =>
                            handleInputChange(index, e.target.value)
                          }
                        />
                      </div>
                      <div id="removeIMPpointButton">
                        <button
                          type="button"
                          onClick={() => removeTextField(index)}
                        >
                          Remove Point
                        </button>
                      </div>
                    </div>
                  ))
                : ""}

              <button
                id="addIMPpointButton"
                type="button"
                onClick={() => {
                  addTextField();
                }}
              >
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

              <input type="submit" value="Submit" id="submit" />
            </form>
          </div>
        </div>
      </div>

      {loading ? <LoadingDiv /> : ""}
    </>
  );
}

export default AddNewConcept;

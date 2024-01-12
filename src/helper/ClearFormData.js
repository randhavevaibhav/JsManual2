export const ClearFormData = (formData,setFormData,IMPInputValues,setIMPInputValues)=>{

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

}
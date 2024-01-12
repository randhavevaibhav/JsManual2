import { checkTopic } from "./CheckTopicVal";
import { EmptyInputVal } from "./EmptyInputVal";
import { InputFieldLengthVal } from "./InputFieldLengthVal";
import { YTInputVal } from "./YTInputVal";
export const validateFormData = (formData)=>{

    let IMPInputTextFields = document.getElementsByClassName("IMPInputs");
    let IMPPointsFlag = true;
    IMPPointsFlag = EmptyInputVal(IMPInputTextFields,IMPPointsFlag);
    let YTValResult = true;

    if(!(formData.YTVideoLink.length ===0 || formData.YTVideoTitle ===0) )
    {
        YTValResult = YTInputVal(formData.YTVideoLink,formData.YTVideoTitle);
        
    }

    // console.log("formData.YTVideoLink ====> "+formData.YTVideoLink);
    // console.log("formData.YTVideoTitle ====> "+formData.YTVideoTitle);

    // console.log("formData.YTVideoLink length ====> "+formData.YTVideoLink.length);
    // console.log("formData.YTVideoTitle length ====> "+formData.YTVideoTitle.length);

    // console.log("IMPPointsFlag value ====> "+IMPPointsFlag);
    // console.log("YTValResult ====> "+YTValResult);
    // console.log("checkTopic ====> "+checkTopic(formData.topicName));
    // console.log("InputFieldLengthVal ====> "+InputFieldLengthVal(formData.topicName,50));
    // console.log("InputFieldLengthVal ====> "+InputFieldLengthVal(formData.subTopicName,50));
    // console.log("InputFieldLengthVal  ====> "+InputFieldLengthVal(formData.YTVideoTitle,50));
    // console.log("YTInputVal ====> "+YTInputVal(formData.YTVideoLink,formData.YTVideoTitle) );


    if(checkTopic(formData.topicName)&&
    InputFieldLengthVal(formData.topicName,50)&&
    InputFieldLengthVal(formData.subTopicName,50)&&
    InputFieldLengthVal(formData.YTVideoTitle,50)&&
    IMPPointsFlag &&
    YTValResult
    )
    {
        return true;
    }
    
    return false;
}
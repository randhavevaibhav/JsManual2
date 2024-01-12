import { checkTopic } from "./CheckTopicVal";
import { EmptyInputVal } from "./EmptyInputVal";
import { InputFieldLengthVal } from "./InputFieldLengthVal";
import { YTInputVal } from "./YTInputVal";
export const validateFormData = (formData)=>{

    let IMPInputTextFields = document.getElementsByClassName("IMPInputs");
    let IMPPointsFlag = true;
    IMPPointsFlag = EmptyInputVal(IMPInputTextFields,IMPPointsFlag);

    if(checkTopic(formData.topicName)&&
    InputFieldLengthVal(formData.topicName,50)&&
    InputFieldLengthVal(formData.subTopicName,50)&&
    InputFieldLengthVal(formData.YTVideoTitle,50)&&
    IMPPointsFlag &&
    YTInputVal(formData.YTVideoLink,formData.YTVideoTitle) 
    )
    {
        return true;
    }
    
    return false;
}
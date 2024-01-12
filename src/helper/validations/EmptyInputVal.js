export const EmptyInputVal = (IMPInputTextFields,IMPPointsFlag)=>{
    Array.prototype.forEach.call(IMPInputTextFields, function (fields, index) {
      
        if (fields.value === "" || fields.value === undefined) {
          alert("Please fill input filed no. " + (index + 1));
          IMPPointsFlag = false;
          return false;
        }
      });

      return true;

}
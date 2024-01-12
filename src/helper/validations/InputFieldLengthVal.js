
export const InputFieldLengthVal = (val,maxLimit)=>{

if(val.length >maxLimit)
{
    alert(
        "Please reduce no. of words from input field max. length is"+maxLimit
      );
      return false;
}

    return true;
}
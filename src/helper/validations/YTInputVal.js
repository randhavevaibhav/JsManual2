import { validateYouTubeUrl } from "./ValidateYouTubeUrl";

export const YTInputVal = (YTVideoLink,YTVideoTitle)=>{

    if (validateYouTubeUrl(YTVideoLink)) {
        if (YTVideoTitle === "" || YTVideoTitle === undefined) {
          alert("Please enter valid youtube video title !!");
  
          return false;
        }
      } else if (
        YTVideoTitle === "" ||
        YTVideoTitle === undefined
      ) {
        if (
          !validateYouTubeUrl(YTVideoLink) &&
          !(YTVideoLink === "" || YTVideoLink === undefined)
        ) {
          alert("Please enter valid youtube link !!");
  
          return false;
        }
      } else if (
        !(YTVideoTitle === "" || YTVideoTitle === undefined)
      ) {
        if (!validateYouTubeUrl(YTVideoLink)) {
          alert("Please enter valid youtube link !!");
  
          return false;
        }
      }
}
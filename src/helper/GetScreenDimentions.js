export const GetScreenDimentions = ()=>{

    let screenHeight = window.screen.height;
    let screenWidth = window.screen.width;
    console.log("Screen width ===> "+screenWidth);
    console.log("Screen height ===> "+screenHeight);
    return({screenHeight,screenWidth})
  }
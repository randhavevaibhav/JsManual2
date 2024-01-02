import "../styles/LoadingSVG.css";

export const disableScreen = () => {
    var div = document.createElement("div");
    div.className += "overlay";
    document.body.appendChild(div);
  };

  export const enableScreen = () => {
    let x = document.getElementsByClassName("overlay");

    if (x.length > 0) {
      x[0].classList.remove("overlay");
    }
  };


  export const LoadingDiv = ()=>{
    return(<>
    <div id="loading-svg"></div>
    
    </>)
  }
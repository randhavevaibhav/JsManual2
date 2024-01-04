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

export const LoadingDiv = () => {
  return (
    <>
      <div id="loading-svg"></div>
    </>
  );
};

export const LoadingSkeleton = ({ skeletonItems }) => {
  let tempArray = [];

  for (let i = 1; i <= skeletonItems; i++) {
    tempArray.push(i);
  }

  return (
    <>
      {tempArray.map(() => {
        return (
          <>
            <div className="skeleton-main-container">
              <div className="first-container skeleton">
                <div className="first-container-right skeleton"></div>
              </div>

              <div className="second-container skeleton"></div>

              <div className="third-container skeleton"></div>
            </div>
          </>
        );
      })}
    </>
  );
};

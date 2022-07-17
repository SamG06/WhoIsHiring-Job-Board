import React from "react";

function LoadingMessage() {
  return (
  <React.Fragment>
        {[...Array(40)].map((e, i) => {
          return (
            <div key={i} className="skeleton">
              <div className="h1"></div>
              <div className="content"></div>
              <div className="button"></div>
            </div>
          )
      
        })}
  </React.Fragment>
  );

}

export default LoadingMessage;

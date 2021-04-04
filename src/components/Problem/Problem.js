import React from "react";
import {
  Problems,
  ProblemBg,
  ProblemImg,
  ProblemTitle,
} from "./ProblemElements";
import img2 from "../../images/failure2.jpg";

function Problem() {
  return (
    <>
      <Problems id="problem">
        <ProblemTitle>Ne, vazduh nije zagadjen.</ProblemTitle>
        <ProblemBg>
          <ProblemImg src={img2} />
        </ProblemBg>
      </Problems>
    </>
  );
}

export default Problem;

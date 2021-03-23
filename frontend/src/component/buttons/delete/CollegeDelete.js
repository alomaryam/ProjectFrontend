import React from "react";
// import { DeleteButtonStyled } from "../../styles";
import universityStore from "../../../stores/universityStore";

const collegeDelete = (props) => {
  const handleDelete = (event) => {
    event.preventDefault();
    universityStore.deleteCollege(props.collegeId);
    console.log(props.courseId);
  };

  return (
    <button onClick={handleDelete} collegeId={props.collegeId}>
      {" "}
      Delete College
    </button>
  );
};

export default collegeDelete;

import React from "react";
// import { DeleteButtonStyled } from "../../styles";
import universityStore from "../../../stores/universityStore";

const courseDelete = (props) => {
  const handleDelete = (event) => {
    event.preventDefault();
    universityStore.deleteCourse(props.courseId);
    console.log(props.courseId);
  };

  return (
    <button onClick={handleDelete} courseId={props.courseId}>
      {" "}
      Delete Course
    </button>
  );
};

export default courseDelete;

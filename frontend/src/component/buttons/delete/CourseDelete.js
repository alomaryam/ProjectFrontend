import React from "react";
// import { DeleteButtonStyled } from "../../styles";
// import { Button } from "styled-button-component";
import { DeleteButton } from "../../../styled";
import universityStore from "../../../stores/universityStore";

const courseDelete = (props) => {
  const handleDelete = (event) => {
    event.preventDefault();
    universityStore.deleteCourse(props.courseId);
    console.log(props.courseId);
  };

  return (
    <DeleteButton onClick={handleDelete} courseId={props.courseId}>
      {" "}
      x
    </DeleteButton>
  );
};

export default courseDelete;

import React from "react";
// import { DeleteButtonStyled } from "../../styles";
import { Button } from "styled-button-component";
import universityStore from "../../../stores/universityStore";

const collegeDelete = (props) => {
  const handleDelete = (event) => {
    event.preventDefault();
    universityStore.deleteCollege(props.collegeId);
    console.log(props.courseId);
  };

  return (
    <Button onClick={handleDelete} collegeId={props.collegeId}>
      {" "}
      x
    </Button>
  );
};

export default collegeDelete;

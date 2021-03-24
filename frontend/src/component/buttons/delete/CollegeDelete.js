import React from "react";
import { DeleteButton } from "../../../styled";
// import { Button } from "styled-button-component";
import universityStore from "../../../stores/universityStore";

const collegeDelete = (props) => {
  const handleDelete = (event) => {
    event.preventDefault();
    universityStore.deleteCollege(props.collegeId);
    console.log(props.courseId);
  };

  return (
    <DeleteButton onClick={handleDelete} collegeId={props.collegeId}>
      {" "}
      x
    </DeleteButton>
  );
};

export default collegeDelete;

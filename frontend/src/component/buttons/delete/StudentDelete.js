import React from "react";
import { DeleteButton } from "../../../styled";
import { Button } from "styled-button-component";
import universityStore from "../../../stores/universityStore";

const studentDelete = (props) => {
  const handleDelete = (event) => {
    event.preventDefault();
    universityStore.deleteStudent(props.studentId);
    console.log(props.studentId);
  };

  return (
    <DeleteButton onClick={handleDelete} studentId={props.studentId}>
      {" "}
      x
    </DeleteButton>
  );
};

export default studentDelete;

import React from "react";
// import { DeleteButtonStyled } from "../../styles";
import universityStore from "../../../stores/universityStore";

const studentDelete = (props) => {
  const handleDelete = (event) => {
    event.preventDefault();
    universityStore.deleteStudent(props.studentId);
    console.log(props.studentId);
  };

  return (
    <button onClick={handleDelete} studentId={props.studentId}>
      {" "}
      Delete Student
    </button>
  );
};

export default studentDelete;

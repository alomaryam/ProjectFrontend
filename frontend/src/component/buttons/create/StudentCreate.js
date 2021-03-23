import React from "react";
// import {ThemeButton,CreateBarStyled,ListWrapper } from "../../styles";
import universityStore from "../../../stores/universityStore";
import { useState } from "react";

const AddStudent = (props) => {
  const [student, setStudent] = useState({
    name: "",
    gender: "",
    email: "",
  });
  const handleChange = (event) => {
    setStudent({ ...student, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    universityStore.createStudent(student);
  };

  return (
    <div>
      <p>Name</p>
      <input type="text" name="name" onChange={handleChange} />
      <p>Gender</p>
      <input type="text" name="gender" onChange={handleChange} />
      <p>Email</p>
      <input type="email" name="email" onChange={handleChange} />
      <button onClick={handleSubmit}>Add Student</button>
    </div>
  );
};

export default AddStudent;

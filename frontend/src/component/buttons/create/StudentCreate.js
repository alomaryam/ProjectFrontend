import React from "react";
import { ADDWrapper, ButtonWrapper, Background } from "../../../styled";
import universityStore from "../../../stores/universityStore";
import { Button } from "styled-button-component";
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
    <Background>
      <ADDWrapper>
        <h2> Create New Student </h2>
        <input
          placeholder="Add Name"
          type="text"
          name="name"
          onChange={handleChange}
        />
        {/* <input type="radio" name="gender" value="male" >Male 
      <input type="radio" name="gender" value="female" /> Female */}
        <input
          placeholder="Add Gender"
          type="text"
          name="gender"
          onChange={handleChange}
        />
        <input
          placeholder="Add Email"
          type="email"
          name="email"
          onChange={handleChange}
        />
        <ButtonWrapper>
          <Button onClick={handleSubmit}>Add Student</Button>
        </ButtonWrapper>
      </ADDWrapper>
    </Background>
  );
};

export default AddStudent;

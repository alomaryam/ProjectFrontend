import React from "react";
import { ADDWrapper, ButtonWrapper, Background } from "../../../styled";
import { Button } from "styled-button-component";
import universityStore from "../../../stores/universityStore";
import { useState } from "react";

const AddCourse = (props) => {
  const [course, setCourse] = useState({
    name: "",
    number: "",
    credit: 0,
  });
  const handleChange = (event) => {
    setCourse({ ...course, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    universityStore.createCourse(course);
  };

  return (
    <Background>
      <ADDWrapper>
        <h2> Create New Course </h2>

        <input
          placeholder="Name"
          type="text"
          name="name"
          onChange={handleChange}
        />

        <input
          placeholder="Id"
          type="text"
          name="number"
          onChange={handleChange}
        />
        <input
          placeholder="Credit"
          type="number"
          min="1"
          max="3"
          name="credit"
          onChange={handleChange}
        />
        {/* // <input type="text" name="collegeId" /> */}
        <ButtonWrapper>
          <Button onClick={handleSubmit}>Add Course</Button>
        </ButtonWrapper>
      </ADDWrapper>
    </Background>
  );
};

export default AddCourse;

import React from "react";
// import {ThemeButton,CreateBarStyled,ListWrapper } from "../../styles";
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
    <div>
      <p>Name</p>
      <input type="text" name="name" onChange={handleChange} />
      <p>Number</p>
      <input type="text" name="number" onChange={handleChange} />
      <p>Credit</p>
      <input
        type="number"
        min="1"
        max="3"
        name="credit"
        onChange={handleChange}
      />
      {/* // <input type="text" name="collegeId" /> */}
      <button onClick={handleSubmit}>Add Course</button>
    </div>
  );
};

export default AddCourse;

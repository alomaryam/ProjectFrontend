import React from "react";
// import {ThemeButton,CreateBarStyled,ListWrapper } from "../../styles";
import universityStore from "../../../stores/universityStore";
import { useState } from "react";

const AddCollege = (props) => {
  const [college, setCollege] = useState({
    name: "",
    buildingNUM: "",
  });
  const handleChange = (event) => {
    setCollege({ ...college, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    universityStore.createCollege(college);
  };

  return (
    <div>
      <p>Name</p>
      <input type="text" name="name" onChange={handleChange} />
      <p>Building Number</p>
      <input type="text" name="buildingNUM" onChange={handleChange} />
      <button onClick={handleSubmit}>Add College</button>
    </div>
  );
};

export default AddCollege;

import React from "react";
import { ADDWrapper, ButtonWrapper, Background } from "../../../styled";
import { Button } from "styled-button-component";
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
    <Background>
      <ADDWrapper>
        <h2> Create New College </h2>
        <input
          placeholder="Name"
          type="text"
          name="name"
          onChange={handleChange}
        />
        <input
          placeholder="Building Number"
          type="text"
          name="buildingNUM"
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}>Add College</Button>
      </ADDWrapper>
    </Background>
  );
};

export default AddCollege;

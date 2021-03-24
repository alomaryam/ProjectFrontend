//Style
import "../../App.css";
import { List, A, FontDiv } from "../../styled";
import { Button } from "styled-button-component";
//Data
import { observer } from "mobx-react";
import CollegeDelete from "../buttons/delete/CollegeDelete.js";
import universityStore from "../../stores/universityStore";
import CourseItem from "./CourseItem";

const CollegeItem = (props) => {
  const college = props.colleges;

  const filterCourse = universityStore.course
    .filter((courses) => courses.collegeId === college.id)
    .map((courses) => <CourseItem courses={courses} key={courses.id} />);

  return (
    <div>
      <List>
        <FontDiv>
          <CollegeDelete collegeId={college.id} />
          <h2> {college.name}</h2>

          <p> Building Number: {college.buildingNUM}</p>
        </FontDiv>

        <div>{filterCourse}</div>
      </List>
    </div>
  );
};

export default observer(CollegeItem);

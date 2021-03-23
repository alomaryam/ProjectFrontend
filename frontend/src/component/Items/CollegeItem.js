//Style
import "../../App.css";
import { List } from "../../styled";
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
    <List>
      <h2> {college.name}</h2>
      <p> Building Number: {college.buildingNUM}</p>
      <button>courses</button>
      <CollegeDelete collegeId={college.id} />
      {/* {filterCourse} */}
    </List>
  );
};

export default observer(CollegeItem);

//Style
import "../../App.css";
import { List } from "../../styled";
//Data
import { observer } from "mobx-react";
import CourseDelete from "../buttons/delete/CourseDelete.js";

const CourseItem = (props) => {
  const course = props.courses;

  // console.log("hello", course.student[0]);

  return (
    <List>
      <h2> {course.name}</h2>
      <h3> {course.number}</h3>
      <h3> {course.credit}</h3>
      <button>students</button>
      <CourseDelete courseId={course.id} />
    </List>
  );
};

export default observer(CourseItem);

//Style
import "../../App.css";
import { List, DeleteWrapper, MiniList } from "../../styled";
import { Button } from "styled-button-component";
//Data
import { observer } from "mobx-react";
import CourseDelete from "../buttons/delete/CourseDelete.js";

const CourseItem = (props) => {
  const course = props.courses;

  // console.log("hello", course.student[0]);

  return (
    <MiniList>
      <CourseDelete courseId={course.id} />

      <h2>Course Name: {course.name}</h2>
      <h3>Course Id: {course.number}</h3>
      <h3>Credits: {course.credit}</h3>
    </MiniList>
  );
};

export default observer(CourseItem);

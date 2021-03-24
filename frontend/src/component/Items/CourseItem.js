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
      <h2> {course.name}</h2>
      <h3> {course.number}</h3>
      <h3> {course.credit}</h3>
      <Button>Students</Button>
      <DeleteWrapper>
        <CourseDelete courseId={course.id} />
      </DeleteWrapper>
    </MiniList>
  );
};

export default observer(CourseItem);

//Style
import "../../App.css";
import { MiniList } from "../../styled";
//Data
import { observer } from "mobx-react";
import StudentDelete from "../buttons/delete/StudentDelete.js";
import { Button } from "styled-button-component";
import universityStore from "../../stores/universityStore";
import CourseItem from "./CourseItem";

const StudentItem = (props) => {
  const student = props.students;

  // const filterCourse = universityStore.course
  //   .filter((courses) =>
  //     courses.student.some(courses.student.studentId === student.id)
  //   )
  //   .map((courses) => <CourseItem2 courses={courses} key={courses.id} />);

  return (
    <MiniList>
      <StudentDelete studentId={student.id} />
      <h2> {student.name}</h2>
      <h3> {student.gender}</h3>
      <h3> {student.email}</h3>

      {/* {filterCourse} */}
    </MiniList>
  );
};

export default observer(StudentItem);

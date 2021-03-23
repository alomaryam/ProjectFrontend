//Style
import "../../App.css";
import { List } from "../../styled";
//Data
import { observer } from "mobx-react";
import StudentDelete from "../buttons/delete/StudentDelete.js";
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
    <List>
      <h2> {student.name}</h2>
      <h3> {student.gender}</h3>
      <h3> {student.email}</h3>
      <button>courses</button>

      <StudentDelete studentId={student.id} />
      {/* {filterCourse} */}
    </List>
  );
};

export default observer(StudentItem);

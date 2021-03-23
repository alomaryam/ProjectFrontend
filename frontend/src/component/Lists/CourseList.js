//Styles
import { AboutWrapper, CardsWrapper, Button } from "../../styled";

// Data
import universityStore from "../../stores/universityStore";
import CourseItem from "../Items/CourseItem";

//Mobx
import { observer } from "mobx-react";
const CourseList = () => {
  //Course lists
  const course = universityStore.course.map((courses) => (
    <ul>
      <CourseItem courses={courses} key={courses.id} />
    </ul>
  ));

  return (
    <div>
      <Button type="button" href="/AddCourse">
        +
      </Button>
      <div>{course}</div>
    </div>
  );
};

export default observer(CourseList);

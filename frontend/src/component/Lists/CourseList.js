//Styles
import { AboutWrapper, CardsWrapper } from "../../styled";

// Data
import universityStore from "../../stores/universityStore";
import CourseItem from "../Items/CourseItem";

//Mobx
import { observer } from "mobx-react";
const CourseList = () => {
  //Course lists
  const course = universityStore.course.map((courses) => (
    <CourseItem courses={courses} key={courses.id} />
  ));

  return (
    <AboutWrapper>
      <CardsWrapper>{course}</CardsWrapper>
    </AboutWrapper>
  );
};

export default observer(CourseList);

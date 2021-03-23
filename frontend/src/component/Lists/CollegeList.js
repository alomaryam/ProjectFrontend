//Styles
import { AboutWrapper, CardsWrapper } from "../../styled";

// Data
import universityStore from "../../stores/universityStore";
import CollegeItem from "../Items/CollegeItem";

//Mobx
import { observer } from "mobx-react";
const CollegeList = () => {
  //college lists
  const colleges = universityStore.college.map((colleges) => (
    <ul>
      <CollegeItem colleges={colleges} key={colleges.id} />
    </ul>
  ));

  // //college courses list
  // const courses = universityStore.college.courses.map((courses) => (
  //   <CollegeItem courses={courses} key={courses.id} />
  // ));

  return (
    <div>
      <div>{colleges}</div>
    </div>
  );
};

export default observer(CollegeList);

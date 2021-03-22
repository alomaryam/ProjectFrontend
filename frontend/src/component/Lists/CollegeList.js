// Data
import universityStore from "../../stores/universityStore";
import CollegeItem from "../Items/CollegeItem";

//Mobx
import { observer } from "mobx-react";
const CollegeList = () => {
  //college lists
  const colleges = universityStore.college.map((colleges) => (
    <CollegeItem colleges={colleges} key={colleges.id} />
  ));

  return <div>{colleges}</div>;
};

export default observer(CollegeList);

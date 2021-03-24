//Styles
import { AboutWrapper, CardsWrapper, Button } from "../../styled";

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

  return (
    <div>
      <Button type="button" href="/AddCollege">
        +
      </Button>
      <div>{colleges}</div>
    </div>
  );
};

export default observer(CollegeList);

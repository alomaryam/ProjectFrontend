//Styles
import {
  AboutWrapper,
  CardsWrapper,
  Button,
  ListBackground,
} from "../../styled";

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
    <ListBackground>
      <Button type="button" href="/AddCollege">
        +
      </Button>
      <div>{colleges}</div>
    </ListBackground>
  );
};

export default observer(CollegeList);

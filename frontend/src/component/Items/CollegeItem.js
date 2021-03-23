//Style
import "../../App.css";
import { CardWrapper } from "../../styled";
//Data
import { observer } from "mobx-react";
import CollegeDelete from "../buttons/delete/CollegeDelete.js";

const CollegeItem = (props) => {
  const college = props.colleges;

  return (
    <CardWrapper>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h2> {college.name}</h2>
          </div>
          <div className="flip-card-back">
            <p> Building Number: {college.buildingNUM}</p>
            <button>courses</button>
            <CollegeDelete collegeId={college.id} />
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default observer(CollegeItem);

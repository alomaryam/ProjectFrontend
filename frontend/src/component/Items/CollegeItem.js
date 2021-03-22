import "../../App.css";
import { observer } from "mobx-react";

const CollegeItem = (props) => {
  const college = props.colleges;

  return (
    <div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h2> {college.name}</h2>
          </div>
          <div className="flip-card-back">
            <p>{college.buildingNUM}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(CollegeItem);

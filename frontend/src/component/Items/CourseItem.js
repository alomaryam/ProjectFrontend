//Style
import "../../App.css";
import { CardWrapper } from "../../styled";
//Data
import { observer } from "mobx-react";

const CourseItem = (props) => {
  const course = props.courses;

  return (
    <CardWrapper>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h2> {course.name}</h2>
          
          </div>
          <div className="flip-card-back">
          <h3> {course.number}</h3>
            <h3> {course.credit}</h3>
            <button>courses</button>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default observer(CourseItem);

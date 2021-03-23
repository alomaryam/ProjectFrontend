//Style
import "../../App.css";
import { CardWrapper } from "../../styled";
//Data
import { observer } from "mobx-react";
import CourseDelete from "../buttons/delete/CourseDelete.js";

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
            <button>students</button>
            <CourseDelete courseId={course.id} />
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default observer(CourseItem);

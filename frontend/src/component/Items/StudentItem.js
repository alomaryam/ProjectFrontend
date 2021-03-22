//Style
import "../../App.css";
import { CardWrapper } from "../../styled";
//Data
import { observer } from "mobx-react";

const StudentItem = (props) => {
  const student = props.students;

  return (
    <CardWrapper>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h2> {student.name}</h2>
          </div>
          <div className="flip-card-back">
            <h3> {student.gender}</h3>
            <h3> {student.email}</h3>
            <button>course</button>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default observer(StudentItem);

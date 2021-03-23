//Styles
import { AboutWrapper, CardsWrapper } from "../../styled";

// Data
import universityStore from "../../stores/universityStore";
import StudentItem from "../Items/StudentItem";

//Mobx
import { observer } from "mobx-react";
const StudentList = () => {
  //Student lists
  const student = universityStore.student.map((students) => (
    <ul>
      <StudentItem students={students} key={students.id} />
    </ul>
  ));

  return (
    <div>
      <div>{student}</div>
    </div>
  );
};

export default observer(StudentList);

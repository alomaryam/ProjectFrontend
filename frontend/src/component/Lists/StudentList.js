//Styles
import { AboutWrapper, CardsWrapper, Button } from "../../styled";

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
      <Button type="button" href="/AddStudent">
        +
      </Button>
      <div>{student}</div>
    </div>
  );
};

export default observer(StudentList);

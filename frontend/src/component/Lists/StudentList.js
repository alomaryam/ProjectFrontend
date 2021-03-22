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
    <StudentItem students={students} key={students.id} />
  ));

  return (
    <AboutWrapper>
      <CardsWrapper>{student}</CardsWrapper>
    </AboutWrapper>
  );
};

export default observer(StudentList);

// Data
import universityStore from "../stores/UniversityStore"
import CollegeItem from "../Items/CollegeItem"

//Mobx
import { observer } from "mobx-react";
const CollegeList = (props) => {

    //college lists
      const colleges =  universityStore.colleges.map((colleges) => (
        <CollegeItem colleges={colleges} key={college.id}/>));
    
      return (
          <div>
           {colleges}
           </div>
)};
    
    export default observer(CollegeList);
    
import { action, makeObservable, observable } from "mobx";
import axios from "axios";

class UniversityStore {
  college = [];

  constructor() {
    makeObservable(this, {
      college: observable,
      fetchCollege: action,
      createCollege: action,
      deleteCollege: action,
    });
  }

  // fetching data from the backend
  //Make sure of the route
  fetchCollege = async () => {
    try {
      const response = await axios.get("http://localhost:8002/colleges");
      //where is data from? do we make it as. response.College
      this.college = response.data;
    } catch (error) {
      console.error("CollegeStore -> fetchCollege -> error", error);
    }
  };

  //Deleting data from the Backend
  deleteCollege = async (collegeId) => {
    try {
      await axios.delete(`http://localhost:8002/colleges/${collegeId}`);
      this.college = this.college.filter((college) => college.id !== collegeId);
    } catch (error) {
      console.error("CollegeStore -> deleteCollege -> error", error);
    }
  };

  //Creating a new movie to the backend
  //is data replaced with college?
  createCollege = async (data) => {
    // let newMovie=data;
    // newMovie.id=this.movies.length+1;
    // console.log(newMovie);
    // this.movies.push(newMovie);
    try {
      //is Data replaced with college?
      const response = await axios.post("http://localhost:8002/college", data);
      this.college.push(response.data);
    } catch (error) {
      console.error("CollegeStore -> createCollege -> error", error);
    }
  };
}

const universityStore = new UniversityStore();
universityStore.fetchCollege();

export default universityStore;

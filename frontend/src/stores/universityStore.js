import { action, makeObservable, observable } from "mobx";
import axios from "axios";

class UniversityStore {
  college = [];
  course = [];
  student = [];

  constructor() {
    makeObservable(this, {
      college: observable,
      course: observable,
      student: observable,
      //Fetches
      fetchCollege: action,
      fetchCourse: action,
      fetchStudent: action,
      //Create
      createCollege: action,
      createCourse: action,
      createStudent: action,
      //Delete
      deleteCollege: action,
      deleteCourse: action,
      deleteStudent: action,
    });
  }

  // fetching data from the backend
  //College Data
  fetchCollege = async () => {
    try {
      const response = await axios.get("http://localhost:8002/colleges");
      //where is data from? do we make it as. response.College
      this.college = response.data;
    } catch (error) {
      console.error("UniversityStore -> fetchCollege -> error", error);
    }
  };
  //Course Data
  fetchCourse = async () => {
    try {
      const response = await axios.get("http://localhost:8002/courses");
      this.course = response.data;
    } catch (error) {
      console.error("UniversityStore -> fetchCourse -> error", error);
    }
  };
  //Student Data
  fetchStudent = async () => {
    try {
      const response = await axios.get("http://localhost:8002/students");
      this.student = response.data;
    } catch (error) {
      console.error("UniversityStore -> fetchStudent -> error", error);
    }
  };

  //Deleting data from the Backend
  //College
  deleteCollege = async (collegeId) => {
    try {
      await axios.delete(`http://localhost:8002/colleges/${collegeId}`);
      this.college = this.college.filter((college) => college.id !== collegeId);
    } catch (error) {
      console.error("UniversityStore -> deleteCollege -> error", error);
    }
  };

  //Course
  deleteCourse = async (courseId) => {
    try {
      await axios.delete(`http://localhost:8002/courses/${courseId}`);
      this.course = this.course.filter((course) => course.id !== courseId);
    } catch (error) {
      console.error("UniversityStore -> deleteCourse -> error", error);
    }
  };
  //Student
  deleteStudent = async (studentId) => {
    try {
      await axios.delete(`http://localhost:8002/students/${studentId}`);
      this.student = this.student.filter((student) => student.id !== studentId);
    } catch (error) {
      console.error("UniversityStore -> deleteStudent -> error", error);
    }
  };

  //Creating a new movie to the backend
  //College
  createCollege = async (data) => {
    try {
      //is Data replaced with college?
      const response = await axios.post("http://localhost:8002/colleges", data);
      this.college.push(response.data);
    } catch (error) {
      console.error("CollegeStore -> createCollege -> error", error);
    }
  };

  //Course
  createCourse = async (data) => {
    try {
      const response = await axios.post("http://localhost:8002/courses", data);
      this.course.push(response.data);
    } catch (error) {
      console.error("UniversityStore -> createCourse -> error", error);
    }
  };

  //Student
  createStudent = async (data) => {
    try {
      const response = await axios.post("http://localhost:8002/students", data);
      this.student.push(response.data);
    } catch (error) {
      console.error("UniversityStore -> createStudent -> error", error);
    }
  };
}
const universityStore = new UniversityStore();
universityStore.fetchCollege();
universityStore.fetchCourse();
universityStore.fetchStudent();

export default universityStore;

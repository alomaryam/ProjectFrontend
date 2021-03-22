// import { action, makeObservable, observable } from "mobx";
// import axios from "axios";

// class UniversityStore {
//   course = [];

//   constructor() {
//     makeObservable(this, {
//       course: observable,
//       fetchCourse: action,
//       createCourse: action,
//       deleteCourse: action,
//     });
//   }

//   // fetching data from the backend

//   //Course Data
//   fetchCourse = async () => {
//     try {
//       const response = await axios.get("http://localhost:8002/courses");
//       this.course = response.data;
//     } catch (error) {
//       console.error("UniversityStore -> fetchCourse -> error", error);
//     }
//   };

//   //Deleting data from the Backend

//   //Course
//   deleteCourse = async (courseId) => {
//     try {
//       await axios.delete(`http://localhost:8002/courses/${courseId}`);
//       this.course = this.course.filter((course) => course.id !== courseId);
//     } catch (error) {
//       console.error("UniversityStore -> deleteCourse -> error", error);
//     }
//   };

//   //Creating a new movie to the backend

//   //Course
//   createCourse = async (data) => {
//     try {
//       const response = await axios.post("http://localhost:8002/courses", data);
//       this.course.push(response.data);
//     } catch (error) {
//       console.error("UniversityStore -> createCourse -> error", error);
//     }
//   };
// }
// const courseStore = new CourseStore();
// CourseStore.fetchCourse();

// export default courseStore;

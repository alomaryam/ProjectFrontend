import "../App.css"

const CollegeItem = (props) => {

    const college = props.college;
  
  
    return (
      <div>
  <div className="flip-card">
  <div className="flip-card-inner">
  <div className="flip-card-front">
      <h2> {college.name}</h2>
  </div>
  <div className="flip-card-back">
      <p>{college.buildingNUM}</p> 
  </div>
  </div>
  </div>
      
      </div>
    );
  };
  
  export default observer(UnwatchedMovieItem);
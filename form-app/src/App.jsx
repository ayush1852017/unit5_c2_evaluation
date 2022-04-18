import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import "./index.css";

function App() {
  const pageChange = () => {
    let AddData = document.querySelector(".addstudent");
    AddData.style.display = "block";
    let showdata = document.querySelector(".showData");
    showdata.style.display = "none";
  };
  return (
    <div className='App'>
      <ShowStudents />
      <button className='togglebtn' onClick={pageChange}>
        Add Student
      </button>
      <AddStudent />

      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;

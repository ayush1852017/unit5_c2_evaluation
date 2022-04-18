import { useState, useEffect } from "react";
import "../index.css";
export const AddStudent = () => {
  const [table, setTable] = useState([]);

  const [studentData, setStudentData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    age: "",
    tenth_score: "",
    twelth_score: "",
    preferred_branch: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setStudentData({ ...studentData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    })
      .then((res) => res.json())
      .then((dbData) => {
        setTable([...table, dbData]);
      });
  };
  const afterSubmit = () => {
    let AddData = document.querySelector(".addstudent");
    AddData.style.display = "none";
    let showdata = document.querySelector(".showData");
    showdata.style.display = "block";
  };
  return (
    <form onSubmit={handleSubmit} className='addstudent'>
      <div>
        Firstname:{studentData.first_name}
        <input
          type='text'
          name='first_name'
          onChange={handleChange}
          className='first_name'
          value={studentData.first_name}
          placeholder='enter first name'
        />
      </div>
      <div>
        Last Name:{studentData.last_name}
        <input
          type='text'
          onChange={handleChange}
          name='last_name'
          className='last_name'
          value={studentData.last_name}
          placeholder='enter last name'
        />
      </div>
      <div>
        Email: {studentData.email}
        <input
          type='email'
          name='email'
          onChange={handleChange}
          className='email'
          value={studentData.email}
          placeholder='enter email'
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
            name='gender'
            className='male'
            onChange={handleChange}
            type='radio'
            value={studentData.gender}
          />{" "}
          Female{" "}
          <input
            name='gender'
            className='female'
            onChange={handleChange}
            type='radio'
            value={studentData.gender}
          />
        </div>
      </div>
      <div>
        Age:{studentData.age}
        <input
          type='number'
          name='age'
          onChange={handleChange}
          className='age'
          value={studentData.age}
          placeholder='enter age'
        />
      </div>
      <div>
        Tenth Score:{studentData.tenth_score}
        <input
          type='number'
          name='tenth_score'
          className='tenth_score'
          onChange={handleChange}
          placeholder='enter 10th score'
        />{" "}
      </div>
      <div>
        Twelth Score:{studentData.twelth_score}
        <input
          type='number'
          name='twelth_score'
          className='twelth_score'
          onChange={handleChange}
          value={studentData.twelth_score}
          placeholder='enter 12th score'
        />{" "}
      </div>
      <div>
        <select
          value={studentData.preferred_branch} // select dropdown needs both value and onChange attributes
          name='preferred_branch'
          className='preferred_branch'
          onChange={handleChange}
        >
          <option value='law'>law</option>
          <option value='commerce'>commerce</option>
          <option value='science'>science</option>
          <option value='sports'>sports</option>
          <option value='arts'>arts</option>
          <option value='acting'>acting</option>
        </select>
      </div>

      <input
        className='submit'
        type='submit'
        value='Submit'
        onClick={afterSubmit}
      />
      {
        // <div className="error"></div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};

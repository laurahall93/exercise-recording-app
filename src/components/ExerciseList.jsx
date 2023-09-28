import { Fragment, useState } from "react";
import axios from "axios";
import { baseUrl } from "../utils/baseUrl";

export function ExerciseList() {
  const [exerciseInput, setExerciseInput] = useState("");

  function handleInputChange(event) {
    setExerciseInput(event.target.value);
  }

  function handleAddClick() {
    try {
      const postData = {
        user_id: 1,
        title: exerciseInput,
        completed: false,
        date: new Date(),
      };
      const response = axios.post(`${baseUrl}/exercises`, postData);
      console.log(response.data[0] + "added to database");
      setExerciseInput("");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Fragment>
      <h1>Record Your Daily exercises 🤸‍♀️</h1>
      <br />
      <input
        type="text"
        placeholder="Add exercise..."
        value={exerciseInput}
        onChange={handleInputChange}
      ></input>
      <button onClick={handleAddClick}>Add</button>
      <br />
    </Fragment>
  );
}

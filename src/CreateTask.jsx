import React, {useState} from 'react';
import dateFormat from 'dateformat';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

function CreateTask(props) {
  const [task, setTask] = useState({content:"", due:"Today", isComplete: false, important: false});
  const [dueDate, setDueDate] = useState(new Date());

  let currentDate = dateFormat(new Date(), "longDate");
  
  const createTaskBody = (e) => {
    let content = e.target.value;
    setTask(prevTask => {
      return {
        ...prevTask,
        content: content
      }
    })
  };

  const createTaskDate = (date) => {
    setDueDate(date);
    let due = dateFormat(date, "longDate");
    setTask(prevTask => {
      return {
        ...prevTask,
        due: due === currentDate ? "Today" : due
      }
    })
  }

  const handleCheck = (e) => {
    let isChecked = e.target.checked;
    setTask(prevTask => {
      return {
        ...prevTask,
        important: isChecked
      }
    })
  }

  const handleSubmit = (e) => {
    props.add(task)
    setTask(prevTask => {
      return{
        ...prevTask,
        content: ""
      }
    })
    e.preventDefault();
  }


  return(
    <div className="create-area" style={{display:props.show ? "block" : "none"}}>
      <textarea onChange={createTaskBody} value={task.content} id="" cols="40" rows="3" placeholder="Add task here"></textarea>
      <div className="date-picker-container">
      <p className="due-text">Due:</p>
      <DatePicker selected={dueDate} onChange={createTaskDate}/>
      </div>
      <div className="important-select-container">
        <input type="checkbox" name="important" onClick={handleCheck}/>
        <p>Important!</p>
      </div>
      <input className="submit btn" onClick={handleSubmit} type="submit" value="Submit"/>
    </div>
  )
}

export default CreateTask;
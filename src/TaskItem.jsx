import React from 'react';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ClearIcon from '@material-ui/icons/Clear';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

function TaskItem(props) {
  const {task, index} = props;

  return(
    <div className="task-item">
      <CheckCircleOutlineIcon className="icon btn" onClick={() => props.complete(index)} />
      { task.important ? <StarIcon className="star icon btn" onClick={() =>props.star(index)} /> : <StarBorderIcon className="star icon btn" onClick={() =>props.star(index)} />}
      <p className="task-content" style={{textDecoration: task.isComplete && "line-through"}}>{task.content}</p>
      <div className="due-date-container">
          <p className="date" >{task.due}</p>
          <CalendarTodayIcon className="icon" />
      </div>
      <ClearIcon className="icon btn delete" onClick={() => props.delete(index)} />
    </div>
  )
}

export default TaskItem;
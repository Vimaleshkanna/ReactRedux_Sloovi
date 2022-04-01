import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TaskList from "./TaskList";

const Task = ({ tasks, taskNumber }) => {
  return (
    <div className="task">
      {tasks.map((task) => {
        return <TaskList task={task} taskNumber={taskNumber} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.task.tasks,
  taskNumber: state.task.taskNumber,
});
export default connect(mapStateToProps)(Task);

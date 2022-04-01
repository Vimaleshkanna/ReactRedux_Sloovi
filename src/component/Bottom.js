import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./component.css";
import PropTypes from "prop-types";
import {
  addTask,
  clearField,
  clearTask,
  deleteTask,
  updateTask,
} from "../actions/task";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsProgress } from "@fortawesome/free-solid-svg-icons";

const Bottom = ({
  addTask,
  task,
  clearTask,
  isUpdate,
  deleteTask,
  auth,
  taskNumber,
  clearField,
  updateTask,
}) => {
  const [taskDetails, setTaskDetails] = useState({
    task_msg: "",
    task_date: "",
    task_time: "",
    assigned_user: "",
  });
  const [isEmpty, setIsEmpty] = useState(true);
  const [id, setId] = useState();
  // if (isUpdate) {
  //   clearField();
  // }
  useEffect(() => {
    setId(task.id);
    if (!isUpdate) {
      clearTask(taskNumber);
    } else {
      clearField();
    }
  }, [isUpdate]);
  const [tN, setTN] = useState(1);
  const onChange = (e) => {
    setTaskDetails({ ...taskDetails, [e.target.name]: e.target.value });
    if (
      taskDetails.assigned_user !== "" ||
      taskDetails.task_msg !== "" ||
      taskDetails.task_date !== "" ||
      taskDetails.task_time !== ""
    ) {
      setIsEmpty(false);
    }
  };
  const handleSave = (e) => {
    e.preventDefault();
    setTN(tN + 1);
    addTask(taskDetails, tN);
  };
  const handleCancel = (e) => {
    e.preventDefault();
    setTN(tN);
    clearTask(tN);
  };
  const handleDelete = (e) => {
    e.preventDefault();
    deleteTask(id);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    //alert(id);
    updateTask(id);
  };
  return (
    <div className="bottom">
      <div className="container">
        <form>
          <div className="row">
            <div className="description">
              <p className="title col-sm-12">Task Description</p>
              <input
                className="col-sm-12 text"
                type="text"
                name="task_msg"
                value={task.task_msg}
                onChange={(e) => onChange(e)}
                required
              />
              {/* {" "}
              <span>
                <FontAwesomeIcon icon={faBarsProgress} />{" "}
              </span> */}
            </div>
          </div>
          <div className="row">
            <div className="date col-sm-6">
              <p className="title">Date</p>
              <div className="md-form md-outline input-with-post-icon datepicker">
                <input
                  name="task_date"
                  placeholder="Select date"
                  type="date"
                  id="example"
                  className="form-control"
                  value={task.task_date}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
            </div>
            <div className="date col-sm-6">
              <p className="title">Time</p>
              <input
                list="times"
                type="text"
                className="time"
                name="task_time"
                onChange={(e) => onChange(e)}
                value={task.task_time}
                required
              />
              <datalist id="times">
                <option value="12 A.M" />
                <option value="01 A.M" />
                <option value="02 A.M" />
                <option value="03 A.M" />
                <option value="04 A.M" />
                <option value="05 A.M" />
                <option value="06 A.M" />
                <option value="07 A.M" />
                <option value="08 A.M" />
                <option value="09 A.M" />
                <option value="10 A.M" />
                <option value="11 A.M" />
                <option value="12 P.M" />
                <option value="01 P.M" />
                <option value="02 P.M" />
                <option value="03 P.M" />
                <option value="04 P.M" />
                <option value="05 P.M" />
                <option value="06 P.M" />
                <option value="07 P.M" />
                <option value="08 P.M" />
                <option value="09 P.M" />
                <option value="10 P.M" />
                <option value="11 P.M" />
              </datalist>
            </div>
          </div>
          <div className="row">
            <div className="user">
              <p className="title col-sm-12">Assign User</p>
              <input
                className="col-sm-12 text"
                type="text"
                name="assigned_user"
                value={task.assigned_user}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
          </div>
          {isUpdate && (
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          )}
          <div className="row">
            <div className="button">
              {isUpdate ? (
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={handleEdit}
                >
                  Save
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              )}
              {isUpdate ? null : (
                <button
                  type="submit"
                  className={`btn btn-success ${
                    isEmpty ? "d-none" : "d-block"
                  }`}
                  onClick={handleSave}
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

Bottom.propTypes = {
  addTask: PropTypes.func.isRequired,
  clearTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
  isUpdate: PropTypes.bool,
  auth: PropTypes.object.isRequired,
  clearField: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  task: state.task.task,
  isUpdate: state.task.isUpdate,
  taskNumber: state.task.taskNumber,
  auth: state.auth,
  updateTask: PropTypes.func.isRequired,
});
export default connect(mapStateToProps, {
  addTask,
  clearTask,
  deleteTask,
  clearField,
  updateTask,
})(Bottom);
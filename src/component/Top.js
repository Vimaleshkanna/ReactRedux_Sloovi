import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./component.css";
import { connect } from "react-redux";
const Top = ({ childToParent, isClicked, taskNumber }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <section>Tasks {taskNumber}</section>
      <div className="plus">
        <FontAwesomeIcon
          style={{ cursor: "pointer" }}
          icon={faPlus}
          onClick={(e) => {
            childToParent(!isClicked);
          }}
        />
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  taskNumber: state.task.taskNumber,
});
export default connect(mapStateToProps)(Top);

import axios from "axios";
import {
  ADD_TASK,
  CLEAR_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  GET_ALL_TASK,
  GET_TASK,
  CLEAR_FIELD,
} from "./types";

export const addTask = (taskData, taskNumber) => async (dispatch) => {
  const currentDate = new Date();
  const assigned_user = taskData.assigned_user;
  const task_date = taskData.task_date;
  const task_time = parseInt(taskData.task_time) * (3600 / 1);
  const time_zone = currentDate.getSeconds();
  const task_msg = taskData.task_msg;
  const is_completed = 1;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    assigned_user,
    task_date,
    task_time,
    is_completed,
    time_zone,
    task_msg,
  });

  try {
    const res = await axios.post(
      `https://stage.api.sloovi.com/task/lead_cb11a91b1bff4c42806b5c8dea51425d?company_id=${localStorage.getItem(
        "company_id"
      )}`,
      body,
      config
    );
    dispatch({
      type: ADD_TASK,
      payload: res.data,
      taskNumber: taskNumber,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllTask = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.get(
      `https://stage.api.sloovi.com/task/lead_cb11a91b1bff4c42806b5c8dea51425d?company_id=${localStorage.getItem(
        "company_id"
      )}`,
      config
    );
    dispatch({
      type: GET_ALL_TASK,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTask = (id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.get(
      `https://stage.api.sloovi.com/task/lead_cb11a91b1bff4c42806b5c8dea51425d/${id}?company_id=${localStorage.getItem(
        "company_id"
      )}`,
      config
    );
    dispatch({
      type: GET_TASK,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const clearTask = (taskNumber) => async (dispatch) => {
  try {
    dispatch({
      type: CLEAR_TASK,
      payload: {},
      taskNumber: taskNumber,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = (id, taskDetails) => async (dispatch) => {
  const currentDate = new Date();
  const assigned_user = taskDetails.assigned_user;
  const task_date = taskDetails.task_date;
  const task_time = taskDetails.task_time;
  const time_zone = currentDate.getSeconds();
  const task_msg = taskDetails.task_msg;
  const is_completed = 1;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    assigned_user,
    task_date,
    task_time,
    is_completed,
    time_zone,
    task_msg,
  });
  try {
    const res = await axios.put(
      `https://stage.api.sloovi.com/task/lead_cb11a91b1bff4c42806b5c8dea51425d/${id}?company_id=${localStorage.getItem(
        "company_id"
      )}`,
      body,
      config
    );
    console.log(res.data);
    dispatch({
      type: UPDATE_TASK,
      payload: res.data,
      id: id,
      // taskNumber: taskNumber,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = (id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.delete(
      `https://stage.api.sloovi.com/task/lead_cb11a91b1bff4c42806b5c8dea51425d/${id}?company_id=${localStorage.getItem(
        "company_id"
      )}`,
      config
    );
    dispatch({
      type: DELETE_TASK,
      payload: res.data,
      id: id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const clearField = () => async (dispatch) => {
  try {
    dispatch({
      type: CLEAR_FIELD,
      payload: {},
    });
  } catch (error) {
    console.log(error);
  }
};

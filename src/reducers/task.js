import {
  ADD_TASK,
  CLEAR_FIELD,
  CLEAR_TASK,
  DELETE_TASK,
  GET_ALL_TASK,
  GET_TASK,
  UPDATE_TASK,
} from "../actions/types";

const initialState = {
  task: {},
  tasks: [],
  taskNumber: 0,
  loading: true,
  isUpdate: false,
};

export default function (state = initialState, action) {
  const { type, payload, taskNumber, id } = action;
  // const task_msg = payload.results.task_msg;
  // const task_date = payload.results.task_date;
  // const task_time = payload.results.task_time;
  // const assigned_user = payload.results.assigned_user;

  // const required_task = { task_msg, task_date, task_time, assigned_user };
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        task: payload.results,
        tasks: [...state.tasks, payload.results],
        taskNumber: state.tasks.length,
        loading: false,
        isUpdate: false,
      };
    case GET_ALL_TASK:
      return {
        ...state,
        tasks: [...state.tasks, Object.assign(...payload.results)],
        loading: false,
        isUpdate: false,
        taskNumber: state.tasks.length,
      };
    case GET_TASK:
      return {
        ...state,
        task: payload.results,
        isUpdate: !state.isUpdate,
        taskNumber: state.tasks.length,
      };
    case CLEAR_TASK:
      return {
        ...state,
        task: {},
        tasks: [...state.tasks],
        taskNumber: state.tasks.length,
        loading: true,
        isUpdate: false,
      };
    case CLEAR_FIELD:
      return {
        ...state,
        task: {},
        tasks: [...state.tasks],
        isUpdate: true,
        taskNumber: state.tasks.length,
      };
    case UPDATE_TASK:
      return {
        ...state,
        task: payload,
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, task: payload } : task
        ),
        isUpdate: !state.isUpdate,
        loading: false,
        taskNumber: state.tasks.length,
      };
    case DELETE_TASK:
      return {
        ...state,
        task: payload,
        tasks: state.tasks.filter((task) => task.id !== id),
        isUpdate: false,
        loading: false,
        taskNumber: state.tasks.length,
      };
    default:
      return { ...state, taskNumber: state.tasks.length };
  }
}

import { GET_ACCESS } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ACCESS:
      return {
        ...state,
        ...payload,
      };

    default:
      return { ...state };
  }
}

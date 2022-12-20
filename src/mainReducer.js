
/**
 * represents the state of the 'Main' components
 */
export const mainState = {
  state: "idle", // can be 'idle' | 'loading' | 'success' | 'fail'
  data: {}, // data we get from the backend
  error: "", // error message, if any.
};

/**
 * updates the state of the 'Main' component
 * 
 * @param {object} state current state of the 'Main' component
 * @param {object} action message object to update the state of the 'Main' component
 * @returns the new state for the 'Main' component
 */
export function rdReducer(state, action) {
  switch (action.type) {
    case "idle":
      return { state: "idle", data: state.data, error: state.error };
    case "success":
      return { state: "success", data: action.payload, error: "" };
    case "fail":
      return { state: "fail", data: {}, error: action.payload };
    case "loading":
      return { state: "loading", data: {}, error: "" };

    default:
      return state;
  }
}

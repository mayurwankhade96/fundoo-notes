const signinReducer = (state, action) => {
  switch (action.type) {
    case "SUBMIT":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: "",
      };
    case "ERROR":
      return {
        ...state,
        isLoading: false,
        error: "Something went wrong",
      };
    case "RESET":
      return {
        ...state,
        email: "",
        password: "",
      };
    case "HANDLE_INPUT":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "TOGGLE_PASSWORD_VISIBILITY":
      return {
        ...state,
        isPasswordShown: !state.isPasswordShown,
      };
    default:
      return state;
  }
};

export default signinReducer;

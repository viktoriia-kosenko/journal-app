const initState = {};

const noteReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_NOTE":
      console.log("note", action.note);
      return state;
    case "CREATE_NOTE_ERROR":
      console.log("error", action.err);
      return state;

    case "DELETE_NOTE":
      console.log("note deleted");
      return state;
    case "DELETE_NOTE_ERROR":
      console.log("error", action.err);
      return state;

    case "UPDATE_NOTE":
      console.log("note", action);
      return state;
    case "UPDATE_NOTE_ERROR":
      console.log("error", action.err);
      return state;

    default:
      return state;
  }
};

export default noteReducer;

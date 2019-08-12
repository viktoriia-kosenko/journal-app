const initState = {
  notes: [
    {
      id: "1",
      title: "Title-1",
      content:
        " I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup touse effectively."
    },
    {
      id: "2",
      title: "Title-2",
      content:
        " I am good at containing small bits of information.I am convenient because I require littlesI am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup touse effectively."
    },
    {
      id: "3",
      title: "Title-3",
      content:
        " I am a very simple card. I am good at containing .I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup touse effectively."
    }
  ]
};

const noteReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_NOTE":
      console.log("note", action.note);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("error", action.err);
      return state;
    default:
      return state;
  }
};

export default noteReducer;

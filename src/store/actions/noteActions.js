export const createNote = note => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call
    const firestore = getFirestore();
    firestore
      .collection("notes")
      .add({
        ...note,
        authorFirstName: "User-2",
        authorLastName: "Second",
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_NOTE", note: note });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR" }, err);
      });
  };
};

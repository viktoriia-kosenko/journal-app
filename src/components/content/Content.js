import React, { Component } from "react";
import Note from "./Note";
import NoteForm from "./NoteForm";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { deleteNote } from "../../store/actions/noteActions";

export class Content extends Component {
  render() {
    const { notes, auth, deleteNote } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
    return (
      <div className="container">
        <NoteForm />
        <div className="container row">
          {notes &&
            notes.map(note => {
              return <Note note={note} key={note.id} deleteNote={deleteNote} />;
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    notes: state.firestore.ordered.notes,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //when we call this.ptops.deleteNote
    //it will fire function below, wich takes  note's Id as a param
    deleteNote: id => dispatch(deleteNote(id))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect(props => {
    if (!props.auth.uid) return [];
    return [
      {
        collection: "notes",
        // orderBy: ["createdAt", "desc"],
        where: ["authorId", "==", props.auth.uid]
      }
    ];
  })
)(Content);

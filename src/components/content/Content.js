import React, { Component } from "react";
import Note from "./Note";
import NoteForm from "./NoteForm";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

export class Content extends Component {
  render() {
    const { notes, auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
    return (
      <div className="container">
        <NoteForm />
        <div className="container row">
          {notes &&
            notes.map(note => {
              return <Note note={note} key={note.id} />;
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.firestore.ordered.notes,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "notes" }])
)(Content);

import React, { Component } from "react";
import Note from "./Note";
import NoteForm from "./NoteForm";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { deleteNote, updateNote } from "../../store/actions/noteActions";
import EditableNote from "./EditableNote";

export class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedEditNoteId: null };
  }

  editNote = id => {
    this.setState({
      selectedEditNoteId: id
    });
  };

  changeEditMode = () => {
    this.setState({
      selectedEditNoteId: null
    });
  };

  render() {
    const { notes, auth, deleteNote, updateNote } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
    return (
      <div className="container">
        <NoteForm />
        <div className="container">
          {notes &&
            notes.map(note =>
              note.id === this.state.selectedEditNoteId ? (
                <EditableNote
                  key={note.id}
                  note={note}
                  updateNote={updateNote}
                  id={note.id}
                  changeEditMode={this.changeEditMode}
                />
              ) : (
                <Note
                  note={note}
                  key={note.id}
                  deleteNote={deleteNote}
                  onEdit={this.editNote}
                />
              )
            )}
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
    deleteNote: id => dispatch(deleteNote(id)),
    updateNote: (id, title, content) => dispatch(updateNote(id, title, content))
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

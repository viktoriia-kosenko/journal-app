import React, { Component } from "react";
import Note from "./Note";
import NoteForm from "./NoteForm";
import { connect } from "react-redux";

export class Content extends Component {
  render() {
    const { notes } = this.props;

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
    notes: state.note.notes
  };
};

export default connect(mapStateToProps)(Content);

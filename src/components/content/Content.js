import React, { Component } from "react";
import Note from "./Note";
import NoteForm from "./NoteForm";

export class Content extends Component {
  render() {
    return (
      <div className="container">
        <NoteForm />
        <div className="container row">
          <Note />
          <Note />
          <Note />
        </div>
      </div>
    );
  }
}

export default Content;

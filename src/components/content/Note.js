import React from "react";

const Note = ({ note }) => {
  return (
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{note.title}</span>
          <p>{note.content}</p>
          <p>Created</p>
        </div>
        <div className="card-action space-right2">
          <button className="waves-effect waves-light orange btn">Edit</button>
          <button className="waves-effect waves-light orange btn">X</button>
        </div>
      </div>
    </div>
  );
};

export default Note;

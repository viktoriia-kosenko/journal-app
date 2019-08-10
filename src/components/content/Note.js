import React from "react";

const Note = () => {
  return (
    <div className="">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Card Title</span>
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
            <p>Created</p>
          </div>
          <div className="card-action space-right2">
            <button className="waves-effect waves-light orange btn">
              Edit
            </button>
            <button className="waves-effect waves-light orange btn">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;

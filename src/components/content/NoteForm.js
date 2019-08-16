import React, { Component } from "react";
import { connect } from "react-redux";
import { createNote } from "../../store/actions/noteActions";

class NoteForm extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.title.length || !this.state.content) {
      alert("fealds can't be empty");
    } else {
      this.props.createNote(this.state);
      this.setState({
        title: "",
        content: ""
      });
    }
  };

  render() {
    return (
      <div className="">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a Note</h5>

          <div className="input-field">
            <label htmlFor="title">Note title</label>
            <input
              type="text"
              id="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>

          <div className="input-field">
            <label htmlFor="content">Note content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
              value={this.state.content}
            />
          </div>
          <p className="text-grey">*Use the form above to create a post</p>
          <div className="input-field">
            <button
              type="submit"
              className="btn orange lighten-1 z-depth-0 waves-effect waves-light"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    //when we call this.ptops.createNote
    //it will fire function below, wich takes new note as a param
    createNote: note => dispatch(createNote(note))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NoteForm);

import React, { Component } from "react";

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
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a Note</h5>

          <div className="input-field">
            <label htmlFor="title">Note title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="content">Note content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
          </div>
          <p className="text-grey">*Use the form above to create a post</p>
          <div className="input-field">
            <button className="btn orange lighten-1 z-depth-0 waves-effect waves-light">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NoteForm;

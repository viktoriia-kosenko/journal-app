import React, { Component } from "react";

export class EditableNote extends Component {
  state = {
    title: this.props.note.title,
    content: this.props.note.content
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
      const { title, content } = this.state;
      const { updateNote, id, changeEditMode } = this.props;
      updateNote(id, title, content);
      changeEditMode();
    }
  };

  render() {
    return (
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <form className="" onSubmit={this.handleSubmit}>
            <div className="input-field ">
              <label className="hide" htmlFor="title">
                Note title
              </label>
              <input
                type="text"
                id="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>

            <div className="input-field">
              <label htmlFor="content" className="hide">
                Note content
              </label>
              <textarea
                id="content"
                className="materialize-textarea"
                value={this.state.content}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <button
                type="submit"
                className="waves-effect waves-light orange btn"
              >
                Submit
              </button>
              <button
                className="waves-effect waves-light orange btn"
                onClick={this.props.changeEditMode}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditableNote;

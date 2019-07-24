import React, { Component } from "react";
import uuid from "uuid/v4";
import "../assets/css/NewBoxForm.css";
export default class NewBoxForm extends Component {
  state = {
    width: "",
    height: "",
    background: ""
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const newBox = { ...this.state, id: uuid() };
    this.props.addBoxProperty(newBox);
    this.setState({
      width: "",
      height: "",
      background: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="width">Width</label>
          <input
            type="text"
            name="width"
            id="width"
            value={this.state.width}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="height">Height</label>
          <input
            type="text"
            name="height"
            id="height"
            value={this.state.height}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="background">Background</label>
          <input
            type="text"
            name="background"
            id="background"
            value={this.state.background}
            onChange={this.handleChange}
            required
          />
        </div>
        <button>Add Box</button>
      </form>
    );
  }
}

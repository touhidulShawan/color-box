import React, { Component } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import "../assets/css/BoxList.css";

export default class BoxList extends Component {
  state = {
    boxProperty: []
  };

  addBoxProperty = property => {
    this.setState({
      boxProperty: [...this.state.boxProperty, property]
    });
  };

  removeBox = id => {
    this.setState({
      boxProperty: this.state.boxProperty.filter(box => box.id !== id)
    });
  };

  render() {
    const newBox = this.state.boxProperty.map(box => {
      return (
        <Box
          key={box.id}
          width={box.width}
          height={box.height}
          bg={box.background}
          removeBox={() => this.removeBox(box.id)}
        />
      );
    });

    return (
      <div className="boxList">
        <header>
          <h2>Color Box Generator</h2>
        </header>
        <NewBoxForm addBoxProperty={this.addBoxProperty} />
        <div className="box_container">{newBox}</div>
      </div>
    );
  }
}

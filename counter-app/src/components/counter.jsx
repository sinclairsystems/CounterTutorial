import React, { Component } from "react";

class Counter extends Component {
  //state includes any data that this object needs
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: []
  };

  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };

  //jsx also doesn't have if else? We need to use JS for conditionals

  renderTags() {
    if (this.state.tags.length === 0) return <p>no tags</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li> //why is this key required? to ensure that react can update individual lists?
        ))}
      </ul>
    );
  }

  render() {
    //jsx elements must have 1 parent element
    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">increment</button>
        {this.state.tags.length === 0 && "please create new tags"}
        {this.renderTags()}
      </div>
    );
    //we have to use this map instead of a loop as JSX doesn't have loops
    //this uses react.create element automatically
  }

  getBadgeClasses() {
    let classes = "badge  m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary"; //WHAT IS THIS SHORT HANDING SYNTAX
    return classes;
  }

  formatCount() {
    const { count } = this.state; //WHAT IS THIS SYNTAX WTFF
    return count === 0 ? <h1>Zero</h1> : count; //short handed if else?
  }
}

export default Counter; //what is the default for?
//in js you can use && between non bools e.g true && "string" = "string" empty strings are falsey? wtf

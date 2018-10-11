import React, { Component } from "react";

class Counter extends Component {
  //state includes any data that this object needs

  /*constructor(){
    super(); //first we must call the parent class constructor(component) as this is a child class
    this.handleIncrement = this.handleIncrement.bind(this)
  }*/

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

  handleIncrement = product => {
    //this.state.count++;
    console.log(product);
    this.setState({ count: this.state.count + 1 }); // this is required to detect the state change unlike angular
  };

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  render() {
    //jsx elements must have 1 parent element
    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.doHandleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>
        {this.state.tags.length === 0 && "please create new tags"}
        {this.renderTags()}
      </div>
    );

    //we have to use this map instead of a loop as JSX doesn't have loops
    //this uses react.create element automatically
  }

  getBadgeClasses() {
    let classes = "badge  m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary"; //WHAT IS THIS SHORT HANDING SYNTAX changing color depending on number
    return classes;
  }

  formatCount() {
    const { count } = this.state; //WHAT IS THIS SYNTAX WTFF
    return count === 0 ? <h1>Zero</h1> : count; //short handed if else?
  }
}

export default Counter; //what is the default for?
//in js you can use && between non bools e.g true && "string" = "string" empty strings are falsey? wtf

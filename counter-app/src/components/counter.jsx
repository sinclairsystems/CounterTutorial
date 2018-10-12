import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from the server
    }
  }
  componentWillUnmount() {
    console.log("Counter-UnMount");
  }
  //state includes any data that this object needs

  /*constructor(){
    super(); //first we must call the parent class constructor(component) as this is a child class
    this.handleIncrement = this.handleIncrement.bind(this)
  }*/

  state = {
    value: this.props.counter.value,
    imageUrl: "https://picsum.photos/200",
    tags: []
  };

  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };

  //jsx also doesn't have if else? We need to use JS for conditionals

  /* renderTags() {
    if (this.state.tags.length === 0) return <p>no tags</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li> //why is this key required? to ensure that react can update individual lists?
        ))}
      </ul>
    );
  }
        {this.state.tags.length === 0 && "please create new tags"}
        {this.renderTags()}

  */

  /* handleIncrement = product => {
    //this.state.count++;
    this.setState({ value: this.state.value + 1 }); // this is required to detect the state change unlike angular
  }; */

  /*doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  }; */

  render() {
    //jsx elements must have 1 parent element
    console.log("Counter - Rendered");
    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );

    //we have to use this map instead of a loop as JSX doesn't have loops
    //this uses react.create element automatically
  }

  getBadgeClasses() {
    let classes = "badge  m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary"; //WHAT IS THIS SHORT HANDING SYNTAX changing color depending on number
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter; //WHAT IS THIS SYNTAX WTFF
    return value === 0 ? <h1>Zero</h1> : value; //short handed if else?
  }
}

export default Counter; //what is the default for?
//in js you can use && between non bools e.g true && "string" = "string" empty strings are falsey? wtf

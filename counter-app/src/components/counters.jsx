// in here we want to render a list of counters

import React, { Component } from "react";
import Counter from "./counter";

//as we can see here each component has its own independant instance
class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id} // key attribute is used internally by react and we cant access it from the component which is why we have ID
            onDelete={onDelete} //this shows us bubbling this up to the parent component
            onIncrement={onIncrement}
            counter={counter} // why do we not refer to a particular instance here?
          />
        ))}
      </div>
    );
  }
}

export default Counters;

// in here we want to render a list of counters

import React, { Component } from "react";
import Counter from "./counter";

//as we can see here each component has its own independant instance
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value} id={counter.id} />
        ))}
      </div>
    );
  }
}

export default Counters;

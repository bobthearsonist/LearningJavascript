import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return this.state.tags.map((tag, index) => <li key={index}>{tag}</li>);
  }

  render() {
    return (
      <React.Fragment>
        <ul>{this.renderTags()}</ul>
      </React.Fragment>
    );
  }
}

export default Counter;

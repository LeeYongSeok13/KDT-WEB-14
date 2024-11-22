import { Component } from "react";

export default class HandlerEx extends Component {
  state = {
    title: "Hello World!",
  };

  changeTitle = () => {
    this.setState({ title: "Goodbye World!" });
  };

  render() {
    const { title } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <button onClick={() => this.changeTitle(title)}>클릭</button>
      </div>
    );
  }
}

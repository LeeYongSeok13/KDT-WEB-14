import React, { Component, createRef } from "react";

export default class Practice1 extends Component {
  state = {
    inputName: "",
    inputTitle: "",
    comment: [{ name: "민수", title: "안뇽" }],
  };

  nameInput = createRef();
  titleInput = createRef();

  checkInputValue = () => {
    const inputName = this.nameInput.current.value;
    const inputTitle = this.titleInput.current.value;

    if (inputName.trim().length === 0) {
      this.nameInput.current.focus();
      return false;
    }
    if (inputTitle.trim().length === 0) {
      this.titleInput.current.focus();
      return false;
    }
    return true;
  };

  addComment = () => {
    if (!this.checkInputValue()) return;

    const newComment = {
      name: this.nameInput.current.value,
      title: this.titleInput.current.value,
    };

    this.setState((prevState) => {
      return { comment: [...prevState.comment, newComment] };
    });

    this.nameInput.current.value = "";
    this.titleInput.current.value = "";
  };

  render() {
    const { comment } = this.state;
    return (
      <div>
        <h1>실습1. 클래스형 Ref 실습</h1>
        <form>
          작성자 :
          <input type="text" ref={this.nameInput} />
          제목 :
          <input type="text" ref={this.titleInput} />
          <button onClick={this.addComment}>작성</button>
        </form>

        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {comment.map((value, idx) => (
              <tr>
                <td>{idx + 1}</td>
                <td>{value.name}</td>
                <td>{value.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

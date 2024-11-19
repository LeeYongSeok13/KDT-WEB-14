import { Component } from "react";
import PropTypes from "prop-types";

export default class PropsPractice extends Component {
  // valid: 함수 (부모에서 넘겨줄 때 함수를 넘겨줘야함)
  render() {
    const { text, valid } = this.props;
    return (
      <div>
        <div>{text}</div>
        <button onClick={valid}>콘솔창 띄우기 버튼</button>
      </div>
    );
  }
}

PropsPractice.defaultProps = {
  text: "이건 기본 text props입니다.",
};

PropsPractice.propTypes = {
  text: PropTypes.string.isRequired,
};

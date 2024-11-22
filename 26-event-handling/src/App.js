import "./App.css";
import SyntheticEvent from "./SyntheticEvent";
import ClassBind from "./ClassBind";
import Counter from "./Counter";
import HandlerEx from "./component/ex/HandlerEx";
import ColorChangeEx from "./component/ex/ColorChangeEx";
import StateEx from "./component/ex/StateEx";
import Practice from "./Practice";

function App() {
  return (
    <div className="App">
      <SyntheticEvent />
      <hr />

      {/* 클래스형 컴포넌트 */}
      <ClassBind />
      <hr />

      {/* 함수형 컴포넌트 */}
      <Counter />
      <hr />

      {/* 실습 1 */}
      <HandlerEx />
      <hr />

      {/* 실습 2 */}
      <ColorChangeEx />
      <hr />

      {/* 실습 3 */}
      <StateEx />
      <hr />

      {/* 종합 실습 */}
      <Practice />
    </div>
  );
}

export default App;

import Counter from "./Counter";
import Practice1 from "./Practice1";
import Practice2 from "./Practice2";
import SayFunction from "./SayFunction";

function App() {
  return (
    <div className="App">
      {/* 클래스형 state */}
      <Counter />
      <hr />

      <SayFunction />
      <hr />

      {/* Practice1 */}
      <Practice1 />
      <hr />

      {/* Practice2 */}
      <Practice2 />
    </div>
  );
}

export default App;

import "./App.css";
import UseCallbackEx1 from "./components/UseCallbackEx1";
import UseCallbackEx2 from "./components/UseCallbackEx2";
import UseMemoEx from "./components/UseMemoEx";

function App() {
  return (
    <div className="App">
      <UseMemoEx />
      <hr />

      <UseCallbackEx1 />
      <hr />

      <UseCallbackEx2 postId={9} />
    </div>
  );
}

export default App;

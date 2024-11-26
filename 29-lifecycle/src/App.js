import "./App.css";
import LifeCycleClass from "./LifeCycleClass";
import LifeCycleFunc from "./LifeCycleFunc";
import PostList from "./PostList";

function App() {
  return (
    <div className="App">
      <LifeCycleClass />
      <hr />

      <LifeCycleFunc />
      <hr />

      <PostList />
    </div>
  );
}

export default App;

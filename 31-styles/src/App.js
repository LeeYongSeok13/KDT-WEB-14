import CssModuleComponent from "./CssModuleComponent";
import Practice from "./Practice";
import Practice2 from "./Practice2";
import SassComponent from "./SassComponent";
import StyledComponent from "./StyledComponent";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <h2>CSS Module</h2>
      <CssModuleComponent />
      <hr />

      <h2>SASS</h2>
      <SassComponent />
      <hr />

      <StyledComponent />
    </div>
  );
}

export default App;

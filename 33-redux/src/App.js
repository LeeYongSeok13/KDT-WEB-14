import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  // store에 있는 상태 가져오기
  const number = useSelector((state) => {
    console.log(state);
    return state.counter.number;
  });

  return (
    <div className="App">
      <h1>React Redux 예제</h1>
      <h2>number: {number}</h2>
      <Box1 />
    </div>
  );
}

const Box1 = () => {
  return(
    <div className='Box'>
      <h2>Box1</h2>
      <Box2 />
    </div>
  )
}

const Box2 = () => {
  return(
    <div className='Box'>
      <h2>Box2</h2>
      <Box3 />
    </div>
  )
}

const Box3 = () => {
  return(
    <div className='Box'>
      <h2>Box3</h2>
      <Box4 />
    </div>
  )
}

const Box4 = () => {
  const dispatch = useDispatch();
  return(
    <div className='Box'>
      <h2>Box4</h2>
      <button onClick={() => dispatch({type: "PLUS"})}>PLUS</button>
      <button onClick={() => dispatch({type: "MINUS"})}>MINUS</button>
    </div>
  )
}

export default App;

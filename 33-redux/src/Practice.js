import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { IN, OUT } from './store/bankReducer';
import { useState } from 'react';

function Practice() {
  // input 값 useState로 변환
  const [price, setPrice] = useState(0);

  // store에 있는 상태 가져오기
  const money = useSelector((state) => {
    return state.bank.money;
  })

  const dispatch = useDispatch();
  return (
    <div className='App'>
      <h2>코딩온 은행</h2>
      <h3>잔액: {money}원</h3>
      <input type="number" onChange={(e) => setPrice(+e.target.value)} />
      <button onClick={() => dispatch({type: IN, price})}>입금</button>
      <button onClick={() => dispatch({type: OUT, price})}>출금</button>
    </div>
  )
}

export default Practice;
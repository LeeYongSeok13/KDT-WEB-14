export const IN = "bank/IN";
export const OUT = "bank/OUT";

// state 초기값 정의
const initialState = {
  money: 0,
}

// 상태 변화를 일으키는 함수
const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    case IN:
      return {money : state.money + action.price}
    case OUT:
      return {money : state.money - action.price}
    default : 
    return state;
  }
}

export default bankReducer;
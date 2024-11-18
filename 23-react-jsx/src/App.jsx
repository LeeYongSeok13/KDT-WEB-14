import "./App.css";

function App() {
  const name = "멍멍이";
  const animal = "강아지";
  // const student = "KDT14";
  // const styles = { backgroundColor: "yellow", fontSize: "24px" };
  const a = 10;
  const b = 8;
  const title = "HELLO WORLD!";
  return (
    <>
      <div>
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello React.js</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

        {/* JSX 문법 */}
        {/* 1. 하나로 감싸인 요소 */}

        {/* 2. Javascript 표현식 사용
          - {}로 감싸면 js 표현식 사용 가능
          - {}에서 삼항연산자, 단축 평가 등 사용 가능 (if, for 문 등은 안된다)
         */}
        {/* <div>{name} 안녕?</div>
        <div>{student === "KDT14" ? "KDT14기 수강생이군요!" : "누구세요?"}</div> */}
        {/* 3. style 속성
            - 리액트에서 돔 요소에 스타일 적용시 문자열X -> 객체 사용
            - 스타일 이름 중 하이픈(-) 포함 시 camelCase로 작성
        */}
        {/* <div style={{ backgroundColor: "blue", fontSize: "24px" }}>하이</div>
        <div style={styles}>하이이</div> */}
        {/* 4. className 사용
            - class -> className

            5. 종료 태그가 없는 태그의 사용
            - 기존의 종료 태그가 없는 태그를 사용하더라도 종료 태그를 작성해야 함 or self-closing
            - 잘못된 예) <input>, <br>
            - 올바른 예) <input />, <br />

            6. 주석
            - // : jsx 외부 주석
        */}
      </div>
      {/* JSX 실습 1 */}
      <div style={{ fontWeight: "900" }}>
        제 반려 동물의 이름은{" "}
        <span style={{ textDecoration: "underline" }}>{name}</span>입니다.
      </div>
      <div style={{ fontWeight: "900" }}>
        <span style={{ textDecoration: "underline" }}>{name}</span>는{" "}
        <span style={{ textDecoration: "underline" }}>{animal}</span>입니다.
      </div>
      <br />
      <hr />

      {/* JSX 실습 2 */}
      <div>{3 + 5 === 8 ? "정답입니다!" : "오답입니다!"}</div>

      <br />
      <hr />

      {/* JSX 실습 3 */}
      <div>{a > b && "a가 b보다 큽니다."}</div>

      <br />
      <hr />

      {/* JSX 실습 4 */}
      <div className="title">{title}</div>

      <form>
        <div className="id">
          <label htmlFor="id">아이디 : </label>
          <input type="text" id="id" />
        </div>
        <div className="pw">
          <label htmlFor="pw">비밀번호 : </label>
          <input type="password" id="pw" />
        </div>
      </form>
    </>
  );
}

export default App;

import "./App.css";
import FunctionComponent from "./FunctionComponent";
import ClassComponent from "./ClassComponent";
import Button from "./Button";
import Food from "./Food";
import BestSeller from "./BestSeller";
import PropsPractice from "./PropsPractice";
import Box from "./BoxComponent";
import PageLayout from "./PageLayout";

function App() {
  function valid() {
    console.log("콘솔 띄우기 성공!");
  }
  return (
    <div className="App">
      <FunctionComponent name="새싹" />
      <FunctionComponent />
      <hr />

      <ClassComponent name="새싹" />
      <ClassComponent />
      <hr />

      <Button link="https://google.com">Google</Button>
      <hr />

      <Food food="된장찌개" />
      <Food />
      <hr />

      <BestSeller
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500원"
        type="자기계발서"
      />
      <hr />

      <PropsPractice text="App 컴포넌트에서 text를 받았습니다." valid={valid} />
      <PropsPractice valid={valid} />
      <hr />

      <Box>
        <h1>이건 children으로 들어간 모든 콘텐츠!</h1>
        <p>react children은 컴포넌트 안에 들어가는 모든 콘텐츠</p>
      </Box>
      <hr />

      <PageLayout>
        <h2>홈페이지 콘텐츠</h2>
        <p>여기는 홈페이지</p>
        <Box>
          <h1>이건 children으로 들어간 모든 콘텐츠!</h1>
          <p>react children은 컴포넌트 안에 들어가는 모든 콘텐츠</p>
        </Box>
      </PageLayout>
    </div>
  );
}

export default App;

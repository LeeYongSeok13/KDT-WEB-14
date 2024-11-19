export default function BestSeller(props) {
  const { title, author, price, type } = props;
  return (
    <div className="BestSeller">
      <h2>이번주 베스트셀러</h2>
      <img
        src="https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791158511906.jpg"
        alt=""
      />
      <h4>{title}</h4>
      <p>저자 : {author}</p>
      <p>판매가 : {price}</p>
      <p>구분 : {type}</p>
    </div>
  );
}

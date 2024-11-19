const Food = ({ food = "돼지국밥" }) => {
  return (
    <div>
      제가 가장 좋아하는 음식은 <span style={{ color: "red" }}>{food}</span>
      입니다.
    </div>
  );
};

export default Food;

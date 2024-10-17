// (임시) DB에서 전체 댓글 목록을 받았다고 가정
exports.commentInfos = () => {
  return [
    {
      id: 1,
      userid: "helloworld",
      date: "2022-10-31",
      comment: "안녕하세요~~",
    },
    {
      id: 2,
      userid: "hello",
      date: "2022-11-31",
      comment: "반가워요",
    },
    {
      id: 3,
      userid: "happy",
      date: "2022-11-31",
      comment: "댓글 작성했음",
    },
    {
      id: 4,
      userid: "lucky",
      date: "2022-10-04",
      comment: "첫 댓글~",
    },
  ];
};

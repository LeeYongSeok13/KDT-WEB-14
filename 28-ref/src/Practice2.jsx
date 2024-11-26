import React, { useRef, useState } from "react";

export default function Practice2() {
  const [comment, setComment] = useState(["민수", "안녕"]);

  const nameRef = useRef(null);
  const titleRef = useRef(null);

  const checkInputValue = () => {};

  const addComment = () => {
    if (!checkInputValue) return;

    const newComment = {
      name: nameRef.current.value,
      title: titleRef.current.value,
    };
  };

  return (
    <div>
      <h2>실습. useRef 실습</h2>

      <form>
        작성자:
        <input type="text" ref={nameRef} />
        제목:
        <input type="text" ref={titleRef} />
        <button onClick={addComment}>작성</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((value, i) => (
            <tr>
              <td>{i}</td>
              <td>{value.name}</td>
              <td>{value.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

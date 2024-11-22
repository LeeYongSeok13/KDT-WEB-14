import React, { useState } from "react";

export default function Practice2() {
  const [table, setTable] = useState([]);
  const [inputName, setInputName] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [searchOption, setSearchOption] = useState("작성자");
  const [searchTitle, setSearchTitle] = useState("");
  const [resultTable, setResultTable] = useState([]);

  const addTable = (e) => {
    e.preventDefault();
    if (inputName.trim().length === 0 && inputTitle.trim().length === 0) {
      return;
    }

    const newTable = table.concat({
      id: table.length + 1,
      name: inputName,
      title: inputTitle,
    });
    setTable(newTable);

    setInputName("");
    setInputTitle("");
  };

  const searchTable = (e) => {
    e.preventDefault();
    const result = table.filter(
      (row) =>
        (searchOption === "작성자" && row.name.includes(searchTitle)) ||
        (searchOption === "제목" && row.name.includes(searchTitle))
    );
    setResultTable(result);
  };

  const showResult = () => {
    setResultTable([]);
    setSearchTitle("");
  };
  return (
    <div>
      {/* 폼 영역 */}
      <form className="practice2-form">
        작성자 :
        <input
          type="text"
          placeholder="작성자"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        제목 :
        <input
          type="text"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <button onClick={addTable}>작성</button>
      </form>

      {/* 검색 영역 */}
      <div className="search">
        <select
          value={searchOption}
          onChange={(e) => setSearchOption(e.target.value)}
        >
          <option value="작성자">작성자</option>
          <option value="제목">제목</option>
        </select>
        <input
          type="text"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />
        <button onClick={searchTable}>검색</button>
        <button onClick={showResult}>전체</button>
      </div>

      {/* 테이블 영역 */}
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {table.map((value) => (
            <tr key={value.id}>
              <td>{value.id}</td>
              <td>{value.name}</td>
              <td>{value.title}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 검색 결과 테이블 영역 */}
      <h4>검색 결과</h4>

      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {resultTable.map((value) => (
            <tr key={value.id}>
              <td>{value.id}</td>
              <td>{value.name}</td>
              <td>{value.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

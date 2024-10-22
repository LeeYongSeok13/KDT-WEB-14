// ------- mysql 연결 -------
// mysql2/promise : promise 객체로 사용 가능한 방식
const mysql = require("mysql2/promise");

// DB 연결
// createConnection: 단일연결
// - 요청할 때마다 새로운 연결을 생성
// - 적은 수의 동시 연결이나 단순한 데이터베이스 쿼리일 때 사용
// createPool: 다중 연결
// - 연결 풀을 생성. 풀은 미리 정의된 수의 연결을 생성하고 관리
// - 요청이 들어오면 연결 풀에서 사용가능한 연결을 제공. 작업완료 후 해당 연결을 다시 반환
// - 연결이 필요하지 않을 경우 자동 반환, 풀의 연결 수를 제한하고 관리를 최적화
// - 일반적인 웹 서비스에 적합
const pool = mysql.createPool({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt",
  connectionLimit: 15, // 최대 연결수(기본값 10)
});

// 회원가입 요청
const createUser = async ({ userid, name, pw }) => {
  const query = "INSERT INTO user (userid, name, pw) VALUES (?, ?, ?)";
  const [rows] = await pool.query(query, [userid, name, pw]);
  return rows;
};

// 회원정보 한명 가져오기 (페이지 렌더링)
const getUser = async (id) => {
  const query = "SELECT * FROM user WHERE id = ?";
  const [row] = await pool.query(query, [id]);
  return row;
};

// 로그인 요총
const signin = async ({ userid, pw }) => {
  const query = "SELECT * FROM user WHERE userid = ? and pw = ?";
  const [rows] = await pool.query(query, [userid, pw]);
  return rows;
};

module.exports = { getUser, createUser };
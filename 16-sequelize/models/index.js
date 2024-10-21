const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

const sequelize = new Sequelize(
  config.database, // 데이터베이스 명
  config.username, // 사용자
  config.password, // 비밀번호
  config // 정보 전체
); // sequelize 객체 선언시 매개변수로 다음 정보들을 받음 : 데이터베이스 명, 사용자, 비밀번호, 정보 전체

// models/Visitor.js에서 정의한 model이 db 에 들어감
db.Visitor = require("./Visitor")(sequelize, Sequelize.DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

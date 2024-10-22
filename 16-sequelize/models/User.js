/**
 * user 모델을 정의하는 함수
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 *
 */

const User = (Sequelize, DataTypes) => {
  // Sequelize.define(param1, param2, param3, ...);
  // param1 : 모델 이름 설정
  // param2 : 컬럼 정의
  // param3 : 모델 옵션 정의
  return Sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userid: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      freezeTableName: true, // 모델 이름 그대로 테이블 이름 고정
      timestamps: false,
      // - 데이터가 추가되고 수정된 시간을 자동으로 컬럼으로 만듬
    }
  );
};

module.exports = User;

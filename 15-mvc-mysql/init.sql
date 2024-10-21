CREATE TABLE visitor (
  id INT NOT NULL PRIMARY KEY auto_increment,
  name VARCHAR(10) NOT NULL,
  comment mediumtext
);

INSERT INTO visitor (name, comment) values("홍길동", "내가 왔다");
INSERT INTO visitor (name, comment) values("이찬혁", "으라차차");

-- user 생성
CREATE USER 'user'@'localhost' identified BY '1234';
-- user 계정에 DB 권한 부여 (모든 DB에 접근 가능하도록)
GRANT all privileges ON *.* TO 'user'@'localhost' WITH GRANT OPTION;
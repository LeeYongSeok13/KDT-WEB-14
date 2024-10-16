-- member 테이블 생성
CREATE TABLE member (
id VARCHAR(20) PRIMARY KEY NOT NULL,
name VARCHAR(5) NOT NULL,
age INT,
gender VARCHAR(2) NOT NULL,
email VARCHAR(50),
promotion VARCHAR(2) DEFAULT 'x'
);
-- member 테이블의 id값 변경
ALTER TABLE member MODIFY id VARCHAR(10);

-- member 테이블의 age 삭제
ALTER TABLE member DROP age;

-- member 테이블의 interest값 추가
ALTER TABLE member ADD interest VARCHAR(100);
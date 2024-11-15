CREATE TABLE customer (
  custid CHAR(10) PRIMARY KEY,
  custname VARCHAR(10) NOT NULL,
  addr CHAR(10) NOT NULL,
  phone CHAR(11),
  birth DATE
);

-- INSERT 추가
INSERT INTO customer (custid, custname, addr, phone, birth) values('lucky, "강해원", "미국 뉴욕", "01022223333", "2002-03-04"');

INSERT INTO customer (addr, phone, birth, custid, custname) values ('대한민국 부산', '01098765544', '2001-04-21', 'wow', '이지은');

INSERT INTO customer values ('happy', '최시은', '일본 오키나와', '01013333333', '1990-03-04');

-- 여러 튜플 동시 추가
INSERT INTO customer values('lu', '강해원', '미국 뉴욕', '01022223333', '2002-03-04'), ('luy', '해원', '미국 뉴욕', '01022223333', '2002-03-04'), ('lucy', '강해', '미국 뉴욕', '01022223333', '2002-03-04');

-- UPDATE 수정
-- custid가 happy인 고객의 주소를 대한민국 서울로 변경
UPDATE customer SET addr = '대한민국 서울' WHERE custid = 'happy';

-- DELETE 삭제
-- custid 가 happy인 고객의 정보를 테이블에서 삭제
DELETE FROM customer WHERE custid = 'happy';

-- SELECT 조회
SELECT * FROM customer; -- * : 와일드 카드

-- 모든 고객의 아이디를 검색
SELECT custid FROM customer;

-- 모든 고객의 아이디와 생년월일을 검색
SELECT custid, birth FROM customer;

-- 고객 테이블의 있는 모든 주소를 검색을 하되 중복 제거
-- DISTINCT : 중복 제거
SELECT DISTINCT addr FROM customer;

-- < WHERE 조건 >
-- 비교: =, <, >, <=, >=
-- 범위: BETWEEN
-- 집합: IN, NOT IN
-- 패턴: LIKE
-- NULL: IS NULL, IS NOT NULL
-- 복합조건: AND, OR, NOT

-- 비교
-- 고객 이름이 강해린인 고객의 생일 검색
SELECT birth FROM customer WHERE custname = '강해린';

-- 고객 이름이 강해린이 아닌 고객의 생일 검색
SELECT birth FROM customer WHERE custname != '강해린';

-- 사전순으로 박민지보다 뒤에 위치한 고객의 모든 정보 검색
SELECT * FROM customer WHERE custname > '박민지';

-- 범위
-- 1995년 이상 2000년 이하 출생 고객 검색
SELECT * FROM customer WHERE birth BETWEEN '1995-01-01' AND '2000-12-31';
SELECT * FROM customer WHERE birth >= '1995-01-01' AND  <= '2000-12-31';

-- 집합
-- 주소가 서울 혹은 런던인 고객 검색
SELECT * FROM customer WHERE addr IN ('대한민국 서울','영국 런던');
SELECT * FROM customer WHERE addr IN addr = '대한민국 서울' OR addr = '영국 런던';
-- 주소가 서울 혹은 런던이 아닌 고객 검색
SELECT * FROM customer WHERE addr NOT IN ('대한민국 서울', '영국 런던');

-- 패턴
-- 주소가 미국 로스엔젤레스 인 고객을 검색
SELECT * FROM customer WHERE addr LIKE '미국 로스앤젤레스';

-- 주소에 '미국'이 포함되어 있는 고객 검색
SELECT * FROM customer WHERE addr LIKE '미국%';

-- 고객 이름에 두번째 글자가 '지'인 고객 검색
-- '_': 임의의 하나의 문자
SELECT * FROM customer WHERE custname LIKE '_지%';

-- 고객 이름의 세번째 글자가 '수'인 고객 검색
SELECT * FROM customer WHERE custname LIKE '__수%';

-- 복합 조건
-- 주소지가 대한민국이고, 2000년생 이후 출생 고객 검색
SELECT * FROM customer WHERE addr LIKE '대한민국%' AND birth >= '2000-01-01';  

-- 주소지가 미국이거나 영국인 고객 검색
SELECT * FROM customer WHERE addr LIKE '미국%' OR addr LIKE '영국%';

-- 휴대폰 번호 마지막 자리가 4가 아닌 고객 검색
SELECT * FROM customer WHERE phone NOT LIKE '%4';

-- <ORDER BY >
-- order by 없음 : pk 기준으로 오름차준 정렬
SELECT * FROM customer ORDER BY custname;
SELECT * FROM customer ORDER BY custname DESC;

-- where절과 order by 함께 사용 (이때, where보다 order by가 뒤에 위치해야 함)
-- 2000년생 이후 출생자 중에서 주소를 기준으로 내림차순 검색
SELECT * FROM customer WHERE birth >= '2000-01-01' ORDER BY addr DESC;

-- 2000년생 이후 출생자 중에서 주소를 기준으로 내림차순 그리고 아이디를 기준으로 내림차순 검색
SELECT * FROM customer WHERE birth >= '2000-01-01' ORDER BY addr DESC, custid DESC;

-- < LIMIT >
-- 행의 개수를 제한
SELECT * FROM customer WHERE birth >= '2000-01-01' LIMIT 2;


-- 외래키 제약 조건
-- 두 테이블 사이의 관계를 맺음
-- 기준 테이블: 기본키를 갖는 테이블 (customer)
-- 참조 테이블: 외래키가 있는 테이블 (orders)
-- 형식: foreign key (열 이름) references 기준_테이블(열_이름)
-- on update cascade: 기준 테이블의 데이터가 변경되면 참조 테이블의 데이터도 변경
-- on delete cascade: 기준 테이블의 데이터가 삭제되면 참조 테이블의 데이터도 삭제
create table orders (
	orderid int primary key auto_increment,
    custid char(10) not null, -- FK
    prodname char(6) not null,
    price int not null,
    amount smallint not null,
    foreign key (custid) references customer(custid) on update cascade on delete cascade
);

-- 테이블 삭제 순서!
-- customer, orders 테이블이 customer.custid를 기준으로 "관계" 맺음
-- customer 테이블에 존재하는 회원만 orders 테이블에 데이터로 추가가 될 수 있음
-- 만약 orders 테이블이 있는데, customer 테이블을 삭제 하면?
-- pk - fk 연결된 테이블은 외래키가 설정된 테이블 (참조 테이블) 먼저 삭제

-- INSERT 추가
INSERT INTO orders VALUES(NULL, 'jy9987', '프링글스', 3500, 2);
INSERT INTO orders VALUES(NULL, 'kiwi', '새우깡', 1200, 1);
INSERT INTO orders VALUES(NULL, 'hello', '홈런볼', 4200, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '맛동산', 2400, 1);
INSERT INTO orders VALUES(NULL, 'bunny', '오감자', 1500, 4);
INSERT INTO orders VALUES(NULL, 'jjjeee', '양파링', 2000, 1);
INSERT INTO orders VALUES(NULL, 'hello', '자갈치', 1300, 2);
INSERT INTO orders VALUES(NULL, 'jjjeee', '감자깡', 1200, 4);
INSERT INTO orders VALUES(NULL, 'bunny', '죠리퐁', 1500, 3);
INSERT INTO orders VALUES(NULL, 'kiwi', '꼬깔콘', 1700, 2);
INSERT INTO orders VALUES(NULL, 'hello', '버터링', 4000, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '칙촉', 4000, 1);
INSERT INTO orders VALUES(NULL, 'wow123', '콘초', 1700, 3);
INSERT INTO orders VALUES(NULL, 'imminji01', '꼬북칩', 2000, 2);
INSERT INTO orders VALUES(NULL, 'bunny', '썬칩', 1800, 5);
INSERT INTO orders VALUES(NULL, 'kiwi', '고구마깡', 1300, 3);
INSERT INTO orders VALUES(NULL, 'jy9987', '오징어집', 1700, 5);
INSERT INTO orders VALUES(NULL, 'jjjeee', '바나나킥', 2000, 4);
INSERT INTO orders VALUES(NULL, 'imminji01', '초코파이', 5000, 2);

-- < 집계함수 >
-- 계산하여 어떤 값을 리턴하는 "함수"
-- group by 절과 함께 쓰이는 케이스가 많음

-- 주문 테이블에서 상품의 총 판매 개수 검색
SELECT SUM(amount) FROM orders;

-- 주문 테이블에서 상품의 총 판매 개수 검색 + 의미있는 열 이름으로 변경
SELECT SUM(amount) AS 'total_amount' FROM orders;

-- 주문 테이블에서 총 판매 개수, 평균 판매 개수, 상품 최저가, 상품 최고가 검색
SELECT SUM(amount) AS 'total_amount', AVG(amount) AS 'avg_amount', MIN(price) AS 'min_price', MAX(price) AS 'max_price' FROM orders;

-- 주문 테이블에서 총 주문 건수
SELECT COUNT(*) FROM orders;

-- 주문 테이블에서 주문한 고객 수(중복 없이)
SELECT COUNT(DISTINCT custid) FROM orders;

-- < GROUP BY >
-- "~별로"

-- 고객별로 주문한 주문 건수 구하기
SELECT custid, COUNT(*) FROM orders GROUP BY custid;

-- 고객별로 주문한 상품 총 수량 구하기
SELECT custid, SUM(amount) FROM orders GROUP BY custid;

-- 고객별로 주문한 총 주문액 구하기
SELECT custid, SUM(amount * price) FROM orders GROUP BY custid;

-- 상품별로 판매 개수 구하기
SELECT prodname, SUM(amount) FROM orders GROUP BY prodname;

-- < HAVING >
-- group by 절 이후 추가 조건
-- 그룹에 대해서 필터링

-- 총 주문액이 10000원 이상인 고객에 대해서 고객별로 주문한 상품 총 수량 구하기
SELECT custid, SUM(amount), SUM(amount * price) FROM orders
  GROUP BY custid
  HAVING SUM(amount * price) >= 10000;

-- 총 주문액이 10000원 이상인 고객에 대해서서 고객별로 주문한 상품 총 수량 구하기
-- (단, custid가 'bunny'인 고객은 제외하고 출력할 것)
-- WHERE, GROUP BY, HAVING 모두 사용한 예시
SELECT custid, SUM(amount), SUM(amount * price) FROM orders
  WHERE custid != 'bunny'
  GROUP BY custid
  HAVING SUM(amount * price) >= 10000;

-- group by 주의 사항
-- select 절에서 group by 에서 사용한 속성과 집계함수만 사용 가능 

-- 실습3. CREATE 문
-- 아래 조건을 충족하는 TABLE 생성
CREATE TABLE user (
  id VARCHAR(10) NOT NULL PRIMARY KEY,
  pw VARCHAR(20) NOT NULL,
  name VARCHAR(5) NOT NULL,
  gender ENUM('F', 'M', '') DEFAULT '',
  birthday DATE NOT NULL,
  age INT(3) NOT NULL DEFAULT 0;
)

DESC user;

-- 실습4. INSERT문
-- 이전 실습에 생성한 user 테이블에서 INSERT문을 이용해 데이터 추가
-- SELECT * FROM user 명령어를 이용해 모든 회원 목록 출력
INSERT INTO user VALUES('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33);
INSERT INTO user VALUES('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
INSERT INTO user VALUES('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53);
INSERT INTO user VALUES('hanzo', 'jk48fn4', '한조', 'M', '1984-10-18', 39);
INSERT INTO user VALUES('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47);
INSERT INTO user VALUES('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22);
INSERT INTO user VALUES('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);

SELECT * FROM user;

-- 실습5. SELECT 문
-- 이전에 생성한 user 테이블에서 다음 조건을 만족하는 SQL문 작성하기

-- 1. 모든 회원목록을 가져오는데, 이때 birthday 컬럼의 값을 기준으로 오름차순으로 정렬하여 가져오시오.
SELECT * FROM user ORDER BY birthday;

-- 2. 회원 목록 중 gender 컬럼의 값이 'M'인 회원목록을 가져오는데, 이 때 name 컬럼의 값을 기준으로 내림차순으로 정렬하여 가져오시오.
SELECT * FROM user WHERE gender = 'M' ORDER BY name DESC;

-- 3. 1990년대에 태어난 회원의 id, name 컬럼을 가져와 목록으로 보여주시오.
SELECT id, name FROM user WHERE birthday BETWEEN '1990-01-01' AND '1999-12-31';

-- 4. 6월생 회원의 목록을 birthday 기준으로 오름차순으로 정렬하여 가져오시오.
SELECT * FROM user WHERE birthday LIKE '%-06-%' ORDER BY birthday;

-- 5. gender 컬럼의 값이 'M'이고, 1970년대에 태어난 회원의 목록을 가져오시오.
SELECT * FROM user WHERE gender = 'M' AND birthday BETWEEN '1970-01-01' AND '1979-12-31';

-- 6. 모든 회원목록 중 age를 기준으로 내림차순 정렬하여 가져오는데, 그때 처음 3개의 레코드만 가져오시오.
SELECT * FROM user ORDER BY age DESC LIMIT 3;

-- 7. 모든 회원목록 중 나이가 25이상 50이하인 회원의 목록을 출력하시오.
SELECT * FROM user WHERE age BETWEEN 25 AND 50;

-- 8. id 컬럼의 값이 hong1234 인 레코드의 pw 컬럼의 값을 12345678로 변경하시오.
UPDATE user SET pw = '12345678' WHERE id = 'hong1234';

-- 9. id 컬럼의 값이 jungkrat인 레코드를 삭제하시오.  
DELETE FROM user WHERE id = 'jungkrat';
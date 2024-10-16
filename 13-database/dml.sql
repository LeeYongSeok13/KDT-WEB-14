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
SELECT sum(amount) FROM orders;

-- 주문 테이블에서 상품의 총 판매 개수 검색 + 의미있는 열 이름으로 변경
SELECT sum(amount) AS 'total_amount' FROM orders;

-- 주문 테이블에서 총 판매 개수, 평균 판매 개수, 상품 최저가, 상품 최고가 검색
SELECT sum(amount) AS 'total_amount', avg(amount) AS 'avg_amount', min(price) AS 'min_price', max(price) AS 'max_price' FROM orders;
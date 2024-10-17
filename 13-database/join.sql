-- JOIN
SELECT * FROM customer;
SELECT * FROM orders;
SELECT * FROM customer, orders;

-- customer, orders 테이블의 행의 개수 구하기
SELECT COUNT(*) FROM customer;
SELECT COUNT(*) FROM orders;
SELECT COUNT(*) FROM customer, orders;
-- => cross join

-- where 절을 이용해 조인 조건 추가
-- 테이블 이름.속성: 어느 테이블의 속성인지 가리킴
SELECT * FROM customer, orders WHERE customer.custid = orders.custid;
-- 이름순 정렬
SELECT * FROM customer, orders
  WHERE customer.custid = orders.custid
  ORDER BY customer.custname;

SELECT * FROM customer INNER JOIN orders ON customer.custid = orders.custid;

-- "고객 이름"과 고객이 주문한 "상품명", "상품 가격" 조회
-- 고객 이름 : customer 테이블
-- 상품명, 상품 가격 : orders 테이블
SELECT custname, prodname, price FROM customer, orders WHERE customer.custid = orders.custid;

-- 고객 이름별로 주문한 제품의 총 구매액을 고객별로 오름차순 정렬
SELECT custname, SUM(amount * price) AS 'total_price'
  FROM customer, orders 
  WHERE customer.custid = orders.custid 
  GROUP BY custname
  ORDER BY total_price;
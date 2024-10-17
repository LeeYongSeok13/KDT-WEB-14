CREATE TABLE instructor (
  id INT PRIMARY KEY,
  name VARCHAR(7),
  dept_name VARCHAR(7),
  salary INT
);

CREATE TABLE teaches (
  id INT PRIMARY KEY,
  course VARCHAR(7),
  semester VARCHAR(7),
  year VARCHAR(4)
);

insert into instructor values (1, 'james', '심리', 95000);
insert into instructor values (2, 'john', '컴공', 95000);

insert into teaches values (1, '운영체제', '봄', '2022');
insert into teaches values (2, '상담심리', '가을', '2023');

-- INNER JOIN
SELECT * FROM instructor JOIN teaches; -- CROSS
SELECT * FROM instructor I JOIN teaches T on I.id = T.id; -- INNER

/*
OUTER JOIN은 공통된 부분만 결합하는 INNER JOIN과 다르게 공통되지 않은 row도 유지한다
이때, 왼쪽 테이블의 row를 유지하면 LEFT (OUTER) JOIN,
오른쪽 테이블의 row를 유지하면 RIGHT (OUTER) JOIN,
양쪽 테이블의 row를 유지하면 FULL OUTER JOIN
*/

DELETE FROM teaches WHERE id <= 2;

insert into instructor values (3, 'mark', '수학', 75000);
insert into instructor values (4, 'tom', '심리', 90000);
insert into teaches values (3, '인공지능', '봄', '2022');
insert into teaches values (4, '사회심리', '가을', '2023');
insert into teaches values (5, '네트워크', '봄', '2022');   
insert into teaches values (6, '알고리즘', '가을', '2023');

-- LEFR OUTER JOIN
SELECT * FROM instructor I LEFT OUTER JOIN teaches T ON I.id = T.id;
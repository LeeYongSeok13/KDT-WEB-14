// 클래스
// : 객체 생성 템플릿 => 객체를 만들기 위해 사용!

// 집이라는 객체를 만들어보자!
/**
 * 속성
 *   만들어진 연도
 *   집의 이름
 *   창문 갯수...
 *
 * 메소드
 *   건물 나이 출력 메소드...
 */

// 클래스 정의 (틀을 만듦)
class House {
  // 생성자 함수
  // : 클래스를 이용해서 객체를 생성할 때마다 속성을 초기화
  constructor(year, name, window) {
    this.year = year;
    this.name = name;
    this.window = window;
  }

  // 메소드 : 집의 나이를 출력
  getAge() {
    console.log(`${this.name}은 건축한지 ${2024 - this.year}년 되었어요!`);
  }
}

// 클래스를 이용해 객체를 생성!
const house1 = new House(1990, "롯데캐슬", 100);
console.log("house1 >", house1);

console.log(house1.name);
house1.getAge();

const house2 = new House(2007, "자이", 200);
console.log(house2);

// 클래스 상속
// 부모 클래스 : House
// 자식 클래스 : Apartment

class Apartment extends House {
  constructor(year, name, window, floor) {
    // 부모 객체에서 상속받아옴 = 상속한 부모의 클래스 생성자를 호출
    super(year, name, window);
    this.floor = floor;
  }

  getAptInfo() {
    return `${this.year}년에 지어진 ${this.name} 아파트의 총 층수는 ${this.floor}`;
  }
}

const apt1 = new Apartment(2022, "래미안", 100, 30);
console.log(apt1.name);
console.log(apt1.getAptInfo());
apt1.getAge();

// 실습. Shape 클래스 만들기
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    let extent = this.width * this.height;
    return extent;
  }
}

let rec1 = new Shape(3, 4);
console.log(rec1.getArea()); // 12

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getArea() {
    let rectangleExtent = this.width * this.height;
    return rectangleExtent;
  }

  getDiagonalLength() {
    let diagonalLength = Math.sqrt(this.width ** 2 + this.height ** 2);
    return diagonalLength;
  }
}

class Triangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    let triangleExtent = (this.width * this.height) / 2;
    return triangleExtent;
  }
}

class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }

  getArea() {
    let circleExtent = this.radius * this.radius * Math.PI;
    return circleExtent;
  }
}
const rectangle = new Rectangle(3, 4);
const triangle = new Triangle(3, 4);
const circle = new Circle(4, 5, 2);
console.log(rectangle.getArea()); // 12
console.log(rectangle.getDiagonalLength()); // 5
console.log(triangle.getArea()); // 6
console.log(circle.getArea()); // 12.5663.....

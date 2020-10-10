// 1. 함수 선언식

 function add(x, y) {
   return x + y;
 }
 
 console.log(add(2, 3));      // 5

 // 2. 함수 표현식

var addStr = function(x, y) {
  return x + y;
}

console.log(addStr("ON", " SOPT"));  // ON SOPT


// 2-1 화살표 함수 표현식

var addValue = (x, y) => {
  return x + y;
}

console.log(addValue(2, 3));   // 5


// 3. 화살표 함수

var add = (x, y) => x + y;      // 한줄이면 괄호 return 생략 가능
var add1 = (x, y) => (x + y);   // return 생략 가능

console.log(add(2, 3));   // 5
console.log(add(2, 3));   // 5


// 매게변수가 하나라면 소괄호 생략 가능

var square = x => x * x;

console.log(square(2));   // 4

// 객체 리턴

var person = function(name, age) {
  return {
    name: "최정균",
    age: 25
  };
}

console.log(person);

// 로직이 한줄이라면 () 소괄호로 감싸줘야 함

var person2 = (name, age) => ({name: "최정균", age: 25});

console.log(person2)
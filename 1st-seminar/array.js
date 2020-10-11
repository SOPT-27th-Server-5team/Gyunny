// 1. 배열 선언하기

var arr1 = [];

console.log(arr1);          // []
console.log(typeof arr1);   // object

var arr2 = new Array(1, 2, 3, 4, 5);

console.log(arr2);         // [1, 2, 3, 4, 5]
console.log(typeof arr2);  // object

var arr3 = ['최정균', 1, 2, 3, null, {name: 'Gyunny', age: 25}];
console.log(arr3);        // [ '최정균', 1, 2, 3, null, { name: 'Gyunny', age: 25 } ]
console.log(typeof arr3); // object


// 2. 배열 프로토타입
var arr = [1, 2, 3, 4];

// 2-1 배열 길이
console.log(`배열 길이: ${arr.length}`);  // 4

// 2-2 push, pop
arr.push('new element');
console.log(`Array push: ${arr}`);   // 1,2,3,4,new element (stack처럼 들어온 순서대로 push)

arr.pop();
console.log(`Array pop ${arr}`);   // 1,2,3,4 (stack처럼 마지막에 들어온 LIFO)

// 2-3 shift, unshift
arr.unshift('first item');         // unshift => 맨 앞에 원소를 추가
console.log(`Array unshift: ${arr}`);

arr.shift();
console.log(`Array shift: ${arr}`);  // shift => 배열의 맨 앞 원소를 제거

// 2-4 includes
console.log(`arr.includes(4): ${arr.includes(4)}`);      // true (배열에 parameter가 존재하면 true, 아니면 false)
console.log(`arr.includes(100): ${arr.includes(100)}`);  // false 

// 2-5 indexof
console.log(`arr.indexOf(4): ${arr.indexOf(4)}`);      // 3   (배열에서 parameter가 존재하면 해당 값의 인덱스를 반환)
console.log(`arr.indexOf(100): ${arr.indexOf(100)}`);  // -1  (값이 배열에 존재하지 않기 때문에 -1 반환)


// 2-6 concat
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

var concatArr = arr1.concat(arr2);                 // .concat() 속성을 이용하여 기존 배열에 원소 또는 배열을 추가하여 새 배열을 만든다. 
console.log(`arr1.concat(arr2): ${concatArr}`);    // 1,2,3,4,5,6

// 2-7 join
var location = ['서울', '대전', '대구', '부산'];
console.log(location.join('-> '));               // 서울-> 대전-> 대구-> 부산 (join() -> 배열의 원소들을 연결하여 하나의 값으로 만든다.)

// 2-8 reverse
console.log(location.reverse().join('-> '));     // 부산-> 대구-> 대전-> 서울 (reverse() -> 배열의 순서를 역순으로 바꿈)

// 2-9 sort
var countries = ['Österreich', 'Andorra', 'Vietnam'];
console.log(countries.sort((a, b) => a > b ? 1 : -1));      // 정렬이 안되었군! Ö 이것은 ? ?,,
console.log(countries.sort((a, b) => a.localeCompare(b)));  // 유니코드 기준으로 문자 정렬 
console.log(`오른차순 정렬: ${concatArr.sort((a, b) => a - b)}`);  // 오름차순 정렬
console.log(`내림차순 정렬: ${concatArr.sort((a, b) => b - a)}`);  // 내림차순 정렬

var number = [100, 400, 423, 234, -1, -523, 312, -333];
var minusNumber = number.filter(item => item < 0);
console.log(minusNumber);  // [ -1, -523, -333 ], filter() => 배열 요소 전체를 대상으로 조건에 맞는 새로운 배열을 만들어 반환


/**
 * [].map() 이란?
 * map은 forEach와 마찬가지로 Array의 각 요소를 순회하며 callback 함수를 실행한다. (callback에서 return 되는 값을 배열로 만들어낸다.)
 */
var countries = ['Österreich', 'Andorra', 'Vietnam', 'Korea', 'China'];
console.log(countries.map(item => item.length));  // [ 10, 7, 7, 5, 5 ]  // 각 원소의 길이를 반환

var testMapArr = [1, 2, 3, 4];
console.log(testMapArr.map(item => item * item)); // [ 1, 4, 9, 16 ]  // 각 원소의 제곱 수 반환

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = number.reduce((previousValue, currentValue) => {
  console.log(`previousValue: ${previousValue}, currentValue; ${currentValue}`);
  return previousValue + currentValue;
})

// 결과 

// previousValue: 1, currentValue; 2
// previousValue: 3, currentValue; 3
// previousValue: 6, currentValue; 4
// previousValue: 10, currentValue; 5
// previousValue: 15, currentValue; 6
// previousValue: 21, currentValue; 7
// previousValue: 28, currentValue; 8
// previousValue: 36, currentValue; 9
// previousValue: 45, currentValue; 10

console.log(`sum: ${sum}`);  // 55


/**
 * 배열 순회
 */

var serverPart = ['이진호', '윤가영', '김수현', '최예진', '최다인', '최정균'];
var serverPartIdx = `Server Part Team5 index는 ? `
var serverPartMemberNameStr = `서버파트 Team5 여러분 이름 한번씩만 불러주세요 ~ `;


for (let item in serverPart) {   // for - in => 배열의 인덱스를 반환
  serverPartIdx += item + " ";
}

console.log(serverPartIdx);  // Server Part Team5 index는 ? 0 1 2 3 4 5 

for (let item of serverPart) {  // for - of => 배열의 값을 반환
  serverPartMemberNameStr += item + " "; 
}

console.log(serverPartMemberNameStr);  // 서버파트 Team5 여러분 이름 한번씩만 불러주세요 ~ 이진호 윤가영 김수현 최예진 최다인 최정균 


serverPart.forEach(item => console.log(item));
// 이진호
// 윤가영
// 김수현
// 최예진
// 최다인
// 최정균
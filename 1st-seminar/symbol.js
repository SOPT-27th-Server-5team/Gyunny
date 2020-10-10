// Symbol 유일한 식별자를 만들 때 사용 (ES6이후  나옴)
const symbol1 = Symbol('id'); 
const symbol2 = Symbol('id');  

console.log(symbol1.description);  // id
console.log(symbol1 === symbol2);  // false

console.log('-------------------');

const includes = Symbol('Custom Symbol Function');

Array.prototype[includes] = function() {
  return 'its symbol';
}


var arr = [1, 2, 3];
console.log(arr.includes(1));     // true (arr 배열안에 1이 들어있으면 true, 아니면 false)
console.log(arr['includes'](1));  // true
console.log(arr[includes]());     // its symbol 
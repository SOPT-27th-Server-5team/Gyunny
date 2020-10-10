// var 재선언, 재할당 가능 + 초기화 안해도 됨

var variableVar = "123";
var variableVar = "321";

console.log(`variableVar: ${variableVar}`);

// let 재할당 가능, 재선언 안됨

let variableLet = "123";
variableLet = "321";

console.log(`variableLet: ${variableLet}`);


// const 재선언, 재할당 불가능

const variableConst = "123";
//const variableConst = "321";   // 에러
//variableConst = "321";         // 에러

console.log(`variableConst: ${variableConst}`);


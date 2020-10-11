
let nothing = null;
console.log(`nothing : ${nothing}, type: ${typeof nothing}`); //object (EcmaScript의 설계상 오류로 원래는 null 이어야 맞음.)
let x;
console.log(`x: ${x}, type ${typeof x}`); //undefined


// null, undefined 차이는 ? https://webclub.tistory.com/1
console.log('null vs undefined');   
console.log('null === undefined: ', null === undefined);  // false (=== 은 값, 타입 비교)
console.log('null == undefined: ', null == undefined);    // true  (== 값만 비교)
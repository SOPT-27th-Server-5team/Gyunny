// fuction scope

// var => function scope 
// function scope란 함수 내에서 스코프 범위 

if (true) {
  var x = 'var';
}

console.log(x);  // var


// block scope

// let, const => block scope
// block scope란 블록 내에서 스코프 범위

if (true) {
  let l = "let";
}

//console.log(l); // 에러

if (true) {
  const c = "const";
} 

//console.log(c); // 에러

function colorFunction() {
  if (true) {
    var color = "blue";
    console.log(color);  // blue
  } 
  console.log(color);    // blue
}

colorFunction();
//console.log(color);  // 에러
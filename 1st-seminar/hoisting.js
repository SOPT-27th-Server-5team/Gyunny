// 호이스팅이란?  var, function 선언문 등을 해당 스코프의 선두로 옮긴 것처럼 동작하는 특성 

hoistFunction();


function hoistFunction() {
  console.log(x);  // undefined
  var x = 'var';
  console.log(x);  // var
}

// 위의 코드를 자바스크립트 엔진이 해석하면 아래와 같다. 

function hoistFunction() {
  var x;
  console.log(x);  // undefined
  x = 'var';
  console.log(x);  // var
}

hoistFunction();
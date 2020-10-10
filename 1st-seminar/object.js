const person = new Object();  // 객체 생성

// 속성 추가

person.name = "최정균";
person.age = 25;
person['Gender'] = '남';

person.sayHello = () => {
  console.log(`저의 이름은 ${person.name}이고, 나이는 ${person.age}입니다`);
}

console.log(person);
person.sayHello();
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

console.log("================");

const emptyObject = {};
console.log(typeof emptyObject);  // object 

const animal = {
  anmalType: 'puppy',
  animalName: '귀요미',
  animalFriends: ['쿠키', '세션', 'JWT'],
  // 화살표 함수에서는 `${this.animalName}` => undefined 
  // 이유: https://github.com/wjdrbs96/Manyconcepts-of-javascript/blob/master/JS_Study/this.md 
  bark() {
    console.log(`${animal.animalName}: 멍멍`);
  },
  
  // 화살표 함수를 쓰면 forEach에서 this는 Error
  // 이유: 위의 이유와 같음
  thisFriends: () => {
    animal.animalFriends.forEach(element => {
      console.log(`${animal.animalName}의 친구: ${element}`);
    });
  }
}

console.log(animal);
animal.bark();
animal.thisFriends();
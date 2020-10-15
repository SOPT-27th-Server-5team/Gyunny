/**
 * Level2 
 * 자신의 팀원들을 소개할 수 있는 json Array 만들기
 * (팀원들의 이름, 사는곳, 나이, 취미, 정보를 출력하는 함수를 포함!)
 */

const team5 = [
  {
    name: '최정균',
    age: 25,
    hobby: 'weight',
    address: '경기도 군포시 산본동'
  },
  {
    name: '이진호',
    age: 27,
    hobby: '당구',
    address: '경기도 안산'
  },
  {
    name: '김수현',
    age: 24,
    hobby: '좋은 음악 찾기',
    address: '서울'
  },
  {
    name: '최다인',
    age: 24,
    hobby: '갬성카페 가기',
    address: '서울',
  },
  {
    name: '윤가영',
    age: 21,
    hobby: 'Coding',
    address: '서울'
  },
  {
    name: '최예진',
    age: 23,
    hobby: '드라마 보기',
    address: '서울'
  }
]

team5.forEach(element => {
  console.log(`이름: ${element.name}`);
  console.log(`나이: ${element.age}`);
  console.log(`취미: ${element.hobby}`);
  console.log(`주소: ${element.address}`);
  console.log('========================')
})
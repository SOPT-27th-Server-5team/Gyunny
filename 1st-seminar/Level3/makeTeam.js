const serverTeam = require('./members');

// 총 인원 36명
// 팀당 5명 or 6명 
// OB 15명
// YB 21명
// 7개 팀 (OB : 2명 or 3명, YB : 3명)

/**
 * Level3
 * 가짜 서버파트 members.js 데이터를 이용해서 랜덤으로 조를 짜는 알고리즘 만들어보기 
 * 조건1. OB, YB 비율 오차범위를 최소한으로 유지하며 코드 작성
 */

const OBServer = serverTeam.filter(item => item.status == 'OB');

// OB Member Shuffle
const shuffleOBMember = OBServer.map(a => ([Math.random(), a]))
  .sort((a, b) => a[0] - b[0])
  .map(a => a[1]);



const YBServer = serverTeam.filter(item => item.status == 'YB');

// YB Member Shuffle
const shuffleYBMember = YBServer.map(a => ([Math.random(), a]))
  .sort((a, b) => a[0] - b[0])
  .map(a => a[1]);


const team = {
  team1 : [],
  team2 : [],
  team3 : [],
  team4 : [],
  team5 : [],
  team6 : [],
  team7 : []
}


shuffleOBMember.forEach((OBmember, index) => {
  team[`team${(index % 7) + 1}`].push(OBmember);
})

shuffleYBMember.forEach((YBmember, index) => {
  team[`team${(index % 7) + 1}`].push(YBmember);
})

console.log(team);
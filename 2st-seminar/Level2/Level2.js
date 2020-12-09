const member = require('./member');

const getFemale = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const memberFemale = members.filter(element => element.gender === '여');
      console.log('===================Female====================');
      console.log(memberFemale);
      console.log('===================Female====================');
      resolve(memberFemale);
    }, 500)
  })
}

const getYB = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const memberYB = members.filter(element => element.status === 'YB');
      console.log('==================YB===================');
      console.log(memberYB);
      console.log('==================YB===================');
      resolve(memberYB);
    }, 500)
  })
}

const getiOS = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const iOSPart = members.filter(element => element.part === 'iOS');
      resolve(iOSPart);
    })
  })
}


getFemale(member)
  .then(element => getYB(element))
  .then(element => getiOS(element))
  .then(element => {
    console.log('=======================iOS====================');
    console.log(element)
    console.log('========================iOS===================');
  })
  .catch(err => console.error(err)); 

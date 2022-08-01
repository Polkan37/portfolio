const person = null;
let cityName = null;

// if(person && person.cityInfo && person.cityInfo.cityName) {
//     console.log('yes');
//     cityName = person.cityInfo.cityName;
// } else {
//     console.log('no')
// }

cityName = person?.cityInfo?.cityName || 'default';
console.log('cityName', cityName)


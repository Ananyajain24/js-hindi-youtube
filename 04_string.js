const name = "hitesh"
const repoCount = 50
//console.log(name + repoCount + "Value")
console.log(`my name is ${name} and my repoCount is ${repoCount}`);
const gameName = new String('Hitesh-hc')
console.log(gameName[0]); //h
console.log(gameName.__proto__); //{}
console.log(gameName.length); //9
console.log(gameName.toUpperCase()); //original string is not changed 
console.log(gameName.charAt(4));//s
console.log(gameName.indexOf('s'));//4
const newString = gameName.substring(0,4)
console.log(newString); //hite
const anotherString = gameName.slice(-8,4) //ite
const newStringOne = "  hitesh   "
console.log(newStringOne.trim()); //remove the extra spaces 
const url = "https://hitesh.com/hitesh%20choudhary" //%20 is given automatically when space is given and I want to remove it 
console.log(url.replace('%20','-'))
console.log(url.includes('hitesh')) //true 
console.log(gameName.split('-')) //gives an array ['hitesh','hc']

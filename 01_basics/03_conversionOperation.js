let score = "33" 
console.log(typeof score);//string
let valueInNumber = Number(score) 
console.log(typeof valueInNumber);//Number
console.log(valueInNumber); //NaN 
let score1 = null;
console.log(typeof score1)
let changed = Number(score1)
console.log(typeof changed )
let score2 = undefined;
console.log(typeof score2)
let changedValue = Number(score2)
console.log(typeof changedValue )
// "33" => 33
// "33abc" = NaN
// true => 1; false => 0;
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //True
//1 => true; 0=> false 
//" "=> false 
//"Hitesh"=> true 
let someNumber = 33
let stringNumber = string(someNumber)
console.log(stringNumber);
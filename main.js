max:
function max(array) {
  var output = 0;
  for(var i = 0; i < array.length; i++) {
  if(array[i] > output) {
    output = array[i];
    }
  }
  return output;
};
console.log(max([3,12,53,8,57]));


//problem 1
var personalInfo = [
  {name: "Terence", age: 31},
  {name: "Heather", age: 50},
  {name: "Sydney", age: 21},
  {name: "Dan", age: 45},
];

function oldestPerson (array) {
  var ageMax = [];
  var indexValue;
  for(var i = 0; i < array.length; i++) {
    if(array[i].age > ageMax) {
      ageMax = array[i].age;
      indexValue = i;
    }
  }
  return personalInfo[indexValue].name;
}
console.log(oldestPerson(personalInfo));


//problem 2
function longestWord (str) {
  var indStr = str.split(" ");
  var output = 0;
  var indexValue;
  for(var i = 0; i < indStr.length; i++) {
    if(indStr[i].length > output ) {
      output = indStr[i].length;
      indexValue = i;
    }
  }
  return indStr[indexValue];
};
console.log(longestWord("I love to play ultimate frisbee"));


//problem 3
function longestWord (str) {
  str.replace(/[^a-zA-Z ]+/g, '');
  var indStr = str.split(" ");
  var output = 0;
  var indexValue;
  for(var i = 0; i < indStr.length; i++) {
    if(indStr[i].length > output ) {
      output = indStr[i].length;
      indexValue = i;
    }
  }
  return indStr[indexValue];
};
console.log(longestWord("I, love to play's ultimate frisbee!"));


//problem 4
function factorial( num )
{
  var retVal = 1;
  for( var i = num; i > 0; i-- )
  {
    retVal = retVal * i;
  }
  return retVal;
}
console.log(factorial(5));


function factorial2(num) {
  var currentValue = 1;
  for( var i = num; i > 0; i--) {
    currentValue *= i;
  }
  return currentValue;
}
console.log(factorial2(5));

//Recursion
function factorial3(num) {
  if( num == 1 )
  {
    return 1;
  }
  else
  {
    return num * factorial3( num - 1 );
  }
}
console.log(factorial3(5));


//problem 5
function palindrome(str) {
  var indStr = str.split(" ").reverse().join("");
  if(str === indStr){
    return false;
  } else {
    return true;
  }
};
console.log(palindrome("I like sandwiches"));
console.log(palindrome("racecar"));

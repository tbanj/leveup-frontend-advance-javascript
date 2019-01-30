// Question 2
// Create an array and use a loop to print all its values
let arrayTest = ['Alabi', 'Temitope', 101015, {shoe:10 ,bags: 20, maritalStatus: 'single', status: 'average'}], 
obValue =[] , obKey =[];
n= 0;

do {
  
//   use to check if value is object
  if(typeof arrayTest[n] === 'object' &&  arrayTest[n] !== null) {
      for (const key in arrayTest[n]) {
        obKey.push(key);
        obValue.push(arrayTest[n][key]);
      }
        // print all key and value into just two arrays    
      console.log(obKey);
      console.log(obValue);
  } else {
    console.log(arrayTest[n]);
  }

  

  n++;
} 
while (n < arrayTest.length);
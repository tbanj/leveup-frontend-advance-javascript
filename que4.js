// Question 4
// Using a loop, print all odd numbers between 1 
// and 10. Do thesame for even numbers in a seperate program.
let odd= 1;
console.log('odd numbers from 1 to 10');
while(odd < 10) {
    // is odd
    if(odd % 2 !== 0 ) {
        console.log(odd);
        
    }
    odd++;
}

let even= 1;
console.log('even numbers from 1 to 10');
do{
    // is even
    if(even % 2 == 0 ) {
        console.log(even);
        
    }
    even++;
} while(even< 10)
// console.log(5 % 5== 0);


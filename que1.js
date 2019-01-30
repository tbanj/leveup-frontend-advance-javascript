// Using loops or any method, write a program to print your first name using the asterick (*) character.
name= "dele";
const nameSplit = name.split('');
i=0;
nameSymbol= '*'
let namex ='';
while(i < nameSplit.length) {
    namex += nameSymbol;
    // console.log(namex);
    i++;
}
console.log(namex);
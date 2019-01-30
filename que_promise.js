const mealChecker = (input) => {
    let meal = ['Amala', 'Eba', 'Ewedu', 'Jollof Rice'];
// to ask user for input
if(meal.indexOf(input) !== -1) { return Promise.resolve(`${input}: yes we have it `)}
else{ return Promise.reject(`${input}: we don't have it`)}

}
mealChecker('Amala')
.then(result => console.log(result))
.catch(error=>console.error(error))
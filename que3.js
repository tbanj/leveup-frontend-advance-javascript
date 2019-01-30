// Question 3
// {name: "Luke Skywalker", occupation: "Jedi", powers: "The force"}
let nameCheck = {name: "Luke Skywalker", occupation: "Jedi", powers: "The force"};
for (const key in nameCheck) {
    if (nameCheck.hasOwnProperty(key)) {
        const element = nameCheck[key];
        console.log(element);
        
    }
}
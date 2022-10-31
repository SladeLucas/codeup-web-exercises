const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// setting variable ⇣⇣⇣⇣⇣⇣
let langFilter = users.filter((ele) => ele.languages.length >= 3);
// variable  is a filter function to single out certain objects
console.log(langFilter);
// set variable, then added 'ele.email' to create new []
let emailArr = users.map((ele) => ele.email.toString());

console.log(emailArr);
// declare var using reduce to sum the total of an ele inside object inside array
let yearEXP = users.reduce((total, ele) => {
    return total + ele.yearsOfExperience;
}, 0);

console.log(yearEXP);

let yearEXPAverage = yearEXP / 5;

console.log(yearEXPAverage);

let longEmail = users.reduce((longEmail, user) => user.email.length > longEmail.length?user.email:longEmail, "");
console.log(longEmail);
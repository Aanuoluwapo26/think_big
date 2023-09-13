





//&& code runs if all the conditions are true
// II  code runs if one of the conditions is true

function bmiTotal(weight, height) {
    let both = weight / (height * height)
    return both;
}
console.log(`BMI result: ${bmiTotal(64, 1.6)}`);
if (both < 18.5) {
    console.log('Patient is underweight');
} else if (both >= 18.5 && both < 25) {
    console.log('Patient is normal');
} else if (both >= 25 && both <= 29.9) {
    console.log('Patient is overweight');
} else {
    console.log('Patient is obese');
}
console.log(bmiTotal)





const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}


// for( const [user, skillnumber] of Object.entries(users) { 
//     if(skillnumber > 50)) {
//         console.log(`$ {user} => ${skillnumber}`)
//     } 
//     } 

let maxSkills = 0;
let userWithMaxSkills = '';

// Iterate over the users object
for (const user in users) {
    const numSkills = users[user].skills.length;

    // Check if the current user has more skills than the previous max
    if (numSkills > maxSkills) {
        maxSkills = numSkills;
        userWithMaxSkills = user;
    }
}
console.log(`User with the most skills: ${users[userWithMaxSkills].name}`);

let object = Object.entries(users);
let personWithMostSkills = '';
let skillCounts = 0;
for (let i = 0; i < object.length; i++) {
    const element = object[i][1].skills.length;
    if (skillCounts <= element) {
        skillCounts = element;
        personWithMostSkills = object[i][0];
    }
}
console.log(personWithMostSkills);
// console.log(object);

// function myFunction(arr, n) {
//     return arr.indexOf(n)
// }
// myFunction([1, 2, 3, 4, 5], 3)



// function myFunction2(a, n)


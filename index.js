





//&& code runs if all the conditions are true
// II  code runs if one of the conditions is true

// function bmiTotal(weight, height) {
//     let both = weight / (height * height)
//     return both;
// }
// console.log(`BMI result: ${bmiTotal(64, 1.6)}`);
// if (both < 18.5) {
//     console.log('Patient is underweight');
// } else if (both >= 18.5 && both < 25) {
//     console.log('Patient is normal');
// } else if (both >= 25 && both <= 29.9) {
//     console.log('Patient is overweight');
// } else {
//     console.log('Patient is obese');
// }
// console.log(bmiTotal)





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
//     if (n > arr.length)
//         return arr
// }else {
//     return arr.slice(0, n)
// }

function myFunc(arr, n) {
    if (n > arr.length) {
        return arr
    } else {
        return arr.slice(0, n)
    }
}

console.log(myFunc([1, 2, 3, 4, 5], 3))
console.log(myFunc([1, 2, 3, 4, 5], 8))

function myFunction(array, n) {
    return [...new Set(array.concat(n))].sort();
    return
}
console.log(myFunction([1, 2, 3, 4, 5], [1, 2, 3, 6, 9, 8]))
console.log(myFunction([1, 2, 3, 4, 5], [1, 10, 3, 4, 5]))


// function myFunction2(a, n)
// Write a function that takes an array of numbers as argument. Return the number of negative values in the array.
function myFunction2(a) {
    let count = 0;
    for (let index = 0; index < a.length; index++) {

        if (count[index] <= 0) {
            count++

        }

    }
    return count
}
console.log(myFunction2([1, -2, 2, -4]))

console.log(myFunction2([0, 9, 1]))

console.log(myFunction2([4, -3, 2, 1, 0]))


function myFunction3(b) {
    let nel2 = b.filter((neg) => neg <= 0).length;

    return nel2
}

console.log(myFunction3([1, -2, 2, -4]))

console.log(myFunction3([0, 9, 1]))

console.log(myFunction3([4, -3, 2, 1, 0]))


// let nel = a.filter((neg) => neg <= 0);
/*Write a function that takes an array of strings as argument.Sort the array elements alphabetically.Return the result.
    function
myFunction
    (
        arr
    )
{

    return
}
Test Cases:
myFunction(['b', 'c', 'd', 'a'])
Expected
['a', 'b', 'c', 'd']
myFunction(['z', 'c', 'd', 'a', 'y', 'a', 'w'])
Expected
['a', 'a', 'c', 'd', 'w', 'y', 'z']

Write a function that takes an array of numbers as argument.It should return the sum of the numbers.
    function
myFunction
    (
        a
    )
{
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += i
        return sum
    }
Test Cases:
    myFunction([10, 100, 40])
    Expected
    150
    myFunction([10, 100, 1000, 1])
    Expected
    1111
    myFunction([-50, 0, 50, 200])
    Expected
    200

    sh



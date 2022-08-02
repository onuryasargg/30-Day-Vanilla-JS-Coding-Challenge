// strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);

let name = 'Onur';
let name2 = name;
console.log(name, name2);
name='10';
console.log(name,name2);

// array
const players = ['Ronn', 'Sarah', 'Ryan', 'Chris'];

const team = players;

console.log(players,team);
// team[3] = 'Lux'; //if I do this I will impact to original array, but I dont want that.
// This is a array reference not an array copy.

// These are the ways.
const team2 = players.slice();

const team3 = [].concat(players);

// with ES6 
const team4 = [...players];
team4[3] = 'Rooney';
console.log(team4);

const team5 = Array.from(players);

// Objects

const person = {
    name: 'Onur Yasar',
    age:24
}

const cap2 = Object.assign({}, person, {number: 7, age:21});
console.log(cap2);


const onur = {
    name:'Onur',
    age:77,
    social: {
        twitter: '@none',
        facebook: 'erenonuryasar'
    }
};

console.clear();
console.log(onur);

const dev = Object.assign({}, onur);
const dev2 = JSON.parse(JSON.stringify(onur));

// alert('Hell world');

// let message = 'Hello World';
// alert(message);
// message = 'Hallo Welt'
// alert (message);

const LINK_COLOR = '#ff0000';
console.log ('Link bitte inder Farbe', LINK_COLOR);

let highscore = 520233;
console.log(highscore /10);

let firstname = 'John';
let lastname ='Smith';
console.log('Name: ', firstname, lastname);

let fulname = 'Jeffrey "The Dude" Lebowski';
console.log(fulname);

let template = `Dein Highscore sind ${highscore} Punkte`;
console.log(template);

let is_over18 = true;
console.log(is_over18);

let age = 17;
console.log('über 18?', age > 18);

let participants = ['John', 'Jane', 'Max'];
console.log(participants);
console.log('Einträge im Array: ', participants.length);
console.log(participants[1]);

let game_highscores = [2099, 3010, 3333, 5000 ];
console.log(game_highscores);

let user = {
    firstname:'John',
    lastname: 'Smith',
    age: 25
};

console.log(user);
console.log(user.firstname);
user.highscore = 200; 
user['highscore ever'] = 400;
console.log(user);

let a = 2;
let b = 4; 
console.log(a+b);
console.log(b/(a-1));
a++; 
console.log(a);

// // let my_age = prompt('Wie alt bist du?');
// // console.log(`Du bischt ${my_age} Jahre alt.`);
// // console.log(`über 18? ${my_age} > 18`);

// // if(my_age > 18) {
// // console.log('Glückwunsch über 18');
// // } else {
// //     console.log('leider unter 18');
// }

// Schleifen: for Schleife

for (i=0; i<10; i++){
    console.log(`Schleife ${i}`);
}

for (let j = 0; j < participants.length; j++) {
    const participant = participants[j];
    console.log(`Teilnehmer*in ${j} ${participants}`);
    }

participants.forEach(participant => { console.log(`Teilnehmer*in ${participant}`);
});

//Funktionen

function show_age (birth_year) {console.log(`Du bist ca. ${2020 -birth_year} Jahre alt.`);
}

show_age(1964);
show_age(1977);

function calc_age(birth_year) {return 2020 - birth_year;
}

console.log (`Max ist ${calc_age(1977)} Jahre alt (ca.)`);
console.log (`John ist ${calc_age(1988)} Jahre alte (ca.)`);

let birth_year = [ 1964, 1977, 1980, 2001, 2004];
console.log(birth_year);

birth_year.forEach(year => {
    console.log(`Geboren ${year}, heute ca. ${calc_age(year)} Jahre alt.`);
});

let users = [
    {firstname:'John', lastname: 'Smith', birth_year:1960},
    {firstname:'Jane', lastname: 'Doe', birth_year:1970},
    {firstname:'Max', lastname: 'Mustermann', birth_year:1990},
];

console.log(users);
console.log (`${user.firstname} ist oder wird heuer ${calc_age(user.birth_year)} Jahre alt.`);

let first_paragraph = document.querySelector("#pfirst");
console.log(first_paragraph); // fehler first_paragraph is null 

first_paragraph.innerHTML= "Test";
first_paragraph.style.color ="red";

let.indentParas = document.querySelector(".indent");
console.log (indentedParas);
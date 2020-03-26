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

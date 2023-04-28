// 1.
for (i = 1; i <= 7; i++){
    console.log(i);
}
console.log(`=========================`);

// 2.
for (i = 5; i <= 25; i += 4){
    console.log(i);
}
console.log(`=========================`);

// 3a.
const wizards = ["Harry Potter", "Hermione Granger", "Ron Weasley"];

// 3b.
for (i = 0; i < 3; i++){
    console.log(wizards[i]);
}
console.log(`=========================`);

// 4a.
let harryPotterMovies = 0;

// 4b.
while (harryPotterMovies < 8){
    harryPotterMovies++;
}
// 4c.
console.log(harryPotterMovies);
console.log(`=========================`);

// BONUS
// 5a.
const hogwartsHouses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

// 5b.
for (item of hogwartsHouses){
    for (char of item){
        console.log(char);
    }
}
console.log(`=========================`);

// 6a.
const quote = ["Yer", "A", "Wizard", "Harry"];
// 6b. 
var str = "";
for (word of quote){
    str += word + " ";
}
console.log(str);
console.log(`=========================`);
// 7. 
for (i = 1; i <= 25; i++){
    if (i % 5 == 0 && i % 3 == 0){
        console.log("Expecto Patronum");
    } else if (i % 3 == 0){
        console.log("Expecto");
    } else if (i % 5 == 0){
        console.log("Patronum");
    } else{
        console.log(i);
    }
}

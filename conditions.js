
//If Else

const x = 5;
if (x === 5) {
    console.log('This is true');
} else {
    console.log("Else statement")
}

console.log('Im here');

//Else if
// 18-25 -> 18%
// 26-40 -> 20%
// 41-99 -> 30%

const age = 20;

if (age >= 18 && age <= 25) {
    console.log('18%');
} else if (age >= 26 && age <= 40){
    console.log('20%');
} else if (age >= 41 && age <= 99){
    console.log('30%');
}else {
    console.log('error')
}

// Ternary operator

const num = 5;

if (num === 5) {
    console.log('true');    
} else {
    console.log('false');    
}

(num === 5) ? console.log('true') : console.log('false')

// Switch

const title = "Junior";

switch (title) {
    case 'Junior':
        console.log("You are junior");        
        break;
    case 'Middle':
        console.log("You are middle");
        break
    case 'Senior':
        console.log("You are senior");
        break
    default:
        console.log("Sorry, I do not know who you are");
        break;
}
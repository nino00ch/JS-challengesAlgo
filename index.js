//Challenge 1

// way1 : using split and apply regex 
let message = "There is no war in Ba Sing Se"
const word = message.trim().split(new RegExp("\\s+"))
 console.log(word.length);

 //way2 : using a Loop 
 let counter = 0 
 for (let i=0 ; i < message.length; i++) {
    if (message.charAt(i)== ' '){
        counter++
    }
 }

//  Challenge 2

 let countries = ['China','Japan','South Korea','Vietnam','Malaysia']
 let capitals = ['Beijing','Tokyo','Seoul','Hanoï','Kuala Lumpur']
   for ( let i = 0; i < countries.length ; i++) {
    let country = countries[i];
    let capital = capitals[i];
    console.log(`Your country: ${country} has the capital named: ${capital}.`);
   }

//    Challennge 3 

   let randomizer = Math.floor(Math.random() * 4);
   let fate ;
   switch (randomizer) {
    case 0:
        fate = "A certain victory";
        break;
    case 1:
        fate = "Not so certain victory";
        break;
    case 2:
        fate = "An uneasy victory";
        break;
    default:
        fate = "Your fate is unclear, ô chosen undead";
        break;
}
console.log(`Your fate is: ${fate}`);

 //challenge 4
 
function checkSeason(month) {
    // Convert the month to lowercase for case-insensitive comparison
    month = month.toLowerCase();

    // Determine the season based on the month
    if (['december', 'january', 'february'].includes(month)) {
        return 'Winter';
    } else if (['march', 'april', 'may'].includes(month)) {
        return 'Spring';
    } else if (['june', 'july', 'august'].includes(month)) {
        return 'Summer';
    } else if (['september', 'october', 'november'].includes(month)) {
        return 'Autumn';
    } else {
        return 'Invalid month'; // Handle invalid input
    }
}
console.log(checkSeason(april));

 
/*The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.
*/

// Keys to solving this problem for me
// Right off the bat if a person in line has a "25 dollar bill" they will always be able to get a ticket
// so you only need to solve logical statements for if someone has a fifty or a hundred 
// if they have a fifty there must be 1 25 dollar bill in the clerks register or that person cannot but a ticket
// if they have a 100 dollar bill there must 3 25's or 1 50 and 1 25  or that person cannot but a ticket
// essentialy you have to go through all the people in line and if you ever run out of change the asnwer is no 
function tickets(peopleInLine){
  let twentyFives = 0;
  let fifties = 0;
 
  for(let i = 0; i < peopleInLine.length; i++) {
      if (peopleInLine[i] === 25) {
        twentyFives += 1;
      }
      if (peopleInLine[i] === 50 ) {
         twentyFives -= 1;
         fifties += 1;
      }
      if(peopleInLine[i] === 100 ) {
        if (twentyFives >= 3 && fifties == 0) {
          twentyFives -= 3;
        }
        else {
          twentyFives -=1;
          fifties -= 1;
        }
      }
      if (twentyFives < 0 || fifties < 0) {
        return 'NO';
      }  
      
  }
    return "YES"
}

// TESTS
// tickets([25, 25, 50]); // => YES 
// tickets([25, 100]); // => NO. Vasya will not have enough money to give change to 100 dollars
//  tickets([25, 25, 50, 50, 100]); // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
//  tickets([25, 25, 50, 50, 50]);
//  tickets([25,50,25,100,25,25,50,100,25,25,50,100,25,25,25,100,100,50]);
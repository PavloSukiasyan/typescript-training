/**
 * 
 * 8 kyu
 * 
Transportation on vacation  

 * After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. 

Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).

 */

export function rentalCarCost(d: number): number {
  let cost = 40;

  if (d >= 7) {
    return (cost = cost * d - 50);
  }
  if (d >= 3) {
    return (cost = cost * d - 20);
  } else {
    return (cost = cost * d);
  }
}

console.log(rentalCarCost(4), 140);
console.log(rentalCarCost(5), 180);
console.log(rentalCarCost(6), 220);
console.log(rentalCarCost(7), 230);
console.log(rentalCarCost(2), 80);

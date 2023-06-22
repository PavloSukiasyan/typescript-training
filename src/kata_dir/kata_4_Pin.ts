// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePin(valueEntered: string): boolean {

  const pinRegex = /^[0-9]{4}$|^[0-9]{6}$/; // Regex to match 4 or 6 digit PIN

  return pinRegex.test(valueEntered)
}

console.log('test', +"a1234");
console.log('test1 4 pin', validatePin('1234'));
console.log('test2', validatePin('12345'));
console.log('test3', validatePin('123'));
console.log('test3', validatePin('123'));

console.log('test4 6 pin', validatePin('123456'));
console.log('test5 1 pin', validatePin('1'));
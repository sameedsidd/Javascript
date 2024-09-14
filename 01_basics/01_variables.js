const accountId = 112233
let accountEmail = "a@gmail.com"
var accountPassword = "12345"
accountCity = "Karachi"
let accountState;

// accountId = 11111 // not allowed 

accountEmail = "b@gmail.com"
accountPassword = "11111"
accountCity = "Lahore"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// As per JS, '-' can be only used by numbers so result will be 0
console.log('5' - 5); // 0
// Here it will treat as String
console.log('5' + 5); // 55
// As per JS, '*' can be only used by numbers so result will be 25
console.log('5' * 5); // 25
// As per JS, '/' can be only used by numbers so result will be 1
console.log('5' / 5); // 1

const giveType = typeof 5
console.log(`\nType is - ${giveType}`);

// JS treats true as 1 (when it converts true to Number)
console.log(true + 5); // 6

const loginDetails = []

const loginId = loginDetails[0]

// JS assume some values and try to interpret value as true/false
if (loginId !== undefined)
    console.log("Allow user to login");
else
    console.log("Auth Failed");


/*
    JS considers following values as False :
        1. false
        2. 0
        3. Empty String [''] --> This mean if anything is present in string (even space) its treated as true
        4. null
        5. undefined

    Apart from this, everything is treated as True.
*/

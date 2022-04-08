const favNumber = 27;   // global scope

function add(first, second){
    console.log(mood1);    // hoisting
    const result = first + second;  // local scope
    if(result > 9){
        const mood = 'happy';
        var mood1 = 'cranky';
        console.log(mood);   // block scope
    }
    // console.log(result);
    console.log(mood1);
    return result;
}
const sum = add(11, 35);
// console.log(mood1);
// console.log(favNumber);

/*
jodi kno variable ke var diye declare korle se ar block scope hoy naa. var keyword variable ke hoist kore fele. let / const er erkm kno somossa naai. era block scope support kore. ejnne var use kora uchit naa. proyojon hisebe let ar const use kora uchit.
*/
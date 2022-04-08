const first = '1';
const second = true;

// if(first === second){
//     console.log('condition is true');
// }
// else{
//     console.log('condition is false');
// }

if(first == second){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}

// more comparison
const a = {name: 'ali'};
const b = {name: 'ali'};
// const a = [];
// const b = [];
if(a === b){
    console.log('both are same');
}
else{
    console.log('they are not same');
}

/*
primitive type data gulake doube or triple equal diye compare kora jaay. but non-primitive gulake kora jaay naa. like: object, array.

primitive data gulaa triple equal (===) diye check/compare kora uchit. cause:
double equal type taake convert kore fele taar comparison er subidhar jonne. and compare kore change kore kore ekdom same type er niye ese compare korte gele talgol pakaye fele.
but triple equal khub e straight forward. e dui pasher type ar value check korbe. jodi same thake tahole true ar nahole false.
*/

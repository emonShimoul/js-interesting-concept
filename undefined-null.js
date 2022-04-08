/*
1. variable value not assigned
2. function but didn't return anything
3. just wrote return but didn't return anything
4. parameter that isn't pass
5. property that doesn't exist in an object
6. accessing array element out of range
7. accessing deleted array element
8. explicitly set value of undefined
*/

let first;
// console.log(first);

function second(x, y){
    const sum = x + y;
}

function add(a, b){
    const sum = a + b;
    if(b < 10){
        return;
    }
    const fun = a * b;
    return sum;
}

const result = second(2, 32);
const fourth = add(2, 7);
// console.log(fourth);

function double(a, b){
    const result = a * 2;
    // console.log(b);
    return result;
}
double(81);

const fifth = {name: 'emon', age: '25', location: 'bandorban'};
// console.log(fifth.phone);

const sixth = [54, 32, 41, 27];
// console.log(sixth[7]);
delete sixth[2];
console.log(sixth[2]);

const seventh = undefined;
// console.log(seventh);

const myObj = {name: 'samir', profession: null}

/*
undefined onekvabe paoa jaite pare. but null explicitly set na korle paoa jaay naa. null mane bujhay j kno value nai eitar vetore. eita faka. eta kokhono automatically asbe naa. ar undefined onek karone aste pare.
*/
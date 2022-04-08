function stopWatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}
let clock1 = stopWatch();
console.log(clock1());
console.log(clock1());

/*
tumi jodi kno function er vetore arekta function use koro ba function ke return koro tahole je function ke return korteso se jdi outside er kno variable ke access kore tahole tar nijosso ekta encapsulation/closure/private variable toiri kore.
*/
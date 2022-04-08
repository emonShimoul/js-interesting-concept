function welcomeMessage(name, greetHandler){
    // console.log(greetHandler);
    greetHandler(name);
}
// const names = ['Tom Hanks', 'Tom Brady', 'Tom Cruise'];
// const myObj = {name: 'Emon', age: 28};
function greetMorning(name){
    console.log('Good Morning!', name);
}
function greetAfternoon(name){
    console.log('Good Afternoon!', name);
}
function greetEvening(name){
    console.log('Good Evening!', name);
}
welcomeMessage('Tom Hanks', greetMorning);
welcomeMessage('Sakib-Al-Hasan', greetAfternoon);
welcomeMessage('Tony Stark', greetEvening);
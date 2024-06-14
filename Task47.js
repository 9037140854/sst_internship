const greet = function(name){
    return "Hello,"+ name +"!";
};
function Displeygreeting (greetingFunction){
    console.log(greetingFunction("john"));
}
console.log(greet("Alice"));
Displeygreeting(greet);
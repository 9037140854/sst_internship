function greet (name,callback){
    console.log("Hello,"+name+"!");
    callback();
}
function sayGoodbye(){
    console.log("Goodbbye!");
}
greet ("Alice",sayGoodbye);
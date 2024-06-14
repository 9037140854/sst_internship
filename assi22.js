function sum( x,y,callback){

    a=x+y;
    console.log();
    callback();
}
function addnumbers()
{
    console.log("the sum of two numbers:",+a)
}
sum (4,6,addnumbers)

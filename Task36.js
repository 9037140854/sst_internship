const readline = require ("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
})
readline.question("enter the radius :",(red)=>{
    function circle (){
        circle=Math.PI*Math.pow(red,2);
        return circle;       
    }
    let a=circle(red)
    console.log(a)
    readline.close()
})

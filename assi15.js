const readline = require ("readline").createInterface({ 
    input : process.stdin,
    output: process.stdout,
    });
    readline.question("enter the first number:",(n1)=>{
        readline.question("enter the second number:",(n2)=>{

            let x=parseInt(n1)
            let y=parseInt(n2)
            var avg=(x+y)/2;
            function avarege2(){
                console.log("avarege of two number is:",+avg)
            }
                avarege2();
                readline.close()
            })
        })
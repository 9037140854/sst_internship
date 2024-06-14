const readline = require ("readline").createInterface({ 
    input : process.stdin,
    output: process.stdout,
    });
    readline.question("enter the heigt:",(hei)=>{
        readline.question("enter the width:",(wid)=>{
            let x=parseInt(hei)
            let y=parseInt(wid)
            var area=(x*y)
                console.log("the area of rectangle is:",+area)
           readline.close()
        })
    })
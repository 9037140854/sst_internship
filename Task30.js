const readline = require ("readline").createInterface({
    input:Process.stdin,
    output:Process.stdout,
})

readline.question("enter the heigt:",(hei)=>{
    readline.question("enter the width:",(wid)=>{
        let x = parseInt(hei);
        let  y= parseInt(wid);
        var  area=(x*y)

        console.log("the area of rectangle is:",+area)
         myFunction(heigt,width);
        function myFunction(heigt,width)
        readline.close()
     
       })
   })
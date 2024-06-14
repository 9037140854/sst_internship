const readline = require ("readline").createInterface({ 
    input : process.stdin,
    output: process.stdout,
    });
    readline.question("enter a string:",(string)=>{
        readline.question("enter the in teger value:",(int)=>{
        
   
            function print(){
                console.log("string is:",+string+"integer value is:",+int)
            }
               print();
               readline.close();
        })})
                

        
        
    
const readline = require ("readline").createInterface({ 
    input : process.stdin,
    output: process.stdout,
    });
    readline.question("enter you name:",(name)=>{

        readline.log("enter your age :",(age)=>{
     

    function nameage(){
            console.log("i am"+name+ "iam" +age+"years old");    
    }
        nameage();
        readline.close()
    })
    })

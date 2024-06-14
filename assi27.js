const readline = require ("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("enter the name of studennt:",(std)=>{
    readline.question("enter the rollnumber:",(rol)=>{
        readline.question("enter the age:",(age)=>{
            readline.question("enter the class:",(clas)=>{
                var details={
                    name:(std),
                    roll:(rol),
                    age:(age),
                    class:(clas),

                }
                const student=function(){
                    console.log(details);
                }
                student();
                readline.close();

            })
            })
        })
    });

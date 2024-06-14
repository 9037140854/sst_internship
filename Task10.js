const readline =require ("readline").createInterface({
    input : process.stdin,
    output: process.stdout,
});

    readline.question ("enter the first number ?\n",(a)=>{
    readline.question ("enter the second number ?\n",(b)=>{
    const sum = parseInt(a) + parseInt(b);
    const sub = parseInt(a) - parseInt(b);
    const multi= parseInt(a) * parseInt(b);
    const div= parseInt(a) / parseInt(b);
    const mod= parseInt(a) % parseInt(b);
    console.log("the sum of your number is" + sum +",")
    console.log("the sub of your number is" + sub+",")
    console.log("the multi of your number is" + multi+",")
    console.log("the div of your number is" + div +",")
    console.log("the mod of your number is" + mod +",")
    readline.close();
 });
 });

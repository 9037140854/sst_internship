const r=require ("readline").createInterface({
    input : process.stdin,
    output : process.stdout,
});

r.question ("who are you ?\n", (name) => {
    r.question("what is you age?\n",(age) => {
    console.log("your age is  "+ age +" years  old");
    r.question ("where is your place?\n",(place) =>{
    console.log("your place is"+ place +"!" );
    r.close();
});
});
});
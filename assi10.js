const r=require ("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
})
r.question ("enter the length of the side a:",(a)=>{
    r.question ("enter the length of the side b:",(b)=>{
            let x = parseInt(a)
            let y = parseInt(b)
            let area=(0.5*(a*b));
    console.log("the area of the triangle is:",+area);
    r.close();
    })
})

                       
        
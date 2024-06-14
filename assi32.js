class digi  {
constructor(a){
        this.a=a;
    }
      
Sum()
{
    let res=0;
    while(this.a>0)
        {
            res+this.a%10;
            a=parseInt(this.a/10);
        }
    return res;
 }
}
const add=new digi(345);
console.log(+add,sum());

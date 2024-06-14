function hasProperty(obj,prop){
    for(var key in obj){
        if(key===prop){
            return true;
        }
    }
     return false;   
}
var person ={
    name:"shijas",
    age:18,
    occupation:"Engineering"
};
var res = hasProperty(person,"name1");
if (res==true)
    {
        console.log("present");
    }
    else
    {
        console.log("not present");
    }
const person ={
    firstName:"shijas",
    lastName:"sakeer",
    fullName:function(){
        return this.firstName+" "+this.lastName;
    }
}
const member={
    firstName:"hege",
    lastName:"nilsen",
}
let fullName=person.fullName .bind(member);
console.log(fullName());
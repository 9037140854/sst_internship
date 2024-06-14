const person ={
    fullName : function (city,contry){
        return this.firstName+ " "+this.lastName+ ","+ city+","+contry;
    }
}
const person1 ={
    firstName :"Shijas",
    lastName : "Sakeer",
}
console.log(person.fullName.call (person1,"India","Norway"));
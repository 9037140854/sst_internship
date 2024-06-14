function modifyObject(obj)
{
    obj.value = 100
    console.log("inside function:",obj.value);
}
let myObj={value:50};
console.log(myObj.value);
modifyObject(myObj);
console.log("after function call:",myObj.value);
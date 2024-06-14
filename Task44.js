function changeCarPriceByReference(car)
{
    car.price = 25000;
console.log("Inside function,CarPrice:",car.price);
}
let car = {
    model:"Toyota",
    price:20000,
};
console.log("Before function call,car model:",car.model);
console.log("Before function call,car price:",car price);
changeCarPriceByReference(car);
console.log("After function call,car 
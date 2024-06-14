function changeCarPriceByvalue (price)
{
    price = 25000;
    console.log("inside function price:",price);
}
let carPrice = 20000
console.log("Before function call",carPrice);
changeCarPriceByvalue (carPrice);
console.log("After function call , carPrice:",carPrice);
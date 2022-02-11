let car = { mark: "Kia Niro", year: 2017, owner: "Suraj", city: "Helsinki" };
// console.log(car.mark);
// console.log(car.owner);
// console.log(car);
car.color = "White";
//console.log(car);
delete car.city;
//console.log(car);

car.age = () => 2022 - car.year;
car["try"] = "hello";
console.log(car.age());
console.log(car);

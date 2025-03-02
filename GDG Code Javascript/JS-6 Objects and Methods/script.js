let car ={make: 'Toyota', model: 'Corolla', year: 2021}
console.log(getDescription(car));
function getDescription(car){
    return  `This car is a ${car.year} ${car.make} ${car.model}`;
}
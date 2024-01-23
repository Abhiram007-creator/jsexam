//[id , brand , model , type , pricePerDay, available]
 carBooking =[
        [1,'Toyota', 'Corolla' , 'Sedan' ,50 ,10],
        [2,'Honda', 'Civic' , 'Sedan' ,55 ,8],
        [3,'Ford', 'Mustang' , 'Sports Car' ,80 ,5],
        [4,'Jeep', 'Wrangler' , 'SUV' ,70 ,7],
        [5,'Nissan', 'Altima' , 'Sedan' ,45 ,12]
];


//1)print all car brands
console.log('display all car brands');
carBooking.forEach(car=>{
    console.log(car[1]);

})

//2)print total number of cars available
let totalAvailableCars = carBooking.reduce((total,car) => total+car[5], 0);
console.log(totalAvailableCars);

//3)sedan car details
let sedan= carBooking.filter(car=>car[3] == 'Sedan');
console.log(sedan);
//4)car with price per day greater than 60
let greater60Cars = carBooking.filter(car=>car[4] > 60);
console.log(greater60Cars);

//5)print details of 'jeep wrangler'
let jeepDetails = carBooking.find(car=>car[1] === 'Jeep');
console.log(jeepDetails);

//6)sort cars based on the descending order of the price per day

//7)sort cars on ascending order of available cars
console.log('cars on ascending order of available cars');
carBooking.sort((a,b)=>a[4]-b[4])
console.log();

//8)find the car with most availabe cars
//9)call all rented
//10)count the number of sedan cars
let noofsedan = carBooking.filter(car=>car[3]=='Sedan').length;
console.log(noofsedan);


//11)print all car brands
console.log('display all car brands');
carBooking.forEach(car=>{
    console.log(car[1]);

})

//12)find the total number of available cars for all types
//13)find the cars with least availability
//14)check if there any car with a price per day of exactly 55

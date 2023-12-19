let cars=[{brand:"Maruthi",model:"Swift",color:"White",price:800000},
{brand:"Toyota",model:"Innova",color:"Red",price:800000},
{brand:"Tata",model:"Safari",color:"Black",price:800000},
{brand:"Toyota",model:"Glanza",color:"Black",price:900000},
{brand:"Toyota",model:"Fortuner",color:"Red",price:3800000},
{brand:"BMW",model:"x1",color:"Black",price:4800000},
{brand:"Mahindra",model:"Scorpio",color:"Red",price:1800000},
{brand:"Tata",model:"Tiago",color:"White",price:600000},
{brand:"Maruthi",model:"Swift",color:"Yellow",price:700000},
{brand:"Tata",model:"Nexon",color:"Black",price:800000},
{brand:"KIA",model:"Seltos",color:"White",price:800000}]
//print only white color colors cars
let new_Cars=[];
for(car of cars){
    if (car.color !=="White" && car.color ==='Red' && car.brand=="Toyota"){
        //console.log(car)
        new_Cars.push(car)
    }
}
console.log(new_Cars)
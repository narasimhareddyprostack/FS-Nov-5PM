let emp={
    id:101,
    name:"Rahul",
    sal:45000,
    loc:'Wayand'
}
let user={}


let count = 0 
for(prop in user){
    count++
}

if(count>0){
    console.log("Not Empt object")
}
else{   
    console.log("Empty Object")
}
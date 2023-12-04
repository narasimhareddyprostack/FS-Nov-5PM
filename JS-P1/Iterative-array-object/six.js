let emp={
    id:101,
    name:'Rahul',
    sal:45000,
    loc:'wayanad',
    email:'rahul@gmail.com'
}

console.log(emp.prop)  //undefined




//print emp values
for(prop in emp){
    //console.log(prop)
    console.log(emp.prop)
}
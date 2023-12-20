let user={
    uid:101,
    name:"Rahul",
    email:"rahul@gmail.com"
}
let details={
    email:"rahul@ibm.com",
    sal:45000,
    loc:'Wayanad'
}
let user_Details={...user,...details}
console.log(user_Details)
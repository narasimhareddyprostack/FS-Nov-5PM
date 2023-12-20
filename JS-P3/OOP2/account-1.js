class Account{
    acc_Id;
    acc_Name;
    constructor(id,name){
        this.acc_Id=id 
        this.acc_Name=name
    }
    deposit_Amount(){}
    withdrawl(){}
}
let a1=new Account(101,"Rahul")
let a2=new Account(102,"sonia")
let a3=new Account(103, "Priyanka")
console.log(a1)
console.log(a2)
console.log(a3)
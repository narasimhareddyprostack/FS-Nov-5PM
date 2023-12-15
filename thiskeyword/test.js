class Account{
    acc_Id;
    acc_Name;
    acc_Email;
    acc_Bal;
    constructor(id,name,email,amount){
        this.acc_Id=id
        this.acc_Name=name;
        this.acc_Email=email
        this.acc_Bal=amount
    }
}
let a1=new Account(101,'Rahul','rahul@gmail.com',45000)
let a2=new Account(102,'Sonia','sonia@gmail.com',55000)
let a3=new Account(103,'Priyanka','priyanka@gmail.com',65000)
let a4=new Account(104,'Modi','modi@gmail.com',75000)
console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)
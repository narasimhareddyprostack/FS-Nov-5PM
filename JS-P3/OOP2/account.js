class Account{
    acc_Id;
    acc_Name;
    acc_Bal=0
    constructor(id,name,amount){
        this.acc_Id=id 
        this.acc_Name=name
        this.acc_Bal=amount
    }
    deposit_Amount(amount){
        this.acc_Bal = this.acc_Bal + amount
    }
    withdrawl(amount){
        this.acc_Bal = this.acc_Bal -amount
    }
}
let a1=new Account(101,"Rahul",5000)
let a2=new Account(102,"sonia",6000)
let a3=new Account(103, "Priyanka",25000)
console.log(a1)
console.log(a2)
console.log(a3)
console.log("*******")
a1.deposit_Amount(4000)
a1.withdrawl(10)
console.log(a1)
console.log(a2)
console.log(a3)
class Account{
    acc_Id;
    acc_Name;
    acc_Bal=0
    constructor(id,name){
        this.acc_Id=id
        this.acc_Name=name
    }
    open_Account(){
        console.log("Account Opened Successfully")
    }
    deposit_Amount(amount){
        this.acc_Bal = this.acc_Bal + amount
    }
    withdrawl(amount){
        this.acc_Bal= this.acc_Bal - amount
    }
    get_Bal(){
        console.log("Getting Bal")
    }
}
let a1=new Account(101,'Rahul')
let a2=new Account(102,'Sonia')
//purpose of constructor method is : initlize object values
console.log(a1)
console.log(a2)

a1.deposit_Amount(5000)
a1.deposit_Amount(500)

a2.deposit_Amount(500000)
a2.deposit_Amount(5)
console.log(a1)
console.log(a2)


a1.withdrawl(15)
a2.withdrawl(200)


console.log(a1)
console.log(a2)

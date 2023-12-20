//import Account from "./Account";  //ES6
const Account= require('./Account')
class SA extends Account{
    acc_Id;
    acc_Bal=0
    min_Bal=500
    constructor(id,name,email,loc,amount){
        super(name,email,loc)
        this.acc_Id=id 
        this.acc_Bal = amount
    }
    deposit_Amount(amount){
        this.acc_Bal = this.acc_Bal + amount
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal
    }
    withdrawl(amount){
        this.acc_Bal = this.acc_Bal - amount
    }
}

let sa1=new SA(101,'Rahul','rahul@gmail.com','wayanad',5000)


console.log("Account Bal is :", sa1.get_Bal())
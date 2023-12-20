const Account = require('./Account')
class CA extends Account{
    min_Bal=25000
    acc_Id;
    acc_Bal=0
    constructor(id,name,email,addr,amount){
        super(name,email,addr)
        this.acc_Id=id 
        this.acc_Bal = amount
    }
     get_Bal(){
        return this.acc_Bal - this.min_Bal
    }
}

let ca1=new CA(102,"Priyanka",'priya@gmail.com','New Delhi',4000000)

console.log("Account Bal is :", ca1.get_Bal())



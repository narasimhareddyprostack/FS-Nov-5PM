class Account{
    acc_Name;
    acc_Email;
    acc_Addr
    constructor(name,email,loc){
        this.acc_Name=name;
        this.acc_Email=email
        this.acc_Addr=loc
    }
}
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
let sa1=new SA(101,'Rahul','rahul@gmail.com','wayanad',5000)

let ca1=new CA(102,"Priyanka",'priya@gmail.com','New Delhi',4000000)
/* console.log(ca1)
console.log(sa1) */

console.log("Account Bal is :", sa1.get_Bal())
console.log("Account Bal is :", ca1.get_Bal())



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
    }
}
class CA extends Account{
    min_Bal=25000
    acc_Id;
    acc_Bal=0
    constructor(){
        super()
    }
}
let sa1=new SA(101,'Rahul','rahul@gmail.com','wayanad',5000)
console.log(sa1)
let ca1=new CA()
console.log(ca1)
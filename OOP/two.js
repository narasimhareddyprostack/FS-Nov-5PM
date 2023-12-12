class Account{
    acc_Id=101;
    acc_Name='Rahul';
    acc_Bal=56000;
    //+
    open_Account(){
        console.log("Account Opened Successfully")
    }
    deposit_Amount(){
        console.log("Amount deposited")
    }
    withdrawl(){
        console.log("Insufficent Bal")
    }
    get_Bal(){
        console.log("Server Busy")
    }
    get_St(){
        console.log("Chargable")
    }
    close_Account(){
        console.log("Bal is -ve !")
    }
}
let a1=new Account()
console.log(a1)

a1.open_Account()
a1.deposit_Amount()
a1.withdrawl()
a1.get_Bal()
a1.get_St()
a1.close_Account()
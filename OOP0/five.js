class Account{
    acc_Id;
    acc_Name;
    acc_Bal=0;
    open_Account(){}
    deposit_Amount(amount){
        console.log(amount)
    }
}
let a1=new Account()
let a2=new Account()
//console.log(a1)
//console.log(a2)
a1.deposit_Amount(500)
a1.deposit_Amount(500)
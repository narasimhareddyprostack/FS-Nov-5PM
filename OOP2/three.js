class Account{
    acc_Bal=0;
    deposit_Amount(amount){
        console.log(amount)
        this.acc_Bal = this.acc_Bal +amount
    }
}
let a1=new Account()
let a2=new Account()

a1.deposit_Amount(5000)
a1.deposit_Amount(10)

a2.deposit_Amount(30)
a2.deposit_Amount(10)

console.log(a1)  //5010
console.log(a2)  //0
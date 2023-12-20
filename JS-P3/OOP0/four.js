class Account{
    deposit_Amount(amount){
        console.log(amount)
    }
    withdrawl(amount){
        console.log("withdrawl amount",amount)
    }
}

let a1=new Account()
let a2=new Account()
a1.deposit_Amount(5000)
a1.deposit_Amount(500)
a1.deposit_Amount(50)
a1.deposit_Amount(5)
a1.withdrawl(100)
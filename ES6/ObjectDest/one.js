let state = {
    product:{
        pId:'P101',
        pName:"Iphone 14",
        price:45000,
        color:['red','blue','green']
    },
    user:{
        users:[],
        score:100
    },
    emp:{},
    msg:"Hello"
}

let {product} = state
let {pName} = product
//print product name
console.log(pName)
//Req? reading object property as varaible
//console.log(state.product.pName)
let employees=[{id:101,name:"Rahul",sal:45000},
{id:102,name:"Sonia",sal:55000}]

let createEmployee =(emp,callback)=>{
    setTimeout(()=>{
        employees.push(emp)
        callback()
    },4000)
}
let displayEmployees=()=>{
    setTimeout(()=>{
        let rows=""
        for(emp of employees){
            rows=rows + ` <tr>
                            <td>${emp.id}</td>
                            <td>${emp.name}</td>
                            <td>${emp.sal}</td>
                          </tr>`
        }
        document.getElementById('abc').innerHTML=rows
    },2000)
}
createEmployee({id:103,name:'priyanka',sal:65000},displayEmployees)

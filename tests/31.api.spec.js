
const { test, expect } = require('@playwright/test')//import
var uzerid;
test('get',async({request}) => {//request feature for api, page for web application
const rezonze=await request.get('https://reqres.in/api/users?page=2')
console.log(await rezonze.json())
expect(rezonze.status()).toBe(200)
})

test('create',async({request}) => {
    const rezonze=await request.post('https://reqres.in/api/users',{
        data:{
            "name":"mohan",
            "job":"engineer"
            }
    }) 
    console.log(await rezonze.json())
    expect(rezonze.status()).toBe(201)


    var rez=await rezonze.json()
    uzerid=rez.id

})




test('update',async({request}) => {
    const rezonze=await request.put('https://reqres.in/api/users/'+uzerid,{
        data:{
            "name":"kum",
            "job":"engineer"
            }
    }) 
    console.log(await rezonze.json())
    expect(rezonze.status()).toBe(200)
})

test('delete',async({request}) => {
    await request.delete('https://reqres.in/api/users/'+uzerid)
})
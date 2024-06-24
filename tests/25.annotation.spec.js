const { test, expect } = require('@playwright/test')//import

test.only('tezt1', async({page})=>{
    console.log('print tezt1')
})

test.skip('tezt2', async({page})=>{
    console.log('print tezt1')
})
test('tezt3', async({page, browserName})=>{
    console.log('print tezt1')
    if(browserName==='chromium'){//skip bazed on condition
        test.skip()
    }
})

test('tezt5', async({page})=>{
test.fixme()//skip untill izzue got fixed
    console.log('print tezt1')
})


test('tezt6', async({page})=>{
        console.log('print tezt1')
      //  expect(1).toBe(1)

      if(browserName==='chromium'){//fail bazed on condition
        test.fail()//fail test
    }
    })

test('tezt try', async({page})=>{
        test.slow()//in default any execution failure time iz 30s, but slow() make it triple 30*3
            console.log('print tezt1')//fail after 90s if not executed complitly
    })
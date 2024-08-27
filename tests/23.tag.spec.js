//npx Playwright test 23.tag.spec.js --project=chromium --grep @regression@smoke@unit@sanity
//npx Playwright test 23.tag.spec.js --project=chromium --grep grouping11111@unit 
/*const { test, expect } = require('@playwright/test')//import

test('grou', {
    tag: '@fast',
  }, async ({ page }) => {
console.log('tezt1')
})

test('groupi@smoke', async ({ page }) => {
    console.log('tezt1')
    })

test('grouping2@sanity', async ({ page }) => {
console.log('tezt2')
})

test('groupin@sanity@unit', async ({ page }) => {
    console.log('tezt2')
    })

test('grouping3@regression@smoke@unit@sanity', async ({ page }) => {
console.log('tezt3')
})

test('grouping@regression', async ({ page }) => {
    console.log('tezt3')
    })
    
test('grouping111@unit@smoke', async ({ page }) => {
console.log('tezt4')
})

test('grouping11111@unit', async ({ page }) => {
    console.log('tezt4')
    })
*/




const { test, expect } = require('@playwright/test'); //import

test.describe('Fast Tests', () => {
    test('grou @fast', async ({ page }) => {
        console.log('tezt1');
    });
});

test.describe('Smoke Tests', () => {
    test('grouping @smoke', async ({ page }) => {
        console.log('smoke');
    });

    test('grouping3 @regression @smoke @unit @sanity', async ({ page }) => {
        console.log('smoke, regre, unit, sanity');
    });

    test('grouping111 @unit @smoke', async ({ page }) => {
        console.log('smoke, unit');
    });
});

test.describe('Sanity Tests', () => {
    test('grouping2 @sanity', async ({ page }) => {
        console.log('sanity');
    });

    test('groupin @sanity @unit', async ({ page }) => {
        console.log('@sanity @unit');
    });
});

test.describe('Regression Tests', () => {
    test('grouping @regression', async ({ page }) => {
        console.log('@regression');
    });
});

test.describe('Unit Tests', () => {
    test('grouping11111 @unit', async ({ page }) => {
        console.log('@unit');
    });
});
//npx playwright test --headed 23.tag.spec.js --project=chromium -g "@smoke"
//npx playwright test --headed 23.tag.spec.js --project=chromium -g "@(smoke|sanity)"
//npx playwright test --headed 23.tag.spec.js --project=chromium -g "(?=.*@smoke)(?=.*@sanity)"


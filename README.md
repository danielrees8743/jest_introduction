# Intro to Jest Testing JavaScript
## Jest Setup in a Vanilla JS Project
- [ ] Set up a new **npm package** with default values with the command `npm init -y`
- [ ] Install **Jest** with the command `npm i --save-dev jest`
- [ ] Update the **test script** in `package.json` to 
        ```
        "scripts": {
            "test": "jest"
        }
        ```
- [ ] Run **Jest tests** with `npm test` (run will fail with *No tests found, exiting with code 1* until tests are written)

## How to Write a Unit Test - Option I
- [ ] Add a `math.test.js` file
- [ ] Import the **sum function** into the `math.test.js` with `const sumTwoNums = require('./math')`
- [ ] Write a unit test to check whether the `sumTwoNums` function works
```
test('sumTwoNums function adds two numbers', () => {
    expect(sumTwoNums(1, 2)).toEqual(3)
})
```
- [ ] Run Jest tests with `npm test`

## How to Write a Unit Test - Option II
- [ ] Create a `__tests__` directory
- [ ] Create a `math.test.js` file inside the `__tests__` directory
- [ ] Import the `multiplyNums` function with `const { multiplyNums } = require('../math')`
- [ ] Write **unit test** to check that `multiplyNums` function accurately multiplies 2 numbers together
- [ ] Write **unit test** to check that `multiplyNums` function accurately multiplies 3 numbers together
- [ ] Implement the `it()` method to make your tests read like a sentence
- [ ] Implement the `describe()` method to group your two test cases for the `multiplyNums` function

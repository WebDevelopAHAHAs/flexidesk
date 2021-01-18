
// code driven testing
let {repeatMessage} = require('./indextest');

test("Name for an example test", () =>{
    expect("/user/dashboard").toBe("/user/dashboard");
})



// Group up test
describe('repeatMessage block of multiple tests', () => {
    test("repeatMessage functionality", () => {
        expect(repeatMessage("hello", 3)).toEqual("hellohellohello")
        expect(repeatMessage("hello", 0)).toEqual("")
        expect(repeatMessage("a", 3)).toEqual("aaa")
    })
    test('should be a function', () => {
        expect(typeof(repeatMessage)).toBe('function');
    })

})

//

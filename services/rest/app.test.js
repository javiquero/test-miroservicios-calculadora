const  app = require("./service.js");

describe('operation',()=>{

    test ("operations 20,3", ()=>{
        expect(17).toBe(app.operation(20,3));
    })

    test ("operations 20", ()=>{
        expect(20).toBe(app.operation(20));
    })
    test ("operations 0,0", ()=>{
        expect(0).toBe(app.operation(0,0));
    })

    test ("Incorrect values undefined", ()=>{
        expect(0).toBe(app.operation(undefined));
    })

    test ("Incorrect values -1,-3", ()=>{
        expect(2).toBe(app.operation(-1,-3));
    })

    test ("Incorrect values [1,undefined]", ()=>{
        expect(1).toBe(app.operation(1,undefined));
    })

})
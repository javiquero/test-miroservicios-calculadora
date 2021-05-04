const  app = require("./service.js");

describe('operation',()=>{

    test ("operations [2,3,5,5]", ()=>{
        let s = app.operation([2,3,5,5]);
        expect(15).toBe(s);
    })

    test ("operations [20]", ()=>{
        expect(20).toBe(app.operation([20]));
    })
    test ("operations [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0]", ()=>{
        expect(16).toBe(app.operation([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0]));
    })

    test ("Incorrect values undefined", ()=>{
        expect(0).toBe(app.operation(undefined));
    })

    test ("Incorrect values []", ()=>{
        expect(0).toBe(app.operation([]));
    })

    test ("Incorrect values [1,undefined]", ()=>{
        expect(1).toBe(app.operation([1,undefined]));
    })

})
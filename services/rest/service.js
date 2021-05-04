module.exports = {
    operation(num1, num2){      
        let numOr0 = n => isNaN(n) ? 0 :  parseInt(n);
        return  numOr0(num1) - numOr0(num2);
    }
}
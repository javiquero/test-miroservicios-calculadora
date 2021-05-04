module.exports = {
    operation(params){      
        if (!params) return 0;
        let numOr0 = n => isNaN(n) ? 0 :  parseInt(n);
        return params.reduce((a, b) => numOr0(a) + numOr0(b), 0)
    }
}
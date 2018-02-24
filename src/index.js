// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var exch = {},
        rest;
    if (currency <= 0) {
        return exch;
    } else if (currency >10000) {
        exch.error = "You are rich, my friend! We don't have so much coins for exchange";
        return exch;
    } else {
        var h = Math.floor(currency / 50);
        if (h < 1) {
            rest = currency;
        } else {
            exch.H = h;
            rest = currency - (h * 50);
        }
        var q = Math.floor(rest / 25);
        if (q < 1) {
            rest = rest;
        } else {
            exch.Q = q;
            rest = rest - (q * 25);
        }
        var d = Math.floor(rest / 10);
        if (d < 1) {
            rest = rest;
        } else {
            exch.D = d;
            rest = rest - (d * 10);
        }
        var n = Math.floor(rest / 5);
        if (n < 1) {
            rest = rest;
        } else {
            exch.N = n;
            rest = rest - (n * 5);
        }
        var p = rest;
        if (p >= 1) {
            exch.P = p;
        } 
        return exch;
    }    
}

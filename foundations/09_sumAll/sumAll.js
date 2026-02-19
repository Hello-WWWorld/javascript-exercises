const sumAll = function(a, b) {

    let start = Math.min(a,b);
    let end = Math.max(a,b);
    let total = 0;

    // normalize the order of the arguments
    if (a < 0 || b < 0) {
        return "ERROR";
    }
    // checks if argument is integer, returms error if not
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    }

    // loop for a and b then totaling the sum
    for (let i = start; i <= end; i++) {
        total += i;
        
}
    return total;


};

// Do not edit below this line
module.exports = sumAll;

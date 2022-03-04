const sumAll = function(int1, int2) {
    if (int1 < 0 || int2 < 0) {
        return "ERROR";
    }
    if (typeof int1 != "number" || typeof int2 != "number") {
        return "ERROR";
    }
    let sum = 0;
    let nextNum = int1 < int2 ? int1 : int2;
    let lastNum = int1 >= int2 ? int1 : int2;
    while (nextNum <= lastNum) {
        sum += nextNum;
        nextNum++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

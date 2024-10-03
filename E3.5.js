function getSumFunction(a) {
    return function(b) {
        return a + b
    }
};

const sumFunction = getSumFunction(100);

const sum = sumFunction(35)

console.log(sum);
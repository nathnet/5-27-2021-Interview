function greatestCommonDivisor(numbers) {
    let res = 0;
    numbers.forEach((number) => {
        res = gcdOperations(res, number);

        if (res == 1) {
            return 1;
        }
    });

    return res;
}

function gcdOperations(num1, num2) {
    let temp = 0;
    while (num1 != 0) {
        temp = num2 % num1;
        num2 = num1;
        num1 = temp;
    }
    return num2;
}

module.exports = {
    greatestCommonDivisor,
    gcdOperations,
};
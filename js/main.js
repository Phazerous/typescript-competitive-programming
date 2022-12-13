"use strict";
const numberOfStepsSimple = (num) => {
    let steps = 0;
    while (num) {
        if (num % 2 == 0) {
            num /= 2;
        }
        else {
            num -= 1;
        }
        steps += 1;
    }
    return steps;
};
// BIT OPERATORS
const numberOfSteps = (num) => {
    let steps = 0;
    while (num) {
        if ((num & 1) === 0) {
            num = num >> 1;
        }
        else {
            num--;
        }
        steps++;
    }
    return steps;
};

"use strict";
const romanToInt = (str) => {
    let sum = 0;
    const sl = {
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900,
    };
    for (const key in sl) {
        console.log(key);
        if (str.includes(key)) {
            str = str.replace(key, '');
            sum += sl[key];
        }
    }
    for (const char of str) {
        switch (char) {
            case 'I':
                sum += 1;
                break;
            case 'V':
                sum += 5;
                break;
            case 'X':
                sum += 10;
                break;
            case 'L':
                sum += 50;
                break;
            case 'C':
                sum += 100;
                break;
            case 'D':
                sum += 500;
                break;
            case 'M':
                sum += 1000;
                break;
        }
    }
    return sum;
};
console.log(romanToInt('DCXXI'));

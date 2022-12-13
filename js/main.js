"use strict";
const maximumWealth = (accounts) => Math.max(...accounts.map((account) => account.reduce((acc, wealth) => acc + wealth, 0)));
console.log(maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
]));

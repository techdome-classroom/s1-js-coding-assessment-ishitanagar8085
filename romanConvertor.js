// In romanConverter.js
const assert = require('assert'); 
const { romanToInt } = require('./romanConvertor.js'); // Import the romanToInt function

describe('test cases for problem 1', function() {
    it('test case 1', function() {
        assert.strictEqual(romanToInt("III"), 3); // Expected output is 3
    });

    it('test case 2', function() {
        assert.strictEqual(romanToInt("LVIII"), 58); // Expected output is 58
    });

    it('test case 3', function() {
        assert.strictEqual(romanToInt("MCMXCIV"), 1994); // Expected output is 1994
    });

    it('test case 4', function() {
        assert.strictEqual(romanToInt("IV"), 4); // Expected output is 4
    });

    it('test case 5', function() {
        assert.strictEqual(romanToInt("IX"), 9); // Expected output is 9
    });

    it('test case 6', function() {
        assert.strictEqual(romanToInt("XL"), 40); // Expected output is 40
    });

    it('test case 7', function() {
        assert.strictEqual(romanToInt("CD"), 400); // Expected output is 400
    });
});
var romanToInt = function(s) {
    const romanMap = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (i < s.length - 1 && romanMap[s[i]] < romanMap[s[i + 1]]) {
            result -= romanMap[s[i]];
        } else {
            result += romanMap[s[i]];
        }
    }

    return result;
};

module.exports = { romanToInt };  // Export the function for use in test files
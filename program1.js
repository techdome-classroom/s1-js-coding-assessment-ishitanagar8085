/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Stack to keep track of opening brackets
    const stack = [];
    
    // Mapping of closing brackets to their corresponding opening brackets
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Iterate through each character in the string
    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // If it's a closing bracket
        if (char in map) {
            // Pop from stack or set top to a dummy value if the stack is empty
            const top = stack.length > 0 ? stack.pop() : '#';

            // Check if the popped element matches the expected opening bracket
            if (top !== map[char]) {
                return false; // Mismatched pair
            }
        } else {
            // It's an opening bracket, so push it onto the stack
            stack.push(char);
        }
    }

    // If the stack is empty, all opening brackets have been matched
    return stack.length === 0;
};

module.exports = { isValid };
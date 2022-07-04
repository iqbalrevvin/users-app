/* eslint-disable max-len */
export const randomLocationGenerator = (from, to, fixed) => (Math.random() * (to - from) + from).toFixed(fixed) * 1;

export const randomRangeNumber = (from, to) => (Math.random() * (to - from) + from).toFixed();

export const checkPalindrome = (name) => {
    let len = name.length;
    let mid = Math.floor(len/2);
    for ( var i = 0; i < mid; i++ ) {
        if (name[i] !== name[len - 1 - i]) {
            return false;
        }
    }
    return true;
};

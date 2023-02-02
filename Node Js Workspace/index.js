console.log("Hello World");

// we can use this process.argv to take input as follows
// first slice out the first two index of process.argv then second convert that input into proper integer then print it
const input = process.argv.slice(2);
console.log(parseInt(input[0]),parseInt(input[1]));
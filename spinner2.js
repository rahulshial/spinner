const spinChar = ['\r|    ', '\r/    ', '\r-    ', '\r\\    '];
console.log('');
const timeOutLoop = function() {
  console.log('\n');
};

for (let i = 0; i <= spinChar.length; i++) {
  setTimeout(() => {
    process.stdout.write(spinChar[i]);
    if (i >= spinChar.length) {
      timeOutLoop();
    }
  },i * 500);
}



// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 700);

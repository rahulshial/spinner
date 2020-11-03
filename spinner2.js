const spinChar = ['\r|    ', '\r/    ', '\r-    ', '\r\\    ', '\r|    ', '\r/    ', '\r-    ', '\r\\    ', '\r|    '];
console.log('');

const timeOutLoop = function() {
  console.log('');
};

for (let i = 0; i <= spinChar.length; i++) {
  setTimeout(() => {
    process.stdout.write(spinChar[i]);
    if (i >= spinChar.length) {
      timeOutLoop();
    }
  },i * 500);
}

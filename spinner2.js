const spinChar = ['\r|    ', '\r/    ', '\r-    ', '\r\\    ', '\r|    ', '\r/    ', '\r-    ', '\r\\    ', '\r|    '];

let numTimes = 0;
const interval = setInterval(() => {
  numTimes++;
  process.stdout.write(spinChar[numTimes]);
  if (numTimes === spinChar.length - 1) {
    process.stdout.write("\n");
    return clearInterval(interval);
  }
}, 250);

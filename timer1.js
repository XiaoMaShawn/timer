//get the arg from the commend line input
let arg = process.argv.slice(2);
//sort the arrary with ascending order
let arr = arg.sort((a, b) => a - b);
for (let ele of arr) {
  if (ele > 0) {
    setTimeout(() => {
      process.stdout.write('.' + '\n');
    }, ele * 1000);
  }
  continue;
}

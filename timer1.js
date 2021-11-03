const arg = process.argv.slice(2);
for (const argument of arg) {
  if (Number(argument) >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(`${argument} second Alarm!`);
    }, argument * 1000);
  }
}
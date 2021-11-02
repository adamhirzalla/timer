const arg = process.argv.slice(2);
for (const argument of arg) {
  if (Number(argument) >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
      process.stdout.write(`${argument} second Alarm!\n`);
    }, argument * 1000);
  }
}
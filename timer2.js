const stdin = process.stdin;
const stdout = process.stdout;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  // \u0003 maps to ctrl+c input, \x07 maps to system beep
  if (key >= 1 && key <= 9) {
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => {
      stdout.write('\x07');
    }, key * 1000);
  }
  if (key === 'b') stdout.write('\x07');
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }
});
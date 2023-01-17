const args = process.argv.slice(2);
const alarmClock = (array) => {
  array.forEach(element => {
    let num = Number(element);
    if (Number.isNaN(num)) {
      return;
    }

    if (num < 0) {
      return;
    }

    setTimeout(()=>process.stdout.write('\x07'), num * 1000);
  });
};

alarmClock(args);
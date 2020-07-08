/* Задания, в которых необходимо использовать WHILE. */

/* 1. Вывести # столько раз, сколько указал пользователь. */
let n = prompt('Input value');
let s = '';
if (!isNaN(n)) while (n-- > 0) {
  s += '#'
}
alert(s);

/* 2. Пользователь ввел число, а на экран вывелись все числа от введенного до 0. */
let n = prompt('Input value');
let s = '';
if (!isNaN(n)) while (n >= 0) {
  s += ' ' + n;
  n--;
}
alert(s);

/* 3. Запросить число и степень. Возвести число в указанную степень и вывести результат. */
let base = prompt('Input base');
let pow = prompt('Input pow');
if (!(isNaN(base) || isNaN(pow))) {
  let result = 1;
  base = Number(base);
  pow = Number(pow);
  if (pow < 0) {
    base = 1 / base;
    pow = -pow;
  }
  while (pow-- > 0) {
    result *= base;
  }
  alert(result);
}

/* 4. Запросить 2 числа и найти все общие делители. */
let a = prompt('Input 1st value');
let b = prompt('Input 2st value');
if (!(isNaN(a) || isNaN(b))) {
  a = Number(a);
  b = Number(b);
  let c = '';
  if (a > b) a = b + (b = a, 0);
  let d = a;
  while (d > 1) {
    if (!(b % d + a % d)) c = c + ' ' + d;
    d--;
  }
  if (c !== '') alert(`The common factors are:${c}`); else alert(`There are no common factors...`);
}

/* 5. Посчитать факториал введенного пользователем числа. */
let a = prompt('Input value');
if (!isNaN(a)) {
  if (a >= 0) {
    let f = 1;
    let b = a;
    while (a > 1) {
      f *= a;
      a--;
    }
    alert(`${b}!=${f}`)
  }
}

/* Задания, в которых необходимо использовать DO WHILE. */

/* 1. Предлагать пользователю решить пример 2 + 2 * 2 до тех пор, пока он не решит его правильно. */
let a;
do {
  a = prompt('Calculate: 2+2*2=');
} while (a !== '6');

/* 2. Делить число 1000 на 2 до тех пор, пока не получится число меньше 50. Вывести это число и сколько делений произвели. */
let a = 1000;
let n = 0;
do {
  a /= 2;
  n++;
} while (a >= 50);
alert(`Cakculated value is ${a}. Operations count are ${n}`);

/* Задания, в которых необходимо использовать FOR. */

/* 3. Вывести все числа от 1 до 100, которые кратные указанному пользователем числу. */
let a = prompt('Input value');
if (!isNaN(a)) {
  a = Number(a);
  let s = '';
  for (let i = a; i <= 100; i++) if (!(i % a)) s += ' ' + i;
  alert(s);
}
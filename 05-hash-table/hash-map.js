// const map = new Map([
//     ['ali',30],
//     ['reza',20],
//     ['mona',25],

// ]);

const map = new Map();
// ۱. اضافه کردن
map.set('ali',30);
map.set('reza',20);
map.set('mona',25);
console.log(map);

// ۲. گرفتن مقدار
console.log(map.get('ali'));
console.log(map.get('mona'));

// ۳. بررسی وجود
console.log(map.has('reza'));
console.log(map.has('parisa'));


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

// ۴. حذف
map.delete('reza');
console.log(map.has('reza'));

// ۵. تعداد
console.log(map.size);

// ۶. پاک کردن همه
map.clear();
console.log(map.size);       // 0

// پیمایش
map.set('ali',30);
map.set('reza',20);
map.set('mona',25);
map.set('saeed',34);
map.set('kelly',23);
map.set('raha',26);
console.log(map);

// for...of
for(let [key,value] of map){
    console.log(`${key} : ${value}`);
}

//forEach
map.forEach((value,key)=>{
    console.log(`${key}: ${value}`);
})

//iterate keys
for(let key of map.keys()){
    console.log(key);
}

//iterate values
for(let value of map.values()){
    console.log(value);
}

for(let [key,value] of map.entries()){
    console.log(`${key} : ${value}`);
}
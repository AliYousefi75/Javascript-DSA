function testSet(){
    let set = new Set([5,1,2,39,7]);
    console.log(set);

    //اضافه کردن (add)
    set.add(70);
    set.add(75);
    set.add(1);
    console.log(set);

    //بررسی وجود (has)
    console.log(set.has(70));
    console.log(set.has(78));

    // حذف (delete)
    set.delete(2);
    console.log(set);

    // پیمایش با for...of
    for(let value of set){
        console.log(value)
    }

    //پیمایش با forEach
    console.log('iterate with for each')
    set.forEach(value=>{
        console.log(value)
    })
}
testSet()
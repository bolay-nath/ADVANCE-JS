function stopWatch(){
    let count =0;
    return function(){
        count++;
        return count;
    }
};
function hello(){
    let count2 = 0;
    return function(){
        count2++;
    return count2;
    }
};

const clock1 = stopWatch();
clock1();
clock1();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
const clock2 = hello();


console.log(clock2())
console.log(clock2()); 
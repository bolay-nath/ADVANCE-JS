function add(num1, num2){
    let argumentTest = [...arguments];
    console.log(argumentTest);
    return num1 + num2 + argumentTest;
};
let result = add(5,5,2,10);
console.log(result);


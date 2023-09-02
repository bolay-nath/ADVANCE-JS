//if we set this thing the value is undefined 
//0
//""
// undefined
//null
//NaN





// const age = 4;
// if(age > 3){
//     console.log('condition is true');
// }
// else{
//  console.log('condition is false');
// };
// program to count down numbers to 1
function countDown(number) {

    // display the number
    console.log("hello", number);

    // decrease the number value
    const newNumber = number - 1;

    // base case
    if (newNumber > 0) {
        countDown(newNumber);
    }
}

countDown(4);
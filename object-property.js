const student = [
    {id: 25, name: 'omar sunny'},
    {id: 21, name: 'deepjol'},
    {id: 50, name: 'moyouri'},
    {id: 55, name: 'manna'}

];
// console.log(student);
const newArray = [];
for(let i = 0; i < student.length; i++ ){
    let all = student[i];
    let allElement = all.name;
    newArray.push(allElement);
};
console.log(newArray);
const names = student.map(s => s.id);
const bigger = student.filter(s => s.id > 40);
const finder = student.find(s => s.id > 40);
console.log(finder);
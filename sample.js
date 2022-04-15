let x = [4, 3, 9, 8]
// x.push(15)

// immutablity

x = [...x, 15]

console.log(x)

let student = [{ name: 'raj', dept: 'IT' }, { name: 'KAMAL', dept: 'CSE' }, { name: 'MANI', dept: 'IT' }];
student = [...student, { name: 'vijay', dept: 'cse' }]

console.log(student)
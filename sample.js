let student = {
    name: 'raj',
    depta: 'it',
    age: 31
}

student = { ...student, age: student.age + 1 }
console.log(student)
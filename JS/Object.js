let profil = {
    name:"Ariel",
    age: 24,
    city: "Douala",
    major: "Bachelor's Degree" 
}

 console.log (profil.name)
 console.log (profil.age)
 console.log (profil.city)


let students = [
    { name: "Ariel", mark: 56 },
    { name: "John", mark: 30 },
    { name: "Sarah", mark: 45 }
];

let names = students.map(students => students.name)
let average = students.filter(students => students.mark > 30)
let result = students.reduce((sum, student) => sum + student.mark, 0) / students.length;

console.log(names)
console.log(average)
console.log(result)
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


function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5; // Randomly pick success or failure

      if (isSuccess) {
        resolve("Data loaded successfully!");
      } else {
        reject("Failed to load data.");
      }
    }, 2000); // 2-second delay
  });
}

// Handling both success and failure cases
fetchData()
  .then((response) => {
    console.log("Success:", response);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
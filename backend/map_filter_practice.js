const students = [
  { id: 1, name: 'Alice', age: 18, grade: 'A' },
  { id: 2, name: 'Bob', age: 20, grade: 'B' },
  { id: 3, name: 'Charlie', age: 19, grade: 'C' },
  { id: 4, name: 'David', age: 18, grade: 'B' },
  { id: 5, name: 'Emily', age: 19, grade: 'A' },
  { id: 6, name: 'Frank', age: 20, grade: 'C' },
  { id: 7, name: 'Grace', age: 17, grade: 'B' },
  { id: 8, name: 'Henry', age: 19, grade: 'A' },
  { id: 9, name: 'Ivy', age: 20, grade: 'B' },
  { id: 10, name: 'Jack', age: 19, grade: 'D' },
]

// Question 1: Extract an array of student names.
const namesOfStudent = students.map((s) => s.name)

// Question 2: Filter out the students who are 18 years old.
const stAbove18 = students.filter((s) => s.age === 18)

// Question 3: Calculate the average age of all the students.
const averageAge =
  students.map((s) => s.age).reduce((prev, next) => prev + next, 0) /
  students.length

// Question 4: Filter out the students who have a grade of 'A'.
const gradeA = students.filter((s) => s.grade === 'A')

// Question 5: Extract an array of student IDs.
const studentsId = students.map((s) => {
  return s.id
})

// Question 6: Filter out the students whose names start with the letter 'A'.
const nameStartsWithA = students.filter((s) => s.name.startsWith('A'))

// Question 7: Calculate the total number of students.
//students.length

// Question 8: Filter out the students whose grades are not 'B'.
const gradesNotB = students.filter((s) => s.grade !== 'B')

// Question 9: Extract an array of student ages.
const agesOfStudent = students.map((s) => s.age)

// Question 10: Filter out the students who are older than 19
const above19 = students.filter((s) => s.age > 19)
// console.log(above19)

//Question 11: Calculate the total age of all the students.
const totalAge = students
  .map((s) => s.age)
  .reduce((prev, next) => prev + next, 0)
// console.log(totalAge)

//Question 12: Filter out the students whose names contain the letter 'e'.
const lastE = students.filter((s) => s.name.endsWith('e'))
// console.log(lastE)

// Question 13:Extract an array of student grades.
const gradeArray = students.map((s) => s.grade)
// console.log(gradeArray)

//Question 14: Filter out the students who have an odd student ID.
const oddId = students.filter((s) => s.id % 2 !== 0)
// console.log(oddId)

//Question 15: Calculate the number of students whose names end with the letter 'y'.
const totalEndsInY = students.filter((s) => s.name.endsWith('y')).length
// console.log(totalEndsInY)

//Question 16: Filter out the students who have a grade of 'C' or lower.
const grade_c_or_lower = students.filter((s) => s.grade >= 'C')
// console.log('lower C', grade_c_or_lower)

//Question 17: Extract an array of student objects with only the name and grade properties.
const nameAndGrade = students.map((s) => ({ name: s.name, grade: s.grade }))
// console.log(nameAndGrade)

//Question 18: Filter out the students who are 20 years old.
const above20 = students.filter((s) => s.age === 20)
// console.log(above20)

//Question 19: Calculate the sum of the ages of all the students.
const sumOfAllAges = students
  .map((s) => s.age)
  .reduce((prev, next) => prev + next, 0)

// console.log(sumOfAllAges)

//Question 20: Filter out the students who have a name of exactly four characters.
const nameOf4 = students.filter((s) => s.name.length === 4)
// console.log(nameOf4)

//Question 21: Extract an array of student names in uppercase.
const namesInUpperCase = students.map((s) => s.name.toUpperCase())
// console.log(namesInUpperCase)

//Question 22: Filter out the students whose names do not contain the letter 'a'.
const namesWithoutA = students.filter(
  (s) => !s.name.includes('a') && !s.name.includes('A')
)
// console.log(namesWithoutA)

//Question 23: Calculate the number of students with an even student ID.
const evenId = students.filter((s) => s.id % 2 === 0)
// console.log(evenId)

//Question 24: Filter out the students who have a grade other than 'A', 'B', or 'C'.
const gradeAorBorC = students.filter(
  (s) => s.grade === 'A' || s.grade === 'B' || s.grade === 'C'
)
// console.log(gradeAorBorC)

//Question 25:Extract an array of student objects with only the ID and age properties.
const idAndAge = students.map((s) => ({ id: s.id, age: s.age }))
// console.log(idAndAge)

//Question 26: Filter out the students whose names have more than six characters.
const gt6Char = students.filter((s) => s.name.length > 6)
// console.log(gt6Char)

//Question 27: Calculate the highest age among all the students.
const highestAge = Math.max(...students.map((s) => s.age))
// console.log(highestAge)

//Question 28: Filter out the students who have a grade higher than 'B'.
const higherThenB = students.filter((s) => s.grade < 'B')
// console.log(higherThenB)

//Question 29: Extract an array of student grades in uppercase.
const gradesInUpper = students.map((s) => s.grade.toUpperCase())
// console.log(gradesInUpper)

//Question 30: Filter out the students who are younger than 18 or older than 19
const _18_19 = students.filter((s) => s.age < 18 || s.age > 19)
// console.log(_18_19)

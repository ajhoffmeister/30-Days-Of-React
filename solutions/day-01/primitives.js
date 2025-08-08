
// primitives are dynamically typed

let msg = "Hello World!"
msg = "Hello world."

const PI = 3.141592

// arrays are an object class

const arr = Array()

console.log(arr)

// creating empty lists
const arr_2 = []

console.log(arr_2)

// initialized arrays
const numbers = [1, 564, 23, 786, 23, 643, 797]

console.log('Numbers: ', numbers)
console.log("Number of numbers: ", numbers.length)

// splitting
let js = "JavaScript"
const charsInJavaScript = js.split('')

console.log(charsInJavaScript)

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies)

// accessing
console.log(companies[3])

// filling
const arr_3 = Array(10).fill('X')
console.log(arr_3)

// concatenating
const arr_4 = [1, 2, 3]
const arr_5 = [4, 5, 6]
const arr_6 = arr_4.concat(arr_5)

console.log(arr_6)

// to String
console.log(numbers.toString())

// splice 
numbers_2 = [1, 2, 3, 4, 5, 6]
console.log(numbers_2.splice(3, 3, 7, 8, 9)) // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items
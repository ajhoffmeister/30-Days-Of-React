const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]

// declare empty array
const n = Array()

// declare array with more than 5 elements
const m = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Find length of array
console.log(m.length)

// get first middle and last item
console.log(m[0], m[m.length - 1], m[Math.floor(m.length/2) - 1])

// mixed data type array
const mixedDataTypeArray = [1, "Hello", 5.4, "Whomstdve", 1000, true]
console.log(mixedDataTypeArray.length)

// it companies
const itCompanies = ["Facebook", "Google", "Microsoft", "IBM", "Oracle", "Amazon"]
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0], itCompanies[itCompanies.length-1], itCompanies[itCompanies.length / 2 - 1])

itCompanies.forEach(function(element, index, array) {
    console.log(element)
})

itCompanies.forEach(function(element, index, array) {
    element = element.toUpperCase()
    console.log(element)
})

const itComp = [...itCompanies]
console.log(itComp.splice(0, itComp.length - 1).join(", ") + ", and " + itComp[itComp.length - 1] + " are IT companies.")

if(itCompanies.includes("Amazon")) {
    console.log("Amazon")
} else {
    console.log("Amazon is not found")
}

console.log(itCompanies.filter(function(element, index, array) {
    return element.match(/.*[o].*[o].*/)
}))
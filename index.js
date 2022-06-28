
   // 01
// let array = [1, 2, 3, 4, 5]
// let double = array.map((arrayElement) => {
//     return arrayElement * 2
// })
// console.log(double);

   // 02
// let longNames = [
// 	{
// 		firstName: "Jane",
// 		lastName: "Doe"
// 	},
// 	{
// 		firstName: "John",
// 		lastName: "Smith"
// 	}
// ]

// let shortNames = longNames.map((names) => {
//   let theNames = []
//   theNames.push({name : names.firstName + names.lastName})
//   return theNames
// })

// console.log(shortNames)

    // 03
// let array = [1, "toto", 34, "javascript", 8]
// let numbers  = array.filter((number) => {
//     return number >= 0
// })

// console.log(numbers)

    // 04
let numbers = [1,2,3,4,5,6,7,8]
let even = numbers.filter((number) => {
    return number % 2 === 0
})

console.log(even);
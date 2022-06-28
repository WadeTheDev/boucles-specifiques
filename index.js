
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
// let numbers = [1,2,3,4,5,6,7,8]
// let even = numbers.filter((number) => {
//     return number % 2 === 0
// })

// console.log(even);



//     05
// let cakes = [
// 	{
// 		name: "cake",
// 		flavor: "vanilla",
// 		status: "available"
// 	},
// 	{
// 		name: "brownie",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// 	{
// 		name: "pie",
// 		flavor: "strawberry",
// 		status: "available"
// 	},
// 	{
// 		name: "muffin",
// 		flavor: "pistachio",
// 		status: "available"
// 	},
// 	{
// 		name: "donut",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// ]

    // 05 (Global solution)
//  let theCakes =  cakes.filter((cake) => {
//     if (cake.flavor === "chocolate") {
//        return cake.status = "sold out !"
//     }
// })
//  console.log(theCakes)

    // 05 (The real one)
// let theCakes =  cakes.filter((cake) => {
//     if (cake.flavor === "chocolate") {
//        return cake
//     }
// }).map((cake) =>{
//     cake.status = "Sold Out !"
//     return cake
// })

// console.log(theCakes);

    // 06
// let cakePie =  cakes.find((cake) => {
//     return cake.name === "pie"
// })

// console.log(cakePie)

// 07

let numbers = [1,2,3,4,5,7,8,9]

let vector = numbers.forEach((number) => {
        return number
});
    console.log(vector)


console.log(businesses)

// getting reference to html div
const outEl = document.querySelector("#output")

// creating html for html item
outEl.innerHTML = "<h1>Active Businesses</h1>"

let zipCodeProperty = "addressZipCode"

// // callback function: forEach is taking callback function, passing argument for function (business) and that single argument represents the item you are looping through as it iterates; the function is executed for each item in array each time it goes through, and it builds up the html (h2 and section) and takes the value to access the property (business.companyName) and (business.addressFullStreet)
// businesses.forEach(business => {
//   outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//     <section>
//         ${business.addressCity}
//         ${business["addressStateCode"]}
//     </section>
//     <section>
//         ${business[zipCodeProperty]}
//     </section>
//   `
//   outEl.innerHTML += "<hr/>"
// });

// loop through each item in array, check condition (addressStateCode === "NY") if true, keep, if false, disregard

// filter method - loops through every single item in the array, and takes a callback function as the argument; primary differences betwen filter and forEach is it returns a NEW array; must return boolean
// current array is business; using business.filter will give new array and will be needed to be assigned to a variable
// attempting to return a boolean - if true, return, if false, disregard; essentially checking if business.addressStateCode === "NY". If it is, it returns true. If not, it returns false. For every item(object) where the address code does not equal NY, it is not added to the array. If it is equal to NY, it is added to the array. True: in array. False: not in array.

// Array to contain all the New York businesses
// const newYorkBusinesses = businesses.filter(business => {
//     console.log(business.addressStateCode)
//     let inNewYork = false
//     if (business.addressStateCode === "NY") {
//         inNewYork = true
//     }
//     return inNewYork
//   })

// console.log(newYorkBusinesses)

// in forEach, change business to newYorkBusiness

// newYorkBusinesses.forEach(business => {
//     outEl.innerHTML += `
//       <h2>${business.companyName}</h2>
//       <section>
//         ${business.addressFullStreet}
//       </section>
//       <section>
//           ${business.addressCity}
//           ${business["addressStateCode"]}
//       </section>
//       <section>
//           ${business[zipCodeProperty]}
//       </section>
//     `
//     outEl.innerHTML += "<hr/>"
//   });

// const manufacturingBusinesses = businesses.filter(business => {
//     let manufacturer = false
//     if (business.companyIndustry === "Manufacturing") {
//         manufacturer = true
//     }
//     return manufacturer
// })

// manufacturingBusinesses.forEach(business => {
//     outEl.innerHTML += `
//       <h2>${business.companyName}</h2>
//       <section>
//         ${business.addressFullStreet}
//       </section>
//       <section>
//           ${business.addressCity}
//           ${business["addressStateCode"]}
//       </section>
//       <section>
//           ${business[zipCodeProperty]}
//       </section>
//     `
//     outEl.innerHTML += "<hr/>"
//   });

// console.log(manufacturingBusinesses)

// businesses.forEach(business => {
//     /* CALCULATE ORDER SUMMARY */
// let totalOrders = business.orders.reduce(
//     (currentTotal, nextValue) => currentTotal += nextValue,
//     0
// )

    /* CALCULATE ORDER SUMMARY */
    // let totalOrders = 0
    // business.orders.forEach(order => totalOrders += order)
// loops through each array in business, and then second forEach loops through orders (a property within the array), places it within the variable totalOrders, and the following code appends it to the DOM

//     outEl.innerHTML += `
//         <h2>
//             ${business.companyName}
//             ($${totalOrders.toFixed(2)})
//         </h2>
//         <section>
//             ${business.addressFullStreet}
//         </section>
//         <section>
//             ${business.addressCity},
//             ${business.addressStateCode}
//             ${business.addressZipCode}
//         </section>
//     `;
//     outEl.innerHTML += "<hr/>";
// });

// lighting exercises

const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

monthlyRainfall.forEach(amount => {
    const totalRainfall = monthlyRainfall.reduce(
    (accumulator, currentRainfall) => accumulator += currentRainfall) 
    console.log(totalRainfall)

})

const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

const sentence = words.reduce((fullSentence, currentWord) => fullSentence + " " + currentWord)

console.log(sentence)


console.log(businesses)

// getting reference to html div
const outEl = document.querySelector("#output")

// creating html for html item
// outEl.innerHTML = "<h1>Active Businesses</h1>"

// let zipCodeProperty = "addressZipCode"

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

// // can also be written as single line as const manufacturingBusiness

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

// .map will take array of objects and will return array; uses callback function as argument and executed for every item, and requires a return statement. Whatever is returned is added to the array.

// ==============================================================================================

// outEl.innerHTML += "<h1>Purchasing Agents</h1>";

// /*
//     Using map(), you extract the purchasing agent object
//     from each business and store it in a new array
// */
// const agents = businesses.map(business => {
//     console.log(business)
//     return business.purchasingAgent
// })

// console.table(agents)

// const agentsFullArray = businesses.map(business => {
//     return {
//         fullName : `${businesses.purchasingAgent.nameFirst} ${businesses.purchasingAgent.nameLast}`,
//         company : businesses.companyName,
//         phoneNumber : businesess.phoneWork
//     }
// })

// agentsFullArray.forEach(agent => {
//   outEl.innerHTML += `<h2>${agentsFullArray.fullName}</h2>`;
//   outEl.innerHTML += `<h3>${agentsFullArray.company}</h3>`;
//   outEl.innerHTML += `<h4>${agentsFullArray.phoneWork}</h4>`;
//   outEl.innerHTML += "<hr/>";
// });

// .find = takes a callback function as argument, and expects return to be a boolean. In callback function, checking to see if the item we are currently looking through is equal to string. This does NOT return an array, first item where condition is true is what is retruned by .find

document
.querySelector("#companySearch")
// getting reference to input field on index.html
    .addEventListener("keypress", keyPressEvent => {
        // listening for any key pressed
        if (keyPressEvent.charCode === 13) {
            // check if the character pressed is the enter key, code inside conditional will not run the following code if the key pressed is the enter key
            /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
            const purchasingAgentArray = businesses.find(
                agent =>
                    agent.purchasingAgent.nameFirst.includes(keyPressEvent.target.value) 
                    || agent.purchasingAgent.nameLast.includes(keyPressEvent.target.value)
            );
// .includes is a string method, which determines whether one string is found in another string, always returns boolean; allows for partial matching; there IS includes for array as well.
            outEl.innerHTML = `
                <h2>
                ${purchasingAgentArray.companyName}
                </h2>
                <section>
                ${purchasingAgentArray.addressFullStreet}

                </section>
                <section>
                ${purchasingAgentArray.addressCity},
                ${purchasingAgentArray.addressStateCode}
                ${purchasingAgentArray.addressZipCode}
                </section>
                <section>
                ${purchasingAgentArray.purchasingAgent.nameFirst}
                ${purchasingAgentArray.purchasingAgent.nameLast}
                </section>
            `;
        }
    });
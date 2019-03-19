console.log(businesses)

// getting reference to html div
const outEl = document.querySelector("#output") 

// creating html for html item
outEl.innerHTML = "<h1>Active Businesses</h1>"

let zipCodeProperty = "addressZipCode"

// callback function: forEach is taking callback function, passing argument for function (business) and that single argument represents the item you are looping through as it iterates; the function is executed for each item in array each time it goes through, and it builds up the html (h2 and section) and takes the value to access the property (business.companyName) and (business.addressFullStreet)
businesses.forEach(business => {
  outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
    </section>
    <section>
        ${business.addressCity}
        ${business["addressStateCode"]}
    </section>
    <section>
        ${business[zipCodeProperty]}
    </section>
  `
  outEl.innerHTML += "<hr/>"
});



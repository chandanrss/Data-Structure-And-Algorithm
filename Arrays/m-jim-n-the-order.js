//
//To determine the order in which customers receive their food at Jim's Burgers, you calculate the serve time for each customer and then sort them by that time (with ties broken by customer number).

// Each customer has:An order number (the time they placed their order),
// A prep time (how long it takes to prepare).
// The serve time = order number + prep time.
// Then:
// Calculate serve time for each customer.
// Sort customers by serve time.

// If two serve times are equal, the customer with the lower number (earlier in line) comes first.

// 🧮 Example Input
// perl
// Copy
// Edit
// Customer #:     1   2   3   4   5
// Order #:        8   5   6   2   4
// Prep time:      3   6   2   3   3
// 📦 Serve Time Calculation
// yaml
// Copy
// Edit
// Customer 1: 8 + 3 = 11  
// Customer 2: 5 + 6 = 11  
// Customer 3: 6 + 2 = 8  
// Customer 4: 2 + 3 = 5  
// Customer 5: 4 + 3 = 7
// Now sort based on serve time → tie goes to lower customer number:


//
//
//
//
//
//
var jimAndOrder = function (orders) {
  let counterArr = [];
  console.log(orders);

  orders.forEach((element,i) => {
    console.log(element);
    counterArr.push({
        customer: i+1,
        orderValue: element[0]+ element[1]
    });
   

    counterArr.sort((a,b)=>{
        // console.log("hi",a,b);
        if(a.orderValue === b.orderValue)
            return a.customer - b.customer;
        return a.orderValue - b.orderValue;
    });


  });

    return counterArr.map(order=>order.customer);

};

console.log(
  jimAndOrder([
    [1, 3],
    [2, 0],
    [3, 3],
  ])
);

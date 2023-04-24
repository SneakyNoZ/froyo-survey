// create customer object
let customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false
  };
  
  // modify properties using bracket notation
  customer["email"] = "Jak3Smith1992@email.com";
  customer["phone"] = 3195551234;
  customer["zipCode"] = "63132";
  customer["favoriteFlavors"] = ["coffee", "strawberry", "matcha"];
  
  // delete properties using the delete keyword
  delete customer["zipCode"];
  delete customer["favoriteStore"];
  
  // add new properties using dot notation
  customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
  customer.futureFlavors = ["mango"];
  customer.todaysPurchaseCost = 5.32;
  
  // print keys in survey
  console.log(Object.keys(customer));
  
  // display customer object in table format
  console.table(customer);  
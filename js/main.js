var totalCost = 0;

items.forEach(function(products){
  return totalCost += (products.price);
});

console.log((totalCost / items.length).toFixed(2));

// Q #1 - THE FOREACH ARRAY WILL GO THRU ARRAY AND RETURN THE TOTAL COST += THEN WE DIVIDE TOTALCOST BY AMMOINT OF ITEMS IN ARRAY FIXED TO SECOND DECIAML AND WE GET OR TOTAL AVERAGE.

items.filter(function(item) {
    if (item.price >= 14 && item.price <= 18){
        console.log(value.title);
    }
});

// Q #2 - THE FILTER ARRAY WILL GO THRU THE ARRAY AND GET ALL PRICES BETWEEN MARKS SET BY ME.

items.filter(function(item) {
    if (item.currency_code === "GBP") {
        console.log(item.title + " costs \u20AC" + item.price);
    }
});

// Q #3 - THE FILTER ARRAY WILL GO THRU ARRAY AND FIND THE ITEM THAT IS === GBP AND LOG NAME AND COST INFO.

items.forEach(function (item) {
    if(item.materials.indexOf('wood') > -1) {
        console.log(item.title);
    }
});

// Q #4- THE FOREACH ARRAY WILL GO THRU ARRAY AND FIND ITEMS WITH MATERIALS MADE OF WOOD AND LOG THE NAME.

items.forEach(function(item){
    if(item.materials.length >= 8) {
        console.log(item.title);
    }
});

// Q #5- THE FOREACH ARRAY WILL GO THRU ARRAY AND FIND ITEMS WITH MATERIAL LENGTH LONGER THAN 8 AND LOG NAME.

items.forEach(function(sellers){
    if(sellers.who_made.indexOf("i_did") > -1) {
        console.log(sellers.who_made);
    }
});

//  Q #6- FOREACH ARRAY WILL GO THRU ARRAY AND FIND SELLERS WHO_MADE THEIR OWN ITEMS AND LOG NAME.

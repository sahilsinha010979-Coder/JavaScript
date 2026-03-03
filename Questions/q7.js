/* For the given array of price of 5 items [250,645,300,900,50]All items have a discount of
10% off on them. change the array to reflect the discounted price of each item. */
let prices = [250, 645, 300, 900, 50];
for(let i=0; i<prices.length; i++){
    prices[i] = prices[i] - (prices[i] * 0.10); // Applying 10% discount
}
console.log(prices);
// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:
// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.


// Solution O(n^2)
var maxProfit = function(prices) {
    
  let profit = 0
  
  for (let i = 0; i < prices.length; i++) {
      for (let j = i+1; j < prices.length; j++) {
          if (prices[j]-prices[i] >= profit) {
              profit = prices[j]-prices[i]
          }
      }
  }
  return profit
};

// Solution O(n)
var maxProfit = function(prices) {
  let min = prices[0]
  let profit = 0
  
  for (let i = 0; i < prices.length; i++) {
      min = Math.min(min, prices[i])
      profit = Math.max(profit, prices[i] - min)
  }
  return profit
};
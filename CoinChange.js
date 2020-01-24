// You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// Example 1:
// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1

// coins = [1, 2, 5], amount 11
var coinChange = function(coins, amount) {
  coins.sort((a,b) => b-a) // [5, 2, 1]
  
  if (amount === 0) { return 0 }
  if (coins[coins.length-1] > amount) { return -1 }
  if (coins.length === 1) {
      if (amount % coins[0] === 0) { return amount / coins[0] }
      return coins[0] === amount ? 1 : -1
  }
  
  // use the biggest coin as many as possible
  // and call recursive with the left over
  let count;
  for (let i = 0; i < coins.length; i++) {
      let totalCount = 0
      const numOfCoin = Math.floor(amount / coins[i])
      totalCount += numOfCoin
      
      const leftCoins = coins.splice(1)
      const leftAmount = amount - coins[i]*numOfCoin
      const recurCount = coinChange(leftCoins, leftAmount)
      if (recurCount >= 0) {
          totalCount += recurCount
      }
      
      if (i === 0) {count = totalCount}
      if (totalCount < count) {
          count = totalCount
      }
  }
  
  return count
};
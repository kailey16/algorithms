// You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// Example 1:
// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1


// bottom up approach
// Solution O(A*n), space complexity O(A)  --  A: amount
var coinChange = function(coins, amount) {
    const max = amount + 1
    let dp = new Array(amount+1) 
    // make a new array with length amoutn + 1, this will store the answer of the sub problems
    dp.fill(max)
    dp[0] = 0
    
    for (let i = 1; i <= amount; i++) {
        // for loop for each coin we are given
        for (let j = 0; j < coins.length; j++) {
            // if the coin is less than or equal to the sub problem amount
            if (coins[j] <= i) {
                dp[i] = Math.min(dp[i], dp[i-coins[j]]+1)
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount]
}

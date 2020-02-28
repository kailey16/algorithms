// take a string of arrays and return an actual array
// "[-5, 5, 5], [-6, 15, 15], [7, 13, 12]"
// return [[-5, 5, 5], [-6, 15, 15], [7, 13, 12]]

var strToArr = string => JSON.parse('[' + string + ']')


// JSON.parse()
// A common use of JSON is to exchange data to/from a web server
// When receiving data from a web server, the data is always a string
// Parse the data with JSON.parse(), and the data becomes a JavaScript object
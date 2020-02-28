// take a string of arrays and return an actual array
// "[-5, 5, 5], [-6, 15, 15], [7, 13, 12]"
// return [[-5, 5, 5], [-6, 15, 15], [7, 13, 12]]

var strToArr = string => JSON.parse('[' + string + ']')

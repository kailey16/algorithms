//Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Example 1:
// Input: [3,2,1,5,6,4] and k = 2
// Output: 5

// Solution O(nlogn) -- sorting
var findKthLargest = function(nums, k) {
  let sortedArr = nums.sort((a,b) => b-a)
  return sortedArr[k-1]
};


// Solution O(nlogk) -- MinHeap
var findKthLargest = function(nums,k) {
  var minHeap = new MinHeap()
  
  for (var i = 0; i < nums.length; i++) {
      minHeap.insert(nums[i])
      if (minHeap.size() > k + 1) {
          minHeap.remove()
      }
  }
  console.log(minHeap.heap())
  return minHeap.remove()
}



var MinHeap = function() {
  let heap = [null]

  this.heap = function() {
    return heap
  }

  this.insert = function(num) {
    heap.push(num);
    if (heap.length > 2) {
      let idx = heap.length -1
      while (heap[idx] < heap[Math.floor(idx/2)]) {
        if (idx >= 1) {
          [heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]]
          if (Math.floor(idx/2) > 1) {
            idx = Math.floor(idx/2)
          } else {
            break;
          }
        }
      }
    } 
  }

  this.remove = function() {
    let smallest = heap[1]
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1]
      heap.splice(heap.length - 1)

      if (heap.length == 3) {
        if (heap[1] > heap[2]) {
          [heap[1], heap[2]] = [heap[2], heap[1]];
        }
        return smallest
      }

      let i = 1
      let left = 2 * i
      let right = 2 * i + 1
      while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
        if (heap[left] < heap[right]) {
          [heap[i], heap[left]] = [heap[left], heap[i]];
          i = 2 * i;
        } else {
          [heap[i], heap[right]] = [heap[right], heap[i]];
          i = 2 * i + 1;
        }
        left = 2 * i
        right = 2 * i + 1
        if (heap[left] == undefined || heap[right] == undefined) {
          break;
        }
      }
    } else if (heap.length === 2) {
      heap.splice(1, 1)
    } else {
      return null
    }
    return smallest
  }
  
  this.size = function() {
      return heap.length
  }

}





// Solution
function findKthLargest(nums, k) {
  if (k < 1 || nums == null) {
      return 0;
  }
  return getKth(nums.length - k +1, nums, 0, nums.length - 1);
}

function getKth(k, nums, start, end) {

  var pivot = nums[end];

  var left = start;
  var right = end;

  while (true) {

      while (nums[left] < pivot && left < right) {
          left++;
      }

      while (nums[right] >= pivot && right > left) {
          right--;
      }

      if (left == right) {
          break;
      }

      swap(nums, left, right);
  }

  swap(nums, left, end);

  if (k == left + 1) {
      return pivot;
  } else if (k < left + 1) {
      return getKth(k, nums, start, left - 1);
  } else {
      return getKth(k, nums, left + 1, end);
  }
}

function swap(nums, n1, n2) {
  var tmp = nums[n1];
  nums[n1] = nums[n2];
  nums[n2] = tmp;
}
// HEAP
// binary heap is a partially ordered binary tree which satisfies the heap property
// each node has at most two child nodes and the heap property indicates a specific relationship between the parent and child nodes
// ex) Max Heap(biggest number at the root), Min Heap(smallest number at the root)
// always fill in the left first, doesn't matter if the number is bigger or smaller
// build one level of the tree at a time

// can be transfered into an array
// ex) [, 20, 19, 17, 13, 15, 8, 5, 11, 9, 10]
// -- heap size is 10

// left child: i * 2
// right child: i * 2 + 1
// parent : floor of i / 2 -- ex) 5/2 => 2

// if inserted number is not in order, it will be added at the end and moves to the right position

// if you remove the element in the middle of the heap, it will pop the last element and move it to the empty space and it will sort to right order


let MinHeap = function() {
	
	let heap = [null];
	
	this.insert = function(num) {
		heap.push(num);
		if (heap.length > 2) {
			let idx = heap.length - 1;
			while (heap[idx] < heap[Math.floor(idx/2)]) {
				if (idx >= 1) {
          // ES6 destructuring syntax of swapping the parent node with the inserted node
          // [heap[Math.floor(idx/2)] => parent node
          // heap[idx] => node which we just inserted
          [heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];
          // parent node is more than the root node
					if (Math.floor(idx/2) > 1) {
						idx = Math.floor(idx/2);
					} else {
            // node is not smaller than the parent node
						break;
					};
				};
			};
		};
	};
	
	this.remove = function() {
		let smallest = heap[1];
		if (heap.length > 2) {
      // move the last node of the heap to the first node
			heap[1] = heap[heap.length - 1];
      heap.splice(heap.length - 1);
      
			if (heap.length == 3) {
				if (heap[1] > heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]];
				};
				return smallest;
      };
      
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
				if (heap[left] < heap[right]) {
					[heap[i], heap[left]] = [heap[left], heap[i]];
					i = 2 * i
				} else {
					[heap[i], heap[right]] = [heap[right], heap[i]];
					i = 2 * i + 1;
				};
				left = 2 * i;
				right = 2 * i + 1;
				if (heap[left] == undefined || heap[right] == undefined) {
					break;
				};
			};
		} else if (heap.length == 2) {
			heap.splice(1, 1);
		} else {
			return null;
		};
		return smallest;
	};
  
  // heap sort
	this.sort = function() {
		let result = new Array();
		while (heap.length > 1) {
			result.push(this.remove());
		};
		return result;
	};

};




let MaxHeap = function() {
	
	let heap = [null];
	
	this.print = () => heap;

	this.insert = function(num) {
		heap.push(num);
		if (heap.length > 2) {
			let idx = heap.length - 1;
			while (heap[idx] > heap[Math.floor(idx/2)]) {
				if (idx >= 1) {
					[heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];
					if (Math.floor(idx/2) > 1) {
						idx = Math.floor(idx/2);
					} else {
						break;
					};
				};
			};
		};
	};
	
	this.remove = function() {
		let smallest = heap[1];
		if (heap.length > 2) {
			heap[1] = heap[heap.length - 1];
			heap.splice(heap.length - 1);
			if (heap.length == 3) {
				if (heap[1] < heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]];
				};
				return smallest;
			};
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
				if (heap[left] > heap[right]) {
					[heap[i], heap[left]] = [heap[left], heap[i]];
					i = 2 * i
				} else {
					[heap[i], heap[right]] = [heap[right], heap[i]];
					i = 2 * i + 1;
				};
				left = 2 * i;
				right = 2 * i + 1;
				if (heap[left] == undefined || heap[right] == undefined) {
					break;
				};
			};
		} else if (heap.length == 2) {
			heap.splice(1, 1);
		} else {
			return null;
		};
		return smallest;
	};

};
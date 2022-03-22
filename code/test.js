// [ 1, 4, 5, 1, 4, 1, 0, 0, 1  1 ]
//   x     x               x    T
//   1 => 1
//   1 => 2
//   2 => 4
//   3 => 7
//  Total jumps = 4
//
// [ 1, 0, 0, 0, 3, 2, 0, 0 ] => invalid
//
// A marker is located on the left-most space on the board. Each turn, you may move the marker to the right by
// any number of spaces up to the number under the marker at the beginning of the turn.
//
// Find the optimum moves to reach Target T with fewest jumps. Return -1 if no solution can be found.

// 1 5 7 4 8 6 6 7 9 10
//
// [visited] 1 4 8 9

function sum_index_params(array) {
	temp = [];
	for (i in array) {
		temp.push(i + array[i]);
	}
	return temp;
}

function greedy(array) {
	step = 0;
	sum = sum_index_params(array);
	len = array.length;

	visited = [step];

	while (array[step] > 0 && step < len) {
		vt = step + 1;
		max = sum[vt];

		for (i = vt + 1; i <= step + array[step]; i++) {
			if (max < sum[i]) {
				max = sum[i];
				vt = i;
			}
		}

		step = vt;
		visited.push(vt);
	}

	return visited;
}

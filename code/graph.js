const graph = new Map();

const addNode = (value) => {
	graph.set(value, []);
};

const addEdge = (start, end) => {
	graph.get(start).push(end);
	graph.get(end).push(start);
};

const dfs = (start, current, end, visited = new Set()) => {
	visited.add(current);

	const vertices = graph.get(current);

	for (const vertex of vertices) {
		if (vertex === end) {
			console.log(
				"dfs from ",
				start,
				" to ",
				end,
				" : ",
				[...visited].join(" "),
				vertex,
				"\n"
			);
		} else if (!visited.has(vertex)) {
			dfs(start, vertex, end, visited);
			visited.delete(vertex);
		}
	}
};

const bfs = (start, end, visited = new Set()) => {
	const queue = [start];
	visited.add(start);

	while (queue.length > 0) {
		const node = queue.shift();

		const vertices = graph.get(node);

		for (const vertex of vertices) {
			if (vertex === end)
				console.log(
					"bfs from ",
					start,
					" to ",
					end,
					" : ",
					[...visited].join(" "),
					vertex,
					"\n"
				);

			if (!visited.has(vertex)) {
				visited.add(vertex);
				queue.push(vertex);
			}
		}
	}
};

function main() {
	const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

	const routes = [
		["PHX", "LAX"],
		["PHX", "JFK"],
		["JFK", "OKC"],
		["JFK", "HEL"],
		["JFK", "LOS"],
		["MEX", "LAX"],
		["MEX", "BKK"],
		["MEX", "LIM"],
		["MEX", "EZE"],
		["LIM", "BKK"],
	];

	airports.forEach(addNode);
	routes.forEach((route) => addEdge(...route));

	dfs("PHX", "PHX", "BKK");
	bfs("PHX", "BKK");
}

main();

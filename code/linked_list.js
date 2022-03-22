class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	print(current) {
		while (current) {
			console.log(current.value);
			current = current.next;
		}
	}

	insert(value) {
		this.length++;
		let newNode = new Node(value);

		if (this.tail) {
			this.tail.next = newNode;
			this.tail = newNode;
			return newNode;
		}

		this.head = this.tail = newNode;
		return newNode;
	}

	remove() {
		if (this.tail) {
			this.length--;
			const tailNode = this.tail;
			let currentNode = this.head;

			if (currentNode.next)
				while (currentNode.next && currentNode.next != tailNode) {
					currentNode = currentNode.next;
				}
			else {
				this.head = this.tail = null;
				return null;
			}

			let beforeTail = currentNode;
			beforeTail.next = null;
			this.tail = beforeTail;

			return tailNode;
		}
		return undefined;
	}

	insertHead(value) {
		this.length++;
		let newNode = new Node(value);

		if (this.head) {
			newNode.next = this.head;
			this.head = newNode;
			return newNode;
		}

		this.head = this.tail = newNode;
		return newNode;
	}

	removeHead() {
		if (this.head) {
			this.length--;
			const removedNode = this.head;
			this.head = this.head.next;

			if (!this.head) this.tail = null;

			return removedNode;
		}

		return undefined;
	}

	insertIndex(value, index) {
		if (index >= this.length) throw new Error("Insert index out of bounds");

		if (index == 0) return this.insertHead(value);

		let previousNode = null;
		let currentNode = this.head;

		for (let i = 0; i < index; i++) {
			previousNode = currentNode;
			currentNode = currentNode.next;
		}

		const newNode = new Node(value);
		this.length++;

		newNode.next = currentNode;
		previousNode = newNode;
		if (!currentNode) this.tail = previousNode;

		return newNode;
	}

	removeIndex(index) {
		if (index >= this.length) {
			throw new Error("Remove index out of bounds");
		}

		if (index === 0) {
			return this.removeHead();
		}

		let previousNode = null;
		let currentNode = this.head;
		for (let i = 0; i < index; i++) {
			previousNode = currentNode;
			currentNode = currentNode.next;
		}

		previousNode.next = currentNode.next;
		this.length--;

		if (!currentNode.next) this.tail = previousNode;
		return currentNode;
	}
}

function main() {
	const linkedList = new LinkedList();

	// init linked lists
	linkedList.insert(7);
	linkedList.insert(true);
	linkedList.insert(20);

	// remove last node
	linkedList.remove();

	// add head node
	linkedList.insertHead(20);

	// remove head
	linkedList.removeHead();

	// insert at (8,0), (false, 3) => 8 7 true false
	linkedList.insertIndex(8, 0);
	linkedList.insert(false, 3);

	// delete at 3 => 8 7 true
	linkedList.removeIndex(3);
	// linkedList.removeIndex(2);
	// linkedList.removeIndex(1);
	// linkedList.removeIndex(0);

	// print linked list
	linkedList.print(linkedList.head);
}

main();

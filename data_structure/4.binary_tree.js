// strict rule
// + left < root < right
// + can't be duplicated node
// + left and right subtrees also be a binary tree

// Advantages
// + Ideal for storing hierarchical(thứ bậc) relationships
// + Dynamic size
// + Quick at insert and delete operations
// + In a binary search tree, inserted nodes 
//   are sequenced immediately(ngay lập tức).
// + Binary search trees are efficient 
//   at searches; length is only O(height)

// Disadvantages
// + Slow to rearrange nodes
// + Child nodes hold no information 
//   about their parent node
// + Binary search trees are not as fast as 
//   the more complicated hash table
// + Binary search trees can degenerate into 
//   linear search (scanning all elements) 
//   if not implemented with balanced subtrees.

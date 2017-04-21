var Immutable = require('immutable');

const Set= Immutable.Set;

// 1. 建立 Set
const set1 = Set([1, 2, 3]);
console.log("set1：" + set1);
// => Set { 1, 2, 3 }

// 2. 新增元素
const set2 = set1.add(1).add(5);
console.log("set2：" + set2);
// => Set { 1, 2, 3, 5 } 
// 由于 Set 为不能重复集合，故 1 只能出现一次

// 3. 删除元素
const set3 = set1.delete(3);
console.log("set3：" + set3);
// => Set { 1, 2 }

// 4. 取联集
const set4 = Set([2, 3, 4, 5, 6]);
const set5 = set1.union(set4);
console.log("set4：" + set4);
console.log("set5：" + set5);
// => Set { 1, 2, 3, 4, 5, 6 }

// 5. 取交集
const set6 = set1.intersect(set4);
console.log("set6：" + set6);
// => Set { 2, 3 }

// 6. 取差集
const set7 = set1.subtract(set4);
console.log("set7：" + set7);
// => Set { 1 }
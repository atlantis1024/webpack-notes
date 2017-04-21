var Immutable = require('immutable');

const List = Immutable.List;

// 1. 取得 List 长度
const arr1 = List([1, 2, 3]);
console.log("初始化arr1：" + arr1);
console.log("arr1 size：" + arr1.size);
// => 3

// 2. 新增或取代 List 元素内容
// set(index: number, value: T)
// 将 index 位置的元素替换
const arr2 = arr1.set(-1, 7);
console.log("arr2：" + arr2);
// => [1, 2, 7]
const arr3 = arr1.set(4, 0);
console.log("arr3：" + arr3);
// => [1, 2, 3, undefined, 0]

// 3. 删除 List 元素
// delete(index: number)
// 删除 index 位置的元素
const arr4 = arr1.delete(1);
console.log("arr4：" + arr4);
// => [1, 3]

// 4. 插入元素到 List
// insert(index: number, value: T)
// 在 index 位置插入 value
const arr5 = arr1.insert(1, 2);
console.log("arr5：" + arr5);
// => [1, 2, 2, 3]

// 5. 清空 List
// clear()
const arr6 = arr1.clear();
console.log("arr6：" + arr6);
// => []
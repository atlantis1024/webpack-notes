var Immutable = require('immutable');

const Map= Immutable.Map;

// 1. Map 大小
const map1 = Map({ a: 1 });
console.log("map1：" + map1);
console.log("map1.size：" + map1.size);
// => 1

// 2. 新增或取代 Map 元素
// set(key: K, value: V)
const map2 = map1.set('a', 7);
console.log("map2：" + map2);
// => Map { "a": 7 }

// 3. 删除元素
// delete(key: K)
const map3 = map1.delete('a');
console.log("map3：" + map3);
// => Map {}

// 4. 清除 Map 内容
const map4 = map1.clear();
console.log("map4：" + map4);
// => Map {}

// 5. 更新 Map 元素
// update(updater: (value: Map<K, V>) => Map<K, V>)
// update(key: K, updater: (value: V) => V)
// update(key: K, notSetValue: V, updater: (value: V) => V)
const map5 = map1.update('a', () => (7));
console.log("map5：" + map5);
// => Map { "a": 7 }

// 6. 合并 Map 
const map6 = Map({ b: 3 });
const map7 = map1.merge(map6);
console.log("map6：" + map6);
console.log("map7：" + map7);
// => Map { "a": 1, "b": 3 }
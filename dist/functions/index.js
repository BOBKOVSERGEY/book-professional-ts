"use strict";
let log = (message, userId = 'Not signed in') => {
    let time = new Date().toISOString();
    console.log(time, message, userId);
};
function times(f, n) {
    for (let i = 0; i < n; i++) {
        f(i);
    }
}
times(n => console.log(n), 4);
let names = [
    { firstName: 'beth' },
    { firstName: 'caitlyn' },
    { firstName: 'xin' }
];
function map(array, f) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = f(array[i]);
    }
    return result;
}
function mapNode(node, f) {
    return Object.assign(Object.assign({}, node), { value: f(node.value) });
}
let l = { value: 'l' };
let b = { value: 'b', isLeaf: true };
let c = { value: 'c', children: [b] };
let a1 = mapNode(l, _ => _.toUpperCase()); // TreeNode
let b1 = mapNode(b, _ => _.toUpperCase()); // LeafNode
let c1 = mapNode(c, _ => _.toUpperCase()); // InnerNode
//# sourceMappingURL=index.js.map
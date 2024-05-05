"use strict";
let a = [];
a.push(1);
console.log(a);
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function fancyDate() {
    return `${this.getDate()}/${month[this.getMonth()]}/${this.getFullYear()}`;
}
console.log(fancyDate.call(new Date));
//# sourceMappingURL=index.js.map
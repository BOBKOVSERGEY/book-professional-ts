let a : number[] = []
a.push(1);
console.log(a)

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
function fancyDate(this: Date) :string {
    return `${this.getDate()}/${month[this.getMonth()]}/${this.getFullYear()}`
}

console.log(fancyDate.call(new Date))
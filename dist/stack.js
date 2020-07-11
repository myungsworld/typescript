class stack {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        this.data.pop();
    }
}
const numberstack = new stack();
numberstack.push(1);
const stringstack = new stack();
stringstack.push("1");
function firstStackElement(arr) {
    return arr[1];
}
//제네릭은 함수 표현식으로 어떻게 표현함?
// const secondStackElement<T> = (arr: T[]) :T[] =>{
//      return arr[1]
// }
const sample = [1, 2, 3];
firstStackElement(sample);
firstStackElement([1, 2, 3]);
firstStackElement(["1", '2', '3']);
//# sourceMappingURL=stack.js.map
class stack<T> {
    private data : T[] = []

    constructor(){
        
    }

    push(item : T ) : void {
        this.data.push(item);
    }

    pop(){
        this.data.pop();
    }
}

const numberstack = new stack<number>();
numberstack.push(1);

const stringstack = new stack<string>();
stringstack.push("1");

function firstStackElement<T>(arr :T[]) :T {
    return arr[1]
}

//제네릭은 함수 표현식으로 어떻게 표현함?
// const secondStackElement<T> = (arr: T[]) :T[] =>{
//      return arr[1]
// }

const sample = [1,2,3];
firstStackElement<number>(sample);

firstStackElement<number>([1,2,3])
firstStackElement<string>(["1",'2','3'])


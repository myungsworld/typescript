// interface optional property

interface Person {
    name: string;
    [index: string] : string;
}

const person : Person = {
    name: "Song"
}

function hello(p:Person) : void {
    console.log(`안녕하세요 ${p.name} 입니다.`)
}

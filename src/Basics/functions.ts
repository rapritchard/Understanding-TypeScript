function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result)
}

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;

console.log(combineValues(8, 8));

printResult(add(5, 12));

addAndHandle(10, 20, (result) => {
    console.log(result);
})

let appId = 'abc';
const button = document.querySelector('button')!;

function add(n1: number, n2: number) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}

function clickHandler(message: string) {
    console.log('Clicked! ' + message);
}

if (button) {
    button.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
}
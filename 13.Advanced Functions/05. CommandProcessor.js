function solution() {
    let str = '';
    return {
        append: (s) => str += s,
        removeStart: (n) => str = str.substring(n),
        removeEnd: (n) => str = str.substring(0, str.length - n),
        print: () => console.log(str)
    }
}

function solution() {
    let internalStr = '';
    let obj = {
        append(str) { internalStr += str; },
        removeStart(n) { internalStr = internalStr.substring(n); },
        removeEnd(n) { internalStr = internalStr.substring(0, internalStr.length - n); },
        print() { console.log(internalStr) }
    }
    return obj;
}


function solution() {
    let str = '';
    return {
        append(string) {
            return str += string;
        },
        removeStart(n) {
            return str = str.slice(n);
        },
        removeEnd(n) {
            return str = str.slice(0, str.length -n);
        },
        print() {
            return console.log(str);
        }
    };
}

let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();  // loa

let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();  // 34
let s ="";
function printUp(n){
    if(n<10) printUp(n+1);
    s = s+n+" ";
}
printUp(1)
console.log(s);

// Hier ist die detaillierte Konkatenation:

// n = 10: s = "" + 10 + " " → s = "10 "
// n = 9: s = "10 " + 9 + " " → s = "10 9 "
// n = 8: s = "10 9 " + 8 + " " → s = "10 9 8 "
// n = 7: s = "10 9 8 " + 7 + " " → s = "10 9 8 7 "
// n = 6: s = "10 9 8 7 " + 6 + " " → s = "10 9 8 7 6 "
// n = 5: s = "10 9 8 7 6 " + 5 + " " → s = "10 9 8 7 6 5 "
// n = 4: s = "10 9 8 7 6 5 " + 4 + " " → s = "10 9 8 7 6 5 4 "
// n = 3: s = "10 9 8 7 6 5 4 " + 3 + " " → s = "10 9 8 7 6 5 4 3 "
// n = 2: s = "10 9 8 7 6 5 4 3 " + 2 + " " → s = "10 9 8 7 6 5 4 3 2 "
// n = 1: s = "10 9 8 7 6 5 4 3 2 " + 1 + " " → s = "10 9 8 7 6 5 4 3 2 1 "

const printUp2 = (n) => {
    
    if(n<10) {
        return n + " " + printUp2(n+1)
    }
    return n+ " "
}
const result = printUp2(1)
console.log(result);

function sum(n){
    let result = 0;
    if(n<5){
        result = sum(n+1)
    }
    return n+result
}
const result2 = sum(1)
console.log(result2);
function square(num: number):number {
    return num*num;
}
console.log(square(3));

const squareFE=function(number:number):number {
    return number*number;
}
console.log(squareFE(2));

function add(a: number): Function {
    return function(b: number): number {
        return a+b ;
    }
}
const addWith5 = add(2);
document.body.innerHTML=addWith5(5);
document.body.innerHTML=addWith5(3);
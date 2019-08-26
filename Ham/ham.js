function square(num) {
    return num * num;
}
console.log(square(3));
var squareFE = function (number) {
    return number * number;
};
console.log(squareFE(2));
function add(a) {
    return function (b) {
        return a + b;
    };
}
var addWith5 = add(2);
document.body.innerHTML = addWith5(5);
document.body.innerHTML = addWith5(3);

const add = (a,b) => {
    return a + b;
}
const sub = (a,b) => {
    return a - b;
}
const mul = (a,b) => {
    return a * b;
}
const div = (a,b) => {
    return a / b;
}
const per = (a,b) => {
    return (a*100)/(a+b);
}

module.exports = {add,div,sub,mul,per}
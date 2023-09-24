console.log("hello world");
const add = (a,b) => {
    return a + b;
}
const name = () => {
    return "here is my first nodejs module"
}
module.exports.add = add;
module.exports.name = name;
// Two types of scopes are global and block scope
// The varibles contained inside the {} are aplicable only to block scope like
const a = (sid)=>{
    let b = "hey"
    console.log(sid, b)
}
a()
console.log(a)
//In this a is global scope it is applicable for page but b is block scope it is appliable only for block scope
console.log("Starting app.js")
const fs = require("fs")
const os = require("os")
const notes = require("./notes.js");

/*fs.appendFile("greeting.txt", "Hello world!", function (err) {
    if (err) {
        console.log("Unable to write file")
    }
} );*/

// fs.appendFileSync("greet.text", "hello, world")

let user = os.userInfo()
fs.appendFileSync("hello.txt", "hello " + user.username + "!")


// fs.appendFileSync("node.js", "console.log('Starting notes.js')")


// fs.appendFileSync("hello1.txt", `hello, how are you ${user.username}? I hope you are good?`)

// fs.appendFileSync("greettings.txt", `Hello ${user.username}! You are ${notes.age}.`)

// let res = notes.addNote();
// console.log(res)

let sum = notes.add(9, -2)
const _ = require("lodash")

console.log(_.isString(true))
console.log(_.isString("Lokson"))

let filteredArray = _.uniq(["lokson", 1, "lokson", 1, 2, 3, 4])
console.log(filteredArray)

console.log("Result: "+ sum)
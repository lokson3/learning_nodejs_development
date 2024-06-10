
const fs = require("fs")
const os = require("os")

/*fs.appendFile("greeting.txt", "Hello world!", function (err) {
    if (err) {
        console.log("Unable to write file")
    }
} );*/

// fs.appendFileSync("greet.text", "hello, world")

let user = os.userInfo()
fs.appendFileSync("hello.txt", "hello " + user.username + "!")
console.log("Starting app!");


fs.appendFileSync("hello1.txt", `hello, how are you ${user.username}? I hope you are good?`)

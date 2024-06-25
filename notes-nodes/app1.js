// console.log("Starting App1.js")

const fs = require("fs")
const os = require("os")
const _ = require("lodash")
// const notes = require("./notes.js")

console.log(process.argv)

let command = process.argv[1]

console.log("commmnd: ", command)

if (command === "add") {
    console.log("Adding new note")
} else if ( command === "list") {
    console.log("Listing all notes")
}else {
    console.log("Command not recognized")
}
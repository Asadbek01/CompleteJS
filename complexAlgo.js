"use strict"

// const a = "123test"
// const b = parseInt(a)
// console.log(typeof b)
// console.log(b)

// Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".
//  Javascript optional chaining

const person = {
    fullName: {
        name: "Asadbek",
        surname: "Azamjonov"
    }
}
console.log(person.mc?.name)

const arrayOfNumbers = [50, 20 , 54, 30]
console.log(arrayOfNumbers.reduce((acc, cur)=>{
    return acc + cur

}))
// 
function helloName(name){
    let greeting = "Hello "
    let nameAndGreeting = greeting.concat(name,"!")
    return nameAndGreeting
  }
  console.log(helloName("Asadbek"))
  
//   Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".
  function makeAbba(a, b){
    const x2 = a+b
    const reapet = b+a
    const result = x2.concat(reapet)
    return result
  }
  console.log(makeAbba("Hi" , "Bye"))

//   The web is built with HTML strings like "<i>Yay</i>" which draws Yay as italic text. In this example, the "i" tag makes <i> and </i> which surround the word
//  "Yay". Given tag and word strings, create the HTML string with tags around the word, e.g. "<i>Yay</i>".
function makeTags(tag, word){
    const tags = `<${tag}>${word}</${tag}>`
    return tags
  }
  console.log(makeTags("span", "hi"))
  
//   
function extraEnd(str){
    const res = str.substring(str.length -2)
    return res+ res +res
  }
  console.log(extraEnd("Hello"))
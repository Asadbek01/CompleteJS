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
  
//   Given a string, return a new string made of 3 copies of the 
// last 2 chars of the original string. The string length will be at least 2.
function extraEnd(str){
    const res = str.substring(str.length -2)
    return res+ res +res
  }
  console.log(extraEnd("Hello"))
//   

function firstTwo(str){
    const res = str.substring(0,2)
    
    return res
  }
  console.log(firstTwo("Hello"))
//Given a string, return a version without the first and last char, so 
// "Hello" yields "ell". The string length will be at least 2   
function firstLast(str){
    const res = str.substring(str.length -1, 1)
    return res
  }
  console.log(firstLast("Hello"))
// Given 2 strings, a and b, return a string of the form short+long+short, with theshorter
//  string on the outside and the longer string on the inside.
//  The strings will notbe the same length, but they may be empty (length 0).
function comboString(a, b){
    if (a.length < b.length){
        return  a+b+a
    }else{
         return b+a+b
    }

  }
  console.log(comboString("Hi" , "Hello"))

// 

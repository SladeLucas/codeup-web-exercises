"use strict";
console.log("Hello from external js!");
alert("Welcome to my Website!");
let favColor = prompt("What is your favorite color?");
alert("Awesome, my favorite color is " + favColor + " too.")
let rentedMovies = prompt("how many movies did you rent?")
let daysRented = prompt("How many days did you have movies rented?")
let priceOfRentals = (daysRented * 3)
alert("That comes out to " + priceOfRentals + "$")
alert("I hear you are a contractor, lets calculate your pay!")
let firstCompany = prompt("What is the first company you work with?")
let secondCompany = prompt("And the second company?")
let thirdCompany = prompt("finally the third?")
let firstPay = prompt("How much does " + firstCompany + " pay you per hour?")
let secondPay = prompt("How much does " + secondCompany + " pay you per hour?")
let thirdPay = prompt("How much does " + thirdCompany + " pay you per hour?")
let firstTotal = prompt("How many hours at " + firstCompany + "?") * firstPay
let secondTotal = prompt("How many hours at " + secondCompany + "?") * secondPay
let thirdTotal = prompt("Finally! How many at " + thirdCompany + "?") * thirdPay
let totalPay = firstTotal + secondTotal + thirdTotal
alert("You get paid " + totalPay + "$!")
let canEnroll = prompt("If you have room in your schedule, and if the class has room please type 'Yes'. If you do not please type 'No'")
alert(canEnroll + "! To entering this class.")
alert("Now lets buy stuff!")
let purchasedItem = prompt("How many items did you buy?")
let premiumMem = prompt("Are you a premium member?")
alert("You purchased " + purchasedItem + " Items and you said " + premiumMem + " to being a member. Thank you! But the product offer is expired.")







// Question # 1
document.write("<h1>Question # 1</h1>")


var num = 3.45214
var round = Math.round(num)
var floor = Math.floor(num)
var ceil = Math.ceil(num)

document.write("Number :" +  num +" " + "<br>")
document.write("round off Value:" +" " + round + "<br>")
document.write("floor off Value:" +" " + floor + "<br>")
document.write("ceil off Value:" +" " + ceil + "<br>")


// Question # 2
document.write("<h1>Question # 2</h1>")

var  num2 = -2.673
var round2 = Math.round(num2)
var floor2 = Math.floor(num2)
var ceil2 =  Math.ceil(num2)

document.write("Number :" + num2 + "<br>")
document.write("Round off Value:" +" " +round2 + "<br>")
document.write("Floor off Value:" +" " +floor2 + "<br>")
document.write("Ceil off Value:" +" " +ceil2 + "<br>")


// Question # 3
document.write("<h1>Question # 3</h1>")

var num= prompt("place Enter Negative Value");
var num2 = prompt("place Enter Positive Value");
document.write("The absolute value of  "+ num + " is......! " + Math.abs(num) + "<br>" )
document.write("The absolute value of  "+ num2 + " is......! " + Math.abs(num2) )


// Question # 4
document.write("<h1>Question # 4</h1>")

var random = Math.random()*6
var ceil = Math.ceil(random)
document.write("Random Dice Value :" +" "+ ceil  )


// Question # 5
document.write("<h1>Question # 5</h1>")

var randNum2 = Math.random()*2;
var randNum2Rounded = Math.round(randNum2);
if (randNum2Rounded === 1) {
    document.write("Random Coin Value: 2 Heads" + "<br>");
} else {
    document.write("Random Coin Value: 1 Tales");
}

var randNum = Math.random()*1;
var randNumRounded = Math.round(randNum);
if (randNumRounded === 1) {
    document.write("Random Coin Value: 2 Heads" + "<br>" );
} else {
    document.write("Random Coin Value: 1 Tales");
}

// Question # 6
document.write("<h1>Question # 6</h1>")


 var randomNumber = Math.random()
 var random = randomNumber * 100 + 1
 document.write("random number between 1 and 100 is :" + " " + random.toFixed(0))



// Question # 7
document.write("<h1>Question # 7</h1>")

var user = prompt("Place Enter your Weight.")

var convert = parseFloat(user)

document.write("The Of User Weight is "+ " "  + convert +" "+ "Kilograms")


// Question # 08
document.write("<h1>Question # 8</h1>")

var user = prompt( "Place input a number between 1 and 10")

var secretNumber = 6
var  randomNumber = user

if (user == secretNumber ){
    alert("congratulate Your Number is Match")
    document.write("congratulate Your Number is Match")
} else{
    alert("Try again!")
    document.write("Try again!")
}
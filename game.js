/** This is the function connected to my bottom button on the page. It reads "CRAPS rules" and the alert text describes the rules of the game. Also learned that a function can't have spaces!*/
function newAlert()
{
    alert("If the numbers' sum is 7 or 11, CRAPS! You lose. If the numbers are double AND equal, then you win! If the numbers are anything other, try again. Have fun!")

}
/**This is my second button with the radomization coding as well inner HTML */
function update()
/**The variables give the numbers their randomization. Theres two for number one and number two; Math.ceil means ceiling, which tells the code to use round numbers. Math.random is where it tells the code to randomize. The *6 gives the randomization a limit of 0-6 */
{   var num1  = Math.ceil(Math.random() *6);
    var num2  = Math.ceil(Math.random() *6);
    var sum = num1 + num2;

   /**the "if" function gives the first set of rules for the coding. This one says that if the sum of num1 and num2 is 7 or 11 then to give the message that the user lost that round */ 
    if (sum == 7 || sum == 11)
    {
        document.getElementById("result").innerHTML = "CRAPS! you lose..."
    }
    /**"else if" is the second limitation. This portion says that if the number one is even (divisible by two) and the two variables are equal, then to give the message letting the user know they won that round! */
    else if (num1 % 2 == 0 && num1 == num2)
    {
        document.getElementById("result").innerHTML = "double and equal - you win"
    }
    /**"else" covers the rest of the possibilities, anything that isnt covered by if and else if gives the message to try again */
    else
    {
    /**this code lets JS have access to only yhe specific part of the HTML that has the "result", and allows it to change teh text depending on the variables. Also known as Inner HTML */
        document.getElementById("result").innerHTML = "try again"
    }
    /**This bit connects the num1 and num2 variables "placeholders" from the HTML. CRAPS is a dice game, so I changed the outputs to read dice one and dice two! :) */
    document.getElementById("num1").innerHTML = "dice one = " + num1;
    document.getElementById("num2").innerHTML = "dice two = " + num2;
}

// Stephani Lucas
//Below is my function strings(). This function happens when the user presses submit 

function strings()
{
    //This portion gets the value of the user input into the first string
    var string1 = document.getElementById("firststring").value;
    //This updates the portion of HTML to show the user what their input was
    document.getElementById("updatedstring").innerHTML = "Your input:  "  + string1;

    // this is the portion where the input is flipped around so it can be verified to be a palindrome or not the var ref = string1; tells Java what variable to use
    var ref = string1;
    //var splitstring is string1 taken and then spaced out. Ex. s t e p h
    var splitstring = string1.split("");
    //var reversearray is the splitstring then taken and flipped. Ex. h p e t s
    var reversearray = splitstring.reverse(""); 
    //var join array is the reversal spaced back together. Ex. hpets
    var joinarray = reversearray.join("");

    //This portion of the code verifies wether or not the input is a palindrome. If the new flipped version matches the original then the user is given an alert confirming that it is a palindrome
        if (joinarray == string1)
         {
         alert("palindrome!")
         }
    //This portion of code gives the user an alert saying that the input is not a palindrome if the new joinarray isn't the same as the original string
        else if(joinarray != string1)
        {
            alert("Not a palindrome, try again!")
        }

    document.getElementById("Updated string").innerHTML = "reverse of string = " + joinArray

}
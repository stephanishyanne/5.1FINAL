function verify()
{
    var name1 = document.getElementById("firstname").value;
    var name2 = document.getElementById("lastname").value;
    var zipcode = document.getElementById("zipcode").value;

    var name3 = name1 + name2;
    document.getElementById("updatedname").innerHTML = "Your input:  "  + name3 + zipcode;


    if(name3.length < 20 && zipcode.length == 5) 
    {
        alert( "Your secret message: you are so loved <3");
    }
    
    else if(name3.length > 20 || zipcode.length > 5 || zipcode.length < 5) 
         {
         alert("check your inputs and try again!");
         }


}
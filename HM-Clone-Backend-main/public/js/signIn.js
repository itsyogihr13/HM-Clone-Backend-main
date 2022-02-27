var userDetails = JSON.parse(localStorage.getItem("data")) || [];
 
function signIn()
{
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

   for(var i = 0 ; i < userDetails.length; i++)
   {
       if(userDetails[i].email == email && userDetails[i].password == password)
       {
           localStorage.setItem("currentUser",JSON.stringify(userDetails[i]));
           var bag = "userDetails";
       }
   }

   if (bag === "userDetails")
   {
       alert("Login Successfully");
       window.location.href = "homepage.html";
   }
   else
   {
       alert("Please enter valid detalis (Or) Sign Up")
   }

}

function becomeMember()
{
  window.open("/signUp");
}
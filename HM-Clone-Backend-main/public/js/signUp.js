let count = 0;
function getMoreData()
{
      count++;
      if(count%2 == 1)
      {
          document.getElementById("disContent").style.display ="block"
      }
      else {
        document.getElementById("disContent").style.display ="none"
      }
    //  document.getElementById("disContent").style.display ="none"
  }

  var userData = JSON.parse(localStorage.getItem("data")) || [];

function member(){
    // console.log("account created")

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var lastName = document.getElementById("lastName").value;
    var date = document.getElementById("date").value;

    if(date ==="" || email === "" || pass ===""){
        var bag = "empty";

        alert("Please fill the Details")
    }
    else {
        alert("Account Created Successfully")
    }

    var users = {
        name : name,
        email: email,
        password :pass,
    };

    if(bag !== "empty")
    {
        userData.push(users);
        console.log(userData);

        localStorage.setItem("data",JSON.stringify(userData));
        // alert("Account Created Successfully");
        window.location.href = "signIn.html";
    }

}
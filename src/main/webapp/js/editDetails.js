
 // $("#submitBtn").on("click",function(){
   var ck = document.cookie;
   console.log(ck)
   if(ck!=""){
   var name = $('#changeName').val();
   var email = $('#changeEmail').val();
   var phone = $('#changePhone').val();

   var loginObj = {"Email" : email, "Name" : name, "Phone":phone,"id":document.cookie}
   $.ajax({
     type: "POST",
     url: "editForm",
     data: loginObj,
     success: function(editResponse) {
     console.log("Success");
//      var resp = JSON.parse(response);
//         if(resp.role=="Player")
//           window.location.replace("afterLogin.html");
//         else if(resp.role=="TeamManager")
//           window.location.replace("player.html");

     },
     error: function(error) {
            alert("InCorrect Credentials");
     }
   });
   })
}
else{
alert("Login")
}
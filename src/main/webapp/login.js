//$(document).ready(function(){
//$("#loginbtn").on("click", function(){
//console.log("hi");
//var email = $('#Email').val();
//var password = $('#pwd').val();
//$.get('log', {
//Email : email,
//pwd : password
//}, function(responseText) {
//if(responseText=="Success")
//window.location.replace("loginplayer.html");
//else
//alert(responseText);
//});
//});


$(document).ready(function(){
  $("#loginBtn").on("click",function(){

   var email = $('#Email').val();
   var password = $('#pwd').val();
        $.get('login', {
                Email : email,
                pwd : password
        }, function(responseText) {
          alert(responseText);
                    if(responseText=="Failure")
                    alert("InCorrect Credentials");
                else{
                alert("Correct Credentials");
                window.location.replace("player.html")}
                SetUi(responseText);


                    });
        });
   });


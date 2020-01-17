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

   var loginObj = {"Email" : email, "pwd" : password}
   $.ajax({
     type: "POST",
     url: "login",
     data: loginObj,
     success: function(response) {


            console.log("test:"+document.cookie);
           window.location.replace("player.html");
//          player(PlayerLoginInfo)
//          window.location.replace("player.html");
     },
     error: function(error) {
            alert("InCorrect Credentials");
     }
   });
   })
   })
/*
function player(PlayerLoginInfo) {
       //

       console.log(PlayerLoginInfo);

                window.location.replace("player.html");
                console.log("hi")
                const main = document.getElementById('LoginPlayerDiv');

               const profileCard = document.createElement('div');
               profileCard.setAttribute('class', 'profileCard');


               const card = document.createElement('div');
               card.setAttribute('class', 'container');
               console.log(profileCard)

             // console.log(main)

               h4 = AddName(PlayerLoginInfo);

               //p1 = addTeamName(data);

               p = AddEmail(PlayerLoginInfo);

              // Phone = AddPhone(data[i]);

              // Gender = addSkill(data[i]);

               contentAppend(main, profileCard, card, h4, p);


      }

   function AddName(PlayerLoginInfo) {
       const h4 = document.createElement('h4');
       h4.setAttribute('class','name')
       h4.textContent = PlayerLoginInfo.name;
       console.log(h4)
       return h4;

   }

   function AddEmail(PlayerLoginInfo) {

       const p = document.createElement('p');
       p.setAttribute('class', 'email')
       p.textContent = "E-mail: " + PlayerLoginInfo.email;
       console.log(p)
       return p;
   }

   function contentAppend(main, profileCard, card, h4, p) {
       card.appendChild(h4);
       card.appendChild(p);
       profileCard.appendChild(card);

       main.appendChild(profileCard);

   }*/

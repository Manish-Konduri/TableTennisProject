
$(document).ready(function(){
$.post('user', {
 email:document.cookie
}, function(response) {
console.log(response);
var PlayerLoginInfo = JSON.parse(response);
player(PlayerLoginInfo);
});

});

function player(PlayerLoginInfo) {
       // window.location.replace("player.html");

       console.log(PlayerLoginInfo);
       const main = document.getElementById('LoginPlayerDiv');


               const profileCard = document.createElement('div');
               profileCard.setAttribute('class', 'profileCard');


               const card = document.createElement('div');
               card.setAttribute('class', 'container');
               console.log(profileCard)

               //console.log(app)

               h4 = AddName(PlayerLoginInfo);

               //p1 = addTeamName(data);

               p = AddEmail(PlayerLoginInfo);

              // Phone = AddPhone(data[i]);

              // Gender = addSkill(data[i]);

               contentAppend(main, profileCard, card, h4, p);


      }

   function AddName(q) {
       const h4 = document.createElement('h4');
       h4.setAttribute('class','name')
       h4.textContent = q.name;
       console.log(h4)
       return h4;

   }

   function AddEmail(q) {

       const p = document.createElement('p');
       p.setAttribute('class', 'EMAIL')
       p.textContent = "E-mail: " + q.email;
       console.log(p)
       return p;
   }

   function contentAppend(main, profileCard, card, h4, p) {
       card.appendChild(h4);
       card.appendChild(p);
       profileCard.appendChild(card);
       main.appendChild(profileCard);

   }
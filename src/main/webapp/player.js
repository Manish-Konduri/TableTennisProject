

   function SetUi(PlayerLoginInfo) {
       // window.location.replace("player.html");
       var PlayerLoginInfo = JSON.parse(responseText);
                       SetUi(PlayerLoginInfo);
                        console.log(PlayerLoginInfo);
       console.log(PlayerLoginInfo);
       const app = document.getElementById('LoginPlayerDiv');


               const profileCard = document.createElement('div');
               profileCard.setAttribute('class', 'profileCard');


               const card = document.createElement('div');
               card.setAttribute('class', 'container');
               console.log(profileCard)

               console.log(app)

               h4 = AddName(PlayerLoginInfo);

               //p1 = addTeamName(data);

               p = AddEmail(PlayerLoginInfo);

              // Phone = AddPhone(data[i]);

              // Gender = addSkill(data[i]);

               contentAppend(app, profileCard, card, h4, p);


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

   function contentAppend(app, profileCard, card, h4, p) {
       card.appendChild(h4);
       card.appendChild(p);
       profileCard.appendChild(card);
       app.appendChild(profileCard);

   }

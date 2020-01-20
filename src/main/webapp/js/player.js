
$(document).ready(function () {
    $.post('user', {
        email: document.cookie
    }, function (response) {

        var PlayerLoginInfo = JSON.parse(response);
        console.log(PlayerLoginInfo.role);
        if (PlayerLoginInfo.role == "Player")
        {
            player(PlayerLoginInfo);
            console.log(PlayerLoginInfo.role);
        }
        hi()
    });

});

function player(PlayerLoginInfo) {
    // window.location.replace("player.html");

    console.log(PlayerLoginInfo);
    const main = document.getElementById('main');
    console.log(main)

   const template=`
   
  <div id="navbar">
  <button class="openbtn" onclick="openNav()">&#9776; </button>  
      <a href="afterLogin.html"><i class="fa fa-fw fa-home"></i>Home</a>
      <a href="Points_table">Points Table</a>
      <a href="Schedule">Schedule</a>
      <a href="Notifiations">Notifications</a>
      <a href="Rule Book">Rule Book</a>
      <a href="playercontent.html">Participants</a>
  </div>
  <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
      <a href="Services"><i class="fa fa-fw fa-wrench"></i> Services</a>  
      <a onclick="displayPlayerCard()"><i class="fa fa-fw fa-user"></i> Profile</a>
      <a href="Contact"><i class="fa fa-fw fa-envelope"></i> Contact</a>
      <a href="About"><i class="fa fa-fw fa-info-circle"></i>&nbsp;About</a>
  </div>`
  
   const profileCard=`<div id = "profileCard">
                                    <div id ="profileImage">
                                    </div>
                                    <div id="formDiv">

                                        <form>
                                            <label style="color:aliceblue"><b>Name:</b></label>&nbsp;&nbsp;&nbsp;
                                            <input id = "changeName" type="text" placeholder="${PlayerLoginInfo.name}" name="uname" disabled><br><br>
                                            <label style="color:aliceblue" ><b>Email:</b></label>&nbsp;&nbsp;&nbsp;
                                            <input id = "changeEmail" type="text" placeholder="${PlayerLoginInfo.email}" name="uname" disabled><br><br>
                                            <label style="color:aliceblue" ><b>Skill</b></label>&nbsp;&nbsp;&nbsp;
                                            <input id = "changeSkill" type="radio" ><input type="radio" ><input type="radio" ><input type="radio" ><input type="radio" ><br><br><br>
                                            <label style="color:aliceblue" ><b>Phone</b></label>&nbsp;&nbsp;&nbsp;
                                            <input id = "changePhone" type="text" placeholder="${PlayerLoginInfo.phone}" name="uname" disabled>
                                        </form>
                                        <button type="button" onclick= "Edit()">Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <button id ="submitBtn" type="submit" onclick="hidePlayerCard()" disabled>Submit</button>
                                    </div>
                                </div>`
        
        $("#main").append($.parseHTML(template))
        $("#Profile").append($.parseHTML(profileCard))
    
}


function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}
var navbar;//----------------------
var sticky;//----------------------
window.onscroll = function() {myFunction(sticky)};

function hi(){
    navbar = document.getElementById("navbar");
    sticky = navbar.offsetTop;
}



function myFunction(sticky) {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    }
    else {
        navbar.classList.remove("sticky");
    }
}
function Edit(){
    $( "#changeName" ).prop( "disabled", false );
    $( "#submit" ).prop( "disabled", false );
    $( "#changeName" ).prop( "placeholder", "Enter Name" );
    $( "#changeEmail" ).prop( "disabled", false );
    $( "#changeEmail" ).prop( "required", true );
    $( "#changeEmail" ).prop( "placeholder","Enter Email" );
    $( "#changePhone" ).prop( "disabled", false );
    $( "#changeEmail" ).prop( "required", true );
    $( "#changePhone" ).prop( "placeholder", "Enter Phone" );
    $( "#changeName" ).focus()

}

function displayPlayerCard()
{
    $("#profileCard").show();
}
function hidePlayerCard()
{
    $("#profileCard").hide();
}


// const profileCard = document.createElement('div');
// profileCard.setAttribute('class', 'profileCard
// const card = document.createElement('div');
//     card.setAttribute('class', 'container');
//     console.log(profileCard)

//     //console.log(app)

//     h4 = AddName(PlayerLoginInfo);

//     //p1 = addTeamName(data);

//     p = AddEmail(PlayerLoginInfo);

//     // Phone = AddPhone(data[i]);

//     // Gender = addSkill(data[i]);

//     contentAppend(main, profileCard, card, h4, p);


// }

// function AddName(q) {
//     const h4 = document.createElement('h4');
//     h4.setAttribute('class', 'name')
//     h4.textContent = q.name;
//     console.log(h4)
//     return h4;

// }

// function AddEmail(q) {

//     const p = document.createElement('p');
//     p.setAttribute('class', 'EMAIL')
//     p.textContent = "E-mail: " + q.email;
//     console.log(p)
//     return p;
// }

// function contentAppend(main, profileCard, card, h4, p) {
//     card.appendChild(h4);
//     card.appendChild(p);
//     profileCard.appendChild(card);
//     main.appendChild(profileCard);

// }
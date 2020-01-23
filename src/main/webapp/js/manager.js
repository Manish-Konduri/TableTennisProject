function openCreateTournamentBox() {
    $("#openCreateTournamentBox").show();
}

function createTournament() {
    var TournamentName = $('#tournamentName').val();
    var Sets = $('#Sets').val();
    var PlayerCount = $('#playerCount').val();

    var loginObj = { "Tournament": TournamentName, "sets": Sets, "playerscount": PlayerCount, "Id": document.cookie }
    console.log(loginObj)
    $.ajax({
        type: "POST",
        url: "managerLogin",
        data: loginObj
    })
    $("#viewTournament").prop("disabled", false);
}
function viewTournament() {

    var loginObj = { "Id": document.cookie }
    console.log(loginObj)
    $.ajax({
        type: "GET",
        url: "managerLogin",
        data: loginObj,
        success: function (response) {
            var resp = JSON.parse(response);
            console.log(resp);
            showTournament(resp);


        },
        error: function (error) {
            alert("InCorrect Id");
        }
    })

}
function showTournament(resp) {
    for (var i = 0; i < resp.length; i++) {
        const showTournament = ` <div class="showTournaments">
                                        <div>
                                            <div id="tName${i}">
                                                ${resp[i]}
                                                <input id="roundNo${i}" type="text" name="RoundNo">
                                                <button id="viewTournamentDetails${i}" onclick="viewTournamentDetails('${resp[i]}',${i})">View Details</button>
                                                <div id="ExtraDetails${i}"> </div> 
                                            </div>
                                              
                                        </div>
                                    </div>`
        $("#openViewTournamentBox").append($.parseHTML(showTournament))
    }
    $("#viewTournament").prop("disabled", true);
}

function viewTournamentDetails(resp, i) {
    var TournamentNames = resp;
    var roundNo = $('#roundNo' + String(i)).val();
    console.log(roundNo)
    var loginObj = { "Tournament": TournamentNames, "Id": document.cookie, "RoundNum": roundNo }
    console.log(loginObj)
    $.ajax({
        type: "GET",
        url: "Schedule",
        data: loginObj,
        success: function (response) {
            var resp = JSON.parse(response);
            console.log(resp);
            viewExtraDetails(resp, i);


        },
        error: function (error) {
            alert("InCorrect Id");
        }
    })
}
function viewExtraDetails(resp,i) {
    console.log(resp[0].player1)
    console.log(i)
    const extraDetails = ` <div> <input type="number" id="MatchNum${i}" >(${resp,i})<button onclick="selectMatch(${resp[i].player1},${resp[i].player2})">Select Match</button><div id="a${i}"></div></div>`
    $("#ExtraDetails"+ String(i)).append($.parseHTML(extraDetails))
}

function selectMatch(resp1,resp2){
    // console.log(resp)
    //var a = document.getElementById("MatchNum"+String(i)).value;
    const appending = `<span id="playerA">Player: ${resp1}</span> <span id="playerB">Player: ${resp2}</span> `
    $("#a"+ String(i)).append($.parseHTML(appending))
} 
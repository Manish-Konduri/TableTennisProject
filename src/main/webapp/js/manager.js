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
    for (var i = 1; i <= resp.length; i++) {
        const showTournament = ` <div class="showTournaments">
                                        <div>
                                            <div id="tName${i}">
                                                ${resp[i]}
                                                <input id="roundNo${i}" type="text" name="RoundNo">
                                                <button id="viewTournamentDetails${i}" onclick="viewTournamentDetails('${resp[i]}',${i})">View Details</button>
                                                <button onclick="selectMatch()">Select Match</button>
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
    alert(roundNo)
    var loginObj = { "Tournament": TournamentNames, "Id": document.cookie, "RoundNum": roundNo }
    console.log(loginObj)
    $.ajax({
        type: "GET",
        url: "Schedule",
        data: loginObj,
        success: function (response) {
            var res = JSON.parse(response);
            console.log(res);
            viewExtraDetails(res, i);


        },
        error: function (error) {
            alert("InCorrect Id");
        }
    })
}
function viewExtraDetails(res,i) {
    console.log(res)
    console.log(i)
    const extraDetails = ` <div> <input type="number" id="MatchNum${i}" ><div id="a${i}"></div></div>`
    $("#ExtraDetails"+ String(i)).append($.parseHTML(extraDetails))


}
//
//function selectMatch(resp,i){
//     console.log(resp)
//     console.log("MatchNum"+String(i))
//    var a = document.getElementById("MatchNum"+String(i));
//    alert(a);
//    const appending = `<span id="playerA">PlayerA:${resp[a].player1} </span> <span id="playerB">PlayerB: ${resp[a].player2}</span> `
//    $("#a"+ String(i)).append($.parseHTML(appending))
//}
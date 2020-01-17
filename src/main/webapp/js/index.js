function showSignupDialog(e) {
    e.stopPropagation();
    $('#signup').show();
}

function hideSignupDialog(e) {
    if ($("#signup:visible").length) {
        $("#signup").hide();
    }
}

$(document).ready(function() {
        window.onclick = function (e) {
            hideSignupDialog(e);
        }

        $("#signupBtn").click(function(e) {
            showSignupDialog(e)
        })
});

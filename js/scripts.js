$(document).ready(function() {
    $("#footer").mouseover(function() {
        $("#footer").fadeTo(100, 1);
    }).mouseout(function() {
        $("#footer").fadeTo(100, 0.20);
    });
});

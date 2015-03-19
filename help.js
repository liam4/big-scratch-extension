function mkSidebar(which) {
    var text = "" +
        "<span " + ((which === "index") ? "id=selected" : "") + "><a href='base.html'>Index</a></span>" +
        " <span " + ((which === "data") ? "id='selected'" : "") + "><a href='data.html'>Data</a></span>" +
        " <span " + ((which === "logic") ? "id='selected'" : "") + "><a href='logic.html'>Logic</a></span>" +
        " <span " + ((which === "match") ? "id='selected'" : "") + "><a href='math.html'>Math</a></span>";
    document.getElementById("sidebar").innerHTML = text;
    document.getElementById("sidebar").style.left = "-45px";
    document.getElementById("sidebar").style.top = "150px";
};

function mkLayout(which) {
    // We need to use an event because inline JavaScript will not
    // be executed due to security issues in Chrome Extensions.
    document.addEventListener("DOMContentLoaded", function() {
        mkSidebar(which);
        //window.alert("Hello, world!");
    });
};

mkLayout(document.getElementsByTagName("html")[0].getAttribute("data-page-id"));
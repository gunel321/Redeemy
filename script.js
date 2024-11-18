var textPlace = document.getElementById("background_image");

body = document.getElementsByTagName("body")

console.log(body.scrollTop);
body.onscroll = function(e) {
    if (this.scrollTop > 100) {
        textPlace.addClass("fix-search");
        console.log("över 100");
    } else {
        textPlace.removeClass("fix-search");
        console.log("under 100");
    }
};
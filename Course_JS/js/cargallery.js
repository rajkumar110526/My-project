function upDate(previewPic) {
console.log("upDate function triggered");

document.getElementById("image").style.backgroundImage =
    "url('" + previewPic.src + "')";

document.getElementById("image").innerHTML =
    previewPic.alt;


}

function unDo() {
console.log("unDo function triggered");

document.getElementById("image").style.backgroundImage = "none";

document.getElementById("image").innerHTML =
    "Hover over an image below to display here.";


}

function addTabIndex() {
console.log("addTabIndex function triggered");

var images = document.getElementsByClassName("preview");

for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");

    images[i].addEventListener("focus", function() {
        upDate(this);
    });

    images[i].addEventListener("blur", function() {
        unDo();
    });
}


}

window.addEventListener("load", addTabIndex);

/* Name this external file gallery.js */

function upDate(previewPic) {
    // Change the background image
    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";

    // Change the text
    document.getElementById("image").innerHTML =
        previewPic.alt;
}

function unDo() {
    // Remove the preview image
    document.getElementById("image").style.backgroundImage = "none";

    // Restore the original text
    document.getElementById("image").innerHTML =
        "Hover over an image below to display here.";
}

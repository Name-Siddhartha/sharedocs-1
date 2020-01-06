function chooseColor() {
    var mycolor = document.getElementById("myColor").value;
    document.execCommand("foreColor", false, mycolor);
}

function changeFont() {
    var myFont = document.getElementById("input-font").value;
    document.execCommand("fontName", false, myFont);
}

function changeSize() {
    var mysize = document.getElementById("fontSize").value;
    document.execCommand("fontSize", false, mysize);
}

function f(){
    var x=document.getElementById("editor1").innerHTML;
    document.getElementById("h").value=x;
}
function checkDiv() {
    var editorText = document.getElementById("editor1").innerHTML;
    if (editorText === "") {
        document.getElementById("editor1").style.border = "5px solid red";
    }
}

function removeBorder() {
    document.getElementById("editor1").style.border = "1px solid transparent";
}

function viewer() {
    alert("Copied text selection: " + window.getSelection().anchorNode.data.substring(window.getSelection().anchorOffset, window.getSelection().extentOffset));
}

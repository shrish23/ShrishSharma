// set up text to print, each item in array is new line
var aText = new Array(
    "Hi, I'm Shrish Sharma! I'm a <b>Data Science</b> professional with a passion for using data to solve complex business challenges. I have a strong academic foundation in data science and computer engineering, as well as hands-on experience in various industries.</br> I'm eager to contribute my skills and expertise to organizations that are looking to harness the power of data to achieve their goals.</br></br> I'd love to chat with you about how I can help your organization succeed. Please feel free to contact me to schedule a time to talk."
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}


typewriter();

// var beepOne = $("#beep")[0];
// $(".loader")
//     .mouseenter(function () {
//         beepOne.play();
//     });

//POPUP EVENT
let popup = document.getElementById("popup");
function openPopup() {
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
}

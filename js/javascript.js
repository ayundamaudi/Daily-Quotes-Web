var slideIndex = 0;
var myArray = [];

// <!-- fetch-data --> 
fetch('https://programming-quotes-api.herokuapp.com/quotes/lang/en')
    .then(response => response.json())
    .then(result => {
        myArray = result;
        console.log(myArray);
        setToDOM();
    })

// <!-- function to change each slide -->
function plusSlides(n) {
    slideIndex += n;
    if (slideIndex == myArray.length) {
        slideIndex = 0;
    }
    setToDOM();
    random_bg_color();
}

function prevSlides(n){
    slideIndex += n;
    if (slideIndex < 0) {
    slideIndex = myArray.length-1;
    }
    setToDOM();
    random_bg_color();
}

// <!-- function data to DOM --> 
function setToDOM() {
    // array of picture
    var pict = ["/img/image1.jpg", "/img/image2.jpg", "/img/image3.jpg","/img/image4.jpg","/img/image5.jpg","/img/image6.jpg","/img/image7.jpg","/img/image8.jpg","/img/image9.jpg"];

    // description quote
    document.getElementById(`desc-content`).innerHTML = myArray[slideIndex].en;
    // author name of quote
    document.getElementById(`name-author`).innerHTML = myArray[slideIndex].author;
    // picture of each slide
    document.getElementById(`mySlides`).style.background = `url('${pict[slideIndex % (pict.length)]}')`;
}

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

 document.getElementById(`blockquote-quoted`).style.color = bgColor;
}
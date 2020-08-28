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
}

function prevSlides(n){
    slideIndex += n;
    if (slideIndex < 0) {
    slideIndex = myArray.length-1;
    }
    setToDOM();
}

function random_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var random_bg_imgColor = "rgb(" + x + "," + y + "," + z + ")";

 document.getElementById(`blockquote-quoted`).style.color = random_bg_imgColor;
}

function random_bg_img() {
    var dir = '/img';
    var images = ["/image1.jpg", "/image2.jpg", "/image3.jpg","/image4.jpg","/image5.jpg","/image6.jpg","/image7.jpg","/image8.jpg","/image9.jpg"];
    var randomCount = (Math.floor(Math.random() * images.length));
    document.getElementById(`mySlides`).setAttribute("style", "background-image: url(" + dir + images[randomCount]);
}

// <!-- function data to DOM --> 
function setToDOM() {
    // description quote
    document.getElementById(`desc-content`).innerHTML = myArray[slideIndex].en;
    // author name of quote
    document.getElementById(`name-author`).innerHTML = myArray[slideIndex].author;

    random_color();
    random_bg_img();
}
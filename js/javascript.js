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

// <!-- function next slide  -->
function plusSlides(n) {
    slideIndex += n;
    if (slideIndex == myArray.length) {
        slideIndex = 0;
    }
    setToDOM();
}

// <!-- function prev slide -->
function prevSlides(n){
    slideIndex += n;
    if (slideIndex < 0) {
    slideIndex = myArray.length-1;
    }
    setToDOM();
}

// <!-- function random color quote -->
function random_color() {
    var a = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var c = Math.floor(Math.random() * 255);
    var color_quote = "rgb(" + a + "," + b + "," + c + ")";

    document.getElementById(`blockquote-quoted`).style.color = color_quote;
}

// <!-- function random bg img -->
function random_bg_img() {
    var folder = '/img';
    var imagesArray = ["/image1.jpg", "/image2.jpg", "/image3.jpg","/image4.jpg","/image5.jpg","/image6.jpg","/image7.jpg","/image8.jpg","/image9.jpg","/image10.jpg","/image11.jpg"];
    var bg_img = (Math.floor(Math.random() * imagesArray.length));
    
    document.getElementById(`mySlides`).setAttribute("style", "background-image: url(" + folder + imagesArray[bg_img]);
}

// <!-- function data to DOM --> 
function setToDOM() {
    // description quote
    document.getElementById(`desc-content`).innerHTML = myArray[slideIndex].en;
    // author name of quote
    document.getElementById(`name-author`).innerHTML = myArray[slideIndex].author;
    random_color(); // random color quote
    random_bg_img(); // random color bg img
}
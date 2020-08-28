var slideIndex = 0;
var myArray = [];

// <!-- fetch-data --> 
fetch('https://programming-quotes-api.herokuapp.com/quotes/lang/en')
    .then(response => response.json())
    .then(result => {
        myArray = result;
        console.log(myArray)
        setToDOM();
    })

// <!-- function to change each slide -->
function plusSlides(n) {
    slideIndex += n;
    if (slideIndex == myArray.length) {
        slideIndex = 0;
    }
    else if (slideIndex < 0) {
        slideIndex = myArray.length-1;
    }
    setToDOM();
}

// <!-- function data to DOM --> 
function setToDOM() {
    // array of picture
    var pict = ["/img/image-1.png", "/img/image-2.png", "/img/image-3.png","/img/image4.jpg","/img/image5.jpg","/img/image6.jpg","/img/image7.jpg","/img/image8.jpg","/img/image9.jpg"];
    // array of color quote
    var color_quoted = ["2f80ed","eb5757","219653","aqua","purple","yellow","brown","darkorange","hotpink"];
// console.log(url('${pict[slideIndex % (pict.length)]}'));
    // description quote
    document.getElementById(`desc-content`).innerHTML = myArray[slideIndex].en;
    // author name of quote
    document.getElementById(`name-author`).innerHTML = myArray[slideIndex].author;
    // picture of each slide
    document.getElementById(`mySlides`).style.background = `url('${pict[slideIndex % (pict.length)]}')`;
    // color of each slide
    document.getElementById(`blockquote-quoted`).style.color = color_quoted[slideIndex % (color_quoted.length)];
}

window.onload = function() {
    var oDiv = document.querySelectorAll("div");
    var oLi = document.querySelectorAll("li");
    // alert(oLi.length);
    for (var i = 0; i < oLi.length; i++) {
        oLi[i].num = i;
        oLi[i].addEventListener("mouseover", function() {
            for (var j = 0; j < oLi.length; j++) {
                oLi[j].style.background = "#171818";
                oDiv[j].style.display = "none";
            }
            this.style.background = "red";
            oDiv[this.num].style.display = "block";
        }, false)
    }


    setInterval(test, 2000);
    var array = new Array();
    var index = 0;
    var array = new Array("images/Carousel-1.jpg", "images/Carousel-2.jpg", "images/Carousel-3.jpg", "images/Carousel-4.jpg", "images/Carousel-5.jpg", "images/Carousel-6.jpg", "images/Carousel-7.jpg", "images/Carousel-8.jpg");

    function test() {
        var myimg = document.getElementById("imgs");
        if (index == array.length - 1) { index = 0; } else { index++; }
        myimg.src = array[index];
    }


}
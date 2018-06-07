var i = 0;
var images = [];
var time = 3000;

images[1]="https://media-cdn.tripadvisor.com/media/photo-s/0d/69/44/7f/gateway-arch-st-louis.jpg"
images[2]="https://i.pinimg.com/736x/f4/3c/6a/f43c6aed0ef8714faf52374b01162d4e--saint-louis-arch-st-louis-mo.jpg"
images[3]="http://gannettfleming.com/~/media/Images/Projects/Engineering%20Design/62268-1-StLouisArch.ashx"


 function changeImg() {
   document.slide.src = images[i];

   if(i < images.length - 1){
     i++;
   } else {
     i = 0;
   }

   setTimeout("changeImg()", time);
 }

 window.onload = changeImg

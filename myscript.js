alert('the noise that lady made');

var pic = document.getElementById('hera');

var imageList = ['Folder/progamer.jpg','Folder/fe.jpg','Folder/hera.jpg'];

var index = 0;

function slideshow (){

  pic.setAttribute('src',imageList[index]);

  if (index == imageList.length-1){
      index = 0;
    }
    index++;
}
setInterval(slideshow,2000);

window.onload = function() {


    var  im1s = document.getElementById('im1');
    var  gouwuche = document.getElementsByClassName('gouwuche')[0];
    var  gouwuche2s = document.getElementsByClassName('gouwuche2')[0];


    gouwuche.onmouseenter= function(){
        gouwuche2s.style.display="inline-block";
        console.log(gouwuche2s.style.display)
    }
    gouwuche.onmouseleave=function(){
         gouwuche2s.style.display="none";
        console.log(gouwuche2s.style.display)
    }








}



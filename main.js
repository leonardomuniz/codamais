$(document).ready(function(){
          
    $(window).scroll(function(){

      if($(window).scrollTop()>300){
        $('nav').addClass('black');
      }else{
        $('nav').removeClass('black');
      }

    });

});


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});


// JS ZOOM IMAGE
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
});




const elemsBtns = document.querySelectorAll(".fixed-action-btn");
const floatingBtn = M.FloatingActionButton.init(elemsBtns,{
    direction: "left",
    hoverEnabled: false
})


//JS PARALLAX
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
});
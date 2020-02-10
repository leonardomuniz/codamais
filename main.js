//navbar scrooll turn to black
$(document).ready(function(){
          
    $(window).scroll(function(){

      if($(window).scrollTop()>50){
        $('nav').addClass('black');
      }else{
        $('nav').removeClass('black');
      }

    });

});


// JS sidenav
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
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
$(document).ready(function () {
    $(".three").owlCarousel({
        margin: 80,
    });
});
$(document).ready(function () {
    $(".one").owlCarousel({
       items:1,
       loop:true,
       nav:true,
        navText : ["<i class='fa fa-circle'></i>","<i class='fa fa-circle-o'></i>"]

    });
});

  AOS.init();

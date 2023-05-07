$("h1").addClass("bigTitle")
$("button").click(function(){
    $("h1").slideToggle();
});
// $("h1").slideUp().slideDown().animate({opacity:0.2});
$("button").click(function(){
    $("h1").slideToggle();
    $("h1").fadeToggle();
});

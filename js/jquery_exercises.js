
$ (function() {

    $("#btn1").click(function(){
        $("#panel1").slideUp(2000).delay(2000).slideDown(2000);
        $("#panel3").slideUp(3000).delay(2000).slideDown(2000);
        $("#panel5").slideUp(5000).delay(2000).slideDown(2000);
        $("#panel7").slideUp(5000).delay(2000).slideDown(2000);
    });

    $("#btn2").dblclick(function() {
        $("#panel2").fadeOut(3000).delay(3000).slideDown(3000);
        $("#panel4").fadeOut(3000).delay(3000).slideDown(3000);
        $("#panel6").fadeOut(3000).delay(3000).slideDown(3000);
        $("#panel8").fadeOut(3000).delay(3000).slideDown(3000);
    });

    $("#btn3").hover(function () {
        $("#panel3").slideUp(4000).delay(4000).slideDown(2000);
    });

    $("#btn4").click(function () {
        $("#panel4").slideUp(1000).delay(3000).slideDown(1000);
    });

    $("#panel5").hover(function () {
        $(this).fadeOut(2000);
    }, function () {
        $(this).fadeIn(1000);
    });
    $("#panel6").hover(function () {
        $(this).fadeOut(2000);
    }, function () {
        $(this).fadeIn(1000);
    });
    $("#panel7").hover(function () {
        $(this).fadeOut(2000);
    }, function () {
        $(this).fadeIn(1000);
    });
    $("#panel8").hover(function () {
        $(this).fadeOut(2000);
    }, function () {
        $(this).fadeIn(1000);
    });
    $("p").dblclick(function () {
        $(this).css("font-size", "25px");
    })
    $("p").hover(function () {
        $(this).css("font-size", "36px");
    })
});
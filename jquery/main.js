//juery is a js library

// $(window).ready(function(){
//     alert('Loaded');
// });
// alert('Loaded');
$(document).ready(function(){
    $("#text").focus(function () {
        $("#text").css("display", "none");
    });

    $("#focus").click(function () {
        $("#input").focus();
    });

    $("button").hover(
        function () {
         $(this).css("border","1px solid red");
        },
        function () {
            $(this).css("border", 0);
        }
    );

    $("#input").keypress(function () {
        alert("key was pressed");
    });

    $("#ok").mousedown(function () {
        $(this).append("<b>Mouse up.</b>");
    });
    $("#buttontoggle").click(function(){
        $(this).next().toggle();
    });

    $("#validate").click(function () {
        if($("#name").val()!=""){
            $(this).submit();
        }
    });

    $("#tx").keypress(function(e){
        var keycode= (e.keycode ? e.keycode : e.which);
        alert(keycode);
    });

    $("#bt").click(function(){
        $("#tx").slideUp(function () {
           $(this).slideDown(3000);
        });
    });

    $("#button1").click(function () {
        $("#div1").html("text has changed");
    });
    
    $("#div2").hover(
        function () {
            $(this).animate({width:"+=100px"});
        },
        function () {
            $(this).animate({ width:"-=100px" });
        }
    );
    // $("#ajaxMe").click(function () {
    //     $(this).load("myform.html");
    // });

    $("#bt1").click(function(){
        $.ajax({
            url: "myform.html",
            success: function (data){
                $("#ajaxMe").html(data);
            }
        });
    });
    
})
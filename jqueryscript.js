$(document).ready(function() {

    /*------------------------------------------buttons row1*/
    $(".button-hide-container").click(function() {
        $(this).parent().parent().parent().hide("blind", "slow");
        $(this).parent().parent().parent().prev().show("blind", "slow")

    });

    $(".button-show-container").click(function() {
        $(this).next().show("blind", "slow");
        $(this).hide("fast")
    });
    /*------------------------------------------buttons row1*/


    /*suburb help selector*/
    $(".fa-question-circle").mouseenter(function() {
        $(this).next().addClass("description-container-show");
        $(this).next().removeClass("description-container-hidden");

    });

    $(".fa-question-circle").mouseleave(function() {
        $(this).next().removeClass("description-container-show");
        $(this).next().addClass("description-container-hidden");
    });
    
    $(".info-button").click(function() {
        $(this).parent().parent().hide("fade", "1000");
    })
    
    

    



})

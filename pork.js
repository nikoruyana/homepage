$(document).ready(function(){

    $('li').on('mouseover',function(){
        $('.ingredient-image').append("<img src='" + $(this).attr('data-image') + "'>");
    });
    
    $('li').on('mouseout',function(){
        $('.ingredient-image').empty();
    });
    
    var count = $("ul").children().length;
        if(count == 0) {
            $('.recipe-text h3').text("You are ready to start cooking!");
        } else {
            $('.recipe-text h3').text("You have " + count + " items left to get!");    
        }
    
    $('.recipe-text .slidetoggle').on('click', function(){
        $(this).toggleClass("fa-arrow-up fa-arrow-down");
        $(this).parent().siblings('.inner-text').slideToggle();
    });
    
    $('.recipe-directions .slidetoggle').on('click',function(){
        $(this).toggleClass("fa-arrow-up fa-arrow-down");
        $(this).parent().siblings('.inner-directions').slideToggle();
    });
    
    $('.comments .slidetoggle').on('click',function(){
        $(this).toggleClass("fa-arrow-up fa-arrow-down");
        $(this).parent().siblings('.inner-comments').slideToggle();
    });
    
    $('.recipe-text ul.need').on('click','li i',function(){
        $(this).parent().appendTo(".ingredients-have .got");
        $(this).removeClass("fa-square-o");
        $(this).addClass("fa-check-square-o");
        var count = $(".recipe-text .need").children().length;
        if(count == 0) {
            $('.recipe-text h3').text("You are ready to start cooking!");
        } else {
            $('.recipe-text h3').text("You have " + count + " items left to get!");  
        }
    });
    
    $('.ingredients-have ul.got').on('click','li i',function(){
        $(this).parent().appendTo(".recipe-text .need");
        $(this).removeClass("fa-check-square-o");
        $(this).addClass("fa-square-o");
        var count = $(".recipe-text .need").children().length;
        if(count == 0) {
            $('.recipe-text h3').text("You are ready to start cooking!");
        } else {
            $('.recipe-text h3').text("You have " + count + " items left to get!");  
        }
    });
    
    $('.inner-directions').on('click', 'ol li', function(){
        $(this).toggleClass('linethrough');
    });
    
    });
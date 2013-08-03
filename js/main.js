$(function() {
    $('#slider').nivoSlider({
                            prevText: '',
                            nextText: ''
                        });

    //navigation
    $("li.menu").hover(function(){
                                        $(this).children().slideDown();
                            },
                            function(){
                                        $(this).children().slideUp();
                            });
});

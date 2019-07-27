//checking off any to do: 
$("input[type='text']").keypress(function(event){ 
    if(event.which === 13) { //13 is code for enter key. (KeyBoardEvent Value)
        var todoText = $(this).val(); 
        $(this).val(""); //replaces value with a empty string. (functionwise it removes the text after enter.)
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText +  "</li>");
    }
})

$("ul").on("click", "li", function() { 
    $(this).toggleClass("completed"); 
})

$("ul").on("click", "span", function(e) {
    $(this).parent().fadeOut(500,function(){
        $(this).remove(); 
    });
    e.stopPropagation(); //stops the event from bubbling ups
})

$(".fa-plus").on("click", function() {
    $("input[type='text']").fadeToggle();
})
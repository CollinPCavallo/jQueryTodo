$(document).ready(function() {

    //check off specific todos by clicking
    $('#todoList').on('click', 'li',function() {
        $(this).toggleClass('crossed');
    });

    //delete todo from ul
    $('ul').on('click', '.delete', function (e) {
        $(this).parent().fadeOut(350, function() {
            $(this).remove();
        });
        e.stopPropagation();
    });

    //add new todo
    $('input[type="text"]').on('keypress', function(e) {
        if (e.which === 13) {
            var userVal = $(this).val();
            $(this).val('')
            $('ul').append(`<li><span class="delete"><i class="fas fa-trash"></i> </span>${userVal}</li>`)
            
        }
    })
    $("#showInput").click(function () {
        $("input[type='text']").fadeToggle(200);
    });

})
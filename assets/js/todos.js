//Check Of Specific Todo's By Clicking
$("ul").on('click','li',function () {
    $(this).toggleClass("completed");
});

//Delete Todo's
$("ul").on("click","span",function (event) {
    console.log("out :" +this);
    $(this).parent().fadeOut(500,function () {
        console.log("In :"+this);
        $(this).remove();
    });
    event.stopPropagation();
});

//text Field
$("input[type='text']").keypress(function (event) {
    if (event.which == 13) {
        var todoName = $(this).val();
        $(this).val("");
        $("ul").append('<li><span><i class="fa fa-trash"></i></span> '+todoName+'</li>');
    }
});

//Add New Plus icon
$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
});
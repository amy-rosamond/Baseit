$('#toggleMenu').on('click', function () {
    $('#miniMenuBar').slideToggle();
    $('md-icon').toggleClass('rotated');
});

$('md-icon').on('click', function () {
    $('md-icon').toggleClass('rotated');
});

function resize() {
    if (window.innerWidth > 900) {
        $('#miniMenuBar').show()
    } else {
        $('#miniMenuBar').hide()
    }
}

$(function () {
    resize();
    $(window).resize(resize)
});


$(function(){
    $("div.installation-item-more-info").click(function(){
        if ($("div.dropdown-content").hasClass("expanded")) {
            $("div.dropdown-content.expanded").removeClass("expanded").slideUp(250);
            $(this).removeClass("open");
        } else {
            $("div.dropdown-content").addClass("expanded").slideDown(250);
            $(this).addClass("open");
        }
    });
});
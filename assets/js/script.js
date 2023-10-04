function cardHover() {
    var card = document.querySelectorAll('.cardHover');
    var cardBack = document.querySelectorAll('.cardBack');
    var cardImg = document.querySelectorAll('.cardImg');
    var cardTxt = document.querySelectorAll('.cardTxt');

    card.classList.add('.card-hover');
    cardBack.classList.add('.card-back-show');
    cardImg.classList.add('.card-back-hide');
    cardTxt.classList.remove('.card-back-text-hide');
}

function cardNoHover() {
    var card = document.querySelectorAll('.cardHover');

    card.classList.remove('.card-hover');
    cardBack.classList.remove('.card-back-show');
    cardImg.classList.remove('.card-back-hide');
    cardTxt.classList.add('.card-back-text-hide');
}

$('#upload').bind('change', function () {
    var fileName = '';
    fileName = $(this).val();
    $('#file-selected').html(fileName);
});
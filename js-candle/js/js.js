
$('input[type="radio"]').click(function () {
    $(".text-input").focus();
    $(".button").removeAttr("disabled");
});
$(document).ready(function () {
    setTimeout(function () {
        setCandle(10);
    }, 500);
});

$(window).resize(function () {
    setHeight();
});

function setHeight() {
    var baseHeight = $('.left-candles').height();
    console.log(baseHeight);
    $('.candle-custom').height(baseHeight);
    $('.grad-before-val').width($('.grad-before').width());
    var fireHeight = $('.fire').height();
    $('.candle-grad').height(baseHeight - fireHeight - 8);

}

function setCandle(p) {
    $('.grad-before').height((100 - p) + '%');
    $('.grad-before-val').html(p + '%');
    $('.grad').height(p + '%');
    setHeight();
}


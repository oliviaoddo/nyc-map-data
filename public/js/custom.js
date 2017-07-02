$(document).ready(function() {
    $('.parallax').parallax();
    $('.card-fade').hide();
    $('#button-fade').hide();
    $('#food-card').hide();
    $(function() {
        $(".home-text").typed({
            strings: ["Visualize NYC 311 Complaints."],
            typeSpeed: 10,
            loop: true,
            showCursor: true,
            backDelay: 2000,
            backSpeed: 10,
            startDelay: 500
        });
        $(".sub-text").typed({
            strings: ["Select a dataset."],
            typeSpeed: 10,
            startDelay: 1100
        });
    });
    $('select').material_select();
    $('.card-fade').delay(2500).fadeIn("slow");
    $('#button-fade').delay(2500).fadeIn("slow");
});

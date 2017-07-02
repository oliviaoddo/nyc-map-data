$(document).ready(function() {
    $('.parallax').parallax();
    $('.card-fade').hide();
    $('#button-fade').hide();
    $('#noise-card').hide();
    $(function(){
        $(".home-text").typed({
          strings: ["Visualize NYC data."],
          // stringsElement: <h1>Hello</h1>, <h2>Test</h2>,
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
    $('#change-data').change(function(){
      $('#complaint-header').text($( "#change-data option:selected" ).text());
      $.ajax({
         url: '/map/' + $( "#change-data" ).val(),
         type: 'GET'
      }).then(function(data){
          console.log(data);
      });
    })
});

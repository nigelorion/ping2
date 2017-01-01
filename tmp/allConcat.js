var Calculator = require('./../js/scripts.js').calculatorModule;


$(document).ready(function() {
  console.log("test");
  $("form").submit(function(event) {
    $("#list").empty();
    event.preventDefault();
    // if (errorCheck($("#number-input").val())) {
    //     alert("Enter a number! No negatives please!");
    // } else
    var simpleCalc = new Calculator("Hot Pink");
    var pingPong = simpleCalc.counter($("#number-input").val());
    pingPong.forEach(function (value) {
      $("#list").append("<li>" + value + "</li>");
    });
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

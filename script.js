$(document).ready(function(){
  var $form = $('#form');
  var $select = $('#select');
  var $button = $('#button');

  // serializeArray

  $form.on("submit", function(event) {
    event.preventDefault();
    var $result = $(this).serializeArray();
      if ($result[0].value === "noir") {
        $("#container").append('<div class="noir"></div>');
      }
      else if ($result[0].value === "bleu") {
        $("#container").append('<div class="bleu"></div>');
      }
      else if ($result[0].value === "vert") {
        $("#container").append('<div class="vert"></div>');
      }
  });

  $(document).on('click','.bleu, .vert, .noir',function() {
      if ($(this).hasClass("red") === true) {
          $(this).remove();
      }
      else{
          $(this).addClass("red");
      }
  });



});

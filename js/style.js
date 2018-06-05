$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 900,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


$(function() {
     
    $("#contact-form").validator();
  
    // when the form is submitted
    $("#contact-form").on("submit", function(e) {
      // if the validator does not prevent form submit
      if (!e.isDefaultPrevented()) {
        var url = "";
  
  
        var messageAlert = "alert-success";
        var messageText =
          "Your message was sent, thank you. We will get back to you soon.";
  
        // let's compose Bootstrap alert box HTML
        var alertBox =
          '<div class="alert ' +
          messageAlert +
          ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
          messageText +
          "</div>";
  
        // If we have messageAlert and messageText
        if (messageAlert && messageText) {
          // inject the alert to .messages div in our form
          $("#contact-form").find(".messages").html(alertBox);
          // empty the form
          $("#contact-form")[0].reset();
        }
  
        return false;
      }
    });
  });
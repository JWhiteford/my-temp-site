$(function() {

	//Navigation
	$(".menu-icon").click( function () {
  	$(".main-nav").toggleClass("show-for-large-up animated fadeIn");
  	$(this).toggleClass("rotate");
  });

	// apple now button
	$(".apply-now").click( function(){
		ttl = $(this).attr("data-sub");
		$("#log").removeClass().addClass('hide');
		$(".name, .email, .message").val(""); //Clear all fields
		$(".subject").val(ttl);
	});

  //Contact Us Form and careers page
 	if ($('body').hasClass('contact') || $('body').hasClass('careers')) {
		emailForm = $("#emailForm");
		emailForm.validate();
		$(".submit").click( function(e){
			e.preventDefault();
			if ( emailForm.valid() === true ){
				formData();
			}
		});

		function formData(){
			var $name, $email, $subject, $message;

			$name = $(".name").val();
			$email = $(".email").val();
			$subject = $(".subject").val();
			$message = $(".message").val();

			console.log($name+" "+$email+" "+$subject+" "+$message);

			$.ajax({
			  url: "//formspree.io/info@hybridforge.com", 
			  method: "POST",
			  data: {
			  	name:$name,
			  	email: $email,
			  	subject: $subject,
			  	message: $message,
			  },
		  	headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'application/x-www-form-urlencoded'
  	    },
			  dataType: "json",
  	    beforeSend: function() {
  	    	$("#log").removeClass('hide alert success').addClass('alert-box info radius').text("Sending message…");
    		},
    		error: function(err) {	
    			$("#log").removeClass('info hide success').addClass('alert').text("Sorry! there was a problem submitting the form. Please try again in an hour.");
    		},
    		success: function(data) {
    			$("#log").removeClass('info hide alert').addClass('success').html("<div class='thankyou'><h2>Thank you!</h2><p>Your message has been successfully sent. We will contact you very soon!</p></div>");
    			$(".name, .email, .subject, .message").val(""); //Clear all fields

    			if ($('body').hasClass('careers')) {
    				$('#myModal').delay( 3000 ).foundation('reveal', 'close');
    			}
    		}
			});
		}
 	}
});
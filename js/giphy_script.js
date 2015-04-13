$(document).ready(function(){
		

		

		$('#search_button').click(function(){
			
			//var query = $('#search_box').val();
			//site = 'http://api.giphy.com/v1/gifs/search?q='+query+'&key=dc6zaTOxFJmzC';


			$.getJSON();

			var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dc6zaTOxFJmzC&limit=5");
			xhr.done(function(data) { 
				console.log("success got data", data); 
			});

		});//end click function

		

	});//end document ready
	
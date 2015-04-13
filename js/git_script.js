$(document).ready(function(){


    var search_box = $('#search_box');
    search_box.click(function(){
      search_box.val('');
    });
		
		$('#search_button').click(function(){
			
      var results = $('#results');
      var results = results.html('');
			var query = search_box.val();

			
			
			$('#results').fadeIn('slow');

			var site = 'https://api.github.com/search/users?q='+query;
		
			$.getJSON(site, function(data){

					total = data.total_count;
					console.log(total);

        if(total!=0){
    				for(var i = 0; i < 10; i++){
    					results.append('<div class="user"><a href='+data.items[i].html_url+'><img src='+data.items[i].avatar_url+' /></a>',
    					'<span class="user">Username: '+data.items[i].login+'</span>',
    					'<br/><span class="user">Github score: '+data.items[i].score+'<span></div>');
    				}
        }else{
          results.append('<h2 id="error">No users found</h2>');
        }
			
			});//end getJSONcv                                                                                    

			
	

		});//end click function

		

	});//end document ready
	

			/*

			{
		    "total_count": 1,
		    "incomplete_results": false,
		    "items": [
		        {
		            "login": "uncledara",
		            "id": 8155075,
		            "avatar_url": "https://avatars.githubusercontent.com/u/8155075?v=3",
		            "gravatar_id": "",
		            "url": "https://api.github.com/users/uncledara",
		            "html_url": "https://github.com/uncledara",
		            "followers_url": "https://api.github.com/users/uncledara/followers",
		            "following_url": "https://api.github.com/users/uncledara/following{/other_user}",
		            "gists_url": "https://api.github.com/users/uncledara/gists{/gist_id}",
		            "starred_url": "https://api.github.com/users/uncledara/starred{/owner}{/repo}",
		            "subscriptions_url": "https://api.github.com/users/uncledara/subscriptions",
		            "organizations_url": "https://api.github.com/users/uncledara/orgs",
		            "repos_url": "https://api.github.com/users/uncledara/repos",
		            "events_url": "https://api.github.com/users/uncledara/events{/privacy}",
		            "received_events_url": "https://api.github.com/users/uncledara/received_events",
		            "type": "User",
		            "site_admin": false,
		            "score": 20.356327
		        }
		    ]
		}

			*/
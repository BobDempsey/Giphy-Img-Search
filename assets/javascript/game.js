// Initial array of movies
    var movies = ['Pwned', 'ROFL', 'SMH', 'Slap', 'AMA', 'Dafuq', 'FML', 'Facepalm', 'Headdesk', 'ICYMI',
    'IDGAF', 'IMO', 'IRL', 'Lulz', 'TBT', 'Yolo', 'Turnt', 'On Fleek', 'Bae', 'Rekt', 'Hella', 'AF',
    'Trending', 'Random', 'Squad', 'No Chill', 'Fomo', 'Lit', 'Fam', 'Owned', 'Dealt'];

    var apiKey ="&api_key=dc6zaTOxFJmzC";
    var limit = "&limit=10";

    // ========================================================

    // displayMovieInfo function now re-renders the HTML to display the appropriate content. 
    function displayMovieInfo(){

var movie = $(this).attr('data-name');

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + movie + apiKey + limit;
        
        
        // Creates AJAX call for the specific movie being 
        $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
            console.log(response);

             for (var i = 0; i < movies.length; i++){

            // Creates a generic div to hold the movie

            var newDiv = $('<div>');
            newDiv.addClass("image-container");

            // Retrieves the Rating Data
            var ratingData = (response.data[i].rating);

            // Creates an element to have the rating displayed

            var rating = $("<p>").text(ratingData);
            rating.addClass('img-rating');
            newDiv.append(rating);

            // Creates an element to hold the image
            var image = $("<img>").attr("src", response.data[i].images.fixed_height.url);
            image.addClass('img-grid');
          

            // Appends the image
            newDiv.append(image);

            // Puts the entire Movie above the previous movies.
            $("#moviesView").prepend(newDiv);

        }
        });

    }

    // ========================================================

    // Generic function for displaying movie data 
    function renderButtons(){ 

        // Deletes the movies prior to adding new movies (this is necessary otherwise you will have repeat buttons)
        $('#buttonsView').empty();

        // Loops through the array of movies
        for (var i = 0; i < movies.length; i++){

            // Then dynamicaly generates buttons for each movie in the array

            // Note the jQUery syntax here... 
            var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
            a.addClass('movie'); // Added a class
            a.addClass('btn');
            a.addClass('btn-med'); 
            a.addClass('btn-primary');
            a.attr('data-name', movies[i]); // Added a data-attribute
            a.text(movies[i]); // Provided the initial button text
            $('#buttonsView').append(a); // Added the button to the HTML
        }
    }

    // ========================================================

    // This function handles events where one button is clicked
    $('#addMovie').on('click', function(){

        // This line of code will grab the input from the textbox
        var movie = $('#movie-input').val().trim();

        // The movie from the textbox is then added to our array
        movies.push(movie);
        
        // Our array then runs which handles the processing of our movie array
        renderButtons();

        // We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
        return false;
    })
    
    // ========================================================

    // Generic function for displaying the movieInfo
    $(document).on('click', '.movie', displayMovieInfo);

    // ========================================================


    $("#clearGifs").click(function(){
        $("#moviesView").empty()
    });

    $("#clearButtons").click(function(){
        $("#buttonsView").empty()
    });

    // This calls the renderButtons() function
    renderButtons();

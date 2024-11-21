$(document).ready(function() {
    // Load genres from genres.json and populate the select element
    $.getJSON('../../data/genres.json', function(data) {
        let genreSelect = $('#genre-input');
        $.each(data, function(index, genre) {
            genreSelect.append($('<option>', {
                value: genre.genre,
                text: genre.genre
            }));
        });
    });

    // Grabs Selected from Starter Page
    function sourceCheck() {
        let genreInputVal = $("#genre-input").val();
        console.log(genreInputVal);

        let queryString = "http://localhost:5500/results_page.html?genrelist=" + genreInputVal;

        document.location.replace(queryString);
    }

    // On click of submit button calls function sourceCheck
    $("button[value=button]").on("click", function (event) {
        event.preventDefault();
        sourceCheck();
    });
});


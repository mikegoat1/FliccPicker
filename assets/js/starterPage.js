const startBaseURL = window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));

$(document).ready(function () {
    // Load genres from genres.json and populate the select element
    $.getJSON(`../data/genres.json`, function (data) {
        let genreSelect = $('#genre-input');
        $.each(data, function (index, genre) {
            console.log(genre);
            genreSelect.append($('<option>', {
                value: genre.genre,
                text: genre.genre
            }));
        });
    });

    // Grabs Selected from Starter Page
    function sourceCheck() {
        let genreInputVal = $("#genre-input").val();
        // console.log(genreInputVal);

        let queryString = window.location.origin + "FliccPicker/views/results_page.html?genrelist=" + encodeURIComponent(genreInputVal);
        document.location.replace(queryString);
    }

    // On click of submit button calls function sourceCheck
    $("button[value=button]").on("click", function (event) {
        event.preventDefault();
        sourceCheck();
    });
});


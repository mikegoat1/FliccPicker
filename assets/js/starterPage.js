

var urlGenres = 'https://cors-anywhere.herokuapp.com/https://api.watchmode.com/v1/genres/?apiKey=eQskMVotZ04L0wctRWM1T3ALo76eT61EZHK8Ycx0';

var urlSearchName = "https://cors-anywhere.herokuapp.com/https://api.watchmode.com/v1/search/?apiKey=eQskMVotZ04L0wctRWM1T3ALo76eT61EZHK8Ycx0&search_field=name&search_value=Ed%20Wood";

var urlSearchAction = "https://cors-anywhere.herokuapp.com/https://api.watchmode.com/v1/search/?apiKey=eQskMVotZ04L0wctRWM1T3ALo76eT61EZHK8Ycx0&search_field=tmdb_movie_id&search_value=1";

var urlTitles = 'https://cors-anywhere.herokuapp.com/https://api.watchmode.com/v1/list-titles/?apiKey=eQskMVotZ04L0wctRWM1T3ALo76eT61EZHK8Ycx0&typse=movie'

var urlSourceNetflixTitles = "https://cors-anywhere.herokuapp.com/https://api.watchmode.com/v1/list-titles/?apiKey=eQskMVotZ04L0wctRWM1T3ALo76eT61EZHK8Ycx0&source_ids=1,000&type=movie"

var streamArray = ["Netflix", "Hulu", "Amazon", "HBO", "Disney+", "AppleTV"]
var genreArray = ["Action & Adventure", "Animation", "Anime", "Comedy", "Crime", "Documentary", "Drama", "Family", "Horror", "Kids", "Musical", "Mystery", "Romance", "Sci-Fi & Fantasy", "Sports", "Supernatural", "Thriller", "War", "Western"]

fetch(urlGenres)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
//Testing checkboxes 
console.log($("input:checked"));
// Grabs all the selected buttons on starterPage
sourceCheck();
function sourceCheck() {
    let checkedEl = $("input:checked");
    let selected = ["value"];

    $.each(checkedEl, function () {
        selected.push($(this).val());
    });
    //Console logs all selected in a string
    console.log("You have selected, ", selected.join(", "))
    return selected;

}
//On click of submit button calls function sourceChecks
$("button[value=button]").on("click", sourceCheck);

fetch(urlSourceNetflixTitles)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })

        // Genre URL 'https://cors-anywhere.herokuapp.com/https://api.watchmode.com/v1/genres/?apiKey=eQskMVotZ04L0wctRWM1T3ALo76eT61EZHK8Ycx0'

        // "Action & Adventure", "Animation", "Anime", "Comedy" "Crime" "Documentary", "Drama", "Family","Horror","Kids", "Musical", "Mystery", "Romance", "Sci-Fi & Fantasy","Sports","Supernatural","Thriller", "War", "Western",


// export {streamArray, genreArray}


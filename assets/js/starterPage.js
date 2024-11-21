// Grabs Selected from Starter Page
function sourceCheck() {
    let genreInputVal = $("#genre-input").val();
    let sourceInputVal = $("#source-input").val();
    console.log(genreInputVal);

    let queryString = "http://localhost:5500/results_page.html?genrelist=" + genreInputVal;

    document.location.replace(queryString);

};
// On click of submit button calls function sourceCheck
$("button[value=button]").on("click", function (event) {
    event.preventDefault();
    sourceCheck();
});


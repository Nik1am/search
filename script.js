function makeSearch() {
    let inp = document.getElementById('input')
    let searchText = inp.value.replace(" ", "+");
    window.open("https://www.google.com/search?client=firefox-b-d&q="+searchText); 
};

document.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        makeSearch()
    }
});
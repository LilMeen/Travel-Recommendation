function search(){
    let input = document.getElementById('search-bar').value;
    if (input !== ""){
        console.log(input);
        document.getElementById('search-bar').value = "";
        document.getElementById('clear-button').style.display = 'none';
    }
}

function clearSearch(){
    document.getElementById('search-bar').value = "";
    document.getElementById('clear-button').style.display = 'none';
}

document.addEventListener('keydown', function(event){
    if (event.key === "Enter"){
        search();
    }
});

const searchButton = document.getElementById('search-button');
searchButton.onclick = search;

const clearButton = document.getElementById('clear-button');
clearButton.onclick = clearSearch;

const searchBar = document.getElementById('search-bar');
searchBar.oninput = function(event){
    let input = document.getElementById('search-bar').value;
    if (input !== ""){
        document.getElementById('clear-button').style.display = 'inline';
    }
    else {
        document.getElementById('clear-button').style.display = 'none';
    }
}
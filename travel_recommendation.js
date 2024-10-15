var xhr = new XMLHttpRequest();
var url = "./travel_recommendation_api.json";

let countries = [];
let beaches = [];
let temples = [];
let locations = [];

xhr.open("GET", url, true);
xhr.responseType = 'json';

xhr.onload = function(){ 
    xhr.response.countries.forEach(function(country){
        country.cities.forEach(function(city){
            city['tags'] = 'city';
            locations.push(city);
        });
    });
    xhr.response.beaches.forEach(function(beach){
        beach['tags'] = 'beach';
        locations.push(beach);
    });
    xhr.response.temples.forEach(function(temple){
        temple['tags'] = 'temple';
        locations.push(temple);
    });
};

xhr.send();

function search(){
    let input = document.getElementById('search-bar').value;
    if (input !== ""){
        console.log(input);
        document.getElementById('search-bar').value = "";
        document.getElementById('clear-button').style.display = 'none';
        document.getElementById('search-result').innerHTML = "";

        locations.forEach(function(location){
            if (location.name.toLowerCase().includes(input.toLowerCase()) || 
                location.description.toLowerCase().includes(input.toLowerCase() ||
                location.tags.toLowerCase().includes(input.toLowerCase()))
            ){               
                let card = document.createElement('div');
                card.className = 'card';
                card.style.margin = '10px';
                card.style.display = 'inline-block';
                card.style.color = 'black';
                card.style.backgroundColor = 'white';
                card.style.width = '500px';
                card.style.borderRadius = '10px';

                let cardImage = document.createElement('img');
                cardImage.className = 'card-img-top';
                cardImage.src = location.imageUrl;
                cardImage.alt = 'Card image cap';
                cardImage.style.width = '100%';
                cardImage.style.height = '200px';
                cardImage.style.borderRadius = '10px';

                let cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                let cardTitle = document.createElement('h5');
                cardTitle.className = 'card-title';
                cardTitle.innerText = location.name;
                cardTitle.style.color = 'black';
                cardTitle.style.fontSize = '20px';
                cardTitle.style.padding = '10px';

                let cardText = document.createElement('p');
                cardText.className = 'card-text';
                cardText.innerText = location.description;
                cardText.style.color = 'grey';
                cardText.style.paddingLeft = '10px';

                let cardButton = document.createElement('button');
                cardButton.className = 'btn btn-primary';
                cardButton.innerText = 'Visit';
                cardButton.style.color = 'white';
                cardButton.style.backgroundColor = '#387478';
                cardButton.style.margin = '10px';
                cardButton.style.borderRadius = '5px';
                cardButton.style.border = 'none';
                cardButton.style.width = '60px';
                cardButton.style.height = '30px';


                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                cardBody.appendChild(cardButton);

                card.appendChild(cardImage);
                card.appendChild(cardBody);

                document.getElementById('search-result').appendChild(card);
                document.getElementById('search-result').appendChild(document.createElement('br'));
            }
        });
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


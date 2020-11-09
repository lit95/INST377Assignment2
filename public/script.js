const PGfoodSafetyData = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

const placeName = []; //an empty arrray to store the restaurants' name
const category = []; //an empty arrray to store the restaurants' category

// fetch the data
fetch(PGfoodSafetyData) // fetch returns a promise
    .then(blob => blob.json())
    .then(data => placeName.push(...data)) // because I want restaurant to stay constant
// the ... spread into a function
    // the data that comes back from the fetch can be image, music, HTML, ect
// the fecth ignore the type of data
// get data into restaurant

function findNameOrCategorty(textMatch, placeName){
    return placeName.filter(place => {
        /**check if the text typed has a match */
        const regex = new RegExp(textMatch, 'gi'); // gi = global insensitive (it ignore UP or Low cases)
        return place.name.match(regex) ||
        place.category.match(regex);  
    });
}/**end find() */

function displayNameOrCategorty(){
    const matchArray = findNameOrCategorty(this.value, placeName);
    const html = matchArray.map(place => {
        const regularExpression = new RegExp(this.value, 'gi');/**highlight the matching word */
        const nameOfThePlace = place.name.replace(regex, 
            `<span class="h1">${this.value}</span>`);

        const categoryFood = place.category.replace(regex, 
             `<span class="h1">${this.value}</span>`);

        return `
        <li>        
            <span class="name">${nameOfThePlace}</span>
        </li>
    
        <li>        
            <span class="category">${categoryFood}</span>
        </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
} /**end displayMatches() */

const textLookUp = document.querySelector('.textInput');
const hint = document.querySelector('.suggestions');

textLookUp = addEventListener('change', displayNameOrCategorty);
textLookUp = addEventListener('keyup', displayNameOrCategorty);


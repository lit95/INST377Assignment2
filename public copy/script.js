const pgFoodSafetyData = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
  
const placeName = [];
// fetch the data
fetch(pgFoodSafetyData) // fetch returns a promise
    .then(contentOfPG => contentOfPG.json())
    .then(data => placeName.push(...data)) // because I want restaurant to stay constant
// the ... spread into a function
// the data that comes back from the fetch can be image, music, HTML, ect
// the fecth ignore the type of data
// get data into restaurant

function findNameOrCategory(textMatch, placeName){
    return placeName.filter(place => {
        /**check if the text typed has a match */
        const regex = new RegExp(textMatch, 'gi'); // gi = global insensitive (it ignore UP or Low cases)
        return place.name.match(regex) || place.category.match(regex)  
    });
}


function displayNameOrCategory() {
  const matchArray = findNameOrCategory(this.value, placeName);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi'); /**highlight the matching word */

    const nameOfThePlace = place.name.replace(regex, `<span class="h2">${this.value}</span>`);
    const categoryFood = place.category.replace(regex, `<span class="h2">${this.value}</span>`);
    return `
      <li>
        <span class="name">${nameOfThePlace}, ${categoryFood}</span>
        <span class="address">${place.address_line_1}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayNameOrCategory);
searchInput.addEventListener('keyup', displayNameOrCategory);
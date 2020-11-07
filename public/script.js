/**variables
 *  - PGfoodSafetyData
 */


const PGfoodSafetyData = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

const name = []; //an empty arrray to store the restaurants
const establishment_id = [];
const category = [];
const inspection_date = [];
const inspection_results = [];
const city = [];
const state = [];
const zip = [];
const address_line_1 = [];
const address_line_2 = [];
const food_from_approved_source = [];
const food_protected_from = [];
const ill_workers_restricted = [];
const proper_hand_washing = [];
const cooling_time_and_temperature = [];
const cold_holding_temperature = [];
const hot_holding_temperature = [];
const cooking_time_and_temperature = [];
const reheating_time_and_temperature = [];
const hot_and_cold_running_water = [];
const proper_sewage_disposal = [];
const no_bare_hand_contact = [];
const adequate_hand_washing = [];
const rodent_and_insects = [];
const food_contact_surfaces_and = [];
const inspection_type = [];
const owner = [];
const type = [];
const geocoded_column_1 = [];

// fetch the data
fetch(PGfoodSafetyData)
    .then(blob => blob.json())
    .then(data => restaurant.push(...data)) // because I want restaurant to stay constant
// fetch returns a promise
// the data that comes back from the fetch can be image, music, HTML, ect
// the fecth ignore the type of data
// get data into restaurant

/*// make an array of foodplace
for(var i; i < PGfoodSafetyData.length; i++ ){
    var food_Place = PGfoodSafetyData[i];
}/**end for loop */

function find(textMatch, foodPlace){
    return foodPlace.filter(place => {
        /**check if the text typed has a match */
        const regex = new RegExp(textMatch, 'gi'); // gi = global insensitive
        return place.name.match(regex) ||
        place.category.match(regex); /*||
        place.establishment_id.match(regex) ||
        place.inspection_date.match(regex) ||
        place.inspection_results.match(regex) ||
        place.city.match(regex) ||
        place.state.match(regex) ||
        place.zip.match(regex) ||
        place.address_line_1.match(regex) ||
        place.address_line_2.match(regex) ||
        place.food_from_approved_source.match(regex) ||
        place.ill_workers_restricted.match(regex) ||
        place.proper_hand_washing.match(regex) ||
        place.cooling_time_and_temperature.match(regex) ||
        place.cold_holding_temperature.match(regex) || 
        place.hot_holding_temperature.match(regex) ||
        place.cooking_time_and_temperature.match(regex) ||
        place.reheating_time_and_temperature.match(regex) ||
        place.hot_and_cold_running_water(regex) ||
        place.proper_sewage_disposal.match(regex) ||
        place.no_bare_hand_contact.match(regex) ||
        place.adequate_hand_washing.match(regex) ||  
        place.rodent_and_insects.match(regex) || 
        place.food_contact_surfaces_and.match(regex) || 
        place.inspection_type.match(regex) || 
        place.owner.match(regex) || 
        place.type.match(regex) || 
        place.geocoded_column_1.match(regex); */  
    });
}/**end find() */

function displayMatches(){
    //console.log(this.value);
    const matchArray = find(this.value, foodPlace);
    const html = (matchArray).map(place => {
        const regularExpression = new RegExp(this.value, 'gi');/**highlight the matching word */
        return `
        <li>
            <span class="name">${place.name}</span.
        </li>
        
        <li>
            <span class="category">${place.category}</span.
        </li>`;
    }).join('');
    suggestions.innerHTML = html;
} /**end displayMatches() */

const textLookUp = document.querySelector('lookUp');
const hint = document.querySelector('.hint');

textLookUp = addEventListener('change', displayMatches);
textLookUp = addEventListener('keyup', displayMatches);


//global variables
const BASE_URL = "https://resource-ghibli-api.onrender.com/films"
const optionElements = ("select-menu")
const form = document.querySelector("form")
const postReview = ("review-list")
const userReview = document.getElementById("review-list")
 


//api organization
fetch(`${BASE_URL}`)
.then((response) => response.json())
  .then((result) => {
        //  selectOptions(result)
        console.log(result)
  })
  .catch((error) => {
    console.log("error. information not found.");
  });





 //functions

 
// function selectOptions(result){
//    for(let i = 0; i < result.length; i++){
//         return (films.title)
//     }
// }

  


// To ensure Cypress tests work as expeded, add any code/functions that you would like to run on page load inside this function

function run() {
    
 }


// This function will "pause" the functionality expected on load long enough to allow Cypress to fully load
// So that testing can work as expected for now
// A non-hacky solution is being researched

//  setTimeout(run, 1000);

form.addEventListener("submit", addReview )
function addReview(event){
    postReview.apend(userReview)
}


// I spent the vast majorty of this time trying to get the api to run . 
// I finally got it but I cannot get any of the other tests to pass. lots of deleting code 
// so that i didn't submit half functions or a broken code. I ran out of time but will continue to work on & complete this project. 
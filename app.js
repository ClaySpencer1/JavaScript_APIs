console.log("Hello World!\n==========\n");

const URL= "https://api.giphy.com/v1/gifs/translate";
const KEY = "YUt8RJvHYaUGdyUww1trl62UQI4amixB";


// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
let searchInput = document.querySelector("#searchWord");
let searchBtn = document.querySelector("#submitSearch");
let gifEle = document.querySelector("#imageContainer > img");
let feedbackEle = document.querySelector("#feedback");

console.log("EXERCISE 2:\n==========\n");

searchBtn.addEventListener("click", (theEvent) => {
    fetch(`${URL}?api_key=${KEY}&s=${searchInput.value}`)
        .then((res) => res.json())
        .then((res) => {
            gifEle.src = res.data.images.original.url;
            searchInput.value = "";
            feedbackEle.textContent = "";
        })
        .catch((err) => {
            console.error(err);
            feedbackEle.textContent = err.message;
        });
});
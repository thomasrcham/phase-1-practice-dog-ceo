console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

let imgArray = []
let breedArray = []
let breedData = {}



document.addEventListener('DOMContentLoaded', function() {
    fetch(imgUrl)
        .then( (res) => res.json())
        .then( (data) => imgArray = data.message)
        .then( imgArray => imgArray.map(item => addImage(item)))

    fetch(breedUrl)
        .then( (res) => res.json())
        .then( (data) => {
            breedData = data.message;
            breedArray = Object.keys(breedData)
            return breedArray})
        .then( breedArray => breedArray.map(item => addBreed(item)))
})

function addImage (item) {
    let imgTag = document.createElement('img')
    document.querySelector('#dog-image-container').appendChild(imgTag)
    imgTag.setAttribute ('src',item)
    imgTag.setAttribute ('width','300px')
}

function addBreed (item) {
    // debugger;
    let newBreed = document.createElement('li')
    newBreed.textContent = item
    newBreed.setAttribute ('class','breedName')
    document.querySelector('#dog-breeds').append(newBreed)
    newBreed.addEventListener('click', (e) => {
        newBreed.setAttribute('style','red')})
}
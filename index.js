/*
 * Write your client-side JS code in this file.  Don't forget to include your
 * name and @oregonstate.edu email address below.
 *
 * Name: Amaru Palma
 * Email: palmaam@oregonstate.edu
 */

var postSection = document.getElementById("posts")
var addPostButton = document.getElementById("sell-something-button")
var modalBackdrop = document.getElementById("modal-backdrop")
var modalBody = document.getElementById("sell-something-modal")
var modalCloseButton = document.getElementById("modal-close")
var modalCancelButton = document.getElementById("modal-cancel")
var modalAcceptButton = document.getElementById("modal-accept")

function toggleSellModal() {
    modalBackdrop.classList.toggle("hidden")
    modalBody.classList.toggle("hidden")
}

function createPost() {
    var description = document.getElementById("post-text-input").value
    var url = document.getElementById("post-photo-input").value
    var price = document.getElementById("post-price-input").value
    var city = document.getElementById("post-city-input").value
    //var condition =

    var newPost = document.createElement("div")
    newPost.classList.add("post")
    newPost.dataset.price = price
    newPost.dataset.city = city
    //newPost.dataset.condition = condition

    var newPostContents = document.createElement("div")
    newPostContents.classList.add("post-contents")
    newPost.appendChild(newPostContents)

    var newPostImageContainer = document.createElement("div")
    newPostImageContainer.classList.add("post-image-container")
    newPostContents.appendChild(newPostImageContainer)

    var newPostImage = document.createElement("img")
    newPostImage.src = url
    newPostImage.alt = description
    newPostImageContainer.appendChild(newPostImage)

    var newPostInfoContainer = document.createElement("div")
    newPostInfoContainer.classList.add("post-info-container")
    newPostContents.appendChild(newPostInfoContainer)

    var newPostTitle = document.createElement("a")
    newPostTitle.href = "#"
    newPostTitle.classList.add("post-title")
    newPostTitle.textContent = description
    newPostInfoContainer.appendChild(newPostTitle)

    var newPostPrice = document.createElement("span")
    newPostPrice.classList.add("post-price")
    newPostPrice.textContent = "$" + price
    newPostInfoContainer.appendChild(newPostPrice)

    var newPostCity = document.createElement("span")
    newPostCity.classList.add("post-city")
    newPostCity.textContent = "(" + city + ")"
    newPostInfoContainer.appendChild(newPostCity)

    postSection.appendChild(newPost)
}

addPostButton.addEventListener("click", toggleSellModal)
modalCancelButton.addEventListener("click", toggleSellModal)
modalCloseButton.addEventListener("click", toggleSellModal)
modalAcceptButton.addEventListener("click", createPost)
modalAcceptButton.addEventListener("click", toggleSellModal)

/*to do
filtering: check for all data things vs filters and then remove the entire post div if no match
dataset of condition
clear post menu after closing*/
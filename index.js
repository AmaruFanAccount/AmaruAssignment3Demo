/*
 * Write your client-side JS code in this file.  Don't forget to include your
 * name and @oregonstate.edu email address below.
 *
 * Name: Amaru Palma
 * Email: palmaam@oregonstate.edu
 */

function toggleModal() {
    document.getElementById("modal-backdrop").classList.toggle("hidden")
    document.getElementById("sell-something-modal").classList.toggle("hidden")
}

function getPostCondition() {
    if (document.getElementById("post-condition-new").checked) {
        return "new"
    }
    else if (document.getElementById("post-condition-excellent").checked) {
        return "excellent"
    }
    else if (document.getElementById("post-condition-good").checked) {
        return "good"
    }
    else if (document.getElementById("post-condition-fair").checked) {
        return "fair"
    }
    else if (document.getElementById("post-condition-poor").checked) {
        return "poor"
    }
}

function createPost() {
    var newPost = document.createElement("div")
    newPost.classList.add("post")
    newPost.dataset.price = document.getElementById("post-price-input").value
    newPost.dataset.city = document.getElementById("post-city-input").value
    newPost.dataset.condition = getPostCondition()

    var newPostContents = document.createElement("div")
    newPostContents.classList.add("post-contents")
    newPost.appendChild(newPostContents)

    var newPostImageContainer = document.createElement("div")
    newPostImageContainer.classList.add("post-image-container")
    newPostContents.appendChild(newPostImageContainer)

    var newPostImage = document.createElement("img")
    newPostImage.src = document.getElementById("post-photo-input").value
    newPostImage.alt = document.getElementById("post-text-input").value
    newPostImageContainer.appendChild(newPostImage)

    var newPostInfoContainer = document.createElement("div")
    newPostInfoContainer.classList.add("post-info-container")
    newPostContents.appendChild(newPostInfoContainer)

    var newPostTitle = document.createElement("a")
    newPostTitle.href = "#"
    newPostTitle.classList.add("post-title")
    newPostTitle.textContent = document.getElementById("post-text-input").value
    newPostInfoContainer.appendChild(newPostTitle)

    var newPostPrice = document.createElement("span")
    newPostPrice.classList.add("post-price")
    newPostPrice.textContent = "$" + document.getElementById("post-price-input").value
    newPostInfoContainer.appendChild(newPostPrice)

    var newPostCity = document.createElement("span")
    newPostCity.classList.add("post-city")
    newPostCity.textContent = "(" + document.getElementById("post-city-input").value + ")"
    newPostInfoContainer.appendChild(newPostCity)

    document.getElementById("posts").appendChild(newPost)
}

function clearModal() {
    document.getElementById("post-text-input").value = ""
    document.getElementById("post-photo-input").value = ""
    document.getElementById("post-price-input").value = ""
    document.getElementById("post-city-input").value = ""
    document.getElementById("post-condition-new").checked = true
}

function createPostSafe() {
    if (document.getElementById("post-text-input").value == "" || document.getElementById("post-photo-input").value == "" || document.getElementById("post-price-input").value == "" || document.getElementById("post-city-input").value == "") {
        alert("Please fill out all post fields!")
    }
    else {
        createPost()
        toggleModal()
        clearModal()
    }
}

function filter() {
    var filterText = document.getElementById("filter-text").value
    var filterMinPrice = document.getElementById("filter-min-price").value
    var filterMaxPrice = document.getElementById("filter-max-price").value
    var filterCity = document.getElementById("filter-city").checked
    var filterConditionNew = document.getElementById("filter-condition-new").checked
    var filterConditionExcellent = document.getElementById("filter-condition-excellent").checked
    var filterConditionGood = document.getElementById("filter-condition-good").checked
    var filterConditionFair = document.getElementById("filter-condition-fair").checked
    var filterConditionPoor = document.getElementById("filter-condition-poor").checked

    console.log("filter text:", filterText)
    console.log("filter min price:", filterMinPrice)
    console.log("filter max price:", filterMaxPrice)
    console.log("filter city:", filterCity)
    console.log("filter condition new:", filterConditionNew)
    console.log("filter condition excellent:", filterConditionExcellent)
    console.log("filter condition good:", filterConditionGood)
    console.log("filter condition fair:", filterConditionFair)
    console.log("filter condition poor:", filterConditionPoor)
}


document.getElementById("sell-something-button").addEventListener("click", toggleModal)

document.getElementById("modal-cancel").addEventListener("click", toggleModal)
document.getElementById("modal-cancel").addEventListener("click", clearModal)

document.getElementById("modal-close").addEventListener("click", toggleModal)
document.getElementById("modal-close").addEventListener("click", clearModal)

document.getElementById("modal-accept").addEventListener("click", createPostSafe)

document.getElementById("filter-update-button").addEventListener("click", filter)
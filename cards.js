// When the user enters in text into the text area and then clicks the create 
//button, create a new card element in the DOM that includes it's own 
//delete button. You decide the height/width of the card.
//
//When the user clicks the Delete button, the containing card, 
//and no other cards, should then be removed from the DOM. 
//Not just made invisible, actually removed from the DOM.

//textarea & create button targets
let textArea = document.getElementById("inputText");
let createButton = document.getElementById("create");

//click button to send textarea text to card
createButton.addEventListener("click", function() {
    createCard(textArea.value);
});

//create card
function createCard(cardText) {
    //wrap holding cards
    let cardWrap = document.getElementById("cardHolder");
    //new card div
    let newCard = document.createElement("div");
    //delete button of new card
    let deleteButton = document.createElement("button");
    //add class to new card
    newCard.classList.add("theCard");
    //insert text (nested in p) to new card
    newCard.innerHTML = `<p>${cardText}</p>`;
    //label Delete Button
    deleteButton.innerHTML = "Delete";
    //add class to delete button(s)
    deleteButton.classList.add("delete");
    //nest delete button in new card
    newCard.appendChild(deleteButton);
    //nest new card in card wrapper
    cardWrap.appendChild(newCard);
    //event listen for delete button
    deleteButton.addEventListener("click", function () {
        // console.log("current target", event.currentTarget);
        //send targets parent node (card wrap) to function
        removeCard(event.target.parentNode);
    });
    function removeCard(e) {
        // console.log(e);
        //remove child of card wrap (new card)
        cardWrap.removeChild(e);
    }
};

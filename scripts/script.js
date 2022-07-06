const form = document.querySelector(".new-item-form");
const formSubmitBtn = form.querySelector('[type="submit"]');
const formInputField = form.querySelector("#item-input");
const list = document.querySelector("div#list");
const formClearBtn = form.querySelector('[type="button"]');

// ADDING TASKS
formSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // create new list item
    const newLi = document.createElement("li");
    newLi.classList.add("list-item");
    newLi.innerText = formInputField.value;

    // append to list only if this item is not empty
    if (newLi.innerText != "") {
        list.appendChild(newLi);
        formInputField.style.border = "1px solid black";
    } else {
        formInputField.style.border = "1px solid red";
    }

    //  append it to the list

    // clear input field
    formInputField.value = "";
    formInputField.dataset.inputLength = 0;

    // remove newLi if clicked on. we deal with this here cuz:
    // 1) the scoping makes sense
    // 2) just removing the li from the HTML wont work cuz the html doesnt have the item;
    // it only exists HERE
    newLi.addEventListener("click", (e) => {
        e.target.remove();
    });
});

// CLEAR TASKS
formClearBtn.addEventListener("click", (e) => {
    while (list.firstChild) {
        list.firstChild.remove();
    }
});

formInputField.addEventListener("input", (e) => {
    formInputField.dataset.inputLength = formInputField.value.length;
});

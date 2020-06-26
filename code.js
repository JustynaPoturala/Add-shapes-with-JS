const button = document.querySelector('button');
let counter = 1;
let number = 1;

const createElement = function () {
    const divElement = document.createElement('div');
    divElement.textContent = number;

    if (counter == 5) {
        divElement.classList.add("circle");
        counter = 1;
    }
    document.body.appendChild(divElement)
    counter++;
    number++;
}
button.addEventListener("click", createElement);
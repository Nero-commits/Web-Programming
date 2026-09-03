for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }

}



function addItem() {
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    li.textContent = "New Item";
    ul.appendChild(li);
}
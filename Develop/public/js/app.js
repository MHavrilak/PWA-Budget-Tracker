loadBudget();

function createBudget(number = "", classname) {
    const num = document.createElement(number);
    if(classname) {
        num.setAttribute("class", classname);
    }
    return num;
}

function loadNum() {
    fetch("/api/posts")
    .then(res => res.json())
    .then(data => createNum(data))
    .catch(err => console.log(err));
}

function createNum(data) {
    
}
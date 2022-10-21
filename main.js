let button = document.querySelector(".button");
let button1 = document.querySelector(".button1");
let phone = document.querySelector(".phone");
let pic = document.querySelector(".pic");

let str = pic.getAttribute("src");
let numArr = str.match(/\d+/g);

button.onclick = function() {
    if (numArr == numArr) {
        numArr++;
        pic.setAttribute("src", "./img/" + numArr + ".jpg");
    } 
    if (numArr > 4) {
        button.setAttribute("style", "visibility: hidden;")
    }
    if (numArr > 1) {
        button1.setAttribute("style", "visibility: visible;")
    }
    console.log(numArr)

}

button1.onclick = function() {
    if (numArr == numArr) {
        numArr--;
        pic.setAttribute("src", "./img/" + numArr + ".jpg");
    }    
    if (numArr < 5) {
        button.setAttribute("style", "visibility: visible;")
    }   
    if (numArr == 1) {
        button1.setAttribute("style", "visibility: hidden;")
    }
    console.log(numArr)
}

phone.onclick = function() {
    let popup = document.createElement("div");
    document.body.append(popup);
    popup.setAttribute("class", "ttt");
    
    let ex = document.createElement("input");
    ex.setAttribute("type", "image");
    ex.setAttribute("src", "./img/17047.png")
    ex.setAttribute("class", "exit")
    popup.append(ex);

    ex.onclick = function() {
        popup.remove();
    }
}
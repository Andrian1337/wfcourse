
let screenPrice;
let percentage = 10;
let allServicePrice;
let newTitle = "";
let titleProject;
let screensValue;
let responsive;
let serviceFirst;
let serviceSecond;

const checkIsNumber = function (x) {
    return !isNaN(parseFloat(x)) && isFinite(x)
}

const ask = function () {
    titleProject = prompt("Название проекта", "нИкитОсик")
    screensValue = prompt("Шаблонные, с уникальным дизайном, с анимациями", "С анимациями")
    responsive = prompt("Нужна ли флюидная верстка", "Нужна")

    screenPrice = prompt("Сколько это будет стоить?", "10000")

    while (!checkIsNumber(screenPrice) || screenPrice.trim() === "", screenPrice === null)
        screenPrice = prompt("Сколько это будет стоить?")

    screenPrice = Number(screenPrice)

} 

const getAllServicePrices = function () {
    let sum = 0

    for ( let i = 0; i < 2; i++ ) {

        if (i === 0) {
            serviceFirst = prompt("Какая будет дополнительная услуга?")
        } else if ( i === 1) {
            serviceSecond = prompt("Как еще будет дополнительная услуга?")
        }

        let textFromPrompt = ""

        while (!checkIsNumber(textFromPrompt) || textFromPrompt.trim() === "" || textFromPrompt === null) {
            textFromPrompt = prompt("Сколько это будет стоить?")
        }

        sum += Number(textFromPrompt)
    }

    return sum
}


function getFullPrice () {
    return screenPrice + allServicePrice
}

const getAllServicePercentPrice = function () {
    return fullPrice - (fullPrice * (percentage/100))
}

const getTitle = function () {
    return titleProject.trim()[0].toUpperCase() + titleProject.trim().slice(1).toLowerCase()
}

const getRollbackMessage = (fullPrice) => {
    if (fullPrice > 50000) {
        console.log("Вам плотная скидочка 10%!");
    } else if (fullPrice > 20000 && fullPrice < 50000) {
        console.log("Вам скидочка 5%!");
    } else if (fullPrice < 20000) {
        console.log("Торга нет");
    } else if (fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) {
        console.log("Приятного сервиса");
    } else {
        console.log("Упс")
    }
}


ask();
allServicePrice = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getAllServicePercentPrice();
newTitle = getTitle();


console.log(newTitle);
console.log(allServicePrice);
console.log(fullPrice);
console.log(Math.ceil(servicePercentPrice));
getRollbackMessage(fullPrice);
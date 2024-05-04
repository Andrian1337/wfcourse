let screenPrice = 5000;
let percentValue = 10;

const titleProject = prompt("Название проекта?");
console.log(titleProject);
const screensValue = prompt("Тип экранов: Шаблонные, с уникальным дизайном, с анимациями");
console.log(screensValue);
const responsiveSite = prompt("Нужен ли респонсивный сайт?");
console.log(responsiveSite);
const service1 = prompt("Какой сервис нужен?");
console.log(service1);
const servicePrice1 = parseFloat(prompt("Сколько это будет стоить?"));
console.log(servicePrice1);
const service2 = prompt("Какой еще сервис тебе нужен?");
console.log(service2);
const servicePrice2 = parseFloat(prompt("Сколько будет стоить этот второй сервис?"));
console.log(servicePrice2);




function getAllServicePrices() {
    return servicePrice1 + servicePrice2;
}
const AllServicePrices = getAllServicePrices();

function getFullPrice() {
    return AllServicePrices + screenPrice;
}

let fullPrice = getFullPrice();

function getTitle(titleProject) {
    return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLocaleLowerCase();
}
const newTitleProject = getTitle(titleProject);
console.log(newTitleProject);

function getServicePercentPrices () {
    let percentageResult = fullPrice * (percentValue / 100);
    return fullPrice - percentageResult
}

let servicePercentPrice = getServicePercentPrices();

const getRollbackMessage = () => {
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

getRollbackMessage();

const titleProject = prompt("Название проекта?");
const screensValue = prompt("Тип экранов: Шаблонные, с уникальным дизайном, с анимациями");
const responsiveSite = promt("Нужен ли респонсивный сайт?");
const service1 = promt("Какой сервис нужен?");
const servicePrice1 = promt ("Сколько это будет стоить?");
const service2 = promt("Какой еще сервис тебе нужен?");
const servicePrice2 = promt ("Сколько будет стоить этот второй сервис?");

const fullPrice = servicePrice1 + servicePrice2;

let servicePercentPrice = fullPrice - 20;
console.log(servicePercentPrice)

if ( fullPrice > 50000 ) {
    console.log ("Вам плотная скидочка 10%!")
} else if ( fullPrice > 20000 && fullPrice < 50000 ) {
    console.log ("Вам скидочка 5%!")
} else if ( fullPrice < 20000 ) {
    console.log ("Торга нет")
} else if ( fullPrice = 0, 20000, 50000 ) {
    console.log ("Добавьте рубль для скидки")
};



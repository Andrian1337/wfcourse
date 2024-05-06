const getBotFunction = function () {

    let tryNumber = 3;

    function randomGenerate(min, max) {
        return Math.random() * (max - min) + min;
    }

    let min = 1;
    let max = 10;

    let mysteryNumber = Math.ceil(randomGenerate(min, max));
    console.log(mysteryNumber);

    const checkIsNumber = function (x) {
        return!isNaN(parseFloat(x)) && isFinite(x);
    }

    function promptValue() {
        let answerNum = prompt("Угадай число от 1 до 10");

        if (answerNum === null) {
            alert("Вы завершили игру")
            alert("Может хотите попробовать снова?")
            tryNumber = 3
            return getBotFunction();
        }

        while (!checkIsNumber(answerNum)) {
            alert("Введите корректное число");
            answerNum = prompt("Угадай число от 1 до 10");
        }

        if (answerNum === mysteryNumber.toString()) {
            alert("Поздравляю, вы угадали");
            
            if(confirm("Может, хотите попробовать снова")) {
                tryNumber = 3;
                getBotFunction();
            }
        } else {
            tryNumber--;
            if (tryNumber > 0) {
                if (mysteryNumber > answerNum) {
                    alert("Загаданное число больше вашего ответа. Осталось попыток: " + tryNumber);
                } else if (mysteryNumber < answerNum) {
                    alert("Загаданное число меньше вашего ответа. Осталось попыток: " + tryNumber);
                }
                
                promptValue();
            } else {
                alert("Ваши попытки закончились. Игра закончена");
                if (confirm("Может хотите попробовать снова?")){
                    tryNumber = 3
                    return getBotFunction();    
                }
            }
        }
    }    
    promptValue();
}

getBotFunction();

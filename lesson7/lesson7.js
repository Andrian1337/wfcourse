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
                alert(`Осталось ${tryNumber} попыток, попробуйте еще раз`);
                promptValue();
            } else {
                alert("Ваши попытки закончились. Игра закончена");
            }
        }
    }

    promptValue();
}

getBotFunction();

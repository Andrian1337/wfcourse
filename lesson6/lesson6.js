let servicePrice1;
let servicePrice2;

const getAllServicePrices = function() {
    for ( let i = 1; i <= 2; i++) {
        let textFromPromt = i === 1 ? "Сколько стоит первая услуга?" : "Сколько стоит вторая услуга?";

        let isValidInput = false

        while (!isValidInput) {
            let sum;
            let valueInput = prompt(textFromPromt);
            let parseNumber = parseFloat(valueInput);

            if (!isNaN(parseNumber) && valueInput.trim() !== "" && valueInput !== null) {
                if (i === 1) {
                    servicePrice1 = parseNumber;
                    console.log("Стоимость первой услуги?", servicePrice1)
                } else {
                    servicePrice2 = parseNumber;
                    console.log("Стоимость второй услуги?", servicePrice2)
                }
                
                isValidInput = true
            } else {
                alert("Введите стоимость услуги")
            }
        }
    }
    sum = servicePrice1 + servicePrice2;
    console.log("Стоимость всех услуг", sum)
}

getAllServicePrices();

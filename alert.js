while(true){

let level = Number(prompt("Выбери уровень:\n1 — Легко\n2 — Средне\n3 — Сложно"));
let maxNumber;

let guess = null;
let attempts = 0;
let maxAttempts;


if(level === 1){
    maxNumber = 10;
    maxAttempts = 5;
}
else if(level === 2){
    maxNumber = 50;
    maxAttempts = 7;
}
else{
    maxNumber = 100;
    maxAttempts = 10;
}

let secret = Math.floor(Math.random() * maxNumber) + 1;

while (guess !== secret && attempts < maxAttempts){


    guess = Number(prompt(`Угадай число от 1 до ${maxNumber}`))
    if (isNaN(guess)) {
        alert("Введите число!");
        continue;
    }
    attempts++;

    if(guess > secret){
        alert("Много")
    }
    else if(guess < secret){
        alert("Мало")
    }
}

    if(guess === secret){
        alert(`🎉 Победа за ${attempts} попытки!`)
    }
    else{
        alert(`❌ Ты проиграла. Число было: ${secret}`)
    }

    let again = confirm("Хочешь сыграть ещё?");

    if(again === false){
        break;
    }

}



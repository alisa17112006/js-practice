let secret = Math.floor(Math.random() * 10) + 1;
let guess = null;
let attempts = 0;
let maxAttempts = 5;

while (guess !== secret && attempts < maxAttempts){
    guess = Number(prompt("Угадай число от 1 до 10"))
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




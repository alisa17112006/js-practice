function getHint(secret, guess, hotLimit, warmLimit) {
    let distance = Math.abs(secret - guess);

    if (distance <= hotLimit) {
        return "🔥 Горячо";
    } 
    else if (distance <= warmLimit) {
        return "🌤 Тепло";
    } 
    else {
        return "❄ Холодно";
    }
}

while (true) {

    let level = Number(prompt("Выбери уровень:\n1 — Легко\n2 — Средне\n3 — Сложно"));

    if (![1, 2, 3].includes(level)) {
        alert("Выберите уровень из доступных!");
        continue;
    }

    let maxNumber;
    let maxAttempts;
    let hotLimit;
    let warmLimit;

    if (level === 1) {
        maxNumber = 10;
        maxAttempts = 5;
        hotLimit = 2;
        warmLimit = 5;
    }
    else if (level === 2) {
        maxNumber = 50;
        maxAttempts = 7;
        hotLimit = 5;
        warmLimit = 12;
    }
    else {
        maxNumber = 100;
        maxAttempts = 10;
        hotLimit = 10;
        warmLimit = 25;
    }

    let secret = Math.floor(Math.random() * maxNumber) + 1;

    let guess = null;
    let attempts = 0;

    while (guess !== secret && attempts < maxAttempts) {

        guess = Number(prompt(`Угадай число от 1 до ${maxNumber}`));

        if (isNaN(guess)) {
            alert("Введите число!");
            continue;
        }

        attempts++;

        let hint = getHint(secret, guess, hotLimit, warmLimit);
        alert(hint);
    }

    if (guess === secret) {
        alert(`🎉 Победа за ${attempts} попыток!`);
    } 
    else {
        alert(`❌ Ты проиграла. Число было: ${secret}`);
    }

    let again = confirm("Хочешь сыграть ещё?");

    if (!again) {
        break;
    }
}

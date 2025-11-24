// --- Переменные игры ---
let score = 0;
let click_power = 1;

// --- Обновление интерфейса ---
function update_display() {
    document.getElementById('score-display').innerText = `Очки: ${score}`;
    document.getElementById('click-power-display').innerText = `Сила клика: ${click_power}`;

    // Обновление цен на кнопках прокачки
    const upgrades_div = document.getElementById('upgrades');
    upgrades_div.children[0].innerText = `Сила +1 (Цена: ${10 * click_power})`;
    upgrades_div.children[1].innerText = `Сила +5 (Цена: ${50 * click_power})`;
}

// --- Обработка клика ---
function handle_click() {
    score += click_power;
    update_display();
}

// --- Обработка покупки улучшения ---
function buy_upgrade(amount) {
    const base_cost = (amount === 1) ? 10 : 50;
    const cost = base_cost * click_power; // Цена растет
    
    if (score >= cost) {
        score -= cost;
        click_power += amount;
        alert(`Куплено! Сила клика теперь ${click_power}`);
        update_display();
    } else {
        alert(`Недостаточно очков! Нужно: ${cost}`);
    }
}

// Инициализация при загрузке страницы
update_display();
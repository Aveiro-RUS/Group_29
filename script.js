// Данные о регионах PlayStation Store
const regions = [
    { id: 'US', name: 'США', currency: 'USD', symbol: '$', flag: '🇺🇸' },
    { id: 'GB', name: 'Великобритания', currency: 'GBP', symbol: '£', flag: '🇬🇧' },
    { id: 'DE', name: 'Германия', currency: 'EUR', symbol: '€', flag: '🇩🇪' },
    { id: 'FR', name: 'Франция', currency: 'EUR', symbol: '€', flag: '🇫🇷' },
    { id: 'JP', name: 'Япония', currency: 'JPY', symbol: '¥', flag: '🇯🇵' },
    { id: 'CA', name: 'Канада', currency: 'CAD', symbol: 'C$', flag: '🇨🇦' },
    { id: 'AU', name: 'Австралия', currency: 'AUD', symbol: 'A$', flag: '🇦🇺' },
    { id: 'BR', name: 'Бразилия', currency: 'BRL', symbol: 'R$', flag: '🇧🇷' },
    { id: 'RU', name: 'Россия', currency: 'RUB', symbol: '₽', flag: '🇷🇺' },
    { id: 'TR', name: 'Турция', currency: 'TRY', symbol: '₺', flag: '🇹🇷' },
    { id: 'AR', name: 'Аргентина', currency: 'ARS', symbol: 'AR$', flag: '🇦🇷' },
    { id: 'MX', name: 'Мексика', currency: 'MXN', symbol: 'MX$', flag: '🇲🇽' },
    { id: 'IN', name: 'Индия', currency: 'INR', symbol: '₹', flag: '🇮🇳' },
    { id: 'ZA', name: 'ЮАР', currency: 'ZAR', symbol: 'R', flag: '🇿🇦' },
    { id: 'KR', name: 'Южная Корея', currency: 'KRW', symbol: '₩', flag: '🇰🇷' }
];

// Курсы валют (примерные)
const exchangeRates = {
    USD: 1,
    EUR: 1.08,
    GBP: 1.27,
    JPY: 0.0067,
    CAD: 0.74,
    AUD: 0.66,
    BRL: 0.21,
    RUB: 0.011,
    TRY: 0.031,
    ARS: 0.0012,
    MXN: 0.059,
    INR: 0.012,
    ZAR: 0.054,
    KRW: 0.00075
};

// Пример данных игр (в реальном проекте это будет API)
const sampleGames = {
    'God of War Ragnarök': {
        title: 'God of War Ragnarök',
        genre: 'Action-Adventure',
        publisher: 'Sony Interactive Entertainment',
        prices: {
            US: { local: 69.99, usd: 69.99 },
            GB: { local: 59.99, usd: 76.19 },
            DE: { local: 69.99, usd: 75.59 },
            FR: { local: 69.99, usd: 75.59 },
            JP: { local: 7980, usd: 53.47 },
            CA: { local: 89.99, usd: 66.59 },
            AU: { local: 109.95, usd: 72.57 },
            BR: { local: 349.90, usd: 73.48 },
            RU: { local: 4999, usd: 54.99 },
            TR: { local: 1299, usd: 40.27 },
            AR: { local: 11999, usd: 14.40 },
            MX: { local: 1399, usd: 82.54 },
            IN: { local: 3999, usd: 47.99 },
            ZA: { local: 1299, usd: 70.15 },
            KR: { local: 89000, usd: 66.75 }
        }
    },
    'Spider-Man 2': {
        title: 'Marvel\'s Spider-Man 2',
        genre: 'Action-Adventure',
        publisher: 'Sony Interactive Entertainment',
        prices: {
            US: { local: 69.99, usd: 69.99 },
            GB: { local: 59.99, usd: 76.19 },
            DE: { local: 69.99, usd: 75.59 },
            FR: { local: 69.99, usd: 75.59 },
            JP: { local: 7980, usd: 53.47 },
            CA: { local: 89.99, usd: 66.59 },
            AU: { local: 109.95, usd: 72.57 },
            BR: { local: 349.90, usd: 73.48 },
            RU: { local: 4999, usd: 54.99 },
            TR: { local: 1299, usd: 40.27 },
            AR: { local: 11999, usd: 14.40 },
            MX: { local: 1399, usd: 82.54 },
            IN: { local: 3999, usd: 47.99 },
            ZA: { local: 1299, usd: 70.15 },
            KR: { local: 89000, usd: 66.75 }
        }
    },
    'Final Fantasy XVI': {
        title: 'Final Fantasy XVI',
        genre: 'RPG',
        publisher: 'Square Enix',
        prices: {
            US: { local: 69.99, usd: 69.99 },
            GB: { local: 59.99, usd: 76.19 },
            DE: { local: 69.99, usd: 75.59 },
            FR: { local: 69.99, usd: 75.59 },
            JP: { local: 8980, usd: 60.17 },
            CA: { local: 89.99, usd: 66.59 },
            AU: { local: 109.95, usd: 72.57 },
            BR: { local: 349.90, usd: 73.48 },
            RU: { local: 4999, usd: 54.99 },
            TR: { local: 1299, usd: 40.27 },
            AR: { local: 11999, usd: 14.40 },
            MX: { local: 1399, usd: 82.54 },
            IN: { local: 3999, usd: 47.99 },
            ZA: { local: 1299, usd: 70.15 },
            KR: { local: 99000, usd: 74.25 }
        }
    },
    'Baldur\'s Gate 3': {
        title: 'Baldur\'s Gate 3',
        genre: 'RPG',
        publisher: 'Larian Studios',
        prices: {
            US: { local: 59.99, usd: 59.99 },
            GB: { local: 49.99, usd: 63.49 },
            DE: { local: 59.99, usd: 64.79 },
            FR: { local: 59.99, usd: 64.79 },
            JP: { local: 6980, usd: 46.77 },
            CA: { local: 79.99, usd: 59.19 },
            AU: { local: 99.95, usd: 65.97 },
            BR: { local: 299.90, usd: 62.98 },
            RU: { local: 3999, usd: 43.99 },
            TR: { local: 999, usd: 30.97 },
            AR: { local: 9999, usd: 12.00 },
            MX: { local: 1199, usd: 70.74 },
            IN: { local: 3499, usd: 41.99 },
            ZA: { local: 1099, usd: 59.35 },
            KR: { local: 79000, usd: 59.25 }
        }
    }
};

// DOM элементы
const gameSearch = document.getElementById('gameSearch');
const searchBtn = document.getElementById('searchBtn');
const sortSelect = document.getElementById('sortSelect');
const currencySelect = document.getElementById('currencySelect');
const results = document.getElementById('results');
const loading = document.getElementById('loading');
const noResults = document.getElementById('noResults');
const gamesGrid = document.getElementById('gamesGrid');

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Обработчики событий
    searchBtn.addEventListener('click', searchGames);
    gameSearch.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') searchGames();
    });
    sortSelect.addEventListener('change', function() {
        if (gamesGrid.children.length > 0) {
            displayResults(currentSearchResults);
        }
    });
    currencySelect.addEventListener('change', function() {
        if (gamesGrid.children.length > 0) {
            displayResults(currentSearchResults);
        }
    });

    // Обработчики для популярных игр
    document.querySelectorAll('.popular-game').forEach(game => {
        game.addEventListener('click', function() {
            const gameTitle = this.getAttribute('data-game');
            gameSearch.value = gameTitle;
            searchGames();
        });
    });

    // Показать загрузку при первом открытии
    showLoading();
});

let currentSearchResults = [];

// Функция поиска игр
function searchGames() {
    const query = gameSearch.value.trim().toLowerCase();
    
    if (!query) {
        showNoResults();
        return;
    }

    showLoading();
    
    // Имитация задержки API
    setTimeout(() => {
        const results = searchGamesData(query);
        if (results.length > 0) {
            currentSearchResults = results;
            displayResults(results);
        } else {
            showNoResults();
        }
    }, 1000);
}

// Поиск в данных игр
function searchGamesData(query) {
    const results = [];
    
    for (const [title, gameData] of Object.entries(sampleGames)) {
        if (title.toLowerCase().includes(query) || 
            gameData.genre.toLowerCase().includes(query) ||
            gameData.publisher.toLowerCase().includes(query)) {
            results.push(gameData);
        }
    }
    
    return results;
}

// Отображение результатов
function displayResults(games) {
    hideLoading();
    hideNoResults();
    
    const sortedGames = sortGames(games);
    const filteredGames = filterByCurrency(sortedGames);
    
    gamesGrid.innerHTML = '';
    
    filteredGames.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });
    
    gamesGrid.style.display = 'grid';
}

// Создание карточки игры
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    
    const prices = Object.entries(game.prices);
    const bestPrice = prices.reduce((min, [region, price]) => 
        price.usd < min.usd ? { region, price } : min, 
        { region: 'US', price: { usd: Infinity } }
    );
    
    card.innerHTML = `
        <div class="game-header">
            <img src="https://via.placeholder.com/80x80/1f2937/ffffff?text=${encodeURIComponent(game.title.split(' ')[0])}" 
                 alt="${game.title}" class="game-image">
            <div class="game-info">
                <h3>${game.title}</h3>
                <p>${game.genre} • ${game.publisher}</p>
            </div>
        </div>
        <div class="prices-list">
            ${prices.map(([regionId, price]) => {
                const region = regions.find(r => r.id === regionId);
                const isBestPrice = regionId === bestPrice.region;
                const priceClass = isBestPrice ? 'price-item best-price' : 'price-item';
                
                return `
                    <div class="${priceClass}">
                        <div class="price-info">
                            <span class="region-name">${region.flag} ${region.name}</span>
                            <span class="price-local">${region.symbol}${price.local.toLocaleString()}</span>
                            <span class="price-usd">$${price.usd.toFixed(2)} USD</span>
                        </div>
                        ${isBestPrice ? '<span class="best-price-badge">Лучшая цена</span>' : ''}
                    </div>
                `;
            }).join('')}
        </div>
    `;
    
    return card;
}

// Сортировка игр
function sortGames(games) {
    const sortBy = sortSelect.value;
    
    switch (sortBy) {
        case 'price-desc':
            return games.sort((a, b) => {
                const aMinPrice = Math.min(...Object.values(a.prices).map(p => p.usd));
                const bMinPrice = Math.min(...Object.values(b.prices).map(p => p.usd));
                return bMinPrice - aMinPrice;
            });
        case 'price-asc':
            return games.sort((a, b) => {
                const aMinPrice = Math.min(...Object.values(a.prices).map(p => p.usd));
                const bMinPrice = Math.min(...Object.values(b.prices).map(p => p.usd));
                return aMinPrice - bMinPrice;
            });
        case 'region':
            return games.sort((a, b) => a.title.localeCompare(b.title));
        case 'name':
        default:
            return games.sort((a, b) => a.title.localeCompare(b.title));
    }
}

// Фильтрация по валюте
function filterByCurrency(games) {
    const currencyFilter = currencySelect.value;
    
    if (currencyFilter === 'both') {
        return games;
    }
    
    // В данном случае возвращаем все игры, так как у нас уже есть цены в обеих валютах
    return games;
}

// Показать загрузку
function showLoading() {
    loading.style.display = 'block';
    noResults.style.display = 'none';
    gamesGrid.style.display = 'none';
}

// Скрыть загрузку
function hideLoading() {
    loading.style.display = 'none';
}

// Показать "нет результатов"
function showNoResults() {
    hideLoading();
    noResults.style.display = 'block';
    gamesGrid.style.display = 'none';
}

// Скрыть "нет результатов"
function hideNoResults() {
    noResults.style.display = 'none';
}

// Функция для получения актуальных курсов валют (в реальном проекте)
async function fetchExchangeRates() {
    try {
        // Здесь будет API запрос к сервису курсов валют
        // Например: https://api.exchangerate-api.com/v4/latest/USD
        console.log('Fetching exchange rates...');
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
    }
}

// Функция для получения цен игр из PlayStation Store API (в реальном проекте)
async function fetchGamePrices(gameTitle) {
    try {
        // Здесь будет API запрос к PlayStation Store
        console.log(`Fetching prices for: ${gameTitle}`);
    } catch (error) {
        console.error('Error fetching game prices:', error);
    }
}
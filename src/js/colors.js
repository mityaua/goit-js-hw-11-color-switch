// Массив цветов
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

// Кнопки в DOM
const startBtnRef = document.querySelector('[data-action="start"]');
const stopBtnRef = document.querySelector('[data-action="stop"]');

// Обьект с методами
const changer = {
  intervalID: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    startBtnRef.disabled = true;

    this.intervalID = setInterval(() => {
      updateBody();
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalID);

    this.intervalID = null;
    this.isActive = false;

    startBtnRef.disabled = false;
  },
};

// Слушатели событий на кнопках
startBtnRef.addEventListener('click', changer.start.bind(changer));
stopBtnRef.addEventListener('click', changer.stop.bind(changer));

// Генерирует случайный цвет
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Обновляет цвет фона случайным цветом
function updateBody() {
  const randomColor = randomIntegerFromInterval(0, colors.length - 1);
  document.body.style.backgroundColor = colors[randomColor];
}

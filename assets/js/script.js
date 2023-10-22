
// block 2

// Функция, которая будет проверять, виден ли элемент в окне браузера
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для обработки события прокрутки
function handleScroll() {
    const blocks = document.querySelectorAll('.my_block2_right');

    blocks.forEach((block) => {
        if (isElementInViewport(block)) {
            block.classList.add('active'); // Добавляем класс "active", когда блок видим
        } else {
            block.classList.remove('active'); // Удаляем класс "active", когда блок не видим
        }
    });
}

// Добавляем обработчик события прокрутки
window.addEventListener('scroll', handleScroll);

// Инициализируем обработку события для начального состояния
handleScroll();


// block 3

// Функция для генерации элементов внутри .carousel-inner
function generateCarouselItems() {
    const carouselInner = document.getElementById('carousel-inner');

    if (window.innerWidth > 991) {
        // Ширина экрана больше 991px, генерируем первый набор элементов
        carouselInner.innerHTML = `
            <div class="carousel-item active">
                <img src="assets/img/works/new/big1.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="assets/img/works/new/big2.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="assets/img/works/new/big3.png" class="d-block w-100" alt="...">
            </div>

        `;
    } else {
        // Ширина экрана меньше или равна 991px, генерируем второй набор элементов
        carouselInner.innerHTML = `

            <div class="carousel-item active">
                <img src="assets/img/works/new/123.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item ">
                <img src="assets/img/works/new/1234.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item ">
                <img src="assets/img/works/new/12345.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item ">
                <img src="assets/img/works/new/123123.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="assets/img/works/slide9.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item ">
                <img src="assets/img/works/new/123456.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item ">
                <img src="assets/img/works/new/1234567.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item ">
                <img src="assets/img/works/new/123123123.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item ">
                <img src="assets/img/works/new/12.png" class="d-block w-100" alt="...">
            </div>
        `;
    }
}

// Вызываем функцию при загрузке страницы и изменении размера окна
window.addEventListener('load', generateCarouselItems);
window.addEventListener('resize', generateCarouselItems);

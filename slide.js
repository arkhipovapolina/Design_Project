let cityCards = [
    {
        url: 'img/image_2.1.jpg',
        cityName: 'Rostov-on-Don LCD admiral',
        repairTime: '3.5 months',
        apartmentArea: '81 m2'
    },
    {
        url: 'img/image_2.2.jpg',
        cityName: 'Sochi Thieves',
        repairTime: '4 month',
        apartmentArea: '105 m2'
    },
    {
        url: 'img/image_2.3.jpg',
        cityName: 'Rostov-on-Don Patriotic',
        repairTime: '3 months',
        apartmentArea: '93 m2'
    },
];

let imageParent = document.querySelector('.section_middle_room');
let cityName = document.querySelector('.replacementCity');
let repairTime = document.querySelector('.replacementApartmentArea');
let apartmentArea = document.querySelector('.replacementRepairTime');

let arrowLeft = document.querySelector('.arrow_left');
let arrowRight = document.querySelector('.arrow_right');
let dots = document.querySelectorAll('.section_middle__button');
let links = document.querySelectorAll('.second-section__list-button');
let navigateElements = document.querySelectorAll('[data-index]');

let currentIndex = 0;

function initSlider(index){
    imageParent.innerHTML = `<img class="section_middle_room" src="${cityCards[index].url}">`
    cityName.innerText = cityCards[index].cityName
    repairTime.innerText = cityCards[index].repairTime
    apartmentArea.innerText = cityCards[index].apartmentArea
}
initSlider(currentIndex);

arrowLeft.addEventListener('click', () => {
    currentIndex !== 0 ? currentIndex -= 1 : currentIndex = cityCards.length - 1
    initSlider(currentIndex);
    activeClass(currentIndex);
})

arrowRight.addEventListener('click', () => {
    currentIndex !== cityCards.length - 1 ? currentIndex += 1 : currentIndex = 0
    initSlider(currentIndex);
    activeClass(currentIndex);
})

navigateElements.forEach((item) => {
    item.addEventListener('click', (event) => {
        console.log(event.target.getAttribute('data-index'))
        currentIndex = Number(event.target.getAttribute('data-index'))
        initSlider(currentIndex);
        
    })
})

classList.add('section_middle_text')
item.classList.add('section_middle__button-group')

function activeClass(index){
    dots[index].classList.add('active');
    links[index].classList.add('second-section__list-button--active');
}
activeClass(currentIndex);

dots.forEach((dot) => {
        dot.addEventListener('click', (event) => {
        dot.classList.add('active');
        dots.forEach(item => item.classList.remove('active'));
        currentIndex = Number(event.target.getAttribute('data-index'));
        initSlider(currentIndex);
    })
})

links.forEach((links) => {
    links.addEventListener('click', (event) => {
        links.forEach(item => item.classList.remove('second-section__list-button--active'));
        links.classList.add('second-section__list-button--active')
        currentIndex = Number(event.target.getAttribute('data-index'))
        initSlider(currentIndex);
    })
})

navigateElements.forEach((item) => {
    if(Number(item.getAttribute('data-index')) === index) {
        item.classList.add('active')
    } else {
        if(item.classList.contains('active')) {
            item.classList.remove('active')
        }
    }
})

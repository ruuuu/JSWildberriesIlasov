const search = () => {
    const input = document.querySelector('.search-block > input'); // в блоке search-block ищем тэг input
    const searchBtn = document.querySelector('.search-block > button'); // кнпока поиска


    // input.addEventListener('input', (evt) => {  //событиепроихойдет при кажом воде символа в поле ввода
    //     //console.log(evt.target); // evt - обънет собвтия, evt создаемся  вммоент наступления события, evt.target выведет эдемент на котором произошло соытие
    //     //console.log(evt.target.value);
    // });

    searchBtn.addEventListener('click', () => {
        console.log(input.value); // вывдет то что ввели в поле поиска
    })

    console.log(input.value);

}


search();


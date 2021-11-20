const cart = () => {
    // const cart = document; // выведет всю верстку  в виде объекта
    // console.log(cart);


    const cartBtn = document.querySelector('.button-cart'); // кнпока В корзину
    const cart = document.getElementById('modal-cart'); // мод окно для добвления товара в корзину, getElementById быстрее отработает
    const closeBtn = document.querySelector('.modal-close'); // крестик на модлаке


    //console.dir(cartBtn); // выведет эелмент в вивде объекта
    // console.log(cartBtn.innerHTML);
    // console.log(cartBtn.classList);

    // onclick, onchange, oncopy это свойства объекта,  азначит в них можем записать только одну фукнцию, если запишем две фукнции то отработает последня, а c помощью  addEventListener на один желемет можем повесить несколкьо событий , причем фукнции передаем разные и отработают обе функции при клике
    // cartBtn.onclick = function () {
    //     console.log('hello');
    // }


    // cartBtn.onclick = function () {
    //     console.log('Привет');
    // }



    // cartBtn.addEventListener('click', () => {
    //     console.log('hello');
    // });

    // cartBtn.addEventListener('click', () => {
    //     console.log('Привет');
    // });

    cartBtn.addEventListener('click', () => { //  модака окрывается
        cart.style.display = 'flex';
    });


    closeBtn.addEventListener('click', () => { // кнопк азакрытия крестик
        cart.style.display = '';  // то ест оичищаем предыдущее значение
    })
}

cart(); // вызов функции , теперь меременные в фкнции досупны только в этой фукнции, т е код инкапсулировали. Теперь в любой др фукнци можем создввать переменные с названием котые есть в этой функции , ошибки уже не будет

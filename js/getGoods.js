const getGoods = () => {

    const links = document.querySelectorAll('.navigation-link');

    const getData = () => {
        /// для полученя данныхт сервера
        fetch('https://wildberries-12028-default-rtdb.firebaseio.com/db.json')
            .then((response) => {
                //console.log(response.json()); //также можно юзать response.text()-ответ  от серерва в виде строки,  это ответ отсервера, метод then принимает фукнию, это метод обработает тогда, когда данны от сервера пришли
                return response.json(); // вернет объект
            })
            .then((data) => { // data- объект [{}, {}, {}]
                localStorage.setItem('goods', JSON.stringify(getData())); // lovslStorage - глоб объект
            })
    }




    links.forEach((link) => { // для кажого элеента масива запустится функция(коллбэк) передаваемая в forEach

        link.addEventListener('click', (evt) => { // вешаем событие на текущую ссылку
            evt.preventDefault(); // отменяем дейсвтие по умолчанию, те  редирект на станицу 
            //console.log(getData());
            getData();
        });
    })

    // //localStorage.setItem('goods', JSON.stringify({ name: 'all' })); // localStorage - глоб объект
    // const goods = JSON.parse(localStorage.getItem('goods')); //  переовдит объект в строку
    // console.log(goods);

    //localStorage.removeItem('goods'); // удаляем из хрнаилища


}

getGoods();


//  в бразуре в Session Starage храимая/извлекаемая инфа очищается когда станицу закрыываем
// в localStorage  данные примутсвуют  до тех пор, пока мы руками или прогарммно их не удалим.Отсда тоже можео извлекать инфу
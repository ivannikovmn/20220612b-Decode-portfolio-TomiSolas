// console.log('work');
function check_url(i){ // https://developer.mozilla.org/ru/docs/Web/API/Element/classList      
    let elem = document.querySelector(i)

    // //Выведем классы
    // console.log(elem.classList); //DOMTokenList [""]

    // //Добавим классы
    elem.classList.add("check_url");
    // console.log(elem.classList); //DOMTokenList ["check_url"]
} 
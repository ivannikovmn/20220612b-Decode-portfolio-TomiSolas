let items = document.querySelectorAll('.item')
// console.log(items);
items.forEach(item => {
    // console.log(item);
    item.innerHTML = 0
    let endValue = item.getAttribute('data-num')
    // console.log(endValue);
    let increment = endValue / 30 //число меньше быстрее крутится
    function changeNumber(){
        let value = +item.innerHTML
        if(value < endValue){
            value += Math.round(increment)
            item.innerHTML = value
            setTimeout(changeNumber , 100)
        }else{
            item.innerHTML = endValue
        }
    }
    changeNumber()
})
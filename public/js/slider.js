if (typeof availability_silder !== "undefined"){
    // console.log(availability_silder);
    let src = [
        //указать прямые адреса когда будет на сервере 
        // либо ф-цию переписать чтобы if(image.src == src[i]) работал через 'img/main-slider1.jpg'
        'https://ivannikovmn.github.io/20220612b-Decode-portfolio-TomiSolas/img/main-slider1.jpg',
        'https://ivannikovmn.github.io/20220612b-Decode-portfolio-TomiSolas/img/main-slider2.jpg'
        // 'http://127.0.0.1:5500/img/main-slider1.jpg',
        // 'http://127.0.0.1:5500/img/main-slider2.jpg'
        // 'file:///G:/My%20Drive/20221027a%20Full-stack%20JavaScript/20221115a%20Decode/project2.2/img/main-slider1.jpg',
        // 'file:///G:/My%20Drive/20221027a%20Full-stack%20JavaScript/20221115a%20Decode/project2.2/img/main-slider2.jpg'
        // 'img/main-slider1.jpg',
        // 'img/main-slider2.jpg'
    ]

    window.onscroll = function() {scrollSliderFunction()}; 
    function scrollSliderFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById('prev-btn').style.display = 'inline' 
            document.getElementById('next-btn').style.display = 'inline'
        } else {
            document.getElementById('prev-btn').style.display = 'none'
            document.getElementById('next-btn').style.display = 'none'
        }
    }

    // let title = document.getElementsByTagName('img')
    // console.log(title);
    // console.log(title[1]);
    // console.log(title[1].src);
    // console.log(title[1].baseURI);
    // console.log(title[1].outerHTML);
    // title[1].innerHTML = 'Changed'
    // console.log(title[1]);
    // let title2 = document.querySelectorAll('img')
    // console.log(title2);
    // console.log(title2[1].baseURI);
    // // let unique = document.getElementById('image')
    // // console.log(unique);
    // // console.log(image.getAttribute('id'));
    // let name = document.getElementById('image')
    // console.log(name.src);


    // Вариант 1 (через getElementById)
    let image = document.getElementById('image')

    image.src = src[0] // делается первая картинка из массива src в слайдер в index-e
    // console.log('src[0] ' + src[0]); 
    // console.log(image.src);

    function changeImg(change){
        let current = 0;
        for(let i = 0; i < src.length; i++){ 
            if(image.src == src[i]){
                current = i
                //  console.log(src[i]);
            }
            
        }
        // 4 + 1 = 5
        // 0 - 1 = -1
        // console.log(current);
        if(src.length - 1 == current && change == 1){
            image.src = src[0]
        }else if (current == 0 && change == -1){
            image.src = src[src.length - 1]
        }else{
            image.src = src[current + change]
        }
    }
}else{
    // console.log('нет слайдера');
}
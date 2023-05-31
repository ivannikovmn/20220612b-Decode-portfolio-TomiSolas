let src = [
    //указать прямые адреса когда будет на сервере 
    // либо ф-цию переписать чтобы if(image.src == src[i]) работал через 'img/main-slider1.jpg'
    'http://127.0.0.1:5500/img/main-slider1.jpg',
    'http://127.0.0.1:5500//img/main-slider2.jpg'
    // 'file:///G:/My%20Drive/20221027a%20Full-stack%20JavaScript/20221115a%20Decode/project2.2/img/main-slider1.jpg',
    // 'file:///G:/My%20Drive/20221027a%20Full-stack%20JavaScript/20221115a%20Decode/project2.2/img/main-slider2.jpg'
    // 'img/main-slider1.jpg',
    // 'img/main-slider2.jpg'
]
let image = document.getElementById('image')
image.src = src[0]
console.log('src[0] ' + src[0]); 

function changeImg(change){
    let current = 0;
    for(let i = 0; i < src.length; i++){
        if(image.src == src[i]){
             current = i
        }
    }
    // 4 + 1 = 5
    // 0 - 1 = -1
    console.log(current);
    if(src.length - 1 == current && change == 1){
        image.src = src[0]
    }else if (current == 0 && change == -1){
        image.src = src[src.length - 1]
    }else{
        image.src = src[current + change]
    }
}
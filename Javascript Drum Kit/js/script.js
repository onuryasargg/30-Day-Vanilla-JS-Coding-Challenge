function removeTransition(e) {  // html elementine biçimlendirilmiş transition özelliğini kaldırıyor.
    if (e.propertyName !== 'transform') return; // eğer propertyName'i transform değilse fonksiyondan çıkıyor.
    e.target.classList.remove('playing'); // öyleyse 'playing' class'ını html elementinden kaldırıyor.
}

function playSound(e) { // şarkıyı oynatma event'i
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // const tipinde audio değişkeni tanımladık. audio değişkeninin audio html elementi "data-key='e.keycode'" olanın kendisi olduğunu söyledik.
const key = document.querySelector(`div[data-key="${e.keyCode}"]`); // const tipinde key değişkeni tanımladık. div html elementinde "data-key='e.keycode'" olanının kendisi olduğunu söyledik.
if(!audio) return; // eğer data-key tanımlanması olmayan bir değere tıklanırsa fonksiyonu durdurur. 

key.classList.add('playing'); // .key sınıflı html elementlerine 'playing' class'ını ekliyor.
audio.currentTime=0; // çalışmakta olan sesin, çalmaya devam ediyor olsa bile tekrar çalınabilinmesini sağlar.
audio.play(); //sesi oynatıyor
}

const keys = Array.from(document.querySelectorAll('.key')); // .key class'ına ait bütün html elementlerini 'keys' dizisine atadık
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // her bir keys için transitionend eventinin gerçekleştiğini belirtip removeTransition fonksiyonunu çağırıyoruz.
window.addEventListener('keydown', playSound); // keydown eventinin gerçekleştiğini belirtip, playSound fonksiyonunu çağırıyoruz.
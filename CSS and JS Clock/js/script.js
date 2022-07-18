const secondHand = document.querySelector('.second-hand'); // secondHand değişkenini ilk second-Hand css seçicisi ile eşleştirdik.
const minsHand = document.querySelector('.min-hand'); // minsHand değişkenini ilk minsHand css seçicisi ile eşleştirdik.
const hourHand = document.querySelector('.hour-hand'); // hourHand değişkenini ilk hourHand css seçicisi ile eşleştirdik.

function setDate() {
    const now = new Date(); // now isminde Date objesi yarattık. Bu sayede Date objesinin property'lerini kullanabileceğiz.

    const seconds = now.getSeconds(); // seconds'a now objesinde getSeconds() methodu olarak kullanabileceğimizi belirttik.
    const secondsDegrees = ((seconds / 60) * 360) + 90; //  saniye hareketinin, saniyenin ne kadar süresinde, ne kadarlık bir derece harekete yapacağını belirttik.
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // secondHand class'ının transform stil özelliğinin, rotate derecesinin,o anki secondDegrees olduğunu belirttik.

    const mins = now.getMinutes(); // mins'e now objesinde getMinutes() methodu olarak kullanabileceğimizi belirttik.
    const minsDegrees = ((mins/60) * 360) + ((seconds/60)*6) + 90; //  dakika hareketinin, dakika ve saniyenin ne kadar süresinde, ne kadarlık bir derece harekete yapacağını belirttik.
    minsHand.style.transform = `rotate(${minsDegrees}deg)`; // minsHand class'ının transform stil özelliğinin, rotate derecesinin, o anki 'minsDegrees' olduğunu belirttik.

    const hour = now.getHours(); // hour'a now objesinde getHours() methodu olarak kullanabileceğimizi belirttik.
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;  //  saat hareketinin, saat ve dakikanın ne kadar süresinde, ne kadarlık bir derece harekete yapacağını belirttik.
    hourHand.style.transform = `rotate(${hourDegrees}deg)`; // hourHand class'ının transform stil özelliğinin, rotate derecesinin, o anki 'hourDegrees' olduğunu belirttik.
}

setInterval(setDate, 1000); // setDate fonksiyonunun ne kadar sürede bir gerçekleşeceğini belirttik.

setDate(); // setDate() fonksiyonunu çağırdık.
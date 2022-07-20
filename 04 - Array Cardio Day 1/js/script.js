// Dizi çalışmaları için örnek veriler
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];

// array.prototype.filter()
// 1. 1500'lerde doğan mucitlerin listesini filtreliyor.

const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600)) 
console.table(fifteen);

//array.prototype.map()
// 2. Bize, mucitlerin ilk ve son isimlerini bir dizi olarak veriyor.

const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

// array.prototype.sort()
// 3. Mucitleri doğum tarihine göre sırala yaşlıdan, gencine doğru

//const ordered = inventors.sort(function(a,b) {
//    if(a.year > b.year)
//    {
//        return 1;
//    }
//    else{
//        return -1;
//    }
//});

const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.table(ordered);

// array.prototype.reduce()
// 4. Mücitler kaç sene yaşadı

const totalYears = inventors.reduce((total, inventor) => {
return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);

// var totalYears = 0 ;

// for (var i = 0; i < inventors.length; i++)
// {
//     totalYears += inventors[i].year
// }
// console.log(totalYears);




// 5. Mücitleri yaşadıkları yıla göre sırala

const oldest = inventors.sort(function(a,b){
    const lastInventor = a.passed - a.year;
    const nextInventor = b.passed - b.year;
    return lastInventor > nextInventor ? -1 : 1;
    // if(lastInventor > nextInventor){
    //     return -1;
    // }
    // else
    // {
    //     return 1;
    // }
});
console.table(oldest);

// 6. paris'te ki bulvarların isimlerinin herhangi bir yerinde 'de' içerenlerinin listesini oluştur
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');

// //const links = [...category.querySelectorAll('a')];      // farklı bir yöntem ama bir alt satırdaki daha doğru
// const links = Array.from(category.querySelectorAll('a'));

// const de = links
//         .map(link => link.textContent)
//         .filter(streetName => streetName.includes('de'));

// 7. Sıralama Egzersizi
// İnsanları soy ismine göre alfabetik sırala

const alpha = people.sort((lastOne, nextOne) => {
  const [aLast,aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');  
  return aLast > bLast ? 1 : -1;
});
console.log(alpha);

// 7. Egzersizi Güçlendir
// Örneklerin her birini topla
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
    
const transportation = data.reduce(function(obj, item)
{
    if(!obj[item])
    {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});
console.log(transportation);
let vardas = 'Vilius';
console.log(vardas); // Vilius

vardas = 'Lidija';
console.log(vardas); // Lidija

console.log(typeof vardas); // String - primityvus kintamojo tipas


let amzius = 30;
console.log(typeof amzius); // Number - primityvus kintamojo tipas 

let pilnametis = true; // Boolean - primityvus kintamojo tipas
let vaikas = false; 

let tusciareiksme = null; // Null - primityvus kintamojo tipas
console.log (typeof tusciareiksme); // object 

let nepriskirtaReiksme; // Undefined 
console.log(nepriskirtaReiksme); // undefined

console.log(1+1); // 2

let skaicius1 = 1;
let skaicius2 = 1;

console.log(skaicius1 === skaicius2); // true

//tikrinant reiksmes geriausia naudoti ===

// Referenciniai kintamuju tipai

let amziausMasyvas = [10, 20, 30, 40, 50]; // Array - referencinis kintamojo tipas
console.log(amziausMasyvas); // [10, 20, 30, 40, 50]
console.log(typeof amziausMasyvas); // object

console.log(amziausMasyvas[0]); // 10
console.log(amziausMasyvas[1]); // 20
console.log(amziausMasyvas[2]); // 30
console.log(amziausMasyvas[3]); // 40
console.log(amziausMasyvas[4]); // 50
console.log(amziausMasyvas[5]); // undefined

console.log(amziausMasyvas.length); // 5

//masyvai gali buti sudaryti is ivairiu tipu kintamuju

amziausMasyvas.push('60'); // prideda nauja reiksme i masyva
console.log(amziausMasyvas); // [10, 20, 30, 40, 50, '60']
// amziausMasyvas.pop(); // pasalina paskutini masyvo elementa
// amziausMasyvas.shift(); // pasalina pirma masyvo elementa
// amziausMasyvas.unshift(1); // prideda nauja elementa i masyvo pradzia
// amziausMasyvas.splice(2, 1); // pasalina elementa is masyvo pagal nurodyta indexa
// amziausMasyvas.splice(2, 0, 35); // prideda nauja elementa i masyva pagal nurodyta indexa
// amziausMasyvas.splice(2, 1, 35); // pakeicia elementa i masyve pagal nurodyta indexa
amziausMasyvas = [...amziausMasyvas, 70]; // prideda nauja elementa i masyva
console.log(amziausMasyvas); // [10, 20, 30, 40, 50, '60', 70]

//1 === 1 // true
let arr = [1, 2];
let arr2 = [1, 2];

let arr3 = [...arr];
//let arr3 = [1, 2];

console.log(arr === arr2); // false
console.log(arr3 === arr); // flase


// Objektai - referenciniai kintamojo tipai

let asmuo = {
    vardas: 'Vilius',
    amzius: 30,
    gyvenamojiVieta: {
        miestas: 'Vilnius',
        gatve: 'Gedimino pr.'
    }

}

console.log(asmuo); // {vardas: 'Vilius', amzius: 30}
console.log(asmuo.vardas); // Vilius



console.log(document.getElementById('read-more-btn')); // funkcija surasti elementa pagal id

const readMoreBtn = document.getElementById('read-more-btn');
// readMoreBtn.innerHTML = '<strong>Read Less</strong>'; // pakeicia mygtuko teksta su HTML tagais
// readMoreBtn.style.backgroundColor = 'red'; // pakeicia mygtuko fono spalva

console.log(readMoreBtn); // <button id="read-more-btn">Read More</button>


readMoreBtn.innerText = 'Read Less'; // pakeicia mygtuko teksta
readMoreBtn.innerHTML = '<p>Vilius</p>'; // pakeicia mygtuko teksta su HTML tagais
readMoreBtn.style.backgroundColor = 'red'; // pakeicia mygtuko fono spalva
readMoreBtn.style.width = '100px'; // pakeicia mygtuko ploti


let cardContentElements = document.getElementsByClassName('card__content') // suranda elementa pagal klase
// cardContentElement[0].appendChild(newPrimaryBtn); // prideda nauja elementa i esama elementa
console.log(cardContentElements); // <a href="https://google.com" class="btn-primary" id="read-more-btn-new">Read more new</a>

let masyvas = [1, 2, 3, 4];

for (let i = 0; i < cardContentElements.length; i++) {
    let newPrimaryBtn = document.createElement('a'); // sukuria nauja elementa
    newPrimaryBtn.textContent = `Read More ${i}`; // priskiria teksta naujam elementui
    newPrimaryBtn.href = 'https://google.com'; // priskiria href atributa naujam elementui
    newPrimaryBtn.classList.add('btn-primary'); // priskiria klase naujam elementui
    newPrimaryBtn.id = `read-more-btn-new-${i}`; // priskiria id naujam elementui
    console.log(newPrimaryBtn); // <a href="https://google.com" class="btn-primary" id="read-more-btn-new">Read more new</a>
    cardContentElements[i].appendChild(newPrimaryBtn); // prideda nauja elementa i esama elementa
} //printina visus masyvo elementus


// masyvas.forEach((elementas, indexas) => {
//     console.log(`masyvo reiksme -  ${elementas}, ir jo indexas indexas - ${indexas}`);
// }); // printina visus masyvo elementus
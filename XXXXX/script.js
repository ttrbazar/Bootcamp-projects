// let i = 25;

// while (i <= 50 && i > 12) {
//     console.log(i);
//     i++;
// }

// ----------------------------------------------------------------

// let i = 10;

// do {
//     console.log(i);
//     i++;
// } while (i<55);

// ----------------------------------------------------------------

// let username = "asdf";
// let pass = "123";

// let yourUsername = "";
// let yourPass = "";

// do {
//     yourUsername = prompt("Enter your username:");
//     yourPass = prompt("Enter your password:");
// } while (yourUsername !== username || yourPass !== pass);

// console.log("Successfully logged in.");

// ----------------------------------------------------------------

// function search(arr, item) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === item) {
//             result.push(i);
//         }
//     }
//     return result.length ? result : -1;
// }
// console.log(search([1, 3, 5, 7, 5, 9], 51));

// ----------------------------------------------------------------

// const numbers = "31546978813181588888888999998";

// const addMlus = numbers
//   .split('');

// for (let i = 0; i < addMlus.length; i++) {
//   if (addMlus[i] % 2 == 0) {
//     addMlus.splice(i + 1, 0, '-');
//   }

// }

// console.log(addMlus.join(''));

// ----------------------------------------------------------------

// const isPalindrome = textInput => textInput.toLowerCase() === textInput.toLowerCase().split("").reverse().join("");

// console.log(isPalindrome("sdfddddd"));
// console.log(isPalindrome("anna"));

// ----------------------------------------------------------------


// // Setup
// let collection = {
//     2548: {
//         albumTitle: 'Slippery When Wet',
//         artist: 'Bon Jovi',
//         tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//         albumTitle: '1999',
//         artist: 'Prince',
//         tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//         artist: 'Robert Palmer',
//         tracks: []
//     },
//     5439: {
//         albumTitle: 'ABBA Gold'
//     }
// };

// // Only change code below this line
// function updateRecords(object, id, prop, value) {
//     if (prop !== "tracks" && value !== "") {
//         object[id][prop] = value;
//     }
//     if (prop === "tracks") {
//         if (!object[id].hasOwnProperty("tracks")) {
//             object[id].tracks = [];
//             object[id].tracks.push(value);
//         } else {
//             object[id].tracks.push(value);
//         }
//     }
//     if (value === "") {
//         delete object[id][prop];
//     }
//     return object;
// }

// updateRecords(collection, 5439, 'artist', 'ABBA');
// console.log(collection[5439].artist);

// updateRecords(collection, 5439, 'artist', '');
// console.log(collection[5439].artist);

// updateRecords(collection, 5439, 'artist', 'sdfsdfsdfsdf');
// console.log(collection[5439].artist);


// ----------------------------------------------------------------


// const username = 'aaa';
// const pass = '111';

// let yourUserName = prompt('Enter your username');
// let yourPass = prompt('Enteryour pass');

// while (yourUserName !== username || yourPass !== pass) {
//     yourUserName = prompt('Enter your username');
//     yourPass = prompt('Enteryour pass');
// }

// console.log('Successfully logged in');



// ----------------------------------------------------------------


// const forEach = (arr, func) => {
//     for (item of arr) {
//         func(item);
//     }
// }

// forEach([1,2,3,4,5,6,7,8], number => console.log(number * 2));


// ----------------------------------------------------------------

// let car = {
//     year: 2020,
//     make: "Toyota",
//     model: "Camry",
//     color: "White",
//     weight: 3000,
//     autoTransmission: true,
//     fuel: "Renewable"
// }

// for (const [key, value] of Object.entries(car)) {
//     console.log(`${key}: ${value}`);
// }

// console.log("------------------------");

// for (let i in car) {
//     console.log(i + ": " + car[i]);
// }

// for (let i in ["a", "a", "a", "a"]) {
//     console.log(i);
// }

// for (let i in "sdfdddddd") {
//     console.log(i);
// }

// for (let [key, value] of Object.entries("sdsdfsdfsdf")) {
//     console.log(key + " - " + value);
// }

// ----------------------------------------------------------------


// const car = {
//     _year: 2010,
//     make: "Toyota",
//     model: "Camry",
//     color: "White",
//     _weight: '3000',
//     autoTransmission: true,
//     fuel: "Renewable",
//     get year() {
//         console.log("in get");
//         console.log(this._year);
//         if (this._year < 2020) {
//             console.log("in get but false");
//             alert("Error");
//         } else {
//             return this._year;
//         }
//         console.log(this._year);
//     },
//     set year(num) {
//         console.log("in set");
//         console.log("num = " + num);
//         if (num < 2020) {
//             console.log("in set but false")
//             alert("Error");
//         } else {
//             this._year = num;
//         }
//         console.log(this._year);
//     }
// }

// car.year += 2000;

// console.log(car);


// ----------------------------------------------------------------


// const menu = {
//     _yemekTurleri: {
//         baslangic: [],
//         anaYemek: [],
//         tatlilar: []
//     },
//     get baslangic() {
//         return this._yemekTurleri.baslangic;
//     },
//     get anaYemek() {
//         return this._yemekTurleri.anaYemek;
//     },
//     get tatlilar() {
//         return this._yemekTurleri.tatlilar;
//     },
//     set baslangic(cesit) {
//         this._yemekTurleri.baslangic = cesit;
//     },
//     set anaYemek(cesit) {
//         this._yemekTurleri.anaYemek = cesit;
//     },
//     set tatlilar(cesit) {
//         this._yemekTurleri.tatlilar = cesit;
//     },
//     get yemekTurleri() {
//         return {
//             baslangic: this.baslangic,
//             anaYemek: this.anaYemek,
//             tatlilar: this.tatlilar
//         }
//     },
//     yemekEkle(yemekTuru, yemekAdi, yemekFiyati = 0) {
//         const yemek = {
//             adi: yemekAdi,
//             fiyati: yemekFiyati
//         }
//         this._yemekTurleri[yemekTuru].push(yemek);
//     },
//     rastgeleYemek(yemekTuru) {
//         const yemekCesidi = this._yemekTurleri[yemekTuru];
//         const randomIndex = Math.floor(Math.random() * yemekCesidi.length);
//         return yemekCesidi[randomIndex];
//     },
//     olustur() {
//         const rastgeleBaslangic = this.rastgeleYemek('baslangic');
//         const rastgeleAnaYemek = this.rastgeleYemek('anaYemek');
//         const rastgeleTatlilar = this.rastgeleYemek('tatlilar');
//         return [rastgeleBaslangic, rastgeleAnaYemek, rastgeleTatlilar]
//     }
// }

// menu.baslangic = [
//     { adi: 'mercimek corbasi', fiyati: 7 },
//     { adi: 'coban salatasi', fiyati: 5 },
//     { adi: 'ekmek kizartmasi', fiyati: 3 }
// ]

// menu.yemekEkle('anaYemek', 'musakka', 12);
// menu.yemekEkle('anaYemek', 'tas kebabi', 18);
// menu.yemekEkle('anaYemek', 'adana kebap', 15);

// menu.yemekEkle('tatlilar', 'firin sutlac', 7);
// menu.yemekEkle('tatlilar', 'kunefe', 15);
// menu.yemekEkle('tatlilar', 'baklava', 10);


// console.log(menu.yemekTurleri);

// ----------------------------------------------------------------

// const changeColor = function () {
//     this.style.color !== "red" ? this.style.color = "red" : this.style.color = "black";
// }

// document.querySelector("h1").onclick = changeColor;
// document.querySelectorAll("p").forEach(item => item.onclick = changeColor);

// ----------------------------------------------------------------

// class Student {
//     constructor(id, name, surname, email, birthday, class_) {
//         this.ID = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.birthday = birthday;
//         this.class_ = class_
//     }
// }

// const student1 = new Student("e111222", "Aga", "Agayew", "aga@gmail.com", "2000.02.01", "2C");

// console.log(student1);

// ----------------------------------------------------------------


// class Car {
//     constructor(year, weight, make, model, color, isAutoTransmission, fuel) {
//         this._year = year;
//         this._weight = weight;
//         this.make = make;
//         this.model = model;
//         this.color = color;
//         this.isAutoTransmission = isAutoTransmission;
//         this.fuel = fuel;
//     }

//     get year() {
//         return this._year;
//     }

//     set year(num) {
//         this._year = num;
//     }

//     get weight() {
//         return this._weight;
//     }

//     set weight(num) {
//         this._weight = num;
//     }

//     getInfo() {
//         return `This car is a ${this.fuel} ${this.make} built in ${this._year}. The color is ${this.color}. It weighs ${this._weight} kg.`;
//     }
// }

// class Tesla extends Car {
//     constructor(year, weight, model, color, apV) {
//         super(year, weight, "Tesla", model, color, true, "Electric");
//         this.autoPilotVersion = apV;
//     }
// }

// const toyota = new Car("Toyota", "Camry", "White", true, "Renewable");
// const tesla3 = new Tesla(2020, 2500, "3", "Green", "2.0");

// toyota.name = "sdfsdf";
// delete toyota.color;

// console.log(toyota);
// console.log(toyota.color);
// console.log(tesla3.getInfo());


// // ----------------------------------------------------------------


// class SchoolMember {
//     constructor(id, name, surname, email, birthday, isAllergic) {
//         this.ID = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.birthday = birthday;
//         this.isAllergic = isAllergic;
//         this.password = SchoolMember.generatePassword();
//     }

//     static generatePassword() {
//         const lowerCase = "abcdefghijklmnopqrstuvwxyz";
//         const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//         const numbers = "0123456789";
//         const specials = "!@#$%^&*()+=/";
//         const allChars = lowerCase + upperCase + numbers + specials;
//         let pass = "";

//         for (let i=0; i < 8; i++) {
//             pass += allChars[Math.floor(Math.random() * allChars.length)];
//         }

//         return pass;
//     }
// }

// class Student extends SchoolMember {
//     constructor(id, name, surname, email, birthday, isAllergic, class_) {
//         super(id, name, surname, email, birthday, isAllergic);
//         this.class_ = class_;
//     }
// }

// class Teacher extends SchoolMember {
//     constructor(id, name, surname, email, birthday, isAllergic, tel) {
//         super(id, name, surname, email, birthday, isAllergic);
//         this.telephoneNumber = tel;
//     }
// }

// student1 = new Student("e232234", "John", "Smith", "john@gmail.com", "2015.02.03", false, "5C");
// teacher1 = new Teacher("t332211", "Joe", "Doe", "joe@gmail.com", "1975.02.01", true, "+15446665566");

// console.log(student1);
// console.log(teacher1);
// console.log(teacher1.password);


// ----------------------------------------------------------------

const binarySearchOnSortedArrayThatReturnsLoopCount = (arr, num) => {
    // if num not found in arr -> return -1.
    // if num found in arr -> return loop count.

    let counter = 0;
    let indLeft = 0;
    let indRight = arr.length - 1;

    let newLength;
    let indMiddle;

    while (true) {

        counter++;
        newLength = indRight - indLeft + 1;
        indMiddle = Math.floor(newLength / 2) + indLeft + ((newLength % 2 === 0) ? -1 : 0);

        if (num === arr[indMiddle]) {
            break;
        } else {
            if (newLength === 1) break;
            if (num < arr[indMiddle]) {
                indRight = indMiddle - 1;
            } else {
                indLeft = indMiddle + 1;
            }
        }

    }

    return arr[indMiddle] === num ? counter : -1;
}

console.log(binarySearchOnSortedArrayThatReturnsLoopCount([2, 4, 22, 34, 40, 45, 56, 60, 67, 78, 88, 90, 94, 444], 516));


// ----------------------------------------------------------------


function binarySearch(arr, number) {
    let start = 0;
    let end = arr.length - 1;
    let counter = 0;
    while (start <= end) {
        counter++;
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === number) {
            return counter;
        } else if (arr[mid] > number) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}
let arr = [1, 3, 4, 5, 13, 20, 25, 40, 42, 44, 53];
console.log(binarySearch(arr, 25));

// ----------------------------------------------------------------

// 1.CLASS  =  latihan membuat class di js

// class car{
//     constructor(color, price) {
//         this.color = color
//         this.prize= price
//         // this untuk mendapatkan niai yg ada d luar

//     }
         // method
//     getInfo() {
//         return`i have car color is ${this.color}, buy it in ${this.price}`
//     }
// }

// class car1 {
//     constructor(color, merk) {
//         this.color = color
//         this.merk = merk
//     }
        // method
//     getCar() {
//         return`colors my car is ${this.color}, merk is ${this.merk}`
//     }
// }
// console.log(car1)


// ....................................................................



// 2.OBJECT  =  latihan membuat object di dalam class js

// class car{
//     constructor(color, price) {
//         this.color = color
//         this.price= price
//         // this untuk mendapatkan niai yg ada d luar

//     }
//     // method
//     getInfo() {
//         return`i have car color is ${this.color}, buy it in ${this.price}`
//     }
// }

// // class car1 {
// //     constructor(color, merk) {
// //         this.color = color
// //         this.merk = merk
// //     }
// //     getCar() {
// //         return`colors my car is ${this.color}, merk is ${this.merk}`
// //     }
// // }
// +
// const cinta1 = new car("monyet", 50000)
// const cinta2 = new car("jando", 12000)
// const cinta3 = new car("kembang", 512000)
// const cinta4 = new car("wkwkwk", 60512000)
// console.log(cinta1)
// console.log(cinta1.getInfo())
// console.log(cinta2.getInfo())
// console.log(cinta3.getInfo())
// console.log(cinta4.getInfo())



// ..................................................



// 3.inheritance  =  untuk buat class di dalam class js  = dan disini bisa buat parameter baru


// class car{
//     constructor(color, price) {
//         this.color = color
//         this.price= price
//         // this untuk mendapatkan niai yg ada d luar

//     }
//     // method
//     getInfo() {
//         return`i have car color is ${this.color}, buy it in ${this.price}`
//     }
// }
// // class dan parameter baru

// class ElectricCar extends car {
//     constructor(color,price,baterai) {
//         super(color,price)
//         this.baterai = baterai
//     }
//     getInfo() {
//         return`i have car color is ${this.color}, buy it in ${this.price},with baterai kapacity ${this.baterai}`
//     }
// }
// const myElectricCar = new ElectricCar("red",5000, 200)
// console.log(myElectricCar.getInfo())


// ..........................................



// 4.pholimerphism  =  membuat class yg berbeda dan disini class nya bisa menimpa parent nya, dan bisa menimpa method nya

// class kendaraan {
//     drive() {
//         return "kendaraan terbaru nihh"
//     }
// }
// class motor extends kendaraan {
//     drive() {
//         return "motor ini 5 juta"
//     }
// }
// class mobil extends kendaraan {
//     drive() {
//         return "mobil ini 25 juta"
//     }
// }

// const mykendaraan = new kendaraan()
// const mymotor = new kendaraan()
// const mymobil = new kendaraan()

// console.log(mykendaraan.drive())
// console.log(mymotor.drive())
// console.log(mymobil.drive())



// ...................................................


// 4.abstraction  =  untuk menyembunyikan hal hal detail yg ngga kita pedulikan , itu this nya pake pager/tag , cuman bisa d deklarasi ulang lewat return nya.   maaf pake bahasa sendiri :)

// class Car {
//     // kenapa pakai # ? karena di pakai apa bila kita membuat nilai yg bersifat private
//     #name = ""
//     #model = ""
//     #duit = 0


//     constructor(name, model, duit){
//         this.#name = name
//         this.#model = model
//         this.#duit = duit
//     }
//     // getter
//     get name() {
//         return this.#name
//     }

//     get model() {
//         return this.#model
//     }
    
//     get duit() {
//         return this.#duit
//     }
// }
// const myCar = new Car ("toyota", "x", 200)
// console.log(myCar.name)
// console.log(myCar.model)
// console.log(myCar.duit)

// .........................

// encapsulation = ini dengan menggunakan setter yang hanya bisa memiliki satu parameter 


// class Car {
//     // kenapa pakai # ? karena di pakai apa bila kita membuat nilai yg bersifat private
//     #name = ""
//     #model = ""
//     #duit = 0


//     constructor(name, model, duit){
//         this.#name = name
//         this.#model = model
//         this.#duit = duit
//     }
//     // getter
//     get name() {
//         return this.#name
//     }

//     get model() {
//         return this.#model
//     }
    
//     get duit() {
//         return this.#duit
//     }

//     // setter
//     set duit(value) {
//         if (value >= 100) {
//             return console.log("Isi duit gak boleh lebih dari 100")
//         }
//         this.#duit = this.#duit + value
//     }
//     set name(value) {
//         if (value = "") {
//             return console.log("nama harus di isi")
//         }
        
//     }
// }

// let myCar = new Car("Toyota", "X", 10000)
// myCar.duit = 100
// myCar.name = 
// console.log(myCar.name)
// console.log(myCar.duit)



// ..................................................HOV AND CALBACK



// forEach -> loop tidak me-return data
// const data1 = [5, 4, 3, 2, 1]

// const double = data1.forEach((item, index) => {
//     console.log("item : ", item)
//     console.log("index : ", index)
//     return item * 2
// })

// console.log(double)

// const data2 = [2, 4, 6, 8, 10, 12]

// const double = data2.forEach((item, i) => {
//     console.log("cinta :", item)
//     console.log("buta :", i)
//     return item / 2
// })
// console.log(double)





// map -> loop tp dia me-return data
// const data2 = [1, 2, 3, 4, 5]

// const double = data2.map(function (value, index) {
//     return value * 2
// })

// console.log(double)

// filter -> bakal pake buat bikin sistem rating
// const data3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const filteredData = data3.filter((value, index) => value % 2 == 1);

// console.log(filteredData)
// reduce -> menjumlahkan














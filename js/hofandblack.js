// ........................................................................................


// HOF DAN CALLBACK



// HOF

// FOR EACH /BISA MELAKUKAN PER ULANGAN

// contoh1
// const hewan = ["kucing","babi" , "biawak", "komodo"]
// hewan.forEach(function(item) {
//         console.log(item)
// })

// contoh2
// const orang = ["andi", "bayu", "budi", "abel"]
// orang.forEach(function(item,i) {
//         console.log(item)
//         console.log(i)
       
// })

// contoh3
// const food = ["indomie", "burger", "pizza","spagety"]
// food.forEach(function(item,i) {
//         console.log(item)
//         console.log(i)
// })





// MAP / BISA MELAKUKAN PERULANGAN , DAN BISA MENGEMBALIKAN SEBUAH NILAI , JUGA MENAMBAH KAN NILAI/DATA BARAU


// contoh1
// const animals = [1,2,3,4,5]
// const dobel = animals.map((item) => {
//         return item * 3
// })
// console.log(dobel)


// // contoh2
// const number = [1,2,3,4,5,6,7,8,9,10]
// const angka = number.map((item) => {
//         // return item / 2
//         return item * 2
// })
// console.log(angka)


// // contoh3
// const numbers = [9,8,7,6,5,4,3,2,1]
// const nambah = numbers.map((item) => {
//         return item + 5
// })
// console.log(nambah)




// filtered / menyaring value/nilai dari sebuah variabel , bisa menyaring bentuk data contohnya

// const number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// const eventNumber = number.filter((item) => {
//         return item % 2 == 0;
// })
// console.log(eventNumber)

// const number1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// const eventNumber1 = number1.filter((item) => {
//         return item / 2
// })
// console.log(eventNumber1)




// REDUCE / MENJADIKAN SEBUAH VALUA MENJADI SATU DAN ISI VALUE NYA BISA MENJADI BANYAK , KALAU MISALDALAM VALUENYA ITU NUMBER / ANGKA MAKA DIA AKAN MENJUMLAHKANNYA


// contoh1
// const number = [1,2,3,4,5]
// const sum = number.reduce((total,item) => {
//         console.log(total)
//         console.log(item)
//         return total + item
// })
// console.log(sum)



// // CONTOH2
// const angka = [2,4,6,8,10]
// const jumlah = angka.reduce((total, item) => {
//         return total + item
// })
// console.log(jumlah)

// CONTOH3
// 55 itu nilai / value utama (total)
// const kapital = [9,8,7,6,5,4,3,2,1]
// const kapitalis = kapital.reduce((total,item) => {
//         return total + item
// },55  )
// console.log(kapitalis)





// ...............................................................................
// CALLBACK / DIDALAM FUNCTION ADA FUNCTION DAN FUNCTIONN NYA ITU DI PANGGIL MENGGUNAKAN CALLBACK DENGAN PARAMETER NYA PRINT/APA AJAAA. ADA DUA FUNCTION KITA GUNAKAN FUNCTION DUA UNTUK MANGGIL FUNCTION 1


// CONTOH1
// func 1
// function hello() {
//     console.log("hello world")
// }

// // func 2
// function good() {
//     console.log("goodbye")
// }

// // func callback nya..

// function print(callback) {
//     callback()
// }

// print(hello)
// print(good)



// // CONTOH2

// function aku() {
//     console.log("sayang")
// }

// function kamu() {
//     console.log("cinta")
// }

// function kita(manggilLagi) {
//    manggilLagi()
// }

// kita(aku)
// kita(kamu)

"use strict"

// const name = `Генератор защитного поля`;

// const price = 1000
// price = 2000;


// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);


// const total = 100;
// const ordered = 500;

// if (total<ordered) {
//     alert("На складе недостаточно товаров!");
// } else {
//     alert("Заказ оформлен, с вами свяжется менеджер");
// }

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

// const password = prompt("Введите пароль")

// if (!password) {
//     message = "Отменено пользователем!"
// } else {
//     if (ADMIN_PASSWORD === password) {
//         message = "Добро пожаловать!"
//     } else {
//         message = "Доступ запрещен, неверный пароль!"
//     } 
// }
// alert(message)

// const credits = 23580;

// const pricePerDroid = 3000;

// const message = prompt("Какое вам нужно каличество дроидов");

// if (!message) {
//     console.log('Отменено пользователем!');
    
// } else {
//     const totalPrice = pricePerDroid*Number(message)
//     if (credits<totalPrice){
//         console.log("Недостаточно средств на счету!");
        
//     } else {
//     console.log(`Вы купили ${message} дроидов, на счету осталось ${credits-totalPrice} кредитов.`);
    
        
//     }
    
    
// }

// const country = prompt("Введите вашу страну")

// let price;

// switch (country.toUpperCase()) {
//     case "КИТАЙ": 
//     price = 100
        
//     break;
//     case "АВСТРАЛИЯ":
//     price = 170
        
//     break;
//      case "ЧИЛИ":
//     price = 250
        
//      break;
//      case "ИНДИЯ":
//     price = 80
        
//      break;
//      case "ЯМАЙКА":
//     price = 120
        
//         break;
        
//     default: 
//     alert("В вашей стране доставка недоступна")
//         break;
// }
// if (price){
//     alert(`Доставка в ${country} будет стоить ${price} кредитов`)
// }

let input;
let total = 0;

do {
    input = prompt("Введите число")
    total+=Number(input)
} while (input);
console.log(total);
